/* Napraviti bar 4 objekta razlicitih pokemona koji sadrze sledece informacije
  * Ime 
  * Vrsta
  * Sposobnosti (niz sposobnosti pokemona)
  * Karakteristike (objekat sa informacijama : napad (broj, odbrana (broj), brzina (broj))

  
Dalje, napraviti niz od ovih objekata. */

let Pok1 = {
  ime : 'Primarina',
  vrsta : ['Water', 'Fairy'],
  sposobnosti : ['(hidden) Torrent Liquid Voice'],
  karakteristike : {Att : 74, Def : 74, Spd : 60},
}
// console.log(Pok1)

let Pok2 = {
  ime : 'Toucannon',
  vrsta : ['Normal', 'Flying'],
  sposobnosti : ['Keen Eye', 'Skill Link', '(hidden) Sheer Force'],
  karakteristike : {Att : 120, Def : 75, Spd : 60},
} 
// console.log(Pok2)

let Pok3 = {
  ime : 'Mudbray',
  vrsta : 'Ground',
  sposobnosti : ['Own Tempo', 'Stamina', '(hidden) Inner Focus'],
  karakteristike : {Att : 100, Def : 70, Spd : 45},
}
// console.log(Pok3)

let Pok4 = {
  ime : 'Shiinotic',
  vrsta : ['Grass', 'Fairy'],
  sposobnosti : ['Illuminaate', 'Effect Spore', 'Rain Dish'],
  karakteristike : {Att : 45, Def : 80, Spd : 30}
}
// console.log(Pok4)

let nizPok = [Pok1, Pok2, Pok3, Pok4]
  console.log(nizPok) 