const playbtn = document.querySelector('.play');
const resetbtn = document.querySelector('.reset');
const lapbtn = document.querySelector('.lap');
const clearbtn = document.querySelector('.clear_laps');
const minval = document.querySelector('.min');
const secval = document.querySelector('.sec');
const centisecval = document.querySelector('.centisec');
const outerCircle = document.querySelector('.outer')
const lapslist = document.querySelector('.laps')

let isPlay = false;
let minCount = 0;
let secCount = 0;
let centisecCount = 0;
let min,sec,centisec;
let lapCount = 0;

const toggle = () => {
    resetbtn.classList.remove('hidden');
    lapbtn.classList.remove('hidden');
}

const play = () => {
    if(!isPlay){
        playbtn.innerHTML="Pause"
        outerCircle.classList.add('bg-animation')
        min = setInterval(()=>{
            minval.innerHTML=`${++minCount} :&nbsp;`;
        },60*1000)
        sec = setInterval(()=>{
            if(secCount===60){
                secCount=0;
            }
            secval.innerHTML=`${++secCount} :&nbsp;`;
        },1000)
        centisec = setInterval(()=>{
            if(centisecCount===10){
                centisecCount=0;
            }
            centisecval.innerHTML=`${++centisecCount}`;
        },100)
        isPlay=true;
    }else{
        outerCircle.classList.remove('bg-animation')
        clearInterval(min)
        clearInterval(sec)
        clearInterval(centisec)
        playbtn.innerHTML="Play"
        isPlay = false;
    }
    toggle();
}

const reset = () => {
    resetbtn.classList.add("hidden")
    lapbtn.classList.add("hidden")
    outerCircle.classList.remove('bg-animation')
    clearbtn.classList.add("hidden")
    playbtn.innerHTML="Play"
    clearInterval(min)
    clearInterval(sec)
    clearInterval(centisec)
    minCount=secCount=centisecCount=lapCount=0
    minval.innerHTML="00 :&nbsp;";
    secval.innerHTML="00 :&nbsp ";
    centisecval.innerHTML="00";
    lapslist.innerHTML=""
    isPlay=false
    
}
const lap = () => {
    const li = document.createElement("li")
    const number = document.createElement("span")
    const timestamp = document.createElement("span")

    li.setAttribute("class","lap-items")
    timestamp.setAttribute("class","timestamp")
    number.innerHTML = `#${++lapCount}`
    timestamp.innerHTML = `${minCount} : ${secCount} : ${centisecCount}`
    li.append(number, timestamp)
    lapslist.append(li)
    clearbtn.classList.remove("hidden")

}
const clear = () => {
    lapCount=0
    lapslist.innerHTML=""
    clearbtn.classList.add("hidden")
}
playbtn.addEventListener("click",play)
resetbtn.addEventListener("click",reset)
lapbtn.addEventListener("click",lap)
clearbtn.addEventListener("click",clear)