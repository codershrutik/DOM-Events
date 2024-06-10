// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// input.addEventListener('input',function(){
//     h1.innerText = input.value();
//     console.log('INPUT EVENT!');
// })

const button = document.querySelector('button');
const container = document.querySelector('#container');

button.addEventListener('click',function(){
    container.computedStyleMap.backgorundColor = makeRandomColor;()
    e.stopPropogation();
})

container.addEventListener('click',function(){
    container.classList.toggle('hide');
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}