import Ember from 'ember';

/**
 * Component for generation back button.
 */
export default Ember.Component.extend({

    /**
     * Component actions.
     */
    actions: {

        /**
         * Use browser history.
         */
        goBack: function () {
            window.history.back();
        }
    }

});