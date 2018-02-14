import {
  app
} from '../main.js';
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "src/views/coduriM.html"
    })
    .when("/medicochir", {
      templateUrl: "src/views/urgMC.html"
    })
    .when("/boliinfcont", {
      templateUrl: "src/views/codUrgBIC.html"
    })
    .when('/404', {
      templateUrl: "src/views/404.html"
    })
    .otherwise("/404");
});
