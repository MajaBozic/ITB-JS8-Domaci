// Ispisati mario piramidu odredjene visine (penje se s l. na d.)

// n = 5

let n = 5
let i = 0
let red = ''

for(; i <= n; i++) {
    red += ' '.repeat(n-i) + '#'.repeat(i) + '\n'
}
console.log(red)