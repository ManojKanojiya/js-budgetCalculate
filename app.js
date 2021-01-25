/*****************************
 * IIFE returns an object so that methods of that objects become public and can be accessed by outside IIFE.
 */

// BUDGET CONTROLLER
var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id,
            this.description = description,
            this.value = value
    };

    var Income = function (id, description, value) {
        this.id = id,
            this.description = description,
            this.value = value
    };

    var data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function (type, desc, val) {
            var newItem, ID;

            // Create new item's id
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Add property based on item type
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, desc, val);
            }

            // Push item into array
            data.allItems[type].push(newItem);

            // Return new created item
            return newItem
        },
        testing: function () {
            console.log(data);
        }
    }

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

    var setupEventListeners = function () {
        var DOM = UIctrl.getDOMstring();
        document.querySelector(DOM.inputBtn).addEventListener('click', cntrlAddItem);
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                cntrlAddItem();
            }
        })
    }



    var cntrlAddItem = function () {
        var input, newItem;
        // 1. Get Input field data
        input = UIctrl.getInput();

        // 2. Add item to budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add items into UI

        // 4. Calculate Budget

        // 5. Add that into UI

    };

    return {
        init: function () {
            console.log('Application now running...');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

// Init function that is called when application starts!!!
controller.init();