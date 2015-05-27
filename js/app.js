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
      details: "Hi, I'm Jacob. I've always had an interest in web design, how people use and interact with the web and a desire to build websites that people can use and enjoy. I live in Nelson, New Zealand.",
      email: "jacob@argon.nz",
      image: "img/jacob.jpg"
    },
    {
      name: "Jethro Burr",
      details: "Bacon ipsum dolor amet alcatra chuck filet mignon spare ribs pork loin fatback tail salami shank short ribs turducken. Fatback salami pastrami leberkas sausage corned beef jerky, turducken ground round pork chop ham hock. Picanha sirloin strip steak shoulder ground round bacon, biltong fatback ham hock spare ribs tail. Pancetta strip steak landjaeger corned beef. Bacon brisket sausage ham hock ground round.",
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
