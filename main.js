function loadData(){

    fetch('../json/data.json')
        .then((response) => response.json())
        .then((data) => {
        console.log(data.p1);
        console.log(data.p2);
        document.querySelector('#aboutDrake').innerText = data.p1;
        document.querySelector('#aboutDrake2').innerText = data.p2;
        
    });    
}


function store(){ //stores items in the localStorage
    var album = document.getElementById('album').value;
    var rating = document.getElementById('rating').value;
    var fullName = document.getElementById('fullName').value;

    const completeRating = {
        album: album,
        rating: rating,
    }

    window.localStorage.setItem(fullName,JSON.stringify(completeRating));  
    //converting object to string
}

function retrieveRecords(){ //retrieves items in the local storage
    var fullName = document.getElementById('retrieveRating').value; //gets full name from user
    console.log("retrive records");
    var records = JSON.parse(window.localStorage.getItem(fullName)); //searches for the full name in local storage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(`album: ${records.album} rating: ${records.rating}`);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

function removeItem(){ //deletes item from localStorage
    var fullName = document.getElementById('retrieveRating').value; //gets fullname from user
    localStorage.removeItem(fullName) //passes full name to the removeItem method
    console.log("remove items");
}

// function clearStorage(){ //clears the entire localStorage
//     localStorage.clear()
//     console.log("clear records");
// }

window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("ratingForm").onsubmit = store
    // document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}