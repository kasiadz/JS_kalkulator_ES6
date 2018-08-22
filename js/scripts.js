'use strict';

// hermetyzacja
(function(){
    // konstruktor
    class Calculator {
        constructor() {
            this._buttons = document.querySelectorAll('input[type="button"]');
            this._resPlace = document.querySelector('#res');
            this._assignEvents(this._buttons);
        }
        _assignEvents(buttons) {
            buttons.forEach(this._click, this);
        }
        _click(elem, i) {
            elem.addEventListener('click', this._calc.bind(this));
        }
        // funkcja calc
        _calc(event) {
            const buttonValue = event.target.value;
            if (buttonValue === 'C') {
                this._resPlace.value = '';
            }
            else if (buttonValue === '=') {
                this._resPlace.value = eval(this._resPlace.value);
            }
            else {
                this._resPlace.value += buttonValue;
            }
        }
    }

   
// instancja klasy - obiekt
    const oblicz = new Calculator();
})()


