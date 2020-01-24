const text1=("Uwielbiam Javascript");
const wynik1=text1.length;
const text2=("Jestem świetnym programistą");
const wynik2=text2.length;//Zdeklaruj dwie zmienne o dowolnych nazwach, do których przypisz kolejne stringi
function dlugosc()
{
  if(wynik1>wynik2){
    return(text1)}
  else if(wynik1<wynik2){
    return(text2)}
  else if(wynik1==wynik2){
    return('ilość równa')}
  console.log(wynik1,wynik2);
}
dlugosc();

//Napisz funkcję, która przyjmuje stworzone zmienne jako parametry. Funkcja ma zwracać string, który jest dłuższy. Wynik działania funkcji wyświetl w konsoli.