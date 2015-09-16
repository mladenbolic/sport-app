import Ember from 'ember';

/**
 * Component for generating the route map.
 */
export default Ember.Component.extend({

    /**
     * Generates map with with route details.
     */
    generateMap: function () {
        var map, polyline, decodedPath, decodedLevels,
            container = this.$('.map-canvas')[0],
            encodedPolyline = this.get('polyline'),
            encodedLevels = "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            options = {
                zoom: 15,
                center: {lat: -34.397, lng: 150.644}
            };

        decodedPath = window.google.maps.geometry.encoding.decodePath(encodedPolyline);
        decodedLevels = this.decodeLevels(encodedLevels);


        map = new window.google.maps.Map(container, options);
        map.setCenter(decodedPath[0]);

        polyline = new window.google.maps.Polyline({
            path: decodedPath,
            levels: decodedLevels,
            strokeColor: "#f4645f",
            strokeOpacity: 1.0,
            strokeWeight: 2,
            map: map
        });

    }.on('didInsertElement'),

    /**
     * Decode an encoded levels string into an array of levels.
     */
    decodeLevels: function (encodedLevelsString) {
        var decodedLevels = [];

        for (var i = 0; i < encodedLevelsString.length; ++i) {
            var level = encodedLevelsString.charCodeAt(i) - 63;
            decodedLevels.push(level);
        }

        return decodedLevels;
    }
})
;
