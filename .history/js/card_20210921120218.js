const cardTemplate= document.getElementById('video-card');
const cardGrid= document.getElementById('card-grid');


for (let i=1; i<=42; i++){
    const card= cardTemplate.content.cloneNode('card-grid')
    cardGrid.appendChild(card)
}
