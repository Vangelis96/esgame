"use strict";(self.webpackChunkTradeoff_V2=self.webpackChunkTradeoff_V2||[]).push([[503],{490:(U,u,l)=>{l.d(u,{Z:()=>i});var g=l(861);function w(t,e){let n=t.length-e,c=0;do{for(let o=e;o>0;o--)t[c+e]+=t[c],c++;n-=e}while(n>0)}function _(t,e,n){let c=0,o=t.length;const r=o/n;for(;o>e;){for(let s=e;s>0;--s)t[c+e]+=t[c],++c;o-=e}const d=t.slice();for(let s=0;s<r;++s)for(let a=0;a<n;++a)t[n*s+a]=d[(n-a-1)*r+s]}class i{decode(e,n){var c=this;return(0,g.Z)(function*(){const o=yield c.decodeBlock(n),r=e.Predictor||1;if(1!==r){const d=!e.StripOffsets;return function h(t,e,n,c,o,r){if(!e||1===e)return t;for(let a=0;a<o.length;++a){if(o[a]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(o[a]!==o[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const d=o[0]/8,s=2===r?1:o.length;for(let a=0;a<c&&!(a*s*n*d>=t.byteLength);++a){let f;if(2===e){switch(o[0]){case 8:f=new Uint8Array(t,a*s*n*d,s*n*d);break;case 16:f=new Uint16Array(t,a*s*n*d,s*n*d/2);break;case 32:f=new Uint32Array(t,a*s*n*d,s*n*d/4);break;default:throw new Error(`Predictor 2 not allowed with ${o[0]} bits per sample.`)}w(f,s)}else 3===e&&(f=new Uint8Array(t,a*s*n*d,s*n*d),_(f,s,d))}return t}(o,r,d?e.TileWidth:e.ImageWidth,d?e.TileLength:e.RowsPerStrip||e.ImageLength,e.BitsPerSample,e.PlanarConfiguration)}return o})()}}},503:(U,u,l)=>{l.r(u),l.d(u,{default:()=>w});var g=l(490);class w extends g.Z{decodeBlock(h){const i=new DataView(h),t=[];for(let e=0;e<h.byteLength;++e){let n=i.getInt8(e);if(n<0){const c=i.getUint8(e+1);n=-n;for(let o=0;o<=n;++o)t.push(c);e+=1}else{for(let c=0;c<=n;++c)t.push(i.getUint8(e+c+1));e+=n+1}}return new Uint8Array(t).buffer}}}}]);