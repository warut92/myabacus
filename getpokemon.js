//รวมตัวแปร
//ค่าคะแนน ที่นำมาจาก local storage ของ abacus.js
let POINT = localStorage.my_coins
console.log("abacus ", POINT);
//ตัวแปรสุ่มตัวเลข สำหรับสร้าง id ของโปเกมอน
var RANDOM_NUM
//ตัวแปรสุ่มตัวเลข แบบอาร์เรย์ สำหรับนำมาเก็บข้อมูล
const ID_ARR = []
//api json ของ pokemon
const baseURL = "https://pokeapi.co/api/v2/pokemon/";

//ฟังก์ชันสุ่มตัวเลขสำหรับ สำหรับสร้าง id ของโปเกมอน
var randomPokeID = function() {
    console.log("run randomPokeID");
    //สุ่มในช่วง 0-300
    RANDOM_NUM = Math.floor(Math.random() * 300);
    //หากมีการรันฟังชันอีกให้นำ i นำมาเก็บข้อมูลในรูปแบบของอาร์เรย์
    ID_ARR.push(RANDOM_NUM)
    //เก็บข้อมูลใว้ที่ localStorage ของเบราว์เซอร์
    localStorage.setItem("pokeID", ID_ARR);
    localStorage.setItem("pokeStorage", "yes");
}

//สร้างเงื่อนไข หากข้อมูลใว้ที่ localStorage ของเบราว์เซอร์ ไม่เท่ากับ null
//ให้นำข้อมูลนั้น มาเก็บในรูปแบบอาร์เรย์ใน ID_ARR
if (localStorage.getItem("pokeID") !== null) {
    ID_ARR.push(localStorage.getItem("pokeID").split(","))
  }
  //ตั้งตัวแปรความยาวของข้อมูลใว้ที่ localStorage ของเบราว์เซอร์
  let lenLocalStorage = ""
  
  //ตรวจว่า localstorage ของเรามีข้อมูลหรือไม่ หากไม่ให้ส่งข้อความออกทาง console.log
  function checkStorage() {
    if (localStorage.getItem("pokeStorage") === "yes") {
      //ถ้ามีก็ให้โหลดข้อมูลออกมา
      console.log("storage y");
      localStoragePoke = localStorage.getItem("pokeID").split(",")
    //   lenLocalStoragePoke = localStorage.getItem("pokeID").split(",").length
    } else {
      console.log("storage n");
    }
  }
  //รันฟังก์ชันตรวจ localstorage ทุกครั้งที่มีการเปิดไฟล์นี้
  checkStorage()
  
  //ฟังก์ชันลบ tag ที่แสดงรูปภาพโปเกมอน
  //โดยการลบนั้น remove() จะลบ Tag ก่อน แต่เนื่องจากต้องการลบ
  //หลาย tag จึงใช้ loop ช่วย โดยการลบตามจำนวนของ pokeID (array)
  function delPoke() {
    let divRemove = document.getElementById("poke")
    if (divRemove !== null) {
      for (let n = 0; n < localStorage.getItem("pokeID").length; n++) {
        divRemove.remove()
      }
    }
  }

//ฟังก์ชันเรียกข้อมูล ของโปเกมอน แล้วจากนั้นนำแสดงออกหน้าจอ
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


