//set var
let upper_abacus_num_1 = 0
let upper_abacus_num_2 = 0
let upper_abacus_num_3 = 0
let upper_abacus_num_4 = 0
let upper_abacus_num_5 = 0
let lower_abacus_num_1 = 0
let lower_abacus_num_2 = 0
let lower_abacus_num_3 = 0
let lower_abacus_num_4 = 0
let lower_abacus_num_5 = 0
let total_upper_abacus, total_lower_abacus
let total_abacus
let touchTimes = 0

// sound
var sound_succes = new Audio('sound.mp3');

function clearBeads() {
  abacusSumSetZero()
  //bead down
  //(ให้ i เท่ากับ 1; i น้อยกว่าหรือเท่ากับ 21; i เพิ่ม 5)
  for (let i = 1; i <= 21; i += 5) {
    document.getElementById(`beadD_${i}`).src = "./img/bead_white.png";
    for (let i = 1; i <= 25; i++) {
      if (i === 1 || i === 6 || i === 11 || i === 16 || i === 21) {
          continue;
      }
      document.getElementById(`beadD_${i}`).src = "./img/bead.png";
  }
  //bead up
  for (let i = 1; i <= 10; i += 2) {
    document.getElementById(`beadU_${i}`).src = "./img/bead_white.png";
  }
  for (let i = 2; i <= 10; i += 2) {
    document.getElementById(`beadU_${i}`).src = "./img/bead.png";
  }
}
}

  // lower frame
  function moveBead(pos, val) {
    //ONE/////////////////////////////////////////////////////////////////////////////////////
      if (pos === 1) {
        document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 4}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_1 = 0
      }

      else if (pos === 2) {
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_1 = val
        //if bead 3 white than bead 3 color
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        //if bead 4 white than bead 4 color
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png";
        }
        //if bead 5 white than bead 5 color
        if (document.getElementById(`beadD_${pos + 3}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png"
        }
      }

      else if (pos === 3) {
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_1 = val
        //if bead 4 white than bead 4 color
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        //if bead 5 white than bead 5 color
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png"
        }
      }

      else if (pos === 4) {
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_1 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
      }

      else if (pos === 5) {
        document.getElementById(`beadD_${pos - 4}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_1 = val
      }
      //-10-////////////////////////////////////////////////////////////////////////////////////
      else if (pos === 6) {
        document.getElementById(`beadD_${pos + 4}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_2 = 0
      }

      else if (pos === 7) {
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_2 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png"
        }
        if (document.getElementById(`beadD_${pos + 3}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png"
        }
      }

      else if (pos === 8) {
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_2 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png"
        }
      }

      else if (pos === 9) {
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_2 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
      }

      else if (pos === 10) {
        document.getElementById(`beadD_${pos - 4}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_2 = val
        // if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
        //   document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        // }
      }
      //-100-/////////////////////////////////////////////////////////////////////////
      else if (pos === 11) {
        document.getElementById(`beadD_${pos + 4}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_3 = 0
      }

      else if (pos === 12) {
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_3 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png";
        }
        if (document.getElementById(`beadD_${pos + 3}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png"
        }
      }

      else if (pos === 13) {
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_3 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png"
        }
      }

      else if (pos === 14) {
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_3 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
      }

      else if (pos === 15) {
        document.getElementById(`beadD_${pos - 4}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_3 = val
        // if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
        //   document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        // }
      }
      //-1000-/////////////////////////////////////////////////////////////////////////
      else if (pos === 16) {
        document.getElementById(`beadD_${pos + 4}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_4 = 0
      }

      else if (pos === 17) {
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_4 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png";
        }
        if (document.getElementById(`beadD_${pos + 3}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png"
        }
      }

      else if (pos === 18) {
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_4 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png"
        }
      }

      else if (pos === 19) {
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_4 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
      }

      else if (pos === 20) {
        document.getElementById(`beadD_${pos - 4}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_4 = val
        // if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
        //   document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        // }
      }
      //-10000-/////////////////////////////////////////////////////////////////////////
      else if (pos === 21) {
        document.getElementById(`beadD_${pos + 4}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_5 = 0
      }

      else if (pos === 22) {
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_5 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png";
        }
        if (document.getElementById(`beadD_${pos + 3}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png"
        }
      }

      else if (pos === 23) {
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_5 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png"
        }
      }

      else if (pos === 24) {
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_5 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
      }

      else if (pos === 25) {
        document.getElementById(`beadD_${pos - 4}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead_yellow.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_5 = val
        // if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
        //   document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        // }
      }
  }

// upper frame
function moveDown(pos, val) {
  if (pos === 2) {
    if (document.getElementById(`beadU_${pos}`).src === "./img/bead_white.png") {
      upper_abacus_num_1 = val - val
    }
    document.getElementById(`beadU_${pos - 1}`).src = "./img/bead_yellow.png";
    document.getElementById(`beadU_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_1 = val
  }
  else if (pos === 4) {
    document.getElementById(`beadU_${pos - 1}`).src = "./img/bead_yellow.png";
    document.getElementById(`beadU_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_2 = val
  }
  else if (pos === 6) {
    document.getElementById(`beadU_${pos - 1}`).src = "./img/bead_yellow.png";
    document.getElementById(`beadU_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_3 = val
  }
  else if (pos === 8) {
    document.getElementById(`beadU_${pos - 1}`).src = "./img/bead_yellow.png";
    document.getElementById(`beadU_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_4 = val
  }
  else if (pos === 10) {
    document.getElementById(`beadU_${pos - 1}`).src = "./img/bead_yellow.png";
    document.getElementById(`beadU_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_5 = val
  }

}

function moveUp(pos, val) {
  if (pos === 1) {
    document.getElementById(`beadU_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`beadU_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_1 = val
  }
  else if (pos === 3) {
    document.getElementById(`beadU_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`beadU_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_2 = val
  }
  else if (pos === 5) {
    document.getElementById(`beadU_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`beadU_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_3 = val
  }
  else if (pos === 7) {
    document.getElementById(`beadU_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`beadU_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_4 = val
  }
  else if (pos === 9) {
    document.getElementById(`beadU_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`beadU_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_5 = val
  }
}

function abacusSumSetZero() {
  upper_abacus_num_1 = 0
  upper_abacus_num_2 = 0
  upper_abacus_num_3 = 0
  upper_abacus_num_4 = 0
  upper_abacus_num_5 = 0

  lower_abacus_num_1 = 0
  lower_abacus_num_2 = 0
  lower_abacus_num_3 = 0
  lower_abacus_num_4 = 0
  lower_abacus_num_5 = 0

document.getElementById('abacusNum').innerHTML = "0"
}

function calculate() {
    total_upper_abacus = upper_abacus_num_1 + upper_abacus_num_2 + upper_abacus_num_3 + upper_abacus_num_4 + upper_abacus_num_5
    total_lower_abacus = lower_abacus_num_1 + lower_abacus_num_2 + lower_abacus_num_3 + lower_abacus_num_4 + lower_abacus_num_5
    total_abacus = total_upper_abacus + total_lower_abacus
    document.getElementById('abacusNum').innerHTML = total_abacus
  }
  
let clearBtn = document.getElementById("clearBeads")
clearBtn.addEventListener('touchstart', (e) => {
  abacusSumSetZero()
})
//var for lesson
//lesson

//elems
let chapter = 0
let answer
let answerNumber = 0
let num_1 = document.getElementById("num_1")
let num_2 = document.getElementById("num_2")

function startLesson() {
  clearBeads()
  chapter++
  console.log("chapter", chapter);
  if (chapter >= 20) {
    document.getElementById(`beadD_${8}`).src = "./img/bead_red.png";
    document.getElementById(`beadD_${7}`).src = "./img/bead_red.png";
    if (chapter >= 21) {
      document.getElementById(`beadD_${chapter - 19}`).src = "./img/bead_red.png";
    }
    num_1.innerHTML = chapter
    answerNumber = Number(num_1.innerHTML) 
    return
  }
  if (chapter >= 15) {
    console.log("15");
    document.getElementById(`beadD_${7}`).src = "./img/bead_red.png";
    document.getElementById(`beadU_${2}`).src = "./img/bead_red.png";
    if (chapter > 15) {
      document.getElementById(`beadD_${chapter-14}`).src = "./img/bead_red.png";
    }
    num_1.innerHTML = chapter
    answerNumber = Number(num_1.innerHTML) 
    return
  }
  if (chapter === 10) {
    console.log("10");
    document.getElementById(`beadD_${chapter - 3}`).src = "./img/bead_red.png";
    num_1.innerHTML = chapter
    answerNumber = Number(num_1.innerHTML) 
    return
  }
  if (chapter >= 10) {
    console.log(">10");
    document.getElementById(`beadD_${7}`).src = "./img/bead_red.png";
    document.getElementById(`beadD_${chapter - 9}`).src = "./img/bead_red.png";
    num_1.innerHTML = chapter
    answerNumber = Number(num_1.innerHTML)  
    return
  }
  if (chapter === 5) {
    console.log("5");
    document.getElementById(`beadU_${2}`).src = "./img/bead_red.png";
    num_1.innerHTML = chapter
    answerNumber = Number(num_1.innerHTML) 
  }
  if (chapter >= 6) {
    console.log("6");
    document.getElementById(`beadU_${2}`).src = "./img/bead_red.png";
    document.getElementById(`beadD_${chapter - 4}`).src = "./img/bead_red.png";
    num_1.innerHTML = chapter
    answerNumber = Number(num_1.innerHTML) 
  }
  if (chapter <= 4) {
    console.log("4");
    document.getElementById(`beadD_${chapter + 1}`).src = "./img/bead_red.png";
    num_1.innerHTML = chapter
    answerNumber = Number(num_1.innerHTML) 
  }
}
startLesson()

//check answer
let abacusDiv = document.getElementById("abacusFrame")
abacusDiv.addEventListener('touchstart', function(e) {
  calculate()
  checkCalculation()
  touchTimes++
  document.getElementById("touchTimes").innerHTML = touchTimes

})

function checkCalculation() {
  console.log("ckeck");
  console.log(answerNumber);
  console.log(total_abacus);
  if (answerNumber === total_abacus) {
    console.log("ok");
    sound_succes.play()
  }
}