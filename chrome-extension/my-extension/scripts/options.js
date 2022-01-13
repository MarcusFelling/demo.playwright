(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _ext = require("./utils/ext");

var _ext2 = _interopRequireDefault(_ext);

var _storage = require("./utils/storage");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colorSelectors = document.querySelectorAll(".js-radio");

_storage2.default.get('color', function (resp) {
  var color = resp.color;
  var option;
  if (color) {
    option = document.querySelector(".js-radio." + color);
  } else {
    option = colorSelectors[0];
  }

  option.setAttribute("checked", "checked");
});

colorSelectors.forEach(function (el) {
  el.addEventListener("click", function (e) {
    var value = this.value;
    _storage2.default.set({ color: value }, function () {
      document.body.style.backgroundColor = value;
    });
  });
});

},{"./utils/ext":2,"./utils/storage":3}],2:[function(require,module,exports){
'use strict';

var apis = ['alarms', 'bookmarks', 'browserAction', 'commands', 'contextMenus', 'cookies', 'downloads', 'events', 'extension', 'extensionTypes', 'history', 'i18n', 'idle', 'notifications', 'pageAction', 'runtime', 'storage', 'tabs', 'webNavigation', 'webRequest', 'windows'];

function Extension() {
  var _this = this;

  apis.forEach(function (api) {

    _this[api] = null;

    try {
      if (chrome[api]) {
        _this[api] = chrome[api];
      }
    } catch (e) {}

    try {
      if (window[api]) {
        _this[api] = window[api];
      }
    } catch (e) {}

    try {
      if (browser[api]) {
        _this[api] = browser[api];
      }
    } catch (e) {}
    try {
      _this.api = browser.extension[api];
    } catch (e) {}
  });

  try {
    if (browser && browser.runtime) {
      this.runtime = browser.runtime;
    }
  } catch (e) {}

  try {
    if (browser && browser.browserAction) {
      this.browserAction = browser.browserAction;
    }
  } catch (e) {}
}

module.exports = new Extension();

},{}],3:[function(require,module,exports){
"use strict";

var _ext = require("./ext");

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _ext2.default.storage.sync ? _ext2.default.storage.sync : _ext2.default.storage.local;

},{"./ext":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9vcHRpb25zLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvZXh0LmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvc3RvcmFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxpQkFBaUIsU0FBUyxnQkFBVCxDQUEwQixXQUExQixDQUFyQjs7QUFFQSxrQkFBUSxHQUFSLENBQVksT0FBWixFQUFxQixVQUFTLElBQVQsRUFBZTtBQUNsQyxNQUFJLFFBQVEsS0FBSyxLQUFqQjtBQUNBLE1BQUksTUFBSjtBQUNBLE1BQUcsS0FBSCxFQUFVO0FBQ1IsYUFBUyxTQUFTLGFBQVQsZ0JBQW9DLEtBQXBDLENBQVQ7QUFDRCxHQUZELE1BRU87QUFDTCxhQUFTLGVBQWUsQ0FBZixDQUFUO0FBQ0Q7O0FBRUQsU0FBTyxZQUFQLENBQW9CLFNBQXBCLEVBQStCLFNBQS9CO0FBQ0QsQ0FWRDs7QUFZQSxlQUFlLE9BQWYsQ0FBdUIsVUFBUyxFQUFULEVBQWE7QUFDbEMsS0FBRyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixVQUFTLENBQVQsRUFBWTtBQUN2QyxRQUFJLFFBQVEsS0FBSyxLQUFqQjtBQUNBLHNCQUFRLEdBQVIsQ0FBWSxFQUFFLE9BQU8sS0FBVCxFQUFaLEVBQThCLFlBQVc7QUFDdkMsZUFBUyxJQUFULENBQWMsS0FBZCxDQUFvQixlQUFwQixHQUFzQyxLQUF0QztBQUNELEtBRkQ7QUFHRCxHQUxEO0FBTUQsQ0FQRDs7Ozs7QUNqQkEsSUFBTSxPQUFPLENBQ1gsUUFEVyxFQUVYLFdBRlcsRUFHWCxlQUhXLEVBSVgsVUFKVyxFQUtYLGNBTFcsRUFNWCxTQU5XLEVBT1gsV0FQVyxFQVFYLFFBUlcsRUFTWCxXQVRXLEVBVVgsZ0JBVlcsRUFXWCxTQVhXLEVBWVgsTUFaVyxFQWFYLE1BYlcsRUFjWCxlQWRXLEVBZVgsWUFmVyxFQWdCWCxTQWhCVyxFQWlCWCxTQWpCVyxFQWtCWCxNQWxCVyxFQW1CWCxlQW5CVyxFQW9CWCxZQXBCVyxFQXFCWCxTQXJCVyxDQUFiOztBQXdCQSxTQUFTLFNBQVQsR0FBc0I7QUFDcEIsTUFBTSxRQUFRLElBQWQ7O0FBRUEsT0FBSyxPQUFMLENBQWEsVUFBVSxHQUFWLEVBQWU7O0FBRTFCLFVBQU0sR0FBTixJQUFhLElBQWI7O0FBRUEsUUFBSTtBQUNGLFVBQUksT0FBTyxHQUFQLENBQUosRUFBaUI7QUFDZixjQUFNLEdBQU4sSUFBYSxPQUFPLEdBQVAsQ0FBYjtBQUNEO0FBQ0YsS0FKRCxDQUlFLE9BQU8sQ0FBUCxFQUFVLENBQUU7O0FBRWQsUUFBSTtBQUNGLFVBQUksT0FBTyxHQUFQLENBQUosRUFBaUI7QUFDZixjQUFNLEdBQU4sSUFBYSxPQUFPLEdBQVAsQ0FBYjtBQUNEO0FBQ0YsS0FKRCxDQUlFLE9BQU8sQ0FBUCxFQUFVLENBQUU7O0FBRWQsUUFBSTtBQUNGLFVBQUksUUFBUSxHQUFSLENBQUosRUFBa0I7QUFDaEIsY0FBTSxHQUFOLElBQWEsUUFBUSxHQUFSLENBQWI7QUFDRDtBQUNGLEtBSkQsQ0FJRSxPQUFPLENBQVAsRUFBVSxDQUFFO0FBQ2QsUUFBSTtBQUNGLFlBQU0sR0FBTixHQUFZLFFBQVEsU0FBUixDQUFrQixHQUFsQixDQUFaO0FBQ0QsS0FGRCxDQUVFLE9BQU8sQ0FBUCxFQUFVLENBQUU7QUFDZixHQXhCRDs7QUEwQkEsTUFBSTtBQUNGLFFBQUksV0FBVyxRQUFRLE9BQXZCLEVBQWdDO0FBQzlCLFdBQUssT0FBTCxHQUFlLFFBQVEsT0FBdkI7QUFDRDtBQUNGLEdBSkQsQ0FJRSxPQUFPLENBQVAsRUFBVSxDQUFFOztBQUVkLE1BQUk7QUFDRixRQUFJLFdBQVcsUUFBUSxhQUF2QixFQUFzQztBQUNwQyxXQUFLLGFBQUwsR0FBcUIsUUFBUSxhQUE3QjtBQUNEO0FBQ0YsR0FKRCxDQUlFLE9BQU8sQ0FBUCxFQUFVLENBQUU7QUFFZjs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsSUFBSSxTQUFKLEVBQWpCOzs7OztBQ25FQTs7Ozs7O0FBRUEsT0FBTyxPQUFQLEdBQWtCLGNBQUksT0FBSixDQUFZLElBQVosR0FBbUIsY0FBSSxPQUFKLENBQVksSUFBL0IsR0FBc0MsY0FBSSxPQUFKLENBQVksS0FBcEUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGV4dCBmcm9tIFwiLi91dGlscy9leHRcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3V0aWxzL3N0b3JhZ2VcIjtcblxudmFyIGNvbG9yU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1yYWRpb1wiKTtcblxuc3RvcmFnZS5nZXQoJ2NvbG9yJywgZnVuY3Rpb24ocmVzcCkge1xuICB2YXIgY29sb3IgPSByZXNwLmNvbG9yO1xuICB2YXIgb3B0aW9uO1xuICBpZihjb2xvcikge1xuICAgIG9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5qcy1yYWRpby4ke2NvbG9yfWApXG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uID0gY29sb3JTZWxlY3RvcnNbMF1cbiAgfVxuXG4gIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKTtcbn0pO1xuXG5jb2xvclNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBzdG9yYWdlLnNldCh7IGNvbG9yOiB2YWx1ZSB9LCBmdW5jdGlvbigpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdmFsdWU7XG4gICAgfSk7XG4gIH0pXG59KSIsImNvbnN0IGFwaXMgPSBbXG4gICdhbGFybXMnLFxuICAnYm9va21hcmtzJyxcbiAgJ2Jyb3dzZXJBY3Rpb24nLFxuICAnY29tbWFuZHMnLFxuICAnY29udGV4dE1lbnVzJyxcbiAgJ2Nvb2tpZXMnLFxuICAnZG93bmxvYWRzJyxcbiAgJ2V2ZW50cycsXG4gICdleHRlbnNpb24nLFxuICAnZXh0ZW5zaW9uVHlwZXMnLFxuICAnaGlzdG9yeScsXG4gICdpMThuJyxcbiAgJ2lkbGUnLFxuICAnbm90aWZpY2F0aW9ucycsXG4gICdwYWdlQWN0aW9uJyxcbiAgJ3J1bnRpbWUnLFxuICAnc3RvcmFnZScsXG4gICd0YWJzJyxcbiAgJ3dlYk5hdmlnYXRpb24nLFxuICAnd2ViUmVxdWVzdCcsXG4gICd3aW5kb3dzJyxcbl1cblxuZnVuY3Rpb24gRXh0ZW5zaW9uICgpIHtcbiAgY29uc3QgX3RoaXMgPSB0aGlzXG5cbiAgYXBpcy5mb3JFYWNoKGZ1bmN0aW9uIChhcGkpIHtcblxuICAgIF90aGlzW2FwaV0gPSBudWxsXG5cbiAgICB0cnkge1xuICAgICAgaWYgKGNocm9tZVthcGldKSB7XG4gICAgICAgIF90aGlzW2FwaV0gPSBjaHJvbWVbYXBpXVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICB0cnkge1xuICAgICAgaWYgKHdpbmRvd1thcGldKSB7XG4gICAgICAgIF90aGlzW2FwaV0gPSB3aW5kb3dbYXBpXVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGJyb3dzZXJbYXBpXSkge1xuICAgICAgICBfdGhpc1thcGldID0gYnJvd3NlclthcGldXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgX3RoaXMuYXBpID0gYnJvd3Nlci5leHRlbnNpb25bYXBpXVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH0pXG5cbiAgdHJ5IHtcbiAgICBpZiAoYnJvd3NlciAmJiBicm93c2VyLnJ1bnRpbWUpIHtcbiAgICAgIHRoaXMucnVudGltZSA9IGJyb3dzZXIucnVudGltZVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cblxuICB0cnkge1xuICAgIGlmIChicm93c2VyICYmIGJyb3dzZXIuYnJvd3NlckFjdGlvbikge1xuICAgICAgdGhpcy5icm93c2VyQWN0aW9uID0gYnJvd3Nlci5icm93c2VyQWN0aW9uXG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IEV4dGVuc2lvbigpOyIsImltcG9ydCBleHQgZnJvbSBcIi4vZXh0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gKGV4dC5zdG9yYWdlLnN5bmMgPyBleHQuc3RvcmFnZS5zeW5jIDogZXh0LnN0b3JhZ2UubG9jYWwpOyJdfQ==
