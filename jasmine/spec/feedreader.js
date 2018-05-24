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
    "use strict"
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


        /*
         *
         *This test makes sure that each feed
         has a defined URL which is not empty
         */
         it('URLs defined',function() {
             allFeeds.forEach(function (obj,allFeeds){
               expect(obj.url).toBeDefined();
               expect(obj.url).not.toBe('');
             });
         });


        /*
         This test makes sure that each feed
         has a well defined non empty name.
         */
         it('Names defined',function() {
             allFeeds.forEach(function (obj,allFeeds){
               expect(obj.name).toBeDefined();
               expect(obj.name).not.toBe('');
             });
         });
    });

    /* This is a new test suite named "The menu" */

    describe('The menu', function() {
        /*
        This test makes sure that all the menu elements
        are hidden by default.
        */
        it('Menu element default',function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });
        /*
        This test makes sure that the menu changes visibility
        when the meny icon is clicked.It has two expectations:
         On first click, the menu should be shown and
        on the second click, it should be hidden.
        */
        it('Menu element',function () {
            $('.menu-icon-link').trigger('click')
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click')
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* This is a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
      /*
        This is a before Each function which precedes all the tests.
        LoadFeed is an asynchronous function.
        Therefore done() is used to signal its callback.
      */
        beforeEach(function (done) {
            var id=0;
             $('.feed-list').on('click', 'a', function() {
                 var item = $(this);
                 id=item.data('id');
             });
             loadFeed(id,function () {
               done();
             });
        });
        /*
        This test is used to make sure that the
        length of the loaded feed (.entry) should atleast be 1.
        */
        it('Load Feed',function () {
          var feedList=document.querySelectorAll('.feed .entry');
          expect(feedList.length).not.toBe(0);
        });
    });

    /* This is a new test suite named "New Feed Selection" */
   describe('New Feed Selection',function() {
     /*
      This is a before Each function run before every test.
      Loadfeed is an asynchronous function.
     */
      var before;
      beforeEach(function (done) {
         var id=0;
         $('.feed-list').on('click', 'a', function() {
             var item = $(this);
             id=item.data('id');
         });
         before=document.querySelectorAll('.feed .entry');
         loadFeed(id,function () {
           done();
         });
      });
        /*
          This test ensures when a new feed is loaded
          by the loadFeed function that the content actually changes.
          The before and after variables store the content of the feed
          and are accordingly compared.
       */
       it('Check new entries', function () {
         var after=document.querySelectorAll('.feed .entry');
         var arrBefore=[];
         before.forEach(function(node) {
           arrBefore.push(node.textContent);
         });
         var flag=false;
         after.forEach(function(node) {
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
