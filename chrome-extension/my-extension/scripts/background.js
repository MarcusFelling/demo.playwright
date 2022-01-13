(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _ext = require("./utils/ext");

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ext2.default.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "perform-save") {
    console.log("Extension Type: ", "chrome");
    console.log("PERFORM AJAX", request.data);

    sendResponse({ action: "saved" });
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsY0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixXQUF0QixDQUNFLFVBQVMsT0FBVCxFQUFrQixNQUFsQixFQUEwQixZQUExQixFQUF3QztBQUN0QyxNQUFHLFFBQVEsTUFBUixLQUFtQixjQUF0QixFQUFzQztBQUNwQyxZQUFRLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyx1QkFBaEM7QUFDQSxZQUFRLEdBQVIsQ0FBWSxjQUFaLEVBQTRCLFFBQVEsSUFBcEM7O0FBRUEsaUJBQWEsRUFBRSxRQUFRLE9BQVYsRUFBYjtBQUNEO0FBQ0YsQ0FSSDs7Ozs7QUNGQSxJQUFNLE9BQU8sQ0FDWCxRQURXLEVBRVgsV0FGVyxFQUdYLGVBSFcsRUFJWCxVQUpXLEVBS1gsY0FMVyxFQU1YLFNBTlcsRUFPWCxXQVBXLEVBUVgsUUFSVyxFQVNYLFdBVFcsRUFVWCxnQkFWVyxFQVdYLFNBWFcsRUFZWCxNQVpXLEVBYVgsTUFiVyxFQWNYLGVBZFcsRUFlWCxZQWZXLEVBZ0JYLFNBaEJXLEVBaUJYLFNBakJXLEVBa0JYLE1BbEJXLEVBbUJYLGVBbkJXLEVBb0JYLFlBcEJXLEVBcUJYLFNBckJXLENBQWI7O0FBd0JBLFNBQVMsU0FBVCxHQUFzQjtBQUNwQixNQUFNLFFBQVEsSUFBZDs7QUFFQSxPQUFLLE9BQUwsQ0FBYSxVQUFVLEdBQVYsRUFBZTs7QUFFMUIsVUFBTSxHQUFOLElBQWEsSUFBYjs7QUFFQSxRQUFJO0FBQ0YsVUFBSSxPQUFPLEdBQVAsQ0FBSixFQUFpQjtBQUNmLGNBQU0sR0FBTixJQUFhLE9BQU8sR0FBUCxDQUFiO0FBQ0Q7QUFDRixLQUpELENBSUUsT0FBTyxDQUFQLEVBQVUsQ0FBRTs7QUFFZCxRQUFJO0FBQ0YsVUFBSSxPQUFPLEdBQVAsQ0FBSixFQUFpQjtBQUNmLGNBQU0sR0FBTixJQUFhLE9BQU8sR0FBUCxDQUFiO0FBQ0Q7QUFDRixLQUpELENBSUUsT0FBTyxDQUFQLEVBQVUsQ0FBRTs7QUFFZCxRQUFJO0FBQ0YsVUFBSSxRQUFRLEdBQVIsQ0FBSixFQUFrQjtBQUNoQixjQUFNLEdBQU4sSUFBYSxRQUFRLEdBQVIsQ0FBYjtBQUNEO0FBQ0YsS0FKRCxDQUlFLE9BQU8sQ0FBUCxFQUFVLENBQUU7QUFDZCxRQUFJO0FBQ0YsWUFBTSxHQUFOLEdBQVksUUFBUSxTQUFSLENBQWtCLEdBQWxCLENBQVo7QUFDRCxLQUZELENBRUUsT0FBTyxDQUFQLEVBQVUsQ0FBRTtBQUNmLEdBeEJEOztBQTBCQSxNQUFJO0FBQ0YsUUFBSSxXQUFXLFFBQVEsT0FBdkIsRUFBZ0M7QUFDOUIsV0FBSyxPQUFMLEdBQWUsUUFBUSxPQUF2QjtBQUNEO0FBQ0YsR0FKRCxDQUlFLE9BQU8sQ0FBUCxFQUFVLENBQUU7O0FBRWQsTUFBSTtBQUNGLFFBQUksV0FBVyxRQUFRLGFBQXZCLEVBQXNDO0FBQ3BDLFdBQUssYUFBTCxHQUFxQixRQUFRLGFBQTdCO0FBQ0Q7QUFDRixHQUpELENBSUUsT0FBTyxDQUFQLEVBQVUsQ0FBRTtBQUVmOztBQUVELE9BQU8sT0FBUCxHQUFpQixJQUFJLFNBQUosRUFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGV4dCBmcm9tIFwiLi91dGlscy9leHRcIjtcblxuZXh0LnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKFxuICBmdW5jdGlvbihyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIGlmKHJlcXVlc3QuYWN0aW9uID09PSBcInBlcmZvcm0tc2F2ZVwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkV4dGVuc2lvbiBUeXBlOiBcIiwgXCIvKiBAZWNobyBleHRlbnNpb24gKi9cIik7XG4gICAgICBjb25zb2xlLmxvZyhcIlBFUkZPUk0gQUpBWFwiLCByZXF1ZXN0LmRhdGEpO1xuXG4gICAgICBzZW5kUmVzcG9uc2UoeyBhY3Rpb246IFwic2F2ZWRcIiB9KTtcbiAgICB9XG4gIH1cbik7IiwiY29uc3QgYXBpcyA9IFtcbiAgJ2FsYXJtcycsXG4gICdib29rbWFya3MnLFxuICAnYnJvd3NlckFjdGlvbicsXG4gICdjb21tYW5kcycsXG4gICdjb250ZXh0TWVudXMnLFxuICAnY29va2llcycsXG4gICdkb3dubG9hZHMnLFxuICAnZXZlbnRzJyxcbiAgJ2V4dGVuc2lvbicsXG4gICdleHRlbnNpb25UeXBlcycsXG4gICdoaXN0b3J5JyxcbiAgJ2kxOG4nLFxuICAnaWRsZScsXG4gICdub3RpZmljYXRpb25zJyxcbiAgJ3BhZ2VBY3Rpb24nLFxuICAncnVudGltZScsXG4gICdzdG9yYWdlJyxcbiAgJ3RhYnMnLFxuICAnd2ViTmF2aWdhdGlvbicsXG4gICd3ZWJSZXF1ZXN0JyxcbiAgJ3dpbmRvd3MnLFxuXVxuXG5mdW5jdGlvbiBFeHRlbnNpb24gKCkge1xuICBjb25zdCBfdGhpcyA9IHRoaXNcblxuICBhcGlzLmZvckVhY2goZnVuY3Rpb24gKGFwaSkge1xuXG4gICAgX3RoaXNbYXBpXSA9IG51bGxcblxuICAgIHRyeSB7XG4gICAgICBpZiAoY2hyb21lW2FwaV0pIHtcbiAgICAgICAgX3RoaXNbYXBpXSA9IGNocm9tZVthcGldXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIHRyeSB7XG4gICAgICBpZiAod2luZG93W2FwaV0pIHtcbiAgICAgICAgX3RoaXNbYXBpXSA9IHdpbmRvd1thcGldXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIHRyeSB7XG4gICAgICBpZiAoYnJvd3NlclthcGldKSB7XG4gICAgICAgIF90aGlzW2FwaV0gPSBicm93c2VyW2FwaV1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICBfdGhpcy5hcGkgPSBicm93c2VyLmV4dGVuc2lvblthcGldXG4gICAgfSBjYXRjaCAoZSkge31cbiAgfSlcblxuICB0cnkge1xuICAgIGlmIChicm93c2VyICYmIGJyb3dzZXIucnVudGltZSkge1xuICAgICAgdGhpcy5ydW50aW1lID0gYnJvd3Nlci5ydW50aW1lXG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIHRyeSB7XG4gICAgaWYgKGJyb3dzZXIgJiYgYnJvd3Nlci5icm93c2VyQWN0aW9uKSB7XG4gICAgICB0aGlzLmJyb3dzZXJBY3Rpb24gPSBicm93c2VyLmJyb3dzZXJBY3Rpb25cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRXh0ZW5zaW9uKCk7Il19
