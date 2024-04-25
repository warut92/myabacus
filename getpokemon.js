//
let POINT = localStorage.my_coins
console.log("abacus ", POINT);
var i
const I_ARR = []
const baseURL = "https://pokeapi.co/api/v2/pokemon/";

var randomPokeID = function() {
    console.log("run randomPokeID");
    i = Math.floor(Math.random() * 300);
    I_ARR.push(i)
    localStorage.setItem("pokeID", I_ARR);
    localStorage.setItem("pokeStorage", "yes");
}

//ตรวจว่า ถ้า local storage poke ID มีอยู่ ให้เพิ่ม ตัวเลขสุ่ม เข้าไปเก็บเป็น array
if (localStorage.getItem("pokeID") !== null) {
    I_ARR.push(localStorage.getItem("pokeID").split(","))
  }
  let lenLocalStorage = ""
  
  //ตรวจว่า localstorage ของเรามีข้อมูลหรือไม่หากไม่
  function checkStorage() {
    if (localStorage.getItem("pokeStorage") === "yes") {
      //ถ้ามีก็ให้โหลดข้อมูลออกมา
      console.log("storage y");
      localStoragePoke = localStorage.getItem("pokeID").split(",")
      lenLocalStoragePoke = localStorage.getItem("pokeID").split(",").length
      console.log("lenLocalStoragePoke",lenLocalStoragePoke);
    } else {
      console.log("storage n");
    }
  }
  checkStorage()
  
  function delPoke() {
    let divRemove = document.getElementById("poke")
    if (divRemove !== null) {
      for (let n = 0; n < localStorage.getItem("pokeID").length; n++) {
        divRemove.remove()
      }
    }
  }

//สร้างตัวแปรที่เป็นฟังก์ชัน
var creatPokemon = function() { 
    console.log("len",localStoragePoke);
    for (let i = 0; i < localStorage.getItem("pokeID").length; i++) {
      delPoke()
      let pokeID = localStorage.getItem("pokeID").split(",")[i]
      let url = baseURL + pokeID
      console.log(url);
  
      fetch(url)
      .then(function(result) {
        return result.json();
      })
      .then(function(json) {
        displayResults(json);
      })
      .catch(function(err) {
      });
      
      function displayResults(json) {
        let pokemon = json;
        //สร้าง element 
        var div = document.createElement('div');
        
        //สร้าง class สำหรับ css
        div.className = 'flex-container';
        div.id = 'poke';
        
        //สร้าง textContent 
        let img = pokemon.sprites.other.showdown.front_default;
        console.log(img);
        let imgTag = "<img src=\"" + img + "\"><\/img>"
        div.innerHTML = imgTag + "<br>" + pokemon.name[0].toUpperCase() + pokemon.name.slice(1) + pokemon.id;
        
        //สร้าง div ใน body       
        document.getElementsByTagName('poke')[0].appendChild(div);
      }
      }
    }
  
function add() {
  POINT++
  console.log("point in add",POINT);
  if (POINT % 5 === 0) {
    console.log("POINT % 5 === 0 working");
    randomPokeID()
    creatPokemon()
  }
}
//สร้าง tag สำหรับแสดงโปเกมอน
creatPokemon()

function log() {
    console.log('test');
}


