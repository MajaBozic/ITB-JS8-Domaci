// Napisati funkc. koja ispisuje sve el niza koji su deljivi sa 5

{
    let div5 = []

    function deljivo5(params) {
        for (let i = 0; i < params.length; i++){
            if (params[i] % 5 == 0) {
                div5.push(params[i])
            }
        } console.log(div5)
    } 
    // deljivo5([1, 17, 25, 47, 88, 90, 99, 100, 115])
    // deljivo5([10, 17, 33, 49, 55, 70, 79, 90, 111, 1005, 2020])
    deljivo5([1, 13, 23, 405, 1700, 207, 309, 210, 700, 3010, 1203, 9008])
}