function show(data) 
{
    document.getElementById("result").value += data;
}

function clr() 
{
    document.getElementById("result").value = "";
}

function del()
{
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function solve() 
{
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}
