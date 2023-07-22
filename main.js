// diğer dosyalardan geleneler
import {renderCategories} from "./ui.js";

// html'in yükleme anını izleme 
document.addEventListener('DOMContentLoaded',fetchCategories);


const baseURL="https://api.escuelajs.co/api/v1"

function fetchCategories(){

    fetch(`${baseURL}/categories`)
    .then((response)=>response.json())
    .then((data)=>renderCategories(data))
    .catch((error)=>console.log(error))

}
