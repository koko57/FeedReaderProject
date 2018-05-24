$(() => {

    describe('RSS Feeds', () => {
        it('are defined,', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have their urls defined,', () => {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
       
        it('have their names defined.', () => {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', () => {
        
        it('is hidden by default,', () => {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    
        it('is hidden/shown on click.', () => {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial entries', () => {
        beforeEach(done => {
            loadFeed(0, done);
        });
        it('are loaded and appear on the page.', () => {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', () => {
        let feedOne, feedTwo;
        beforeEach(done => {
            loadFeed(0, () => {
                feedOne = $('.feed').html();
                loadFeed(1, () => {
                    feedTwo = $('.feed').html();
                    done();
                });
            });
        });
        it('contains new entries.', done => {
            expect(feedOne).not.toEqual(feedTwo);
            done();
        });
    });
});
