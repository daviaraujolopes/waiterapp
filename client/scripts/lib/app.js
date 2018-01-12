// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-meteor-auth';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-moment';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

// Controllers
import ProfileCtrl from '../controllers/profile.controller';
import LoginCtrl from '../controllers/login.controller';
import SettingsCtrl from '../controllers/settings.controller';
import ConfirmationCtrl from '../controllers/confirmation.controller';
import ChatsCtrl from '../controllers/chats.controller';
import ChatCtrl from '../controllers/chat.controller';


//filters
import CalendarFilter from '../filters/calendar.filter';

//directives
import InputDirective from '../directives/input.directive';

//config
import Routes from './routes';

const App = 'Waiterapp';

// App
Angular.module(App, [
    'angular-meteor',
    'angular-meteor.auth',
    'angularMoment',
    'ionic'
]);

new Loader(App)
    .load(ChatsCtrl)
    .load(ChatCtrl)
    .load(LoginCtrl)
    .load(SettingsCtrl)
    .load(ProfileCtrl)
    .load(ConfirmationCtrl)
    .load(CalendarFilter)
    .load(InputDirective)
    .load(Routes);

// Startup
if (Meteor.isCordova) {
    Angular.element(document).on('deviceready', onReady);
} else {
    Angular.element(document).ready(onReady);
}

function onReady() {
    Angular.bootstrap(document, [App]);
}