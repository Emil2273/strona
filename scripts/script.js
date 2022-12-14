var tab = [
    { word: "blok mieszkalny", translation: "block of flats" },
    { word: "przyczepa kempingowa", translation: "caravan" },
    { word: "domek wiejski", translation: "cottage" },
    { word: "dom jednorodzinny", translation: "detached house" },
    { word: "mieszkanie", translation: "flat" },
    { word: "rezydencja/willa", translation: "mansion" },
    { word: "kawalerka", translation: "one-room flat" },
    { word: "posiadłość, nieruchomośc", translation: "property" },
    { word: "bliźniak", translation: "semi-detached" },
    { word: "wieżowiec", translation: "skyscraper" },
    { word: "dwupiętrowy", translation: "two-storey" },
    { word: "dom opieki", translation: "care home" },
    { word: "ośrodek kultury", translation: "community centre" },
    { word: "remiza strażacka", translation: "fire station" },
    { word: "akademik, dom studencki", translation: "hall of residence" },
    { word: "luksusowy apartament na ostatnim piętrze budynku", translation: "penthouse" },
    { word: "ratusz", translation: "town hall" },
    { word: "nad jeziorem", translation: "by the lake" },
    { word: "nad morzem", translation: "by the sea" },
    { word: "miasteczko uniwersyteckie, kampus", translation: "campus" },
    { word: "stolica", translation: "capital city" },
    { word: "centrum miasta", translation: "city centre" },
    { word: "osiedle domów komunalnych", translation: "council estate" },
    { word: "tereny wiejskie, wieś", translation: "countryside" },
    { word: "osiedle strzeżone/zamknięte", translation: "gatet community" },
    { word: "dzielnica wielokulturowa", translation: "multicultural district" },
    { word: "na obrzeżach/peryferiach", translation: "on the outskirts" },
    { word: "sielankowy, idylliczny", translation: "idyllic" },
    { word: "dzielnica mieszkaniowa", translation: "residential area" },
    { word: "wiejski", translation: "rural" },
    { word: "przestronny", translation: "spacious" },
    { word: "podmiejski", translation: "suburban" },
    { word: "tradycyjny", translation: "traditional" },
    { word: "niezabudowany, niezagospodarowany", translation: "undeveloped" },
    { word: "miejski", translation: "urban" },
    { word: "strych, poddasze", translation: "attic" },
    { word: "sutenera", translation: "basement" },
    { word: "piwnica", translation: "cellar" },
    { word: "korytarz", translation: "corridor" },
    { word: "kryty basen", translation: "indoor pool" },
    { word: "główna sypialnia w domu", translation: "master bedroom" },
    { word: "sala multimedialna", translation: "media room" },
    { word: "biuro", translation: "office" },
    { word: "korytarz, przejście", translation: "passage" },
    { word: "składzik, magazyn", translation: "storeroom" },
    { word: "gabinet", translation: "study" },
    { word: "toaleta, umywalnia", translation: "washroom" },
    { word: "fotel", translation: "armchair" },
    { word: "stolik nocny", translation: "bedside table" },
    { word: "łóżko piętrowe", translation: "bunk bed" },
    { word: "dywan", translation: "carpet" },
    { word: "centralne ogrzewanie", translation: "central heating" },
    { word: "komoda", translation: "chest of drawers" },
    { word: "kuchenka", translation: "cooker" },
    { word: "kanapa", translation: "couch" },
    { word: "szafka kuchenna, kredens", translation: "cupboard" },
    { word: "firanka, zasłona", translation: "curtain" },
    { word: "poduszka (do siedzenia)", translation: "cushion" },
    { word: "toaletka", translation: "dressing table" },
    { word: "kubeł na śmieci", translation: "dustbin" },
    { word: "wykładzina dywanowa", translation: "fitted carpet" },
    { word: "lodówka", translation: "fridge" },
    { word: "deska do prasowania", translation: "ironing board" },
    { word: "lampa", translation: "lamp" },
    { word: "kuchenka mikrofalowa", translation: "microwave" },
    { word: "lustro", translation: "mirror" },
    { word: "piekarnik", translation: "oven" },
    { word: "poduszka (pod głowę)", translation: "pillow" },
    { word: "dywanik", translation: "rug" },
    { word: "półka", translation: "shelf" },
    { word: "prysznic", translation: "shower" },
    { word: "zlew", translation: "sink" },
    { word: "czujnik dymu", translation: "smoke detector" },
    { word: "sofa", translation: "sofa" },
    { word: "stół", translation: "table" },
    { word: "kran", translation: "tap" },
    { word: "toaleta, WC", translation: "toilet" },
    { word: "odkurzacz", translation: "vacuum cleaner" },
    { word: "szafa", translation: "wardrobe" },
    { word: "umywalka", translation: "washbasin" },
    { word: "pralka", translation: "washing machine" },
    { word: "komin", translation: "chimney" },
    { word: "podjazd (do garażu)", translation: "driveway" },
    { word: "wejście (do budynku)", translation: "entrance" },
    { word: "garaż", translation: "garage" },
    { word: "ogród", translation: "garden" },
    { word: "trawnik", translation: "lawn" },
    { word: "ścieżka", translation: "path" },
    { word: "patio, taras", translation: "patio" },
    { word: "dach", translation: "roof" },
    { word: "panel słoneczny", translation: "solar pannel" },
    { word: "cegła", translation: "brick" },
    { word: "beton", translation: "concrete" },
    { word: "granit", translation: "granite" },
    { word: "marmur", translation: "marble" },
    { word: "gips", translation: "plaster" },
    { word: "kamień", translation: "stone" },
    { word: "myć okna", translation: "clean the windows" },
    { word: "gotować obiad", translation: "cook dinner" },
    { word: "wykonywać prace domowe", translation: "do chores" },
    { word: "robić pranie", translation: "do the laundry" },
    { word: "odkurzać meble", translation: "dust the furniture" },
    { word: "nakrywać do stołu", translation: "lay the table" },
    { word: "odgrzać, podgrzać (jedzenie)", translation: "reheat" },
    { word: "szorować toaletę", translation: "scrub the toilet" },
    { word: "posprzątać bałagan", translation: "tidy up the mess" },
    { word: "odkurzyć podłogę", translation: "vacuum the floor" },
    { word: "podlać kwiaty", translation: "water the plants" },
    { word: "kupować artykuły spożywcze", translation: "buy groceries" },
    { word: "kosić trawę", translation: "cut the grass" },
    { word: "składać ubrania", translation: "fold the clothes" },
    { word: "kosiarka do trawy", translation: "lawnmower" },
    { word: "sznurek do suszenia prania", translation: "line" },
    { word: "przecierać ściereczką różne powierzchnie", translation: "wipe surfaces" },
    { word: "umeblowany pokój", translation: "furnisched room" },
    { word: "zakwaterowanie, mieszkanie", translation: "accommodation" },
    { word: "wyposażenie, udogodnienia", translation: "amenities" },
    { word: "umówić się z kimś w celu obejrzenia (np. mieszkania)", translation: "arrange a viewing" },
    { word: "przyległy", translation: "attached" },
    { word: "dostępny", translation: "available" },
    { word: "położony w centrum", translation: "centrally located" },
    { word: "część wspólna, obszar wspólny (dla mieszkańców)", translation: "common area" },
    { word: "dojeżdżac (np. do pracy)", translation: "commute" },
    { word: "przytulny", translation: "cosy" },
    { word: "ciasny", translation: "cramped" },
    { word: "zabudowany, na wymiar", translation: "fitted" },
    { word: "kuchnia zabudowana", translation: "fitted kitchen" },
    { word: "współlokator", translation: "roommate" },
    { word: "właścicielka (mieszkania, domu)", translation: "landlady" },
    { word: "właściciel (mieszkania, domu)", translation: "landlord" },
    { word: "położony", translation: "located" },
    { word: "luksusowy", translation: "luxurious" },
    { word: "brudny, nieposprzątany, zabałaganiony", translation: "messy" },
    { word: "nowoczesny", translation: "modern" },
    { word: "umowa miesięczna", translation: "monthly contract" },
    { word: "wynegocjować (lepsze warunki)", translation: "negotiate" },
    { word: "nowo wybudowany", translation: "newly built" },
    { word: "hałaśliwy", translation: "noisy" },
    { word: "staromodny, staroświecki", translation: "old-fashioned" },
    { word: "prywatny, osobisty", translation: "private" },
    { word: "cichy", translation: "quiet" },
    { word: "odnowiony", translation: "renovated" },
    { word: "wynajmować", translation: "rent" },
    { word: "mieszkalny (teren, obszar)", translation: "residential" },
    { word: "wspólny, użytkowany przez kilka osób", translation: "shared" },
    { word: "podpisac umowę", translation: "sign the contract" },
    { word: "przestronny", translation: "spacious" },
    { word: "czynsz", translation: "the rent" },
    { word: "schludny, uporządkowany", translation: "tidy" },
    { word: "media (np. prąd, gaz", translation: "utilities" },
    { word: "przystepny (w przystępnej cenie)", translation: "affordable" },
    { word: "elastyczny, podlegający negocjacji", translation: "flexible" },
    { word: "umowa najmu", translation: "lease agreement" },
    { word: "w ofercie", translation: "on offer" },
    { word: "lokator, najemca", translation: "tenant" },
    { word: "złożyć wniosek o kredyt hipoteczny", translation: "apply for a mortgage" },
    { word: "pomagać (komuś w czymś)", translation: "assist" },
    { word: "kupujący", translation: "buyer" },
    { word: "chętny/skory (do sprzedania czegoś)", translation: "eager" },
    { word: "agent nieruchomości", translation: "estate agent" },
    { word: "parapetówka", translation: "house-warming party" },
    { word: "zainwestować w coś", translation: "invest in sth" },
    { word: "licencjonowany", translation: "licensed" },
    { word: "złożyc ofertę", translation: "make an offer" },
    { word: "dzien otwarty (dla potencjalnych kupców)", translation: "open house" },
    { word: "przedział cenowy, widełki cenowe", translation: "price range" },
    { word: "nabyć", translation: "purchase" },
    { word: "pokazać komiś coś (np. nowy dom)", translation: "show sb around" },
    { word: "wykwalifikowany", translation: "skilled" },
    { word: "pożądana/ mająca wzięcie lokalizacja", translation: "saught-after address" },
    { word: "niewielka odległośc (którą można pokonać pieszo", translation: "walking distance" },
    { word: "gromadzić (np. kampitał)", translation: "amass" },
    { word: "historia kredytu", translation: "credit history" },
    { word: "zadatek, przedpłata", translation: "down payment" },
    { word: "dochód", translation: "income" },
    { word: "stopa procentowa", translation: "interest rate" },
    { word: "konto oszczędnościowe", translation: "savings account" },
    { word: "zaciągnąć kredyt hipoteczny", translation: "take out a mortgage" },
    { word: "zburzyć, wyburzyć", translation: "tear down" },
    { word: "folia bąbelkowa", translation: "bubble wrap" },
    { word: "uprzątnąć (coś)", translation: "clear" },
    { word: "klient", translation: "customer" },
    { word: "pakowac się", translation: "do the packing" },
    { word: "delikatny/kruchy przedmiot", translation: "fragile item" },
    { word: "oddać coś komuć (coś niepotrzebnego)", translation: "give sth away to sb" },
    { word: "wynająć", translation: "hire" },
    { word: "biuro leasingowe", translation: "leasing office" },
    { word: "brudzić", translation: "mess" },
    { word: "przeprowadzać się", translation: "move house" },
    { word: "wprowadzać się (do mieszkania lub domu)", translation: "move in" },
    { word: "osoba świadcząca usługi przeprowadzkowe", translation: "mover" },
    { word: "przedmiot ponadwymiarowy/ponadgabarytowy", translation: "oversize item" },
    { word: "pakowac", translation: "pack" },
    { word: "tylne drzwi", translation: "rear door" },
    { word: "przenosić się (do pracy w innej miejscowości, zmienić miejsce pracy)", translation: "relocate" },
    { word: "przeprowadzka, przenosiny", translation: "removal" },
    { word: "firma przeprowadzkowa", translation: "removal company" },
    { word: "przejrzeć, przeglądać (np. dokumenty)", translation: "sort through" },
    { word: "zapakować, zawinąć", translation: "wrap up" },
    { word: "warstwa farby", translation: "coat of paint" },
    { word: "odnowić, ozdobić", translation: "do up" },
    { word: "cześć/strona zewnętrzna", translation: "exterior" },
    { word: "wnętrze", translation: "interior" },
    { word: "utrzymywać, konserwować", translation: "maintain" },
    { word: "wypowiedzenie, wymówienie, zawiadomienie", translation: "notice" },
    { word: "wspólny ogród", translation: "shared garden" },
    { word: "podpisywać umowę najmu", translation: "sign a lease" },
]

var answer_box = document.getElementById("answer_text")
var word = document.getElementById("word")
var validation = document.getElementById("validation")
var correct_score = document.getElementById("correct_score")
var incorrect_score = document.getElementById("incorrect_score")


// Shuffle element from array, and inserting into "word" div 
var los = Math.floor(Math.random()*tab.length)
word.innerHTML=(tab[los].word)



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

