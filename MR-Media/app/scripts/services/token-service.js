'use strict';
mrmedia.factory('TokenSrv', function () {
        return {
          token: '44fa32d24786e3ebad0d18cad7b7764cf8e3e091',
          setToken: function (token) {
              this.token = token;
          },
          getToken: function () {
              return this.token;
          }
        };
    });
