// Sacuvati promenljive cena i precnik pice
// Izracunati cenu pice po cm** (P se racuna sa r poluprecnikom)
// Ispisati taj rezultat u konz.

let cP      // = 799
let RP      // = 42
let rP = RP / 2
// console.log(rP)
let pP = rP * rP * Math.PI
// console.log(pP)

if (cP > 0 && RP > 0) {
    let cQp = cP / pP
    console.log(cQp.toFixed(2))
}
else {
    console.log('Nije validan unos cene i/ili precnika.')
}