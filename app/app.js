// Code goes here
var app = angular.module('calculatorApp', []);
app.controller('CalculatorCtrl', CalculatorCtrl);

function CalculatorCtrl($scope) {
    //--------------------- INITIAL STATE OF CALCULATOR-----------------------

    //math operator
    $scope.operator = '+';

    //first value located before the math operator
    $scope.firstValue = "0";

    //second value located after the math operator
    $scope.secondValue = "0";

    //the result of calculation
    $scope.calcAnswer = "";

    // Used to evaluate whether to start the second value
    // in the display and when to concatenate
    $scope.secondValueStart= false;

    // Used to evaluate whether to start a new number
    // in the display and when to concatenate
    $scope.newNumber = true;

    //--------------------------FUNCTIONS------------------------------------

    //called after user choose any number
    $scope.updateOutput = function(btn){
        if($scope.newNumber || $scope.firstValue == 0 && $scope.secondValueStart == false)
        {
            $scope.firstValue = btn;
            $scope.newNumber = false;
        }
        else if($scope.newNumber == false && $scope.secondValueStart == false){
            $scope.firstValue += btn.toString();
        }

        if($scope.newNumber || $scope.secondValue == 0 && $scope.secondValueStart == true){
            $scope.secondValue = btn;
            $scope.newNumber = false;
        }
        else if($scope.newNumber == false && $scope.secondValueStart == true){
            $scope.secondValue += btn.toString();
        }
    };

    //called after user choose any math operator
    $scope.updateOperation = function(opt){
        if(opt == "square root"){
            $scope.secondValueStart = false;
            $scope.newNumber = false;
            $scope.secondValue = "";
            $scope.operator = opt;
        }
        else{
            $scope.operator = opt;
            $scope.secondValueStart = true
        }
    };

    //called after user choose =
    $scope.finalResult= function(){
        if($scope.operator == '+'){

            $scope.calcAnswer = (parseFloat($scope.firstValue) + parseFloat($scope.secondValue))
        }
        if($scope.operator == '-'){
            $scope.calcAnswer = parseFloat($scope.firstValue) - parseFloat($scope.secondValue)
        }
        if($scope.operator == '*') {
            $scope.calcAnswer = parseFloat($scope.firstValue) * parseFloat($scope.secondValue)
        }
        if($scope.operator == '/') {
            $scope.calcAnswer = parseFloat($scope.firstValue) / parseFloat($scope.secondValue)
        }
        if($scope.operator == 'square root'){
            $scope.calcAnswer = Math.sqrt(parseFloat($scope.firstValue));
        }
        if($scope.operator == '^') {
            $scope.calcAnswer = Math.pow(parseFloat($scope.firstValue),parseFloat($scope.secondValue));
        }

    };

    //called after user choose C
    //back to initial state
    $scope.clear = function() {
        setOutput("0");
    };

    setOutput = function(outputString) {

        if($scope.operator=="square root"){
            $scope.operator ='+';
        }

        $scope.newNumber = true;
        $scope.secondValueStart = false;
        $scope.firstValue = outputString;
        $scope.secondValue = outputString;
        $scope.calcAnswer = "";
    };
}
