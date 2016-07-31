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


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URLS for all feeds', function(){
            for(var i=0;i < allFeeds.length; i++){
                expect(allFeeds[i].url).toEqual(jasmine.any(String));
                expect(allFeeds[i].url).toBeTruthy();
            }
        });

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have names for all feeds', function(){
            for(var i=0;i < allFeeds.length; i++){
                expect(allFeeds[i].name).toEqual(jasmine.any(String));
                expect(allFeeds[i].name).toBeTruthy();
            }
        });

    });

    describe('The menu', function() {

        var body,
            menuIcon;

        beforeEach(function() {
            body = document.body;
            menuIcon = $('.menu-icon-link');
        });

        /* test that ensures the menu element is
         * hidden by default.
         * Gets hidden by CSS applied via class 'menu-hidden' on 'body' element.
         */
        it('is hidden on load', function(){
            expect(body.getAttribute('class')).toMatch('menu-hidden');
        });

        /* test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         * Gets hidden by CSS applied via class 'menu-hidden' on 'body' element.
         */
        it('changes visibility when the icon is clicked', function(){
            menuIcon.click();
            expect(body.getAttribute('class')).not.toMatch('menu-hidden');
            menuIcon.click();
            expect(body.getAttribute('class')).toMatch('menu-hidden');
        });
    });

    describe('Initial Entries', function(){

        beforeEach(function(done){
            loadFeed(0, done);
        });

        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Test by calling loadFeed once and checking that it
         * has a DOM element with class of '.entry'.
         */
        it('has one or more entries', function(){
            expect($('.feed .entry')[0]).toBeTruthy();
        });
    });

    describe('New Feed Selection', function(done){

        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Test by getting html from two loadFeed calls and comparing html.
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('content changes when a new feed is loaded', function(done) {

            var firstFeed,
                secondFeed;

            // console.log(firstFeed);

            firstFeed = $('.feed').html();
            // console.log(firstFeed);

            loadFeed(2, function() {

                secondFeed = $('.feed').html();
                // console.log(secondFeed);
                expect(secondFeed).not.toEqual(firstFeed);
                done();
            });

        });
    });

}());