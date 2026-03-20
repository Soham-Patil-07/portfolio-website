const text = ["Web Developer","IT Student","Frontend Learner"];

let index=0;
let char=0;

function type(){

if(char < text[index].length){

document.getElementById("typing").textContent += text[index].charAt(char);

char++;

setTimeout(type,100);

}

else{

setTimeout(erase,1000);

}

}

function erase(){

if(char>0){

document.getElementById("typing").textContent = text[index].textContent?.substring(0,char-1) || document.getElementById("typing").textContent.substring(0,char-1);

char--;

setTimeout(erase,50);

}

else{

index++;

if(index>=text.length){

index=0;

}

setTimeout(type,200);

}

}

type();

particlesJS("particles-js", {

particles: {

number: {

value: 80

},

size: {

value: 3

},

color: {

value:"#38bdf8"

},

line_linked:{

enable:true,

color:"#38bdf8"

},

move:{

speed:2

}

},

interactivity:{

events:{

onhover:{

enable:true,

mode:"repulse"

}

}

}

});