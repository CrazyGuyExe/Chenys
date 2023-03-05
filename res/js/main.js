const playButton = document.getElementById("playB");
const logo = document.getElementById("logo");
const gud = document.getElementById("gud");

const Lore = document.getElementById("Lore");
const LoreN = document.getElementById("nadpisL");
const continueN = document.getElementById("cont1");

const choice = document.getElementById("choice");
const yes = document.getElementById("yesB");
const no = document.getElementById("noB");
const startText = document.getElementById("start");
const objednavka = document.getElementById("obj");

const days = document.getElementById("days");

const gb = document.getElementById("grillb");
const bb = document.getElementById("buildb");
const ob = document.getElementById("orderb");

const palacinaCounter = document.getElementById("countPala");
const pour = document.getElementById("nl");

const notDone = document.getElementById("dp");
const done = document.getElementById("np");
const donen = document.getElementById("nn");
const namm = document.getElementById("mm");

const javor = document.getElementById("javo");
const boru = document.getElementById("boru");
const boruvtop = document.getElementById("borat");
const maslo = document.getElementById("mslo");

const javoB = document.getElementById("prjs");
const boruvs = document.getElementById("prbs");
const boruvB = document.getElementById("prb");
const masloB = document. getElementById("prm")

const menicko = document.getElementById("meni");
const seznam = document.getElementById("menic");
const odevzdani = document.getElementById("finish");


window.onload = () => {
  document.body.style.backgroundImage = "url(./res/img/mainpaper.jpg)";
};

playButton.onclick = () => {
  playButton.style.display = "none";
  logo.style.display = "none";
  gud.style.display = "none";
  Lore.style.display = "flex";
  LoreN.style.display = "flex";
  continueN.style.display = "flex";
};

continueN.onclick = () => {
  Lore.style.display = "none";
  LoreN.style.display = "none";
  continueN.style.display = "none";
  choice.style.display = "flex";
};

no.onclick = () => {
  choice.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/busted.png)";
};

let randomObjednavka = 0;

yes.onclick = () => {
  choice.style.display = "none";
  document.body.style.backgroundImage = "url(./res/img/black.png)";
  startText.style.display = "flex";
  setTimeout(() => {
    startText.style.display = "none";
    document.body.style.backgroundImage = "url(./res/img/main.png)"
    days.style.display = "flex";
    setTimeout(()=>{
        document.body.style.backgroundImage = "url(./res/img/order.png)"
        days.style.display = "none";
        gb.style.display = "flex";
        ob.style.display = "flex"
        bb.style.display = "flex"
        menicko.style.display = "flex"
        objednavka.style.display = "flex"
        randomObjednavka = Math.floor(Math.random() * 3);
    },4000)
  },4000);
};

objednavka.onclick=()=>{
    switch(randomObjednavka){
        case 0:
            objednavka.innerHTML =`verzi 1`;
            break;
        case 1:
            objednavka.innerHTML =`verzi 2`;
            break;
        case 2:
            objednavka.innerHTML =`verzi 3`;
            break;
    }
};

gb.onclick = () =>{
    document.body.style.backgroundImage = "url(./res/img/grill.png)";
    palacinaCounter.style.display = "flex";
    pour.style.display = "flex"
    donen.style.display = "none"
    namm.style.display = "none"
    javoB.style.display = "none"
    boruvB.style.display = "none"
    boruvs.style.display = "none"
    masloB.style.display = "none"
    boruvtop.style.display = "none"
    javor.style.display = "none"
    maslo.style.display = "none"
    boru.style.display = "none"
    menicko.style.display = "none"
    seznam.style.display = "none"
    odevzdani.style.display = "none"
}

ob.onclick = () =>{
    document.body.style.backgroundImage = "url(./res/img/order.png)";
    palacinaCounter.style.display = "none";
    pour.style.display = "none"
    donen.style.display = "none"
    namm.style.display = "none"
    javoB.style.display = "none"
    boruvB.style.display = "none"
    boruvs.style.display = "none"
    masloB.style.display = "none"
    boruvtop.style.display = "none"
    javor.style.display = "none"
    maslo.style.display = "none"
    boru.style.display = "none"
    menicko.style.display = "flex"
    seznam.style.display = "none"
    odevzdani.style.display = "none"
}

bb.onclick = () =>{
    document.body.style.backgroundImage = "url(./res/img/stavba.png)";
    palacinaCounter.style.display = "flex";
    pour.style.display = "none"
    donen.style.display = "flex"
    namm.style.display = "none"
    javoB.style.display = "flex"
    boruvB.style.display = "flex"
    boruvs.style.display = "flex"
    masloB.style.display = "flex"
    boruvtop.style.display = "none"
    javor.style.display = "none"
    maslo.style.display = "none"
    boru.style.display = "none"
    menicko.style.display = "none"
    seznam.style.display = "none"
    odevzdani.style.display = "flex"
}

menicko.onclick=()=>{
    seznam.style.display = "flex"

}

let palany = 0
done.onclick= () =>{
    done.style.display = "none";
    palany++;
    palacinaCounter.innerHTML = ` Počet palačinek: ${palany} `;

}

pour.onclick = () => {
    notDone.style.display = "flex"

    setTimeout(()=>{
        notDone.style.display = "none"
        done.style.display = "flex"
    },15000)

}
let n = 0
donen.onclick=()=>{
    namm.style.display = "flex"
    palany--;
    n++;
    palacinaCounter.innerHTML = ` Počet palačinek: ${palany} `;
}
let m = 0
let o = 0

let l = 0

boruvB.onclick = () => {
    if(n!=0){
        if(m!=1){
            boruvtop.style.display = "flex";
            m++;
            p++;
        }
    }
}

javoB.onclick = () => {
    if(n!=0){
        if(o!=1){
            javor.style.display = "flex";
            o++;
            
        }
    }
}

masloB.onclick = () => {
    if(n!=0){
        if((m!=1)&&(l!=1)){
            maslo.style.display = "flex";
            m++;
            l++;
        }
    }
}

boruvs.onclick = () => {
    if(n!=0){
        if((o!=1)&&(l!=1)){
            boru.style.display = "flex";
            o++;
            l++;
        }
    }
}


odevzdani.onclick=()=>{
    boruvtop.style.display = "none";
    boru.style.display = "none";
    maslo.style.display = "none";
    javor.style.display = "none";
    namm.style.display = "none";
    randomObjednavka = Math.floor(Math.random() * 3);
    o--;
    l--;
 
    n--;
    m--;
}