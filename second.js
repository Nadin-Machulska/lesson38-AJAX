const movieNameInput = document.getElementById('movieTitle');
const movieYearRelease = document.getElementById('yearRelease');
const submitButton = document.querySelector('.form__button');
const outputTitle = document.querySelector('.output__title');
const outputImg = document.querySelector('.output__img img');
const servResponce = document.querySelector('.title');
const wrapper = document.querySelector('.wrapper');
const resultList = document.querySelector('.result-list');
const option = document.querySelectorAll('.type__select option');

// const url = `http://www.omdbapi.com/?apikey=2b36207a&s=${s}&y=${y}`



submitButton.addEventListener('click', sumbitRequest)

function sumbitRequest(event){
    event.preventDefault();

    resultList.innerText = '';
    
    let s = `${movieNameInput.value}`;
    let y = `${movieYearRelease.value}`;
    let type = ``;

    option.forEach(getOptionValue);

    function getOptionValue(element){

            if (element.selected){
                return type = `${element.value}`
            };
        }



    const url = `http://www.omdbapi.com/?apikey=2b36207a&s=${s}&y=${y}&type=${type}`
    
    const xhr = new XMLHttpRequest();

        xhr.open("GET", url);

        xhr.send();
        
        xhr.onload = () => {
           
            let a = JSON.parse(xhr.responseText);
            // let today = new Date();
            // let year = today.getFullYear();
            console.log(a.Search);
            a.Search.forEach(e => createResultOfSearch (e.Title, e.Poster));
        };
        
        function createResultOfSearch (title, source){

            let resultItem = document.createElement('li');
            resultItem.classList.add('result-item');
            resultList.append(resultItem)

            let divTitle = document.createElement("div");
            divTitle.setAttribute("class", "output__title");
            divTitle.innerHTML += `${title}`;
        
            resultItem.append(divTitle);

            let divImg = document.createElement("img");
        
            if (source == "N/A"){
                divImg.setAttribute('src', 'images/erorr-404.jpg');
            } else {
                divImg.setAttribute('src', `${source}`);
            }
        
            resultItem.append(divImg)
        }
}

document.querySelectorAll('.type__select')