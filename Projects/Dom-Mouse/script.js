let bd = document.body;
bd.addEventListener("click",function(event){
    // console.log('object');
    let dv = document.createElement('div');
   dv.classList.add("circle");
    let x = event.clientX;
    let y = event.clientY;
    dv.style.top = y + 'px';
    dv.style.left= x + 'px';
    bd.appendChild(dv);    
});