const movieNameInput = document.getElementById('movieTitle');
const movieYearRelease = document.getElementById('yearRelease');
const submitButton = document.querySelector('.form__button');
const outputTitle = document.querySelector('.output__title');
const outputImg = document.querySelector('.output__img img');
const servResponce = document.querySelector('.title');
const wrapper = document.querySelector('.wrapper')

// const url = `http://www.omdbapi.com/?apikey=2b36207a&s=${s}&y=${y}`



submitButton.addEventListener('click', sumbitRequest)

function sumbitRequest(event){
    event.preventDefault();
    
    
    let s = `${movieNameInput.value}`;
    let y = `${movieYearRelease.value}`;

    const url = `http://www.omdbapi.com/?apikey=2b36207a&s=${s}&y=${y}`
    
    const xhr = new XMLHttpRequest();

        xhr.open("GET", url);

        xhr.send();
        
        xhr.onload = () => {
           
            let a = JSON.parse(xhr.responseText);
        
        
            console.log(a.Search);
            a.Search.forEach(e => createResultOfSearch (e.Title, e.Poster));
        };
        
        function createResultOfSearch (title, source){
            let divTitle = document.createElement("div");
            divTitle.setAttribute("class", "output__title");
            divTitle.innerHTML += `${title}`;
        
            wrapper.append(divTitle);
            let divImg = document.createElement("img");
        
            if (source == "N/A"){
                divImg.setAttribute('src', './image/http-error-404-not-found.png');
            } else {
                divImg.setAttribute('src', `${source}`);
            }
        
            wrapper.append(divImg)
        }
}

