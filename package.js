Package.describe({
  summary: "Meteor package for smart-table: a table/grid for Angularjs",
  version: "0.1.2",
  git: "https://github.com/davidyaha/meteor-smart-table.git"
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@0.9.0.1');

    api.use('angular:angular@1.3.0', 'client');

    // Client files.
    api.add_files(['lib/bower_components/angular-smart-table/dist/smart-table.min.js'], 'client');

});

//Package.onTest(function(api) {
//  api.use('tinytest');
//  api.use('smart-table');
//  api.addFiles('smart-table-tests.js');
//});
