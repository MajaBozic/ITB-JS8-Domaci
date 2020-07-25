// Ispisati prvih 1000 brojeva deljivih sa 5

let x

for (x = 1, i = 0; i < 1000; x++) {
    if (x % 5 === 0) {
    console.log(x)
    i++
    }
}
