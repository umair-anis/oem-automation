# oem-portal-automation
Automated testing for all portals using Selenium WebDriver.

## Key concepts to understand when using this framework
- Framework has a keyword-ish style to it.
- Programming style is declarative, not imperative (scripted).
- Leverages FP concepts, not traditional OO.
- Leverages basic factory patterns as Inversion of Control (IoC).
- Leverages the Revealing Module Pattern as a builder for building data types.
- Standardizes automation across all projects.
- Produces extensive reporting and analytics.
- Produces, detailed, human-readable console output; which also gets displayed in Jenkins.
- Leverages Jest as a parallel test execution framework.
- Tests are completely decoupled from any BDD framework.
- Setup so tests can be leveraged for stress, load, and performance testing.
- Easily executes across any environment.

### Run Project Locally
1. `npm install`
  * This will install all npm dependencies for the project (selenium webdriver, chromedriver, allure, jest etc.)
  * **NOTE** - You may have to install these npm modules globally
2. `npm test`
  * This will start up all of the tests in your /spec folder
3. `npm test src/..(path to spec)../spec/specFolder/my.spec.test.js`
  * This will start up a single test in your /spec folder as specified in the command
  
### Project Layout
 - If setting up a new portal automation project then do the following:
    - Create a new project directory in src/aut/.
    - Add the following folders to that project:
        * config: where you'll place your runtime configuration files.
        * customAction: where you'll add custom actions unique to your project.
        * data: where you'll place the functions used to generate data for your project.
        * repo: where you'll store object definitions for your application's front-end.
        * routes: where you'll wire up routes for remote triggering of your tests.
        * scenario: where you'll define your reusable step sequences.
        * spec: where you'll implement your BDD framework.
        * test: where you'll implement your actual automated tests.
    - Add necessary BDD configuration files to your project's root directory.
        * Example Jest files: defaultTimeout.js and jest.config.js.

### Example debug configuration for VSCode
```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Jest",
            "program": "${workspaceRoot}/node_modules/jest/bin/jest.js",
            "args": [
                "--config",
                "${workspaceRoot}/src/aut/paccar/jest.config.js"
            ]
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Debug App",
            "program": "${workspaceRoot}/app.js",
        }
    ]
}
```

### Looping Logic

    This basics of this framework is really just highly controlled looping logic that tunnels and bubbles messages between layers.

    for each browser
        for each data iteration
            for each scenario
                for each step
                    if step has a control
                        find control
                        execute action against control
                    else
                        execute action 
                loop
            loop
        loop
    loop

### Example Automated Test Logic (Testing Login Functionality):
After running the command `node app.js`, app.js will call a test function `testLoginLogout.js` that calls a series of tests pertaining to the login's functionality. Here is what the structure of the tests look like:
- Tests: testValidLogin, testInvalidLogin, testForgotPassword, etc. each calling a set of high level scenarios
- Higher Level Scenarios: buildValidCredentials (enter a list of emails and passwords), etc. calling lower level scenarios
- Scenarios: enterEmail, enterPassword, clickLogin, clickForgetPassword, clickCancel, openBrowser, etc. calling steps
- Actions/Searches: Find the element to perform an action via its HTML properties
- Steps: click button, type words, open website, etc. These steps call the low level selenium commands


## Glossary

    - Action: Function that performs a single operation against an AUT. Click, double click, etc.

    - Batch: Function that loops through and executes each step assigned to that batch.

    - Browser: Functions necessary for selecting and configuring the browser(s) necessary for the tests. For each browser defined, the test will execute an iteration.

    - Control: Functions for defining a control to the core framework.

    - Dynamic Data: Data that is scraped from the AUT's UI or extrated from a query or service that one wants to validate or reuse for an future step.

    - Element: A defined control and its respective properties.

    - Environment: Properties necessary for defining an environment to the core framework.

    - Iteration: This is a data iteration. For each item in an array of data, assigned to a step, the test will execute an iteration.

    - Layer: The core framework is layered to control reporting and execution flow control. 
    Essentially, we're taking power away from Selenium WebDriver (and other technologies) and taking over flow control ourselves.

    - Property: Each control must have a property assigned to it. This property is used to locate the control in the AUT's UI.

    - Scenario: A reusable sequence of steps such as; open browser -> enter username -> enter password -> click login. That might be a "Valid Login Scenario".

    - Search: How a given technology (such as Selenium WebDriver) searches and locates an element in the AUT's UI.

    - Step: A single action to perform against the AUT. It might be entering data into a control or opening the browser.
    
    - Test: Execution of a combination of scenarios, steps, and validators against browsers to test an application's features against expected behaviors.

