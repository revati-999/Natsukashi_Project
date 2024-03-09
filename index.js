const carousels = document.querySelector('.cards-items');
const arrows = document.querySelectorAll('.containers i');
const width = carousels.querySelector('.card').offsetWidth;

arrows.forEach( btn=> {
    btn.addEventListener('click', ()=>{
        carousels.scrollLeft += btn.id === "left" ? -width : width;
    }) 
});

let isDragging=false;

// const dragging = (e) =>{
//     if(isDragging) return;
//     carousels.scrollLeft = e.pageX;
// }
// const dragstart = ()=>{
//     isDragging=true;
// }
// carousels.addEventListener('mousedown',dragstart);
// carousels.addEventListener('mousemove',dragging);



