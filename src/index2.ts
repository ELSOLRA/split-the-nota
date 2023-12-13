let tip: number;
let sum: number;
let numberOfFriends: number;
let total: number;
let friendSum: number;
let sumDivided: number;
let calculatedTip: number;

/*
parseFloat()

parseFloat() är en inbyggd funktion i JavaScript som konverterar en sträng till ett flyttal. Den analyserar strängen från början till slut och extraherar det första numeriska värdet som det hittar. Den ignorera alla tecken som inte är numeriska eller som inte är en del av talet, förutom det första decimaltecknet och tecken för exponenter (t.ex. "e" eller "E").
Beteende: parseFloat() 

extraherar det första numeriska värdet från början av strängen medan Number() försöker skapa ett numeriskt värde från hela strängen.

Hantering av icke-numeriska tecken: parseFloat() ignorerar tecken som inte är numeriska eller relaterade till decimaler eller exponenter, medan Number() returnerar NaN om strängen innehåller något annat än ett numeriskt värde.
Generellt sett, om du vill ha en mer exakt konvertering av en sträng till ett flyttal och bara är intresserad av det första numeriska värdet, använd parseFloat(). Om du vill ha en bredare omvandling av olika datatyper till numeriska värden, inklusive hantering av icke-numeriska strängar som NaN, använd Number().
*/



function calculateTip(sum: number, tip: number): number { 
    calculatedTip = sum * tip;
    console.log(calculatedTip);
    return calculatedTip;
    
}

(document.getElementById('calculateButton') as HTMLButtonElement).addEventListener('click', function () {

    sum = parseFloat((document.getElementById('sum') as HTMLInputElement).value);
    numberOfFriends = parseFloat((document.getElementById('numberOfFriends') as HTMLInputElement).value)

    tip = parseFloat((<HTMLInputElement>document.getElementById('tip')).value);
    console.log(tip)

    calculatedTip = calculateTip(sum, tip);
    total = sum + calculatedTip;
    console.log(total);

    (document.getElementById('inputForm')as HTMLElement).classList.toggle('hide');
    (document.getElementById('showSum') as HTMLElement).classList.toggle('hide');

    sumDivided = divideTotal(total, numberOfFriends);

    showDividedSum(sumDivided);
    console.log(sumDivided);
});

function divideTotal (total: number, numberOfFriends: number): number {
    return total / numberOfFriends;
}

function showDividedSum(sum: number): void {
    (document.getElementById('friendSum')as HTMLElement).innerText = sum + 'kr';
}





   
