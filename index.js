
const screen = document.getElementById('screen');

//let prev = screen.value;

function display(input)
{
    screen.value += input;
}

function Allclear()
{
    screen.value = "";
}

function Clear()
{
  //  let newval = screen.value - prev;
    screen.value = Math.floor(screen.value/10);
    
}

function calculate()
{
    try
    {
        screen.value = eval(screen.value);
    }
    catch(error)
    {
        screen.value = "Syntax Error";
    }
}
