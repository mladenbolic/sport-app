import Ember from 'ember';

/**
 * Helper for formatting distances to km values.
 */
export default Ember.Handlebars.makeBoundHelper(function (value) {
    return value / 1000 + "km";
});