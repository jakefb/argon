(function() {
  var app = angular.module('argon', [])

  app.controller('ContentController', function() {
    this.items = people
    this.sites = sites
  })

  app.directive('contentTabs', function() {
    return {
      restrict: 'E',
      templateUrl: 'content-tabs.html',
      controller: function() {
        this.tab = 1
        this.isSet = function(checkTab) {
          return this.tab === checkTab
        }
        this.setTab = function(setTab) {
          this.tab = setTab
        }
      },
      controllerAs: 'tab'
    }
  })

  app.directive('tabHome', function() {
    return {
      restrict: 'E',
      templateUrl: 'tab-home.html'
    }
  })

  app.directive('tabAbout', function() {
    return {
      restrict: 'E',
      templateUrl: 'tab-about.html'
    }
  })

  app.directive('contentHome', function() {
    return {
      restrict: 'E',
      templateUrl: 'content-home.html'
    }
  })

  app.directive('contentAbout', function() {
    return {
      restrict: 'E',
      templateUrl: 'content-about.html'
    }
  })

  app.directive('contentContact', function() {
    return {
      restrict: 'E',
      templateUrl: 'content-contact.html'
    }
  })

  var people = [
    {
      name: "Jacob Fulton Buckle",
      details: "Hi, I'm Jacob. I've always had an interest in web design, how people use and interact with the web and a desire to build websites that people can use and enjoy. I enjoy graphic design as well as coding, mixing music and snowboarding. I live in Nelson, New Zealand.",
      email: "jacobafb@gmail.com",
      image: "img/jacob.jpg"
    },
    {
      name: "Jethro Burr",
      details: "Hello, I'm Jethro. I'm an Economics student at Victoria University of Wellington. I love to bring together the creative side of life with my experience in things more techncial to create some truly great things. I'm an avid photographer, love to head out running and enjoy making a good coffee.",
      email: "jedaburr@gmail.com",
      image: "img/jethro.jpg"
    }
  ]

  var sites = [
    {
      name: "Fastcast",
      details: "Fastcast is a lightning-fast streaming site, designed for streaming the content you love.",
      url: "http://fastcast.nz",
      image: "img/fastcast.jpg"
    },
    {
      name: "Astra",
      details: "Astra is an experimental page built with AngularJS and Bootstrap. We plan on developing this into an even faster, complete site in the future.",
      url: "http://chipboard.github.io/astra",
      image: "img/astra.jpg"
    },
  ]
})()
