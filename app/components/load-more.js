import Ember from 'ember';

/**
 * Component for generation load more button.
 */
export default Ember.Component.extend({

    /**
     * Returns true if last page is not reached.
     */
    canLoadMore: (function () {
        return this.get('page') < this.get('totalPages');
    }).property('page', 'totalPages'),

    /**
     * Component actions.
     */
    actions: {

        /**
         * Sets new page value, which will trigger the store query.
         */
        loadMore: function () {
            var page = this.get('page');

            // setup new page value
            this.set('page', page + 1);
        }
    }

});