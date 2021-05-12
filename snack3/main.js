// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

const parole = [ "casa" , "scuola" , "albero" , "mare" , "montagna" , "sole"] ;

function arrayContenuto ( array , valoreMin , valoreMax ) {

    const nuovoArray = [] ;

    // Usiamo i nuovi metodi degli array foreach o filter.

    array.forEach( ( elemento , index ) => {

        if ( index < valoreMax - 1 && index >= valoreMin ) {

          nuovoArray.push( elemento )

        }
        
    });

    // La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

    return nuovoArray
}

let risultato = arrayContenuto( parole , 2 , 6 ) ;

console.log(risultato);


// Metodo con arrow function //

// const nuovoArray = [] ;

// let numeroA= 1 ;

// let numeroB = 6 ;

// const arrayContenuto = parole.forEach( ( parola , i ) => {

//     if ( i < numeroB - 1 && i >= numeroA ) {

//         nuovoArray.push(parola)

//     }

// } )


// console.log(nuovoArray);







