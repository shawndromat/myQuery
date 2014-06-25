(function (){
  var myQuery = function (selector) {
    return _myQuery.init(selector);
  }

  _myQuery = {
    classes: [],
    init: function (selector) {
      this.selector = selector;
      this.els = document.querySelectorAll(selector);
      return this;
    },
		isArray: function () {
			return this.els.length > 1 ? true : false
		},
    // getEls: function (selector) {
    //   return document.querySelectorAll(selector)
    // },
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
    }
  }

  window.myQuery = window.$ = myQuery;
})();
