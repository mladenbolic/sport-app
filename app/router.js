import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function () {
    this.route('run-sessions', {path: "/"});
    this.route('run-sessions', {path: '/run-sessions'});
    this.route('run-session', {path: '/run-sessions/:run-session_id'});
});

export default Router;
