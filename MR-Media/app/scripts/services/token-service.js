'use strict';
mrmedia.factory('TokenSrv', function () {
        return {

          token: '0c64afc62225428174c73b3cc459f519 ',
          setToken: function (token) {
              this.token = token;
          },
          getToken: function () {
              return this.token;
          }
        };
    });
