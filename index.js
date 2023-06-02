fetch('./class.json').then((response.json)).then((json.card)=>())
console.log(jsondata)
const cardsContainer= document.getElementById("card-container");

jsonData.forEach((item)) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(card);
});
