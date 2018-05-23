/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URLs defined',function() {
             allFeeds.forEach(function (obj,allFeeds){
               expect(obj.url).toBeDefined();
               expect(obj.url).not.toBe('');
             });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Names defined',function() {
             allFeeds.forEach(function (obj,allFeeds){
               expect(obj.name).toBeDefined();
               expect(obj.name).not.toBe('');
             });
         });

    });
          /*
          $('menuIcon').click(function () {
            console.log(menu.className);
            if(cName==="menu-hidden") {
                expect(menu.className).not.toBe('menu-hidden');
            }
            else if(cName==="") {
                expect(menu.className).toBe('menu-hidden');

            }
          */


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    describe('The menu', function() {
        beforeEach(function () {
            menu=document.querySelector('body');
            menuIcon=document.querySelector('.menu-icon-link');
        });

        it('Menu element default',function () {
            expect(menu.className).toBe('menu-hidden');
        });

        it('Menu element',function () {
            $('.menu-icon-link').trigger('click')
            expect(menu.className).not.toBe('menu-hidden');
            $('.menu-icon-link').trigger('click')
            expect(menu.className).toBe('menu-hidden');
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        beforeEach(function (done) {
           feed = $('.feed-list');
            id=0;
             feed.on('click', 'a', function() {
                 var item = $(this);
                 id=item.data('id');
             });

             loadFeed(id,function () {
               done();
             });
        });

        it('Load Feed',function () {
          feedList=document.querySelectorAll('.feed .entry');
          expect(feedList.length).not.toBe(0);
        });
    });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */
   describe('New Feed Selection',function() {
      beforeEach(function (done) {

        before=document.querySelectorAll('.feed .entry');

        //var Before=$('.feed');
         feed = $('.feed-list');
         var id=0;
         feed.on('click', 'a', function() {
             var item = $(this);
             id=item.data('id');
         });

         loadFeed(id,function () {
           done();
         });
       });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
       it('Check new entries', function () {
         //var After=$('.feed');
         var after=document.querySelectorAll('.feed .entry');


         var arrBefore=[];

         before.forEach(function(node) {
           arrBefore.push(node.textContent);
         });
         flag=false;
         after.forEach(function(node) {
           //arrAfter.push(node.textContent);

            arrBefore.forEach(function (before,i) {
              if(node.textContent!=before[i]){
                flag=true;
              }
            });

         });
           expect(flag).toBe(true);

         });

    });
});
