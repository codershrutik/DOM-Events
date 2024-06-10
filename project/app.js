// const lis = document.querySelectorAll('li');
// for(let li of lis){
//     li.addEventListener('click',function(){
//         li.remove();
//     })
// }

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit',function(e){
    e.preventDefault();
    const usernameInput = tweetForm.element.username;
    const tweetInput = tweetForm.element.tweet;

    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = ''
});

const addTweet = (username, tweet) =>{
    const newTeweet = document.createElement('li');
    const bTag = document.createElement('b');

    newTeweet.append(bTag);
    newTeweet.append(`-${tweet}`)
    tweetsContainer.append(newTeweet);
}

tweetsContainer.addEventListener('click',function(e){
    // console.log('CLICK ON UL!');
    e.target.remove();
})