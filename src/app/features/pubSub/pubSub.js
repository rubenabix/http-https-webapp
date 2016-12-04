import * as io from 'socket.io-client';

const root = 'http://localhost:3777';

class HSPubSub {

  /** @ngInject */
  constructor() {
  }

  connect(loginId) {

    this._loginId = loginId;
    this._confirmed = false;

    this._socket = io.connect(root + '/liveBetting');

    this._socket.on('connect', () => {
      console.log('main', 'connect');
    });

    this._socket.on('identification', (result) => {
      this._sockeId = result.id;
      console.log('identification', 'id:', this._sockeId);
      this._socket.emit('identification', {
        id: this._loginId
      });
    });

    this._socket.on('disconnect', () => {
      console.log('main', 'disconnect');
      this._confirmed = false;
    });

    this._socket.on('confirmation', (result) => {
      console.log('main', 'confirmation');
      this._confirmed = true;
    });

    this._socket.on('view-@SEARCH@', (result) => {
      console.log('view-@SEARCH@');
      console.log(result);
    });

  }

  // getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   //return `#token#${Math.floor(Math.random() * (max - min)) + min}`;
  //   return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1NjQ0MzZiLWFmY2QtNDA3OC04MzhkLWZjNTQ5ZDM4YzE5YyIsImlhdCI6MTQ4MDQ1MzQ3NH0.qBbP52cl29s_PioEBu9EuMrYgIKN7owPZvhPNfZP4bA';
  // }


}

export default HSPubSub;