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

    if(current == max-1)
    {
        current = 0
    }
    else
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


submit.onclick = function()
{
    let boskutuvarmi = false;
    for(var i = 0; i < inputAll.length; i++)
    {
        if(inputAll[i].value == "")
        {
        boskutuvarmi = true;
        break

        }

    }
    if(message.value == "")
    {
        boskutuvarmi = true
    }

    if(boskutuvarmi)
    {
        warning.innerHTML = "Please fill all the fields!";
        warning.style.color = "red";
        warning.style.marginBottom = "10px";
    }
    else
    {
        clearData()
    }

}
function clearData()
{
    for(input of inputAll)
    {
        input.value = "";
    }
    message.value = "";

}
/////SCROLL TO TOP
/*const backtotop = document.getElementById("backtotop");
backtotop.addEventListener("click", function()
{
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    );   
})*/

$('#backtotop').click(function()
{
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    );
})  