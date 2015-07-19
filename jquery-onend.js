(function( factory ) {
  if ( typeof define === 'function' && define.amd ) {
    // AMD. Register as an anonymous module.
    define( ['jquery'], factory );
  } else if ( typeof exports === 'object' ) {
    // Node/CommonJS
    module.exports = factory( require('jquery') );
  } else {
    // Browser globals
    factory( jQuery );
  }
}(function( $ ) {
  $.fn.onEnd = function() {
    var timeoutTimer;
    var onParams = Array.prototype.slice.call( arguments );
    var delay = onParams.pop();
    var origFn = onParams.pop();
    var fn = function() {
      var fnParams = Array.prototype.slice.call( arguments );
      clearTimeout( timeoutTimer );
      timeoutTimer = setTimeout( function() {
        origFn.apply( this, fnParams );
      }.bind(this), delay );
    };
    fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
    onParams.push( fn );
    this.on.apply( this, onParams );
  };
}));
