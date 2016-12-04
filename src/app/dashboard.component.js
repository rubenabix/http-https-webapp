const host =
  {
    http: '',
    https: '',
    //http: 'http://localhost:3080',
    //https: 'https://localhost:3080:3447',
  };

const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;

class DashboardController {

  /** @ngInject */
  constructor($http, $scope, $mdToast) {

    this._$http = $http;
    this._$scope = $scope;
    this._$mdToast = $mdToast;

    this.protocol = window.location.protocol;

    this.cleanForms();

  }

  cleanForms() {
    this.form = {
      http: {
        user: '',
        password: ''
      },
      https: {
        user: '',
        password: ''
      }
    }
  }

  submit(type, mode) {

    console.log('submit', mode, type);

    const base = '';

    let query;

    if (mode === 'GET') {
      query = this._$http({
        method: mode,
        url: `${base}/api/authenticate`,
        params: this.form[type],
        responseType: 'json'
      })
    } else {
      query = this._$http({
        method: mode,
        url: `${base}/api/authenticate`,
        data: this.form[type],
        responseType: 'json'
      })
    }

    query
      .then((response) => {
        console.log(response);

        if (response.data.status === 'ok') {
          this.name = response.data.name;
          this.isAuthenticated = true;
        } else {
          this.isAuthenticated = false;
        }

        this._$mdToast.showSimple(response.data.message);

      })
      .catch((error) => {
        console.error(error);

        this._$mdToast.showSimple(error.message);

      });

  }

}

export const dashboard = {
  template: require('./dashboard.html'),
  controllerAs: 'dashboardController',
  selector: 'dashboard',
  controller: DashboardController
};
