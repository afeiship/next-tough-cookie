(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var toughCookie = require('tough-cookie');

  var NxToughCookie = nx.declare('nx.ToughCookie', {
    methods: {
      init: function() {}
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxToughCookie;
  }
})();
