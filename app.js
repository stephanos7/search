$( document ).ready(function() {
  var searchBar = $('.search-bar');
  var stage = $('.stage'); 

  searchBar.on("keyup", function(){

    // check that every key up is logged
    console.log("keys pressed");

    // check for relevant value
    if(searchBar.val()==="hello"){
      console.log("keyword identified!");

      // append the word on the staging area
      stage.append('<div class="xy">'+ searchBar.val() +'</div>');

      // catch the word's exact width
      var caughtWidth = ($('.xy').width() + 1);
      console.log("caughtWidth", caughtWidth);

      // get the search bar's curent width
      var currentWidth = searchBar.width();
      console.log("currentWidth", currentWidth);

      // get the new width by subtracting the caught width from the current width
      var modifiedWidth = currentWidth - caughtWidth;

      // reduce the bars width by the caught width from the stage
      searchBar.css("width", modifiedWidth);

      // create an input element similar to the search bar to match the width of the caught width
      // append the generated input element before the search bar
      searchBar.before('<input class="search-bar" type="text" style="width:'+caughtWidth+'px; background-color:lightblue" value="'+searchBar.val()+'" readonly="readonly">')

      // add left padding to search bar to separate var from input text
      searchBar.css("padding-left", "10px");
    }
  })


})