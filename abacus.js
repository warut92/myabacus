let up_abacus_num = 0
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
        // document.getElementById(`beadD_${pos - 4}`).src = "./img/bead.png";
        // document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        // document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
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
        // document.getElementById(`beadD_${pos - 4}`).src = "./img/bead.png";
        // document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
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
        document.getElementById(`beadD_${pos - 4}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
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
        document.getElementById(`beadD_${pos - 4}`).src = "./img/bead.png";
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
  document.getElementById(`bead_${pos - 1}`).src = "./img/bead.png";
  document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
  up_abacus_num = up_abacus_num + val
}

function moveUp(pos, val) {
  document.getElementById(`bead_${pos + 1}`).src = "./img/bead.png";
  document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
  up_abacus_num = up_abacus_num + val
}

function calculate() {
  document.getElementById('abacusNum').innerHTML = up_abacus_num + down_abacus_num_1 + down_abacus_num_2 + down_abacus_num_3 + down_abacus_num_4 + down_abacus_num_5
}

//random
let random1 = 0
let random2 = 0

function startRandom() {
  random1 = Math.floor(Math.random() * 100);
  random2 = Math.floor(Math.random() * 100);
  document.getElementById("random_1").innerHTML = random1
  document.getElementById("random_2").innerHTML = random2
}
startRandom()

document.addEventListener('click', function(e) {
  calculate()
  console.log("calculate!");
  let plusRandom = random1 + random2
  console.log('PLUSRANDOM', plusRandom)
  if (plusRandom === up_abacus_num + down_abacus_num_1 + down_abacus_num_2 + down_abacus_num_3 + down_abacus_num_4 + down_abacus_num_5) {
    alert("ถวกตร้วมมมมม!")
    windows.reload
  }
});
