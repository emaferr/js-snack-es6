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

const [ , bicidue ] = bici ;

const { nome , peso } = bicidue ;

document.getElementById( "bici_leggera" ).insertAdjacentHTML( "beforeend" , 

`

<li>La bici più leggera è ${ nome } con un peso complessivo di ${ peso } grammi!</li>

`
) ;
