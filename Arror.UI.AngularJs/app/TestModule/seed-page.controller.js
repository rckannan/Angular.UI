(function() {
    'use strict';

    angular
        .module('seed-module')
        .controller('SeedPageController', SeedPageController);

    /* @ngInject */
    function SeedPageController($stateParams, arrHTTPService, triMenu) {
        var vm = this;
        vm.testData = ['triangular', 'is', 'great', $stateParams.id];

        arrHTTPService.getData('/api/refreshtokens').then(function (response) {
            vm.value = response.data;
            },
           function (err, status) { 
               vm.value = err.error_description + " -- " + status;
           });

         
    }
})();