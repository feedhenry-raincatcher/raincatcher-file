'use strict';

var config = require('../config');


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
            console.log(element[0].src);
          });
        });
      }
    };
  })
  .directive('fileDetail', function($templateCache) {
    var temp = $templateCache.get('wfm-template/file-detail.tpl.html');
    console.log('>>> TEMPLATE... ' + temp);
    return {
      restrict: 'E',
      template: $templateCache.get('wfm-template/file-detail.tpl.html')
      // template: '<div>Some sample text here.</div>'
      // , scope: {
      //   file : '=file'
      // }
      // , controller: function($scope) {
      //     console.log('>>>> file detail ctrl');
      // }
      // , controllerAs: 'ctrl'
    };
  })
;
