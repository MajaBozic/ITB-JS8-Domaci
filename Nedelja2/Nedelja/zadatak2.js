// Za prvih 100 brojeva ispisati : 
    // FizzBuzz ako je br deljiv i sa 3 i sa 5 
    // Fizz ako je deljiv samo sa 3
    // Buzz ako je deljiv samo sa 5
    // Broj ako nije deljiv ni sa 3 ni sa 5 (1,2,Fizz,4,Buzz,...)

    

    for (let x = 1; x<=100; x++) {
        if (x % 5 === 0 && x % 3 === 0) {
            console.log('FizzBuzz')
        }
        else if (x % 5 === 0) {
            console.log('Buzz')
        }
        else if (x % 3 === 0) {
            console.log('Fizz')
        }
        else {
            console.log(x)
        }
    }
