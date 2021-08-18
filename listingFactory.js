angular.module('listings').factory('Listings', function() {
    var listings = {
        entries: [{
                "code": "CGT-2012",
                "name": "Luis Angel",
                "whatsapp": "55 3979 3727   ",
                "twitter": "@luisangelmaciel",
                "email": "luisangelmaciel@gmail.com",
                "cumple": "2 julio 1987",
                "edad": "30",
                "infoExtra": "Hace viajes",
            },
            {
                "code": "CGT-2012",
                "name": "Luis Angel",
                "whatsapp": "55 3979 3727   ",
                "twitter": "@luisangelmaciel",
                "email": "luisangelmaciel@gmail.com",
                "cumple": "2 julio 1987",
                "edad": "30",
                "infoExtra": "Hace viajes",
            },
            {
                "code": "CGT-2012",
                "name": "Luis Angel",
                "whatsapp": "55 3979 3727   ",
                "twitter": "@luisangelmaciel",
                "email": "luisangelmaciel@gmail.com",
                "cumple": "2 julio 1987",
                "edad": "30",
                "infoExtra": "Hace viajes",
            }
        ]
    };

    return listings.entries;
});