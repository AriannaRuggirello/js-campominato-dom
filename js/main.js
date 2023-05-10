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
    function(){
        // selezione il select
        let livelloSelezionato = document.getElementById('levels').value;
        // var 
        let easyGame;
        let mediumGame;
        let hardGame;
    
        if(livelloSelezionato === 'Easy'){
            easyGame = createGameFunction(100,16,'div','square-easy');
        }
        if(livelloSelezionato === 'Medium'){
            mediumGame = createGameFunction(81,16,'div','square-medium');
    
        }
        if(livelloSelezionato === 'Hard'){
            hardGame = createGameFunction(49,16,'div','square-hard');
            
        }

    })


    // FUNZIONI

    function createGridSquare(tagType,classToAdd) {
        const newElement = document.createElement(tagType);
        newElement.classList.add(classToAdd);
        return newElement;
        
    }

    function createRandomArray (max,numMaxElementArr){
       //array vuoto
     let intArr = [];

     // Finché l'array non ha raggiunto il numero massimo di elementi , genera numeri casuali unici tra 1 e un numero massimo e li aggiunge all'array
     while (intArr.length < numMaxElementArr) {
         let randomNum = Math.floor(Math.random() * max) + 1;
         // Se il numero non è già presente nell'array, lo aggiungo
         if (!intArr.includes(randomNum)) {
             intArr.push(randomNum);
         }
         }
 
         return intArr;
    }


    function createGameFunction(max,numMaxElementArr,tagType,classToAdd){
// reset dei numeri selezionati in pagina
gridElement.innerHTML = ''
         
// ARRAY 
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
let bombArr = createRandomArray (max,numMaxElementArr);
console.log(bombArr);


// FOR
// Ogni cella ha un numero progressivo, da 1 a 100.
for(let i = 1; i <= max ; i++)
{
    // creare l'elemento quadrato all'interno della griglia
    const newSquare = createGridSquare(tagType,classToAdd); 

    // inserisco dentro alla griglia i quadratini
    gridElement.append(newSquare);

    // numero ogni quadratino
    newSquare.innerHTML = i
    
    // Quando l’utente clicca sulla cella
    newSquare.addEventListener('click', 
    function(){   
    // incremento puntegio
    punteggio++;
    let userScore = document.getElementById('user-score');

        // CONDIZIONE IF/ELSE
            if(bombArr.includes(i))
            {
                // se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
                newSquare.classList.add('clicked-false');
                // emetto un messaggio in console con il numero della cella cliccata.
                alert('BOOM! Hai perso!' + ' Hai totalizzato: ' + (punteggio - 1) + ' punti ')
            
                // punteggio riparte da zero
                punteggio = 0;
                userScore = punteggio;
                // reset dopo l'alert
                gridElement.innerHTML = ''
            }
            else
            {
                // Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle
                newSquare.classList.add('clicked-true');
                
                userScore.innerHTML = punteggio
                console.log(punteggio);
                
            
            }
        })
}
    }
    