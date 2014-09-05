Meteor.startup(function() {
    if (typeof(ngMeteor) !== 'undefined') {
        ngMeteor.requires.push('smart-table');
    }
});
