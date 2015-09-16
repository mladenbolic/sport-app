import Ember from 'ember';

/**
 * Run session route.
 */
export default Ember.Route.extend({

    model: function (params) {
        return this.store.find('run-session', params['run-session_id']);
    }

});