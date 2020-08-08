console.log('Zadatak1.js')

/* Napraviti bar 4 objekta razlicitih pokemona koji sadrze sledece informacije
  * Ime 
  * Vrsta
  * Sposobnosti (niz sposobnosti pokemona)
  * Karakteristike (objekat sa informacijama : napad (broj, odbrana (broj), brzina (broj))

  
Dalje, napraviti niz od ovih objekata. */

let Pok1 = {
  ime: 'Primarina',
  vrsta: ['Water', 'Fairy'],
  sposobnosti: ['(hidden) Torrent Liquid Voice'],
  karakteristike: { Nap: 74, Odbr: 74, Brzn: 60 },
}
// console.log(Pok1)

let Pok2 = {
  ime: 'Toucannon',
  vrsta: ['Normal', 'Flying'],
  sposobnosti: ['Keen Eye', 'Skill Link', '(hidden) Sheer Force'],
  karakteristike: { Nap: 120, Odbr: 75, Brzn: 60 },
}
// console.log(Pok2)

let Pok3 = {
  ime: 'Mudbray',
  vrsta: 'Ground',
  sposobnosti: ['Own Tempo', 'Stamina', '(hidden) Inner Focus'],
  karakteristike: { Nap: 100, Odbr: 70, Brzn: 45 },
}
// console.log(Pok3)

let Pok4 = {
  ime: 'Shiinotic',
  vrsta: ['Grass', 'Fairy'],
  sposobnosti: ['Illuminaate', 'Effect Spore', 'Rain Dish'],
  karakteristike: { Nap: 45, Odbr: 80, Brzn: 30 }
}
// console.log(Pok4)

let nizPok = [Pok1, Pok2, Pok3, Pok4]
console.log(nizPok)
console.log('************************************************************')


console.log('Zadatak2.js')

/* Napraviti funkciju koja prima niz gore napravljenih objekata i vraca jedan niz sposobnosti svih pokemona 
 ```
[<...>,...]
 ```
*/


function nizSposP(nizPok) {
  let nizSpos = []
  nizPok.forEach(Pok => {
    nizSpos.push(Pok.sposobnosti)
  })
  return nizSpos.flat()
}


console.log('************************************************************')


console.log('Zadatak3.js')

/* Sortirati pokemone po brzini, rastuce */

nizPok = [Pok1, Pok2, Pok3, Pok4]

nizPok.sort((a, b) => a.karakteristike.Brzn - b.karakteristike.Brzn)

console.log(nizPok)

