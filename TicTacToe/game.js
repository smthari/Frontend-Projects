let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector("#again");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnx = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const showWinner = (wplayer) => {
    msg.innerText = `Congratulations! Winner: ${wplayer}`;
    msgContainer.classList.remove("hide");
}

const winner = () => {
    for(pattern of winPatterns){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
                showWinner(p1);
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.textContent == "") {
            if (turnx) {
                 box.textContent = "X";
                 turnx = false;
            }
            else {
                box.textContent = "O";
                turnx = true;
            }
            box.disabled=true;

            winner();
        }
    })
})