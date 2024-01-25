function randomColorCode(){
    let digits = "0123456789ABCDEF";
    let hexCode = "#";
    for(let i=0; i<6;i++){
        let randomNum =(Math.floor(Math.random()*16)) 
        hexCode += digits[randomNum]
    }
    return hexCode
}

randomColorCode()
let interval;

function startChangingColor(){
interval = setInterval(() => {
    document.body.style.backgroundColor = randomColorCode();
}, 1000);
}

function stopColorChange(){
    clearInterval(interval)
    interval = null
}

document.querySelector("#start").addEventListener("click",startChangingColor)
document.querySelector("#stop").addEventListener("click",stopColorChange)

