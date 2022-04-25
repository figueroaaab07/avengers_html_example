const cards = document.querySelectorAll('.card');
// for(let i=0; i < cards.length; i++) {
//   const pName = cards[i].children[0];
//   const img = cards[i].children[1];
//   const pPowers = cards[i].children[2];
//   const pFirstAppearance = cards[i].children[3];
//   const pActor = cards[i].children[4];
//   pName.textContent = avengers[i].name;
//   img.src = `./images/${avengers[i].image}`;
//   pPowers.textContent = avengers[i].powers;
//   pFirstAppearance.textContent = avengers[i].first_appearance;
//   pActor.textContent = avengers[i].actor;
// }
for(let i=0; i < cards.length; i++) {
  cards[i].remove()
}
function createCardFromHero(hero) {
  const card = document.createElement("section");
  card.className = "card";
  card.innerHTML =
  `
  <p class="p-name">Name: <span class="name">${hero.name}</span></p>
  <img class="image" src="images/${hero.image}"/ alt="hero_image" width="125" >
  <p class="p-powers">Powers: <span class="powers">${hero.powers}</span></p>
  <p class="p-first-appearance">${hero.first_appearance}<span class="first-appearance">A comic!</span></p>
  <p class="p-actor">Played by: <span class="actor">${hero.actor}</span></p>
  `
  return card;
}
const container = document.getElementsByClassName("container")[0];
// console.log(container);
for(let i=0; i < avengers.length; i++) {
  const card = createCardFromHero(avengers[i]);
  container.append(card);
}
