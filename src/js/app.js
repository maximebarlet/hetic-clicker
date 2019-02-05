/*var work = document.getElementById("clickZone").innerHTML;
var xp = document.getElementById("countXp").innerHTML;
var lvl = document.getElementById("countLvl").innerHTML;
work.addEventListener("click",function(){ 
    xp.value++;
    if (xp.value > 100){
        lvl.value === lvl.value + 1;
    } 
});*/

var xp = 0; //variable xp = 0
var lvl = 0;

document.getElementById('work').onclick = miner;

function miner() {
 
var xpUp = 10;
var lvlUp = 1;
 
xp += xpUp;
console.log(xpUp);
if (xp >= 100) {
    lvl = lvlUp;
    console.log(lvlUp);
}if (xp >= 1000) {
    lvl = lvlUp*2;
    console.log(lvlUp);
}
document.getElementById('xp').innerHTML = xp; 
document.getElementById('lvl').innerHTML = lvl;

}
 



