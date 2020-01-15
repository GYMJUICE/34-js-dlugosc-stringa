const text1=("Uwielbiam JavaScript");
const wynik1=text1.length;
const text2=("Jestem świetnym programistą");
const wynik2=text2.length;//Zdeklaruj dwie zmienne o dowolnych nazwach, do których przypisz kolejne stringi
function dlugosc(text1,text2)
{
  if(wynik1>wynik2){console.log(text1)}
  else if(wynik1<wynik2){console.log(text2)}
  else if(wynik1==wynik2){(console.log('ilość równa'))}   
} //Napisz funkcję, która przyjmuje stworzone zmienne jako parametry. Funkcja ma zwracać string, który jest dłuższy. Wynik działania funkcji wyświetl w konsoli.