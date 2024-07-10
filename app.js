let gameSeq=[];
let userSeq=[];

let btns =["orange", "pink", "blue", "teal"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game started");
        started = true;

        levelup();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `LEVEL ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx) {
    // console.log("curr level :",level);
    

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelup,1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score Was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "#965ef7";
        },150);
        reset();
    }
}

function btnPress() {
    // console.log(this)
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
