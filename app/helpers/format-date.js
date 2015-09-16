import Ember from 'ember';

/**
 * Helper for formatting dates.
 */
export default Ember.Handlebars.makeBoundHelper(function (value) {
    return window.moment(value).format('MM/DD/YYYY, HH:mm');
});
