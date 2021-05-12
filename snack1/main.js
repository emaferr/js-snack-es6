// Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
// nome 
// peso

const bici = [ 

    {
        nome : "LA SFRENATA" ,
        peso : 700
    } ,

    {
        nome : "IL FULMINE" ,
        peso : 500
    } ,

    {
        nome : "BAT BICI" ,
        peso : 1200 
    } ,

    {
        nome : "TORO SEDUTO" ,
        peso : 870
    } ,
 
]

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// Metodo diretto

// const [ , bicidue ] = bici ;

// const { nome , peso } = bicidue ;

// document.getElementById( "bici_leggera" ).insertAdjacentHTML( "beforeend" , 

// `

// <li>La bici più leggiadra è ${ nome } con un peso complessivo di ${ peso } grammi!</li>

// `
// ) ;

// Metodo con verifica

let biciLeggera = bici[0] ;

for (let i = 0; i < bici.length; i++) {
    const biciSingola = bici[i];
    
    if ( biciSingola.peso < biciLeggera.peso ) {

        biciLeggera = biciSingola

    }
}

document.getElementById( "bici_leggera" ).insertAdjacentHTML( "beforeend" , 

`

<li>La bici più leggera è ${ biciLeggera.nome } con un peso complessivo di ${ biciLeggera.peso } grammi!</li>

`
) ;

