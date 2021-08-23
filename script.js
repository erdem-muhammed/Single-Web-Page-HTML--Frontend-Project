/////HAMBURGER-MENU
const menubtn = document.getElementById("hamburger-icon");
const hamburger = document.getElementById("hamburger");
menubtn.onclick = function()
{
    if(hamburger.style.display == "block")
    {
       hamburger.style.display = "none";
       console.log(hamburger.style);
    }
    else
    {
       hamburger.style.display = "block";
    }
    
}





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


/////CONTACT FORM
const submit = document.getElementById("btn-submit");
const inputAll = document.querySelector(".form").querySelectorAll("input");
const message = document.getElementById("message");
const warning = document.getElementById("warning");
const form = document.querySelector(".form");

submit.onclick = function submit()
{
    for(var i = 0; i < inputAll.length; i++)
    {
        if(inputAll[i].value == "" && message.value == "")
        {
        warning.innerHTML = "Please fill all the fields!";
        warning.style.color = "red";
        warning.style.marginBottom = "10px";
        return;
        }
    }
}
function clearData()
{
    form.value = "";
    return;
}