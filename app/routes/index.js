import Route from '@ember/routing/route';


export default Route.extend({
  beforeModel() {  // Before model load we replace router with rentals
    this.replaceWith('rentals');
  }
 
});