class Library {
  constructor(){
    this.helper = {
      elem : null,
      
    };
  }
  get now(){
    return new Date.now();
  }
}
(function(){
  window.$ = new Library();
})()
