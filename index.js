console.log('hello world');

document.getElementById('date').innerHTML = new Date().toDateString();

setInterval( () => {
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
},1000);