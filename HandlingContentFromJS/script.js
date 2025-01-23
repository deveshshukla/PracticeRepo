'use strict';

//Make cards with JS
let arr = [
    {userName: "Dev", relStatus: "Stranger", userImg: "./media/randomuser1.jpeg"},
    {userName: "Sujain", relStatus: "Stranger", userImg: "./media/randomuser2.jpeg"},
    {userName: "Aasiliya", relStatus: "Stranger", userImg: "./media/randomuser3.jpeg"}
]

let htmlContainer = document.querySelector('.container');


function printCard() {
    let crads = "";

    arr.forEach(function(val, index) {
        crads += `<div class="card">
                <div class="card-header">
                    <img src="${val.userImg}" alt="Profile Picture">
                    <h2>${val.userName}</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quam perferendis praesentium ullam dolorem.</p>
                </div>
                <div class="card-footer">
                    <h2 id="${val.relStatus}" class="txtStatus">${val.relStatus}</h2>
                    <button id="${index}" class="btn ${val.relStatus}">
                    ${val.relStatus === "Stranger" ? "Add Friend" : "Remove Friend"}
                    </button>
                </div>
            </div>`
    })

    htmlContainer.innerHTML = crads;
}
//Call one time in starting of pageload.
printCard();

//Change status of card
htmlContainer.addEventListener('click', function(clickLocation) {
    /**
     * This is called 'Bubbling' if we don't set EventListener on Child, 
     * Then it looks in parent class for EventListener, if parent dont have then 
     * it will look for there parent class.
     */


    if (arr[clickLocation.target.id].relStatus === "Stranger") {
        arr[clickLocation.target.id].relStatus = "Friend";
        printCard();
    }else {
        arr[clickLocation.target.id].relStatus = "Stranger";
        printCard();
    }
});