Package.describe({
  summary: "Meteor package for smart-table: a table/grid for Angularjs",
  version: "0.1.4",
  git: "https://github.com/davidyaha/meteor-smart-table.git"
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@0.9.0.1');

    api.use('urigo:angular@0.7.2', 'client');

    // Client files.
    api.add_files(['lib/bower_components/angular-smart-table/dist/smart-table.min.js'], 'client');

});
