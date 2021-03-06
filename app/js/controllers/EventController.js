'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll, $routeParams, $route){

        // descending
        $scope.sortorder = 'name';

        $scope.snippet = '<span style="color:red">hi there</span>';

        console.log($route.current.foo);
        // try http://localhost:8000/#/event/1?bar=2
        // or http://localhost:8000/event/1?bar=2
        console.log($route.current.params.bar);
        console.log($route.current.params.eventId);


        $scope.event = $route.current.locals.event;

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };

        $scope.scrollToSession = function(){
            $anchorScroll();
        }
    }
);