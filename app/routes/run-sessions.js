import BaseRoute from './base';

/**
 * Run session route.
 */
export default BaseRoute.extend({
    beforeModel: function(transition) {
        if (new Date() < new Date("January 1, 1980")) {
            alert("Sorry, you need a time machine to enter this route.");
            transition.abort();
        }
    },
    init: function(){
        this._super('run-session');
    }
});