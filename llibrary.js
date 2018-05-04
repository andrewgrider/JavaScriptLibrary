class Library {
  constructor(elem){
    this.helper = {
      "elem" : elem ? elem : null,
      
    };
  }
  get now(){
    return new Date.now();
  }
}
window.$ = new Library();
