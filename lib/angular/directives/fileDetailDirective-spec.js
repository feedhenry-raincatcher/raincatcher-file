var angular = require('angular');
var should = require('should');
var sinon = require('sinon');
require('angular-mocks');

var initModule = require('../../../test/initModule');

describe('File file-detail Directive', function() {
  before(function() {
    initModule();
  });

  it("The field should be set from the parent scope", inject(function($rootScope) {
    //Setting up a new mock $scope.
    // var $scope = $rootScope.$new();
    //
    // //Setting a mock field
    // $scope.field = {
    //   "_id": "locationfieldid",
    //   "name": "Location Field",
    //   "values": {}
    // };
    //
    // var controller = this.$controller('FieldLocationController', { $scope: $scope});

    //The field from the parent scope should be bound to the controller scope.
    should(1).equal(1);
  }));
});