describe('CalculatorCtrl', function(){
    beforeEach(module('calculatorApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    //test the math operation after user choose =
    describe('$scope.finalResult', function(){
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('CalculatorCtrl', { $scope: $scope });

            //initiate first value and second value input in calculator
            $scope.firstValue = "4";
            $scope.secondValue = "10";
        });

        it('multiply numbers input by choose *', function(){
            $scope.operator = '*';
            $scope.finalResult();
            // The result should be 40 from 4 * 10
            expect($scope.calcAnswer).toEqual(40);
        });

        it('add numbers input by choose +', function(){
            $scope.operator = '+';
            $scope.finalResult();
            // The result should be 14 from 4 + 10
            expect($scope.calcAnswer).toEqual(14);
        });

        it('add decimal numbers input by choose +', function(){
            $scope.operator = '+';
            $scope.firstValue = "10.5";
            $scope.finalResult();
            // The result should be 20.5 from 10.5 + 10
            expect($scope.calcAnswer).toEqual(20.5);
        });

        it('subtract first number by second number input by choose - ', function(){
            $scope.operator = '-';
            $scope.finalResult();
            // The result should be -6 from 4 - 10
            expect($scope.calcAnswer).toEqual(-6);
        });

        it('divide first number by second number input by choose / ', function(){
            $scope.operator = '/';
            $scope.finalResult();
            // The result should be 0.4 from 4 / 10
            expect($scope.calcAnswer).toEqual(0.4);
        });

        it('does square root for first number input', function(){
            $scope.operator = 'square root';
            $scope.finalResult();
            // The result should be 2 from 4 square root
            expect($scope.calcAnswer).toEqual(2);
        });

        it('does power of first number by second number input', function(){
            $scope.operator = '^';
            $scope.finalResult();
            // The result should be 1048576 from 4^10
            expect($scope.calcAnswer).toEqual(1048576);
        });
    });


    //test every time user choose math operator the display change accordingly
    describe('$scope.updateOperation', function(){
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('CalculatorCtrl', { $scope: $scope });
        });

        it('should change to + when user choose + button and user able to add second value', function(){
            $scope.updateOperation('+');

            // The display operator should change to +
            expect($scope.operator).toEqual('+');
            expect($scope.secondValueStart).toEqual(true);
        });

        it('should change to - when user choose - button and user able to add second value', function(){
            $scope.updateOperation('-');

            // The display operator should change to -
            expect($scope.operator).toEqual('-');
            expect($scope.secondValueStart).toEqual(true);
        });

        it('should change to * when user choose * button and user able to add second value', function(){
            $scope.updateOperation('*');

            // The display operator should change to *
            expect($scope.operator).toEqual('*');
            expect($scope.secondValueStart).toEqual(true);
        });

        it('should change to / when user choose / button and user able to add second value', function(){
            $scope.updateOperation('/');

            // The display operator should change to /
            expect($scope.operator).toEqual('/');
            expect($scope.secondValueStart).toEqual(true);
        });

        it('should change to ^ when user choose ^ button and user able to add second value', function(){
            $scope.updateOperation('^');

            // The display operator should change to ^
            expect($scope.operator).toEqual('^');
            expect($scope.secondValueStart).toEqual(true);
        });

        it('should change to square root when user choose √ button and second value should disappear from display', function(){
            $scope.updateOperation('square root');

            // The display operator should change to square root
            expect($scope.operator).toEqual('square root');
            expect($scope.secondValue).toEqual('');
            // The second value should not be able to add by user
            expect($scope.secondValueStart).toEqual(false);
            expect($scope.newNumber).toEqual(false);
        });
    });

    //test every time user choose number the display change accordingly
    describe('$scope.updateOutput', function(){
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('CalculatorCtrl', { $scope: $scope });
        });


        it('should change to 1 when user choose 1 button and it keeping add the first value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= false;

            $scope.updateOutput(1);

            // The first value display should change to 1 and second value still disable
            expect($scope.firstValue).toEqual(1);
            expect($scope.secondValueStart).toEqual(false);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change to 2 when user choose 2 button and it keeping add the first value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= false;

            $scope.updateOutput(2);

            // The first value display should change to 2 and second value still disable
            expect($scope.firstValue).toEqual(2);
            expect($scope.secondValueStart).toEqual(false);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change to 3 when user choose 3 button and it keeping add the first value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= false;

            $scope.updateOutput(3);

            // The first value display should change to 3 and second value still disable
            expect($scope.firstValue).toEqual(3);
            expect($scope.secondValueStart).toEqual(false);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change to 4 when user choose 4 button and it keeping add the first value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= false;

            $scope.updateOutput(4);

            // The first value display should change to 4 and second value still disable
            expect($scope.firstValue).toEqual(4);
            expect($scope.secondValueStart).toEqual(false);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change to 5 when user choose 5 button and it keeping add the first value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= false;

            $scope.updateOutput(5);

            // The first value display should change to 5 and second value still disable
            expect($scope.firstValue).toEqual(5);
            expect($scope.secondValueStart).toEqual(false);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change to 6 when user choose 6 button and it keeping add the first value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= false;

            $scope.updateOutput(6);

            // The first value display should change to 6 and second value still disable
            expect($scope.firstValue).toEqual(6);
            expect($scope.secondValueStart).toEqual(false);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change to 7 when user choose 7 button and it keeping add the first value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= false;

            $scope.updateOutput(7);

            // The first value display should change to 7 and second value still disable
            expect($scope.firstValue).toEqual(7);
            expect($scope.secondValueStart).toEqual(false);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change to 8 when user choose 8 button and it keeping add the first value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= false;

            $scope.updateOutput(8);

            // The first value display should change to 8 and second value still disable
            expect($scope.firstValue).toEqual(8);
            expect($scope.secondValueStart).toEqual(false);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change to 9 when user choose 9 button and it keeping add the first value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= false;

            $scope.updateOutput(9);

            // The first value display should change to 9 and second value still disable
            expect($scope.firstValue).toEqual(9);
            expect($scope.secondValueStart).toEqual(false);
            expect($scope.newNumber).toEqual(false);
        });

        it('should keep adding number before choose the math operator', function(){
            $scope.newNumber = false;
            $scope.secondValueStart= false;
            $scope.firstValue = 9 ;

            $scope.updateOutput(8);

            // The first value display should change to 98 and second value still disable
            expect($scope.firstValue).toEqual('98');
            expect($scope.secondValueStart).toEqual(false);
            expect($scope.newNumber).toEqual(false);
        });


        //test the second value after user choose the math operator

        it('should change the second value to 1 when user choose 1 button and it keeping add the second value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= true;

            $scope.updateOutput(1);

            // The second value display should change to 1
            expect($scope.secondValue).toEqual(1);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change the second value to 2 when user choose 2 button and it keeping add the second value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= true;

            $scope.updateOutput(2);

            // The second value display should change to 2
            expect($scope.secondValue).toEqual(2);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change the second value to 3 when user choose 3 button and it keeping add the second value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= true;

            $scope.updateOutput(3);

            // The second value display should change to 3
            expect($scope.secondValue).toEqual(3);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change the second value to 4 when user choose 4 button and it keeping add the second value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= true;

            $scope.updateOutput(4);

            // The second value display should change to 4
            expect($scope.secondValue).toEqual(4);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change the second value to 5 when user choose 5 button and it keeping add the second value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= true;

            $scope.updateOutput(5);

            // The second value display should change to 5
            expect($scope.secondValue).toEqual(5);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change the second value to 6 when user choose 6 button and it keeping add the second value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= true;

            $scope.updateOutput(6);

            // The second value display should change to 6
            expect($scope.secondValue).toEqual(6);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change the second value to 7 when user choose 7 button and it keeping add the second value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= true;

            $scope.updateOutput(7);

            // The second value display should change to 7
            expect($scope.secondValue).toEqual(7);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change the second value to 8 when user choose 8 button and it keeping add the second value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= true;

            $scope.updateOutput(8);

            // The second value display should change to 8
            expect($scope.secondValue).toEqual(8);
            expect($scope.newNumber).toEqual(false);
        });

        it('should change the second value to 9 when user choose 9 button and it keeping add the second value', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= true;

            $scope.updateOutput(9);

            // The second value display should change to 9
            expect($scope.secondValue).toEqual(9);
            expect($scope.newNumber).toEqual(false);
        });

        it('should keep adding number before choose the = button', function(){
            $scope.newNumber = false;
            $scope.secondValueStart= true;

            $scope.secondValue = 9 ;

            $scope.updateOutput(0);

            // The second value display should change to 90
            expect($scope.secondValue).toEqual('90');
        });

        //adding decimal symbol .

        //first value
        it('adding decimal . ', function(){
            $scope.newNumber = false;
            $scope.secondValueStart= false;
            $scope.firstValue = 9 ;

            $scope.updateOutput('.');

            // The first value display should change to 98 and second value still disable
            expect($scope.firstValue).toEqual('9.');
            expect($scope.secondValueStart).toEqual(false);
            expect($scope.newNumber).toEqual(false);
        });


        //second value
        it('adding decimal . ', function(){
            $scope.newNumber = false;
            $scope.secondValueStart= true;

            $scope.secondValue = 9 ;

            $scope.updateOutput('.');

            // The second value display should change to 90
            expect($scope.secondValue).toEqual('9.');
        });
    })

    //clear function
    describe('$scope.clear', function() {
        var $scope, controller;

        beforeEach(function () {
            $scope = {};
            controller = $controller('CalculatorCtrl', {$scope: $scope});
        });

        it('should back to initial state . ', function(){
            $scope.clear();

            // Should back to initial state
            expect($scope.newNumber).toEqual(true);
            expect($scope.secondValueStart).toEqual(false);
            expect($scope.firstValue).toEqual('0');
            expect($scope.secondValue).toEqual('0');
            expect($scope.calcAnswer).toEqual('');
        });
    });

    //all tests
    describe('$scope.clear', function() {
        var $scope, controller;

        beforeEach(function () {
            $scope = {};
            controller = $controller('CalculatorCtrl', {$scope: $scope});
        });

        it('should able to calculate based on commands', function(){
            $scope.newNumber = true;
            $scope.secondValueStart= false;

            $scope.updateOutput(6);
            $scope.updateOutput('.');
            $scope.updateOutput(5);
            $scope.updateOutput(3);

            $scope.updateOperation('*');

            $scope.updateOutput(2);
            $scope.updateOutput('.');
            $scope.updateOutput(3);
            $scope.updateOutput(1);

            $scope.finalResult();

            // Should equal to 15.0843 from 6.53 * 2.31
            expect($scope.calcAnswer).toEqual(15.0843);

            $scope.clear();

            // Should back to initial state
            expect($scope.newNumber).toEqual(true);
            expect($scope.secondValueStart).toEqual(false);
            expect($scope.firstValue).toEqual('0');
            expect($scope.secondValue).toEqual('0');
            expect($scope.calcAnswer).toEqual('');
        });
    });


});
