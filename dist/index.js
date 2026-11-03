"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var c=i(function(G,l){
function m(r){return r===0?-.16666666641626524:-.16666666641626524+r*.008333329385889463}l.exports=m
});var f=i(function(H,p){
function w(r){return r===0?-.00019839334836096632:-.00019839334836096632+r*2718311493989822e-21}p.exports=w
});var y=i(function(I,q){
function z(r){return r===0?-.001388676377460993:-.001388676377460993+r*2439044879627741e-20}q.exports=z
});var v=i(function(J,g){
var S=require('@stdlib/number-float64-base-to-float32/dist'),O=c(),R=f(),b=y(),h=-.499999997251031,j=.04166662332373906;function x(r,e,a,o){var n,u,s,t;return t=r*r,s=t*t,n=R(t),u=t*r,e[o]=S(r+u*O(t)+u*s*n),n=b(t),e[o+a]=S(1+t*h+s*j+s*t*n),e}g.exports=x
});var k=i(function(K,C){
var A=v();function B(r){return A(r,[0,0],1,0)}C.exports=B
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=k(),E=v();D(d,"assign",E);module.exports=d;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
