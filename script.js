let savedValue = localStorage.getItem('calculation');
let calculation = savedValue ? savedValue : '';

// text-zone
let text_zone = document.getElementById('Calculator-text')

updateTextZone();

// Number buttons
for (let i = 0; i <= 9; i++) 
    {
        document.getElementById(`btn-${i}`).addEventListener('click', () => addToCalc(i.toString()));
    }

// Operators
document.getElementById('btn-plus').addEventListener('click', () => addToCalc(' + '));
document.getElementById('btn-minus').addEventListener('click', () => addToCalc(' - '));
document.getElementById('btn-multiply').addEventListener('click', () => addToCalc(' * '));
document.getElementById('btn-divide').addEventListener('click', () => addToCalc(' / '));
document.getElementById('btn-dot').addEventListener('click', () => addToCalc('.'));

// Equals
document.getElementById('btn-equals').addEventListener('click', Calculate)

function Calculate ()
{
    calculation = eval(calculation) ;
    saveCalculation();
    updateTextZone();

}

// Clear 
document.getElementById('btn-clear') .addEventListener('click', clearCalculation)

function clearCalculation ()
{
    calculation = '' ;
    text_zone.value = ('Cleared')
    saveCalculation();
}

// Reusable func
function addToCalc (value)
{
    calculation += value ; 
    text_zone.value = calculation;
    saveCalculation();
}

function updateTextZone ()
{
    text_zone.value = calculation;
}

function saveCalculation ()
{
    localStorage.setItem('calculation',calculation);
}