var tab = [
    { word : "myć okna" , translation : "clean the windows" },
    { word : "gotować obiad" , translation : "cook dinner" },
    { word : "wykonywać prace domowe" , translation : "do chores" },
    { word : "robić pranie" , translation : "do the laundry" },
    { word : "odkurzać meble" , translation : "dust the furniture" },
    { word : "nakrywać do stołu" , translation : "lay the table" },
    { word : "odgrzać, podgrzać (jedzenie)" , translation : "reheat" },
    { word : "szorować toaletę" , translation : "scrub the toilet" },
    { word : "posprzątać bałagan" , translation : "tidy up the mess" },
    { word : "odkurzyć podłogę" , translation : "vacuum the floor" },
    { word : "podlać kwiaty" , translation : "water the plants" },
    { word : "kupować artykuły spożywcze" , translation : "buy groceries" },
    { word : "kosić trawę" , translation : "cut the grass" },
    { word : "składać ubrania" , translation : "fold the clothes" },
    { word : "kosiarka do trawy" , translation : "lawnmower" },
    { word : "sznurek do suszenia prania" , translation : "line" },
    { word : "przecierać ściereczką różne powierzchnie" , translation : "wipe surfaces" },
    { word : "umeblowany pokój" , translation : "furnisched room" },
    { word : "zakwaterowanie, mieszkanie" , translation : "accommodation" },
    { word : "wyposażenie, udogodnienia" , translation : "amenities" },
    { word : "umówić się z kimś w celu obejrzenia (np. mieszkania)" , translation : "arrange a viewing" },
    { word : "przyległy" , translation : "attached" },
    { word : "dostępny" , translation : "available" },
    { word : "położony w centrum" , translation : "centrally located" },
    { word : "część wspólna, obszar wspólny (dla mieszkańców)" , translation : "common area" },
    { word : "dojeżdżac (np. do pracy)" , translation : "commute" },
    { word : "przytulny" , translation : "cosy" },
    { word : "ciasny" , translation : "cramped" },
    { word : "zabudowany, na wymiar" , translation : "fitted" },
    { word : "kuchnia zabudowana" , translation : "fitted kitchen" },
    { word : "współlokator" , translation : "roommate" },
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
