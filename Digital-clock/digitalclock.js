//console.log("hi")

const hourE1=document.getElementById("hour")
const MinuteE1=document.getElementById("minutes")
const SecondE1=document.getElementById("Seconds")
const AMPME1=document.getElementById("AMPM")


function updateclock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let AMPM="AM"

    if(h>10){
        h=h-12
        AMPM="PM";
    }

    h=h<10 ? "0" +h :h;
    m=m<10 ? "0" +m :m;
    s=s<10 ? "0" +s :s;

    hourE1.innerText=h;
    MinuteE1.innerText=m;
    SecondE1.innerText=s;
    AMPME1,(innerText=AMPM);
setTimeout(() => {
    updateclock()
}, 1000);
}
updateclock();