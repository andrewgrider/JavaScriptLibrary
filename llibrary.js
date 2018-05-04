function Library(selector) {
  this.ref = {
    "index" : null
  };
  this.select = function(el){
    this.ref.index = null;
    switch(el){
      case "body":
        return document.body;
        break;
      default:
        if(typeof(el) === typeof('String')){
          if(el.match(/\.|\#/)){
            if(this.ref.index){
              return document.querySelectorAll(el)[this.ref.index];
            } else {
              return document.querySelectorAll(el);
            }
          } else {
            if(this.ref.index){
              return document.getElementsByTagName(el)[this.ref.index];
            } else {
              return document.getElementsByTagName(el);
            }
          }
        } else {
          return el;
        }
        break;
    }
  };
  this.helper = {
    elem : selector ? this.select(selector) : null
  };
  this.now = function(){
    return new Date.now();
  };
  this.eq = function(index){
    this.ref.index = index;
    return this;
  };
}
