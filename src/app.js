const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log("You clicked me!");
    console.log("Why!?");
}

function scream(){
    console.log("AAAAAAAH")
    console.log("STOP TOUCHING ME!")
}
btn.onmouseenter = scream;
const hey = document.querySelector('h1').onclick = function(){
    alert('HIIIIIII!!!');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click',function(){
    alert('CLICKED!!');
})

function twist(){
    console.log("TWIST!")
}

function shout(){
    console.log("SHOUT!")
}

const tasBtn = document.querySelector('#tas')
    tasBtn.onclick = twist;
    tasBtn.onclick = shout;

    tasBtn.addEventListener('click',twist);
    tasBtn.addEventListener('click', shout);