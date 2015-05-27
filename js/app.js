(function() {
  var app = angular.module('argon', [])

  app.controller('ContentController', function() {
    this.items = people
    this.sites = sites
  })

  app.controller('TabController', function() {
    this.tab = 1
    this.setTab = function(selectedTab) {
      this.tab = selectedTab
    }
    this.isSet = function(checkTab) {
      return this.tab === checkTab
    }
  })

  var people = [
    {
      name: "Jacob Fulton Buckle",
      details: "Hi, I'm Jacob. I've always had an interest in web design, how people use and interact with the web and a desire to build websites that people can use and enjoy. I enjoy graphic design as well as coding, listening to music and snowboarding. I live in Nelson, New Zealand.",
      email: "jacob@argon.nz",
      image: "img/jacob.jpg"
    },
    {
      name: "Jethro Burr",
      details: "Hey, my name's Jethro. I'm a BSc student at Victoria University. I love to bring together the creative side of life with my experience in Computer Science to create some truly great things. I'm an avid photographer, love to head out running and enjoy being with people.",
      email: "jethro@argon.nz",
      image: "img/jethro.jpg"
    }
  ]

  var sites = [
    {
      name: "Fastcast",
      details: "Fastcast is a peer-to-peer video networking site, developed for streaming high definition content.",
      url: "http://fastcast.nz",
      image: "img/fastcast.jpg"
    },
    {
      name: "Astra",
      details: "Astra is an experimental AngularJS and Bootstrap template. We plan on developing this into a more complete site in the future.",
      url: "http://chipboard.github.io/astra",
      image: "img/astra.jpg"
    },
  ]
})()
