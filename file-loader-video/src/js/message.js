import renderDOM from './render'
import msg from './make-message'
const waitTime = new Promise((ok,wrong) =>{
setTimeout(() =>{
    ok('three seconds')
},3000)
})
module.exports = {
    first: 'message from module',
    delayedMessage: async () =>{
        const message = await waitTime;
        console.log(message);
        renderDOM(msg(message));
    }
}