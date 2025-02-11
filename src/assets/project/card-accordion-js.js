var boxOne = document.getElementById('expanded_btn__I-Want-to-Quit');
var boxTwo = document.getElementById('expanded_btn__My-Quit-Day')
var boxThree = document.getElementById('expanded_btn__Newly-Quit');
var boxFour = document.getElementById('expanded_btn__Staying-Quit')

var closeOne = document.getElementById('expanded_btn__I-Want-to-Quit')
var closeTwo = document.getElementById('expanded_btn__My-Quit-Day')
var closeThree = document.getElementById('expanded_btn__Newly-Quit')
var closeFour = document.getElementById('expanded_btn__Staying-Quit')

var display = 0;

function toggleBoxOne()
{
    if(display == 1)
    {
        boxOne.style.display = 'block';
        display = 0;
    }
    else
    {
        boxOne.style.display = 'none';
        display = 1;
    }
}

function toggleBoxTwo()
{
    if(display == 1)
    {
        boxTwo.style.display = 'block';
        display = 0;
    }
    else
    {
        boxTwo.style.display = 'none';
        display = 1;
    }
}

function toggleBoxThree()
{
    if(display == 1)
    {
        boxThree.style.display = 'block';
        display = 0;
    }
    else
    {
        boxThree.style.display = 'none';
        display = 1;
    }
}

function toggleBoxFour()
{
    if(display == 1)
    {
        boxFour.style.display = 'block';
        display = 0;
    }
    else
    {
        boxFour.style.display = 'none';
        display = 1;
    }
}

function closeBoxOne()
{
    if(display == 1)
    {
        closeOne.style.display = 'block';
        display = 0;
    }
    else
    {
        closeOne.style.display = 'none';
        display = 1;
    }
}

function closeBoxTwo()
{
    if(display == 1)
    {
        closeTwo.style.display = 'block';
        display = 0;
    }
    else
    {
        closeTwo.style.display = 'none';
        display = 1;
    }
}

function closeBoxThree()
{
    if(display == 1)
    {
        closeThree.style.display = 'block';
        display = 0;
    }
    else
    {
        closeThree.style.display = 'none';
        display = 1;
    }
}

function closeBoxFour()
{
    if(display == 1)
    {
        closeFour.style.display = 'block';
        display = 0;
    }
    else
    {
        closeFour.style.display = 'none';
        display = 1;
    }
}