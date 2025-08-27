// Zmienne :D
const WELCOME_AND_EXPLANATION_TEXT = document.querySelector("#welcomeAndExplanationText");

const DivForZegar = document.querySelector("#divForZegar")

const slajdOneImage = document.querySelector("#slajdOneImage");

//Funkcje ;)
const ShowAndHide = (timeToShow,htmlElementLol) => {
        // czk 2 sekundy, pokaż...
    setTimeout(function() {
        htmlElementLol.style.display = "flex";
        htmlElementLol.classList.add("animate__animated","animate__fadeInUp")

        // po kolejnych 2s schowaj
        setTimeout(function() {
            htmlElementLol.classList.add("animate__fadeOutDown")
            setTimeout(function(){
                htmlElementLol.style.display = "none"; 
                htmlElementLol.classList.remove("animate__fadeInUp","animate__fadeOutDown") 
            },300)
        }, timeToShow);
    }, timeToShow);
}
const ShowZegar = timeToWait => {
        setTimeout(function(){
        DivForZegar.style.display = "flex";
        DivForZegar.classList.add("animate__animated", "animate__fadeInUp")
    },timeToWait)
}
// Kod
window.onload = function() {
    ShowAndHide(2000,WELCOME_AND_EXPLANATION_TEXT);
    setTimeout(function(){
        WELCOME_AND_EXPLANATION_TEXT.innerHTML = "Hej, kliknij godzinkę, a zobaczysz za chwilkę moją rodzinkę. Każda godzinka przynosi nową wspólną chwilkę!";
        WELCOME_AND_EXPLANATION_TEXT.style.fontSize = "40px";
        ShowAndHide(7000,WELCOME_AND_EXPLANATION_TEXT);
    },4500)
    ShowZegar(21000)
    setTimeout(function(){
        slajdOneImage.classList.add("animate__animated", "animate__fadeOutDown")
        setTimeout(function(){
            slajdOneImage.style.display = "none";
        },2000)
    },20000)

};
