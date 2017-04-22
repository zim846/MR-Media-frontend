'use strict';
mrmedia.factory('TokenSrv', function () {
        return {

          token: '2ef85369f09f1dae7cc906e32f620f64',
          setToken: function (token) {
              this.token = token;
          },
          getToken: function () {
              return this.token;
          }
        };
    });
