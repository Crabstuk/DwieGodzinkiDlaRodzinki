// Zmienne :D
const WELCOME_AND_EXPLANATION_TEXT = document.querySelector("#welcomeAndExplanationText");

const DivForZegar = document.querySelector("#divForZegar");

const slajdOneImage = document.querySelector("#slajdOneImage");

const pickTheHourText = document.querySelector("#pickHourText")

const buttonOne = document.querySelector("#button1");
const buttonTwo = document.querySelector("#button2");
const buttonThree = document.querySelector("#button3");
const buttonFour = document.querySelector("#button4");
const buttonFive = document.querySelector("#button5");
const buttonSix = document.querySelector("#button6");
const buttonSeven = document.querySelector("#button7");
const buttonEight = document.querySelector("#button8");
const buttonNine = document.querySelector("#button9");
const buttonTen = document.querySelector("#button10");
const buttonEleven = document.querySelector("#button11");
const buttonTwelve = document.querySelector("#button12");

const currentPhotoDisplay = document.querySelector("#currentPhotoDisplay");
//Funkcje ;)

const ShowFirstPhoto = timeToWait => {
        setTimeout(function() {
        slajdOneImage.style.display = "flex";
        slajdOneImage.classList.add("animate__animated","animate__fadeInUp")
        },timeToWait)
}

const ShowAndHide = (timeToShow,timeToHide,htmlElementLol) => {
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
        }, timeToHide);
    }, timeToShow);
}

const ShowAndHidePhoto = (timeToShow,currentPhoto) => { 
    console.log("SDJNASDHKBLABHKLDABLSVJ")
    if(currentPhoto == 11){
        currentPhotoDisplay.style.width = "400px"
    }
    currentPhoto = `Zdjęcia/ZdjęciaDoZegara/Photo${currentPhoto}.jpg`
    currentPhotoDisplay.src = currentPhoto
        currentPhotoDisplay.style.display = "flex";
        currentPhotoDisplay.classList.add("animate__animated","animate__fadeInUp")

        // po kolejnych 2s schowaj
        setTimeout(function() {
            currentPhotoDisplay.classList.add("animate__fadeOutDown")
            setTimeout(function(){
                currentPhotoDisplay.style.display = "none"; 
                currentPhotoDisplay.classList.remove("animate__fadeInUp","animate__fadeOutDown") 
                currentPhotoDisplay.style.width = "700px"
            },1000)
        }, timeToShow);
};
const ShowZegar = timeToWait => {
        setTimeout(function(){
        pickTheHourText.style.display = "flex";
        pickTheHourText.classList.add("animate__animated", "animate__fadeInUp");

        DivForZegar.style.display = "flex";
        DivForZegar.classList.add("animate__animated", "animate__fadeInUp");
    },timeToWait)
};

const HideZegar = timeToWait => {
    setTimeout(function(){

    },timeToWait)
}
// Kod
window.onload = function() {
    ShowAndHide(2000,2000,WELCOME_AND_EXPLANATION_TEXT);
    ShowAndHide(3000,3000,slajdOneImage)
    
    setTimeout(function(){
        WELCOME_AND_EXPLANATION_TEXT.innerHTML = "Hej, kliknij godzinkę, a zobaczysz za chwilkę moją rodzinkę. Każda godzinka przynosi nową wspólną chwilkę!";
        WELCOME_AND_EXPLANATION_TEXT.style.fontSize = "100px";
        ShowAndHide(2000,5000,WELCOME_AND_EXPLANATION_TEXT);
    },4500)
    ShowZegar(15000)
    setTimeout(function(){
        slajdOneImage.classList.add("animate__animated", "animate__fadeOutDown")
        setTimeout(function(){
            slajdOneImage.style.display = "none";
        },2000)
    },20000)

};
