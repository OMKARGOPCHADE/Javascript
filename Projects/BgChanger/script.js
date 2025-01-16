let btn = document.querySelector('.btn');
// function changeBg(){
//     // let randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
//     // let hexColor = `#${randomColor}`;
//     document.body.style.backgroundColor = randomColor();
// }
const randomColor = ()=>{
    const hexvalues = '0123456789ABCDEF';
    let hexColor = '#';
    for(let i = 0; i<6; i++)
        {
            hexColor += hexvalues[Math.floor(Math.random()*16)];
        }
        return hexColor;
}
btn.addEventListener('click' ,()=>{
    document.body.style.backgroundColor = randomColor();
    // console.log("object");
    btn.style.backgroundColor = randomColor();
    btn.style.color = randomColor();
});   