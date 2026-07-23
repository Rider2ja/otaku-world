/* =================================
   OTAKU WORLD - SCRIPT.JS
   PART 1
================================= */


// ================================
// SUCHFUNKTION
// ================================


const searchInput = document.getElementById("searchBar");


if(searchInput){

searchInput.addEventListener("keyup", function(){

let searchValue = searchInput.value.toLowerCase();


let animeCards = document.querySelectorAll(".anime-card");


animeCards.forEach(card => {


let title = card
.querySelector("h3")
.textContent
.toLowerCase();



if(title.includes(searchValue)){


card.style.display="block";


}

else{


card.style.display="none";


}



});


});


}





// ================================
// SCROLL BUTTON
// ================================


const scrollButton =
document.getElementById("scrollTop");



window.addEventListener("scroll",()=>{


if(window.scrollY > 500){


scrollButton.style.display="block";


}

else{


scrollButton.style.display="none";


}


});





if(scrollButton){


scrollButton.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}





// ================================
// BUTTON EFFEKT
// ================================


const buttons =
document.querySelectorAll("button");



buttons.forEach(button=>{


button.addEventListener("click",()=>{


button.style.transform="scale(0.95)";


setTimeout(()=>{


button.style.transform="";


},150);



});


});/* =================================
   LIKE / DISLIKE SYSTEM
================================= */


const likeButtons =
document.querySelectorAll(".like-btn");


likeButtons.forEach(button=>{


button.addEventListener("click",()=>{


let count =
button.querySelector(".count");



let number =
parseInt(count.textContent);



number++;


count.textContent = number;



button.classList.add("liked");



});


});





const dislikeButtons =
document.querySelectorAll(".dislike-btn");



dislikeButtons.forEach(button=>{


button.addEventListener("click",()=>{


let count =
button.querySelector(".count");



let number =
parseInt(count.textContent);



if(number > 0){

number--;

}



count.textContent = number;



});


});





// ================================
// FAVORITEN SYSTEM
// ================================



const favoriteButtons =
document.querySelectorAll(".favorite");



favoriteButtons.forEach(button=>{


button.addEventListener("click",()=>{


button.classList.toggle("active");



if(button.classList.contains("active")){


button.textContent="❤️ Favorit";


}


else{


button.textContent="🤍 Favorit";


}



});


});






// ================================
// ANIMATION BEIM SCROLLEN
// ================================



const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{

threshold:0.15

});





const animatedElements =
document.querySelectorAll(
".anime-card, .ranking-card, .news-card, .category"
);



animatedElements.forEach(element=>{


observer.observe(element);


});






// ================================
// PROFIL SYSTEM VORBEREITUNG
// ================================



let user = {


name:"Gast Otaku",

level:1,

favorites:0,

reviews:0


};



function showProfile(){


console.log(
"Willkommen " + user.name
);


console.log(
"Level: " + user.level
);


}




showProfile();/* =================================
   ANIME DATEN SYSTEM
================================= */


const animeData = [

{
name:"Solo Leveling",
genre:"Action Fantasy",
rating:9.4
},

{
name:"One Piece",
genre:"Abenteuer Fantasy",
rating:9.3
},

{
name:"Attack on Titan",
genre:"Action Drama",
rating:9.2
},

{
name:"Demon Slayer",
genre:"Action Fantasy",
rating:9.1
},

{
name:"Jujutsu Kaisen",
genre:"Action Übernatürlich",
rating:9.0
}


];





// ================================
// ANIME SUCHERWEITERUNG
// ================================



function searchAnime(value){


let result = animeData.filter(anime =>


anime.name
.toLowerCase()
.includes(value.toLowerCase())

);



return result;


}





// ================================
// KOMMENTAR SYSTEM VORBEREITUNG
// ================================



let comments = [];



function addComment(username,text){


let newComment = {


user:username,

message:text,

date:new Date()


};



comments.push(newComment);



console.log(
"Neuer Kommentar:",
newComment

);


}





// Beispiel

addComment(
"Gast Otaku",
"Dieser Anime ist unglaublich!"
);







// ================================
// BEWERTUNGS SYSTEM
// ================================



function rateAnime(anime,rating){


console.log(

anime +
" wurde mit "
+
rating
+
" Sternen bewertet"

);


}





// ================================
// BENACHRICHTIGUNGEN
// ================================



function notification(message){


let box =
document.createElement("div");


box.className="notification";


box.textContent=message;



document.body.appendChild(box);




setTimeout(()=>{


box.remove();


},3000);



}





// Test Nachricht

setTimeout(()=>{


notification(
"🔥 Willkommen bei Otaku World!"
);


},2000);







// ================================
// DARK MODE VORBEREITUNG
// ================================



const modeButton =
document.querySelector(".mode-button");



if(modeButton){


modeButton.addEventListener("click",()=>{


document.body.classList.toggle(
"light-mode"
);


});


}/* =================================
   LOCAL STORAGE SYSTEM
================================= */


// Favoriten speichern


let favorites = 
JSON.parse(localStorage.getItem("favorites"))
|| [];



function saveFavorites(){


localStorage.setItem(

"favorites",

JSON.stringify(favorites)

);


}





function addFavorite(anime){


if(!favorites.includes(anime)){


favorites.push(anime);


saveFavorites();



notification(
anime + " wurde gespeichert ❤️"
);


}



}







// ================================
// PROFIL SPEICHERN
// ================================



function saveUser(){


localStorage.setItem(

"otakuUser",

JSON.stringify(user)

);


}




function loadUser(){


let savedUser =
localStorage.getItem("otakuUser");



if(savedUser){


user =
JSON.parse(savedUser);



}



}



loadUser();







// ================================
// ANIME CARD INTERAKTION
// ================================



const cards =
document.querySelectorAll(".anime-card");



cards.forEach(card=>{


card.addEventListener("mouseenter",()=>{


card.style.cursor="pointer";


});



card.addEventListener("click",()=>{


let animeName =
card.querySelector("h3").textContent;



notification(

"Du schaust: "
+
animeName

);


});


});







// ================================
// LADE EFFEKT
// ================================



window.addEventListener(
"load",
()=>{


document.body.classList.add(
"loaded"
);


});







// ================================
// TASTATUR SHORTCUT
// ================================



document.addEventListener(
"keydown",
(event)=>{


// STRG + K öffnet Suche


if(event.ctrlKey && event.key==="k"){


event.preventDefault();


searchInput.focus();


}



});






// ================================
// START MELDUNG
// ================================



console.log(

"🌌 Otaku World erfolgreich gestartet!"

);

console.log(

"🔥 Anime Community bereit!"

);
