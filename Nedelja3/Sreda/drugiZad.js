// Napisati f-ju koja izracunava cenu pice po kvadr.cm (parametri-r u cm i cena pice)

let r = 21
let cena = 1499
let pP, cQcm

function cmQ(r, cena) {
    if(r > 0 && cena > 0) {
        pP = r * r * Math.PI 
        // console.log(pP)     //(pP.toFixed(2))
        cQcm = cena / pP
        console.log(cQcm)   // (cQcm.toFixed(2))
        }
        else {
            console.log('Unos nije validan')
        }
    }

// cmQ(21, 1499)
// cmQ(18, 1458)
// cmQ(25, 1970)