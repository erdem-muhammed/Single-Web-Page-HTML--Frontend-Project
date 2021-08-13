
/////SLIDER 
const slider = document.getElementById("sliderContainer");
let current = 0; //current worth
const max = document.querySelectorAll("#sliderContainer>.slide").length;
let time;
timer();

function next()
{
    //CHECK
    if(current == max-1)
    {
        return;
    }
    current++;
    //UPDATE
    translateUpdate();
}

function prev()
{
    if(current == 0)
    {
        return;
    }
    current--;
    translateUpdate();
}

function translateUpdate()
{
    slider.style.transform = "translateX(-" + (current*100) + "vw)";
    timer();
}
function timer()
{
    clearTimeout(time);
    time = setTimeout(function()
    {
        next();
    }, 4500);
}