
function myFunction() {
// Declare variables
var input, filter, ul, li, a, i;
input = document.getElementById('myInput');
filter = input.value.toUpperCase();
ul = document.getElementById("myUL");
li = ul.getElementsByTagName('li');

// Loop through all list items, and hide those who don't match the search query
for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    }
}
}


var config = {
    apiKey: "AIzaSyC79DupV5aQSgLzIjobImsO-OWbEj85WTs",
    authDomain: "comments-f0dfb.firebaseapp.com",
    databaseURL: "https://comments-f0dfb.firebaseio.com",
    projectId: "comments-f0dfb",
    storageBucket: "comments-f0dfb.appspot.com",
    messagingSenderId: "676595922018"
};
firebase.initializeApp(config);

var app = angular.module("app", ["firebase"])

app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer").child(kommentarsfalt);
    return $firebaseArray(ref);
});

app.controller("kommentarcontrol", function($scope, kommentarer)  {
    $scope.kommentarer = kommentarer;

    $scope.kommentar = {
        text: "",
        skribent: ""
    };
    $scope.addComment = function()  {
        $scope.kommentarer.$add($scope.kommentar);

        $scope.kommentar = {
            text: "",
            skribent: ""
        };
    }
});

