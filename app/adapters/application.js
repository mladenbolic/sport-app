import DS from 'ember-data';

/**
 * Applications default adapter.
 */
export default DS.ActiveModelAdapter.extend({
    host: 'http://intense-bastion-3210.herokuapp.com',

    /**
     * Ember 2.x compatibility fix.
     */
    shouldBackgroundReloadRecord: function(){
        return false;
    }
});