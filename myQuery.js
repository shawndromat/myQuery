(function (){
  var myQuery = function (selector) {
    return new _myQuery(selector);
  }

  _myQuery = function(selector) {
    this.selector = selector;
    this.els = document.querySelectorAll(selector);
    return this;
  }
  
  _myQuery.prototype = {
    classes: [],
		isArray: function () {
			return this.els.length > 1 ? true : false;
		},
		append: function (content) {
			this.els.push(content);
      return this;
		},
    html: function (content) {
      if (content) {
				for (var i = 0; i < this.els.length; i++) {
					this.els[i].innerHTML = content;
				}
      } else {
        return this.els[0].innerHTML;
      }
      return this;
    },
    valueOf: function() {
      return this.els;
    }
  }

  window.myQuery = window.$ = myQuery;
})();
