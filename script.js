const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517800/preview", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://moringa.instructure.com/courses/967/files/517799/preview", rating: 6, comment: "The best" },
    { id: 4, name: "Shio Ramen", restaurant: "Ippudo", image: "https://moringa.instructure.com/courses/967/files/517798/preview" },
    { id: 5, name: "Spicy Ramen", restaurant: "Ramen House", image: "https://moringa.instructure.com/courses/967/files/517797/preview" }
 ];
  
function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu")

    ramens.forEach(ramen => {
        const imgElement = document.createElement("img");
        imgElement.src = ramen.image;
        imgElement.alt = ramen.name;
        imgElement.style.width = "120px";
        imgElement.style.margin = "5px";

        ramenMenu.appendChild(imgElement);
    });
}

function handleClick(ramen) {
    const ramenDetail = document.getElementById("ramen-detail");

    ramenDetail.innerHTML = `
    <h2>${ramen.name}</h2>
    <h3>Restaurant: ${ramen.restaurant}</h3>
    <p><strong>Rating:</strong> ${ramen.rating || "N/A"}</p>
    <p><strong>Comment:</strong> ${ramen.comment || "No comment available"}</p>
    <img src="${ramen.image}" alt="${ramen.name}" style="width:200px; margin-top:10px;">
`;
}