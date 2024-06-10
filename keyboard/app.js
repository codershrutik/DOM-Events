document.querySelector('button').addEventListener('click',function(){
    console.log(evt);
})

// const input = document.querySelector('input');
// input.addEventListener('keydown',function(e){
//     console.log(e.key);
//     console.log(e.code);
// })
// input.addEventListener('keyup',function(){
//     console.log('KEYUP')
// })

window.addEventListener('click',function(){
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console/log("LEFT!");
        default:
            console.log("IGNORED")
    }
})