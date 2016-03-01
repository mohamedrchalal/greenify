$(document).ready(function(){
  (function($){
    $.fn.redify = function(){
      this.css("color", "red")
      return this
    }
    $.fn.greenify = function(){
      this.css("color", "green")
      return this
    }
    $.fn.blueify = function(){
      this.css("color", "blue")
      return this
    }

    $.fn.bigify = function(){
      this.css("font-size", "100px")
      return this
    }

    $.fn.smallify = function(){
      this.css("font-size", "10px")
      return this
    }
    // added this function that uses the greenify function we defined above
    // $.fn.addGreenDiv = function(){
    //   var newDiv = $("<div>make em green!</div>").greenify()
    //   this.append(newDiv)
    //   return this
    // }
  })(jQuery);

  $("h1").on("click", function(){
    $("body").append($("<div>jQuery plugins are cool!</div>"))
  })

  $("h2").on("click", function(){
    $("div").redify()
  })

  $("h3").on("click", function(){
    $("div").greenify()
  })

  $("h4").on("click", function(){
    $("div").blueify()
  })

  $("h5").on("click", function(){
    $("div").bigify()
  })

  $("h6").on("click", function(){
    $("div").smallify()
  })
})
