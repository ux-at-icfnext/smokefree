var mobileMenu = document.getElementById('sf-tophat-navbar-collapse');

var display = 0;

function toggleMenu()
{
    if(display == 1)
    {
        mobileMenu.style.display = 'block';
        display = 0;
    }
    else
    {
        mobileMenu.style.display = 'none';
        display = 1;
    }
}