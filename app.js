/*****************************
 * IIFE returns an object so that methods of that objects become public and can be accessed by outside IIFE.
 */

// BUDGET CONTROLLER
var budgetController = (function () {
    // Some Code
})();

// UI CONTROLLER
var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        getDOMstring: function () {
            return DOMstrings;
        }
    }
})();


var controller = (function (budgetCtrl, UIctrl) {
    var DOM = UIctrl.getDOMstring();

    var cntrlAddItem = function () {
        // 1. Get Input field data
        var input = UIctrl.getInput();
        console.log(input);
        // 2. Add item to budget controller

        // 3. Add items into UI

        // 4. Calculate Budget

        // 5. Add that into UI

    };

    document.querySelector(DOM.inputBtn).addEventListener('click', cntrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            cntrlAddItem();
        }
    })

})(budgetController, UIController);
