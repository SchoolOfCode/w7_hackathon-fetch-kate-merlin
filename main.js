const imageOfDay = document.querySelector('img');
const title = document.querySelector('h2');
const description = document.querySelector('p');

let apiLink = "https://api.nasa.gov/planetary/apod?api_key=d1I88fYYUtxlURwBFr15pmDXpsIb0sAADqcKSHnh";


async function getImage(){
    const response = await fetch(apiLink);
    const obj = await response.json();
    imageOfDay.src = obj.url;
    return obj.url;

}
async function getTitle(){
    const response = await fetch(apiLink);
    const obj = await response.json();
    title.innerHTML = obj.title;
}

async function getDescription(){
    const response = await fetch(apiLink);
    const obj = await response.json();
    description.innerHTML = obj.explanation;
}

getImage();
getTitle();
getDescription();


