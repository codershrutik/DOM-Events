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
