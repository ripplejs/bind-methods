module.exports = function(methods) {
  return function(View) {
    View.on('construct', function(view){
      methods.forEach(function(name){
        view[name] = view[name].bind(view);
      });
    });
  };
};