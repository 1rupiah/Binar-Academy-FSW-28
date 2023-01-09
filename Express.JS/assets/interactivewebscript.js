// Player
let rockPlayer = document.getElementById("rockPlayer");
let paperPlayer = document.getElementById("paperPlayer");
let scissorPlayer = document.getElementById("scissorPlayer");
let rockImagePlayer = document.getElementById("rockImagePlayer");
let paperImagePlayer = document.getElementById("paperImagePlayer");
let scissorImagePlayer = document.getElementById("scissorImagePlayer");

// Bridge
let justVS = document.querySelector(".justVS");
let vsText = document.querySelector(".vsText");
let refreshPage = document.getElementById("refreshPage");

// Computer
let rockImageComputer = document.getElementById("rockImageComputer");
let paperImageComputer = document.getElementById("paperImageComputer");
let scissorImageComputer = document.getElementById("scissorImageComputer");

class Player {
  rock() {rockPlayer.addEventListener("click", () => {console.log(rockPlayer.id)
    let hands = [rockComputer, paperComputer, scissorComputer];
    let hand = hands[Math.floor(Math.random()*hands.length)].id;

    rockImagePlayer.style.background = "#C4C4C4";

    function set(duration1, duration2, duration3) {
      setTimeout(() => {rockComputer.style.background = "#C4C4C4";setTimeout(() => {rockComputer.style.background = "";}, 300)}, duration1)
      setTimeout(() => {paperComputer.style.background = "#C4C4C4";setTimeout(() => {paperComputer.style.background = "";}, 300)}, duration2)
      setTimeout(() => {scissorComputer.style.background = "#C4C4C4";setTimeout(() => {scissorComputer.style.background = "";}, 300)}, duration3)
    }

    for(let i = 0; i < 10; i++) {
      if(i === 1) {set(300, 600, 900);} 
      else if(i === 2) {set(1200, 1500, 1800);} 
      else if(i === 3) {set(2100, 2400, 2700);} 
      else if(i === 4) {set(3000, 3300, 3600);}
    }

    setTimeout(() => {rockImageComputer.style.background = "#C4C4C4";
      setTimeout(() => {
        if(hand === "rockComputer") {
          justVS.className = "resultDraw"; 
          vsText.innerHTML = "GAME <br> DRAW"; 
          rockImageComputer.style.background = "#C4C4C4"; 
          console.log("Game Draw");
          setTimeout(() => {
            if(confirm("Play Again?")){
              history.go(0);
            } else {
              return;
            }
          }, 1500)
        } else {rockImageComputer.style.background = "";}
      }, 300)
    }, 3900)

    if(hand === "rockComputer") {return;}
    console.log(hand)

    setTimeout(() => {paperImageComputer.style.background = "#C4C4C4";
      setTimeout(() => {
        if(hand === "paperComputer") {
          justVS.className = "resultComWin"; 
          vsText.innerHTML = "COMPUTER <br> WIN"; 
          paperImageComputer.style.background = "#C4C4C4"; 
          console.log("Computer Win");
          setTimeout(() => {
            if(confirm("Play Again?")) {
              history.go(0);
            } else {
              return;
            }
          }, 1500)
        } else {paperImageComputer.style.background = "";}
      }, 300)
    }, 4200)

    if(hand === "paperComputer") {return;}

    setTimeout(() => {scissorImageComputer.style.background = "#C4C4C4";
      setTimeout(() => {
        if(hand === "scissorComputer") {
          justVS.className = "resultPlayerWin"; 
          vsText.innerHTML = "YOU <br> WIN"; 
          scissorImageComputer.style.background = "#C4C4C4"; 
          console.log("Player Win");
          setTimeout(() => {
            if(confirm("Play Again?")) {
              history.go(0);
            } else {
              return;
            }}, 1500
          )
        } else {scissorImageComputer.style.background = "";}
      }, 300)
    }, 4500)
  })}