## Instructions for Building and Executing a Test

1. Create a spec file or modify an existing spec file:
    src/aut/projectName/spec/pageName/myfile.test.js.
2. Create a test file in: src/aut/projectName/test/pageName/myFeature_what_detail.js
    - example: dashboard/breadcrumbs_display_withValidUser.js
    - This is a common unit testing naming standard.
3. Create a builder function for your test.
    - This builder function will take the environment, extract data for that environment, insert data into the respective scenarios, and add the scenarios to that test.
    - The TestBuilder creates an instance of a Test function.
    - Return the frozen instance to the test function.
    - Create an scenarios that do not already exist but are needed by your test.
    - Create an data readers/writers that do not already exist buy are necessary for your test.
4. From within your test function, invoke the test (using the invokeTest function) and await the response.

Basically all you do is: setup your project and the necessary folders; add items to the repository function for each respective page (if they don't already exist); create scenarios (that don't already exist) containing the steps necessary; read in data necessary at the start of each test and assign that data to the respective steps; create a builder for the test to set everything up (urls, data, etc.) and return a test to the test function; then invoke the test. That's it!

    
## src/aut
This is the location where all automated tests for a given project are built.

## src/aut/paccar
Automated scripts for Paccar.

### src/aut/paccar/config
Configuration of browsers, environment, and test data.

### src/aut/paccar/data
Use of readers and factory functions for inserting data into the scripts.

### src/aut/paccar/repo
User of factory functions for define controls within the AUT.

### src/aut/paccar/routes
Setting up of routes for a web server so tests can be called remotely. Used for load, stress, and performance testing.

### src/aut/paccar/scenario
Defining factory functions that specify reusable sequences of steps.

### src/aut/paccar/spec
BDD framework for executing test via Jest and/or Jasmine.

### src/aut/paccar/test
Location of the actual test functions for testing the AUT. Testing logic is not embedded into any given BDD framework as these change weekly.

### src/aut/paccar/vaidator
Validators to wrap logic that validates a scenario (can also be extended to steps) executed as expected.

## src/core
This is the core of the framework. It contains several folders.

### src/core/action
Action functions for performing a single operation against an AUT.

### src/core/batch
Functions to build and invoke batches of tests.

### src/core/browser
Functions to define a browser.

### src/core/capabilities
Not currently used, might remove.

### src/core/control
Functions for defining a control.

### src/core/data
Functions for defining and managing dynamic data.

### src/core/element
Functions for defining an element (control + properties).

### src/core/environment
Functions for defining metadata about an environment.

### src/core/iteration
Functions for defining data iterations and extracting data for the current iteration.

### src/core/layer
Messaging that gets tunneled and bubbled between layers of the core framework during test execution.

### src/core/logging
Detailed report writers to persist test, scenario, and step results to a database for reporting and analytics.

### src/core/model
Getter and setter functions to standardize interacting with properties of complex data functions.

### src/core/property
Property functions for defining how a control should be located within an AUT.

### src/core/query
Functions for executing a query and adding results for validation or dynamic data that can be reused at a later point in the test.

### src/core/rest
Functions for executing transactions against backend REST services for test data management or to test functionality of the AUT.

### src/core/result
Functions for defining detailed results that can be included in a report.

### src/core/scenario
Contains the builder for building a scenario (reusable sequence of steps) 

### src/core/search
Contains functions to search an AUT's UI for a given control.

### src/core/step
Contains the builder for building a step and several invokers for executing different types of steps.

### src/core/test
Contains the builder for building a test and the invoker for executing the test.
