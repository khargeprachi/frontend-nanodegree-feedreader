# Project Overview

In this project you are given a web-based application that reads RSS feeds. It also has a side menu which toggles its visibility using a menu icon and load a new feed list on selecting any option from the menu.

# How will I start?
Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
Open the 'index.html' in any browser.
The feedreader.js consist of all the specifications and app.js contains the source javaScript.
The specifications turn green the tests are followed and red when they are not.

# What are the specifications used in this project?
1. Test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Test that ensures the menu element is hidden by default.
4. Test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
5. Test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
6. Test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

# Dependencies
'js/' has the javaScript files.
'css/' has the CSS files.
'index.html' contains the DOM elements.
'jasmine/spec/'' contains the specifications.

External:

http://fonts.googleapis.com/css?family=Roboto:400,100,300,700
http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
http://cdn.jsdelivr.net/handlebarsjs/2.0.0/handlebars.min.js
http://google.com/jsapi
