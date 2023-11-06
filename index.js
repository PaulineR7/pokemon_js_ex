// Je déclare en variable mon élément HTML
const cards = document.querySelectorAll('.card')

// Je parcours tous les éléments de ma div ".card"
cards.forEach((card) => {
// je fais une fonction qui donne un event "click"
    card.addEventListener("click", () => {
// Je déclare les boutons de chaque div ".card"
        const button = card.querySelector("button")
// Je fais apparaître le bouton à chaque clique de la div auquel il appartient
        button.style.display = "block"
    })
})