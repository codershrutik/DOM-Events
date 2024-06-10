const makeRandomColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}

const buttons = document.querySelector('button');

for(let button of buttons){
    btns.addEventListener('click',colorise)
}

const h1s = document.querySelectorAll('h1');
for(let h1 of h1s){
    h1.addEventListener('click', colorise)
}

function colorise(){
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}