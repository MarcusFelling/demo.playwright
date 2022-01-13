(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ext = require('./utils/ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LIVERELOAD_HOST = 'localhost:';
var LIVERELOAD_PORT = 35729;
var connection = new WebSocket('ws://' + LIVERELOAD_HOST + LIVERELOAD_PORT + '/livereload');

connection.onerror = function (error) {
  console.log('reload connection got error:', error);
};

connection.onmessage = function (e) {
  if (e.data) {
    var data = JSON.parse(e.data);
    if (data && data.command === 'reload') {
      _ext2.default.runtime.reload();
    }
  }
};

},{"./utils/ext":2}],2:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9saXZlcmVsb2FkLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUE7Ozs7OztBQUVBLElBQUksa0JBQWtCLFlBQXRCO0FBQ0EsSUFBSSxrQkFBa0IsS0FBdEI7QUFDQSxJQUFJLGFBQWEsSUFBSSxTQUFKLENBQWMsVUFBVSxlQUFWLEdBQTRCLGVBQTVCLEdBQThDLGFBQTVELENBQWpCOztBQUVBLFdBQVcsT0FBWCxHQUFxQixVQUFVLEtBQVYsRUFBaUI7QUFDcEMsVUFBUSxHQUFSLENBQVksOEJBQVosRUFBNEMsS0FBNUM7QUFDRCxDQUZEOztBQUlBLFdBQVcsU0FBWCxHQUF1QixVQUFVLENBQVYsRUFBYTtBQUNsQyxNQUFJLEVBQUUsSUFBTixFQUFZO0FBQ1YsUUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLEVBQUUsSUFBYixDQUFYO0FBQ0EsUUFBSSxRQUFRLEtBQUssT0FBTCxLQUFpQixRQUE3QixFQUF1QztBQUNyQyxvQkFBSSxPQUFKLENBQVksTUFBWjtBQUNEO0FBQ0Y7QUFDRixDQVBEOzs7OztBQ1pBLElBQU0sT0FBTyxDQUNYLFFBRFcsRUFFWCxXQUZXLEVBR1gsZUFIVyxFQUlYLFVBSlcsRUFLWCxjQUxXLEVBTVgsU0FOVyxFQU9YLFdBUFcsRUFRWCxRQVJXLEVBU1gsV0FUVyxFQVVYLGdCQVZXLEVBV1gsU0FYVyxFQVlYLE1BWlcsRUFhWCxNQWJXLEVBY1gsZUFkVyxFQWVYLFlBZlcsRUFnQlgsU0FoQlcsRUFpQlgsU0FqQlcsRUFrQlgsTUFsQlcsRUFtQlgsZUFuQlcsRUFvQlgsWUFwQlcsRUFxQlgsU0FyQlcsQ0FBYjs7QUF3QkEsU0FBUyxTQUFULEdBQXNCO0FBQ3BCLE1BQU0sUUFBUSxJQUFkOztBQUVBLE9BQUssT0FBTCxDQUFhLFVBQVUsR0FBVixFQUFlOztBQUUxQixVQUFNLEdBQU4sSUFBYSxJQUFiOztBQUVBLFFBQUk7QUFDRixVQUFJLE9BQU8sR0FBUCxDQUFKLEVBQWlCO0FBQ2YsY0FBTSxHQUFOLElBQWEsT0FBTyxHQUFQLENBQWI7QUFDRDtBQUNGLEtBSkQsQ0FJRSxPQUFPLENBQVAsRUFBVSxDQUFFOztBQUVkLFFBQUk7QUFDRixVQUFJLE9BQU8sR0FBUCxDQUFKLEVBQWlCO0FBQ2YsY0FBTSxHQUFOLElBQWEsT0FBTyxHQUFQLENBQWI7QUFDRDtBQUNGLEtBSkQsQ0FJRSxPQUFPLENBQVAsRUFBVSxDQUFFOztBQUVkLFFBQUk7QUFDRixVQUFJLFFBQVEsR0FBUixDQUFKLEVBQWtCO0FBQ2hCLGNBQU0sR0FBTixJQUFhLFFBQVEsR0FBUixDQUFiO0FBQ0Q7QUFDRixLQUpELENBSUUsT0FBTyxDQUFQLEVBQVUsQ0FBRTtBQUNkLFFBQUk7QUFDRixZQUFNLEdBQU4sR0FBWSxRQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBWjtBQUNELEtBRkQsQ0FFRSxPQUFPLENBQVAsRUFBVSxDQUFFO0FBQ2YsR0F4QkQ7O0FBMEJBLE1BQUk7QUFDRixRQUFJLFdBQVcsUUFBUSxPQUF2QixFQUFnQztBQUM5QixXQUFLLE9BQUwsR0FBZSxRQUFRLE9BQXZCO0FBQ0Q7QUFDRixHQUpELENBSUUsT0FBTyxDQUFQLEVBQVUsQ0FBRTs7QUFFZCxNQUFJO0FBQ0YsUUFBSSxXQUFXLFFBQVEsYUFBdkIsRUFBc0M7QUFDcEMsV0FBSyxhQUFMLEdBQXFCLFFBQVEsYUFBN0I7QUFDRDtBQUNGLEdBSkQsQ0FJRSxPQUFPLENBQVAsRUFBVSxDQUFFO0FBRWY7O0FBRUQsT0FBTyxPQUFQLEdBQWlCLElBQUksU0FBSixFQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBleHQgZnJvbSBcIi4vdXRpbHMvZXh0XCI7XG5cbnZhciBMSVZFUkVMT0FEX0hPU1QgPSAnbG9jYWxob3N0Oic7XG52YXIgTElWRVJFTE9BRF9QT1JUID0gMzU3Mjk7XG52YXIgY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vJyArIExJVkVSRUxPQURfSE9TVCArIExJVkVSRUxPQURfUE9SVCArICcvbGl2ZXJlbG9hZCcpO1xuXG5jb25uZWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgY29uc29sZS5sb2coJ3JlbG9hZCBjb25uZWN0aW9uIGdvdCBlcnJvcjonLCBlcnJvcik7XG59O1xuXG5jb25uZWN0aW9uLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmRhdGEpIHtcbiAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmNvbW1hbmQgPT09ICdyZWxvYWQnKSB7XG4gICAgICBleHQucnVudGltZS5yZWxvYWQoKTtcbiAgICB9XG4gIH1cbn07IiwiY29uc3QgYXBpcyA9IFtcbiAgJ2FsYXJtcycsXG4gICdib29rbWFya3MnLFxuICAnYnJvd3NlckFjdGlvbicsXG4gICdjb21tYW5kcycsXG4gICdjb250ZXh0TWVudXMnLFxuICAnY29va2llcycsXG4gICdkb3dubG9hZHMnLFxuICAnZXZlbnRzJyxcbiAgJ2V4dGVuc2lvbicsXG4gICdleHRlbnNpb25UeXBlcycsXG4gICdoaXN0b3J5JyxcbiAgJ2kxOG4nLFxuICAnaWRsZScsXG4gICdub3RpZmljYXRpb25zJyxcbiAgJ3BhZ2VBY3Rpb24nLFxuICAncnVudGltZScsXG4gICdzdG9yYWdlJyxcbiAgJ3RhYnMnLFxuICAnd2ViTmF2aWdhdGlvbicsXG4gICd3ZWJSZXF1ZXN0JyxcbiAgJ3dpbmRvd3MnLFxuXVxuXG5mdW5jdGlvbiBFeHRlbnNpb24gKCkge1xuICBjb25zdCBfdGhpcyA9IHRoaXNcblxuICBhcGlzLmZvckVhY2goZnVuY3Rpb24gKGFwaSkge1xuXG4gICAgX3RoaXNbYXBpXSA9IG51bGxcblxuICAgIHRyeSB7XG4gICAgICBpZiAoY2hyb21lW2FwaV0pIHtcbiAgICAgICAgX3RoaXNbYXBpXSA9IGNocm9tZVthcGldXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIHRyeSB7XG4gICAgICBpZiAod2luZG93W2FwaV0pIHtcbiAgICAgICAgX3RoaXNbYXBpXSA9IHdpbmRvd1thcGldXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIHRyeSB7XG4gICAgICBpZiAoYnJvd3NlclthcGldKSB7XG4gICAgICAgIF90aGlzW2FwaV0gPSBicm93c2VyW2FwaV1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICBfdGhpcy5hcGkgPSBicm93c2VyLmV4dGVuc2lvblthcGldXG4gICAgfSBjYXRjaCAoZSkge31cbiAgfSlcblxuICB0cnkge1xuICAgIGlmIChicm93c2VyICYmIGJyb3dzZXIucnVudGltZSkge1xuICAgICAgdGhpcy5ydW50aW1lID0gYnJvd3Nlci5ydW50aW1lXG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIHRyeSB7XG4gICAgaWYgKGJyb3dzZXIgJiYgYnJvd3Nlci5icm93c2VyQWN0aW9uKSB7XG4gICAgICB0aGlzLmJyb3dzZXJBY3Rpb24gPSBicm93c2VyLmJyb3dzZXJBY3Rpb25cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRXh0ZW5zaW9uKCk7Il19
