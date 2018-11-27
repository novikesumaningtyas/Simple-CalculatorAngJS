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
4. Calculate the result - Choose = to calculate the result
5. Clear to start new calculation - Choose C to start new calculation

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
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
karma.conf.js         --> config file for running unit tests with Karma
tests/				  -> Unit test folder
   spec.js            --> Testing for calculator controller
package.json          --> Node.js specific metadata, including development tools dependencies
package-lock.json     --> Npm specific metadata, including versions of installed development tools dependencies
```


## Testing
All the testing for the controller are under tests/spec.js

### Running Unit Tests
Type 'Karma start' on cmd or power shell

## Contact
For more information on AngularJS please check out [angularjs.org][angularjs].
[angularjs]: https://angularjs.org/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started
