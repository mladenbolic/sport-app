import Ember from 'ember';

/**
 * Component for generation the pagination menu.
 */
export default Ember.Component.extend({
    maxPages: 5,

    /**
     * Start position of the central menu items (between dots).
     */
    startPage: function () {
        return Math.max(1, Math.min(this.get('page') - Math.floor(this.get('maxPages') / 2), this.get('totalPages') - this.get('maxPages') + 1));
    }.property('page', 'maxPages', 'totalPages'),

    /**
     * End position of the central menu items (between dots).
     * Depends on startPage value.
     */
    endPage: function () {
        return Math.min(this.get('totalPages'), this.get('startPage') + this.get('maxPages') - 1);
    }.property('startPage'),

    prevPage: function () {
        return this.get('page') - 1;
    }.property('page'),

    nextPage: function () {
        return this.get('page') + 1;
    }.property('page'),

    isFirstPage: function () {
        return this.get('page') === 1;
    }.property('page'),

    isLastPage: function () {
        return this.get('page') >= this.get('totalPages');
    }.property('page', 'totalPages'),

    doShowLeftDots: function () {
        return this.get('startPage') > 1;
    }.property('startPage'),

    doShowRightDots: function () {
        return this.get('page') < this.get('totalPages') - Math.floor(this.get('maxPages') / 2);
    }.property('page'),

    /**
     * Generates list of available pages in the menu.
     * Always show at top the maxPages on the menu.
     */
    pageItems: function () {
        var result, pageItem,
            page = this.get('page'),
            startPage = this.get('startPage'),
            endPage = this.get('endPage');

        result = Ember.A();

        // generate the pagination menu items
        for (var i = startPage; i <= endPage; i++) {

            pageItem = {
                current: (page === i) ? 'current' : '',
                nextToCurrent: ( (page - 1 === i) || (page + 1 === i) ) ? 'next-to-current' : '',
                number: i
            };

            result.push(pageItem);
        }

        return result;

    }.property('startPage')
});