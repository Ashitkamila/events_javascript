function testClick(){
    console.log('function was exicuted');
}

function changeName(name){
    const element =document.getElementById('username')
    element.innerText=name;
}

// function applyBGColor()
// {
//     const element=document.getElementById('changeColor')
//     element.style.backgroundColor='red'
// }

// function removeBGColor()
// {
//     const element=document.getElementById('changeColor')
//     element.style.backgroundColor='white'
// }

function removeApplyBGColor(color)
{
    colorChange(color)
}

function colorChange(color)
{
    const element=document.getElementById('changeColor')
    element.style.backgroundColor=color
}


function getData()
{
    const element =document.getElementById('randomData')
    console.log('onkeyup',element.value);
document.getElementById('show').innerText=element.value.toUpperCase()
}

function checkBoxClick(){
    const element=document.getElementById('hobbies')
    console.log(element.checked);
}


function showData()
{
    console.log('keydown');
}