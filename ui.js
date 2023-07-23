// Arayüz işlemleri bu dosyada yapıcaz

const categoryList = document.querySelector(".categories");
const productList = document.querySelector(".products");

// Kategorileri ekrana yazdırma
export function renderCategories(categories) {

    categories.slice(0, 4).forEach((category) => {
        // console.log(category);
        // html elementi oluşturma
        const categoryDiv = document.createElement("div");
        // Category divine class ekleme
        categoryDiv.classList.add("category");

        // category div içerisindeki elemanları ekleme
        categoryDiv.innerHTML = `<img src="${category.image}"
        alt="Kategori">
        <span>${category.name}</span>
        `;

        // kategorileri categories divine ekleme
        categoryList.appendChild(categoryDiv);

    });

}

// Ürünleri ekrana bastırma
export function renderProducts(products) {
    products.slice(0, 39).forEach((product) => {
        console.log(product);
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `<img src="${product.images}"
        alt="Ürün">
            <p>${product.title}</p>
            <p>${product.category.name}</p>
            <div class="product-info">
            <p>777 tl</p>
            <button>Sepete ekle</button>
         </div>`;

         productList.appendChild(productDiv);
    });


}