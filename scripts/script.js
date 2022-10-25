var tab = [
    { word : "czynsz" , translation : "the rent" },
    { word : "schludny, uporządkowany" , translation : "tidy" },
    { word : "media (np. prąd, gaz" , translation : "utilities" },
    { word : "przystepny (w przystępnej cenie)" , translation : "affordable" },
    { word : "elastyczny, podlegający negocjacji" , translation : "flexible" },
    { word : "umowa najmu" , translation : "lease agreement" },
    { word : "w ofercie" , translation : "on offer" },
    { word : "lokator, najemca" , translation : "tenant" },
    { word : "złożyć wniosek o kredyt hipoteczny" , translation : "apply for a mortgage" },
    { word : "pomagać (komuś w czymś)" , translation : "assist" },
    { word : "kupujący" , translation : "buyer" },
    { word : "chętny/skory (do sprzedania czegoś)" , translation : "eager" },
    { word : "agent nieruchomości" , translation : "estate agent" },
    { word : "parapetówka" , translation : "house-warming party" },
    { word : "zainwestować w coś" , translation : "invest in sth" },
    { word : "licencjonowany" , translation : "licensed" },
    { word : "złożyc ofertę" , translation : "make an offer" },
    { word : "dzien otwarty (dla potencjalnych kupców)" , translation : "open house" },
    { word : "przedział cenowy, widełki cenowe" , translation : "price range" },
    { word : "nabyć" , translation : "purchase" },
    { word : "pokazać komuś coś (np. nowy dom)" , translation : "show sb around" },
    { word : "wykwalifikowany" , translation : "skilled" },
]

var answer_box = document.getElementById("answer_text")
var word = document.getElementById("word")
var validation = document.getElementById("validation")
var correct_score = document.getElementById("correct_score")
var incorrect_score = document.getElementById("incorrect_score")


// Shuffle element from array, and inserting into "word" div 
var los = Math.floor(Math.random()*tab.length)
word.innerHTML=(tab[los].word)

// Function that draws a new word
function shuffle() {
    if (tab.length == 0){
        word.style.color = "green"
        word.innerHTML = ("Good! You know all the words!")
        //correct_score.innerText = 0
        //incorrect_score.innerText = 0
        return
    }
    los = Math.floor(Math.random()*tab.length)
    word.innerHTML = (tab[los].word)
}

// Function for checking the correctness of the answer
answer_box.addEventListener("keydown", function(event) {
    if(event.key == "Enter" ){
        if (answer_box.value.toLowerCase() == tab[los].translation) {
            answer_box.value = ""
            validation.style.color = "green"
            validation.innerHTML = ("Correct!")
            points(1)
            tab.splice(los, 1)
            shuffle()
        }
        else {
            validation.style.color = "red"
            validation.innerHTML = ("Incorrect! Proper : " + tab[los].translation)
            answer_box.value = ""
            points(0)
        }}
  })

// Function for update the score bar
  function points(x) {
    if (x == 1) {
        var c = correct_score.innerText 
        c = Number(c) + 1
        correct_score.innerText = Number(c)  
    }
    else{
        var ic = incorrect_score.innerText
        ic = Number(ic) + 1
        incorrect_score.innerText = Number(ic)
    }
}
