const host = 'http://192.168.103.102:7720';

const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;

class DashboardController {

  constructor($http, $scope) {

    this._$http = $http;
    this._$scope = $scope;

  }

}

export const dashboard = {
  template: require('./dashboard.html'),
  controllerAs: 'dashboardController',
  selector: 'dashboard',
  controller: DashboardController
};
