const url = 'http://localhost:3000';
console.log('Hello World!');

const bnt = document.querySelector('button');

bnt.addEventListener('click', () => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
        console.log(data);
        });
});


