import Ember from 'ember';

/**
 * Base route.
 * Contains the pagination implementation.
 */
export default Ember.Route.extend({

    /**
     * Initialzes the base route.
     *
     * @param domain the route domain for which to retrieve the model data
     */
    init: function (domain) {
        this._super.apply(this, arguments);
        this.set('domain', domain);
    },

    sortItemMap: {
        'distance': 'Distance',
        'start_time': 'Start Time',
        'end_time': 'End Time',
        'sport_type_id': 'Sport Type',
        'duration': 'Duration'
    },
    orderItemMap: {'asc': 'Asc', 'desc': 'Desc'},

    // setup the model refresh
    queryParams: {
        page: {
            refreshModel: true
        },
        perPage: {
            refreshModel: true
        },
        sortBy: {
            refreshModel: true
        },
        order: {
            refreshModel: true
        }
    },

    model: function (params) {
        var query = {};

        if (Ember.isPresent(params.page)) {
            query.page = params.page;
        }

        if (Ember.isPresent(params.perPage)) {
            query.per_page = params.perPage;
        }

        if (Ember.isPresent(params.sortBy)) {
            query.sort_by = params.sortBy;
        }

        if (Ember.isPresent(params.order)) {
            query.order = params.order;
        }

        // depending on domain value, get the data for specific route
        return this.get('store').query(this.get('domain'), query);

    },

    /**
     * Sets the controller properties with model metadata.
     * Used for pagination.
     *
     * @param controller
     * @param model
     */
    setupController: function (controller, model) {
        this._super.apply(this, arguments);

        if (typeof model !== 'undefined') {
            var meta = model.get('meta');

            controller.setProperties({
                'total': parseInt(meta.pagination.total),
                'page': parseInt(meta.pagination.page),
                'perPage': parseInt(meta.pagination.per_page),
                'totalPages': parseInt(meta.pagination.available_pages),
                'sortBy': meta.pagination.sort_by,
                'order': meta.pagination.order,
                'sortItemMap': this.sortItemMap,
                'orderItemMap': this.orderItemMap
            });
        }
    }

});
