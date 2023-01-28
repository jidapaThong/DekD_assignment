let n;
let index = 1;
slideshow(index);

//next or back slide control
function controller(n)
{
    index = index + n;
    slideshow(index);
}

function currentSlide(n) 
{
    index = n;
    slideshow(index);
}

function slideshow(n) 
{
    let i;
    let slides = document.getElementsByClassName("slider");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length) 
    {
        index = 1;
    }
    if(n < 1) 
    {
        index = slides.length;
    }
    for(i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";
    dots[index-1].className = dots[index-1].className + " active";
}

