angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
    function($scope, Listings) {
        $scope.listings = Listings;

        // Copy the full listing to a temp var that we may filter for searching
        // and then rebuild from the full listing
        $scope.lt = $scope.listings;

        // Define a var for our search term
        $scope.searchTerm = '';

        // Define some vars for the details pane
        $scope.showDetailsPane = false;
        $scope.detailsCode = '';
        $scope.detailsName = '';
        $scope.detailsAddress = '';
        $scope.detailsLatitude = '';
        $scope.detailsLongitude = '';

        // Define an object for newListing
        $scope.newListing = {};

        //
        $scope.detailedInfo = undefined;

        /* 
          Implement these functions in the controller to make your application function 
          as described in the assignment spec. 
         */
        $scope.addListing = function(newListing) {
            $scope.listings.push(newListing);
            $scope.newListing = {};
            $scope.filterResults();
        };
        $scope.deleteListing = function(index) {
            // First we must remove the desired entry from the full listing. We have 
            // the index from our filtering vairable which will not match when a 
            // search term is present. So we nest a map in the index parameter to find
            // the correct index in the full listing by matching on the building code 
            // of the selected index. This makes our splice of the full listing 
            // search safe. Perhaps there is a more elgant way to accomplish this, but
            // we haven't been given much time for this assignment, given the amount
            // of information necessary to assimilate. So, this code is what I like 
            // to call quick and dirty, or "beat to fit and paint to match."
            $scope.listings.splice($scope.listings.map(function(x) { return x.code; }).indexOf($scope.lt[index].code), 1);
            // Now that we no longer need any information from the selected lt record,
            // we splice it out.
            $scope.lt.splice(index, 1);
        };
        $scope.showDetails = function(index) {
            $scope.showDetailsPane = true;
            $scope.detailsCode = $scope.lt[index].code;
            $scope.detailsName = $scope.lt[index].name;
            $scope.detailsWhatsapp = $scope.lt[index].whatsapp;
            $scope.detailsTwitter = $scope.lt[index].twitter;
            $scope.detailsEmail = $scope.lt[index].email;
            $scope.detailsCumple = $scope.lt[index].cumple;
            $scope.detailsEdad = $scope.lt[index].edad;
            $scope.detailsInfoExtra = $scope.lt[index].infoExtra;
        };


        $scope.filterResults = function() {
            var re = new RegExp($scope.searchTerm, 'gi');
            $scope.lt = $scope.listings.filter(function(bldg) { return bldg.code.match(re) + bldg.name.match(re) });
        };

        $scope.clearSearch = function() {
            $scope.searchTerm = '';
            $scope.filterResults();
            $scope.showDetailsPane = false;
        };
    }
]);