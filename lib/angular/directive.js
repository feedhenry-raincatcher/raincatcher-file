'use strict';

var config = require('../config');
var _ = require('lodash');

var ngModule = angular.module('wfm.file.directives', []);

module.exports = 'wfm.file.directives';

require('../../dist');

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
     Options help to chose which details we want to render:
     e.g. <file-detail file="ctrl.file" options="id, name, uid, owner, preview">
     would render all details.
     Options should be comma separated ', '
     */
    return {
      restrict: 'E',
      template: $templateCache.get('wfm-template/file-detail.tpl.html')
      , scope: {
        file: '=',
        options: '@'
      }
      , controller: function($scope) {
        var self = this;
        self.file = $scope.file;
        self.options = {};
        var opts = $scope.options ? $scope.options.split(', ') : [];
        _.forEach(opts, function(option) {
          self.options[option] = true;
        });
      }
      , controllerAs: 'ctrl'
    };
  })
;
