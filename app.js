/*****************************
 * IIFE returns an object so that methods of that objects become public and can be accessed by outside IIFE.
 */

// IIFE
var budgetController = (function () {

    var x = 5;

    var add = function (a) {
        return x + a;
    }

    // Closure 
    return {
        publicTest: function (b) {
            return add(b)
        }
    }

})();


var UIController = (function () {

    // Some Code 
})();


var controller = (function (budgetCtrl, UIctrl) {
    var z = budgetCtrl.publicTest(5);

    return {
        publicControllerTest: function () {
            console.log(z);
            return z
        }
    }

})(budgetController, UIController);
