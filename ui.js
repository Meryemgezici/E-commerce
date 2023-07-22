// Arayüz işlemleri bu dosyada yapıcaz

const categoryList=document.querySelector(".categories");

export function renderCategories(categories) {

    categories.forEach((category) => {
        console.log(category);
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