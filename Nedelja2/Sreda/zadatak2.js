// Prodavnica 
// 1. napraviti promenljivu koja predstavlja cenu proizvoda koji kupac zeli da kupi
// 2. napraviti promenljivu koja predstavlja kolicinu novca koju kupac ima
// 3. ako kupac nema dovoljno novca, ispisati poruku 'Nemate dovoljno novca', a zatim ispisati trenutno stanje (ostaje isto)
// 4. ako ima dovoljno novca ispisati 'Uspesno ste kupili proizvod', a zatim ispisati trenutno stanje (sada izmenjeno)

let c, k, iK;
c = 750;
k = 1650; //650

iK = k - c;

(k > c) ? console.log('Uspesno ste kupili proizvod. Imate jos ' + iK + ' dinara.')    
    : console.log('Nemate dovoljno novca, vec samo ' + k + ' dinara.');
