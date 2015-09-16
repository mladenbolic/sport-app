import Ember from 'ember';

/**
 * Helper for formatting dates.
 */
export default Ember.Handlebars.makeBoundHelper(function (value) {
    return window.moment().startOf('day').seconds(Math.floor(value / 1000)).format('HH:mm:ss');
});