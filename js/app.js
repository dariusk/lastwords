Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
};

var el = $('#content');

function generate() {
  el.text(loves.pick());
  el.fadeIn(3000, function() {
    el.fadeOut(3000, function() {
      generate();
    });
  });
}

generate();
