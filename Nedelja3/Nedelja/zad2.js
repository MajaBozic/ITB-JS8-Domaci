// Napisati funkc. koja vraca koliko pice vam je potrebno za dozivotno snabdevanje 
// Unosi se koliko pice pojedete na mesecnom nivou i koliko godina imate
// (do stote godine)

    function dozivotno(mesecno, god) {
        let snabdevanje = 0
            if(mesecno >= 0 && god > 0 && god < 100 ){
                return snabdevanje += (mesecno * (100 - god) * 12)
                console.log(snabdevanje)
            }
            else {
                return "Unesite validne argumente"
            }
   }
    // console.log(dozivotno(10, 26))
    // console.log(dozivotno(-11, 26))
    // console.log(dozivotno(1, 99))
    // console.log(dozivotno(3, 99))
    // console.log(dozivotno(1, 111))

