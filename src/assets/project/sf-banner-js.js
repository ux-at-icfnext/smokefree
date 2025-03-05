var mobileMenu = document.getElementById('sf-tophat-navbar-collapse');
var expandIcon = document.getElementById('expandIcon');
var closeArrow = document.getElementById('closeArrow');
var gridIcon = document.getElementById('gridIcon');
var toggleMsg = document.getElementById('toggleMessage');

var display = 0;

function toggleMenu()
{
    if(display == 1)
    {
        mobileMenu.style.display = 'block';
        expandIcon.style.display = 'block';
        gridIcon.style.visibility = 'hidden';
        toggleMsg.style.visibility = 'hidden';
        display = 0;

        closeArrow.style.transform = 'scaleY(-1)';
    }
    else
    {
        mobileMenu.style.display = 'none';
        expandIcon.style.display = 'none';
        gridIcon.style.visibility = 'visible';
        toggleMsg.style.visibility = 'visible';
        display = 1;

        closeArrow.style.transform = 'scaleY(1)';
    }
}