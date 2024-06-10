const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName')
const list = document.querySelector('#cats')
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('Submitted!');
    const newLI = document.createElement('LIs');
    newLI.innerText = catName;
    console.log(newLI);
    list.append(newLI);
    input.value = "";
})
