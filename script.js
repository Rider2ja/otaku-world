/* =================================
   OTAKU WORLD - SCRIPT.JS
   VERSION 2.0
================================= */



// ================================
// SCROLL BUTTON
// ================================


const scrollButton = document.getElementById("scrollTop");


window.addEventListener("scroll", () => {


    if(scrollButton){

        if(window.scrollY > 500){

            scrollButton.style.display = "block";

        }else{

            scrollButton.style.display = "none";

        }

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
// ANIME SUCHFUNKTION
// ================================


const searchInput =
document.getElementById("animeSearch")
||
document.getElementById("searchBar");



if(searchInput){


searchInput.addEventListener("keyup",()=>{


let search =
searchInput.value.toLowerCase();



let cards =
document.querySelectorAll(".anime-card");



cards.forEach(card=>{


let name =
card.querySelector("h3")
.textContent
.toLowerCase();



if(name.includes(search)){


card.style.display="block";


}else{


card.style.display="none";


}



});


});


}






// ================================
// ANIME INFO
// ================================


function showInfo(anime){


alert(

"🎬 " + anime +

"\n\n⭐ Bewertung: Community Favorit" +

"\n🔥 Rang: Wird bewertet" +

"\n\nWeitere Informationen folgen!"

);


}







// ================================
// FAVORITEN SYSTEM
// ================================


function addFavorite(anime){


let favorites =

JSON.parse(

localStorage.getItem("favorites")

)

|| [];





if(!favorites.includes(anime)){


favorites.push(anime);



localStorage.setItem(

"favorites",

JSON.stringify(favorites)

);



notification(

"❤️ " + anime + " gespeichert!"

);



}else{


notification(

"⭐ " + anime + " ist bereits gespeichert!"

);


}



}






// ================================
// LIKE SYSTEM
// ================================


function likePost(button){


let span =
button.querySelector("span");



if(span){


let number =
parseInt(span.innerText);



number++;


span.innerText = number;


}


}







// ================================
// FAVORIT BUTTON DESIGN
// ================================


document.querySelectorAll(".favorite")
.forEach(button=>{


button.addEventListener("click",()=>{


button.classList.toggle("active");



if(button.classList.contains("active")){


button.innerHTML =
"❤️ Favorit";


}else{


button.innerHTML =
"🤍 Favorit";


}



});


});







// ================================
// BENACHRICHTIGUNGEN
// ================================


function notification(text){



let box =
document.createElement("div");



box.className =
"notification";



box.innerHTML=text;



document.body.appendChild(box);




setTimeout(()=>{


box.remove();


},3000);



}








// ================================
// KOMMENTARE VORBEREITUNG
// ================================


let comments =

JSON.parse(

localStorage.getItem("comments")

)

|| [];





function addComment(user,text){


let comment={


user:user,

message:text,

date:new Date().toLocaleDateString()


};



comments.push(comment);



localStorage.setItem(

"comments",

JSON.stringify(comments)

);



notification(
"💬 Kommentar hinzugefügt!"
);



}







// ================================
// PROFIL SYSTEM
// ================================



let user =

JSON.parse(

localStorage.getItem("user")

)

|| {


name:"Gast Otaku",

level:1,

favorites:0,

comments:0


};






function saveProfile(){


localStorage.setItem(

"user",

JSON.stringify(user)

);


}






// ================================
// START
// ================================


window.addEventListener("load",()=>{


console.log(

"🌌 Otaku World erfolgreich gestartet!"

);



});
