let threeDots = document.querySelector('.three-dots');
let cut = document.querySelector('.cut');
let container = document.querySelector('.container');


threeDots.addEventListener('click',()=>{
    container.style.display='block';
})

cut.addEventListener('click',()=>{
    container.style.display='none';
})
