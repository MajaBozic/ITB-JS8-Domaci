// Ispisati mario piramidu odredjene visine (uzlazna i silazna 1na do 2.)

// n = 5

let n = 5
let i = 0
let red = ''

for(; i <= n; i++) {
    red += ' '.repeat(n-i) + '#'.repeat(i) + ' ' + '#'.repeat(i) + ' '.repeat(n-i) + '\n'
}
console.log(red)