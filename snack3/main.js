// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// Usiamo i nuovi metodi degli array foreach o filter.
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const parole = [ "casa" , "scuola" , "albero" , "mare" , "montagna" , "sole"] ;

const nuovoArray = [] ;

let numeroA= 1 ;

let numeroB = 6 ;

const arrayContenuto = parole.forEach( ( parola , i ) => {

    if ( i < numeroB - 1 && i >= numeroA ) {

        nuovoArray.push(parola)

    }

} )


console.log(nuovoArray);








