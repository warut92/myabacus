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

// sound
var sound_succes = document.getElementById("myAudioSucces");

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
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
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
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
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
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_1 = val
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
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
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
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
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
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_2 = val
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
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
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
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
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
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_3 = val
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
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
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
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
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
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_4 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
      }

      else if (pos === 20) {
        document.getElementById(`beadD_${pos - 4}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
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
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
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
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
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
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos}`).src = "./img/bead_white.png";
        lower_abacus_num_5 = val
        if (document.getElementById(`beadD_${pos + 1}`).src = "./img/bead_white.png") {
          document.getElementById(`beadD_${pos + 1}`).src = "./img/bead.png";
        }
      }

      else if (pos === 25) {
        document.getElementById(`beadD_${pos - 4}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 3}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 2}`).src = "./img/bead.png";
        document.getElementById(`beadD_${pos - 1}`).src = "./img/bead.png";
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
    if (document.getElementById(`bead_${pos}`).src === "./img/bead_white.png") {
      upper_abacus_num_1 = val - val
    }
    document.getElementById(`bead_${pos - 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_1 = val
  }
  else if (pos === 4) {
    document.getElementById(`bead_${pos - 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_2 = val
  }
  else if (pos === 6) {
    document.getElementById(`bead_${pos - 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_3 = val
  }
  else if (pos === 8) {
    document.getElementById(`bead_${pos - 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_4 = val
  }
  else if (pos === 10) {
    document.getElementById(`bead_${pos - 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_5 = val
  }

}

function moveUp(pos, val) {
  if (pos === 1) {
    document.getElementById(`bead_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_1 = val
  }
  else if (pos === 3) {
    document.getElementById(`bead_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_2 = val
  }
  else if (pos === 5) {
    document.getElementById(`bead_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_3 = val
  }
  else if (pos === 7) {
    document.getElementById(`bead_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_4 = val
  }
  else if (pos === 9) {
    document.getElementById(`bead_${pos + 1}`).src = "./img/bead.png";
    document.getElementById(`bead_${pos}`).src = "./img/bead_white.png";
    upper_abacus_num_5 = val
  }
}

function freeMode() {
  let display_info = document.querySelectorAll('span');
  for (let i = 0; i < display_info.length; i++) {
    console.log(i);
    if (display_info[0].style.display === "none") {
      display_info[i].style.display = "none"
      console.log("hi");
    } else {
      display_info[i].style.display = "block"
      console.log("ho");
    }
  }
}

let total_upper_abacus, total_lower_abacus
function calculate() {
  total_upper_abacus = upper_abacus_num_1 + upper_abacus_num_2 + upper_abacus_num_3 + upper_abacus_num_4 + upper_abacus_num_5
  total_lower_abacus = lower_abacus_num_1 + lower_abacus_num_2 + lower_abacus_num_3 + lower_abacus_num_4 + lower_abacus_num_5
  document.getElementById('abacusNum').innerHTML = total_upper_abacus + total_lower_abacus
}

//random
let random1 = 0
let random2 = 0
let random3 = 0

console.log(typeof localStorage.my_units);


//function set units
setUnits(localStorage.my_units)
function setUnits(units) {
  // Set Item
  localStorage.setItem("my_units", units)
  startRandom()
}

startRandom()
function startRandom() {
  random1 = Math.floor(Math.random() * localStorage.my_units);
  random2 = Math.floor(Math.random() * localStorage.my_units);
  document.getElementById("random_1").innerHTML = random1
  document.getElementById("random_2").innerHTML = random2
  let nodeList = document.querySelectorAll('span');
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.color = "white";
    }
}

//check answer
document.addEventListener('touchstart', function(e) {
  calculate()
  let plusRandom = random1 + random2 + random3
  console.log('PLUSRANDOM', plusRandom)
  if (plusRandom === total_upper_abacus + total_lower_abacus) {
    let nodeList = document.querySelectorAll('span');
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.color = "yellow";
      }
    sound_succes.play()
    displayButton()
  }
});

//get num coins via localStorage
function getCoins() {
  if (localStorage.my_coins) {
    localStorage.my_coins = Number(localStorage.my_coins);
  } else {
    localStorage.my_coins = 1;
  }
}
//output my_coins from localStorage
document.getElementById('yourCoins').innerHTML = "🪙 " + localStorage.my_coins;

//display menu button
function displayButton() {
  let btn = document.querySelector('button');
  if (btn.style.display === "none") {
    btn.style.display = "block"
  } else {
    btn.style.display = "none"
  }
}

function displaySettingBtn() {
  let abacus_frame = document.getElementById('abacusFrame');
  let setting_menu = document.getElementById('settingMenu');
  let setting_button = document.getElementById('settingBtn');
  if (setting_menu.style.display === "none") {
    setting_menu.style.display = "block"
    setting_button.innerHTML = "BACK"
    abacus_frame.style.display = "none"
  } else {
    setting_menu.style.display = "none"
    setting_button.innerHTML = "SETTING"
    abacus_frame.style.display = "block"
  }
}
