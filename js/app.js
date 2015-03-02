(function() {
  var app = angular.module('argon', [])

  app.controller('ContentController', function() {
    this.items = people
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
      details: "Bacon ipsum dolor amet picanha pork ham meatloaf tongue flank, landjaeger salami fatback jerky. Salami chicken beef, meatball biltong pig beef ribs bacon ball tip corned beef pork chop pork belly. Tail filet mignon meatloaf venison kevin biltong. Pig swine beef andouille strip steak, turducken bresaola. Salami prosciutto turducken, chuck ball tip jerky ham kevin strip steak jowl pancetta.",
      email: "jacob@argondesign.nz",
      image: "jacob.png"
    },
    {
      name: "Jethro Burr",
      details: "Bacon ipsum dolor amet alcatra chuck filet mignon spare ribs pork loin fatback tail salami shank short ribs turducken. Fatback salami pastrami leberkas sausage corned beef jerky, turducken ground round pork chop ham hock. Picanha sirloin strip steak shoulder ground round bacon, biltong fatback ham hock spare ribs tail. Pancetta strip steak landjaeger corned beef. Bacon brisket sausage ham hock ground round.",
      email: "jethro@argondesign.nz",
      image: "jethro.png"
    },
  ]
})()
