let up_abacus_num_1 = 0
let up_abacus_num_2 = 0
let up_abacus_num_3 = 0
let up_abacus_num_4 = 0
let up_abacus_num_5 = 0
let down_abacus_num_1 = 0
let down_abacus_num_2 = 0
let down_abacus_num_3 = 0
let down_abacus_num_4 = 0
let down_abacus_num_5 = 0

  // down frame
  function moveBead(row, pos, val) {
    console.log("position",pos,"value",val);
    if (document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png") {
      down_abacus_num = 0
      console.log("set 0");
    }
    ///////////////////////////////////////////////////////////////////////////////////////
    //if (row === 1) {
      if (pos === 1) {
        document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 4}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_1 = 0
      }

      else if (pos === 2) {
        console.log(pos);
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_1 = pos - 1
        //if bead 4 white
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png";
        }
        //if bead 5 white
        if (document.getElementById(`beadD_${pos + 3}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png"
        }
      }

      else if (pos === 3) {
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_1 = pos - 1
        //if bead 4 white
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        //if bead 5 white
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png"
        }
      }

      else if (pos === 4) {
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_1 = pos - 1
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
      }

      else if (pos === 5) {
        document.getElementById(`beadD_${pos - 4}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_1 = pos - 1
      }
      //////////////////////////////////////////////////////////////////////////////////////
      else if (pos === 6) {
        document.getElementById(`beadD_${pos + 4}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_2 = 0
      }
      else if (pos === 7) {
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_2 = pos + 3
        //if bead 4 white
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        //
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png"
        }
        //if bead 5 white
        if (document.getElementById(`beadD_${pos + 3}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png"
        }
      }
      else if (pos === 8) {
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_2 = pos + 12
        //if bead 4 white
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        //if bead 5 white
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png"
        }
      }
      else if (pos === 9) {
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_2 = pos + 21
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
      }
      else if (pos === 10) {
        document.getElementById(`beadD_${pos - 4}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_2 = pos + 30
        // if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
        //   document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        // }
      }
      ///////////////////////////////////////////////////////////////////////////
      else if (pos === 11) {
        document.getElementById(`beadD_${pos + 4}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_3 = 0
      }
      else if (pos === 12) {
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_3 = pos + 88
        //if bead 4 white
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png";
        }
        //if bead 5 white
        if (document.getElementById(`beadD_${pos + 3}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 3}`).src = "./img/bead.png"
        }
      }
      else if (pos === 13) {
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_3 = pos + 187
        //if bead 4 white
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
        //if bead 5 white
        if (document.getElementById(`beadD_${pos + 2}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 2}`).src = "./img/bead.png"
        }
      }
      else if (pos === 14) {
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_3 = pos + 286
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
      }
      else if (pos === 15) {
        document.getElementById(`beadD_${pos - 4}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        down_abacus_num_3 = pos + 385
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
      }
  }


// up frame
function moveDown(pos, val) {
  if (pos === 2) {
    if (document.getElementById(`bead_${pos}`).src === "./img/bead_white.png") {
      up_abacus_num_1 = 0
    }
    document.getElementById(`bead_${pos - 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    up_abacus_num_1 = 5
  }
  else if (pos === 4) {
    document.getElementById(`bead_${pos - 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    up_abacus_num_2 = 50
  }
  else if (pos === 6) {
    document.getElementById(`bead_${pos - 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    up_abacus_num_3 = 500
  }
  else if (pos === 8) {
    document.getElementById(`bead_${pos - 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    up_abacus_num_4 = 5000
  }
  else if (pos === 10) {
    document.getElementById(`bead_${pos - 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    up_abacus_num_5 = 50000
  }

}

function moveUp(pos, val) {
  if (pos === 1) {
    document.getElementById(`bead_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    up_abacus_num_1 = 0
  }
  else if (pos === 3) {
    document.getElementById(`bead_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    up_abacus_num_2 = 0
  }
  else if (pos === 5) {
    document.getElementById(`bead_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    up_abacus_num_3 = 0
  }
  else if (pos === 7) {
    document.getElementById(`bead_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    up_abacus_num_4 = 0
  }
  else if (pos === 9) {
    document.getElementById(`bead_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    up_abacus_num_5 = 0
  }
}

let total_up_abacus, total_down_abacus
function calculate() {
  total_up_abacus = up_abacus_num_1 + up_abacus_num_2 + up_abacus_num_3 + up_abacus_num_4 + up_abacus_num_5
  total_down_abacus = down_abacus_num_1 + down_abacus_num_2 + down_abacus_num_3 + down_abacus_num_4 + down_abacus_num_5

  document.getElementById('abacusNum').innerHTML = total_up_abacus + total_down_abacus
}

//random
let random1 = 0
let random2 = 0

function startRandom() {
  random1 = Math.floor(Math.random() * 100);
  random2 = Math.floor(Math.random() * 100);
  document.getElementById("random_1").innerHTML = random1
  document.getElementById("random_2").innerHTML = random2
  let nodeList = document.querySelectorAll('span');
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.color = "white";
    }

}
startRandom()
// sound
var sound = document.getElementById("myAudio");
document.addEventListener('touchstart', function(e) {
  calculate()
  let plusRandom = random1 + random2
  console.log('PLUSRANDOM', plusRandom)
  if (plusRandom === total_up_abacus + total_down_abacus) {
    let nodeList = document.querySelectorAll('span');
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "yellow";
      }
    sound.play()
    displayButton()
  }
});

function displayButton() {
  let btn = document.querySelector('button');
  if (btn.style.display === "none") {
    btn.style.display = "block"
  } else {
    btn.style.display = "none"

  }
}

// function resetAbacus() {
//     document.getElementById('bead_1').src = "./img/bead_white.png";
//     document.getElementById('bead_3').src = "./img/bead_white.png";
//     document.getElementById('bead_5').src = "./img/bead_white.png";
//     document.getElementById('bead_7').src = "./img/bead_white.png";
//     document.getElementById('bead_9').src = "./img/bead_white.png";
//
//     document.getElementById('bead_2').src = "./img/bead.png";
//     document.getElementById('bead_4').src = "./img/bead.png";
//     document.getElementById('bead_6').src = "./img/bead.png";
//     document.getElementById('bead_8').src = "./img/bead.png";
//     document.getElementById('bead_10').src = "./img/bead.png";
//
//     document.getElementById('beadD_1').src = "./img/bead_white.png";
//     document.getElementById('beadD_6').src = "./img/bead_white.png";
//     document.getElementById('beadD_11').src = "./img/bead_white.png";
//
//     document.getElementById('beadD_2').src = "./img/bead.png";
//     document.getElementById('beadD_3').src = "./img/bead.png";
//     document.getElementById('beadD_4').src = "./img/bead.png";
//     document.getElementById('beadD_5').src = "./img/bead.png";
//     document.getElementById('beadD_7').src = "./img/bead.png";
//     document.getElementById('beadD_8').src = "./img/bead.png";
//     document.getElementById('beadD_9').src = "./img/bead.png";
//     document.getElementById('beadD_10').src = "./img/bead.png";
//     document.getElementById('beadD_12').src = "./img/bead.png";
//     document.getElementById('beadD_13').src = "./img/bead.png";
//     document.getElementById('beadD_14').src = "./img/bead.png";
//     document.getElementById('beadD_15').src = "./img/bead.png";
//
// }
