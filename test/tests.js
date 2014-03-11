var assert = require('assert');
var ripple = require('ripple');
var bind = require('bind-methods');

describe('view-bind', function(){
  var View;

  it('should bind functions to the view', function (done) {
    View = ripple('<div></div>').use(bind);
    View.prototype.tick = function(){
      assert(this instanceof View);
      done();
    };
    var view = new View();
    setTimeout(view.tick, 0);
  });

});