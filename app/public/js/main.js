var app = angular.module('innovadiv-marketing', [
    'mailchimp'
]);

app.run(function () {
    if (typeof hljs !== 'undefined') {
        // @TODO move this to directive
        hljs.initHighlightingOnLoad();
    }
});

app.controller("featureArtists", function ($scope) {
    $scope.artists = [
        {
            name: "Ron E Polo",
            image: "ronepolo.jpg",
            location: "Columbus, OH",
            genre: "Hip Hop"
        },
        {
            name: "Dr. Auburn Ellis",
            image: "drauburnellis.jpg",
            location: "Chicago, IL",
            genre: "Visual Artist"
        },
        {
            name: "Jake Jude",
            image: "jakejude.jpg",
            location: "Chicago, IL",
            genre: "Electronic/Progressive House"
        },
        {
            name: "Unamused Dave",
            image: "unamuseddave.jpg",
            location: "Peoria, IL",
            genre: "Rock/Punk/Alternative"
        },
        {
            name: "Big Loony",
            image: "biglooney.jpg",
            location: "Colorado Springs, CO",
            genre: "Rap"
        },
        {
            name: "CHISongwriter",
            image: "chisongwriter.jpg",
            location: "Peoria, IL",
            genre: "Hip Hop"
        },
        {
            name: "Marty P",
            image: "martyp.jpg",
            location: "Pensacola, FL",
            genre: "Hip Hop"
        },
        {
            name: "Aaron Andrews Apparel",
            image: "aaa.jpg",
            location: "Chicago, IL",
            genre: "Fashion/Design"
        },
        {
            name: "SMACKA",
            image: "smacka.jpg",
            location: "Pittsburgh, PA",
            genre: "EDM/Hip Hop"
        },
        {
            name: "Dualstyles ",
            image: "dualstyles.jpg",
            location: "Chicago, IL",
            genre: "Hard Rock"
        },
        {
            name: "Byro",
            image: "byro.jpg",
            location: "Chicago, IL",
            genre: "Rap/Pop/Rock"
        },
        {
            name: "dAb Images",
            image: "daab.jpg",
            location: "Peoria, IL",
            genre: "Event Photography/Private Shoots"
        },
        {
            name: "Devin Young",
            image: "devin-youngg.jpg",
            location: "Chicago, IL",
            genre: "R&B/Video Production/Songwriter"
        },
        {
            name: "Over Your Head Productions",
            image: "oyhpp.jpg",
            location: "Chicago, IL",
            genre: "Photography/Video Editing/Filming"
        },
        {
            name: "NoDazeOff",
            image: "daze.jpg",
            location: "Memphis, TN",
            genre: "EDM/Hip Hop/R&B/Rock"
        },
        {
            name: "Relly Rell",
            image: "rellyrell.jpg",
            location: "Queens, NY/Chicago, IL",
            genre: "Hip Hop"
        },
        {   
            name: "Naarai Michele",
            image: "naarai.png",
            location: "Los Angeles, CA",
            genre: "Pop/R&B"
        },
        {
            name: "Prime",
            image: "prime.jpg",
            location: "Chicago, IL",
            genre: "Hip Hop"
        },
        {
            name: "The Casual Ties",
            image: "ties.jpg",
            location: "Chicago, IL",
            genre:  "Alternative Rock"
        },
        {
            name: "Reid the Martian",
            image: "redi1.jpg",
            location: "Lawrence, KS",
            genre: "Hip Hop"
        },
        {
            name: "KC-B",
            image: "kc1.jpg",
            location: "Kansas City, MO",
            genre: "Alternative, Hip Hop"
        },
        {
            name: "FLYe Bishop",
            image: "flye1.jpg",
            location: "Kansas City, MO",
            genre: "Hip Hop Fusion"
        }
    ];
});