export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing


    // Shorthand cheatsheet:

    this.get('/users');
    this.post('/users');
    this.get('/users/:id');
    this.patch('/users/:id'); // or this.patch
    this.del('/users/:id');
    this.get('/bookmarks');
    this.post('/bookmarks');
    this.get('/bookmarks/:id');
    this.patch('/bookmarks/:id'); // or this.patch
    this.del('/bookmarks/:id');

    // http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
}
