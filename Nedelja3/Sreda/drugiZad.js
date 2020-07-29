// Napisati f-ju koja izracunava cenu pice po kvadr.cm (parametri-r u cm i cena pice)

let r = 21
let cena = 1499
let pP

pP = r * r * Math.PI 
console.log(pP)

if (r > 0 && cena > 0) {
    let cQcm = cena / pP
    console.log(cQcm.toFixed(2))
}
else {
    console.log('Unos nije validan')
}