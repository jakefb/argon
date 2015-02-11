(function() {
  var app = angular.module('argon', [])

  app.controller('TabController', function() {
    this.tab = 1
    this.setTab = function(selectedTab) {
      this.tab = selectedTab
    }
    this.isSet = function(checkTab) {
      return this.tab === checkTab
    }
  })
})()