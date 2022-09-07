// const method = 'GET';

// const responseObject = [];

// function sendRequest(method, url) {
    //     return fetch(url).then(response => {
        //         return response.json();
        //     });
// }


// function submitRequest(e) {
//     e.preventDefault();

//     let t = `${movieNameInput.value}`;
//     let y = `${movieYearRelease.value}`;
//     const requestMovie = `http://www.omdbapi.com/?i=tt3896198&apikey=2b36207a&t=${t}&y=${y}`;
//     // const poster = `http://img.omdbapi.com/?i=tt3896198&apikey=93d0c8d2&t=${t}`;

//     sendRequest('GET', requestMovie).then(data => {
//         outputTitle.innerText = JSON.stringify(data['Title']);
//         outputImg.src = data['Poster'];

//         responseObject.push(data);

//         console.log(data);
//     });
//     // sendRequest('GET', poster).then(data => output.innerText = JSON.stringify(data));
// }


const responseObject = [];


const movieNameInput = document.getElementById('movieTitle');
const movieYearRelease = document.getElementById('yearRelease');
const submitButton = document.querySelector('.form__button');
const outputTitle = document.querySelector('.output__title');
const outputImg = document.querySelector('.output__img img');
const servResponce = document.querySelector('.title');


// submitButton.addEventListener('click', (e) =>{

//     e.preventDefault();
    // submitButton.onclick = function(e){
        submitButton.addEventListener('click', (e) =>{

        e.preventDefaullt();

        let t = `${movieNameInput.value}`;
        let y = `${movieYearRelease.value}`;
    
        const userInput = document.querySelector('.title__input').value;
        // userInput = encodeURIComponent(userInput);
    
    
        const xhttp = new XMLHttpRequest();
    
        https://www.omdbapi.com/?i=tt3896198&apikey=2b36207a&s=friends
        // xhttp.open('POST', 'http://www.omdbapi.com/?i=tt3896198&apikey=2b36207a&t=${t}&y=${y}');
        
        // const formData = new FormData(document.forms.nameOfMovie);
        
        // xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        
        // xhttp.onload = function (){
        //     console.log('alfall')
            
        // }

        
        xhttp.open('GET', 'https://www.omdbapi.com/?i=tt3896198&apikey=2b36207a&s=')
        
        
        xhttp.send();
        
        xhttp.onreadystatechange = function(){

            if (this.readyState == 4 && this.status == 200){
                console.log(aaaaa)
                } 
        }    

        // outputTitle.innerText = JSON.stringify(data['Title']);
        // outputImg.src = data['Poster'];
        console.log('sfl;')

        responseObject.push(data);

    })






    






