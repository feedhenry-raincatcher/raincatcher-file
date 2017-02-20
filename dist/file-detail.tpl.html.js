var ngModule;
try {
  ngModule = angular.module('wfm.file.directives');
} catch (e) {
  ngModule = angular.module('wfm.file.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/file-detail.tpl.html',
    '\n' +
    '<md-toolbar class="content-toolbar">\n' +
    '    <div class="md-toolbar-tools">\n' +
    '        sdfsdf\n' +
    '        <h3>\n' +
    '            {{ctrl.file.name}}\n' +
    '        </h3>\n' +
    '\n' +
    '        <span flex></span>\n' +
    '        <!-- <md-button class="md-icon-button" aria-label="Edit" ui-sref="app.file.edit({fileId: ctrl.file.id})">\n' +
    '          <md-icon md-font-set="material-icons">edit</md-icon>\n' +
    '        </md-button>\n' +
    '        <md-button class="md-icon-button" aria-label="Delete" ng-click="ctrl.delete($event, ctrl.file)">\n' +
    '          <md-icon md-font-set="material-icons">delete</md-icon>\n' +
    '        </md-button> -->\n' +
    '    </div>\n' +
    '</md-toolbar>\n' +
    '<!-- <md-button class="md-fab" aria-label="New file" ui-sref="app.file.new">\n' +
    '  <md-icon md-font-set="material-icons">add</md-icon>\n' +
    '</md-button> -->\n' +
    '\n' +
    '<div class="wfm-maincol-scroll">\n' +
    '    <md-list>\n' +
    '        <md-list-item class="md-2-line">\n' +
    '            <md-icon md-font-set="material-icons">info</md-icon>\n' +
    '            <div class="md-list-item-text">\n' +
    '                <h3>{{ctrl.file.id}}</h3>\n' +
    '                <p>Id</p>\n' +
    '            </div>\n' +
    '            <md-divider></md-divider>\n' +
    '        </md-list-item>\n' +
    '\n' +
    '        <md-list-item class="md-2-line">\n' +
    '            <md-icon md-font-set="material-icons">photo_album</md-icon>\n' +
    '            <div class="md-list-item-text">\n' +
    '                <h3>{{ctrl.file.name}}</h3>\n' +
    '                <p>Name</p>\n' +
    '            </div>\n' +
    '            <md-divider></md-divider>\n' +
    '        </md-list-item>\n' +
    '\n' +
    '        <md-list-item class="md-2-line">\n' +
    '            <md-icon md-font-set="material-icons">info_outline</md-icon>\n' +
    '            <div class="md-list-item-text">\n' +
    '                <h3>{{ctrl.file.uid}}</h3>\n' +
    '                <p>Uid</p>\n' +
    '            </div>\n' +
    '            <md-divider></md-divider>\n' +
    '        </md-list-item>\n' +
    '\n' +
    '        <md-list-item class="md-2-line">\n' +
    '            <md-icon md-font-set="material-icons">account_box</md-icon>\n' +
    '            <div class="md-list-item-text">\n' +
    '                <h3>{{ctrl.workerMap[ctrl.file.owner].name}}</h3>\n' +
    '                <p>Owner</p>\n' +
    '            </div>\n' +
    '            <md-divider></md-divider>\n' +
    '        </md-list-item>\n' +
    '\n' +
    '        <md-list-item class="md-2-line with-image">\n' +
    '            <md-icon md-font-set="material-icons">photo</md-icon>\n' +
    '            <div class="md-list-item-text">\n' +
    '                <h3><img wfm-img uid="ctrl.file.uid" style="width:450px"></h3>\n' +
    '            </div>\n' +
    '            <md-divider></md-divider>\n' +
    '        </md-list-item>\n' +
    '\n' +
    '    </md-list>\n' +
    '\n' +
    '</div><!-- wfm-maincol-scroll -->\n' +
    '');
}]);
