(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _ext = require("./utils/ext");

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extractTags = function extractTags() {
  var url = document.location.href;
  if (!url || !url.match(/^http/)) return;

  var data = {
    title: "",
    description: "",
    url: document.location.href
  };

  var ogTitle = document.querySelector("meta[property='og:title']");
  if (ogTitle) {
    data.title = ogTitle.getAttribute("content");
  } else {
    data.title = document.title;
  }

  var descriptionTag = document.querySelector("meta[property='og:description']") || document.querySelector("meta[name='description']");
  if (descriptionTag) {
    data.description = descriptionTag.getAttribute("content");
  }

  return data;
};

function onRequest(request, sender, sendResponse) {
  if (request.action === 'process-page') {
    sendResponse(extractTags());
  }
}

_ext2.default.runtime.onMessage.addListener(onRequest);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jb250ZW50c2NyaXB0LmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsSUFBSSxjQUFjLFNBQWQsV0FBYyxHQUFNO0FBQ3RCLE1BQUksTUFBTSxTQUFTLFFBQVQsQ0FBa0IsSUFBNUI7QUFDQSxNQUFHLENBQUMsR0FBRCxJQUFRLENBQUMsSUFBSSxLQUFKLENBQVUsT0FBVixDQUFaLEVBQWdDOztBQUVoQyxNQUFJLE9BQU87QUFDVCxXQUFPLEVBREU7QUFFVCxpQkFBYSxFQUZKO0FBR1QsU0FBSyxTQUFTLFFBQVQsQ0FBa0I7QUFIZCxHQUFYOztBQU1BLE1BQUksVUFBVSxTQUFTLGFBQVQsQ0FBdUIsMkJBQXZCLENBQWQ7QUFDQSxNQUFHLE9BQUgsRUFBWTtBQUNWLFNBQUssS0FBTCxHQUFhLFFBQVEsWUFBUixDQUFxQixTQUFyQixDQUFiO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsU0FBSyxLQUFMLEdBQWEsU0FBUyxLQUF0QjtBQUNEOztBQUVELE1BQUksaUJBQWlCLFNBQVMsYUFBVCxDQUF1QixpQ0FBdkIsS0FBNkQsU0FBUyxhQUFULENBQXVCLDBCQUF2QixDQUFsRjtBQUNBLE1BQUcsY0FBSCxFQUFtQjtBQUNqQixTQUFLLFdBQUwsR0FBbUIsZUFBZSxZQUFmLENBQTRCLFNBQTVCLENBQW5CO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0F2QkQ7O0FBeUJBLFNBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QixNQUE1QixFQUFvQyxZQUFwQyxFQUFrRDtBQUNoRCxNQUFJLFFBQVEsTUFBUixLQUFtQixjQUF2QixFQUF1QztBQUNyQyxpQkFBYSxhQUFiO0FBQ0Q7QUFDRjs7QUFFRCxjQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFdBQXRCLENBQWtDLFNBQWxDOzs7OztBQ2pDQSxJQUFNLE9BQU8sQ0FDWCxRQURXLEVBRVgsV0FGVyxFQUdYLGVBSFcsRUFJWCxVQUpXLEVBS1gsY0FMVyxFQU1YLFNBTlcsRUFPWCxXQVBXLEVBUVgsUUFSVyxFQVNYLFdBVFcsRUFVWCxnQkFWVyxFQVdYLFNBWFcsRUFZWCxNQVpXLEVBYVgsTUFiVyxFQWNYLGVBZFcsRUFlWCxZQWZXLEVBZ0JYLFNBaEJXLEVBaUJYLFNBakJXLEVBa0JYLE1BbEJXLEVBbUJYLGVBbkJXLEVBb0JYLFlBcEJXLEVBcUJYLFNBckJXLENBQWI7O0FBd0JBLFNBQVMsU0FBVCxHQUFzQjtBQUNwQixNQUFNLFFBQVEsSUFBZDs7QUFFQSxPQUFLLE9BQUwsQ0FBYSxVQUFVLEdBQVYsRUFBZTs7QUFFMUIsVUFBTSxHQUFOLElBQWEsSUFBYjs7QUFFQSxRQUFJO0FBQ0YsVUFBSSxPQUFPLEdBQVAsQ0FBSixFQUFpQjtBQUNmLGNBQU0sR0FBTixJQUFhLE9BQU8sR0FBUCxDQUFiO0FBQ0Q7QUFDRixLQUpELENBSUUsT0FBTyxDQUFQLEVBQVUsQ0FBRTs7QUFFZCxRQUFJO0FBQ0YsVUFBSSxPQUFPLEdBQVAsQ0FBSixFQUFpQjtBQUNmLGNBQU0sR0FBTixJQUFhLE9BQU8sR0FBUCxDQUFiO0FBQ0Q7QUFDRixLQUpELENBSUUsT0FBTyxDQUFQLEVBQVUsQ0FBRTs7QUFFZCxRQUFJO0FBQ0YsVUFBSSxRQUFRLEdBQVIsQ0FBSixFQUFrQjtBQUNoQixjQUFNLEdBQU4sSUFBYSxRQUFRLEdBQVIsQ0FBYjtBQUNEO0FBQ0YsS0FKRCxDQUlFLE9BQU8sQ0FBUCxFQUFVLENBQUU7QUFDZCxRQUFJO0FBQ0YsWUFBTSxHQUFOLEdBQVksUUFBUSxTQUFSLENBQWtCLEdBQWxCLENBQVo7QUFDRCxLQUZELENBRUUsT0FBTyxDQUFQLEVBQVUsQ0FBRTtBQUNmLEdBeEJEOztBQTBCQSxNQUFJO0FBQ0YsUUFBSSxXQUFXLFFBQVEsT0FBdkIsRUFBZ0M7QUFDOUIsV0FBSyxPQUFMLEdBQWUsUUFBUSxPQUF2QjtBQUNEO0FBQ0YsR0FKRCxDQUlFLE9BQU8sQ0FBUCxFQUFVLENBQUU7O0FBRWQsTUFBSTtBQUNGLFFBQUksV0FBVyxRQUFRLGFBQXZCLEVBQXNDO0FBQ3BDLFdBQUssYUFBTCxHQUFxQixRQUFRLGFBQTdCO0FBQ0Q7QUFDRixHQUpELENBSUUsT0FBTyxDQUFQLEVBQVUsQ0FBRTtBQUVmOztBQUVELE9BQU8sT0FBUCxHQUFpQixJQUFJLFNBQUosRUFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGV4dCBmcm9tIFwiLi91dGlscy9leHRcIjtcblxudmFyIGV4dHJhY3RUYWdzID0gKCkgPT4ge1xuICB2YXIgdXJsID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbiAgaWYoIXVybCB8fCAhdXJsLm1hdGNoKC9eaHR0cC8pKSByZXR1cm47XG5cbiAgdmFyIGRhdGEgPSB7XG4gICAgdGl0bGU6IFwiXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmXG4gIH1cblxuICB2YXIgb2dUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW3Byb3BlcnR5PSdvZzp0aXRsZSddXCIpO1xuICBpZihvZ1RpdGxlKSB7XG4gICAgZGF0YS50aXRsZSA9IG9nVGl0bGUuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKVxuICB9IGVsc2Uge1xuICAgIGRhdGEudGl0bGUgPSBkb2N1bWVudC50aXRsZVxuICB9XG5cbiAgdmFyIGRlc2NyaXB0aW9uVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1ldGFbcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJ11cIikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1ldGFbbmFtZT0nZGVzY3JpcHRpb24nXVwiKVxuICBpZihkZXNjcmlwdGlvblRhZykge1xuICAgIGRhdGEuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblRhZy5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpXG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gb25SZXF1ZXN0KHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gJ3Byb2Nlc3MtcGFnZScpIHtcbiAgICBzZW5kUmVzcG9uc2UoZXh0cmFjdFRhZ3MoKSlcbiAgfVxufVxuXG5leHQucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIob25SZXF1ZXN0KTsiLCJjb25zdCBhcGlzID0gW1xuICAnYWxhcm1zJyxcbiAgJ2Jvb2ttYXJrcycsXG4gICdicm93c2VyQWN0aW9uJyxcbiAgJ2NvbW1hbmRzJyxcbiAgJ2NvbnRleHRNZW51cycsXG4gICdjb29raWVzJyxcbiAgJ2Rvd25sb2FkcycsXG4gICdldmVudHMnLFxuICAnZXh0ZW5zaW9uJyxcbiAgJ2V4dGVuc2lvblR5cGVzJyxcbiAgJ2hpc3RvcnknLFxuICAnaTE4bicsXG4gICdpZGxlJyxcbiAgJ25vdGlmaWNhdGlvbnMnLFxuICAncGFnZUFjdGlvbicsXG4gICdydW50aW1lJyxcbiAgJ3N0b3JhZ2UnLFxuICAndGFicycsXG4gICd3ZWJOYXZpZ2F0aW9uJyxcbiAgJ3dlYlJlcXVlc3QnLFxuICAnd2luZG93cycsXG5dXG5cbmZ1bmN0aW9uIEV4dGVuc2lvbiAoKSB7XG4gIGNvbnN0IF90aGlzID0gdGhpc1xuXG4gIGFwaXMuZm9yRWFjaChmdW5jdGlvbiAoYXBpKSB7XG5cbiAgICBfdGhpc1thcGldID0gbnVsbFxuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChjaHJvbWVbYXBpXSkge1xuICAgICAgICBfdGhpc1thcGldID0gY2hyb21lW2FwaV1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh3aW5kb3dbYXBpXSkge1xuICAgICAgICBfdGhpc1thcGldID0gd2luZG93W2FwaV1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChicm93c2VyW2FwaV0pIHtcbiAgICAgICAgX3RoaXNbYXBpXSA9IGJyb3dzZXJbYXBpXVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIF90aGlzLmFwaSA9IGJyb3dzZXIuZXh0ZW5zaW9uW2FwaV1cbiAgICB9IGNhdGNoIChlKSB7fVxuICB9KVxuXG4gIHRyeSB7XG4gICAgaWYgKGJyb3dzZXIgJiYgYnJvd3Nlci5ydW50aW1lKSB7XG4gICAgICB0aGlzLnJ1bnRpbWUgPSBicm93c2VyLnJ1bnRpbWVcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdHJ5IHtcbiAgICBpZiAoYnJvd3NlciAmJiBicm93c2VyLmJyb3dzZXJBY3Rpb24pIHtcbiAgICAgIHRoaXMuYnJvd3NlckFjdGlvbiA9IGJyb3dzZXIuYnJvd3NlckFjdGlvblxuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBFeHRlbnNpb24oKTsiXX0=
