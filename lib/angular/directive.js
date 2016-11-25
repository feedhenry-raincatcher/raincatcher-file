'use strict';

var config = require('../config');

var ngModule = angular.module('wfm.file.directives', ['wfm.core.mediator']);

module.exports = 'wfm.file.directives';

require('../../dist');

/*
  Raincatcher-file directives give us ready to go views - configurable details, and file view (photo)
 */

ngModule.directive('wfmImg', function($q) {
  function init() {
    var deferred = $q.defer();
    $fh.on('fhinit', function(error) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      }
      var cloudUrl = $fh.getCloudURL();
      deferred.resolve(cloudUrl);
    });

    return deferred.promise;
  }

  var initPromise = init();

  return {
    restrict: 'A',
    scope: {
      uid: '='
    },
    link: function(scope, element) {
      scope.$watch('uid', function(uid) {
        initPromise.then(function(cloudUrl) {
          element[0].src = cloudUrl + config.apiPath + '/get/' + uid;
        });
      });
    }
  };
})
  .directive('fileDetail', function($templateCache) {
    /*
     detail view of a file, passed in is file object and options.
     Options help to chose which details we want to render
     options e.g. {id: true, name: true, uid: true, owner: true, preview:true};
     */
    return {
      restrict: 'E',
      template: $templateCache.get('wfm-template/file-detail.tpl.html'),
      scope: {
        file: '=',
        displayOptions: '='
      },
      controller: function($scope, mediator) {
        var self = this;
        self.file = $scope.file;
        self.options = $scope.displayOptions || {};
        //publish mediator message to close the file
        self.closeFile = function(event) {
          mediator.publish('wfm:file:close:');
          event.preventDefault();
          event.stopPropagation();
        };
      }
      , controllerAs: 'ctrl'
    };
  })
;
