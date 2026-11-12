const travelButton = document.getElementById("travelButton");
const message = document.getElementById("message");

travelButton.addEventListener("click", function() {
    message.textContent = "Отлично! Твое путешествие начинается!";
    message.style.color = "#e76c18";
});

console.log("TravelGo успешно запущен!");
