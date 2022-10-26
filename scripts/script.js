var tab = [
     { word : "pożądana/ mająca wzięcie lokalizacja" , translation : "saught-after address" },
    { word : "niewielka odległośc (którą można pokonać pieszo)" , translation : "walking distance" },
    { word : "gromadzić (np. kampitał)" , translation : "amass" },
    { word : "historia kredytu" , translation : "credit history" },
    { word : "zadatek, przedpłata" , translation : "down payment" },
    { word : "dochód" , translation : "income" },
    { word : "stopa procentowa" , translation : "interest rate" },
    { word : "konto oszczędnościowe" , translation : "savings account" },
    { word : "zaciągnąć kredyt hipoteczny" , translation : "take out a mortgage" },
    { word : "zburzyć, wyburzyć" , translation : "tear down" },
    { word : "folia bąbelkowa" , translation : "bubble wrap" },
    { word : "uprzątnąć (coś)" , translation : "clear" },
    { word : "klient" , translation : "customer" },
    { word : "pakować się" , translation : "do the packing" },
    { word : "delikatny/kruchy przedmiot" , translation : "fragile item" },
    { word : "oddać coś komuć (coś niepotrzebnego)" , translation : "give sth away to sb" },
    
    { word : "wynająć" , translation : "hire" },
    { word : "biuro leasingowe" , translation : "leasing office" },
    { word : "brudzić" , translation : "mess" },
    { word : "przeprowadzać się" , translation : "move house" },
    { word : "wprowadzać się (do mieszkania lub domu)" , translation : "move in" },
    { word : "osoba świadcząca usługi przeprowadzkowe" , translation : "mover" },
    { word : "przedmiot ponadwymiarowy/ponadgabarytowy" , translation : "oversize item" },
    { word : "pakować" , translation : "pack" },
    { word : "tylne drzwi" , translation : "rear door" },
    { word : "przenosić się (do pracy w innej miejscowości, zmienić miejsce pracy)" , translation : "relocate" },
    { word : "przeprowadzka, przenosiny" , translation : "removal" },
    
    { word : "firma przeprowadzkowa" , translation : "removal company" },
    { word : "przejrzeć, przeglądać (np. dokumenty)" , translation : "sort through" },
    { word : "zapakować, zawinąć" , translation : "wrap up" },
    { word : "warstwa farby" , translation : "coat of paint" },
    { word : "odnowić, ozdobić" , translation : "do up" },
    { word : "cześć/strona zewnętrzna" , translation : "exterior" },
    { word : "wnętrze" , translation : "interior" },
    { word : "utrzymywać, konserwować" , translation : "maintain" },
    { word : "wypowiedzenie, wymówienie, zawiadomienie" , translation : "notice" },
    { word : "wspólny ogród" , translation : "shared garden" },
    { word : "podpisywać umowę najmu" , translation : "sign a lease" },
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
