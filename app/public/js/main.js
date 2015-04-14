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
        }
    ];
});