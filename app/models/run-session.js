import DS from 'ember-data';

/**
 * Run session model.
 */
export default DS.Model.extend({
    startTime: DS.attr('date'),
    endTime: DS.attr('date'),
    duration: DS.attr('number'),
    distance: DS.attr('number'),
    encodedTrace: DS.attr('string'),
    sportTypeId: DS.attr('number')
});