(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const get = require('../routes/get');

    // *** register routes *** //
    app.use('/get', get);

  };

})(module.exports);
