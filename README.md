# Simple Calculator Using AngularJS

## Getting Started

Simply run or double click the index.html under app folder (app/index.html) to run the calculator

Math Operation Functions available : 

--> + add <br>
--> - substract <br>
--> * multipy <br>
--> / divide <br>
--> ^ power of N <br>
--> √ square root

How to use :
1. Set the first value - Choose any number you want to calculate using calculator
2. Set the math operator - Choose any operation you want
3. Set the second value - Choose any number you want to calculate using calculator
4. Calculate the result - Choose '=' to calculate the result
5. Clear to start new calculation - Choose 'C' to start new calculation

** For square root operation
1. Choose the number you want to find the square root value
2. Choose '√' 
3. Directly choose '=' to calculate the square root


## Directory Layout

```
app/                  --> all of the source files for the application
  app.css               --> default stylesheet
  core/                 --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests  
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
tests/				  -> Unit test folder
   spec.js            --> Testing for calculator controller
package.json          --> Node.js specific metadata, including development tools dependencies
package-lock.json     --> Npm specific metadata, including versions of installed development tools dependencies
```


## Testing
All the testing for the controller are under tests/spec.js

### Running Unit Tests
Open cmd or powershell on project directory, <br>
Run 'npm install' for download the dependencies including the mock module, <br>
Run 'karma start'

## Contact
For more information on AngularJS please check out [angularjs.org][angularjs]. <br>
[angularjs]: https://angularjs.org/ <br>
[git]: https://git-scm.com/ <br>
[http-server]: https://github.com/indexzero/http-server <br>
[jasmine]: https://jasmine.github.io/ <br>
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit <br>
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads <br>
[karma]: https://karma-runner.github.io/ <br>
[local-app-url]: http://localhost:8000/index.html <br>
[node]: https://nodejs.org/ <br>
[npm]: https://www.npmjs.org/ <br>
[protractor]: http://www.protractortest.org/ <br>
[selenium]: http://docs.seleniumhq.org/ <br>
[travis]: https://travis-ci.org/ <br>
[travis-docs]: https://docs.travis-ci.com/user/getting-started 
