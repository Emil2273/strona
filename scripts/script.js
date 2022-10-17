var tab = [
    { word : "blok mieszkalny", translation : "block of flats"},
    { word : "przyczepa kempingowa", translation : "caravan"},
    { word : "domek wiejski", translation : "cottage"},
    { word : "dom jednorodzinny", translation : "detached house"},
    { word : "mieszkanie", translation : "flat"},
    { word : "rezydencja/willa", translation : "mansion"},
    { word : "kawalerka", translation : "one-room flat"},
    { word : "posiadłość, nieruchomośc", translation : "property"},
    { word : "bliźniak", translation : "semi-detached"},
    { word : "wieżowiec", translation : "skyscraper"},
    { word : "dwupiętrowy", translation : "two-storey"},
    { word : "dom opieki", translation : "care home"},
    { word : "ośrodek kultury", translation : "community centre"},
    { word : "remiza strażacka", translation : "fire station"},
    { word : "akademik, dom studencki", translation : "hall of residence"},
    { word : "luksusowy apartament na ostatnim piętrze budynku", translation : "penthouse"},
    { word : "ratusz", translation : "town hall"},
    { word : "nad jeziorem", translation : "by the lake"},
    { word : "nad morzem", translation : "by the sea"},
    { word : "miasteczko uniwersyteckie, kampus", translation : "campus"},
    { word : "stolica", translation : "capital city"},
    { word : "centrum miasta", translation : "city centre"},
    { word : "osiedle domów komunalnych", translation : "council estate"},
    { word : "tereny wiejskie, wieś", translation : "countryside"},
    { word : "osiedle strzeżone/zamknięte", translation : "gatet community"},
    { word : "dzielnica wielokulturowa", translation : "multicultural district"},
    { word : "na obrzeżach/peryferiach", translation : "on the outskirts"},
    { word : "sielankowy, idylliczny", translation : "idyllic"},
    { word : "dzielnica mieszkaniowa", translation : "residential area"},
    { word : "wiejski", translation : "rural"},
    { word : "przestronny", translation : "spacious"},
    { word : "podmiejski", translation : "suburban"},
    { word : "tradycyjny", translation : "traditional"},
    { word : "niezabudowany, niezagospodarowany", translation : "undeveloped"},
    { word : "miejski", translation : "urban"},
    { word : "strych, poddasze", translation : "attic"},
    { word : "sutenera", translation : "basement"},
    { word : "piwnica", translation : "cellar"},
    { word : "korytarz", translation : "corridor"},
    { word : "kryty basen", translation : "indoor pool"},
    { word : "główna sypialnia w domu", translation : "master bedroom"},
    { word : "sala multimedialna", translation : "media room"},
    { word : "biuro", translation : "office"},
    { word : "korytarz, przejście", translation : "passage"},
    { word : "składzik, magazyn", translation : "storeroom"},
    { word : "gabinet", translation : "study"},
    { word : "toaleta, umywalnia", translation : "washroom"},
    { word : "fotel", translation : "armchair"},
    { word : "stolik nocny", translation : "bedside table"},
    { word : "łóżko piętrowe", translation : "bunk bed"},
    { word : "dywan", translation : "carpet"},
    { word : "centralne ogrzewanie", translation : "central heating"},
    { word : "komoda", translation : "chest of drawers"},
    { word : "kuchenka", translation : "cooker"},
    { word : "kanapa", translation : "couch"},
    { word : "szafka kuchenna, kredens", translation : "cupboard"},
    { word : "firanka, zasłona", translation : "curtain"},
    { word : "poduszka (do siedzenia)", translation : "cushion"},
    { word : "toaletka", translation : "dressing table"},
    { word : "kubeł na śmieci", translation : "dustbin"},
    { word : "wykładzina dywanowa", translation : "fitted carpet"},
    { word : "lodówka", translation : "fridge"}, 
    { word : "deska do prasowania", translation : "ironing board"}, 
    { word : "lampa", translation : "lamp"}, 
    { word : "kuchenka mikrofalowa", translation : "microwave"}, 
    { word : "lustro", translation : "mirror"}, 
    { word : "piekarnik", translation : "oven"}, 
    { word : "poduszka (pod głowę)", translation : "pillow"}, 
    { word : "dywanik", translation : "rug"}, 
    { word : "półka", translation : "shelf"}, 
    { word : "prysznic", translation : "shower"}, 
    { word : "zlew", translation : "sink"}, 
    { word : "czujnik dymu", translation : "smoke detector"}, 
    { word : "sofa", translation : "sofa"}, 
    { word : "stół", translation : "table"}, 
    { word : "kran", translation : "tap"}, 
    { word : "toaleta, WC", translation : "toilet"}, 
    { word : "odkurzacz", translation : "vacuum cleaner"}, 
    { word : "szafa", translation : "wardrobe"}, 
    { word : "umywalka", translation : "washbasin"}, 
    { word : "pralka", translation : "washing machine"}, 
    { word : "komin", translation : "chimney"}, 
    { word : "podjazd (do garażu)", translation : "driveway"}, 
    { word : "wejście (do budynku)", translation : "entrance"}, 
    { word : "garaż", translation : "garage"}, 
    { word : "ogród", translation : "garden"}, 
    { word : "trawnik", translation : "lawn"}, 
    { word : "ścieżka", translation : "path"}, 
    { word : "patio, taras", translation : "patio"}, 
    { word : "dach", translation : "roof"}, 
    { word : "panel słoneczny", translation : "solar pannel"}, 
    { word : "cegła", translation : "brick"}, 
    { word : "beton", translation : "concrete"}, 
    { word : "granit", translation : "granite"}, 
    { word : "marmur", translation : "marble"}, 
    { word : "gips", translation : "plaster"}, 
    { word : "kamień", translation : "stone"}, 
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