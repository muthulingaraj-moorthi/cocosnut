// document.addEventListener("DOMContentLoaded", slideShow);

//default slide
let slide_no = 0;
slideShow(0);


function slideShow(){
    let slides = document.getElementsByClassName("slides");
    for(let i=0; i< slides.length; i++){
        //slides[i].style.display = "none";

        slides[i].classList.add("slide-hide");
        slides[i].classList.remove("slide-active");
    }

    slide_no++;
    if(slide_no > slides.length){
        slide_no =1;
    }

    //slides[slide_no-1].style.display = 'block';

    slides[slide_no-1].classList.remove("slide-hide");
    slides[slide_no-1].classList.add("slide-active");
   


    setTimeout(slideShow, 5000)
}

//Menu Popup
let menu_popup = document.getElementById("menu_pop_up");

menu_popup.addEventListener("click", function(event){

    event.preventDefault();
    
    let pop_up = document.getElementById("menuPopup")

    pop_up.classList.remove("pop_down");
    pop_up.classList.add("pop_up");
});

let closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", function(event){
    let pop_up = document.getElementById("menuPopup")

    pop_up.classList.add("pop_down");
    pop_up.classList.remove("pop_up");
})
