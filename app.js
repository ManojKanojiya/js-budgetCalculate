/*****************************
 * IIFE returns an object so that methods of that objects become public and can be accessed by outside IIFE.
 */

// BUDGET CONTROLLER
var budgetController = (function () {
    // Some Code
})();

// UI CONTROLLER
var UIController = (function () {
    // Some Code 
})();


var controller = (function (budgetCtrl, UIctrl) {
    var cntrlAddItem = function () {
        // 1. Get Input field data

        // 2. Add item to budget controller

        // 3. Add items into UI

        // 4. Calculate Budget

        // 5. Add that into UI
        console.log('Cntrl Add Item!!!')
    };

    document.querySelector('.add__btn').addEventListener('click', cntrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            cntrlAddItem();
        }
    })

})(budgetController, UIController);
