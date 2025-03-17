const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517800/preview", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://moringa.instructure.com/courses/967/files/517799/preview", rating: 6, comment: "The best" },
    { id: 4, name: "Shio Ramen", restaurant: "Ippudo", image: "https://moringa.instructure.com/courses/967/files/517798/preview", rating: 5, comment: "Average" },
    { id: 5, name: "Spicy Ramen", restaurant: "Ramen House", image: "https://moringa.instructure.com/courses/967/files/517797/preview", rating: 8, comment: "The best" }
 ];


function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");


    ramens.forEach((ramen, index) => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.style.cursor = "pointer";

        img.addEventListener("click", () => handleClick(index));
        ramenMenu.appendChild(img);
    });
}

 
function handleClick(index) {
    const ramen = ramens[index];
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = `Rating: ${ramen.rating}`;
    document.getElementById("ramen-comment").textContent = `Comment: ${ramen.comment}`;
}
function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");

    form.addEventListener
    ("submit", function (event) {
        event.preventDefault();

        const newRamen = {
            name: document.getElementById("name").value,
            restaurant: document.getElementById("restaurant").value,
            image: document.getElementById("image").value,
            rating: document.getElementById("rating").value,
            comment: document.getElementById("comment").value
        };

        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}

 
function main() {
    displayRamens();
    addSubmitListener();
}

const div = document.getElementById("new-ramen-form");
        div.style.position = "flex";
        div.style.top = "50%";
        div.style.right = "50%";
        div.style.padding = "100px";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        
        