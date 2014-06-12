(function (){
  var myQuery = function (selector) {
    return _myQuery.init(selector);
  }

  _myQuery = {
    classes: [],
    init: function (selector) {
      this.selector = selector;
      this.el = this.getEl(this.selector);
      return this;
    },
    getEl: function (selector) {
      if (selector[0] === "#") {
        return document.getElementById(selector.slice(1))
      } else if (selector[0] === ".") {
        return document.getElementsByClassName(selector.slice(1))
      } else {
        return document.getElementsByTagName(selector);
      }
    },
    html: function (content) {
      if (content) {
        this.el.innerHTML = content;
      } else {
        return this.el.innerHTML;
      }
      return this;
    }
  }

  window.myQuery = window.$ = myQuery;
})();
