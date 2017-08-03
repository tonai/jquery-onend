( function( factory ) {
  "use strict";
  if ( typeof define === "function" && define.amd ) {

    // AMD. Register as an anonymous module.
    define( [ "jquery" ], factory );
  } else if ( typeof exports === "object" ) {

    // Node/CommonJS.
    module.exports = factory( require( "jquery" ) );
  } else {

    // Browser globals.
    factory( jQuery );
  }
}( function( $ ) {
  "use strict";
  $.fn.onEnd = function() {
    var timeoutTimer;
    var onParams = Array.prototype.slice.call( arguments );
    var delay = onParams.pop();
    var origFn = onParams.pop();

    // Wrap user callback with a custom one.
    var fn = function() {
      var fnParams = Array.prototype.slice.call( arguments );
      clearTimeout( timeoutTimer );
      timeoutTimer = setTimeout( function() {
        origFn.apply( this, fnParams );
      }.bind( this ), delay );
    };

    // Use same guid so caller can remove using origFn.
    fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );

    // Add our custom callback to arguments and call jQuery "on".
    onParams.push( fn );
    this.on.apply( this, onParams );

    // Allow chaining.
    return this;
  };
} ) );
