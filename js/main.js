// Consegna prima parte
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// consegna seconda parte
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


let button = document.getElementById("play_button");
let punteggio = 0;
let gridElement = document.querySelector('div.grid')
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
button.addEventListener("click", 
    function Game()
    {   
        // reset dei numeri selezionati in pagina
       gridElement.innerHTML = ''
            
        // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
        //array vuoto
       let bombArr = [];

        // Finché l'array non ha 16 elementi, genera numeri casuali unici tra 1 e 100 e li aggiunge all'array
        while (bombArr.length < 16) {
            let randomNum = Math.floor(Math.random() * 100) + 1;
            // Se il numero non è già presente nell'array, lo aggiungo
            if (!bombArr.includes(randomNum)) {
                bombArr.push(randomNum);
            }
            }
    
            console.log(bombArr);

        // Ogni cella ha un numero progressivo, da 1 a 100.
        for(let i = 1; i <= 100 ; i++){

        // creare l'elemento quadrato all'interno della griglia
            const newSquare = createGridSquare('div','square-easy'); 

        // inserisco dentro alla griglia i quadratini
            gridElement.append(newSquare);

        // numero ogni quadratino
            newSquare.innerHTML =i
            
        // Quando l’utente clicca sulla cella
            newSquare.addEventListener('click', 
            function(){   
            // incremento puntegio
                punteggio++;
            
                if(bombArr.includes(i)){
                      // se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
                    newSquare.classList.add('clicked-false');
                    // emetto un messaggio in console con il numero della cella cliccata.
                    alert('BOOM! Hai perso!' + ' Hai totalizzato: ' + punteggio + ' punti ')
                    // reset dopo l'alert
                    gridElement.innerHTML = ''
                    // punteggio riparte da zero
                    punteggio = 0;

                }
                else{
                    // Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle
                    newSquare.classList.add('clicked-true');
                    
                    console.log(punteggio);
                    
                   
                }
            })
        }
    });





    // FUNZIONI

    function createGridSquare(tagType,classToAdd) {
        const newElement = document.createElement(tagType);
        newElement.classList.add(classToAdd);
        return newElement;
        
    }