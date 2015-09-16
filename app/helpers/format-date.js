import Ember from 'ember';

/**
 * Helper for formatting dates.
 */
export default Ember.Handlebars.makeBoundHelper(function (value) {
    return window.moment(value).format('DD.MM.YYYY, HH:mm');
});