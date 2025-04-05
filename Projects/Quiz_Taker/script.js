let btn = document.querySelector('#btn');
let i = 1;
btn.addEventListener('click',()=>{
    let fmdata = document.querySelector('#fm');
    // let fmdt = [...fmdata];
    let question = fmdata[0].value;
    let opt1 = fmdata[1].value;
    let opt2 = fmdata[2].value;
    let opt3 = fmdata[3].value;
    let opt4 = fmdata[4].value;
    let ans = fmdata[5].value;
    let fm = document.createElement('div');
    fm.className = 'form2';
    fm.innerHTML = `<p>Q.${i++}${question}</p>
    <input type="radio" name="quiz" value="${opt1}">
    <label for="${opt1}">${opt1}</label>
    <input type="radio" name="quiz" value="${opt2}">
    <label for="${opt2}">${opt2}</label>
    <input type="radio" name="quiz" value="${opt3}">
    <label for="${opt3}">${opt3}</label>
    <input type="radio" name="quiz" value="${opt4}">
    <label for="${opt4}">${opt4}</label>
    <button onclick='checkAns()'>Check Answer</button>`
document.body.appendChild(fm);
checkAns = ()=>{
    let chkd = document.getElementsByName('quiz');
    let userAns = '';
    chkd.forEach((val)=>{
        if(val.checked) userAns = val.value;
    })
    console.log(userAns);
    if(userAns == ans) alert('Your ans is right!');
    else alert('your ans is wrong!');
}
});