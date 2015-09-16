import Ember from 'ember';

/**
 * Base controller.
 */
export default Ember.Controller.extend({
    // bound the property to the query parameters
    queryParams: [
        'page',
        'sortBy',
        'order'
    ]
});