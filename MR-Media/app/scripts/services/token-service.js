'use strict';
mrmedia.factory('TokenSrv', function () {
        return {

          token: 'a6c90bdd01d18502d72cd529447c4cb7',
          setToken: function (token) {
              this.token = token;
          },
          getToken: function () {
              return this.token;
          }
        };
    });
