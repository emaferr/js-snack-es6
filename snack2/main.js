// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
// nome,      Nome sarà l’unica proprietà da compilare,
// punti fatti,   settate a 0.
// falli subiti.  settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

const generaPunti = () => Math.floor( Math.random() * ( 100 - 3 + 1 ) + 3 ) ;

const generaFalli = () => Math.floor( Math.random() * ( 300 - 30 + 1 ) + 30 ) ;

const Squadre = [ 

    {
        nome : "Milan" , 
        punti : generaPunti() ,
        falliSubiti : generaFalli() ,
    } ,

    {
        nome : "Inter" , 
        punti : generaPunti() ,
        falliSubiti : generaFalli() ,
    } ,

    {
        nome : "Roma" , 
        punti : generaPunti() ,
        falliSubiti : generaFalli() ,
    } ,

    {
        nome : "Lazio" , 
        punti : generaPunti() ,
        falliSubiti : generaFalli() ,
    } ,

    {
        nome : "Bologna" , 
        punti : generaPunti() ,
        falliSubiti : generaFalli() ,
    } ,

    {
        nome : "Cagliari" , 
        punti : generaPunti() ,
        falliSubiti : generaFalli() ,
    } 

 ] 

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 

const nuovoArray = [] ;

for (let index = 0; index < Squadre.length; index++) {

    const squadra = Squadre[index] ;

    const nuovaSquadra = {

         nome : squadra.nome ,
         falliSubiti : squadra.falliSubiti

    };

    nuovoArray.push(nuovaSquadra)

}

// stampiamo tutto in console.

console.log(nuovoArray);

// _______________________________________________________  //

// Metodo alternativo per ottenere lo stesso risultato evitando la creazione dell'array

// for (const {nome: n, falliSubiti: f } of Squadre) {
//     console.log('Squadra: ' + n + ', Falli subiti: ' + f );
// }
  




