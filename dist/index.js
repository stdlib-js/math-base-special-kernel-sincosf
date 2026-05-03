"use strict";var i=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var l=i(function(G,o){
function m(r){return r===0?-.16666666641626524:-.16666666641626524+r*.008333329385889463}o.exports=m
});var p=i(function(H,c){
function w(r){return r===0?-.00019839334836096632:-.00019839334836096632+r*2718311493989822e-21}c.exports=w
});var q=i(function(I,f){
function z(r){return r===0?-.001388676377460993:-.001388676377460993+r*2439044879627741e-20}f.exports=z
});var u=i(function(J,S){
var y=require('@stdlib/number-float64-base-to-float32/dist'),O=l(),R=p(),b=q(),h=-.499999997251031,j=.04166662332373906;function x(r,t,d,v){var n,a,s,e;return e=r*r,s=e*e,n=R(e),a=e*r,t[v]=y(r+a*O(e)+a*s*n),n=b(e),t[v+d]=y(1+e*h+s*j+s*e*n),t}S.exports=x
});var C=i(function(K,g){
var A=u();function B(r){return A(r,[0,0],1,0)}g.exports=B
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=C(),E=u();D(k,"assign",E);module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
