// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

var bestCustomer;
function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}
const leastFavoriteCustomer = 'Sam';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Samuel';
}


