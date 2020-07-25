// Ispisati mario piramidu odredjene visine (silazi s l. na d.)

// n = 5

let n = 5
let i = 0
let red = ''

for(; i <= n; i++) {
    red += '#'.repeat(i) + ' '.repeat(n-i) + '\n'
}
console.log(red)