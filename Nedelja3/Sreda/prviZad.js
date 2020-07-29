// Napisati f-ju koja vraca maksimum od tri broja (parametri f-je - tri broja)

let a, b, c
let rezultat

function maxOd3(a, b, c) {
    if (a > b && a > c) {
        rezultat = a 
    }
    else if (b > a && b > c) {
        rezultat = b 
    }
    else {
        rezultat = c
    }
    console.log(rezultat)
    return rezultat
}

// maxOd3(3,5,7)
// maxOd3(23,35,17)
// maxOd3(39,45,77)
// maxOd3(313,205,197)
// maxOd3(1143,2005,397)
// maxOd3(1203,5790,759)