// Za dva broja (a, b) ispisati njihov 
// zbir, razliku, proizvod, kolicnik, ostatak pri deljenju, stepen (a^b)


let a, b

if(a = 7, b = 5){
    console.log('Odabrani brojevi su', a,'i', b)
    let Z = a + b
    console.log('Zbir =>', Z)
    let R = a - b
    console.log('Razlika =>', R)
    let P = a * b
    console.log('Proizvod =>', P)
    let K = a / b
    console.log('Kolicnik =>', K)
    let O = a % b
    console.log('Ostatak pri deljenju prvog drugim =>', O)
    let S = Math.pow(7, 5)
    console.log('Stepenovanje prvog drugim =>', S)
}