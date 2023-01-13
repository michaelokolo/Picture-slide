const headerSection = document.querySelector('img');

headerSection.src = 'photo1.jpg'

const images = [
    {url: 'photo1.jpg'},
    {url: 'photo2.jpg'},
    {url: 'photo3.jpg'},
    {url: 'photo4.jpg'},
    {url: 'photo5.jpg'},
    {url: 'photo6.jpg'}
];

let i = 0;

function changeBackground(){
    
    headerSection.src = images[i]['url'];
    i++
    console.log(i)
    
    if(i === images.length){
        i = 0;
    }
    setTimeout(changeBackground, 7000)
}

changeBackground()