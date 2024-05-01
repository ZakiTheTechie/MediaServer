//=============================================================================
// Copyright (C) 2015 Fujitsu Network Communications, Inc. All Rights Reserved
// ============================================================================
// Description:
//  Angular Media Controller
//
// History:
//  05/15/2015 - Version 0.9: Initial Development
//=============================================================================
'use strict'

var app = angular.module('mediaServer', ['ui.bootstrap']);

app.controller('mediaCtrl', 
   function($scope) {
      // ==========
      // Global data for Application Panel
      // ==========
      $scope.movieList = [
         { "title":"Star Wars VII", "poster":"starwars7.jpg", "video":"starwars7_720.mp4"},
         { "title":"Bridge of Spies", "poster":"bridgeofspies.jpg", "video":"bridgeofspies_720.mp4"},
         { "title":"Spectre", "poster":"spectre.jpg", "video":"spectre_720.mp4"},
         { "title":"Maze Runner", "poster":"mazerunner.jpg", "video":"mazerunner_720.mp4"},
         { "title":"Fantastic Four", "poster":"fantasticfour.jpg", "video":"fantasticfour_720.mp4"}         
      ];
      $scope.posterUrl = "images/movies/";
      $scope.videoUrl = "media/";
              
   }    
);
