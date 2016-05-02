// Shims
require('native-promise-only');

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(suffix) { /* For IE11 */
    return this.substr(-suffix.length) === suffix;
  };
}

var vjs = window.videojs || {};
global.THREE = require('three');
global.WebVRConfig = require('./webvr.config.js');
var WebVrPolyfill = require('webvr-polyfill/src/webvr-polyfill');
new WebVrPolyfill();
require('three/examples/js/controls/VRControls.js');
require('three/examples/js/effects/VREffect.js');
require('webvr-boilerplate');
require('./videojs.vr.js')(vjs);