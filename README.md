# Integrated-Security-Example
Example code to show how to do integrated security testing. _Please note, this repository is vulnerable to several attacks on purpose for learning purposes_

# Learn how to use as part of security testing

The test code of this project includes examples on how to use this to help fin

## Setup 

Requirements: 
* NodeJS (LTS Version 8.11.1) 
* Chrome (Version  >= 64.0.3282.0)
* Chrome Driver (http://chromedriver.chromium.org/)
* OWASP ZAP (For only one part of the tutorial)

1. First, clone the repository with:
```git clone https://github.com/distrustCaution/integrated-security-example.git```

2. Then change to the cloned directory and run:
```npm install --build-from-source```

*You may see file permission errors when building (I did on linux), so this command (run at your own risk) may help you: `npm install --build-from-source --unsafe-perm=true --allow-root`*

*Windows users may not have the build tools for SQLite, this is due to the node-gyp depency on native build tools. To fix this, run: `npm install --global --production windows-build-tools`*

3. To verify that your install worked, run:

```npm run integrationTest```
If your install is successful, you should see it run through the integration tests and a chrome driver window should pop up. 

*You may see the following error when running the integration test on linux:*
```
> mocha --reporter spec "test/integration_tests/*.js"

module.js:545
    throw err;
    ^

Error: Cannot find module '/integrated-security-example/node_modules/sqlite3/lib/binding/node-v59-linux-x64/node_sqlite3.node'
```
In this case, I recommend installing NVM and setting your node version to exactly v8.11.1. The sqlite driver does not work properly on newer node versions.

4. Install ZAP by downloading the JAR file from OWASP[https://github.com/zaproxy/zaproxy/wiki/Downloads]. *Please download the cross-platform version and move the JAR file to zaplocation in this repository. *Alternatively, if you already have ZAP installed, just find the install location of the JAR file on your machine.*


# Workshop -- Still in progress!

This repository can be used to learn how to do integrated security testing

## Basic Concepts

Welcome to Hacking Aikido. Hackido. You don't use brute force to find security bugs, you use leverage. 
By leverage, I other people's existing integration tests.

The whole plan of this is to leverage existing integration tests to find real world security bugs inside a web application.
Get ready, and I'll show you the way of integrated security testing. 

As a the great hacker once said:

> "Give me a lever long enough and a fulcrum on which to place it, and I shall *hack the planet*"

- Hackimedes

Wait, that's me -- I'm so great! And you're so great too for learning the way of hackido. Alright, let's get hacking

### Benefits of integrated security testing

* Can be done with any software framework/language
* Highly efficient at finding bugs
* You have something to hand to testers to run as part of their CI/CD pipeline
* You have an automated repro to help developers fix and understand the security issue
* You can use this to train testers to become security testers
* This will find more subtle bugs than application scanners
* This will have much less false positives (Almost no false positives)
* This can automate security testing with business logic
* The bugs you find
* This can find a lot of 'low hanging fruit' security issues

### Limitations of integrated security testing

* This will not find the super hard core ninja class bugs
* This will not compensate for bad design choices
* It is a tool to aid security testing, but it doesn't replace manual penetration testing
* This will not find all the bugs, but it will be a reliable way to find security issues

*Overall, this is a good choice as a dynamic analysis tool, and is more reliable than web application scanners, but it isn't a magic pill that will cure everything.*

## Understand the Test Framework

Before you can start using integration test for white hat hacking, you must first understand how testing works. 
All testers will have a few key tools set up with some test wrappers and assertions set up, first you should understand them... so you can manipulate them. Muwahahah.
Notice this won't be a full guide on how to do integration testing, we don't actually care about that. You just need to get a 'hacker's knowledge' on how to use it. 

Also, this example is using NodeJS, but you can do it on any language and any framework. I started doing this methodology with Ruby and .Net projects originally, and only did this example in NodeJS since I wanted to understand how NodeJS worked.

Lastly, if you think my code is dirty and bad in this example: good! This is to help you learn how to read hastily written and badly maintained test code!

### Selenium and other elements

This example uses the selenium web driver to test the web ui. All you really need to know is that selenium will interact with a web application via the browser just like a user.

To see a simple example, go to: 

For any suite of tests using selenium, you will most likely see a function similar to this:

All testers will have that in order to save time. Knowing how to boot up selenium is key for this method.

### API testing
This example also uses request-promise to test out the API given to you. See here for how that works:

### Tests
This test framework uses a test library called Mocha, see here for a simple example:

And you can run ``` example ``` to see it in action.

Basically, you can see everything in the 'before' part as before all the tests run. This is often called the 'setup.'
Likewise, in the 'after' function, you have the equivalent 'tear down' step. This is often used to clean things up.

You can see the 'Expect...' area, those are called assertions. This is actually how we verify that what we are testing for. It's not enough to type in '2+2', you need to make sure that it actually equals '4'

