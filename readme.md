PROBLEMA: Scrivere un programma che chieda all' utente il numero di chilometri da percorrere e  l'eta' del passeggero. Sulla base di queste informazioni calcolare il prezzo del biglietto secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

1 - Permettere l'inserimento del numero di km che l'utente vuole percorrere;
2 - Permettere l'inserimento dell' eta' dell' utente;
3 - Calcolare il prezzo totale moltiplicando il costo al km per i km percorsi;
4 - ? SE l'utete e' minorenne;
    4.1 - Sottrarre il 20% dal prezzo totale;
    4.2 - Racchiudere il prezzo scontato in una variabile;
5 - : ALTRIMENTI SE l'utente e' over 65;
    5.1 - Sottrarre il 40% dal prezzo totale;
    5.2 - Racchiudere il prezzo scontato in una variabile;
6 - : ALTRIMENTI;
    6.1 - Racchiudere il prezzo non scontato in una variabile;
7 - Stampa la variabile con il prezzo finale;