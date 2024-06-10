const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click',function(){
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newClr;
    h1.innerText = newClr;
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}