  paper() {paperPlayer.addEventListener("click", () => {console.log(paperPlayer.id)
    let hands = [rockComputer, paperComputer, scissorComputer];
    let hand = hands[Math.floor(Math.random()*hands.length)].id;
    
    paperImagePlayer.style.background = "#C4C4C4";

    function set(duration1, duration2, duration3) {
      setTimeout(() => {rockComputer.style.background = "#C4C4C4";setTimeout(() => {rockComputer.style.background = "";}, 300)}, duration1)
      setTimeout(() => {paperComputer.style.background = "#C4C4C4";setTimeout(() => {paperComputer.style.background = "";}, 300)}, duration2)
      setTimeout(() => {scissorComputer.style.background = "#C4C4C4";setTimeout(() => {scissorComputer.style.background = "";}, 300)}, duration3)
    }

    for(let i = 0; i < 10; i++) {
      if(i === 1) {set(300, 600, 900);} 
      else if(i === 2) {set(1200, 1500, 1800);} 
      else if(i === 3) {set(2100, 2400, 2700);} 
      else if(i === 4) {set(3000, 3300, 3600);}
    }

    setTimeout(() => {rockImageComputer.style.background = "#C4C4C4";
      setTimeout(() => {
        if(hand === "rockComputer") {
          justVS.className = "resultPlayerWin"; 
          vsText.innerHTML = "YOU <br> WIN"; 
          scissorImageComputer.style.background = "#C4C4C4"; 
          console.log("Player Win");
          setTimeout(() => {
            if(confirm("Play Again?")){
              history.go(0);
            } else {
              return;
            }
          }, 1500)
        } else {rockImageComputer.style.background = "";}
      }, 300)
    }, 3900)

    if(hand === "rockComputer") {return;}

    setTimeout(() => {paperImageComputer.style.background = "#C4C4C4";
      setTimeout(() => {
        if(hand === "paperComputer") {
          justVS.className = "resultDraw"; 
          vsText.innerHTML = "GAME <br> DRAW"; 
          rockImageComputer.style.background = "#C4C4C4"; 
          console.log("Game Draw");
          setTimeout(() => {
            if(confirm("Play Again?")) {
              history.go(0);
            } else {
              return;
            }
          }, 1500)
        } else {paperImageComputer.style.background = "";}
      }, 300)
    }, 4200)

    if(hand === "paperComputer") {return;}

    setTimeout(() => {scissorImageComputer.style.background = "#C4C4C4";
      setTimeout(() => {
        if(hand === "scissorComputer") {
          justVS.className = "resultComWin"; 
          vsText.innerHTML = "COMPUTER <br> WIN"; 
          paperImageComputer.style.background = "#C4C4C4"; 
          console.log("Computer Win");
          setTimeout(() => {
            if(confirm("Play Again?")) {
              history.go(0);
            } else {
              return;
            }
          }, 1500)
        } else {scissorImageComputer.style.background = "";}
      }, 300)
    }, 4500)
  })}

  scissor() {scissorPlayer.addEventListener("click", () => {console.log(scissorPlayer.id)
    let hands = [rockComputer, paperComputer, scissorComputer];
    let hand = hands[Math.floor(Math.random()*hands.length)].id;

    scissorPlayer.style.background = "#C4C4C4";

    function set(duration1, duration2, duration3) {
      setTimeout(() => {rockComputer.style.background = "#C4C4C4";setTimeout(() => {rockComputer.style.background = "";}, 300)}, duration1)
      setTimeout(() => {paperComputer.style.background = "#C4C4C4";setTimeout(() => {paperComputer.style.background = "";}, 300)}, duration2)
      setTimeout(() => {scissorComputer.style.background = "#C4C4C4";setTimeout(() => {scissorComputer.style.background = "";}, 300)}, duration3)
    }

    for(let i = 0; i < 10; i++) {
      if(i === 1) {set(300, 600, 900);} 
      else if(i === 2) {set(1200, 1500, 1800);} 
      else if(i === 3) {set(2100, 2400, 2700);} 
      else if(i === 4) {set(3000, 3300, 3600);}
    }

    setTimeout(() => {rockImageComputer.style.background = "#C4C4C4";
      setTimeout(() => {
        if(hand === "rockComputer") {
          justVS.className = "resultDraw"; 
          vsText.innerHTML = "COMPUTER <br> WIN"; 
          rockImageComputer.style.background = "#C4C4C4"; 
          console.log("Computer Win");
          setTimeout(() => {
            if(confirm("Play Again?")){
              history.go(0);
            } else {
              return;
            }
          }, 1500)
        } else {rockImageComputer.style.background = "";}
      }, 300)
    }, 3900)

    if(hand === "rockComputer") {return;}
    console.log(hand)

    setTimeout(() => {paperImageComputer.style.background = "#C4C4C4";
      setTimeout(() => {
        if(hand === "paperComputer") {
          justVS.className = "resultComWin"; 
          vsText.innerHTML = "YOU <br> WIN"; 
          paperImageComputer.style.background = "#C4C4C4"; 
          console.log("Player Win");
          setTimeout(() => {
            if(confirm("Play Again?")) {
              history.go(0);
            } else {
              return;
            }
          }, 1500)
        } else {paperImageComputer.style.background = "";}
      }, 300)
    }, 4200)

    if(hand === "paperComputer") {return;}

    setTimeout(() => {scissorImageComputer.style.background = "#C4C4C4";
      setTimeout(() => {
        if(hand === "comScissor") {
          justVS.className = "resultPlayerWin"; 
          vsText.innerHTML = "GAME <br> DRAW"; 
          scissorImageComputer.style.background = "#C4C4C4"; 
          console.log("Game Draw");
          setTimeout(() => {
            if(confirm("Play Again?")) {
              history.go(0);
            } else {
              return;
            }
          }, 1500)
        } else {scissorImageComputer.style.background = "";}
      }, 300)
    }, 4500)
  })}

  playAgain() {refreshPage.addEventListener("click", () => {history.go(0);})}
}

// New Game
let main = new Player(); 

main.rock(); 
main.paper(); 
main.scissor(); 
main.playAgain();