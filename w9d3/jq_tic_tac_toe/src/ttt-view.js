class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard(); 
    this.bindEvents();
  };

  bindEvents() {
    let that = this;
    $("li").each(function(index){
      let li_clicked = $($("li")[index]);

      li_clicked.on("click",(event => {
        that.game.playMove($(this).data('pos'))
        if (that.game.currentPlayer === 'x'){
          $(this).append("X")
          } else {
          $(this).append("O")
        };
        $(this).css("background", "white")
        if(that.game.isOver()){
          $("h1").append(`<p>${that.game.currentPlayer.toUpperCase() } HAS WON!</p>`)
        };
      }))
    
    })
    // on("click", "li" , (event =>{
    //   this.game.playMove($(event.currentTarget.data("pos")))  //this could be where we fucked up 
    //   this.makeMove(event.currentTarget);
    //   console.log("clicked");
    // }))
    
  };

  makeMove($square) {
    
  }

  setupBoard() {
    const $ul = $("<ul></ul>")
    for (let row = 0; row < 3; row++) { 
      for (let col = 0; col < 3; col++){
        let $li = $("<li></li>");
        $li.data("pos",[row,col]);
        $ul.append($li)
      };
    };
    this.$el.append($ul)
  };
}

module.exports = View;
