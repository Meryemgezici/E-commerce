// diğer dosyalardan geleneler
import {renderCategories, renderProducts} from "./ui.js";
// import  {renderProducts} from "./ui.js";
// html'in yükleme anını izleme 
document.addEventListener('DOMContentLoaded',()=>{
    fetchCategories();
    fetchProducts();
});


const baseURL="https://api.escuelajs.co/api/v1"

// categories dinamik olarak çekildi
function fetchCategories(){

    fetch(`${baseURL}/categories`)
    .then((response)=>response.json())
    .then((data)=>renderCategories(data))
    .catch((error)=>console.log(error))

}


// Ürünleri dinamik olarak çekme

async function fetchProducts(){
    try {
        const res=await fetch(`${baseURL}/products`);
        const data=await res.json();
        renderProducts(data);
    } catch (error) {
        console.log(error);
    }
   

}
