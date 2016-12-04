import angular from 'angular';

import 'angular-material/angular-material.css';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';

import 'jquery';
import 'bootstrap-loader';

import 'angular-jwt';

import {dashboard} from './app/dashboard.component';
import HSPubSub from './app/features/pubSub/pubSub'
import 'angular-ui-router';
import config from './routes';

import './index.css';

export const app = 'app';

angular
  .module(app,
    [
      'ngMaterial',
      'ui.router',
      'angular-jwt'
    ])
  .config(config)
  .service('hsPubSub', HSPubSub)
  .component('app', dashboard);
