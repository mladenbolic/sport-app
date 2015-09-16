import Ember from 'ember';

/**
 * Component for generation api-box (sorting, ordering).
 */
export default Ember.Component.extend({

    /**
     * Generates api box radio buttons.
     */
    radioItems: function () {
        var result, radioItem,
            items = this.get('items');

        result = Ember.A();

        // go through key, value maps and setup the resulting array
        window.$.each(items, function (value, name) {
            radioItem = {
                value: value,
                name: name
            };

            result.push(radioItem);
        });

        return result;

    }.property('items')

});