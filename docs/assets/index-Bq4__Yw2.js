(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const hl="183",xp=0,pu=1,yp=2,oa=1,Sp=2,Gr=3,ci=0,qe=1,Ke=2,Hn=0,lr=1,mu=2,gu=3,_u=4,Mp=5,Mi=100,bp=101,Ep=102,Tp=103,wp=104,Ap=200,Cp=201,Rp=202,Pp=203,ec=204,nc=205,Ip=206,Lp=207,Dp=208,Up=209,Np=210,Fp=211,Op=212,Bp=213,zp=214,ic=0,rc=1,sc=2,dr=3,ac=4,oc=5,cc=6,lc=7,fl=0,kp=1,Vp=2,wn=0,df=1,pf=2,mf=3,gf=4,_f=5,vf=6,xf=7,vu="attached",Gp="detached",yf=300,Pi=301,pr=302,no=303,io=304,ka=306,uc=1e3,Vn=1001,hc=1002,Pe=1003,Hp=1004,ws=1005,Fe=1006,ro=1007,wi=1008,Qe=1009,Sf=1010,Mf=1011,es=1012,dl=1013,Pn=1014,mn=1015,qn=1016,pl=1017,ml=1018,ns=1020,bf=35902,Ef=35899,Tf=1021,wf=1022,sn=1023,Yn=1026,Ai=1027,Af=1028,gl=1029,mr=1030,_l=1031,vl=1033,ca=33776,la=33777,ua=33778,ha=33779,fc=35840,dc=35841,pc=35842,mc=35843,gc=36196,_c=37492,vc=37496,xc=37488,yc=37489,Sc=37490,Mc=37491,bc=37808,Ec=37809,Tc=37810,wc=37811,Ac=37812,Cc=37813,Rc=37814,Pc=37815,Ic=37816,Lc=37817,Dc=37818,Uc=37819,Nc=37820,Fc=37821,Oc=36492,Bc=36494,zc=36495,kc=36283,Vc=36284,Gc=36285,Hc=36286,Cf=2200,Va=2201,Wp=2202,Ma=2300,An=2301,ai=2302,xu=2303,ar=2400,or=2401,ba=2402,xl=2500,Xp=2501,qp=3200,yl=0,Yp=1,ri="",ke="srgb",gr="srgb-linear",Ea="linear",ne="srgb",ki=7680,yu=519,$p=512,jp=513,Zp=514,Sl=515,Jp=516,Kp=517,Ml=518,Qp=519,Wc=35044,Su="300 es",En=2e3,is=2001;function tm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function em(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function rs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nm(){const n=rs("canvas");return n.style.display="block",n}const Mu={};function Ta(...n){const t="THREE."+n.shift();console.log(t,...n)}function Rf(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Dt(...n){n=Rf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ot(...n){n=Rf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function wa(...n){const t=n.join(" ");t in Mu||(Mu[t]=!0,Dt(...n))}function im(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const rm={[ic]:rc,[sc]:cc,[ac]:lc,[dr]:oc,[rc]:ic,[cc]:sc,[lc]:ac,[oc]:dr};class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bu=1234567;const $r=Math.PI/180,ss=180/Math.PI;function an(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Yt(n,t,e){return Math.max(t,Math.min(e,n))}function bl(n,t){return(n%t+t)%t}function sm(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function am(n,t,e){return n!==t?(e-n)/(t-n):0}function jr(n,t,e){return(1-e)*n+e*t}function om(n,t,e,i){return jr(n,t,1-Math.exp(-e*i))}function cm(n,t=1){return t-Math.abs(bl(n,t*2)-t)}function lm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function um(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function hm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function fm(n,t){return n+Math.random()*(t-n)}function dm(n){return n*(.5-Math.random())}function pm(n){n!==void 0&&(bu=n);let t=bu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mm(n){return n*$r}function gm(n){return n*ss}function _m(n){return(n&n-1)===0&&n!==0}function vm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ym(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+i)/2),u=a((t+i)/2),f=s((t-i)/2),h=a((t-i)/2),d=s((i-t)/2),p=a((i-t)/2);switch(r){case"XYX":n.set(o*u,c*f,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*f,o*l);break;case"ZXZ":n.set(c*f,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*p,c*d,o*l);break;case"YXY":n.set(c*d,o*u,c*p,o*l);break;case"ZYZ":n.set(c*p,c*d,o*u,o*l);break;default:Dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Sm={DEG2RAD:$r,RAD2DEG:ss,generateUUID:an,clamp:Yt,euclideanModulo:bl,mapLinear:sm,inverseLerp:am,lerp:jr,damp:om,pingpong:cm,smoothstep:lm,smootherstep:um,randInt:hm,randFloat:fm,randFloatSpread:dm,seededRandom:pm,degToRad:mm,radToDeg:gm,isPowerOfTwo:_m,ceilPowerOfTwo:vm,floorPowerOfTwo:xm,setQuaternionFromProperEuler:ym,normalize:ie,denormalize:pn};class j{constructor(t=0,e=0){j.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cn{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],d=s[a+1],p=s[a+2],S=s[a+3];if(f!==S||c!==h||l!==d||u!==p){let g=c*h+l*d+u*p+f*S;g<0&&(h=-h,d=-d,p=-p,S=-S,g=-g);let m=1-o;if(g<.9995){const y=Math.acos(g),M=Math.sin(y);m=Math.sin(m*y)/M,o=Math.sin(o*y)/M,c=c*m+h*o,l=l*m+d*o,u=u*m+p*o,f=f*m+S*o}else{c=c*m+h*o,l=l*m+d*o,u=u*m+p*o,f=f*m+S*o;const y=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=y,l*=y,u*=y,f*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],p=s[a+3];return t[e]=o*p+u*f+c*d-l*h,t[e+1]=c*p+u*h+l*f-o*d,t[e+2]=l*p+u*d+o*h-c*f,t[e+3]=u*p-o*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),h=c(i/2),d=c(r/2),p=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f+h*d*p;break;case"YZX":this._x=h*u*f+l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f-h*d*p;break;case"XZY":this._x=h*u*f-l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f+h*d*p;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),u=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return so.copy(this).projectOnVector(t),this.sub(so)}reflect(t){return this.sub(so.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const so=new I,Eu=new Cn;class Wt{constructor(t,e,i,r,s,a,o,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],p=i[8],S=r[0],g=r[3],m=r[6],y=r[1],M=r[4],x=r[7],w=r[2],A=r[5],C=r[8];return s[0]=a*S+o*y+c*w,s[3]=a*g+o*M+c*A,s[6]=a*m+o*x+c*C,s[1]=l*S+u*y+f*w,s[4]=l*g+u*M+f*A,s[7]=l*m+u*x+f*C,s[2]=h*S+d*y+p*w,s[5]=h*g+d*M+p*A,s[8]=h*m+d*x+p*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*s,d=l*s-a*c,p=e*f+i*h+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/p;return t[0]=f*S,t[1]=(r*l-u*i)*S,t[2]=(o*i-r*a)*S,t[3]=h*S,t[4]=(u*e-r*c)*S,t[5]=(r*s-o*e)*S,t[6]=d*S,t[7]=(i*c-l*e)*S,t[8]=(a*e-i*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ao.makeScale(t,e)),this}rotate(t){return this.premultiply(ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ao=new Wt,Tu=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mm(){const n={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ne&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(r.r=ur(r.r),r.g=ur(r.g),r.b=ur(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?Ea:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return wa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return wa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gr]:{primaries:t,whitePoint:i,transfer:Ea,toXYZ:Tu,fromXYZ:wu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:i,transfer:ne,toXYZ:Tu,fromXYZ:wu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),n}const Kt=Mm();function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class bm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Vi===void 0&&(Vi=rs("canvas")),Vi.width=t.width,Vi.height=t.height;const r=Vi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Vi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Wn(e[i]/255)*255):e[i]=Wn(e[i]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Em=0;class El{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=an(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(oo(r[a].image)):s.push(oo(r[a]))}else s=oo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function oo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}let Tm=0;const co=new I;class Ie extends Di{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,i=Vn,r=Vn,s=Fe,a=wi,o=sn,c=Qe,l=Ie.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=an(),this.name="",this.source=new El(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uc:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uc:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=yf;Ie.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,r=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],p=c[9],S=c[2],g=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(d+1)/2,w=(m+1)/2,A=(u+h)/4,C=(f+S)/4,_=(p+g)/4;return M>x&&M>w?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=A/i,s=C/i):x>w?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=_/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=_/s),this.set(i,r,s,e),this}let y=Math.sqrt((g-p)*(g-p)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(f-S)/y,this.z=(h-u)/y,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wm extends Di{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new Ie(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Fe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new El(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends wm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Pf extends Ie{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Am extends Ie{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jt{constructor(t,e,i,r,s,a,o,c,l,u,f,h,d,p,S,g){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,u,f,h,d,p,S,g)}set(t,e,i,r,s,a,o,c,l,u,f,h,d,p,S,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=p,m[11]=S,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,r=1/Gi.setFromMatrixColumn(t,0).length(),s=1/Gi.setFromMatrixColumn(t,1).length(),a=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,d=a*f,p=o*u,S=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+p*l,e[5]=h-S*l,e[9]=-o*c,e[2]=S-h*l,e[6]=p+d*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,p=l*u,S=l*f;e[0]=h+S*o,e[4]=p*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-p,e[6]=S+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,p=l*u,S=l*f;e[0]=h-S*o,e[4]=-a*f,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,d=a*f,p=o*u,S=o*f;e[0]=c*u,e[4]=p*l-d,e[8]=h*l+S,e[1]=c*f,e[5]=S*l+h,e[9]=d*l-p,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,d=a*l,p=o*c,S=o*l;e[0]=c*u,e[4]=S-h*f,e[8]=p*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*f+p,e[10]=h-S*f}else if(t.order==="XZY"){const h=a*c,d=a*l,p=o*c,S=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+S,e[5]=a*u,e[9]=d*f-p,e[2]=p*f-d,e[6]=o*u,e[10]=S*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cm,t,Rm)}lookAt(t,e,i){const r=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Kn.crossVectors(i,je),Kn.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Kn.crossVectors(i,je)),Kn.normalize(),As.crossVectors(je,Kn),r[0]=Kn.x,r[4]=As.x,r[8]=je.x,r[1]=Kn.y,r[5]=As.y,r[9]=je.y,r[2]=Kn.z,r[6]=As.z,r[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],p=i[2],S=i[6],g=i[10],m=i[14],y=i[3],M=i[7],x=i[11],w=i[15],A=r[0],C=r[4],_=r[8],b=r[12],F=r[1],P=r[5],U=r[9],z=r[13],H=r[2],B=r[6],k=r[10],O=r[14],it=r[3],Q=r[7],mt=r[11],_t=r[15];return s[0]=a*A+o*F+c*H+l*it,s[4]=a*C+o*P+c*B+l*Q,s[8]=a*_+o*U+c*k+l*mt,s[12]=a*b+o*z+c*O+l*_t,s[1]=u*A+f*F+h*H+d*it,s[5]=u*C+f*P+h*B+d*Q,s[9]=u*_+f*U+h*k+d*mt,s[13]=u*b+f*z+h*O+d*_t,s[2]=p*A+S*F+g*H+m*it,s[6]=p*C+S*P+g*B+m*Q,s[10]=p*_+S*U+g*k+m*mt,s[14]=p*b+S*z+g*O+m*_t,s[3]=y*A+M*F+x*H+w*it,s[7]=y*C+M*P+x*B+w*Q,s[11]=y*_+M*U+x*k+w*mt,s[15]=y*b+M*z+x*O+w*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],p=t[3],S=t[7],g=t[11],m=t[15],y=c*d-l*h,M=o*d-l*f,x=o*h-c*f,w=a*d-l*u,A=a*h-c*u,C=a*f-o*u;return e*(S*y-g*M+m*x)-i*(p*y-g*w+m*A)+r*(p*M-S*w+m*C)-s*(p*x-S*A+g*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],p=t[12],S=t[13],g=t[14],m=t[15],y=e*o-i*a,M=e*c-r*a,x=e*l-s*a,w=i*c-r*o,A=i*l-s*o,C=r*l-s*c,_=u*S-f*p,b=u*g-h*p,F=u*m-d*p,P=f*g-h*S,U=f*m-d*S,z=h*m-d*g,H=y*z-M*U+x*P+w*F-A*b+C*_;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=(o*z-c*U+l*P)*B,t[1]=(r*U-i*z-s*P)*B,t[2]=(S*C-g*A+m*w)*B,t[3]=(h*A-f*C-d*w)*B,t[4]=(c*F-a*z-l*b)*B,t[5]=(e*z-r*F+s*b)*B,t[6]=(g*x-p*C-m*M)*B,t[7]=(u*C-h*x+d*M)*B,t[8]=(a*U-o*F+l*_)*B,t[9]=(i*F-e*U-s*_)*B,t[10]=(p*A-S*x+m*y)*B,t[11]=(f*x-u*A-d*y)*B,t[12]=(o*b-a*P-c*_)*B,t[13]=(e*P-i*b+r*_)*B,t[14]=(S*M-p*w-g*y)*B,t[15]=(u*w-f*M+h*y)*B,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,f=o+o,h=s*l,d=s*u,p=s*f,S=a*u,g=a*f,m=o*f,y=c*l,M=c*u,x=c*f,w=i.x,A=i.y,C=i.z;return r[0]=(1-(S+m))*w,r[1]=(d+x)*w,r[2]=(p-M)*w,r[3]=0,r[4]=(d-x)*A,r[5]=(1-(h+m))*A,r[6]=(g+y)*A,r[7]=0,r[8]=(p+M)*C,r[9]=(g-y)*C,r[10]=(1-(h+S))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),e.identity(),this;let a=Gi.set(r[0],r[1],r[2]).length();const o=Gi.set(r[4],r[5],r[6]).length(),c=Gi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ln.copy(this);const l=1/a,u=1/o,f=1/c;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=f,ln.elements[9]*=f,ln.elements[10]*=f,e.setFromRotationMatrix(ln),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,r,s,a,o=En,c=!1){const l=this.elements,u=2*s/(e-t),f=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let p,S;if(c)p=s/(a-s),S=a*s/(a-s);else if(o===En)p=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===is)p=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=En,c=!1){const l=this.elements,u=2/(e-t),f=2/(i-r),h=-(e+t)/(e-t),d=-(i+r)/(i-r);let p,S;if(c)p=1/(a-s),S=a/(a-s);else if(o===En)p=-2/(a-s),S=-(a+s)/(a-s);else if(o===is)p=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Gi=new I,ln=new Jt,Cm=new I(0,0,0),Rm=new I(1,1,1),Kn=new I,As=new I,je=new I,Au=new Jt,Cu=new Cn;class gn{constructor(t=0,e=0,i=0,r=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Au,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class If{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pm=0;const Ru=new I,Hi=new Cn,Fn=new Jt,Cs=new I,Rr=new I,Im=new I,Lm=new Cn,Pu=new I(1,0,0),Iu=new I(0,1,0),Lu=new I(0,0,1),Du={type:"added"},Dm={type:"removed"},Wi={type:"childadded",child:null},lo={type:"childremoved",child:null};class Me extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new I,e=new gn,i=new Cn,r=new I(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Wt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new If,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Pu,t)}rotateY(t){return this.rotateOnAxis(Iu,t)}rotateZ(t){return this.rotateOnAxis(Lu,t)}translateOnAxis(t,e){return Ru.copy(t).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pu,t)}translateY(t){return this.translateOnAxis(Iu,t)}translateZ(t){return this.translateOnAxis(Lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Cs.copy(t):Cs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Rr,Cs,this.up):Fn.lookAt(Cs,Rr,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),Hi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Du),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dm),lo.child=t,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Du),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,Im),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Lm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Me.DEFAULT_UP=new I(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let We=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Um={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const S of t.hand.values()){const g=e.getJointPose(S,i),m=this._getHandJoint(l,S);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;l.inputState.pinching&&h>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Um)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new We;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function ho(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Kt.workingColorSpace){if(t=bl(t,1),e=Yt(e,0,1),i=Yt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=ho(a,s,t+1/3),this.g=ho(a,s,t),this.b=ho(a,s,t-1/3)}return Kt.colorSpaceToWorking(this,r),this}setStyle(t,e=ke){function i(s){s!==void 0&&parseFloat(s)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const i=Lf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Kt.workingToColorSpace(Ne.copy(this),t),Math.round(Yt(Ne.r*255,0,255))*65536+Math.round(Yt(Ne.g*255,0,255))*256+Math.round(Yt(Ne.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Ne.copy(this),e);const i=Ne.r,r=Ne.g,s=Ne.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=ke){Kt.workingToColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,r=Ne.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Rs);const i=jr(Qn.h,Rs.h,e),r=jr(Qn.s,Rs.s,e),s=jr(Qn.l,Rs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new kt;kt.NAMES=Lf;class Tl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=i}clone(){return new Tl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Nm extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const un=new I,On=new I,fo=new I,Bn=new I,Xi=new I,qi=new I,Uu=new I,po=new I,mo=new I,go=new I,_o=new de,vo=new de,xo=new de;class rn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),un.subVectors(t,e),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){un.subVectors(r,e),On.subVectors(i,e),fo.subVectors(t,e);const a=un.dot(un),o=un.dot(On),c=un.dot(fo),l=On.dot(On),u=On.dot(fo),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(l*c-o*u)*h,p=(a*u-o*c)*h;return s.set(1-d-p,p,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Bn.x),c.addScaledVector(a,Bn.y),c.addScaledVector(o,Bn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return _o.setScalar(0),vo.setScalar(0),xo.setScalar(0),_o.fromBufferAttribute(t,e),vo.fromBufferAttribute(t,i),xo.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(_o,s.x),a.addScaledVector(vo,s.y),a.addScaledVector(xo,s.z),a}static isFrontFacing(t,e,i,r){return un.subVectors(i,e),On.subVectors(t,e),un.cross(On).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),On.subVectors(this.a,this.b),un.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Xi.subVectors(r,i),qi.subVectors(s,i),po.subVectors(t,i);const c=Xi.dot(po),l=qi.dot(po);if(c<=0&&l<=0)return e.copy(i);mo.subVectors(t,r);const u=Xi.dot(mo),f=qi.dot(mo);if(u>=0&&f<=u)return e.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(Xi,a);go.subVectors(t,s);const d=Xi.dot(go),p=qi.dot(go);if(p>=0&&d<=p)return e.copy(s);const S=d*l-c*p;if(S<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(i).addScaledVector(qi,o);const g=u*p-d*f;if(g<=0&&f-u>=0&&d-p>=0)return Uu.subVectors(s,r),o=(f-u)/(f-u+(d-p)),e.copy(r).addScaledVector(Uu,o);const m=1/(g+S+h);return a=S*m,o=h*m,e.copy(i).addScaledVector(Xi,a).addScaledVector(qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class br{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ps.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ps.copy(i.boundingBox)),Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pr),Is.subVectors(this.max,Pr),Yi.subVectors(t.a,Pr),$i.subVectors(t.b,Pr),ji.subVectors(t.c,Pr),ti.subVectors($i,Yi),ei.subVectors(ji,$i),mi.subVectors(Yi,ji);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-mi.z,mi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,mi.z,0,-mi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-mi.y,mi.x,0];return!yo(e,Yi,$i,ji,Is)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,Yi,$i,ji,Is))?!1:(Ls.crossVectors(ti,ei),e=[Ls.x,Ls.y,Ls.z],yo(e,Yi,$i,ji,Is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zn=[new I,new I,new I,new I,new I,new I,new I,new I],hn=new I,Ps=new br,Yi=new I,$i=new I,ji=new I,ti=new I,ei=new I,mi=new I,Pr=new I,Is=new I,Ls=new I,gi=new I;function yo(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){gi.fromArray(n,s);const o=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),u=i.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const xe=new I,Ds=new j;let Fm=0;class Ye{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Wc,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=pn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),r=ie(r,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wc&&(t.usage=this.usage),t}}class wl extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Df extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ue extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Om=new br,Ir=new I,So=new I;class ps{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Om.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ir.subVectors(t,this.center);const e=Ir.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ir,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ir.copy(t.center).add(So)),this.expandByPoint(Ir.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Bm=0;const en=new Jt,Mo=new Me,Zi=new I,Ze=new br,Lr=new br,Ae=new I;class Te extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tm(t)?Df:wl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Wt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,i){return en.makeTranslation(t,e,i),this.applyMatrix4(en),this}scale(t,e,i){return en.makeScale(t,e,i),this.applyMatrix4(en),this}lookAt(t){return Mo.lookAt(t),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ze.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Ze.min,Lr.min),Ze.expandByPoint(Ae),Ae.addVectors(Ze.max,Lr.max),Ze.expandByPoint(Ae)):(Ze.expandByPoint(Lr.min),Ze.expandByPoint(Lr.max))}Ze.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ae.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ae));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ae.fromBufferAttribute(o,l),c&&(Zi.fromBufferAttribute(t,l),Ae.add(Zi)),r=Math.max(r,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new I,c[_]=new I;const l=new I,u=new I,f=new I,h=new j,d=new j,p=new j,S=new I,g=new I;function m(_,b,F){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,F),h.fromBufferAttribute(s,_),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,F),u.sub(l),f.sub(l),d.sub(h),p.sub(h);const P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(S.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(P),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(P),o[_].add(S),o[b].add(S),o[F].add(S),c[_].add(g),c[b].add(g),c[F].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,b=y.length;_<b;++_){const F=y[_],P=F.start,U=F.count;for(let z=P,H=P+U;z<H;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new I,x=new I,w=new I,A=new I;function C(_){w.fromBufferAttribute(r,_),A.copy(w);const b=o[_];M.copy(b),M.sub(w.multiplyScalar(w.dot(b))).normalize(),x.crossVectors(A,b);const P=x.dot(c[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,P)}for(let _=0,b=y.length;_<b;++_){const F=y[_],P=F.start,U=F.count;for(let z=P,H=P+U;z<H;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,a=new I,o=new I,c=new I,l=new I,u=new I,f=new I;if(t)for(let h=0,d=t.count;h<d;h+=3){const p=t.getX(h+0),S=t.getX(h+1),g=t.getX(h+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,S),a.fromBufferAttribute(e,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,g),o.add(u),c.add(u),l.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let d=0,p=0;for(let S=0,g=c.length;S<g;S++){o.isInterleavedBufferAttribute?d=c[S]*o.data.stride+o.offset:d=c[S]*u;for(let m=0;m<u;m++)h[p++]=l[d++]}return new Ye(h,u,f)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wc,this.updateRanges=[],this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Oe=new I;class Aa{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=pn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),r=ie(r,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Aa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let km=0;class Ui extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=an(),this.name="",this.type="Material",this.blending=lr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=nc,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ec&&(i.blendSrc=this.blendSrc),this.blendDst!==nc&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ga extends Ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ji;const Dr=new I,Ki=new I,Qi=new I,tr=new j,Ur=new j,Uf=new Jt,Us=new I,Nr=new I,Ns=new I,Nu=new j,bo=new j,Fu=new j;class Al extends Me{constructor(t=new Ga){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new Te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zm(e,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new Aa(i,3,0,!1)),Ji.setAttribute("uv",new Aa(i,2,3,!1))}this.geometry=Ji,this.material=t,this.center=new j(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),Uf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-Qi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Fs(Us.set(-.5,-.5,0),Qi,a,Ki,r,s),Fs(Nr.set(.5,-.5,0),Qi,a,Ki,r,s),Fs(Ns.set(.5,.5,0),Qi,a,Ki,r,s),Nu.set(0,0),bo.set(1,0),Fu.set(1,1);let o=t.ray.intersectTriangle(Us,Nr,Ns,!1,Dr);if(o===null&&(Fs(Nr.set(-.5,.5,0),Qi,a,Ki,r,s),bo.set(0,1),o=t.ray.intersectTriangle(Us,Ns,Nr,!1,Dr),o===null))return;const c=t.ray.origin.distanceTo(Dr);c<t.near||c>t.far||e.push({distance:c,point:Dr.clone(),uv:rn.getInterpolation(Dr,Us,Nr,Ns,Nu,bo,Fu,new j),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fs(n,t,e,i,r,s){tr.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Ur.x=s*tr.x-r*tr.y,Ur.y=r*tr.x+s*tr.y):Ur.copy(tr),n.copy(t),n.x+=Ur.x,n.y+=Ur.y,n.applyMatrix4(Uf)}const kn=new I,Eo=new I,Os=new I,ni=new I,To=new I,Bs=new I,wo=new I;class Nf{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Eo.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(Eo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Os),o=ni.dot(this.direction),c=-ni.dot(Os),l=ni.lengthSq(),u=Math.abs(1-a*a);let f,h,d,p;if(u>0)if(f=a*c-o,h=a*o-c,p=s*u,f>=0)if(h>=-p)if(h<=p){const S=1/u;f*=S,h*=S,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-p?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=p?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Eo).addScaledVector(Os,h),d}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,i,r,s){To.subVectors(e,t),Bs.subVectors(i,t),wo.crossVectors(To,Bs);let a=this.direction.dot(wo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);const c=o*this.direction.dot(Bs.crossVectors(ni,Bs));if(c<0)return null;const l=o*this.direction.dot(To.cross(ni));if(l<0||c+l>a)return null;const u=-o*ni.dot(wo);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ha extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ou=new Jt,_i=new Nf,zs=new ps,Bu=new I,ks=new I,Vs=new I,Gs=new I,Ao=new I,Hs=new I,zu=new I,Ws=new I;class Zt extends Me{constructor(t=new Te,e=new Ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Hs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Ao.fromBufferAttribute(f,t),a?Hs.addScaledVector(Ao,u):Hs.addScaledVector(Ao.sub(e),u))}e.add(Hs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(s),_i.copy(t.ray).recast(t.near),!(zs.containsPoint(_i.origin)===!1&&(_i.intersectSphere(zs,Bu)===null||_i.origin.distanceToSquared(Bu)>(t.far-t.near)**2))&&(Ou.copy(s).invert(),_i.copy(t.ray).applyMatrix4(Ou),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,S=h.length;p<S;p++){const g=h[p],m=a[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,w=M;x<w;x+=3){const A=o.getX(x),C=o.getX(x+1),_=o.getX(x+2);r=Xs(this,m,t,i,l,u,f,A,C,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let g=p,m=S;g<m;g+=3){const y=o.getX(g),M=o.getX(g+1),x=o.getX(g+2);r=Xs(this,a,t,i,l,u,f,y,M,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,S=h.length;p<S;p++){const g=h[p],m=a[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,w=M;x<w;x+=3){const A=x,C=x+1,_=x+2;r=Xs(this,m,t,i,l,u,f,A,C,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),S=Math.min(c.count,d.start+d.count);for(let g=p,m=S;g<m;g+=3){const y=g,M=g+1,x=g+2;r=Xs(this,a,t,i,l,u,f,y,M,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function Vm(n,t,e,i,r,s,a,o){let c;if(t.side===qe?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===ci,o),c===null)return null;Ws.copy(o),Ws.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ws);return l<e.near||l>e.far?null:{distance:l,point:Ws.clone(),object:n}}function Xs(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,ks),n.getVertexPosition(c,Vs),n.getVertexPosition(l,Gs);const u=Vm(n,t,e,i,ks,Vs,Gs,zu);if(u){const f=new I;rn.getBarycoord(zu,ks,Vs,Gs,f),r&&(u.uv=rn.getInterpolatedAttribute(r,o,c,l,f,new j)),s&&(u.uv1=rn.getInterpolatedAttribute(s,o,c,l,f,new j)),a&&(u.normal=rn.getInterpolatedAttribute(a,o,c,l,f,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new I,materialIndex:0};rn.getNormal(ks,Vs,Gs,h.normal),u.face=h,u.barycoord=f}return u}const ku=new I,Vu=new de,Gu=new de,Gm=new I,Hu=new Jt,qs=new I,Co=new ps,Wu=new Jt,Ro=new Nf;class Hm extends Zt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vu,this.bindMatrix=new Jt,this.bindMatrixInverse=new Jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new br),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,qs),this.boundingBox.expandByPoint(qs)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ps),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,qs),this.boundingSphere.expandByPoint(qs)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(r),t.ray.intersectsSphere(Co)!==!1&&(Wu.copy(r).invert(),Ro.copy(t.ray).applyMatrix4(Wu),!(this.boundingBox!==null&&Ro.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ro)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new de,e=this.geometry.attributes.skinWeight;for(let i=0,r=e.count;i<r;i++){t.fromBufferAttribute(e,i);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===vu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Dt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,r=this.geometry;Vu.fromBufferAttribute(r.attributes.skinIndex,t),Gu.fromBufferAttribute(r.attributes.skinWeight,t),ku.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=Gu.getComponent(s);if(a!==0){const o=Vu.getComponent(s);Hu.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(Gm.copy(ku).applyMatrix4(Hu),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Xc extends Me{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ff extends Ie{constructor(t=null,e=1,i=1,r,s,a,o,c,l=Pe,u=Pe,f,h){super(null,a,o,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xu=new Jt,Wm=new Jt;class Cl{constructor(t=[],e=[]){this.uuid=an(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Dt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new Jt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:Wm;Xu.multiplyMatrices(o,e[s]),Xu.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Cl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new Ff(e,t,t,sn,mn);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,r=t.bones.length;i<r;i++){const s=t.bones[i];let a=e[s];a===void 0&&(Dt("Skeleton: No bone found with UUID:",s),a=new Xc),this.bones.push(a),this.boneInverses.push(new Jt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let r=0,s=e.length;r<s;r++){const a=e[r];t.bones.push(a.uuid);const o=i[r];t.boneInverses.push(o.toArray())}return t}}const Po=new I,Xm=new I,qm=new Wt;class Si{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Po.subVectors(i,e).cross(Xm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Po),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||qm.getNormalMatrix(t),r=this.coplanarPoint(Po).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new ps,Ym=new j(.5,.5),Ys=new I;class Rl{constructor(t=new Si,e=new Si,i=new Si,r=new Si,s=new Si,a=new Si){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=En,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],d=s[7],p=s[8],S=s[9],g=s[10],m=s[11],y=s[12],M=s[13],x=s[14],w=s[15];if(r[0].setComponents(l-a,d-u,m-p,w-y).normalize(),r[1].setComponents(l+a,d+u,m+p,w+y).normalize(),r[2].setComponents(l+o,d+f,m+S,w+M).normalize(),r[3].setComponents(l-o,d-f,m-S,w-M).normalize(),i)r[4].setComponents(c,h,g,x).normalize(),r[5].setComponents(l-c,d-h,m-g,w-x).normalize();else if(r[4].setComponents(l-c,d-h,m-g,w-x).normalize(),e===En)r[5].setComponents(l+c,d+h,m+g,w+x).normalize();else if(e===is)r[5].setComponents(c,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){vi.center.set(0,0,0);const e=Ym.distanceTo(t.center);return vi.radius=.7071067811865476+e,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ys.x=r.normal.x>0?t.max.x:t.min.x,Ys.y=r.normal.y>0?t.max.y:t.min.y,Ys.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Of extends Ie{constructor(t=[],e=Pi,i,r,s,a,o,c,l,u){super(t,e,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class as extends Ie{constructor(t,e,i=Pn,r,s,a,o=Pe,c=Pe,l,u=Yn,f=1){if(u!==Yn&&u!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new El(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class $m extends as{constructor(t,e=Pn,i=Pi,r,s,a=Pe,o=Pe,c,l=Yn){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Bf extends Ie{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ni extends Te{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,r,a,2),p("x","z","y",1,-1,t,i,-e,r,a,3),p("x","y","z",1,-1,t,e,i,r,s,4),p("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(f,2));function p(S,g,m,y,M,x,w,A,C,_,b){const F=x/C,P=w/_,U=x/2,z=w/2,H=A/2,B=C+1,k=_+1;let O=0,it=0;const Q=new I;for(let mt=0;mt<k;mt++){const _t=mt*P-z;for(let gt=0;gt<B;gt++){const Bt=gt*F-U;Q[S]=Bt*y,Q[g]=_t*M,Q[m]=H,l.push(Q.x,Q.y,Q.z),Q[S]=0,Q[g]=0,Q[m]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(gt/C),f.push(1-mt/_),O+=1}}for(let mt=0;mt<_;mt++)for(let _t=0;_t<C;_t++){const gt=h+_t+B*mt,Bt=h+_t+B*(mt+1),te=h+(_t+1)+B*(mt+1),se=h+(_t+1)+B*mt;c.push(gt,Bt,se),c.push(Bt,te,se),it+=6}o.addGroup(d,it,b),d+=it,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Pl extends Te{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new I,u=new j;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const d=i+f/e*r;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fi extends Te{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],d=[];let p=0;const S=[],g=i/2;let m=0;y(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function y(){const x=new I,w=new I;let A=0;const C=(e-t)/i;for(let _=0;_<=s;_++){const b=[],F=_/s,P=F*(e-t)+t;for(let U=0;U<=r;U++){const z=U/r,H=z*c+o,B=Math.sin(H),k=Math.cos(H);w.x=P*B,w.y=-F*i+g,w.z=P*k,f.push(w.x,w.y,w.z),x.set(B,C,k).normalize(),h.push(x.x,x.y,x.z),d.push(z,1-F),b.push(p++)}S.push(b)}for(let _=0;_<r;_++)for(let b=0;b<s;b++){const F=S[b][_],P=S[b+1][_],U=S[b+1][_+1],z=S[b][_+1];(t>0||b!==0)&&(u.push(F,P,z),A+=3),(e>0||b!==s-1)&&(u.push(P,U,z),A+=3)}l.addGroup(m,A,0),m+=A}function M(x){const w=p,A=new j,C=new I;let _=0;const b=x===!0?t:e,F=x===!0?1:-1;for(let U=1;U<=r;U++)f.push(0,g*F,0),h.push(0,F,0),d.push(.5,.5),p++;const P=p;for(let U=0;U<=r;U++){const H=U/r*c+o,B=Math.cos(H),k=Math.sin(H);C.x=b*k,C.y=g*F,C.z=b*B,f.push(C.x,C.y,C.z),h.push(0,F,0),A.x=B*.5+.5,A.y=k*.5*F+.5,d.push(A.x,A.y),p++}for(let U=0;U<r;U++){const z=w+U,H=P+U;x===!0?u.push(H,H+1,z):u.push(H+1,H,z),_+=3}l.addGroup(m,_,x===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ms extends Fi{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ms(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wa extends Te{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],a=[];o(r),l(i),u(),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(s.slice(),3)),this.setAttribute("uv",new ue(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const M=new I,x=new I,w=new I;for(let A=0;A<e.length;A+=3)d(e[A+0],M),d(e[A+1],x),d(e[A+2],w),c(M,x,w,y)}function c(y,M,x,w){const A=w+1,C=[];for(let _=0;_<=A;_++){C[_]=[];const b=y.clone().lerp(x,_/A),F=M.clone().lerp(x,_/A),P=A-_;for(let U=0;U<=P;U++)U===0&&_===A?C[_][U]=b:C[_][U]=b.clone().lerp(F,U/P)}for(let _=0;_<A;_++)for(let b=0;b<2*(A-_)-1;b++){const F=Math.floor(b/2);b%2===0?(h(C[_][F+1]),h(C[_+1][F]),h(C[_][F])):(h(C[_][F+1]),h(C[_+1][F+1]),h(C[_+1][F]))}}function l(y){const M=new I;for(let x=0;x<s.length;x+=3)M.x=s[x+0],M.y=s[x+1],M.z=s[x+2],M.normalize().multiplyScalar(y),s[x+0]=M.x,s[x+1]=M.y,s[x+2]=M.z}function u(){const y=new I;for(let M=0;M<s.length;M+=3){y.x=s[M+0],y.y=s[M+1],y.z=s[M+2];const x=g(y)/2/Math.PI+.5,w=m(y)/Math.PI+.5;a.push(x,1-w)}p(),f()}function f(){for(let y=0;y<a.length;y+=6){const M=a[y+0],x=a[y+2],w=a[y+4],A=Math.max(M,x,w),C=Math.min(M,x,w);A>.9&&C<.1&&(M<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function d(y,M){const x=y*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function p(){const y=new I,M=new I,x=new I,w=new I,A=new j,C=new j,_=new j;for(let b=0,F=0;b<s.length;b+=9,F+=6){y.set(s[b+0],s[b+1],s[b+2]),M.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),A.set(a[F+0],a[F+1]),C.set(a[F+2],a[F+3]),_.set(a[F+4],a[F+5]),w.copy(y).add(M).add(x).divideScalar(3);const P=g(w);S(A,F+0,y,P),S(C,F+2,M,P),S(_,F+4,x,P)}}function S(y,M,x,w){w<0&&y.x===1&&(a[M]=y.x-1),x.x===0&&x.z===0&&(a[M]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.vertices,t.indices,t.radius,t.detail)}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Dt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=i[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new j:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new I,r=[],s=[],a=[],o=new I,c=new Jt;for(let d=0;d<=t;d++){const p=d/t;r[d]=this.getTangentAt(p,new I)}s[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Yt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,p))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Yt(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(c.makeRotationAxis(r[p],d*p)),a[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Il extends Dn{constructor(t=0,e=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new j){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class jm extends Il{constructor(t,e,i,r,s,a){super(t,e,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ll(){let n=0,t=0,e=0,i=0;function r(s,a,o,c){n=s,t=o,e=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,f){let h=(a-s)/l-(o-s)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,d*=u,r(a,o,h,d)},calc:function(s){const a=s*s,o=a*s;return n+t*s+e*a+i*o}}}const $s=new I,Io=new Ll,Lo=new Ll,Do=new Ll;class Zm extends Dn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new I){const i=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:($s.subVectors(r[0],r[1]).add(r[0]),l=$s);const f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:($s.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=$s),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(f),d),S=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);S<1e-4&&(S=1),p<1e-4&&(p=S),g<1e-4&&(g=S),Io.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,p,S,g),Lo.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,p,S,g),Do.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,p,S,g)}else this.curveType==="catmullrom"&&(Io.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Lo.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Do.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set(Io.calc(c),Lo.calc(c),Do.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new I().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qu(n,t,e,i,r){const s=(i-t)*.5,a=(r-e)*.5,o=n*n,c=n*o;return(2*e-2*i+s+a)*c+(-3*e+3*i-2*s-a)*o+s*n+e}function Jm(n,t){const e=1-n;return e*e*t}function Km(n,t){return 2*(1-n)*n*t}function Qm(n,t){return n*n*t}function Zr(n,t,e,i){return Jm(n,t)+Km(n,e)+Qm(n,i)}function tg(n,t){const e=1-n;return e*e*e*t}function eg(n,t){const e=1-n;return 3*e*e*n*t}function ng(n,t){return 3*(1-n)*n*n*t}function ig(n,t){return n*n*n*t}function Jr(n,t,e,i,r){return tg(n,t)+eg(n,e)+ng(n,i)+ig(n,r)}class zf extends Dn{constructor(t=new j,e=new j,i=new j,r=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new j){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Jr(t,r.x,s.x,a.x,o.x),Jr(t,r.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kf extends Dn{constructor(t=new I,e=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new I){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Jr(t,r.x,s.x,a.x,o.x),Jr(t,r.y,s.y,a.y,o.y),Jr(t,r.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vf extends Dn{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rg extends Dn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gf extends Dn{constructor(t=new j,e=new j,i=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new j){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(Zr(t,r.x,s.x,a.x),Zr(t,r.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hf extends Dn{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(Zr(t,r.x,s.x,a.x),Zr(t,r.y,s.y,a.y),Zr(t,r.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wf extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){const i=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(qu(o,c.x,l.x,u.x,f.x),qu(o,c.y,l.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new j().fromArray(r))}return this}}var Ca=Object.freeze({__proto__:null,ArcCurve:jm,CatmullRomCurve3:Zm,CubicBezierCurve:zf,CubicBezierCurve3:kf,EllipseCurve:Il,LineCurve:Vf,LineCurve3:rg,QuadraticBezierCurve:Gf,QuadraticBezierCurve3:Hf,SplineCurve:Wf});class Xf extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ca[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new Ca[r.type]().fromJSON(r))}return this}}class Yu extends Xf{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Vf(this.currentPoint.clone(),new j(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new Gf(this.currentPoint.clone(),new j(t,e),new j(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,a){const o=new zf(this.currentPoint.clone(),new j(t,e),new j(i,r),new j(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Wf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,r,s,a),this}absarc(t,e,i,r,s,a){return this.absellipse(t,e,i,i,r,s,a),this}ellipse(t,e,i,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,r,s,a,o,c),this}absellipse(t,e,i,r,s,a,o,c){const l=new Il(t,e,i,r,s,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qf extends Yu{constructor(t){super(t),this.uuid=an(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new Yu().fromJSON(r))}return this}}function sg(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=Yf(n,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=ug(n,t,s,e)),n.length>80*e){o=n[0],c=n[1];let u=o,f=c;for(let h=e;h<r;h+=e){const d=n[h],p=n[h+1];d<o&&(o=d),p<c&&(c=p),d>u&&(u=d),p>f&&(f=p)}l=Math.max(u-o,f-c),l=l!==0?32767/l:0}return os(s,a,e,o,c,l,0),a}function Yf(n,t,e,i,r){let s;if(r===Sg(n,t,e,i)>0)for(let a=t;a<e;a+=i)s=$u(a/i|0,n[a],n[a+1],s);else for(let a=e-i;a>=t;a-=i)s=$u(a/i|0,n[a],n[a+1],s);return s&&_r(s,s.next)&&(ls(s),s=s.next),s}function Ii(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(_r(e,e.next)||me(e.prev,e,e.next)===0)){if(ls(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function os(n,t,e,i,r,s,a){if(!n)return;!a&&s&&mg(n,i,r,s);let o=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?og(n,i,r,s):ag(n)){t.push(c.i,n.i,l.i),ls(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=cg(Ii(n),t),os(n,t,e,i,r,s,2)):a===2&&lg(n,t,e,i,r,s):os(Ii(n),t,e,i,r,s,1);break}}}function ag(n){const t=n.prev,e=n,i=n.next;if(me(t,e,i)>=0)return!1;const r=t.x,s=e.x,a=i.x,o=t.y,c=e.y,l=i.y,u=Math.min(r,s,a),f=Math.min(o,c,l),h=Math.max(r,s,a),d=Math.max(o,c,l);let p=i.next;for(;p!==t;){if(p.x>=u&&p.x<=h&&p.y>=f&&p.y<=d&&Hr(r,o,s,c,a,l,p.x,p.y)&&me(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function og(n,t,e,i){const r=n.prev,s=n,a=n.next;if(me(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,f=s.y,h=a.y,d=Math.min(o,c,l),p=Math.min(u,f,h),S=Math.max(o,c,l),g=Math.max(u,f,h),m=qc(d,p,t,e,i),y=qc(S,g,t,e,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=m&&x&&x.z<=y;){if(M.x>=d&&M.x<=S&&M.y>=p&&M.y<=g&&M!==r&&M!==a&&Hr(o,u,c,f,l,h,M.x,M.y)&&me(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=S&&x.y>=p&&x.y<=g&&x!==r&&x!==a&&Hr(o,u,c,f,l,h,x.x,x.y)&&me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=S&&M.y>=p&&M.y<=g&&M!==r&&M!==a&&Hr(o,u,c,f,l,h,M.x,M.y)&&me(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=S&&x.y>=p&&x.y<=g&&x!==r&&x!==a&&Hr(o,u,c,f,l,h,x.x,x.y)&&me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function cg(n,t){let e=n;do{const i=e.prev,r=e.next.next;!_r(i,r)&&jf(i,e,e.next,r)&&cs(i,r)&&cs(r,i)&&(t.push(i.i,e.i,r.i),ls(e),ls(e.next),e=n=r),e=e.next}while(e!==n);return Ii(e)}function lg(n,t,e,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&vg(a,o)){let c=Zf(a,o);a=Ii(a,a.next),c=Ii(c,c.next),os(a,t,e,i,r,s,0),os(c,t,e,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function ug(n,t,e,i){const r=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*i,c=s<a-1?t[s+1]*i:n.length,l=Yf(n,o,c,i,!1);l===l.next&&(l.steiner=!0),r.push(_g(l))}r.sort(hg);for(let s=0;s<r.length;s++)e=fg(r[s],e);return e}function hg(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function fg(n,t){const e=dg(n,t);if(!e)return t;const i=Zf(e,n);return Ii(i,i.next),Ii(e,e.next)}function dg(n,t){let e=t;const i=n.x,r=n.y;let s=-1/0,a;if(_r(n,e))return e;do{if(_r(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>s&&(s=f,a=e.x<e.next.x?e:e.next,f===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&$f(r<l?i:s,r,c,l,r<l?s:i,r,e.x,e.y)){const f=Math.abs(r-e.y)/(i-e.x);cs(e,n)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&pg(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function pg(n,t){return me(n.prev,n,t.prev)<0&&me(t.next,n,n.next)<0}function mg(n,t,e,i){let r=n;do r.z===0&&(r.z=qc(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,gg(r)}function gg(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,e*=2}while(t>1);return n}function qc(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function _g(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function $f(n,t,e,i,r,s,a,o){return(r-a)*(t-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(i-o)}function Hr(n,t,e,i,r,s,a,o){return!(n===a&&t===o)&&$f(n,t,e,i,r,s,a,o)}function vg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!xg(n,t)&&(cs(n,t)&&cs(t,n)&&yg(n,t)&&(me(n.prev,n,t.prev)||me(n,t.prev,t))||_r(n,t)&&me(n.prev,n,n.next)>0&&me(t.prev,t,t.next)>0)}function me(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function _r(n,t){return n.x===t.x&&n.y===t.y}function jf(n,t,e,i){const r=Zs(me(n,t,e)),s=Zs(me(n,t,i)),a=Zs(me(e,i,n)),o=Zs(me(e,i,t));return!!(r!==s&&a!==o||r===0&&js(n,e,t)||s===0&&js(n,i,t)||a===0&&js(e,n,i)||o===0&&js(e,t,i))}function js(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Zs(n){return n>0?1:n<0?-1:0}function xg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&jf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function cs(n,t){return me(n.prev,n,n.next)<0?me(n,t,n.next)>=0&&me(n,n.prev,t)>=0:me(n,t,n.prev)<0||me(n,n.next,t)<0}function yg(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Zf(n,t){const e=Yc(n.i,n.x,n.y),i=Yc(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function $u(n,t,e,i){const r=Yc(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ls(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Yc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sg(n,t,e,i){let r=0;for(let s=t,a=e-i;s<e;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class Mg{static triangulate(t,e,i=2){return sg(t,e,i)}}class cr{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return cr.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];ju(t),Zu(i,t);let a=t.length;e.forEach(ju);for(let c=0;c<e.length;c++)r.push(a),a+=e[c].length,Zu(i,e[c]);const o=Mg.triangulate(i,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function ju(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Zu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Dl extends Te{constructor(t=new qf([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ue(r,3)),this.setAttribute("uv",new ue(s,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:bg;let M,x=!1,w,A,C,_;if(m){M=m.getSpacedPoints(u),x=!0,h=!1;const J=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(u,J),A=new I,C=new I,_=new I}h||(g=0,d=0,p=0,S=0);const b=o.extractPoints(l);let F=b.shape;const P=b.holes;if(!cr.isClockWise(F)){F=F.reverse();for(let J=0,et=P.length;J<et;J++){const K=P[J];cr.isClockWise(K)&&(P[J]=K.reverse())}}function z(J){const K=10000000000000001e-36;let ht=J[0];for(let R=1;R<=J.length;R++){const Lt=R%J.length,vt=J[Lt],Nt=vt.x-ht.x,ct=vt.y-ht.y,T=Nt*Nt+ct*ct,v=Math.max(Math.abs(vt.x),Math.abs(vt.y),Math.abs(ht.x),Math.abs(ht.y)),D=K*v*v;if(T<=D){J.splice(Lt,1),R--;continue}ht=vt}}z(F),P.forEach(z);const H=P.length,B=F;for(let J=0;J<H;J++){const et=P[J];F=F.concat(et)}function k(J,et,K){return et||Ot("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(et,K)}const O=F.length;function it(J,et,K){let ht,R,Lt;const vt=J.x-et.x,Nt=J.y-et.y,ct=K.x-J.x,T=K.y-J.y,v=vt*vt+Nt*Nt,D=vt*T-Nt*ct;if(Math.abs(D)>Number.EPSILON){const X=Math.sqrt(v),Z=Math.sqrt(ct*ct+T*T),q=et.x-Nt/X,Mt=et.y+vt/X,lt=K.x-T/Z,Rt=K.y+ct/Z,Ft=((lt-q)*T-(Rt-Mt)*ct)/(vt*T-Nt*ct);ht=q+vt*Ft-J.x,R=Mt+Nt*Ft-J.y;const tt=ht*ht+R*R;if(tt<=2)return new j(ht,R);Lt=Math.sqrt(tt/2)}else{let X=!1;vt>Number.EPSILON?ct>Number.EPSILON&&(X=!0):vt<-Number.EPSILON?ct<-Number.EPSILON&&(X=!0):Math.sign(Nt)===Math.sign(T)&&(X=!0),X?(ht=-Nt,R=vt,Lt=Math.sqrt(v)):(ht=vt,R=Nt,Lt=Math.sqrt(v/2))}return new j(ht/Lt,R/Lt)}const Q=[];for(let J=0,et=B.length,K=et-1,ht=J+1;J<et;J++,K++,ht++)K===et&&(K=0),ht===et&&(ht=0),Q[J]=it(B[J],B[K],B[ht]);const mt=[];let _t,gt=Q.concat();for(let J=0,et=H;J<et;J++){const K=P[J];_t=[];for(let ht=0,R=K.length,Lt=R-1,vt=ht+1;ht<R;ht++,Lt++,vt++)Lt===R&&(Lt=0),vt===R&&(vt=0),_t[ht]=it(K[ht],K[Lt],K[vt]);mt.push(_t),gt=gt.concat(_t)}let Bt;if(g===0)Bt=cr.triangulateShape(B,P);else{const J=[],et=[];for(let K=0;K<g;K++){const ht=K/g,R=d*Math.cos(ht*Math.PI/2),Lt=p*Math.sin(ht*Math.PI/2)+S;for(let vt=0,Nt=B.length;vt<Nt;vt++){const ct=k(B[vt],Q[vt],Lt);Ut(ct.x,ct.y,-R),ht===0&&J.push(ct)}for(let vt=0,Nt=H;vt<Nt;vt++){const ct=P[vt];_t=mt[vt];const T=[];for(let v=0,D=ct.length;v<D;v++){const X=k(ct[v],_t[v],Lt);Ut(X.x,X.y,-R),ht===0&&T.push(X)}ht===0&&et.push(T)}}Bt=cr.triangulateShape(J,et)}const te=Bt.length,se=p+S;for(let J=0;J<O;J++){const et=h?k(F[J],gt[J],se):F[J];x?(C.copy(w.normals[0]).multiplyScalar(et.x),A.copy(w.binormals[0]).multiplyScalar(et.y),_.copy(M[0]).add(C).add(A),Ut(_.x,_.y,_.z)):Ut(et.x,et.y,0)}for(let J=1;J<=u;J++)for(let et=0;et<O;et++){const K=h?k(F[et],gt[et],se):F[et];x?(C.copy(w.normals[J]).multiplyScalar(K.x),A.copy(w.binormals[J]).multiplyScalar(K.y),_.copy(M[J]).add(C).add(A),Ut(_.x,_.y,_.z)):Ut(K.x,K.y,f/u*J)}for(let J=g-1;J>=0;J--){const et=J/g,K=d*Math.cos(et*Math.PI/2),ht=p*Math.sin(et*Math.PI/2)+S;for(let R=0,Lt=B.length;R<Lt;R++){const vt=k(B[R],Q[R],ht);Ut(vt.x,vt.y,f+K)}for(let R=0,Lt=P.length;R<Lt;R++){const vt=P[R];_t=mt[R];for(let Nt=0,ct=vt.length;Nt<ct;Nt++){const T=k(vt[Nt],_t[Nt],ht);x?Ut(T.x,T.y+M[u-1].y,M[u-1].x+K):Ut(T.x,T.y,f+K)}}}$(),at();function $(){const J=r.length/3;if(h){let et=0,K=O*et;for(let ht=0;ht<te;ht++){const R=Bt[ht];It(R[2]+K,R[1]+K,R[0]+K)}et=u+g*2,K=O*et;for(let ht=0;ht<te;ht++){const R=Bt[ht];It(R[0]+K,R[1]+K,R[2]+K)}}else{for(let et=0;et<te;et++){const K=Bt[et];It(K[2],K[1],K[0])}for(let et=0;et<te;et++){const K=Bt[et];It(K[0]+O*u,K[1]+O*u,K[2]+O*u)}}i.addGroup(J,r.length/3-J,0)}function at(){const J=r.length/3;let et=0;ot(B,et),et+=B.length;for(let K=0,ht=P.length;K<ht;K++){const R=P[K];ot(R,et),et+=R.length}i.addGroup(J,r.length/3-J,1)}function ot(J,et){let K=J.length;for(;--K>=0;){const ht=K;let R=K-1;R<0&&(R=J.length-1);for(let Lt=0,vt=u+g*2;Lt<vt;Lt++){const Nt=O*Lt,ct=O*(Lt+1),T=et+ht+Nt,v=et+R+Nt,D=et+R+ct,X=et+ht+ct;zt(T,v,D,X)}}}function Ut(J,et,K){c.push(J),c.push(et),c.push(K)}function It(J,et,K){ae(J),ae(et),ae(K);const ht=r.length/3,R=y.generateTopUV(i,r,ht-3,ht-2,ht-1);Gt(R[0]),Gt(R[1]),Gt(R[2])}function zt(J,et,K,ht){ae(J),ae(et),ae(ht),ae(et),ae(K),ae(ht);const R=r.length/3,Lt=y.generateSideWallUV(i,r,R-6,R-3,R-2,R-1);Gt(Lt[0]),Gt(Lt[1]),Gt(Lt[3]),Gt(Lt[1]),Gt(Lt[2]),Gt(Lt[3])}function ae(J){r.push(c[J*3+0]),r.push(c[J*3+1]),r.push(c[J*3+2])}function Gt(J){s.push(J.x),s.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Eg(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];i.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Ca[r.type]().fromJSON(r)),new Dl(i,t.options)}}const bg={generateTopUV:function(n,t,e,i,r){const s=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[r*3],u=t[r*3+1];return[new j(s,a),new j(o,c),new j(l,u)]},generateSideWallUV:function(n,t,e,i,r,s){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],f=t[i*3+2],h=t[r*3],d=t[r*3+1],p=t[r*3+2],S=t[s*3],g=t[s*3+1],m=t[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new j(a,1-c),new j(l,1-f),new j(h,1-p),new j(S,1-m)]:[new j(o,1-c),new j(u,1-f),new j(d,1-p),new j(g,1-m)]}};function Eg(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ul extends Wa{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ul(t.radius,t.detail)}}class gs extends Te{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:r},e=Math.floor(e),r=Yt(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],u=1/e,f=new I,h=new j,d=new I,p=new I,S=new I;let g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-g,d.z=m*0,S.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(S.x,S.y,S.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=S.x,d.y+=S.y,d.z+=S.z,d.normalize(),c.push(d.x,d.y,d.z),S.copy(p)}for(let y=0;y<=e;y++){const M=i+y*u*r,x=Math.sin(M),w=Math.cos(M);for(let A=0;A<=t.length-1;A++){f.x=t[A].x*x,f.y=t[A].y,f.z=t[A].x*w,a.push(f.x,f.y,f.z),h.x=y/e,h.y=A/(t.length-1),o.push(h.x,h.y);const C=c[3*A+0]*x,_=c[3*A+1],b=c[3*A+0]*w;l.push(C,_,b)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){const x=M+y*t.length,w=x,A=x+t.length,C=x+t.length+1,_=x+1;s.push(w,A,_),s.push(C,_,A)}this.setIndex(s),this.setAttribute("position",new ue(a,3)),this.setAttribute("uv",new ue(o,2)),this.setAttribute("normal",new ue(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.points,t.segments,t.phiStart,t.phiLength)}}class Nl extends Wa{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Nl(t.radius,t.detail)}}class fi extends Te{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=t/o,h=e/c,d=[],p=[],S=[],g=[];for(let m=0;m<u;m++){const y=m*h-a;for(let M=0;M<l;M++){const x=M*f-s;p.push(x,-y,0),S.push(0,0,1),g.push(M/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){const M=y+l*m,x=y+l*(m+1),w=y+1+l*(m+1),A=y+1+l*m;d.push(M,x,A),d.push(x,w,A)}this.setIndex(d),this.setAttribute("position",new ue(p,3)),this.setAttribute("normal",new ue(S,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fl extends Te{constructor(t=new Hf(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,c=new I,l=new j;let u=new I;const f=[],h=[],d=[],p=[];S(),this.setIndex(p),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function S(){for(let M=0;M<e;M++)g(M);g(s===!1?e:0),y(),m()}function g(M){u=t.getPointAt(M/e,u);const x=a.normals[M],w=a.binormals[M];for(let A=0;A<=r;A++){const C=A/r*Math.PI*2,_=Math.sin(C),b=-Math.cos(C);c.x=b*x.x+_*w.x,c.y=b*x.y+_*w.y,c.z=b*x.z+_*w.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+i*c.x,o.y=u.y+i*c.y,o.z=u.z+i*c.z,f.push(o.x,o.y,o.z)}}function m(){for(let M=1;M<=e;M++)for(let x=1;x<=r;x++){const w=(r+1)*(M-1)+(x-1),A=(r+1)*M+(x-1),C=(r+1)*M+x,_=(r+1)*(M-1)+x;p.push(w,A,_),p.push(A,C,_)}}function y(){for(let M=0;M<=e;M++)for(let x=0;x<=r;x++)l.x=M/e,l.y=x/r,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Fl(new Ca[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function vr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Be(n){const t={};for(let e=0;e<n.length;e++){const i=vr(n[e]);for(const r in i)t[r]=i[r]}return t}function Tg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Jf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const wg={clone:vr,merge:Be};var Ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ag,this.fragmentShader=Cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vr(t.uniforms),this.uniformsGroups=Tg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Rg extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kf extends Ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pg extends Kf{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Oi extends Ui{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=fl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ig extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lg extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Js(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Dg(n){function t(r,s){return n[r]-n[s]}const e=n.length,i=new Array(e);for(let r=0;r!==e;++r)i[r]=r;return i.sort(t),i}function Ju(n,t,e){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=e[s]*t;for(let c=0;c!==t;++c)r[a++]=n[o+c]}return r}function Qf(n,t,e,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push(...a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=n[r++];while(s!==void 0)}class _s{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,r=e[i],s=e[i-1];t:{e:{let a;n:{i:if(!(t<r)){for(let o=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=e[++i],t<r)break e}a=e.length;break n}if(!(t>=s)){const o=e[1];t<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=e[--i-1],t>=s)break e}a=i,i=0;break n}break t}for(;i<a;){const o=i+a>>>1;t<e[o]?a=o:i=o+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let a=0;a!==r;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ug extends _s{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ar,endingEnd:ar}}intervalChanged_(t,e,i){const r=this.parameterPositions;let s=t-2,a=t+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case or:s=t,o=2*e-i;break;case ba:s=r.length-2,o=e+r[s]-r[s+1];break;default:s=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case or:a=t,c=2*i-e;break;case ba:a=1,c=i+r[1]-r[0];break;default:a=t-1,c=e}const l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(i-e)/(r-e),S=p*p,g=S*p,m=-h*g+2*h*S-h*p,y=(1+h)*g+(-1.5-2*h)*S+(-.5+h)*p+1,M=(-1-d)*g+(1.5+d)*S+.5*p,x=d*g-d*S;for(let w=0;w!==o;++w)s[w]=m*a[u+w]+y*a[l+w]+M*a[c+w]+x*a[f+w];return s}}class td extends _s{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(i-e)/(r-e),f=1-u;for(let h=0;h!==o;++h)s[h]=a[l+h]*f+a[c+h]*u;return s}}class Ng extends _s{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class Fg extends _s{interpolate_(t,e,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.settings||this.DefaultSettings_,f=u.inTangents,h=u.outTangents;if(!f||!h){const S=(i-e)/(r-e),g=1-S;for(let m=0;m!==o;++m)s[m]=a[l+m]*g+a[c+m]*S;return s}const d=o*2,p=t-1;for(let S=0;S!==o;++S){const g=a[l+S],m=a[c+S],y=p*d+S*2,M=h[y],x=h[y+1],w=t*d+S*2,A=f[w],C=f[w+1];let _=(i-e)/(r-e),b,F,P,U,z;for(let H=0;H<8;H++){b=_*_,F=b*_,P=1-_,U=P*P,z=U*P;const k=z*e+3*U*_*M+3*P*b*A+F*r-i;if(Math.abs(k)<1e-10)break;const O=3*U*(M-e)+6*P*_*(A-M)+3*b*(r-A);if(Math.abs(O)<1e-10)break;_=_-k/O,_=Math.max(0,Math.min(1,_))}s[S]=z*g+3*U*_*x+3*P*b*C+F*m}return s}}class pe{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Js(e,this.TimeBufferType),this.values=Js(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Js(t.times,Array),values:Js(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ng(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new td(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ug(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new Fg(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case Ma:e=this.InterpolantFactoryMethodDiscrete;break;case An:e=this.InterpolantFactoryMethodLinear;break;case ai:e=this.InterpolantFactoryMethodSmooth;break;case xu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Dt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return An;case this.InterpolantFactoryMethodSmooth:return ai;case this.InterpolantFactoryMethodBezier:return xu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,r=this.values,s=i.length;s===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const c=i[o];if(typeof c=="number"&&isNaN(c)){Ot("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Ot("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(r!==void 0&&em(r))for(let o=0,c=r.length;o!==c;++o){const l=r[o];if(isNaN(l)){Ot("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ai,s=t.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(r)c=!0;else{const f=o*i,h=f-i,d=f+i;for(let p=0;p!==i;++p){const S=e[f+p];if(S!==e[h+p]||S!==e[d+p]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const f=o*i,h=a*i;for(let d=0;d!==i;++d)e[h+d]=e[f+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}pe.prototype.ValueTypeName="";pe.prototype.TimeBufferType=Float32Array;pe.prototype.ValueBufferType=Float32Array;pe.prototype.DefaultInterpolation=An;class Er extends pe{constructor(t,e,i){super(t,e,i)}}Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=Ma;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;class ed extends pe{constructor(t,e,i,r){super(t,e,i,r)}}ed.prototype.ValueTypeName="color";class Ra extends pe{constructor(t,e,i,r){super(t,e,i,r)}}Ra.prototype.ValueTypeName="number";class Og extends _s{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(r-e);let l=t*o;for(let u=l+o;l!==u;l+=4)Cn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Xa extends pe{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new Og(this.times,this.values,this.getValueSize(),t)}}Xa.prototype.ValueTypeName="quaternion";Xa.prototype.InterpolantFactoryMethodSmooth=void 0;class Tr extends pe{constructor(t,e,i){super(t,e,i)}}Tr.prototype.ValueTypeName="string";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=Ma;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Pa extends pe{constructor(t,e,i,r){super(t,e,i,r)}}Pa.prototype.ValueTypeName="vector";class _n{constructor(t="",e=-1,i=[],r=xl){this.name=t,this.tracks=i,this.duration=e,this.blendMode=r,this.uuid=an(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,r=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(zg(i[a]).scale(r));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],i=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,a=i.length;s!==a;++s)e.push(pe.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(t,e,i,r){const s=e.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=Dg(c);c=Ju(c,1,u),l=Ju(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Ra(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const r=t;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===e)return i[r];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],u=l.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(l)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],e,i));return a}static parseAnimation(t,e){if(Dt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Ot("AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,p,S){if(d.length!==0){const g=[],m=[];Qf(d,g,m,p),g.length!==0&&S.push(new f(h,g,m))}},r=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let f=0;f<l.length;f++){const h=l[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let p;for(p=0;p<h.length;p++)if(h[p].morphTargets)for(let S=0;S<h[p].morphTargets.length;S++)d[h[p].morphTargets[S]]=-1;for(const S in d){const g=[],m=[];for(let y=0;y!==h[p].morphTargets.length;++y){const M=h[p];g.push(M.time),m.push(M.morphTarget===S?1:0)}r.push(new Ra(".morphTargetInfluence["+S+"]",g,m))}c=d.length*a}else{const d=".bones["+e[f].name+"]";i(Pa,d+".position",h,"pos",r),i(Xa,d+".quaternion",h,"rot",r),i(Pa,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,c,r,o)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,r=t.length;i!==r;++i){const s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Bg(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ra;case"vector":case"vector2":case"vector3":case"vector4":return Pa;case"color":return ed;case"quaternion":return Xa;case"bool":case"boolean":return Er;case"string":return Tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function zg(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Bg(n.type);if(n.times===void 0){const e=[],i=[];Qf(n.keys,e,i,"value"),n.times=e,n.values=i}return t.parse!==void 0?t.parse(n):new t(n.name,n.times,n.values,n.interpolation)}const Uo={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(Ku(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!Ku(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Ku(n){try{const t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class kg{constructor(t,e,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],p=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Vg=new kg;class Ol{constructor(t){this.manager=t!==void 0?t:Vg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ol.DEFAULT_MATERIAL_NAME="__DEFAULT";const er=new WeakMap;class Gg extends Ol{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Uo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let f=er.get(a);f===void 0&&(f=[],er.set(a,f)),f.push({onLoad:e,onError:r})}return a}const o=rs("img");function c(){u(),e&&e(this);const f=er.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}er.delete(this),s.manager.itemEnd(t)}function l(f){u(),r&&r(f),Uo.remove(`image:${t}`);const h=er.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onError&&p.onError(f)}er.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Uo.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class Hg extends Ol{constructor(t){super(t)}load(t,e,i,r){const s=new Ie,a=new Gg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class nd extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Wg extends nd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const No=new Jt,Qu=new I,th=new I;class Xg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qu),th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(th),e.updateMatrixWorld(),No.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===is||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(No)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ks=new I,Qs=new Cn,Sn=new I;class id extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ks,Qs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ks,Qs,Sn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Ks,Qs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ks,Qs,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ii=new I,eh=new j,nh=new j;class nn extends id{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ss*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($r*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Bl extends id{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class qg extends Xg{constructor(){super(new Bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yg extends nd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new qg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const nr=-90,ir=1;class $g extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(nr,ir,t,e);r.layers=this.layers,this.add(r);const s=new nn(nr,ir,t,e);s.layers=this.layers,this.add(s);const a=new nn(nr,ir,t,e);a.layers=this.layers,this.add(a);const o=new nn(nr,ir,t,e);o.layers=this.layers,this.add(o);const c=new nn(nr,ir,t,e);c.layers=this.layers,this.add(c);const l=new nn(nr,ir,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===En)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===is)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class jg extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class rd{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Zg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Zg(){this._document.hidden===!1&&this.reset()}class Jg{constructor(t,e,i){this.binding=t,this.valueSize=i;let r,s,a;switch(e){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,r=this.valueSize,s=t*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)i[s+o]=i[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(i,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,r,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,r=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(i,r,c,1-s,e)}a>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(i[c]!==i[c+e]){o.setValue(i,r);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,r=i*this._origIndex;t.getValue(e,r);for(let s=i,a=r;s!==a;++s)e[s]=e[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,r,s){if(r>=.5)for(let a=0;a!==s;++a)t[e+a]=t[i+a]}_slerp(t,e,i,r){Cn.slerpFlat(t,e,t,e,t,i,r)}_slerpAdditive(t,e,i,r,s){const a=this._workIndex*s;Cn.multiplyQuaternionsFlat(t,a,t,e,t,i),Cn.slerpFlat(t,e,t,e,t,a,r)}_lerp(t,e,i,r,s){const a=1-r;for(let o=0;o!==s;++o){const c=e+o;t[c]=t[c]*a+t[i+o]*r}}_lerpAdditive(t,e,i,r,s){for(let a=0;a!==s;++a){const o=e+a;t[o]=t[o]+t[i+a]*r}}}const zl="\\[\\]\\.:\\/",Kg=new RegExp("["+zl+"]","g"),kl="[^"+zl+"]",Qg="[^"+zl.replace("\\.","")+"]",t0=/((?:WC+[\/:])*)/.source.replace("WC",kl),e0=/(WCOD+)?/.source.replace("WCOD",Qg),n0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),i0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),r0=new RegExp("^"+t0+e0+n0+i0+"$"),s0=["material","materials","bones","map"];class a0{constructor(t,e,i){const r=i||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class re{constructor(t,e,i){this.path=e,this.parsedPath=i||re.parseTrackName(e),this.node=re.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new re.Composite(t,e,i):new re(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kg,"")}static parseTrackName(t){const e=r0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);s0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const c=i(o.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,r=e.propertyName;let s=e.propertyIndex;if(t||(t=re.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[r];if(a===void 0){const l=e.nodeName;Ot("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}re.Composite=a0;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class o0{constructor(t,e,i=null,r=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=r;const s=e.tracks,a=s.length,o=new Array(a),c={endingStart:ar,endingEnd:ar};for(let l=0;l!==a;++l){const u=s[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Va,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i=!1){if(t.fadeOut(e),this.fadeIn(e),i===!0){const r=this._clip.duration,s=t._clip.duration,a=s/r,o=r/s;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,i=!1){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const r=this._mixer,s=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+i,l[0]=t/a,l[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,r){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*i;c<0||i===0?e=0:(this._startTime=null,e=i*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Xp:for(let u=0,f=c.length;u!==f;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case xl:default:for(let u=0,f=c.length;u!==f;++u)c[u].evaluate(a),l[u].accumulate(r,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(t)[0];e*=r,t>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(t)[0];e*=r,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let r=this.time+t,s=this._loopCount;const a=i===Wp;if(t===0)return s===-1?r:a&&(s&1)===1?e-r:r;if(i===Cf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(r>=e)r=e;else if(r<0)r=0;else{this.time=r;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=e||r<0){const o=Math.floor(r/e);r-=e*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=t>0?e:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(s&1)===1)return e-r}return r}_setEndings(t,e,i){const r=this._interpolantSettings;i?(r.endingStart=or,r.endingEnd=or):(t?r.endingStart=this.zeroSlopeAtStart?or:ar:r.endingStart=ba,e?r.endingEnd=this.zeroSlopeAtEnd?or:ar:r.endingEnd=ba)}_scheduleFading(t,e,i){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=e,o[1]=s+t,c[1]=i,this}}const c0=new Float32Array(1);class sd extends Di{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const i=t._localRoot||this._root,r=t._clip.tracks,s=r.length,a=t._propertyBindings,o=t._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let f=0;f!==s;++f){const h=r[f],d=h.name;let p=u[d];if(p!==void 0)++p.referenceCount,a[f]=p;else{if(p=a[f],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}const S=e&&e._propertyBindings[f].binding.parsedPath;p=new Jg(re.create(i,d,S),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),a[f]=p}o[f].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,r=t._clip.uuid,s=this._actionsByClip[r];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,r,i)}const e=t._propertyBindings;for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,r=e.length;i!==r;++i){const s=e[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const r=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=r.length,r.push(t),a.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],r=t._cacheIndex;i._cacheIndex=r,e[r]=i,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const f=o.actionByRoot,h=(t._localRoot||this._root).uuid;delete f[h],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,r=e.length;i!==r;++i){const s=e[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,r=this._nActiveActions++,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=i,e[i]=s}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,r=--this._nActiveActions,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=i,e[i]=s}_addInactiveBinding(t,e,i){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[e];a===void 0&&(a={},r[e]=a),a[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,r=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[r],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,r=this._nActiveBindings++,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=i,e[i]=s}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,r=--this._nActiveBindings,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=i,e[i]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new td(new Float32Array(2),new Float32Array(2),1,c0),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,r=--this._nActiveControlInterpolants,s=e[r];t.__cacheIndex=r,e[r]=t,s.__cacheIndex=i,e[i]=s}clipAction(t,e,i){const r=e||this._root,s=r.uuid;let a=typeof t=="string"?_n.findByName(r,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let l=null;if(i===void 0&&(a!==null?i=a.blendMode:i=xl),c!==void 0){const f=c.actionByRoot[s];if(f!==void 0&&f.blendMode===i)return f;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new o0(this,a,e,i);return this._bindAction(u,l),this._addInactiveAction(u,o,s),u}existingAction(t,e){const i=e||this._root,r=i.uuid,s=typeof t=="string"?_n.findByName(i,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,r=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==i;++l)e[l]._update(r,t,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,f=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,f._cacheIndex=u,e[u]=f,e.pop(),this._removeInactiveBindingsForAction(l)}delete r[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const r=this._bindingsByRootAndName,s=r[e];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const ih=new j;class jn{constructor(t=new j(1/0,1/0),e=new j(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ih.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ih).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}function rh(n,t,e,i){const r=l0(i);switch(e){case Tf:return n*t;case Af:return n*t/r.components*r.byteLength;case gl:return n*t/r.components*r.byteLength;case mr:return n*t*2/r.components*r.byteLength;case _l:return n*t*2/r.components*r.byteLength;case wf:return n*t*3/r.components*r.byteLength;case sn:return n*t*4/r.components*r.byteLength;case vl:return n*t*4/r.components*r.byteLength;case ca:case la:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dc:case mc:return Math.max(n,16)*Math.max(t,8)/4;case fc:case pc:return Math.max(n,8)*Math.max(t,8)/2;case gc:case _c:case xc:case yc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vc:case Sc:case Mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Fc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Oc:case Bc:case zc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case kc:case Vc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Gc:case Hc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l0(n){switch(n){case Qe:case Sf:return{byteLength:1,components:1};case es:case Mf:case qn:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case Pn:case dl:case mn:return{byteLength:4,components:1};case bf:case Ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);function ad(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function u0(n){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){const p=f[h],S=f[d];S.start<=p.start+p.count+1?p.count=Math.max(p.count,S.start+S.count-p.start):(++h,f[h]=S)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){const S=f[d];n.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,E0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,T0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,F0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,i_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,r_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,l_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,__=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,y_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,A_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,k_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Y_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,j_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_v=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Av=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Iv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:h0,alphahash_pars_fragment:f0,alphamap_fragment:d0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:_0,aomap_pars_fragment:v0,batching_pars_vertex:x0,batching_vertex:y0,begin_vertex:S0,beginnormal_vertex:M0,bsdfs:b0,iridescence_fragment:E0,bumpmap_pars_fragment:T0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:C0,clipping_planes_vertex:R0,color_fragment:P0,color_pars_fragment:I0,color_pars_vertex:L0,color_vertex:D0,common:U0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:F0,displacementmap_pars_vertex:O0,displacementmap_vertex:B0,emissivemap_fragment:z0,emissivemap_pars_fragment:k0,colorspace_fragment:V0,colorspace_pars_fragment:G0,envmap_fragment:H0,envmap_common_pars_fragment:W0,envmap_pars_fragment:X0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:i_,envmap_vertex:Y0,fog_vertex:$0,fog_pars_vertex:j0,fog_fragment:Z0,fog_pars_fragment:J0,gradientmap_pars_fragment:K0,lightmap_pars_fragment:Q0,lights_lambert_fragment:t_,lights_lambert_pars_fragment:e_,lights_pars_begin:n_,lights_toon_fragment:r_,lights_toon_pars_fragment:s_,lights_phong_fragment:a_,lights_phong_pars_fragment:o_,lights_physical_fragment:c_,lights_physical_pars_fragment:l_,lights_fragment_begin:u_,lights_fragment_maps:h_,lights_fragment_end:f_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:p_,logdepthbuf_pars_vertex:m_,logdepthbuf_vertex:g_,map_fragment:__,map_pars_fragment:v_,map_particle_fragment:x_,map_particle_pars_fragment:y_,metalnessmap_fragment:S_,metalnessmap_pars_fragment:M_,morphinstance_vertex:b_,morphcolor_vertex:E_,morphnormal_vertex:T_,morphtarget_pars_vertex:w_,morphtarget_vertex:A_,normal_fragment_begin:C_,normal_fragment_maps:R_,normal_pars_fragment:P_,normal_pars_vertex:I_,normal_vertex:L_,normalmap_pars_fragment:D_,clearcoat_normal_fragment_begin:U_,clearcoat_normal_fragment_maps:N_,clearcoat_pars_fragment:F_,iridescence_pars_fragment:O_,opaque_fragment:B_,packing:z_,premultiplied_alpha_fragment:k_,project_vertex:V_,dithering_fragment:G_,dithering_pars_fragment:H_,roughnessmap_fragment:W_,roughnessmap_pars_fragment:X_,shadowmap_pars_fragment:q_,shadowmap_pars_vertex:Y_,shadowmap_vertex:$_,shadowmask_pars_fragment:j_,skinbase_vertex:Z_,skinning_pars_vertex:J_,skinning_vertex:K_,skinnormal_vertex:Q_,specularmap_fragment:tv,specularmap_pars_fragment:ev,tonemapping_fragment:nv,tonemapping_pars_fragment:iv,transmission_fragment:rv,transmission_pars_fragment:sv,uv_pars_fragment:av,uv_pars_vertex:ov,uv_vertex:cv,worldpos_vertex:lv,background_vert:uv,background_frag:hv,backgroundCube_vert:fv,backgroundCube_frag:dv,cube_vert:pv,cube_frag:mv,depth_vert:gv,depth_frag:_v,distance_vert:vv,distance_frag:xv,equirect_vert:yv,equirect_frag:Sv,linedashed_vert:Mv,linedashed_frag:bv,meshbasic_vert:Ev,meshbasic_frag:Tv,meshlambert_vert:wv,meshlambert_frag:Av,meshmatcap_vert:Cv,meshmatcap_frag:Rv,meshnormal_vert:Pv,meshnormal_frag:Iv,meshphong_vert:Lv,meshphong_frag:Dv,meshphysical_vert:Uv,meshphysical_frag:Nv,meshtoon_vert:Fv,meshtoon_frag:Ov,points_vert:Bv,points_frag:zv,shadow_vert:kv,shadow_frag:Vv,sprite_vert:Gv,sprite_frag:Hv},ft={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},bn={basic:{uniforms:Be([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Be([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Be([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Be([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Be([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new kt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Be([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Be([ft.points,ft.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Be([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Be([ft.common,ft.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Be([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Be([ft.sprite,ft.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:Be([ft.common,ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:Be([ft.lights,ft.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};bn.physical={uniforms:Be([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const ta={r:0,b:0,g:0},xi=new gn,Wv=new Jt;function Xv(n,t,e,i,r,s){const a=new kt(0);let o=r===!0?0:1,c,l,u=null,f=0,h=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const x=y.backgroundBlurriness>0;M=t.get(M,x)}return M}function p(y){let M=!1;const x=d(y);x===null?g(a,o):x&&x.isColor&&(g(x,1),M=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(y,M){const x=d(M);x&&(x.isCubeTexture||x.mapping===ka)?(l===void 0&&(l=new Zt(new Ni(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:vr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),xi.copy(M.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(xi)),l.material.toneMapped=Kt.getTransfer(x.colorSpace)!==ne,(u!==x||f!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Zt(new fi(2,2),new In({name:"BackgroundMaterial",uniforms:vr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(x.colorSpace)!==ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,M){y.getRGB(ta,Jf(n)),e.buffers.color.setClear(ta.r,ta.g,ta.b,M,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:S,dispose:m}}function qv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(P,U,z,H,B){let k=!1;const O=f(P,H,z,U);s!==O&&(s=O,l(s.object)),k=d(P,H,z,B),k&&p(P,H,z,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,x(P,U,z,H),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function f(P,U,z,H){const B=H.wireframe===!0;let k=i[U.id];k===void 0&&(k={},i[U.id]=k);const O=P.isInstancedMesh===!0?P.id:0;let it=k[O];it===void 0&&(it={},k[O]=it);let Q=it[z.id];Q===void 0&&(Q={},it[z.id]=Q);let mt=Q[B];return mt===void 0&&(mt=h(c()),Q[B]=mt),mt}function h(P){const U=[],z=[],H=[];for(let B=0;B<e;B++)U[B]=0,z[B]=0,H[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:H,object:P,attributes:{},index:null}}function d(P,U,z,H){const B=s.attributes,k=U.attributes;let O=0;const it=z.getAttributes();for(const Q in it)if(it[Q].location>=0){const _t=B[Q];let gt=k[Q];if(gt===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(gt=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(gt=P.instanceColor)),_t===void 0||_t.attribute!==gt||gt&&_t.data!==gt.data)return!0;O++}return s.attributesNum!==O||s.index!==H}function p(P,U,z,H){const B={},k=U.attributes;let O=0;const it=z.getAttributes();for(const Q in it)if(it[Q].location>=0){let _t=k[Q];_t===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(_t=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(_t=P.instanceColor));const gt={};gt.attribute=_t,_t&&_t.data&&(gt.data=_t.data),B[Q]=gt,O++}s.attributes=B,s.attributesNum=O,s.index=H}function S(){const P=s.newAttributes;for(let U=0,z=P.length;U<z;U++)P[U]=0}function g(P){m(P,0)}function m(P,U){const z=s.newAttributes,H=s.enabledAttributes,B=s.attributeDivisors;z[P]=1,H[P]===0&&(n.enableVertexAttribArray(P),H[P]=1),B[P]!==U&&(n.vertexAttribDivisor(P,U),B[P]=U)}function y(){const P=s.newAttributes,U=s.enabledAttributes;for(let z=0,H=U.length;z<H;z++)U[z]!==P[z]&&(n.disableVertexAttribArray(z),U[z]=0)}function M(P,U,z,H,B,k,O){O===!0?n.vertexAttribIPointer(P,U,z,B,k):n.vertexAttribPointer(P,U,z,H,B,k)}function x(P,U,z,H){S();const B=H.attributes,k=z.getAttributes(),O=U.defaultAttributeValues;for(const it in k){const Q=k[it];if(Q.location>=0){let mt=B[it];if(mt===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(mt=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(mt=P.instanceColor)),mt!==void 0){const _t=mt.normalized,gt=mt.itemSize,Bt=t.get(mt);if(Bt===void 0)continue;const te=Bt.buffer,se=Bt.type,$=Bt.bytesPerElement,at=se===n.INT||se===n.UNSIGNED_INT||mt.gpuType===dl;if(mt.isInterleavedBufferAttribute){const ot=mt.data,Ut=ot.stride,It=mt.offset;if(ot.isInstancedInterleavedBuffer){for(let zt=0;zt<Q.locationSize;zt++)m(Q.location+zt,ot.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let zt=0;zt<Q.locationSize;zt++)g(Q.location+zt);n.bindBuffer(n.ARRAY_BUFFER,te);for(let zt=0;zt<Q.locationSize;zt++)M(Q.location+zt,gt/Q.locationSize,se,_t,Ut*$,(It+gt/Q.locationSize*zt)*$,at)}else{if(mt.isInstancedBufferAttribute){for(let ot=0;ot<Q.locationSize;ot++)m(Q.location+ot,mt.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ot=0;ot<Q.locationSize;ot++)g(Q.location+ot);n.bindBuffer(n.ARRAY_BUFFER,te);for(let ot=0;ot<Q.locationSize;ot++)M(Q.location+ot,gt/Q.locationSize,se,_t,gt*$,gt/Q.locationSize*ot*$,at)}}else if(O!==void 0){const _t=O[it];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(Q.location,_t);break;case 3:n.vertexAttrib3fv(Q.location,_t);break;case 4:n.vertexAttrib4fv(Q.location,_t);break;default:n.vertexAttrib1fv(Q.location,_t)}}}}y()}function w(){b();for(const P in i){const U=i[P];for(const z in U){const H=U[z];for(const B in H){const k=H[B];for(const O in k)u(k[O].object),delete k[O];delete H[B]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;const U=i[P.id];for(const z in U){const H=U[z];for(const B in H){const k=H[B];for(const O in k)u(k[O].object),delete k[O];delete H[B]}}delete i[P.id]}function C(P){for(const U in i){const z=i[U];for(const H in z){const B=z[H];if(B[P.id]===void 0)continue;const k=B[P.id];for(const O in k)u(k[O].object),delete k[O];delete B[P.id]}}}function _(P){for(const U in i){const z=i[U],H=P.isInstancedMesh===!0?P.id:0,B=z[H];if(B!==void 0){for(const k in B){const O=B[k];for(const it in O)u(O[it].object),delete O[it];delete B[k]}delete z[H],Object.keys(z).length===0&&delete i[U]}}}function b(){F(),a=!0,s!==r&&(s=r,l(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:F,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:g,disableUnusedAttributes:y}}function Yv(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function a(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),e.update(u,i,f))}function o(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let d=0;for(let p=0;p<f;p++)d+=u[p];e.update(d,i,1)}function c(l,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)a(l[p],u[p],h[p]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,f);let p=0;for(let S=0;S<f;S++)p+=u[S]*h[S];e.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $v(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==sn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Qe&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==mn&&!_)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Dt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:S,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,maxSamples:w,samples:A}}function jv(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Si,o=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const p=f.clippingPlanes,S=f.clipIntersection,g=f.clipShadows,m=n.get(f);if(!r||p===null||p.length===0||s&&!g)s?u(null):l();else{const y=s?0:i,M=y*4;let x=m.clippingState||null;c.value=x,x=u(p,h,M,d);for(let w=0;w!==M;++w)x[w]=e[w];m.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,p){const S=f!==null?f.length:0;let g=null;if(S!==0){if(g=c.value,p!==!0||g===null){const m=d+S*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,x=d;M!==S;++M,x+=4)a.copy(f[M]).applyMatrix4(y,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}const si=4,sh=[.125,.215,.35,.446,.526,.582],bi=20,Zv=256,Fr=new Bl,ah=new kt;let Fo=null,Oo=0,Bo=0,zo=!1;const Jv=new I;class oh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=Jv}=s;Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo,Oo,Bo),this._renderer.xr.enabled=zo,t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:qn,format:sn,colorSpace:gr,depthBuffer:!1},r=ch(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Kv(s)),this._blurMaterial=tx(s,t,e),this._ggxMaterial=Qv(s,t,e)}return r}_compileMaterial(t){const e=new Zt(new Te,t);this._renderer.compile(e,Fr)}_sceneToCubeUV(t,e,i,r,s){const c=new nn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(ah),f.toneMapping=wn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new Ni,new Ha({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let m=!1;const y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,m=!0):(g.color.copy(ah),m=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[M],s.y,s.z)):x===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[M]));const w=this._cubeSize;rr(r,x*w,M>2?w:0,w,w),f.setRenderTarget(r),m&&f.render(S,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Pi||t.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;rr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Fr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,d=f*h,{_lodMax:p}=this,S=this._sizeLods[i],g=3*S*(i>p-si?i-p+si:0),m=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=p-e,rr(s,g,m,3*S,2*S),r.setRenderTarget(s),r.render(o,Fr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=p-i,rr(t,g,m,3*S,2*S),r.setRenderTarget(t),r.render(o,Fr)}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const h=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*bi-1),S=s/p,g=isFinite(s)?1+Math.floor(u*S):bi;g>bi&&Dt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bi}`);const m=[];let y=0;for(let C=0;C<bi;++C){const _=C/S,b=Math.exp(-_*_/2);m.push(b),C===0?y+=b:C<g&&(y+=2*b)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=p,h.mipInt.value=M-i;const x=this._sizeLods[r],w=3*x*(r>M-si?r-M+si:0),A=4*(this._cubeSize-x);rr(e,w,A,3*x,2*x),c.setRenderTarget(e),c.render(f,Fr)}}function Kv(n){const t=[],e=[],i=[];let r=n;const s=n-si+1+sh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-si?c=sh[a-n+si-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,p=6,S=3,g=2,m=1,y=new Float32Array(S*p*d),M=new Float32Array(g*p*d),x=new Float32Array(m*p*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,_=A>2?0:-1,b=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];y.set(b,S*p*A),M.set(h,g*p*A);const F=[A,A,A,A,A,A];x.set(F,m*p*A)}const w=new Te;w.setAttribute("position",new Ye(y,S)),w.setAttribute("uv",new Ye(M,g)),w.setAttribute("faceIndex",new Ye(x,m)),i.push(new Zt(w,null)),r>si&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function ch(n,t,e){const i=new Rn(n,t,e);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Qv(n,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function tx(n,t,e){const i=new Float32Array(bi),r=new I(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function lh(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function uh(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function qa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class od extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Of(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ni(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:Hn});s.uniforms.tEquirect.value=e;const a=new Zt(r,s),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=Fe),new $g(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function ex(n){let t=new WeakMap,e=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===no||d===io)if(t.has(h)){const p=t.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const S=new od(p.height);return S.fromEquirectangularTexture(n,h),t.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,p=d===no||d===io,S=d===Pi||d===pr;if(p||S){let g=e.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new oh(n)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||S&&y&&c(y)?(i===null&&(i=new oh(n)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===no?h.mapping=Pi:d===io&&(h.mapping=pr),h}function c(h){let d=0;const p=6;for(let S=0;S<p;S++)h[S]!==void 0&&d++;return d===p}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function nx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&wa("WebGLRenderer: "+i+" extension not supported."),r}}}function ix(n,t,e,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,p=f.attributes.position;let S=0;if(p===void 0)return;if(d!==null){const y=d.array;S=d.version;for(let M=0,x=y.length;M<x;M+=3){const w=y[M+0],A=y[M+1],C=y[M+2];h.push(w,A,A,C,C,w)}}else{const y=p.array;S=p.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const w=M+0,A=M+1,C=M+2;h.push(w,A,A,C,C,w)}}const g=new(p.count>=65535?Df:wl)(h,1);g.version=S;const m=s.get(f);m&&t.remove(m),s.set(f,g)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function rx(n,t,e){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,d){n.drawElements(i,d,s,h*a),e.update(d,i,1)}function l(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,s,h*a,p),e.update(d,i,p))}function u(h,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,i,1)}function f(h,d,p,S){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)l(h[m]/a,d[m],S[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,S,0,p);let m=0;for(let y=0;y<p;y++)m+=d[y]*S[y];e.update(m,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function sx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:Ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function ax(n,t,e){const i=new WeakMap,r=new de;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let F=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",F)};var d=F;h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),S===!0&&(x=2),g===!0&&(x=3);let w=o.attributes.position.count*x,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const C=new Float32Array(w*A*4*f),_=new Pf(C,w,A,f);_.type=mn,_.needsUpdate=!0;const b=x*4;for(let P=0;P<f;P++){const U=m[P],z=y[P],H=M[P],B=w*A*4*P;for(let k=0;k<U.count;k++){const O=k*b;p===!0&&(r.fromBufferAttribute(U,k),C[B+O+0]=r.x,C[B+O+1]=r.y,C[B+O+2]=r.z,C[B+O+3]=0),S===!0&&(r.fromBufferAttribute(z,k),C[B+O+4]=r.x,C[B+O+5]=r.y,C[B+O+6]=r.z,C[B+O+7]=0),g===!0&&(r.fromBufferAttribute(H,k),C[B+O+8]=r.x,C[B+O+9]=r.y,C[B+O+10]=r.z,C[B+O+11]=H.itemSize===4?r.w:1)}}h={count:f,texture:_,size:new j(w,A)},i.set(o,h),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const S=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function ox(n,t,e,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const cx={[df]:"LINEAR_TONE_MAPPING",[pf]:"REINHARD_TONE_MAPPING",[mf]:"CINEON_TONE_MAPPING",[gf]:"ACES_FILMIC_TONE_MAPPING",[vf]:"AGX_TONE_MAPPING",[xf]:"NEUTRAL_TONE_MAPPING",[_f]:"CUSTOM_TONE_MAPPING"};function lx(n,t,e,i,r){const s=new Rn(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Rn(t,e,{type:qn,depthBuffer:!1,stencilBuffer:!1}),o=new Te;o.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ue([0,2,0,0,2,0],2));const c=new Rg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Zt(o,c),u=new Bl(-1,1,1,-1,0,1);let f=null,h=null,d=!1,p,S=null,g=[],m=!1;this.setSize=function(y,M){s.setSize(y,M),a.setSize(y,M);for(let x=0;x<g.length;x++){const w=g[x];w.setSize&&w.setSize(y,M)}},this.setEffects=function(y){g=y,m=g.length>0&&g[0].isRenderPass===!0;const M=s.width,x=s.height;for(let w=0;w<g.length;w++){const A=g[w];A.setSize&&A.setSize(M,x)}},this.begin=function(y,M){if(d||y.toneMapping===wn&&g.length===0)return!1;if(S=M,M!==null){const x=M.width,w=M.height;(s.width!==x||s.height!==w)&&this.setSize(x,w)}return m===!1&&y.setRenderTarget(s),p=y.toneMapping,y.toneMapping=wn,!0},this.hasRenderPass=function(){return m},this.end=function(y,M){y.toneMapping=p,d=!0;let x=s,w=a;for(let A=0;A<g.length;A++){const C=g[A];if(C.enabled!==!1&&(C.render(y,w,x,M),C.needsSwap!==!1)){const _=x;x=w,w=_}}if(f!==y.outputColorSpace||h!==y.toneMapping){f=y.outputColorSpace,h=y.toneMapping,c.defines={},Kt.getTransfer(f)===ne&&(c.defines.SRGB_TRANSFER="");const A=cx[h];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=x.texture,y.setRenderTarget(S),y.render(l,u),S=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const cd=new Ie,$c=new as(1,1),ld=new Pf,ud=new Am,hd=new Of,hh=[],fh=[],dh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function wr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=hh[r];if(s===void 0&&(s=new Float32Array(r),hh[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ya(n,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ux(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function hx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function fx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function px(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;mh.set(i),n.uniformMatrix2fv(this.addr,!1,mh),Ee(e,i)}}function mx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;ph.set(i),n.uniformMatrix3fv(this.addr,!1,ph),Ee(e,i)}}function gx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;dh.set(i),n.uniformMatrix4fv(this.addr,!1,dh),Ee(e,i)}}function _x(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function vx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function xx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function Sx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function Ex(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function Tx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?($c.compareFunction=e.isReversedDepthBuffer()?Ml:Sl,s=$c):s=cd,e.setTexture2D(t||s,r)}function wx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||ud,r)}function Ax(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||hd,r)}function Cx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||ld,r)}function Rx(n){switch(n){case 5126:return ux;case 35664:return hx;case 35665:return fx;case 35666:return dx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return _x;case 35667:case 35671:return vx;case 35668:case 35672:return xx;case 35669:case 35673:return yx;case 5125:return Sx;case 36294:return Mx;case 36295:return bx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Cx}}function Px(n,t){n.uniform1fv(this.addr,t)}function Ix(n,t){const e=wr(t,this.size,2);n.uniform2fv(this.addr,e)}function Lx(n,t){const e=wr(t,this.size,3);n.uniform3fv(this.addr,e)}function Dx(n,t){const e=wr(t,this.size,4);n.uniform4fv(this.addr,e)}function Ux(n,t){const e=wr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Nx(n,t){const e=wr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Fx(n,t){const e=wr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ox(n,t){n.uniform1iv(this.addr,t)}function Bx(n,t){n.uniform2iv(this.addr,t)}function zx(n,t){n.uniform3iv(this.addr,t)}function kx(n,t){n.uniform4iv(this.addr,t)}function Vx(n,t){n.uniform1uiv(this.addr,t)}function Gx(n,t){n.uniform2uiv(this.addr,t)}function Hx(n,t){n.uniform3uiv(this.addr,t)}function Wx(n,t){n.uniform4uiv(this.addr,t)}function Xx(n,t,e){const i=this.cache,r=t.length,s=Ya(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=$c:a=cd;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function qx(n,t,e){const i=this.cache,r=t.length,s=Ya(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||ud,s[a])}function Yx(n,t,e){const i=this.cache,r=t.length,s=Ya(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||hd,s[a])}function $x(n,t,e){const i=this.cache,r=t.length,s=Ya(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ld,s[a])}function jx(n){switch(n){case 5126:return Px;case 35664:return Ix;case 35665:return Lx;case 35666:return Dx;case 35674:return Ux;case 35675:return Nx;case 35676:return Fx;case 5124:case 35670:return Ox;case 35667:case 35671:return Bx;case 35668:case 35672:return zx;case 35669:case 35673:return kx;case 5125:return Vx;case 36294:return Gx;case 36295:return Hx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return $x}}class Zx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Rx(e.type)}}class Jx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jx(e.type)}}class Kx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function gh(n,t){n.seq.push(t),n.map[t.id]=t}function Qx(n,t,e){const i=n.name,r=i.length;for(ko.lastIndex=0;;){const s=ko.exec(i),a=ko.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){gh(e,l===void 0?new Zx(o,n,t):new Jx(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Kx(o),gh(e,f)),e=f}}}class fa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Qx(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function _h(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const ty=37297;let ey=0;function ny(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const vh=new Wt;function iy(n){Kt._getMatrix(vh,Kt.workingColorSpace,n);const t=`mat3( ${vh.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(n)){case Ea:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function xh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+ny(n.getShaderSource(t),o)}else return s}function ry(n,t){const e=iy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const sy={[df]:"Linear",[pf]:"Reinhard",[mf]:"Cineon",[gf]:"ACESFilmic",[vf]:"AgX",[xf]:"Neutral",[_f]:"Custom"};function ay(n,t){const e=sy[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ea=new I;function oy(){Kt.getLuminanceCoefficients(ea);const n=ea.x.toFixed(4),t=ea.y.toFixed(4),e=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function ly(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function uy(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Wr(n){return n!==""}function yh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(n){return n.replace(hy,dy)}const fy=new Map;function dy(n,t){let e=qt[t];if(e===void 0){const i=fy.get(t);if(i!==void 0)e=qt[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return jc(e)}const py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(n){return n.replace(py,my)}function my(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const gy={[oa]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function _y(n){return gy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vy={[Pi]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE",[ka]:"ENVMAP_TYPE_CUBE_UV"};function xy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":vy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const yy={[pr]:"ENVMAP_MODE_REFRACTION"};function Sy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const My={[fl]:"ENVMAP_BLENDING_MULTIPLY",[kp]:"ENVMAP_BLENDING_MIX",[Vp]:"ENVMAP_BLENDING_ADD"};function by(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":My[n.combine]||"ENVMAP_BLENDING_NONE"}function Ey(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ty(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=_y(e),l=xy(e),u=Sy(e),f=by(e),h=Ey(e),d=cy(e),p=ly(s),S=r.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Wr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Wr).join(`
`),m.length>0&&(m+=`
`)):(g=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),m=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?qt.tonemapping_pars_fragment:"",e.toneMapping!==wn?ay("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,ry("linearToOutputTexel",e.outputColorSpace),oy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),a=jc(a),a=yh(a,e),a=Sh(a,e),o=jc(o),o=yh(o,e),o=Sh(o,e),a=Mh(a),o=Mh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=y+g+a,x=y+m+o,w=_h(r,r.VERTEX_SHADER,M),A=_h(r,r.FRAGMENT_SHADER,x);r.attachShader(S,w),r.attachShader(S,A),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(P){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(S)||"",z=r.getShaderInfoLog(w)||"",H=r.getShaderInfoLog(A)||"",B=U.trim(),k=z.trim(),O=H.trim();let it=!0,Q=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,w,A);else{const mt=xh(r,w,"vertex"),_t=xh(r,A,"fragment");Ot("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+mt+`
`+_t)}else B!==""?Dt("WebGLProgram: Program Info Log:",B):(k===""||O==="")&&(Q=!1);Q&&(P.diagnostics={runnable:it,programLog:B,vertexShader:{log:k,prefix:g},fragmentShader:{log:O,prefix:m}})}r.deleteShader(w),r.deleteShader(A),_=new fa(r,S),b=uy(r,S)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(S,ty)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ey++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=A,this}let wy=0;class Ay{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Cy(t),e.set(t,i)),i}}class Cy{constructor(t){this.id=wy++,this.code=t,this.usedTimes=0}}function Ry(n,t,e,i,r,s){const a=new If,o=new Ay,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function S(_,b,F,P,U){const z=P.fog,H=U.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=t.get(_.envMap||B,k),it=O&&O.mapping===ka?O.image.height:null,Q=d[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Dt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_t=mt!==void 0?mt.length:0;let gt=0;H.morphAttributes.position!==void 0&&(gt=1),H.morphAttributes.normal!==void 0&&(gt=2),H.morphAttributes.color!==void 0&&(gt=3);let Bt,te,se,$;if(Q){const ee=bn[Q];Bt=ee.vertexShader,te=ee.fragmentShader}else Bt=_.vertexShader,te=_.fragmentShader,o.update(_),se=o.getVertexShaderID(_),$=o.getFragmentShaderID(_);const at=n.getRenderTarget(),ot=n.state.buffers.depth.getReversed(),Ut=U.isInstancedMesh===!0,It=U.isBatchedMesh===!0,zt=!!_.map,ae=!!_.matcap,Gt=!!O,J=!!_.aoMap,et=!!_.lightMap,K=!!_.bumpMap,ht=!!_.normalMap,R=!!_.displacementMap,Lt=!!_.emissiveMap,vt=!!_.metalnessMap,Nt=!!_.roughnessMap,ct=_.anisotropy>0,T=_.clearcoat>0,v=_.dispersion>0,D=_.iridescence>0,X=_.sheen>0,Z=_.transmission>0,q=ct&&!!_.anisotropyMap,Mt=T&&!!_.clearcoatMap,lt=T&&!!_.clearcoatNormalMap,Rt=T&&!!_.clearcoatRoughnessMap,Ft=D&&!!_.iridescenceMap,tt=D&&!!_.iridescenceThicknessMap,rt=X&&!!_.sheenColorMap,bt=X&&!!_.sheenRoughnessMap,Tt=!!_.specularMap,xt=!!_.specularColorMap,$t=!!_.specularIntensityMap,L=Z&&!!_.transmissionMap,ut=Z&&!!_.thicknessMap,st=!!_.gradientMap,St=!!_.alphaMap,nt=_.alphaTest>0,Y=!!_.alphaHash,Et=!!_.extensions;let Vt=wn;_.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Vt=n.toneMapping);const fe={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Bt,fragmentShader:te,defines:_.defines,customVertexShaderID:se,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:It,batchingColor:It&&U._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&U.instanceColor!==null,instancingMorph:Ut&&U.morphTexture!==null,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:gr,alphaToCoverage:!!_.alphaToCoverage,map:zt,matcap:ae,envMap:Gt,envMapMode:Gt&&O.mapping,envMapCubeUVHeight:it,aoMap:J,lightMap:et,bumpMap:K,normalMap:ht,displacementMap:R,emissiveMap:Lt,normalMapObjectSpace:ht&&_.normalMapType===Yp,normalMapTangentSpace:ht&&_.normalMapType===yl,metalnessMap:vt,roughnessMap:Nt,anisotropy:ct,anisotropyMap:q,clearcoat:T,clearcoatMap:Mt,clearcoatNormalMap:lt,clearcoatRoughnessMap:Rt,dispersion:v,iridescence:D,iridescenceMap:Ft,iridescenceThicknessMap:tt,sheen:X,sheenColorMap:rt,sheenRoughnessMap:bt,specularMap:Tt,specularColorMap:xt,specularIntensityMap:$t,transmission:Z,transmissionMap:L,thicknessMap:ut,gradientMap:st,opaque:_.transparent===!1&&_.blending===lr&&_.alphaToCoverage===!1,alphaMap:St,alphaTest:nt,alphaHash:Y,combine:_.combine,mapUv:zt&&p(_.map.channel),aoMapUv:J&&p(_.aoMap.channel),lightMapUv:et&&p(_.lightMap.channel),bumpMapUv:K&&p(_.bumpMap.channel),normalMapUv:ht&&p(_.normalMap.channel),displacementMapUv:R&&p(_.displacementMap.channel),emissiveMapUv:Lt&&p(_.emissiveMap.channel),metalnessMapUv:vt&&p(_.metalnessMap.channel),roughnessMapUv:Nt&&p(_.roughnessMap.channel),anisotropyMapUv:q&&p(_.anisotropyMap.channel),clearcoatMapUv:Mt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:lt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:bt&&p(_.sheenRoughnessMap.channel),specularMapUv:Tt&&p(_.specularMap.channel),specularColorMapUv:xt&&p(_.specularColorMap.channel),specularIntensityMapUv:$t&&p(_.specularIntensityMap.channel),transmissionMapUv:L&&p(_.transmissionMap.channel),thicknessMapUv:ut&&p(_.thicknessMap.channel),alphaMapUv:St&&p(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ht||ct),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(zt||St),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&ht===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ot,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:gt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Vt,decodeVideoTexture:zt&&_.map.isVideoTexture===!0&&Kt.getTransfer(_.map.colorSpace)===ne,decodeVideoTextureEmissive:Lt&&_.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(_.emissiveMap.colorSpace)===ne,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ke,flipSided:_.side===qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Et&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&_.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function g(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)b.push(F),b.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(m(b,_),y(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),_.push(a.mask)}function M(_){const b=d[_.type];let F;if(b){const P=bn[b];F=wg.clone(P.uniforms)}else F=_.uniforms;return F}function x(_,b){let F=u.get(b);return F!==void 0?++F.usedTimes:(F=new Ty(n,b,_,r),l.push(F),u.set(b,F)),F}function w(_){if(--_.usedTimes===0){const b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:M,acquireProgram:x,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:C}}function Py(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Iy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Eh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Th(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,p,S,g,m){let y=n[t];return y===void 0?(y={id:h.id,object:h,geometry:d,material:p,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:g,group:m},n[t]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=p,y.materialVariant=a(h),y.groupOrder=S,y.renderOrder=h.renderOrder,y.z=g,y.group=m),t++,y}function c(h,d,p,S,g,m){const y=o(h,d,p,S,g,m);p.transmission>0?i.push(y):p.transparent===!0?r.push(y):e.push(y)}function l(h,d,p,S,g,m){const y=o(h,d,p,S,g,m);p.transmission>0?i.unshift(y):p.transparent===!0?r.unshift(y):e.unshift(y)}function u(h,d){e.length>1&&e.sort(h||Iy),i.length>1&&i.sort(d||Eh),r.length>1&&r.sort(d||Eh)}function f(){for(let h=t,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function Ly(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Th,n.set(i,[a])):r>=s.length?(a=new Th,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Dy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new kt};break;case"SpotLight":e={position:new I,direction:new I,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Uy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Ny=0;function Fy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Oy(n){const t=new Dy,e=Uy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const r=new I,s=new Jt,a=new Jt;function o(l){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,p=0,S=0,g=0,m=0,y=0,M=0,x=0,w=0,A=0,C=0;l.sort(Fy);for(let b=0,F=l.length;b<F;b++){const P=l[b],U=P.color,z=P.intensity,H=P.distance;let B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===mr?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=U.r*z,f+=U.g*z,h+=U.b*z;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],z);C++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,it=e.get(P);it.shadowIntensity=O.intensity,it.shadowBias=O.bias,it.shadowNormalBias=O.normalBias,it.shadowRadius=O.radius,it.shadowMapSize=O.mapSize,i.directionalShadow[d]=it,i.directionalShadowMap[d]=B,i.directionalShadowMatrix[d]=P.shadow.matrix,y++}i.directional[d]=k,d++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(U).multiplyScalar(z),k.distance=H,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[S]=k;const O=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,O.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[S]=O.matrix,P.castShadow){const it=e.get(P);it.shadowIntensity=O.intensity,it.shadowBias=O.bias,it.shadowNormalBias=O.normalBias,it.shadowRadius=O.radius,it.shadowMapSize=O.mapSize,i.spotShadow[S]=it,i.spotShadowMap[S]=B,x++}S++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(U).multiplyScalar(z),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=k,g++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const O=P.shadow,it=e.get(P);it.shadowIntensity=O.intensity,it.shadowBias=O.bias,it.shadowNormalBias=O.normalBias,it.shadowRadius=O.radius,it.shadowMapSize=O.mapSize,it.shadowCameraNear=O.camera.near,it.shadowCameraFar=O.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=B,i.pointShadowMatrix[p]=P.shadow.matrix,M++}i.point[p]=k,p++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(z),k.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[m]=k,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const _=i.hash;(_.directionalLength!==d||_.pointLength!==p||_.spotLength!==S||_.rectAreaLength!==g||_.hemiLength!==m||_.numDirectionalShadows!==y||_.numPointShadows!==M||_.numSpotShadows!==x||_.numSpotMaps!==w||_.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=S,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,_.directionalLength=d,_.pointLength=p,_.spotLength=S,_.rectAreaLength=g,_.hemiLength=m,_.numDirectionalShadows=y,_.numPointShadows=M,_.numSpotShadows=x,_.numSpotMaps=w,_.numLightProbes=C,i.version=Ny++)}function c(l,u){let f=0,h=0,d=0,p=0,S=0;const g=u.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const M=l[m];if(M.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),f++}else if(M.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),a.identity(),s.copy(M.matrixWorld),s.premultiply(g),a.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){const x=i.hemi[S];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),S++}}}return{setup:o,setupView:c,state:i}}function wh(n){const t=new Oy(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function By(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new wh(n),t.set(r,[o])):s>=a.length?(o=new wh(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ky=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Vy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Gy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Ah=new Jt,Or=new I,Vo=new I;function Hy(n,t,e){let i=new Rl;const r=new j,s=new j,a=new de,o=new Ig,c=new Lg,l={},u=e.maxTextureSize,f={[ci]:qe,[qe]:ci,[Ke]:Ke},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:zy,fragmentShader:ky}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new Te;p.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Zt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let m=this.type;this.render=function(A,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Sp&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=oa);const b=n.getRenderTarget(),F=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Hn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=m!==this.type;z&&C.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(B=>B.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,B=A.length;H<B;H++){const k=A[H],O=k.shadow;if(O===void 0){Dt("WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const it=O.getFrameExtents();r.multiply(it),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/it.x),r.x=s.x*it.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/it.y),r.y=s.y*it.y,O.mapSize.y=s.y));const Q=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Q,O.map===null||z===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Gr){if(k.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Rn(r.x,r.y,{format:mr,type:qn,minFilter:Fe,magFilter:Fe,generateMipmaps:!1}),O.map.texture.name=k.name+".shadowMap",O.map.depthTexture=new as(r.x,r.y,mn),O.map.depthTexture.name=k.name+".shadowMapDepth",O.map.depthTexture.format=Yn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Pe,O.map.depthTexture.magFilter=Pe}else k.isPointLight?(O.map=new od(r.x),O.map.depthTexture=new $m(r.x,Pn)):(O.map=new Rn(r.x,r.y),O.map.depthTexture=new as(r.x,r.y,Pn)),O.map.depthTexture.name=k.name+".shadowMap",O.map.depthTexture.format=Yn,this.type===oa?(O.map.depthTexture.compareFunction=Q?Ml:Sl,O.map.depthTexture.minFilter=Fe,O.map.depthTexture.magFilter=Fe):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Pe,O.map.depthTexture.magFilter=Pe);O.camera.updateProjectionMatrix()}const mt=O.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<mt;_t++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,_t),n.clear();else{_t===0&&(n.setRenderTarget(O.map),n.clear());const gt=O.getViewport(_t);a.set(s.x*gt.x,s.y*gt.y,s.x*gt.z,s.y*gt.w),U.viewport(a)}if(k.isPointLight){const gt=O.camera,Bt=O.matrix,te=k.distance||gt.far;te!==gt.far&&(gt.far=te,gt.updateProjectionMatrix()),Or.setFromMatrixPosition(k.matrixWorld),gt.position.copy(Or),Vo.copy(gt.position),Vo.add(Vy[_t]),gt.up.copy(Gy[_t]),gt.lookAt(Vo),gt.updateMatrixWorld(),Bt.makeTranslation(-Or.x,-Or.y,-Or.z),Ah.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ah,gt.coordinateSystem,gt.reversedDepth)}else O.updateMatrices(k);i=O.getFrustum(),x(C,_,O.camera,k,this.type)}O.isPointLightShadow!==!0&&this.type===Gr&&y(O,_),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,F,P)};function y(A,C){const _=t.update(S);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Rn(r.x,r.y,{format:mr,type:qn})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,_,h,S,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,_,d,S,null)}function M(A,C,_,b){let F=null;const P=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)F=P;else if(F=_.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=F.uuid,z=C.uuid;let H=l[U];H===void 0&&(H={},l[U]=H);let B=H[z];B===void 0&&(B=F.clone(),H[z]=B,C.addEventListener("dispose",w)),F=B}if(F.visible=C.visible,F.wireframe=C.wireframe,b===Gr?F.side=C.shadowSide!==null?C.shadowSide:C.side:F.side=C.shadowSide!==null?C.shadowSide:f[C.side],F.alphaMap=C.alphaMap,F.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,F.map=C.map,F.clipShadows=C.clipShadows,F.clippingPlanes=C.clippingPlanes,F.clipIntersection=C.clipIntersection,F.displacementMap=C.displacementMap,F.displacementScale=C.displacementScale,F.displacementBias=C.displacementBias,F.wireframeLinewidth=C.wireframeLinewidth,F.linewidth=C.linewidth,_.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const U=n.properties.get(F);U.light=_}return F}function x(A,C,_,b,F){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===Gr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const z=t.update(A),H=A.material;if(Array.isArray(H)){const B=z.groups;for(let k=0,O=B.length;k<O;k++){const it=B[k],Q=H[it.materialIndex];if(Q&&Q.visible){const mt=M(A,Q,b,F);A.onBeforeShadow(n,A,C,_,z,mt,it),n.renderBufferDirect(_,null,z,mt,A,it),A.onAfterShadow(n,A,C,_,z,mt,it)}}}else if(H.visible){const B=M(A,H,b,F);A.onBeforeShadow(n,A,C,_,z,B,null),n.renderBufferDirect(_,null,z,B,A,null),A.onAfterShadow(n,A,C,_,z,B,null)}}const U=A.children;for(let z=0,H=U.length;z<H;z++)x(U[z],C,_,b,F)}function w(A){A.target.removeEventListener("dispose",w);for(const _ in l){const b=l[_],F=A.target.uuid;F in b&&(b[F].dispose(),delete b[F])}}}function Wy(n,t){function e(){let L=!1;const ut=new de;let st=null;const St=new de(0,0,0,0);return{setMask:function(nt){st!==nt&&!L&&(n.colorMask(nt,nt,nt,nt),st=nt)},setLocked:function(nt){L=nt},setClear:function(nt,Y,Et,Vt,fe){fe===!0&&(nt*=Vt,Y*=Vt,Et*=Vt),ut.set(nt,Y,Et,Vt),St.equals(ut)===!1&&(n.clearColor(nt,Y,Et,Vt),St.copy(ut))},reset:function(){L=!1,st=null,St.set(-1,0,0,0)}}}function i(){let L=!1,ut=!1,st=null,St=null,nt=null;return{setReversed:function(Y){if(ut!==Y){const Et=t.get("EXT_clip_control");Y?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ut=Y;const Vt=nt;nt=null,this.setClear(Vt)}},getReversed:function(){return ut},setTest:function(Y){Y?at(n.DEPTH_TEST):ot(n.DEPTH_TEST)},setMask:function(Y){st!==Y&&!L&&(n.depthMask(Y),st=Y)},setFunc:function(Y){if(ut&&(Y=rm[Y]),St!==Y){switch(Y){case ic:n.depthFunc(n.NEVER);break;case rc:n.depthFunc(n.ALWAYS);break;case sc:n.depthFunc(n.LESS);break;case dr:n.depthFunc(n.LEQUAL);break;case ac:n.depthFunc(n.EQUAL);break;case oc:n.depthFunc(n.GEQUAL);break;case cc:n.depthFunc(n.GREATER);break;case lc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=Y}},setLocked:function(Y){L=Y},setClear:function(Y){nt!==Y&&(nt=Y,ut&&(Y=1-Y),n.clearDepth(Y))},reset:function(){L=!1,st=null,St=null,nt=null,ut=!1}}}function r(){let L=!1,ut=null,st=null,St=null,nt=null,Y=null,Et=null,Vt=null,fe=null;return{setTest:function(ee){L||(ee?at(n.STENCIL_TEST):ot(n.STENCIL_TEST))},setMask:function(ee){ut!==ee&&!L&&(n.stencilMask(ee),ut=ee)},setFunc:function(ee,Un,Nn){(st!==ee||St!==Un||nt!==Nn)&&(n.stencilFunc(ee,Un,Nn),st=ee,St=Un,nt=Nn)},setOp:function(ee,Un,Nn){(Y!==ee||Et!==Un||Vt!==Nn)&&(n.stencilOp(ee,Un,Nn),Y=ee,Et=Un,Vt=Nn)},setLocked:function(ee){L=ee},setClear:function(ee){fe!==ee&&(n.clearStencil(ee),fe=ee)},reset:function(){L=!1,ut=null,st=null,St=null,nt=null,Y=null,Et=null,Vt=null,fe=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,S=!1,g=null,m=null,y=null,M=null,x=null,w=null,A=null,C=new kt(0,0,0),_=0,b=!1,F=null,P=null,U=null,z=null,H=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,O=0;const it=n.getParameter(n.VERSION);it.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(it)[1]),k=O>=1):it.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),k=O>=2);let Q=null,mt={};const _t=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),Bt=new de().fromArray(_t),te=new de().fromArray(gt);function se(L,ut,st,St){const nt=new Uint8Array(4),Y=n.createTexture();n.bindTexture(L,Y),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<st;Et++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,nt):n.texImage2D(ut+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,nt);return Y}const $={};$[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(n.DEPTH_TEST),a.setFunc(dr),K(!1),ht(pu),at(n.CULL_FACE),J(Hn);function at(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ot(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ut(L,ut){return f[L]!==ut?(n.bindFramebuffer(L,ut),f[L]=ut,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ut),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function It(L,ut){let st=d,St=!1;if(L){st=h.get(ut),st===void 0&&(st=[],h.set(ut,st));const nt=L.textures;if(st.length!==nt.length||st[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,Et=nt.length;Y<Et;Y++)st[Y]=n.COLOR_ATTACHMENT0+Y;st.length=nt.length,St=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,St=!0);St&&n.drawBuffers(st)}function zt(L){return p!==L?(n.useProgram(L),p=L,!0):!1}const ae={[Mi]:n.FUNC_ADD,[bp]:n.FUNC_SUBTRACT,[Ep]:n.FUNC_REVERSE_SUBTRACT};ae[Tp]=n.MIN,ae[wp]=n.MAX;const Gt={[Ap]:n.ZERO,[Cp]:n.ONE,[Rp]:n.SRC_COLOR,[ec]:n.SRC_ALPHA,[Np]:n.SRC_ALPHA_SATURATE,[Dp]:n.DST_COLOR,[Ip]:n.DST_ALPHA,[Pp]:n.ONE_MINUS_SRC_COLOR,[nc]:n.ONE_MINUS_SRC_ALPHA,[Up]:n.ONE_MINUS_DST_COLOR,[Lp]:n.ONE_MINUS_DST_ALPHA,[Fp]:n.CONSTANT_COLOR,[Op]:n.ONE_MINUS_CONSTANT_COLOR,[Bp]:n.CONSTANT_ALPHA,[zp]:n.ONE_MINUS_CONSTANT_ALPHA};function J(L,ut,st,St,nt,Y,Et,Vt,fe,ee){if(L===Hn){S===!0&&(ot(n.BLEND),S=!1);return}if(S===!1&&(at(n.BLEND),S=!0),L!==Mp){if(L!==g||ee!==b){if((m!==Mi||x!==Mi)&&(n.blendEquation(n.FUNC_ADD),m=Mi,x=Mi),ee)switch(L){case lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mu:n.blendFunc(n.ONE,n.ONE);break;case gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _u:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ot("WebGLState: Invalid blending: ",L);break}else switch(L){case lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gu:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _u:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",L);break}y=null,M=null,w=null,A=null,C.set(0,0,0),_=0,g=L,b=ee}return}nt=nt||ut,Y=Y||st,Et=Et||St,(ut!==m||nt!==x)&&(n.blendEquationSeparate(ae[ut],ae[nt]),m=ut,x=nt),(st!==y||St!==M||Y!==w||Et!==A)&&(n.blendFuncSeparate(Gt[st],Gt[St],Gt[Y],Gt[Et]),y=st,M=St,w=Y,A=Et),(Vt.equals(C)===!1||fe!==_)&&(n.blendColor(Vt.r,Vt.g,Vt.b,fe),C.copy(Vt),_=fe),g=L,b=!1}function et(L,ut){L.side===Ke?ot(n.CULL_FACE):at(n.CULL_FACE);let st=L.side===qe;ut&&(st=!st),K(st),L.blending===lr&&L.transparent===!1?J(Hn):J(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const St=L.stencilWrite;o.setTest(St),St&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Lt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(L){F!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),F=L)}function ht(L){L!==xp?(at(n.CULL_FACE),L!==P&&(L===pu?n.cullFace(n.BACK):L===yp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ot(n.CULL_FACE),P=L}function R(L){L!==U&&(k&&n.lineWidth(L),U=L)}function Lt(L,ut,st){L?(at(n.POLYGON_OFFSET_FILL),(z!==ut||H!==st)&&(z=ut,H=st,a.getReversed()&&(ut=-ut),n.polygonOffset(ut,st))):ot(n.POLYGON_OFFSET_FILL)}function vt(L){L?at(n.SCISSOR_TEST):ot(n.SCISSOR_TEST)}function Nt(L){L===void 0&&(L=n.TEXTURE0+B-1),Q!==L&&(n.activeTexture(L),Q=L)}function ct(L,ut,st){st===void 0&&(Q===null?st=n.TEXTURE0+B-1:st=Q);let St=mt[st];St===void 0&&(St={type:void 0,texture:void 0},mt[st]=St),(St.type!==L||St.texture!==ut)&&(Q!==st&&(n.activeTexture(st),Q=st),n.bindTexture(L,ut||$[L]),St.type=L,St.texture=ut)}function T(){const L=mt[Q];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function X(){try{n.texSubImage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function Z(){try{n.texSubImage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function lt(){try{n.texStorage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function Rt(){try{n.texStorage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function Ft(){try{n.texImage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function tt(){try{n.texImage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function rt(L){Bt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Bt.copy(L))}function bt(L){te.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),te.copy(L))}function Tt(L,ut){let st=l.get(ut);st===void 0&&(st=new WeakMap,l.set(ut,st));let St=st.get(L);St===void 0&&(St=n.getUniformBlockIndex(ut,L.name),st.set(L,St))}function xt(L,ut){const St=l.get(ut).get(L);c.get(ut)!==St&&(n.uniformBlockBinding(ut,St,L.__bindingPointIndex),c.set(ut,St))}function $t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,mt={},f={},h=new WeakMap,d=[],p=null,S=!1,g=null,m=null,y=null,M=null,x=null,w=null,A=null,C=new kt(0,0,0),_=0,b=!1,F=null,P=null,U=null,z=null,H=null,Bt.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:at,disable:ot,bindFramebuffer:Ut,drawBuffers:It,useProgram:zt,setBlending:J,setMaterial:et,setFlipSided:K,setCullFace:ht,setLineWidth:R,setPolygonOffset:Lt,setScissorTest:vt,activeTexture:Nt,bindTexture:ct,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:D,texImage2D:Ft,texImage3D:tt,updateUBOMapping:Tt,uniformBlockBinding:xt,texStorage2D:lt,texStorage3D:Rt,texSubImage2D:X,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:Mt,scissor:rt,viewport:bt,reset:$t}}function Xy(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new j,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,v){return d?new OffscreenCanvas(T,v):rs("canvas")}function S(T,v,D){let X=1;const Z=ct(T);if((Z.width>D||Z.height>D)&&(X=D/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(X*Z.width),Mt=Math.floor(X*Z.height);f===void 0&&(f=p(q,Mt));const lt=v?p(q,Mt):f;return lt.width=q,lt.height=Mt,lt.getContext("2d").drawImage(T,0,0,q,Mt),Dt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+Mt+")."),lt}else return"data"in T&&Dt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function g(T){return T.generateMipmaps}function m(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,v,D,X,Z=!1){if(T!==null){if(n[T]!==void 0)return n[T];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=v;if(v===n.RED&&(D===n.FLOAT&&(q=n.R32F),D===n.HALF_FLOAT&&(q=n.R16F),D===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(q=n.R8UI),D===n.UNSIGNED_SHORT&&(q=n.R16UI),D===n.UNSIGNED_INT&&(q=n.R32UI),D===n.BYTE&&(q=n.R8I),D===n.SHORT&&(q=n.R16I),D===n.INT&&(q=n.R32I)),v===n.RG&&(D===n.FLOAT&&(q=n.RG32F),D===n.HALF_FLOAT&&(q=n.RG16F),D===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(q=n.RG8UI),D===n.UNSIGNED_SHORT&&(q=n.RG16UI),D===n.UNSIGNED_INT&&(q=n.RG32UI),D===n.BYTE&&(q=n.RG8I),D===n.SHORT&&(q=n.RG16I),D===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(q=n.RGB8UI),D===n.UNSIGNED_SHORT&&(q=n.RGB16UI),D===n.UNSIGNED_INT&&(q=n.RGB32UI),D===n.BYTE&&(q=n.RGB8I),D===n.SHORT&&(q=n.RGB16I),D===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),D===n.UNSIGNED_INT&&(q=n.RGBA32UI),D===n.BYTE&&(q=n.RGBA8I),D===n.SHORT&&(q=n.RGBA16I),D===n.INT&&(q=n.RGBA32I)),v===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),v===n.RGBA){const Mt=Z?Ea:Kt.getTransfer(X);D===n.FLOAT&&(q=n.RGBA32F),D===n.HALF_FLOAT&&(q=n.RGBA16F),D===n.UNSIGNED_BYTE&&(q=Mt===ne?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(T,v){let D;return T?v===null||v===Pn||v===ns?D=n.DEPTH24_STENCIL8:v===mn?D=n.DEPTH32F_STENCIL8:v===es&&(D=n.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Pn||v===ns?D=n.DEPTH_COMPONENT24:v===mn?D=n.DEPTH_COMPONENT32F:v===es&&(D=n.DEPTH_COMPONENT16),D}function w(T,v){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Pe&&T.minFilter!==Fe?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),_(v),v.isVideoTexture&&u.delete(v)}function C(T){const v=T.target;v.removeEventListener("dispose",C),F(v)}function _(T){const v=i.get(T);if(v.__webglInit===void 0)return;const D=T.source,X=h.get(D);if(X){const Z=X[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(T),Object.keys(X).length===0&&h.delete(D)}i.remove(T)}function b(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const D=T.source,X=h.get(D);delete X[v.__cacheKey],a.memory.textures--}function F(T){const v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let Z=0;Z<v.__webglFramebuffer[X].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[X][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=T.textures;for(let X=0,Z=D.length;X<Z;X++){const q=i.get(D[X]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(D[X])}i.remove(T)}let P=0;function U(){P=0}function z(){const T=P;return T>=r.maxTextures&&Dt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),P+=1,T}function H(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function B(T,v){const D=i.get(T);if(T.isVideoTexture&&vt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){const X=T.image;if(X===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{$(D,T,v);return}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+v)}function k(T,v){const D=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){$(D,T,v);return}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+v)}function O(T,v){const D=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){$(D,T,v);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+v)}function it(T,v){const D=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&D.__version!==T.version){at(D,T,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+v)}const Q={[uc]:n.REPEAT,[Vn]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},mt={[Pe]:n.NEAREST,[Hp]:n.NEAREST_MIPMAP_NEAREST,[ws]:n.NEAREST_MIPMAP_LINEAR,[Fe]:n.LINEAR,[ro]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},_t={[$p]:n.NEVER,[Qp]:n.ALWAYS,[jp]:n.LESS,[Sl]:n.LEQUAL,[Zp]:n.EQUAL,[Ml]:n.GEQUAL,[Jp]:n.GREATER,[Kp]:n.NOTEQUAL};function gt(T,v){if(v.type===mn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Fe||v.magFilter===ro||v.magFilter===ws||v.magFilter===wi||v.minFilter===Fe||v.minFilter===ro||v.minFilter===ws||v.minFilter===wi)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Q[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Q[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Q[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,mt[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,_t[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Pe||v.minFilter!==ws&&v.minFilter!==wi||v.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Bt(T,v){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const X=v.source;let Z=h.get(X);Z===void 0&&(Z={},h.set(X,Z));const q=H(v);if(q!==T.__cacheKey){Z[q]===void 0&&(Z[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Z[q].usedTimes++;const Mt=Z[T.__cacheKey];Mt!==void 0&&(Z[T.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(v)),T.__cacheKey=q,T.__webglTexture=Z[q].texture}return D}function te(T,v,D){return Math.floor(Math.floor(T/D)/v)}function se(T,v,D,X){const q=T.updateRanges;if(q.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,D,X,v.data);else{q.sort((tt,rt)=>tt.start-rt.start);let Mt=0;for(let tt=1;tt<q.length;tt++){const rt=q[Mt],bt=q[tt],Tt=rt.start+rt.count,xt=te(bt.start,v.width,4),$t=te(rt.start,v.width,4);bt.start<=Tt+1&&xt===$t&&te(bt.start+bt.count-1,v.width,4)===xt?rt.count=Math.max(rt.count,bt.start+bt.count-rt.start):(++Mt,q[Mt]=bt)}q.length=Mt+1;const lt=n.getParameter(n.UNPACK_ROW_LENGTH),Rt=n.getParameter(n.UNPACK_SKIP_PIXELS),Ft=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let tt=0,rt=q.length;tt<rt;tt++){const bt=q[tt],Tt=Math.floor(bt.start/4),xt=Math.ceil(bt.count/4),$t=Tt%v.width,L=Math.floor(Tt/v.width),ut=xt,st=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,$t),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),e.texSubImage2D(n.TEXTURE_2D,0,$t,L,ut,st,D,X,v.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,lt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Rt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ft)}}function $(T,v,D){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);const Z=Bt(T,v),q=v.source;e.bindTexture(X,T.__webglTexture,n.TEXTURE0+D);const Mt=i.get(q);if(q.version!==Mt.__version||Z===!0){e.activeTexture(n.TEXTURE0+D);const lt=Kt.getPrimaries(Kt.workingColorSpace),Rt=v.colorSpace===ri?null:Kt.getPrimaries(v.colorSpace),Ft=v.colorSpace===ri||lt===Rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let tt=S(v.image,!1,r.maxTextureSize);tt=Nt(v,tt);const rt=s.convert(v.format,v.colorSpace),bt=s.convert(v.type);let Tt=M(v.internalFormat,rt,bt,v.colorSpace,v.isVideoTexture);gt(X,v);let xt;const $t=v.mipmaps,L=v.isVideoTexture!==!0,ut=Mt.__version===void 0||Z===!0,st=q.dataReady,St=w(v,tt);if(v.isDepthTexture)Tt=x(v.format===Ai,v.type),ut&&(L?e.texStorage2D(n.TEXTURE_2D,1,Tt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Tt,tt.width,tt.height,0,rt,bt,null));else if(v.isDataTexture)if($t.length>0){L&&ut&&e.texStorage2D(n.TEXTURE_2D,St,Tt,$t[0].width,$t[0].height);for(let nt=0,Y=$t.length;nt<Y;nt++)xt=$t[nt],L?st&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,xt.width,xt.height,rt,bt,xt.data):e.texImage2D(n.TEXTURE_2D,nt,Tt,xt.width,xt.height,0,rt,bt,xt.data);v.generateMipmaps=!1}else L?(ut&&e.texStorage2D(n.TEXTURE_2D,St,Tt,tt.width,tt.height),st&&se(v,tt,rt,bt)):e.texImage2D(n.TEXTURE_2D,0,Tt,tt.width,tt.height,0,rt,bt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Tt,$t[0].width,$t[0].height,tt.depth);for(let nt=0,Y=$t.length;nt<Y;nt++)if(xt=$t[nt],v.format!==sn)if(rt!==null)if(L){if(st)if(v.layerUpdates.size>0){const Et=rh(xt.width,xt.height,v.format,v.type);for(const Vt of v.layerUpdates){const fe=xt.data.subarray(Vt*Et/xt.data.BYTES_PER_ELEMENT,(Vt+1)*Et/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,Vt,xt.width,xt.height,1,rt,fe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,tt.depth,rt,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,Tt,xt.width,xt.height,tt.depth,0,xt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?st&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,tt.depth,rt,bt,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,Tt,xt.width,xt.height,tt.depth,0,rt,bt,xt.data)}else{L&&ut&&e.texStorage2D(n.TEXTURE_2D,St,Tt,$t[0].width,$t[0].height);for(let nt=0,Y=$t.length;nt<Y;nt++)xt=$t[nt],v.format!==sn?rt!==null?L?st&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,xt.width,xt.height,rt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,Tt,xt.width,xt.height,0,xt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?st&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,xt.width,xt.height,rt,bt,xt.data):e.texImage2D(n.TEXTURE_2D,nt,Tt,xt.width,xt.height,0,rt,bt,xt.data)}else if(v.isDataArrayTexture)if(L){if(ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Tt,tt.width,tt.height,tt.depth),st)if(v.layerUpdates.size>0){const nt=rh(tt.width,tt.height,v.format,v.type);for(const Y of v.layerUpdates){const Et=tt.data.subarray(Y*nt/tt.data.BYTES_PER_ELEMENT,(Y+1)*nt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,tt.width,tt.height,1,rt,bt,Et)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,rt,bt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,tt.width,tt.height,tt.depth,0,rt,bt,tt.data);else if(v.isData3DTexture)L?(ut&&e.texStorage3D(n.TEXTURE_3D,St,Tt,tt.width,tt.height,tt.depth),st&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,rt,bt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,tt.width,tt.height,tt.depth,0,rt,bt,tt.data);else if(v.isFramebufferTexture){if(ut)if(L)e.texStorage2D(n.TEXTURE_2D,St,Tt,tt.width,tt.height);else{let nt=tt.width,Y=tt.height;for(let Et=0;Et<St;Et++)e.texImage2D(n.TEXTURE_2D,Et,Tt,nt,Y,0,rt,bt,null),nt>>=1,Y>>=1}}else if($t.length>0){if(L&&ut){const nt=ct($t[0]);e.texStorage2D(n.TEXTURE_2D,St,Tt,nt.width,nt.height)}for(let nt=0,Y=$t.length;nt<Y;nt++)xt=$t[nt],L?st&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,rt,bt,xt):e.texImage2D(n.TEXTURE_2D,nt,Tt,rt,bt,xt);v.generateMipmaps=!1}else if(L){if(ut){const nt=ct(tt);e.texStorage2D(n.TEXTURE_2D,St,Tt,nt.width,nt.height)}st&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt,bt,tt)}else e.texImage2D(n.TEXTURE_2D,0,Tt,rt,bt,tt);g(v)&&m(X),Mt.__version=q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function at(T,v,D){if(v.image.length!==6)return;const X=Bt(T,v),Z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+D);const q=i.get(Z);if(Z.version!==q.__version||X===!0){e.activeTexture(n.TEXTURE0+D);const Mt=Kt.getPrimaries(Kt.workingColorSpace),lt=v.colorSpace===ri?null:Kt.getPrimaries(v.colorSpace),Rt=v.colorSpace===ri||Mt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Ft=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,rt=[];for(let Y=0;Y<6;Y++)!Ft&&!tt?rt[Y]=S(v.image[Y],!0,r.maxCubemapSize):rt[Y]=tt?v.image[Y].image:v.image[Y],rt[Y]=Nt(v,rt[Y]);const bt=rt[0],Tt=s.convert(v.format,v.colorSpace),xt=s.convert(v.type),$t=M(v.internalFormat,Tt,xt,v.colorSpace),L=v.isVideoTexture!==!0,ut=q.__version===void 0||X===!0,st=Z.dataReady;let St=w(v,bt);gt(n.TEXTURE_CUBE_MAP,v);let nt;if(Ft){L&&ut&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,$t,bt.width,bt.height);for(let Y=0;Y<6;Y++){nt=rt[Y].mipmaps;for(let Et=0;Et<nt.length;Et++){const Vt=nt[Et];v.format!==sn?Tt!==null?L?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Et,0,0,Vt.width,Vt.height,Tt,Vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Et,$t,Vt.width,Vt.height,0,Vt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Et,0,0,Vt.width,Vt.height,Tt,xt,Vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Et,$t,Vt.width,Vt.height,0,Tt,xt,Vt.data)}}}else{if(nt=v.mipmaps,L&&ut){nt.length>0&&St++;const Y=ct(rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,$t,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(tt){L?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,rt[Y].width,rt[Y].height,Tt,xt,rt[Y].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,$t,rt[Y].width,rt[Y].height,0,Tt,xt,rt[Y].data);for(let Et=0;Et<nt.length;Et++){const fe=nt[Et].image[Y].image;L?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Et+1,0,0,fe.width,fe.height,Tt,xt,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Et+1,$t,fe.width,fe.height,0,Tt,xt,fe.data)}}else{L?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Tt,xt,rt[Y]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,$t,Tt,xt,rt[Y]);for(let Et=0;Et<nt.length;Et++){const Vt=nt[Et];L?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Et+1,0,0,Tt,xt,Vt.image[Y]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Et+1,$t,Tt,xt,Vt.image[Y])}}}g(v)&&m(n.TEXTURE_CUBE_MAP),q.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ot(T,v,D,X,Z,q){const Mt=s.convert(D.format,D.colorSpace),lt=s.convert(D.type),Rt=M(D.internalFormat,Mt,lt,D.colorSpace),Ft=i.get(v),tt=i.get(D);if(tt.__renderTarget=v,!Ft.__hasExternalTextures){const rt=Math.max(1,v.width>>q),bt=Math.max(1,v.height>>q);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,Rt,rt,bt,v.depth,0,Mt,lt,null):e.texImage2D(Z,q,Rt,rt,bt,0,Mt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Lt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Z,tt.__webglTexture,0,R(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Z,tt.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(T,v,D){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){const X=v.depthTexture,Z=X&&X.isDepthTexture?X.type:null,q=x(v.stencilBuffer,Z),Mt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Lt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(v),q,v.width,v.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(v),q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,T)}else{const X=v.textures;for(let Z=0;Z<X.length;Z++){const q=X[Z],Mt=s.convert(q.format,q.colorSpace),lt=s.convert(q.type),Rt=M(q.internalFormat,Mt,lt,q.colorSpace);Lt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(v),Rt,v.width,v.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(v),Rt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Rt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(T,v,D){const X=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),gt(n.TEXTURE_CUBE_MAP,v.depthTexture);const Ft=s.convert(v.depthTexture.format),tt=s.convert(v.depthTexture.type);let rt;v.depthTexture.format===Yn?rt=n.DEPTH_COMPONENT24:v.depthTexture.format===Ai&&(rt=n.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,rt,v.width,v.height,0,Ft,tt,null)}}else B(v.depthTexture,0);const q=Z.__webglTexture,Mt=R(v),lt=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,Rt=v.depthTexture.format===Ai?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Yn)Lt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Rt,lt,q,0,Mt):n.framebufferTexture2D(n.FRAMEBUFFER,Rt,lt,q,0);else if(v.depthTexture.format===Ai)Lt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Rt,lt,q,0,Mt):n.framebufferTexture2D(n.FRAMEBUFFER,Rt,lt,q,0);else throw new Error("Unknown depthTexture format")}function zt(T){const v=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=X}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(D)for(let X=0;X<6;X++)It(v.__webglFramebuffer[X],T,X);else{const X=T.texture.mipmaps;X&&X.length>0?It(v.__webglFramebuffer[0],T,0):It(v.__webglFramebuffer,T,0)}else if(D){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),Ut(v.__webglDepthbuffer[X],T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,q)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ut(v.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,q)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(T,v,D){const X=i.get(T);v!==void 0&&ot(X.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&zt(T)}function Gt(T){const v=T.texture,D=i.get(T),X=i.get(v);T.addEventListener("dispose",C);const Z=T.textures,q=T.isWebGLCubeRenderTarget===!0,Mt=Z.length>1;if(Mt||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,a.memory.textures++),q){D.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[lt]=[];for(let Rt=0;Rt<v.mipmaps.length;Rt++)D.__webglFramebuffer[lt][Rt]=n.createFramebuffer()}else D.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)D.__webglFramebuffer[lt]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let lt=0,Rt=Z.length;lt<Rt;lt++){const Ft=i.get(Z[lt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Lt(T)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let lt=0;lt<Z.length;lt++){const Rt=Z[lt];D.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[lt]);const Ft=s.convert(Rt.format,Rt.colorSpace),tt=s.convert(Rt.type),rt=M(Rt.internalFormat,Ft,tt,Rt.colorSpace,T.isXRRenderTarget===!0),bt=R(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,rt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,D.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ut(D.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),gt(n.TEXTURE_CUBE_MAP,v);for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)ot(D.__webglFramebuffer[lt][Rt],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt);else ot(D.__webglFramebuffer[lt],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(v)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let lt=0,Rt=Z.length;lt<Rt;lt++){const Ft=Z[lt],tt=i.get(Ft);let rt=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(rt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,tt.__webglTexture),gt(rt,Ft),ot(D.__webglFramebuffer,T,Ft,n.COLOR_ATTACHMENT0+lt,rt,0),g(Ft)&&m(rt)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,X.__webglTexture),gt(lt,v),v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)ot(D.__webglFramebuffer[Rt],T,v,n.COLOR_ATTACHMENT0,lt,Rt);else ot(D.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,lt,0);g(v)&&m(lt),e.unbindTexture()}T.depthBuffer&&zt(T)}function J(T){const v=T.textures;for(let D=0,X=v.length;D<X;D++){const Z=v[D];if(g(Z)){const q=y(T),Mt=i.get(Z).__webglTexture;e.bindTexture(q,Mt),m(q),e.unbindTexture()}}}const et=[],K=[];function ht(T){if(T.samples>0){if(Lt(T)===!1){const v=T.textures,D=T.width,X=T.height;let Z=n.COLOR_BUFFER_BIT;const q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(T),lt=v.length>1;if(lt)for(let Ft=0;Ft<v.length;Ft++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const Rt=T.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Ft=0;Ft<v.length;Ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[Ft]);const tt=i.get(v[Ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,D,X,0,0,D,X,Z,n.NEAREST),c===!0&&(et.length=0,K.length=0,et.push(n.COLOR_ATTACHMENT0+Ft),T.depthBuffer&&T.resolveDepthBuffer===!1&&(et.push(q),K.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,K)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let Ft=0;Ft<v.length;Ft++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[Ft]);const tt=i.get(v[Ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function R(T){return Math.min(r.maxSamples,T.samples)}function Lt(T){const v=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function vt(T){const v=a.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function Nt(T,v){const D=T.colorSpace,X=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==gr&&D!==ri&&(Kt.getTransfer(D)===ne?(X!==sn||Z!==Qe)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",D)),v}function ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=B,this.setTexture2DArray=k,this.setTexture3D=O,this.setTextureCube=it,this.rebindTextures=ae,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function qy(n,t){function e(i,r=ri){let s;const a=Kt.getTransfer(r);if(i===Qe)return n.UNSIGNED_BYTE;if(i===pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ef)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sf)return n.BYTE;if(i===Mf)return n.SHORT;if(i===es)return n.UNSIGNED_SHORT;if(i===dl)return n.INT;if(i===Pn)return n.UNSIGNED_INT;if(i===mn)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===Tf)return n.ALPHA;if(i===wf)return n.RGB;if(i===sn)return n.RGBA;if(i===Yn)return n.DEPTH_COMPONENT;if(i===Ai)return n.DEPTH_STENCIL;if(i===Af)return n.RED;if(i===gl)return n.RED_INTEGER;if(i===mr)return n.RG;if(i===_l)return n.RG_INTEGER;if(i===vl)return n.RGBA_INTEGER;if(i===ca||i===la||i===ua||i===ha)if(a===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fc||i===dc||i===pc||i===mc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gc||i===_c||i===vc||i===xc||i===yc||i===Sc||i===Mc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gc||i===_c)return a===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===xc)return s.COMPRESSED_R11_EAC;if(i===yc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Sc)return s.COMPRESSED_RG11_EAC;if(i===Mc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bc||i===Ec||i===Tc||i===wc||i===Ac||i===Cc||i===Rc||i===Pc||i===Ic||i===Lc||i===Dc||i===Uc||i===Nc||i===Fc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ec)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ac)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ic)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fc)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oc||i===Bc||i===zc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Oc)return a===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kc||i===Vc||i===Gc||i===Hc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===kc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Yy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$y=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Bf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new In({vertexShader:Yy,fragmentShader:$y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zy extends Di{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,p=null;const S=typeof XRWebGLBinding<"u",g=new jy,m={},y=e.getContextAttributes();let M=null,x=null;const w=[],A=[],C=new j;let _=null;const b=new nn;b.viewport=new de;const F=new nn;F.viewport=new de;const P=[b,F],U=new jg;let z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=w[$];return at===void 0&&(at=new uo,w[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=w[$];return at===void 0&&(at=new uo,w[$]=at),at.getGripSpace()},this.getHand=function($){let at=w[$];return at===void 0&&(at=new uo,w[$]=at),at.getHandSpace()};function B($){const at=A.indexOf($.inputSource);if(at===-1)return;const ot=w[at];ot!==void 0&&(ot.update($.inputSource,$.frame,l||a),ot.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",O);for(let $=0;$<w.length;$++){const at=A[$];at!==null&&(A[$]=null,w[$].disconnect(at))}z=null,H=null,g.reset();for(const $ in m)delete m[$];t.setRenderTarget(M),d=null,h=null,f=null,r=null,x=null,se.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(M=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",k),r.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Ut=null,It=null;y.depth&&(It=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=y.stencil?Ai:Yn,Ut=y.stencil?ns:Pn);const zt={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(zt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new Rn(h.textureWidth,h.textureHeight,{format:sn,type:Qe,depthTexture:new as(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ot={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Rn(d.framebufferWidth,d.framebufferHeight,{format:sn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O($){for(let at=0;at<$.removed.length;at++){const ot=$.removed[at],Ut=A.indexOf(ot);Ut>=0&&(A[Ut]=null,w[Ut].disconnect(ot))}for(let at=0;at<$.added.length;at++){const ot=$.added[at];let Ut=A.indexOf(ot);if(Ut===-1){for(let zt=0;zt<w.length;zt++)if(zt>=A.length){A.push(ot),Ut=zt;break}else if(A[zt]===null){A[zt]=ot,Ut=zt;break}if(Ut===-1)break}const It=w[Ut];It&&It.connect(ot)}}const it=new I,Q=new I;function mt($,at,ot){it.setFromMatrixPosition(at.matrixWorld),Q.setFromMatrixPosition(ot.matrixWorld);const Ut=it.distanceTo(Q),It=at.projectionMatrix.elements,zt=ot.projectionMatrix.elements,ae=It[14]/(It[10]-1),Gt=It[14]/(It[10]+1),J=(It[9]+1)/It[5],et=(It[9]-1)/It[5],K=(It[8]-1)/It[0],ht=(zt[8]+1)/zt[0],R=ae*K,Lt=ae*ht,vt=Ut/(-K+ht),Nt=vt*-K;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Nt),$.translateZ(vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),It[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const ct=ae+vt,T=Gt+vt,v=R-Nt,D=Lt+(Ut-Nt),X=J*Gt/T*ct,Z=et*Gt/T*ct;$.projectionMatrix.makePerspective(v,D,X,Z,ct,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function _t($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let at=$.near,ot=$.far;g.texture!==null&&(g.depthNear>0&&(at=g.depthNear),g.depthFar>0&&(ot=g.depthFar)),U.near=F.near=b.near=at,U.far=F.far=b.far=ot,(z!==U.near||H!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,H=U.far),U.layers.mask=$.layers.mask|6,b.layers.mask=U.layers.mask&-5,F.layers.mask=U.layers.mask&-3;const Ut=$.parent,It=U.cameras;_t(U,Ut);for(let zt=0;zt<It.length;zt++)_t(It[zt],Ut);It.length===2?mt(U,b,F):U.projectionMatrix.copy(b.projectionMatrix),gt($,U,Ut)};function gt($,at,ot){ot===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(ot.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ss*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function($){return m[$]};let Bt=null;function te($,at){if(u=at.getViewerPose(l||a),p=at,u!==null){const ot=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Ut=!1;ot.length!==U.cameras.length&&(U.cameras.length=0,Ut=!0);for(let Gt=0;Gt<ot.length;Gt++){const J=ot[Gt];let et=null;if(d!==null)et=d.getViewport(J);else{const ht=f.getViewSubImage(h,J);et=ht.viewport,Gt===0&&(t.setRenderTargetTextures(x,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(x))}let K=P[Gt];K===void 0&&(K=new nn,K.layers.enable(Gt),K.viewport=new de,P[Gt]=K),K.matrix.fromArray(J.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(J.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(et.x,et.y,et.width,et.height),Gt===0&&(U.matrix.copy(K.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ut===!0&&U.cameras.push(K)}const It=r.enabledFeatures;if(It&&It.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const Gt=f.getDepthInformation(ot[0]);Gt&&Gt.isValid&&Gt.texture&&g.init(Gt,r.renderState)}if(It&&It.includes("camera-access")&&S){t.state.unbindTexture(),f=i.getBinding();for(let Gt=0;Gt<ot.length;Gt++){const J=ot[Gt].camera;if(J){let et=m[J];et||(et=new Bf,m[J]=et);const K=f.getCameraImage(J);et.sourceTexture=K}}}}for(let ot=0;ot<w.length;ot++){const Ut=A[ot],It=w[ot];Ut!==null&&It!==void 0&&It.update(Ut,at,l||a)}Bt&&Bt($,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),p=null}const se=new ad;se.setAnimationLoop(te),this.setAnimationLoop=function($){Bt=$},this.dispose=function(){}}}const yi=new gn,Jy=new Jt;function Ky(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Jf(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,y,M,x){m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),S(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,y,M):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=t.get(m),M=y.envMap,x=y.envMapRotation;M&&(g.envMap.value=M,yi.copy(x),yi.x*=-1,yi.y*=-1,yi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),g.envMapRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(yi)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function S(g,m){const y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Qy(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const x=M.program;i.uniformBlockBinding(y,x)}function l(y,M){let x=r[y.id];x===void 0&&(p(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",g));const w=M.program;i.updateUBOMapping(y,w);const A=t.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){const M=f();y.__bindingPointIndex=M;const x=n.createBuffer(),w=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,w,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=r[y.id],x=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,C=x.length;A<C;A++){const _=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,F=_.length;b<F;b++){const P=_[b];if(d(P,A,b,w)===!0){const U=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let B=0;B<z.length;B++){const k=z[B],O=S(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,U+H,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,H),H+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,M,x,w){const A=y.value,C=M+"_"+x;if(w[C]===void 0)return typeof A=="number"||typeof A=="boolean"?w[C]=A:w[C]=A.clone(),!0;{const _=w[C];if(typeof A=="number"||typeof A=="boolean"){if(_!==A)return w[C]=A,!0}else if(_.equals(A)===!1)return _.copy(A),!0}return!1}function p(y){const M=y.uniforms;let x=0;const w=16;for(let C=0,_=M.length;C<_;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let F=0,P=b.length;F<P;F++){const U=b[F],z=Array.isArray(U.value)?U.value:[U.value];for(let H=0,B=z.length;H<B;H++){const k=z[H],O=S(k),it=x%w,Q=it%O.boundary,mt=it+Q;x+=Q,mt!==0&&w-mt<O.storage&&(x+=w-mt),U.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=O.storage}}}const A=x%w;return A>0&&(x+=w-A),y.__size=x,y.__cache={},this}function S(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Dt("WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){const M=y.target;M.removeEventListener("dispose",g);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:m}}const tS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mn=null;function eS(){return Mn===null&&(Mn=new Ff(tS,16,16,mr,qn),Mn.name="DFG_LUT",Mn.minFilter=Fe,Mn.magFilter=Fe,Mn.wrapS=Vn,Mn.wrapT=Vn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}class nS{constructor(t={}){const{canvas:e=nm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Qe}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const S=d,g=new Set([vl,_l,gl]),m=new Set([Qe,Pn,es,ns,pl,ml]),y=new Uint32Array(4),M=new Int32Array(4);let x=null,w=null;const A=[],C=[];let _=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let F=!1;this._outputColorSpace=ke;let P=0,U=0,z=null,H=-1,B=null;const k=new de,O=new de;let it=null;const Q=new kt(0);let mt=0,_t=e.width,gt=e.height,Bt=1,te=null,se=null;const $=new de(0,0,_t,gt),at=new de(0,0,_t,gt);let ot=!1;const Ut=new Rl;let It=!1,zt=!1;const ae=new Jt,Gt=new I,J=new de,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function ht(){return z===null?Bt:1}let R=i;function Lt(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hl}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",fe,!1),R===null){const N="webgl2";if(R=Lt(N,E),R===null)throw Lt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ot("WebGLRenderer: "+E.message),E}let vt,Nt,ct,T,v,D,X,Z,q,Mt,lt,Rt,Ft,tt,rt,bt,Tt,xt,$t,L,ut,st,St;function nt(){vt=new nx(R),vt.init(),ut=new qy(R,vt),Nt=new $v(R,vt,t,ut),ct=new Wy(R,vt),Nt.reversedDepthBuffer&&h&&ct.buffers.depth.setReversed(!0),T=new sx(R),v=new Py,D=new Xy(R,vt,ct,v,Nt,ut,T),X=new ex(b),Z=new u0(R),st=new qv(R,Z),q=new ix(R,Z,T,st),Mt=new ox(R,q,Z,st,T),xt=new ax(R,Nt,D),rt=new jv(v),lt=new Ry(b,X,vt,Nt,st,rt),Rt=new Ky(b,v),Ft=new Ly,tt=new By(vt),Tt=new Xv(b,X,ct,Mt,p,c),bt=new Hy(b,Mt,Nt),St=new Qy(R,T,Nt,ct),$t=new Yv(R,vt,T),L=new rx(R,vt,T),T.programs=lt.programs,b.capabilities=Nt,b.extensions=vt,b.properties=v,b.renderLists=Ft,b.shadowMap=bt,b.state=ct,b.info=T}nt(),S!==Qe&&(_=new lx(S,e.width,e.height,r,s));const Y=new Zy(b,R);this.xr=Y,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=vt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=vt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Bt},this.setPixelRatio=function(E){E!==void 0&&(Bt=E,this.setSize(_t,gt,!1))},this.getSize=function(E){return E.set(_t,gt)},this.setSize=function(E,N,W=!0){if(Y.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=E,gt=N,e.width=Math.floor(E*Bt),e.height=Math.floor(N*Bt),W===!0&&(e.style.width=E+"px",e.style.height=N+"px"),_!==null&&_.setSize(e.width,e.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(_t*Bt,gt*Bt).floor()},this.setDrawingBufferSize=function(E,N,W){_t=E,gt=N,Bt=W,e.width=Math.floor(E*W),e.height=Math.floor(N*W),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(S===Qe){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,N,W,G){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,N,W,G),ct.viewport(k.copy($).multiplyScalar(Bt).round())},this.getScissor=function(E){return E.copy(at)},this.setScissor=function(E,N,W,G){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,N,W,G),ct.scissor(O.copy(at).multiplyScalar(Bt).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){ct.setScissorTest(ot=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){se=E},this.getClearColor=function(E){return E.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,W=!0){let G=0;if(E){let V=!1;if(z!==null){const dt=z.texture.format;V=g.has(dt)}if(V){const dt=z.texture.type,yt=m.has(dt),pt=Tt.getClearColor(),wt=Tt.getClearAlpha(),Ct=pt.r,Ht=pt.g,jt=pt.b;yt?(y[0]=Ct,y[1]=Ht,y[2]=jt,y[3]=wt,R.clearBufferuiv(R.COLOR,0,y)):(M[0]=Ct,M[1]=Ht,M[2]=jt,M[3]=wt,R.clearBufferiv(R.COLOR,0,M))}else G|=R.COLOR_BUFFER_BIT}N&&(G|=R.DEPTH_BUFFER_BIT),W&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),Tt.dispose(),Ft.dispose(),tt.dispose(),v.dispose(),X.dispose(),Mt.dispose(),st.dispose(),St.dispose(),lt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",au),Y.removeEventListener("sessionend",ou),di.stop()};function Et(E){E.preventDefault(),Ta("WebGLRenderer: Context Lost."),F=!0}function Vt(){Ta("WebGLRenderer: Context Restored."),F=!1;const E=T.autoReset,N=bt.enabled,W=bt.autoUpdate,G=bt.needsUpdate,V=bt.type;nt(),T.autoReset=E,bt.enabled=N,bt.autoUpdate=W,bt.needsUpdate=G,bt.type=V}function fe(E){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ee(E){const N=E.target;N.removeEventListener("dispose",ee),Un(N)}function Un(E){Nn(E),v.remove(E)}function Nn(E){const N=v.get(E).programs;N!==void 0&&(N.forEach(function(W){lt.releaseProgram(W)}),E.isShaderMaterial&&lt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,W,G,V,dt){N===null&&(N=et);const yt=V.isMesh&&V.matrixWorld.determinant()<0,pt=dp(E,N,W,G,V);ct.setMaterial(G,yt);let wt=W.index,Ct=1;if(G.wireframe===!0){if(wt=q.getWireframeAttribute(W),wt===void 0)return;Ct=2}const Ht=W.drawRange,jt=W.attributes.position;let Pt=Ht.start*Ct,oe=(Ht.start+Ht.count)*Ct;dt!==null&&(Pt=Math.max(Pt,dt.start*Ct),oe=Math.min(oe,(dt.start+dt.count)*Ct)),wt!==null?(Pt=Math.max(Pt,0),oe=Math.min(oe,wt.count)):jt!=null&&(Pt=Math.max(Pt,0),oe=Math.min(oe,jt.count));const ve=oe-Pt;if(ve<0||ve===1/0)return;st.setup(V,G,pt,W,wt);let ge,ce=$t;if(wt!==null&&(ge=Z.get(wt),ce=L,ce.setIndex(ge)),V.isMesh)G.wireframe===!0?(ct.setLineWidth(G.wireframeLinewidth*ht()),ce.setMode(R.LINES)):ce.setMode(R.TRIANGLES);else if(V.isLine){let De=G.linewidth;De===void 0&&(De=1),ct.setLineWidth(De*ht()),V.isLineSegments?ce.setMode(R.LINES):V.isLineLoop?ce.setMode(R.LINE_LOOP):ce.setMode(R.LINE_STRIP)}else V.isPoints?ce.setMode(R.POINTS):V.isSprite&&ce.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)wa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))ce.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const De=V._multiDrawStarts,At=V._multiDrawCounts,$e=V._multiDrawCount,Qt=wt?Z.get(wt).bytesPerElement:1,cn=v.get(G).currentProgram.getUniforms();for(let yn=0;yn<$e;yn++)cn.setValue(R,"_gl_DrawID",yn),ce.render(De[yn]/Qt,At[yn])}else if(V.isInstancedMesh)ce.renderInstances(Pt,ve,V.count);else if(W.isInstancedBufferGeometry){const De=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,At=Math.min(W.instanceCount,De);ce.renderInstances(Pt,ve,At)}else ce.render(Pt,ve)};function su(E,N,W){E.transparent===!0&&E.side===Ke&&E.forceSinglePass===!1?(E.side=qe,E.needsUpdate=!0,Ts(E,N,W),E.side=ci,E.needsUpdate=!0,Ts(E,N,W),E.side=Ke):Ts(E,N,W)}this.compile=function(E,N,W=null){W===null&&(W=E),w=tt.get(W),w.init(N),C.push(w),W.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),E!==W&&E.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights();const G=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const dt=V.material;if(dt)if(Array.isArray(dt))for(let yt=0;yt<dt.length;yt++){const pt=dt[yt];su(pt,W,V),G.add(pt)}else su(dt,W,V),G.add(dt)}),w=C.pop(),G},this.compileAsync=function(E,N,W=null){const G=this.compile(E,N,W);return new Promise(V=>{function dt(){if(G.forEach(function(yt){v.get(yt).currentProgram.isReady()&&G.delete(yt)}),G.size===0){V(E);return}setTimeout(dt,10)}vt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let to=null;function fp(E){to&&to(E)}function au(){di.stop()}function ou(){di.start()}const di=new ad;di.setAnimationLoop(fp),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(E){to=E,Y.setAnimationLoop(E),E===null?di.stop():di.start()},Y.addEventListener("sessionstart",au),Y.addEventListener("sessionend",ou),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;const W=Y.enabled===!0&&Y.isPresenting===!0,G=_!==null&&(z===null||W)&&_.begin(b,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,N,z),w=tt.get(E,C.length),w.init(N),C.push(w),ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ut.setFromProjectionMatrix(ae,En,N.reversedDepth),zt=this.localClippingEnabled,It=rt.init(this.clippingPlanes,zt),x=Ft.get(E,A.length),x.init(),A.push(x),Y.enabled===!0&&Y.isPresenting===!0){const yt=b.xr.getDepthSensingMesh();yt!==null&&eo(yt,N,-1/0,b.sortObjects)}eo(E,N,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(te,se),K=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,K&&Tt.addToRenderList(x,E),this.info.render.frame++,It===!0&&rt.beginShadows();const V=w.state.shadowsArray;if(bt.render(V,E,N),It===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&_.hasRenderPass())===!1){const yt=x.opaque,pt=x.transmissive;if(w.setupLights(),N.isArrayCamera){const wt=N.cameras;if(pt.length>0)for(let Ct=0,Ht=wt.length;Ct<Ht;Ct++){const jt=wt[Ct];lu(yt,pt,E,jt)}K&&Tt.render(E);for(let Ct=0,Ht=wt.length;Ct<Ht;Ct++){const jt=wt[Ct];cu(x,E,jt,jt.viewport)}}else pt.length>0&&lu(yt,pt,E,N),K&&Tt.render(E),cu(x,E,N)}z!==null&&U===0&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),G&&_.end(b),E.isScene===!0&&E.onAfterRender(b,E,N),st.resetDefaultState(),H=-1,B=null,C.pop(),C.length>0?(w=C[C.length-1],It===!0&&rt.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?x=A[A.length-1]:x=null};function eo(E,N,W,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ut.intersectsSprite(E)){G&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);const yt=Mt.update(E),pt=E.material;pt.visible&&x.push(E,yt,pt,W,J.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ut.intersectsObject(E))){const yt=Mt.update(E),pt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),J.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),J.copy(yt.boundingSphere.center)),J.applyMatrix4(E.matrixWorld).applyMatrix4(ae)),Array.isArray(pt)){const wt=yt.groups;for(let Ct=0,Ht=wt.length;Ct<Ht;Ct++){const jt=wt[Ct],Pt=pt[jt.materialIndex];Pt&&Pt.visible&&x.push(E,yt,Pt,W,J.z,jt)}}else pt.visible&&x.push(E,yt,pt,W,J.z,null)}}const dt=E.children;for(let yt=0,pt=dt.length;yt<pt;yt++)eo(dt[yt],N,W,G)}function cu(E,N,W,G){const{opaque:V,transmissive:dt,transparent:yt}=E;w.setupLightsView(W),It===!0&&rt.setGlobalState(b.clippingPlanes,W),G&&ct.viewport(k.copy(G)),V.length>0&&Es(V,N,W),dt.length>0&&Es(dt,N,W),yt.length>0&&Es(yt,N,W),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function lu(E,N,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const Pt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new Rn(1,1,{generateMipmaps:!0,type:Pt?qn:Qe,minFilter:wi,samples:Math.max(4,Nt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}const dt=w.state.transmissionRenderTarget[G.id],yt=G.viewport||k;dt.setSize(yt.z*b.transmissionResolutionScale,yt.w*b.transmissionResolutionScale);const pt=b.getRenderTarget(),wt=b.getActiveCubeFace(),Ct=b.getActiveMipmapLevel();b.setRenderTarget(dt),b.getClearColor(Q),mt=b.getClearAlpha(),mt<1&&b.setClearColor(16777215,.5),b.clear(),K&&Tt.render(W);const Ht=b.toneMapping;b.toneMapping=wn;const jt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),It===!0&&rt.setGlobalState(b.clippingPlanes,G),Es(E,W,G),D.updateMultisampleRenderTarget(dt),D.updateRenderTargetMipmap(dt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let oe=0,ve=N.length;oe<ve;oe++){const ge=N[oe],{object:ce,geometry:De,material:At,group:$e}=ge;if(At.side===Ke&&ce.layers.test(G.layers)){const Qt=At.side;At.side=qe,At.needsUpdate=!0,uu(ce,W,G,De,At,$e),At.side=Qt,At.needsUpdate=!0,Pt=!0}}Pt===!0&&(D.updateMultisampleRenderTarget(dt),D.updateRenderTargetMipmap(dt))}b.setRenderTarget(pt,wt,Ct),b.setClearColor(Q,mt),jt!==void 0&&(G.viewport=jt),b.toneMapping=Ht}function Es(E,N,W){const G=N.isScene===!0?N.overrideMaterial:null;for(let V=0,dt=E.length;V<dt;V++){const yt=E[V],{object:pt,geometry:wt,group:Ct}=yt;let Ht=yt.material;Ht.allowOverride===!0&&G!==null&&(Ht=G),pt.layers.test(W.layers)&&uu(pt,N,W,wt,Ht,Ct)}}function uu(E,N,W,G,V,dt){E.onBeforeRender(b,N,W,G,V,dt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(b,N,W,G,E,dt),V.transparent===!0&&V.side===Ke&&V.forceSinglePass===!1?(V.side=qe,V.needsUpdate=!0,b.renderBufferDirect(W,N,G,V,E,dt),V.side=ci,V.needsUpdate=!0,b.renderBufferDirect(W,N,G,V,E,dt),V.side=Ke):b.renderBufferDirect(W,N,G,V,E,dt),E.onAfterRender(b,N,W,G,V,dt)}function Ts(E,N,W){N.isScene!==!0&&(N=et);const G=v.get(E),V=w.state.lights,dt=w.state.shadowsArray,yt=V.state.version,pt=lt.getParameters(E,V.state,dt,N,W),wt=lt.getProgramCacheKey(pt);let Ct=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;const Ht=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=X.get(E.envMap||G.environment,Ht),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ct===void 0&&(E.addEventListener("dispose",ee),Ct=new Map,G.programs=Ct);let jt=Ct.get(wt);if(jt!==void 0){if(G.currentProgram===jt&&G.lightsStateVersion===yt)return fu(E,pt),jt}else pt.uniforms=lt.getUniforms(E),E.onBeforeCompile(pt,b),jt=lt.acquireProgram(pt,wt),Ct.set(wt,jt),G.uniforms=pt.uniforms;const Pt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=rt.uniform),fu(E,pt),G.needsLights=mp(E),G.lightsStateVersion=yt,G.needsLights&&(Pt.ambientLightColor.value=V.state.ambient,Pt.lightProbe.value=V.state.probe,Pt.directionalLights.value=V.state.directional,Pt.directionalLightShadows.value=V.state.directionalShadow,Pt.spotLights.value=V.state.spot,Pt.spotLightShadows.value=V.state.spotShadow,Pt.rectAreaLights.value=V.state.rectArea,Pt.ltc_1.value=V.state.rectAreaLTC1,Pt.ltc_2.value=V.state.rectAreaLTC2,Pt.pointLights.value=V.state.point,Pt.pointLightShadows.value=V.state.pointShadow,Pt.hemisphereLights.value=V.state.hemi,Pt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pt.spotLightMatrix.value=V.state.spotLightMatrix,Pt.spotLightMap.value=V.state.spotLightMap,Pt.pointShadowMatrix.value=V.state.pointShadowMatrix),G.currentProgram=jt,G.uniformsList=null,jt}function hu(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=fa.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function fu(E,N){const W=v.get(E);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function dp(E,N,W,G,V){N.isScene!==!0&&(N=et),D.resetTextureUnits();const dt=N.fog,yt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,pt=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:gr,wt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ct=X.get(G.envMap||yt,wt),Ht=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,jt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pt=!!W.morphAttributes.position,oe=!!W.morphAttributes.normal,ve=!!W.morphAttributes.color;let ge=wn;G.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ge=b.toneMapping);const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,De=ce!==void 0?ce.length:0,At=v.get(G),$e=w.state.lights;if(It===!0&&(zt===!0||E!==B)){const we=E===B&&G.id===H;rt.setState(G,E,we)}let Qt=!1;G.version===At.__version?(At.needsLights&&At.lightsStateVersion!==$e.state.version||At.outputColorSpace!==pt||V.isBatchedMesh&&At.batching===!1||!V.isBatchedMesh&&At.batching===!0||V.isBatchedMesh&&At.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&At.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&At.instancing===!1||!V.isInstancedMesh&&At.instancing===!0||V.isSkinnedMesh&&At.skinning===!1||!V.isSkinnedMesh&&At.skinning===!0||V.isInstancedMesh&&At.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&At.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&At.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&At.instancingMorph===!1&&V.morphTexture!==null||At.envMap!==Ct||G.fog===!0&&At.fog!==dt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==rt.numPlanes||At.numIntersection!==rt.numIntersection)||At.vertexAlphas!==Ht||At.vertexTangents!==jt||At.morphTargets!==Pt||At.morphNormals!==oe||At.morphColors!==ve||At.toneMapping!==ge||At.morphTargetsCount!==De)&&(Qt=!0):(Qt=!0,At.__version=G.version);let cn=At.currentProgram;Qt===!0&&(cn=Ts(G,N,V));let yn=!1,pi=!1,Bi=!1;const le=cn.getUniforms(),Ce=At.uniforms;if(ct.useProgram(cn.program)&&(yn=!0,pi=!0,Bi=!0),G.id!==H&&(H=G.id,pi=!0),yn||B!==E){ct.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),le.setValue(R,"projectionMatrix",E.projectionMatrix),le.setValue(R,"viewMatrix",E.matrixWorldInverse);const Jn=le.map.cameraPosition;Jn!==void 0&&Jn.setValue(R,Gt.setFromMatrixPosition(E.matrixWorld)),Nt.logarithmicDepthBuffer&&le.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&le.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,pi=!0,Bi=!0)}if(At.needsLights&&($e.state.directionalShadowMap.length>0&&le.setValue(R,"directionalShadowMap",$e.state.directionalShadowMap,D),$e.state.spotShadowMap.length>0&&le.setValue(R,"spotShadowMap",$e.state.spotShadowMap,D),$e.state.pointShadowMap.length>0&&le.setValue(R,"pointShadowMap",$e.state.pointShadowMap,D)),V.isSkinnedMesh){le.setOptional(R,V,"bindMatrix"),le.setOptional(R,V,"bindMatrixInverse");const we=V.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),le.setValue(R,"boneTexture",we.boneTexture,D))}V.isBatchedMesh&&(le.setOptional(R,V,"batchingTexture"),le.setValue(R,"batchingTexture",V._matricesTexture,D),le.setOptional(R,V,"batchingIdTexture"),le.setValue(R,"batchingIdTexture",V._indirectTexture,D),le.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&le.setValue(R,"batchingColorTexture",V._colorsTexture,D));const Zn=W.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&xt.update(V,W,cn),(pi||At.receiveShadow!==V.receiveShadow)&&(At.receiveShadow=V.receiveShadow,le.setValue(R,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(Ce.envMapIntensity.value=N.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=eS()),pi&&(le.setValue(R,"toneMappingExposure",b.toneMappingExposure),At.needsLights&&pp(Ce,Bi),dt&&G.fog===!0&&Rt.refreshFogUniforms(Ce,dt),Rt.refreshMaterialUniforms(Ce,G,Bt,gt,w.state.transmissionRenderTarget[E.id]),fa.upload(R,hu(At),Ce,D)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(fa.upload(R,hu(At),Ce,D),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&le.setValue(R,"center",V.center),le.setValue(R,"modelViewMatrix",V.modelViewMatrix),le.setValue(R,"normalMatrix",V.normalMatrix),le.setValue(R,"modelMatrix",V.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const we=G.uniformsGroups;for(let Jn=0,zi=we.length;Jn<zi;Jn++){const du=we[Jn];St.update(du,cn),St.bind(du,cn)}}return cn}function pp(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function mp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,N,W){const G=v.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=N,v.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const W=v.get(E);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};const gp=R.createFramebuffer();this.setRenderTarget=function(E,N=0,W=0){z=E,P=N,U=W;let G=null,V=!1,dt=!1;if(E){const pt=v.get(E);if(pt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(R.FRAMEBUFFER,pt.__webglFramebuffer),k.copy(E.viewport),O.copy(E.scissor),it=E.scissorTest,ct.viewport(k),ct.scissor(O),ct.setScissorTest(it),H=-1;return}else if(pt.__webglFramebuffer===void 0)D.setupRenderTarget(E);else if(pt.__hasExternalTextures)D.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ht=E.depthTexture;if(pt.__boundDepthTexture!==Ht){if(Ht!==null&&v.has(Ht)&&(E.width!==Ht.image.width||E.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(E)}}const wt=E.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(dt=!0);const Ct=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ct[N])?G=Ct[N][W]:G=Ct[N],V=!0):E.samples>0&&D.useMultisampledRTT(E)===!1?G=v.get(E).__webglMultisampledFramebuffer:Array.isArray(Ct)?G=Ct[W]:G=Ct,k.copy(E.viewport),O.copy(E.scissor),it=E.scissorTest}else k.copy($).multiplyScalar(Bt).floor(),O.copy(at).multiplyScalar(Bt).floor(),it=ot;if(W!==0&&(G=gp),ct.bindFramebuffer(R.FRAMEBUFFER,G)&&ct.drawBuffers(E,G),ct.viewport(k),ct.scissor(O),ct.setScissorTest(it),V){const pt=v.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,pt.__webglTexture,W)}else if(dt){const pt=N;for(let wt=0;wt<E.textures.length;wt++){const Ct=v.get(E.textures[wt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+wt,Ct.__webglTexture,W,pt)}}else if(E!==null&&W!==0){const pt=v.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,pt.__webglTexture,W)}H=-1},this.readRenderTargetPixels=function(E,N,W,G,V,dt,yt,pt=0){if(!(E&&E.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){ct.bindFramebuffer(R.FRAMEBUFFER,wt);try{const Ct=E.textures[pt],Ht=Ct.format,jt=Ct.type;if(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pt),!Nt.textureFormatReadable(Ht)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(jt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&W>=0&&W<=E.height-V&&R.readPixels(N,W,G,V,ut.convert(Ht),ut.convert(jt),dt)}finally{const Ct=z!==null?v.get(z).__webglFramebuffer:null;ct.bindFramebuffer(R.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(E,N,W,G,V,dt,yt,pt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt)if(N>=0&&N<=E.width-G&&W>=0&&W<=E.height-V){ct.bindFramebuffer(R.FRAMEBUFFER,wt);const Ct=E.textures[pt],Ht=Ct.format,jt=Ct.type;if(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pt),!Nt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Pt),R.bufferData(R.PIXEL_PACK_BUFFER,dt.byteLength,R.STREAM_READ),R.readPixels(N,W,G,V,ut.convert(Ht),ut.convert(jt),0);const oe=z!==null?v.get(z).__webglFramebuffer:null;ct.bindFramebuffer(R.FRAMEBUFFER,oe);const ve=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await im(R,ve,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Pt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,dt),R.deleteBuffer(Pt),R.deleteSync(ve),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,W=0){const G=Math.pow(2,-W),V=Math.floor(E.image.width*G),dt=Math.floor(E.image.height*G),yt=N!==null?N.x:0,pt=N!==null?N.y:0;D.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,yt,pt,V,dt),ct.unbindTexture()};const _p=R.createFramebuffer(),vp=R.createFramebuffer();this.copyTextureToTexture=function(E,N,W=null,G=null,V=0,dt=0){let yt,pt,wt,Ct,Ht,jt,Pt,oe,ve;const ge=E.isCompressedTexture?E.mipmaps[dt]:E.image;if(W!==null)yt=W.max.x-W.min.x,pt=W.max.y-W.min.y,wt=W.isBox3?W.max.z-W.min.z:1,Ct=W.min.x,Ht=W.min.y,jt=W.isBox3?W.min.z:0;else{const Ce=Math.pow(2,-V);yt=Math.floor(ge.width*Ce),pt=Math.floor(ge.height*Ce),E.isDataArrayTexture?wt=ge.depth:E.isData3DTexture?wt=Math.floor(ge.depth*Ce):wt=1,Ct=0,Ht=0,jt=0}G!==null?(Pt=G.x,oe=G.y,ve=G.z):(Pt=0,oe=0,ve=0);const ce=ut.convert(N.format),De=ut.convert(N.type);let At;N.isData3DTexture?(D.setTexture3D(N,0),At=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),At=R.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),At=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const $e=R.getParameter(R.UNPACK_ROW_LENGTH),Qt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),cn=R.getParameter(R.UNPACK_SKIP_PIXELS),yn=R.getParameter(R.UNPACK_SKIP_ROWS),pi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ge.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ge.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ct),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,jt);const Bi=E.isDataArrayTexture||E.isData3DTexture,le=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const Ce=v.get(E),Zn=v.get(N),we=v.get(Ce.__renderTarget),Jn=v.get(Zn.__renderTarget);ct.bindFramebuffer(R.READ_FRAMEBUFFER,we.__webglFramebuffer),ct.bindFramebuffer(R.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let zi=0;zi<wt;zi++)Bi&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,v.get(E).__webglTexture,V,jt+zi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,v.get(N).__webglTexture,dt,ve+zi)),R.blitFramebuffer(Ct,Ht,yt,pt,Pt,oe,yt,pt,R.DEPTH_BUFFER_BIT,R.NEAREST);ct.bindFramebuffer(R.READ_FRAMEBUFFER,null),ct.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||v.has(E)){const Ce=v.get(E),Zn=v.get(N);ct.bindFramebuffer(R.READ_FRAMEBUFFER,_p),ct.bindFramebuffer(R.DRAW_FRAMEBUFFER,vp);for(let we=0;we<wt;we++)Bi?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ce.__webglTexture,V,jt+we):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ce.__webglTexture,V),le?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Zn.__webglTexture,dt,ve+we):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Zn.__webglTexture,dt),V!==0?R.blitFramebuffer(Ct,Ht,yt,pt,Pt,oe,yt,pt,R.COLOR_BUFFER_BIT,R.NEAREST):le?R.copyTexSubImage3D(At,dt,Pt,oe,ve+we,Ct,Ht,yt,pt):R.copyTexSubImage2D(At,dt,Pt,oe,Ct,Ht,yt,pt);ct.bindFramebuffer(R.READ_FRAMEBUFFER,null),ct.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else le?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(At,dt,Pt,oe,ve,yt,pt,wt,ce,De,ge.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(At,dt,Pt,oe,ve,yt,pt,wt,ce,ge.data):R.texSubImage3D(At,dt,Pt,oe,ve,yt,pt,wt,ce,De,ge):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,dt,Pt,oe,yt,pt,ce,De,ge.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,dt,Pt,oe,ge.width,ge.height,ce,ge.data):R.texSubImage2D(R.TEXTURE_2D,dt,Pt,oe,yt,pt,ce,De,ge);R.pixelStorei(R.UNPACK_ROW_LENGTH,$e),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,cn),R.pixelStorei(R.UNPACK_SKIP_ROWS,yn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,pi),dt===0&&N.generateMipmaps&&R.generateMipmap(At),ct.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&D.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?D.setTextureCube(E,0):E.isData3DTexture?D.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?D.setTexture2DArray(E,0):D.setTexture2D(E,0),ct.unbindTexture()},this.resetState=function(){P=0,U=0,z=null,ct.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}function*li(n){for(let t=0;t<n;t+=1)yield t}function na(n,t){const e=n.find(i=>i.name===t);if(!e)throw new Error(`cannot find object with name "${t}"`);return e}function iS(n,t){const e=n.findIndex(i=>i.name===t);if(e<0)throw new Error(`cannot find object with name "${t}"`);return e}function rS(n,t){const e=new Array(t).fill(0),i=Math.min(t,Math.ceil((Math.sqrt(1+8*n)-1)/2)),r=t-i;for(let a=0;a<i;a+=1)e[r+a]=a+1;const s=(i+1)*i/2;if(s<=n)e[t-1]+=n-s;else{console.assert(s-n<i);for(let a=0;a<s-n;a+=1)e[t-1-a]-=1}return e}function Ia(n){switch(!0){case n>=1e5:return`${Math.floor(n/1e3)}k`;case n>=1e4:return`${(Math.floor(n/100)/10).toFixed(1).replace(".0","")}k`;case n>=10:return String(Math.round(n));default:return n.toFixed(1).replace(".0","")}}function Xe(n,t,e=Ia){return n.querySelector(".value").textContent=typeof t=="string"?t:e(t),n.classList.toggle("hidden",!t),!!t}function fd(n,t){n.classList.toggle("hidden",!!t)}function fn(n,t="div",e,i=""){const r=document.createElement(t);return r.className=e,r.textContent=i,n.append(r),r}function sS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function aS(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var t=n.default;if(typeof t=="function"){var e=function i(){var r=!1;try{r=this instanceof i}catch{}return r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(e,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),e}var da={exports:{}},oS=da.exports,Ch;function cS(){return Ch||(Ch=1,(function(n){(function(t,e,i){function r(c){var l=this,u=o();l.next=function(){var f=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=f-(l.c=f|0)},l.c=1,l.s0=u(" "),l.s1=u(" "),l.s2=u(" "),l.s0-=u(c),l.s0<0&&(l.s0+=1),l.s1-=u(c),l.s1<0&&(l.s1+=1),l.s2-=u(c),l.s2<0&&(l.s2+=1),u=null}function s(c,l){return l.c=c.c,l.s0=c.s0,l.s1=c.s1,l.s2=c.s2,l}function a(c,l){var u=new r(c),f=l&&l.state,h=u.next;return h.int32=function(){return u.next()*4294967296|0},h.double=function(){return h()+(h()*2097152|0)*11102230246251565e-32},h.quick=h,f&&(typeof f=="object"&&s(f,u),h.state=function(){return s(u,{})}),h}function o(){var c=4022871197,l=function(u){u=String(u);for(var f=0;f<u.length;f++){c+=u.charCodeAt(f);var h=.02519603282416938*c;c=h>>>0,h-=c,h*=c,c=h>>>0,h-=c,c+=h*4294967296}return(c>>>0)*23283064365386963e-26};return l}e&&e.exports?e.exports=a:this.alea=a})(oS,n)})(da)),da.exports}var pa={exports:{}},lS=pa.exports,Rh;function uS(){return Rh||(Rh=1,(function(n){(function(t,e,i){function r(o){var c=this,l="";c.x=0,c.y=0,c.z=0,c.w=0,c.next=function(){var f=c.x^c.x<<11;return c.x=c.y,c.y=c.z,c.z=c.w,c.w^=c.w>>>19^f^f>>>8},o===(o|0)?c.x=o:l+=o;for(var u=0;u<l.length+64;u++)c.x^=l.charCodeAt(u)|0,c.next()}function s(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c}function a(o,c){var l=new r(o),u=c&&c.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var h=l.next()>>>11,d=(l.next()>>>0)/4294967296,p=(h+d)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,u&&(typeof u=="object"&&s(u,l),f.state=function(){return s(l,{})}),f}e&&e.exports?e.exports=a:this.xor128=a})(lS,n)})(pa)),pa.exports}var ma={exports:{}},hS=ma.exports,Ph;function fS(){return Ph||(Ph=1,(function(n){(function(t,e,i){function r(o){var c=this,l="";c.next=function(){var f=c.x^c.x>>>2;return c.x=c.y,c.y=c.z,c.z=c.w,c.w=c.v,(c.d=c.d+362437|0)+(c.v=c.v^c.v<<4^(f^f<<1))|0},c.x=0,c.y=0,c.z=0,c.w=0,c.v=0,o===(o|0)?c.x=o:l+=o;for(var u=0;u<l.length+64;u++)c.x^=l.charCodeAt(u)|0,u==l.length&&(c.d=c.x<<10^c.x>>>4),c.next()}function s(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c.v=o.v,c.d=o.d,c}function a(o,c){var l=new r(o),u=c&&c.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var h=l.next()>>>11,d=(l.next()>>>0)/4294967296,p=(h+d)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,u&&(typeof u=="object"&&s(u,l),f.state=function(){return s(l,{})}),f}e&&e.exports?e.exports=a:this.xorwow=a})(hS,n)})(ma)),ma.exports}var ga={exports:{}},dS=ga.exports,Ih;function pS(){return Ih||(Ih=1,(function(n){(function(t,e,i){function r(o){var c=this;c.next=function(){var u=c.x,f=c.i,h,d;return h=u[f],h^=h>>>7,d=h^h<<24,h=u[f+1&7],d^=h^h>>>10,h=u[f+3&7],d^=h^h>>>3,h=u[f+4&7],d^=h^h<<7,h=u[f+7&7],h=h^h<<13,d^=h^h<<9,u[f]=d,c.i=f+1&7,d};function l(u,f){var h,d=[];if(f===(f|0))d[0]=f;else for(f=""+f,h=0;h<f.length;++h)d[h&7]=d[h&7]<<15^f.charCodeAt(h)+d[h+1&7]<<13;for(;d.length<8;)d.push(0);for(h=0;h<8&&d[h]===0;++h);for(h==8?d[7]=-1:d[h],u.x=d,u.i=0,h=256;h>0;--h)u.next()}l(c,o)}function s(o,c){return c.x=o.x.slice(),c.i=o.i,c}function a(o,c){o==null&&(o=+new Date);var l=new r(o),u=c&&c.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var h=l.next()>>>11,d=(l.next()>>>0)/4294967296,p=(h+d)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,u&&(u.x&&s(u,l),f.state=function(){return s(l,{})}),f}e&&e.exports?e.exports=a:this.xorshift7=a})(dS,n)})(ga)),ga.exports}var _a={exports:{}},mS=_a.exports,Lh;function gS(){return Lh||(Lh=1,(function(n){(function(t,e,i){function r(o){var c=this;c.next=function(){var u=c.w,f=c.X,h=c.i,d,p;return c.w=u=u+1640531527|0,p=f[h+34&127],d=f[h=h+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,p=f[h]=p^d,c.i=h,p+(u^u>>>16)|0};function l(u,f){var h,d,p,S,g,m=[],y=128;for(f===(f|0)?(d=f,f=null):(f=f+"\0",d=0,y=Math.max(y,f.length)),p=0,S=-32;S<y;++S)f&&(d^=f.charCodeAt((S+32)%f.length)),S===0&&(g=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,S>=0&&(g=g+1640531527|0,h=m[S&127]^=d+g,p=h==0?p+1:0);for(p>=128&&(m[(f&&f.length||0)&127]=-1),p=127,S=512;S>0;--S)d=m[p+34&127],h=m[p=p+1&127],d^=d<<13,h^=h<<17,d^=d>>>15,h^=h>>>12,m[p]=d^h;u.w=g,u.X=m,u.i=p}l(c,o)}function s(o,c){return c.i=o.i,c.w=o.w,c.X=o.X.slice(),c}function a(o,c){o==null&&(o=+new Date);var l=new r(o),u=c&&c.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var h=l.next()>>>11,d=(l.next()>>>0)/4294967296,p=(h+d)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,u&&(u.X&&s(u,l),f.state=function(){return s(l,{})}),f}e&&e.exports?e.exports=a:this.xor4096=a})(mS,n)})(_a)),_a.exports}var va={exports:{}},_S=va.exports,Dh;function vS(){return Dh||(Dh=1,(function(n){(function(t,e,i){function r(o){var c=this,l="";c.next=function(){var f=c.b,h=c.c,d=c.d,p=c.a;return f=f<<25^f>>>7^h,h=h-d|0,d=d<<24^d>>>8^p,p=p-f|0,c.b=f=f<<20^f>>>12^h,c.c=h=h-d|0,c.d=d<<16^h>>>16^p,c.a=p-f|0},c.a=0,c.b=0,c.c=-1640531527,c.d=1367130551,o===Math.floor(o)?(c.a=o/4294967296|0,c.b=o|0):l+=o;for(var u=0;u<l.length+20;u++)c.b^=l.charCodeAt(u)|0,c.next()}function s(o,c){return c.a=o.a,c.b=o.b,c.c=o.c,c.d=o.d,c}function a(o,c){var l=new r(o),u=c&&c.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var h=l.next()>>>11,d=(l.next()>>>0)/4294967296,p=(h+d)/(1<<21);while(p===0);return p},f.int32=l.next,f.quick=f,u&&(typeof u=="object"&&s(u,l),f.state=function(){return s(l,{})}),f}e&&e.exports?e.exports=a:this.tychei=a})(_S,n)})(va)),va.exports}var xa={exports:{}};const xS={},yS=Object.freeze(Object.defineProperty({__proto__:null,default:xS},Symbol.toStringTag,{value:"Module"})),SS=aS(yS);var MS=xa.exports,Uh;function bS(){return Uh||(Uh=1,(function(n){(function(t,e,i){var r=256,s=6,a=52,o="random",c=i.pow(r,s),l=i.pow(2,a),u=l*2,f=r-1,h;function d(x,w,A){var C=[];w=w==!0?{entropy:!0}:w||{};var _=m(g(w.entropy?[x,M(e)]:x??y(),3),C),b=new p(C),F=function(){for(var P=b.g(s),U=c,z=0;P<l;)P=(P+z)*r,U*=r,z=b.g(1);for(;P>=u;)P/=2,U/=2,z>>>=1;return(P+z)/U};return F.int32=function(){return b.g(4)|0},F.quick=function(){return b.g(4)/4294967296},F.double=F,m(M(b.S),e),(w.pass||A||function(P,U,z,H){return H&&(H.S&&S(H,b),P.state=function(){return S(b,{})}),z?(i[o]=P,U):P})(F,_,"global"in w?w.global:this==i,w.state)}function p(x){var w,A=x.length,C=this,_=0,b=C.i=C.j=0,F=C.S=[];for(A||(x=[A++]);_<r;)F[_]=_++;for(_=0;_<r;_++)F[_]=F[b=f&b+x[_%A]+(w=F[_])],F[b]=w;(C.g=function(P){for(var U,z=0,H=C.i,B=C.j,k=C.S;P--;)U=k[H=f&H+1],z=z*r+k[f&(k[H]=k[B=f&B+U])+(k[B]=U)];return C.i=H,C.j=B,z})(r)}function S(x,w){return w.i=x.i,w.j=x.j,w.S=x.S.slice(),w}function g(x,w){var A=[],C=typeof x,_;if(w&&C=="object")for(_ in x)try{A.push(g(x[_],w-1))}catch{}return A.length?A:C=="string"?x:x+"\0"}function m(x,w){for(var A=x+"",C,_=0;_<A.length;)w[f&_]=f&(C^=w[f&_]*19)+A.charCodeAt(_++);return M(w)}function y(){try{var x;return h&&(x=h.randomBytes)?x=x(r):(x=new Uint8Array(r),(t.crypto||t.msCrypto).getRandomValues(x)),M(x)}catch{var w=t.navigator,A=w&&w.plugins;return[+new Date,t,A,t.screen,M(e)]}}function M(x){return String.fromCharCode.apply(0,x)}if(m(i.random(),e),n.exports){n.exports=d;try{h=SS}catch{}}else i["seed"+o]=d})(typeof self<"u"?self:MS,[],Math)})(xa)),xa.exports}var Go,Nh;function ES(){if(Nh)return Go;Nh=1;var n=cS(),t=uS(),e=fS(),i=pS(),r=gS(),s=vS(),a=bS();return a.alea=n,a.xor128=t,a.xorwow=e,a.xorshift7=i,a.xor4096=r,a.tychei=s,Go=a,Go}var TS=ES();const dd=sS(TS),Vl="2";function pd(n=Vl){return dd(n)}let Le=dd(Vl);function wS(n=Vl){Le=pd(n)}function $a(n,t=Le){if(n.length===0)throw new Error("cannot pick a random item from an empty array");return n[Math.floor(t()*n.length)]}function md(n,t=Le){if(n.length===0)throw new Error("cannot remove a random item from an empty array");const e=Math.floor(t()*n.length),i=n[e];return n.splice(e,1),i}function Zc(n,t,e=Le){if(n.length<=t)return li(n.length).toArray();const i=n.length;return li(t).map(r=>{const s=Math.floor(i*r/t),a=Math.floor(i*(r+1)/t)-1;return Math.floor(e()*(a-s+1))+s}).toArray()}function AS(n,t,e,i,r){const s=Math.sqrt(Math.max(0,r**2-i**2)),a=t-n,o=Math.min(a,Math.max(0,e-n-s)),c=Math.min(a,Math.max(0,t-e-s)),l=o+c,u=Le()*l;return u<=o?u+n:t-(l-u)}function CS(n,t,e=Le){if(n.length<1)throw new Error("cannot pick an item from an empty array");if(n.length===1)return n[0];const i=n.values().map(a=>t[a]).reduce((a,o)=>a+o),r=e()*i;let s=0;for(const a of n)if(s+=t[a],r<s)return a;return n.at(-1)}function Xr(n,t){if(typeof n=="number")return n;if(n==null&&t!=null)return t;throw new TypeError(`expected number, got ${n}`)}function RS(n){if(Array.isArray(n)&&n.every(t=>typeof t=="string"))return n;if(n==null)return[];throw new TypeError(`expected a string array, got ${n}`)}const xr={},us=400,ui=100,PS=20,IS=8,Gl=3,LS=11,ia=3600*1e3,DS=50,US=35,ja=100,NS=!0,Za=.3,FS=.5,OS=.5,BS=[.95,.95],zS=.8,kS=.6,VS=1,GS=20,HS=40,vs=10,WS=40,XS=.2,qS=.6,YS=8,$S=6,jS=6,ZS=5,JS=1,KS=1,QS=1,tM=1,eM=20,nM=0,iM=3,La=5,Fh=9,Hl=1,rM=Hl,sM=Hl,aM=3,oM=6,cM=1.05,gd=60*vs-DS,lM=10,Da=new I(0,100,100),uM=new I(0,-100,-200),Jc=Da.clone().addScaledVector(uM,4),hM=60,fM=.2,dM=1,Ua=Math.sqrt((us+Da.z)**2+Da.y**2),pM=30,Oh={coin:[4,4],defaultSize:[15,25]},Br=64,Kc=4,_d=3,he={conifer:[20,35],broadLeaf:[20,25],player:[4,16],gem:[10,10],bag:[6,6],gatePost:[2,20],boulder:[ui/Kc-3,25],hitBar:[10,2],bullet:[3,0],bulletDying:[6,6]},mM={end:{w:ui+Gl,d:100,color:43775},other:{w:20,color:34816}},gM=mM,Qc="jacekkopecky-shoot-em-state";function _M(){return{wallet:new fs(Wl),cards:new fs(Ka),level:1,played:0,energy:1/0,lastEnergyGiven:Date.now(),runUpgradeLevels:{},collectedGemIds:[]}}let Xt;function vM(){TM(),window.gameState=Xt}function vd(){Xt=_M(),window.gameState=Xt,xn()}function xM({type:n,amount:t}){Xt.wallet.add(n,t),xn()}function yM(n){for(const t of n)Xt.cards.add(t,1);xn()}function xd(n,t){Xt.wallet.add(n,-t),xn()}function SM(){Xt.previousLevel={level:Xt.level,runUpgradeLevels:Xt.runUpgradeLevels,collectedGemIds:Xt.collectedGemIds};const n={level:Xt.level+1,runUpgradeLevels:{},collectedGemIds:[]};Object.assign(Xt,n),yd(),xn()}function MM(){Xt.previousLevel&&(Object.assign(Xt,Xt.previousLevel),delete Xt.previousLevel,yd(),xn())}function bM(){Xt.played+=1,xn()}function xs(){return Xt}function EM(n,t){Xt.runUpgradeLevels[n]=t,xn()}function xn(){localStorage.setItem(Qc,JSON.stringify(Xt))}function TM(){const n=localStorage.getItem(Qc)||"{}";try{const t=JSON.parse(n);Xt={wallet:new fs(Wl,t.wallet),cards:new fs(Ka,t.cards),level:Xr(t.level,1),played:Xr(t.played,0),energy:Xr(t.energy,1/0),lastEnergyGiven:Xr(t.lastEnergyGiven,Date.now()),runUpgradeLevels:ET(t.runUpgradeLevels),collectedGemIds:RS(t.collectedGemIds)}}catch(t){const e=Qc+new Date().toISOString();localStorage.setItem(e,n),console.warn(`cannot read state, saving in "${e}"`,t),vd()}}function Ja(n,t){switch(n){case"limitedEnergy":return t.level>=4;case"rateUpgrade":return t.level>=4;case"damageUpgrade":return t.level>=10;case"playersUpgrade":return t.level>=20;case"cards":return t.level>=IM;case"bulkCards":return!1}}function yd(){const n=Ar();Xt.energy===1/0&&Ja("limitedEnergy",Xt)&&(Xt.energy=n.energyMax),Xt.level<4&&(Xt.energy=1/0)}function Sd(n){const t=Date.now();if(Xt.energy>=n.energyMax)return{energy:Xt.energy,nextEnergyMs:t+ia};{const e=t-Xt.lastEnergyGiven,i=Math.floor(e/ia);return i>0&&(Xt.energy=Math.min(n.energyMax,Xt.energy+i),Xt.lastEnergyGiven=Xt.energy===n.energyMax?t:Xt.lastEnergyGiven+i*ia,xn()),{energy:Xt.energy,nextEnergyMs:Xt.lastEnergyGiven+ia-t}}}function wM(n){return Xt.energy===1/0?!0:(Sd(n),Xt.energy>0?(Xt.energy-=1,xn(),!0):!1)}function AM(n){Xt.collectedGemIds.push(n),xn()}function Ar(){const n={energyMax:LS,coinsPerLevel:eM,gemsPerLevel:iM,endBlockCoinsPerLevel:nM,damageUpgradePrice:JS,rateUpgradePrice:KS,playersUpgradePrice:QS,damageMaxUpgrade:$S,rateMaxUpgrade:jS,playersMaxUpgrade:ZS,objectHitPoints:Hl,maxEndBlockHitPoints:oM,gemHitPoints:aM,playerBulletHitPoints:sM,playerBulletRange:HS,playerHitPoints:rM,playerShotsPerSecond:VS,startingPlayers:tM,cardsBulkBuyingRate:1};for(const[t,e]of Xt.cards.entries()){const i=Ed(e);hi[t].performUpgrade(i,n)}return n}const hs=[0],Kr=[0];let CM=RM();function*RM(){let n=1;for(;;){for(let t=0;t<n;t++)yield n;n+=1}}function Md(){const n=CM.next().value;hs.push(hs.at(-1)+n);const t=Kr.at(-1);for(let e=0;e<n-1;e+=1)Kr.push(t);Kr.push(t+1)}function bd(n){for(;n>=hs.length;)Md();return hs[n]}function PM(n){const t=bd(n+1);return[hs[n],t]}function Ed(n){for(;Kr.length<n+1;)Md();return Kr[n]}function Td(n,t,e){const i=t.read(n);if(!i)return{level:0,nextLevelCards:1,nextLevelCardsHave:1};const r=Ed(i);if(e&&i>=e)return{level:r,nextLevelCards:0,nextLevelCardsHave:0};const[s,a]=PM(r);return{level:r,nextLevelCards:a-s,nextLevelCardsHave:i-s}}const Ho={rarity:"common",cardsToGive:bd(GS),typeLabel:"range",performUpgrade(n,t){t.playerBulletRange+=n}},Wo={rarity:"common",typeLabel:"fire rate",performUpgrade(n,t){t.playerShotsPerSecond*=1.01**n}},Xo={rarity:"common",typeLabel:"income",performUpgrade(n,t){t.endBlockCoinsPerLevel+=n}},zr={rarity:"common",typeLabel:"income",performUpgrade(n,t){t.coinsPerLevel+=n}},hi={_test:{cardsToGive:40,minPlayerLevel:1/0,name:"testing card",rarity:"common",typeLabel:"fire rate",performUpgrade(){console.error("this should never be called, it's a testing card")}},range1:Ge("Atlatl",Ho,30),range2:Ge("Longbow",Ho,50),range3:Ge("Sniper Rifle",Ho,70),rate1:Ge("Practice",Wo,30),rate2:Ge("Reload Bot",Wo,30),rate3:Ge("Gatling Gun",Wo,30),coins1:Ge("Gold Nugget",zr,30),coins2:Ge("Pay Raise",zr,40),coins3:Ge("1337 Loot",zr,55),coins4:Ge("RwnsCoin",zr,100),coins5:Ge("Inflation",zr,200),endCoins1:Ge("Harvest",Xo,30),endCoins2:Ge("Treasure Chest",Xo,45),endCoins3:Ge("Pot of Gold",Xo,60)},Ka=Object.keys(hi),IM=Math.min(...Object.values(hi).map(n=>n.minPlayerLevel));function Ge(n,t,e){return{...t,name:n,minPlayerLevel:e}}const LM={common:27,rare:9,epic:3,legendary:1};function DM(n){const t=Ka.filter(s=>UM(n,s));if(t.length<=1)return t[0];const e=Array.from(new Set(t.map(s=>hi[s].rarity))),i=CS(e,LM,Math.random),r=t.filter(s=>hi[s].rarity===i);return $a(r,Math.random)}function UM(n,t){const e=hi[t];return n.level>=e.minPlayerLevel&&n.cards.read(t)<(e.cardsToGive??1/0)}const dn={goToCardsSectionButton:document.querySelector("#mainScreen .sectionButtons .cards"),closeCardsSectionButton:document.querySelector("#cards button.close"),buyOne:document.querySelector("#cards button.buyOne"),buyBulk:document.querySelector("#cards button.buyBulk"),theCards:document.querySelector("#cards .theCards"),walletContainer:document.querySelector("#cards .wallet"),wallet:{gem:document.querySelector("#cards .wallet .gem"),coin:document.querySelector("#cards .wallet .coin")}};function NM(){dn.goToCardsSectionButton.addEventListener("click",()=>Mr("cards")),dn.closeCardsSectionButton.addEventListener("click",()=>Mr("mainScreen")),dn.buyOne.addEventListener("click",FM),dn.buyBulk.addEventListener("click",OM)}function wd(n,t){const e=xs(),i=Ar();Xe(dn.wallet.coin,e.wallet.read("coin")),Xe(dn.wallet.gem,String(e.wallet.read("gem"))),Bh(dn.buyOne,La,1,e),Bh(dn.buyBulk,La*Fh*i.cardsBulkBuyingRate,Fh,e),dn.buyBulk.classList.toggle("hidden",!Ja("bulkCards",e)),dn.theCards.textContent="";let r;for(const s of Ka){const a=hi[s],o=Td(s,e.cards,a.cardsToGive);if(o.level>0){const c=fn(dn.theCards,"div","card");c.classList.add(a.rarity),(n?.has(s)||t?.has(s))&&(r??=c),fn(c,"div","rarity",a.rarity);const l=fn(c,"div","name",a.name);if(l.append(" "),fn(l,"span","level",String(o.level)),l.classList.toggle("highlight",!!n?.has(s)),fn(c,"div","label",a.typeLabel),o.nextLevelCards>0){const u=fn(c,"div","nextLevel");u.classList.toggle("highlight",!!t?.has(s));const f=fn(u,"span","box"),h=fn(f,"span","partBox");fn(u,"span","have",String(o.nextLevelCardsHave)),fn(u,"span","outOf",String(o.nextLevelCards)),h.style.width=`${o.nextLevelCardsHave/o.nextLevelCards*100}%`}else fn(c,"div","nextLevel max")}}r&&setTimeout(()=>r.scrollIntoView({behavior:"smooth",block:"nearest"}),1)}function Bh(n,t,e,i){const r=i.wallet.read("gem")>=t;n.classList.toggle("disabled",!r),n.classList.toggle("unaffordable",!r);const s=n.querySelector(".cost");s.textContent=Ia(t);const a=n.querySelector(".amount");a.textContent=Ia(e)}function FM(){const n=xs();if(n.wallet.read("gem")<La)return;const t=DM(n);if(!t)return;const{nextLevelCards:e,nextLevelCardsHave:i}=Td(t,n.cards,hi[t].cardsToGive);xd("gem",La),yM([t]);const r=new Set,s=new Set;(e-i>1?s:r).add(t),wd(r,s)}function OM(){console.warn("bulk buying not implemented yet")}const Wl=["coin","gem"],BM=["players","damage","rate"];class fs{wallet={};constructor(t,e){if(e){if(typeof e!="object"||!("wallet"in e)||!e.wallet||typeof e.wallet!="object")throw new TypeError("unknown wallet data",e);const i=e.wallet;for(const r of t){const s=i[r];if(typeof s=="number")this.wallet[r]=s;else if(s)throw new TypeError(`wallet value for type ${r} is not a number`,s)}}}add=(t,e)=>{this.wallet[t]=(this.wallet[t]??0)+e};read=t=>this.wallet[t]??0;reset=()=>{this.wallet={}};readAll=()=>this.wallet;entries=()=>Object.entries(this.wallet);addAll=t=>{const e=t.readAll();for(const[i,r]of Object.entries(e))this.add(i,r)}}const tl=document.querySelector("#log"),qo=document.querySelector("#fps");function zM(n){tl&&(tl.textContent+=`
`+n)}let Yo,ra=0;function kM(n,t=""){!tl&&!qo||(n!=null&&Yo!=null&&(ra+=1,Yo%1e3>n%1e3&&(qo?qo.textContent=String(ra):zM(`${t}${ra}`),ra=0)),Yo=n)}const Li=new rd;Li.connect(document);window.gameTimer=Li;typeof xr.timeScale=="number"&&Li.setTimescale(xr.timeScale);const yr=new Map;function VM(n){for(const t of yr.keys())t.update(n)}function GM(){for(const n of Array.from(yr.values()))n()}function Xl(n,t){const e=new _n("shrink",t,[new pe(".scale",[0,t],[...n.scale,0,0,0])]);Cr(n,t,e,!0)}function HM(n,t){const e=new _n("slide",t,[new pe(".scale[y]",[0,t],[n.scale.y,0])]);Cr(n,t,e,!0)}function Ad(n,t,e=!1){const i=tn(0,t),r=tn(0,e?Math.PI:-Math.PI),s=new _n("fallAndShrink",t,[new pe(".rotation[x]",i(0,.6,.75),r(0,.25,.5),ai),new pe(".scale",i(.7,1),[...n.scale,0,0,0],ai)]);Cr(n,t,s)}function WM(n,t,e){const i=tn(0,e),r=tn(n.position.x,t.x),s=tn(n.position.y,t.y),a=tn(n.position.z,t.z),o=new _n("flyAndShrink",e,[new pe(".position[x]",i(0,.5,1),r(0,.3,1),ai),new pe(".position[y]",i(0,.5,1),s(0,.8,1),ai),new pe(".position[z]",i(0,.2,.5,1),a(0,0,.2,1),ai)]);Cr(n,e,o)}function Cd(n,t,e){const i=Math.PI*2/t,r=Li.getElapsed()*t,s=new _n("rotate",i,[new pe(`.rotation[${e}]`,[0,i],[r,r+Math.PI*2],An)]);return Cr(n,i,s,!1,Va)}function XM(n,t,e,i){const r=t+e,s=n.rotation[i],a=new _n("rotate",r,[new pe(`.rotation[${i}]`,[0,e,e+t*.1,e+t*.5,e+t*.5,r-t*.1,r],[s,s,s+Math.PI*.1,s+Math.PI,s-Math.PI,s-Math.PI*.1,s],An)]);return Cr(n,r,a,!1,Va)}function tn(n,t){return(...e)=>e.map(i=>n+(t-n)*i)}function Cr(n,t,e,i=!1,r=Cf){const s=new sd(n),a=s.clipAction(e);a.loop=r,a.play(),i&&a.fadeIn(t);function o(){a.stop(),s.uncacheAction(e),s.uncacheClip(e),s.uncacheRoot(n),yr.delete(s)}return yr.set(s,o),s.addEventListener("finished",()=>{o(),n.removeFromParent()}),a}function qM(n){const t=new sd(n);function e(){t.stopAllAction(),t.uncacheRoot(n),yr.delete(t)}return yr.set(t,e),t}var oi=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return n},Out:function(n){return n},InOut:function(n){return n}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var t=1.70158;return n===1?1:n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return n===0?0:--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?.5*(n*n*((t+1)*n-t)):.5*((n-=2)*n*((t+1)*n+t)+2)}}),Bounce:Object.freeze({In:function(n){return 1-oi.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?oi.Bounce.In(n*2)*.5:oi.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(t){return Math.pow(t,n)},Out:function(t){return 1-Math.pow(1-t,n)},InOut:function(t){return t<.5?Math.pow(t*2,n)/2:(1-Math.pow(2-t*2,n))/2+.5}}}}),qr=function(){return performance.now()},YM=(function(){function n(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,t)}return n.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(){for(var t,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var r=0,s=e;r<s.length;r++){var a=s[r];(t=a._group)===null||t===void 0||t.remove(a),a._group=this,this._tweens[a.getId()]=a,this._tweensAddedDuringUpdate[a.getId()]=a}},n.prototype.remove=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var i=0,r=t;i<r.length;i++){var s=r[i];s._group=void 0,delete this._tweens[s.getId()],delete this._tweensAddedDuringUpdate[s.getId()]}},n.prototype.allStopped=function(){return this.getAll().every(function(t){return!t.isPlaying()})},n.prototype.update=function(t,e){t===void 0&&(t=qr()),e===void 0&&(e=!0);var i=Object.keys(this._tweens);if(i.length!==0)for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],a=!e;s&&s.update(t,a)===!1&&!e&&this.remove(s)}i=Object.keys(this._tweensAddedDuringUpdate)}},n})(),el={Linear:function(n,t){var e=n.length-1,i=e*t,r=Math.floor(i),s=el.Utils.Linear;return t<0?s(n[0],n[1],i):t>1?s(n[e],n[e-1],e-i):s(n[r],n[r+1>e?e:r+1],i-r)},Utils:{Linear:function(n,t,e){return(t-n)*e+n}}},Rd=(function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n})(),nl=new YM,$M=(function(){function n(t,e){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=oi.Linear.None,this._interpolationFunction=el.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Rd.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=t,typeof e=="object"?(this._group=e,e.add(this)):e===!0&&(this._group=nl,nl.add(this))}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e<0?0:e,this},n.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},n.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},n.prototype.start=function(t,e){if(t===void 0&&(t=qr()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},n.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},n.prototype._setupProperties=function(t,e,i,r,s){for(var a in i){var o=t[a],c=Array.isArray(o),l=c?"array":typeof o,u=!c&&Array.isArray(i[a]);if(!(l==="undefined"||l==="function")){if(u){var f=i[a];if(f.length===0)continue;for(var h=[o],d=0,p=f.length;d<p;d+=1){var S=this._handleRelativeValue(o,f[d]);if(isNaN(S)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(S)}u&&(i[a]=h)}if((l==="object"||c)&&o&&!u){e[a]=c?[]:{};var g=o;for(var m in g)e[a][m]=g[m];r[a]=c?[]:{};var f=i[a];if(!this._isDynamic){var y={};for(var m in f)y[m]=f[m];i[a]=f=y}this._setupProperties(g,e[a],f,r[a],s)}else(typeof e[a]>"u"||s)&&(e[a]=o),c||(e[a]*=1),u?r[a]=i[a].slice().reverse():r[a]=e[a]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},n.prototype.pause=function(t){return t===void 0&&(t=qr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this)},n.prototype.resume=function(t){return t===void 0&&(t=qr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this)},n.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},n.prototype.group=function(t){return t?(t.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},n.prototype.remove=function(){var t;return(t=this._group)===null||t===void 0||t.remove(this),this},n.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},n.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},n.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},n.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},n.prototype.easing=function(t){return t===void 0&&(t=oi.Linear.None),this._easingFunction=t,this},n.prototype.interpolation=function(t){return t===void 0&&(t=el.Linear),this._interpolationFunction=t,this},n.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},n.prototype.onStart=function(t){return this._onStartCallback=t,this},n.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},n.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},n.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},n.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},n.prototype.onStop=function(t){return this._onStopCallback=t,this},n.prototype.update=function(t,e){var i=this,r;if(t===void 0&&(t=qr()),e===void 0&&(e=n.autoStartOnUpdate),this._isPaused)return!0;var s;if(!this._goToEnd&&!this._isPlaying)if(e)this.start(t,!0);else return!1;if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=t-this._startTime,o=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),c=this._duration+this._repeat*o,l=function(){if(i._duration===0||a>c)return 1;var S=Math.trunc(a/o),g=a-S*o,m=Math.min(g/i._duration,1);return m===0&&a===i._duration?1:m},u=l(),f=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,f),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||a>=this._duration)if(this._repeat>0){var h=Math.min(Math.trunc((a-this._duration)/o)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=h);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=o*h,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var d=0,p=this._chainedTweens.length;d<p;d++)this._chainedTweens[d].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(t,e,i,r){for(var s in i)if(e[s]!==void 0){var a=e[s]||0,o=i[s],c=Array.isArray(t[s]),l=Array.isArray(o),u=!c&&l;u?t[s]=this._interpolationFunction(o,r):typeof o=="object"&&o?this._updateProperties(t[s],a,o,r):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(t[s]=a+(o-a)*r))}},n.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},n.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],i=this._valuesEnd[t];typeof i=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(i):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},n.autoStartOnUpdate=!1,n})();Rd.nextId;var Ln=nl;Ln.getAll.bind(Ln);Ln.removeAll.bind(Ln);Ln.add.bind(Ln);Ln.remove.bind(Ln);Ln.update.bind(Ln);let Je,hr,il=new rd;function jM(n){Je=new nn(hM,n.clientWidth/n.clientHeight,1,Ua),Je.position.copy(Da),Je.lookAt(Jc),hr=new $M(Je.position),hr.onUpdate(()=>{Je.lookAt(Jc)}),window.gameCamera=Je,window.gameCameraTween=hr}function ZM(n,t,e){const i=new j,r=new j;Je.getViewBounds(n,i,r);const s=i.x+t*(r.x-i.x),a=i.y+e*(r.y-i.y),o=new I(s,a,-n);return Je.localToWorld(o)}function Pd(n,t,e){if(xr.stopCamera)return;const i=n*.7,r=t&&e?dM:fM,s=KM(t,e);hr.stop(),s?hr.to({x:i},r).easing(s).start(il.getElapsed(),!0):(Je.position.x=i,Je.lookAt(Jc))}function JM(){il.update(),hr.update(il.getElapsed())}function KM(n,t){switch(!0){case(n&&t):return oi.Sinusoidal.InOut;case n:return oi.Sinusoidal.Out;case t:return oi.Sinusoidal.In;default:return}}const zh=new j;class Se{constructor(t=new j(0,0),e=0){this.center=t,this.radius=e}getCenter(t){return t.copy(this.center)}getRadius(){return this.radius}set(t,e){return this.center.copy(t),this.radius=e,this}clone(){return new Se().copy(this)}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}makeEmpty(){return this.radius=0,this}isEmpty(){return this.radius<=0}getSize(t){return t.set(this.radius*2,this.radius*2)}expandByScalar(t){return this.radius+=t,this}containsPoint(t){return t.distanceTo(this.center)<=this.radius}intersectsBox(t){return t.clampPoint(this.center,zh),this.containsPoint(zh)}intersectsCircle(t){return this.center.distanceTo(t.center)<this.radius+t.radius}translate(t){return this.center.add(t),this}translateXZ(t){return this.center.x+=t.x,this.center.y+=t.z,this}getNewBoundingBox(){return this.getBoundingBox(new jn)}getBoundingBox(t){return t.min.x=this.center.x-this.radius,t.min.y=this.center.y-this.radius,t.max.x=this.center.x+this.radius,t.max.y=this.center.y+this.radius,t}min={self:this,get x(){return this.self.center.x-this.self.radius},get y(){return this.self.center.y-this.self.radius}};max={self:this,get x(){return this.self.center.x+this.self.radius},get y(){return this.self.center.y+this.self.radius}};toJSON(){return{type:Se.jsonType,center:this.center,radius:this.radius}}static jsonType="CircleJSON"}function ql(n){return $l(n,"player")}function Yl(n){return $l(n,"bullet")}function vn(n){return $l(n,"object")}function $l(n,t){const e=n.userData;if(e.type===t)return e;throw new TypeError(`expecting object type ${t}, got "${e.type}"`)}function ds(n){return(n.parent?.position?.z??0)+n.position.z}function QM(n){return(n.parent?.position?.x??0)+n.position.x}function Qa(n){n.clear(),n.position.set(0,0,0)}function Id(n,t=!0){const e=[];for(const i of n.children)if(ds(i)>ja)e.push(i);else if(t)break;for(const i of e)i.removeFromParent()}const rl={coin:kh("🟡"),bulletDying:kh("💥"),defaultMaterial:new Ga({color:56797})};function kh(n){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=Br,t.height=Br,e.font=`${Br}px serif`,e.textAlign="center";const i=e.measureText(n);e.font=`${Br**2/i.width}px serif`,e.fillText(n,Br/2,i.actualBoundingBoxAscent);const r=new Ie(t);return r.colorSpace=ke,r.needsUpdate=!0,new Ga({map:r,color:16777215})}function tb(n,t=!1){const e=rl[n];if(e)return e;if(t)return rl.defaultMaterial;throw new TypeError(`no material known for type "${n}"`)}const jl={beige1:15654587,brown1:13413520,brown2:11176560,brown3:7819570,green1:4500036,green2:2265122,green3:30464,silver:13421823,gunGrey:5592405,red1:16711680},Zl={side:Ke},Sr=Object.fromEntries(Object.entries(jl).map(([n,t])=>[n,new Oi({color:t,flatShading:!1,...Zl})])),Gn=Object.fromEntries(Object.entries(jl).map(([n,t])=>[n,new Oi({color:t,flatShading:!0,...Zl})])),Ld=Object.fromEntries(Object.entries(jl).map(([n,t])=>[n,new Oi({color:t,flatShading:!0,transparent:!0,opacity:.2,...Zl})]));function eb(n,t={}){const e=tb(n,!0),i=Oh[n]??Oh.defaultSize,{dataType:r=n,y:s=i[1]/2}=t,a=new Al(e);a.scale.set(...i,1),nb(a,s);const o=i[0];return a.userData.extent2d=new jn(new j(-o/2,-o/6),new j(o/2,o/6)),a.userData.type=r,a.userData.dyingMaterial=`${n}Dying`in rl?`${n}Dying`:n,a}function nb(n,t){n.center.y=.5-t/n.scale.y}function Dd(n,t){return n instanceof Se?t instanceof Se?n.intersectsCircle(t):n.intersectsBox(t):t.intersectsBox(n)}const Vh=new j,Gh=new j;function Ud(n,t){return n instanceof jn?(n.getCenter(Vh),n.getSize(Gh).multiplyScalar(t),n.setFromCenterAndSize(Vh,Gh)):n.radius*=t,n}function Na(n,t,e,i){return t instanceof Se?(i.copy(t),i.translateXZ(n.position),n.parent?.position&&i.translateXZ(n.parent.position),i):(e.copy(t),Hh(e,n.position),n.parent?.position&&Hh(e,n.parent.position),e)}function ib(n,t){return n instanceof Se?Math.sqrt(n.radius**2-(t-n.center.x)**2)+n.center.y:n.max.y}function Hh(n,t){n.min.x+=t.x,n.max.x+=t.x,n.min.y+=t.z,n.max.y+=t.z}function Xn(n){return n.userData.dying}function Jl(n){n.userData.dying=!0}class rb{constructor(t){this.countTime=t,this.remainingTime=t}remainingTime;showing=0;target=0;add=t=>{this.target+=t,this.remainingTime=this.countTime};updateShowing=t=>{if(this.showing>=this.target||t>=this.remainingTime)this.showing=this.target,this.remainingTime=0;else{const e=this.target-this.showing,i=t/this.remainingTime,r=Math.floor(e*(2-i)*i),s=Math.min(Math.max(1,r),e);this.showing+=s,this.remainingTime-=t}return this.showing}}const Ve={endRunScreen:document.querySelector("#endRunScreen"),endRunScreenCoins:document.querySelector("#endRunScreen .coin"),endRunScreenGems:document.querySelector("#endRunScreen .gem"),endRunScreenGemCount:document.querySelector("#endRunScreen .gemCount"),inRunContainer:document.querySelector("#inRunWallet"),inRun:{gem:document.querySelector("#inRunWallet .gem"),coin:document.querySelector("#inRunWallet .coin")}},Fa=new fs(Wl),Kl=new Map,Ql=new We;function sb(){Ql.clear(),Fa.reset(),Kl.clear(),Nd(!1);for(const n of Object.values(Ve.inRun))Xe(n,0);Ve.inRunContainer.classList.add("hidden")}async function ab(n,t){if(!t.award)return;const{type:e,amount:i}=t.award;Fa.add(e,i),xM(t.award);const r=ZM(Ua,...BS),[s,a]=ob(e,t.useForAward,n),o=lb(i);let c=!0;for(const l of o){c||await new Promise(f=>setTimeout(f,100));const u=c?s:s.clone();c||(u.position.copy(a),u.position.x+=(Le()-.5)*s.userData.extent2d.max.x),Ql.attach(u),WM(u,r,zS),u.addEventListener("removed",()=>{cb(e,l)}),c=!1}}function ob(n,t,e){const i=new I;let r;return typeof t=="string"?r=e.getObjectByName(t):t&&(r=e),r?r.getWorldPosition(i):(e.getWorldPosition(i),r=eb(n),r.position.copy(i)),[r,i]}function cb(n,t){Kl.getOrInsertComputed(n,()=>new rb(kS)).add(t)}function lb(n){if(n<=1)return[n];if(n<=2)return[n/2,n/2];if(n<=3)return[n/3,n/3,n/3];const t=Math.floor(Math.min(Math.log(n)+3,7)),e=new Array(t);let i=n;for(let r=0;r<t;r+=1){const s=Math.round(i/(t-r));e[r]=s,i-=s}return e}function ub(n){for(const[t,e]of Kl.entries()){const i=Ve.inRun[t],r=e.updateShowing(n);Xe(i,r),r&&Ve.inRunContainer.classList.remove("hidden")}}function Nd(n,t){Ve.endRunScreen.classList.toggle("visible",n),n&&Ve.endRunScreen.classList.toggle("win",t)}function hb(){Ve.endRunScreen.classList.contains("visible")&&Ve.endRunScreen.classList.contains("win")&&MM()}function fb(){let n=!1;n=Xe(Ve.endRunScreenCoins,Fa.read("coin"))||n,n=Xe(Ve.endRunScreenGems,Fa.read("gem"))||n;const t=Ve.endRunScreenGemCount.dataset.gemCount??"";Ve.endRunScreen.classList.toggle("gotGems",!!t),n=Xe(Ve.endRunScreenGemCount,t)||n,Ve.endRunScreen.classList.toggle("collected",n)}function db(n){Ve.endRunScreenGemCount.dataset.gemCount=n?String(n):""}const pb=new Pg({color:16766720,emissive:6705152,flatShading:!1,metalness:.7,roughness:.5,reflectivity:1}),[mb,kr]=he.bag,Vr=mb/2,gb=new gs([[0,0],[Vr*.9,0],[Vr,kr*.1],[Vr*.8,kr*.4],[Vr*.15,kr*.85],[Vr*.3,kr],[0,kr]].map(n=>new j(...n)),8).applyMatrix4(new Jt().makeShear(0,0,.07,-.15,0,0));function _b(n=pb){return new Zt(gb,n)}function tu(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,c=new Te;let l=0;for(let u=0;u<n.length;++u){const f=n[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0;const f=[];for(let h=0;h<n.length;++h){const d=n[h].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+u);u+=n[h].attributes.position.count}c.setIndex(f)}for(const u in s){const f=Wh(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let S=0;S<a[u].length;++S)d.push(a[u][S][h]);const p=Wh(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}return c}function Wh(n){let t,e,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const a=new t(s),o=new Ye(a,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const f=c/e;for(let h=0,d=u.count;h<d;h++)for(let p=0;p<e;p++){const S=u.getComponent(h,p);o.setComponent(h+f,p,S)}}else a.set(u.array,c);c+=u.count*e}return r!==void 0&&(o.gpuType=r),o}const[vb,Yr]=he.boulder,ya=vb/2*Math.sqrt(2),Fd=.13,Od=ya-Yr*Fd*Math.sqrt(2),Xh=Od*Math.sqrt(2),xb=tu([new fi(Xh,Xh).rotateX(-Math.PI/2).translate(0,Yr,0),new gs([[0,0],[ya*.8,0],[ya,Yr*.4],[ya,Yr*(1-Fd)],[Od,Yr]].map(n=>new j(...n)),4).rotateY(Math.PI/4)]);function yb(n=Gn.beige1){const t=new Zt(xb,n);return t.receiveShadow=!0,t.castShadow=!0,t}const Sb="/rwns/assets/explosion-BrJVmXi7.svg",Mb=new Hg,bb={bulletDying:Mb.load(Sb)},Eb=new Oi({color:4473924}),[Tb]=he.bullet,wb=Tb/2,Ab=Rb(wb).rotateX(-Math.PI/2);function Cb(){const n=new Zt(Ab,Eb);return n.castShadow=!0,n}function Rb(n){const t=new Te,e=new I(0,1,0),i=new I(0,0,-n),r=i.clone().applyAxisAngle(e,Math.PI*2/3),s=i.clone().applyAxisAngle(e,-Math.PI*2/3),a=new I(0,0,0);a.y=Math.sqrt(i.distanceToSquared(r)-a.distanceToSquared(r));const o=[i,r,s,a],c=[o[0],o[2],o[1],o[0],o[1],o[3],o[1],o[2],o[3],o[2],o[0],o[3]];return t.setFromPoints(c),t.computeVertexNormals(),t.translate(0,-n/2,0),t}const[Pb,Ib]=he.bulletDying,qh=new Zt(new fi(Pb,Ib),new Ha({map:bb.bulletDying,transparent:!0})),Lb=.9,[Yh,sl]=he.gatePost,$h=new Ni(Yh,sl,Yh).translate(0,sl/2,0);function Db(n,t=43775){const e=new Oi({color:t,emissive:t,emissiveIntensity:.3,flatShading:!0}),i=new kt(t),r=i.getHSL({});i.setHSL(r.h,r.s/2,r.l**.7);const s=new Ha({color:i,transparent:!0,opacity:.5,side:Ke}),a=sl*Lb,o=new fi(n,a).translate(0,a/2,0),c=new Zt(o,s);return c.add(new Zt($h,e).translateX(-n/2)),c.add(new Zt($h,e).translateX(n/2)),c}const Ub=new Kf({color:4504575,emissive:4504575,emissiveIntensity:2.2,flatShading:!0,transparent:!0,metalness:3,roughness:.2,opacity:.5,side:Ke}),[Nb,Bd]=he.gem,jh=Nb/2,sa=Bd/2,Zh=.8,Fb=new gs([[0,-sa],[jh,Bd*Zh-sa],[jh*(1-(1-Zh)*2),sa],[0,sa]].map(n=>new j(...n)),6);function Ob(n=Ub){return new Zt(Fb,n)}const sr=[{from:.1,color:new kt(16729156)},{from:.25,color:new kt(16746496)},{from:.6,color:new kt(47872)}],[zd,Jh]=he.hitBar,Kh=.05;function Bb(){const n=new Al(new Ga({color:new kt(sr.at(-1).color),opacity:0}));return n.scale.set(zd,Jh,1),n.translateY(Jh),n.name="hitBar",n}function zb(n){return n.getObjectByName("hitBar")}function kb(n,t){const e=n.getObjectByName("hitBar");if(!(!e||!(e instanceof Al))){if(t<=0){e.removeFromParent();return}e.scale.x=zd*(t*(1-Kh)+Kh),Vb(t,e.material.color),e.material.opacity=1}}function Vb(n,t){if(n<=sr[0].from){t.copy(sr[0].color);return}const e=sr.findLastIndex(o=>o.from<=n),i=sr[e];t.copy(i.color);const r=sr[e+1];if(!r)return;const s=i.from,a=r.from;t.lerp(r.color,(n-s)/(a-s))}const Gb=new I;function Hb(n){const t={openEnded:!1,boneOffset:0,...n,radius2:n.radius2??n.radius},e=new Fi(t.radius,t.radius2,t.length,t.sides,t.segmentsPerBone*(t.boneCount-1),t.openEnded).translate(0,t.length/2,0).rotateY(Math.PI/t.sides),i=t.length/(t.boneCount-1),r=[],s=[],a=e.attributes.position;for(let o=0;o<a.count;o++){const c=Gb.fromBufferAttribute(a,o).y,l=Math.floor(c/i),u=(c-l*i)/i;r.push(t.boneOffset+l,t.boneOffset+l+1,0,0),s.push(1-u,u,0,0)}return e.setAttribute("skinIndex",new wl(r,4)),e.setAttribute("skinWeight",new ue(s,4)),e}class kd{object;actions;idleAction;gunHeight;_size;walking=!1;constructor(t,e,i=e){const r=t.sides??4,s=t.maxStride??t.legLength*2,a={...t,legSegmentCount:t.legSegmentCount??5,sides:r,armRadius:t.armRadius??t.legRadius*.6,armSegmentCount:t.armSegmentCount??20,headRadius:t.headRadius??t.legLength/4,torsoOffset:t.torsoOffset??t.legRadius*(1/Math.cos(Math.PI/r)-1),gunRadius:t.gunRadius??t.legRadius,gunLength:t.gunLength??t.hipWidth,maxStride:s,...Jb(t.speed,s,t.strideDuration??1.2),idleTurnDelay:t.idleTurnDelay??20,idleTurnDuration:t.idleTurnDuration??1.6};this._size=a;const o=new We;this.object=o;const c=[...Qh(a,"left"),...Qh(a,"right")],l=new Cl(c);function u(C){const _=C==="right"?1:-1,b=Xb(Wb(a,iS(c,C+"Hip")),na(c,C+"Hip"),e,_*(a.hipWidth/2-a.legRadius));b.position.y=a.legLength,b.rotation.z=Math.PI,o.add(b),b.bind(l)}u("left"),u("right");const f=qb(a.strideDuration,a.strideLength,na(c,"rightFoot")),h=qM(o);this.actions=[h.clipAction(f,na(c,"leftFoot")),h.clipAction(f,na(c,"rightFoot"))];const d=new We;o.add(d);const p=(a.legLength-Math.sqrt(a.legLength**2-(a.strideLength/4)**2))/2,S=a.strideLength/2/a.legLength*.15,g=Yb(a.strideDuration,p);this.actions.push(h.clipAction(g,d));const m=new Zt($b(a.hipWidth+2*a.torsoOffset,(a.legRadius+a.torsoOffset)*2,a.legLength*.8).translate(0,a.legLength,0),e);d.add(m);const y=tf(a.strideDuration,S);this.actions.push(h.clipAction(y,m));const M=new Zt(new Nl(a.headRadius,1).translate(0,a.legLength*1.85+a.headRadius,0),e);d.add(M);function x(C){const _=C==="right"?1:-1,b=new Zt(Zb(C,a),e);b.position.y=a.legLength*1.8-a.armRadius,b.position.x=_*(a.hipWidth/2+a.torsoOffset),m.add(b)}x("left"),x("right");const w=new Zt(new Fi(a.gunRadius*2.2,a.gunRadius,a.gunLength,3,1,!1).rotateX(Math.PI/2).translate(0,0,-a.gunLength/2+a.torsoOffset*2),i);this.gunHeight=a.legLength*1.35,w.position.y=this.gunHeight,w.position.z=-a.legRadius-a.torsoOffset*4,m.add(w),o.traverse(C=>{C.castShadow=!0,C.receiveShadow=!0});const A=tf(a.strideDuration,-S);this.actions.push(h.clipAction(A,w)),a.idleTurnDuration&&(this.idleAction=XM(this.object,a.idleTurnDuration,a.idleTurnDelay,"y"),this.idleAction.time=Math.random()*this._size.idleTurnDuration*2)}getGunHeight(){return this.gunHeight}startWalking(){if(this.idleAction&&this.idleAction.fadeOut(.3),!this.walking){this.walking=!0;const e=this.actions[0].getClip().duration*Math.random();for(const i of this.actions)i.reset(),i.getRoot().name.startsWith("left")&&(i.time=i.getClip().duration/2),i.time+=e,i.fadeIn(i.getClip().duration/2),i.loop=Va,i.enabled=!0,i.play()}}stopWalking(){if(this.walking){this.walking=!1;for(const t of this.actions)t.fadeOut(.5);this.idleAction&&this.idleAction.play()}}setWalking(t){t?this.startWalking():this.stopWalking()}}function Wb(n,t){return Hb({boneCount:2,boneOffset:t,length:n.legLength,radius:n.legRadius/Math.cos(Math.PI/4),segmentsPerBone:n.legSegmentCount,sides:4})}function Qh(n,t){const e=new Xc;e.name=t+"Hip";const i=new Xc;return i.name=t+"Foot",i.position.z=-n.legRadius,i.position.y=n.legLength,e.add(i),[e,i]}function Xb(n,t,e,i){const r=new Hm(n,e);return r.add(t),r.position.x=i,r}function qb(n,t,e){const i=tn(0,n),r=tn(e.parent.position.y,e.position.y),s=tn(e.position.z+t/4,e.position.z-t/4);return new _n("walk",n,[new pe(".rotation[x]",i(0,.15,.45,.75,1),[0,0,.7,0,0],An),new pe(".position[z]",i(0,.25,.75,1),s(.5,0,1,.5),An),new pe(".position[y]",i(0,.25,.4,.75,1),r(1,1,.85,1,1),An)])}function Yb(n,t){const e=tn(0,n),i=tn(-t,0);return new _n("bob",n,[new pe(".position[y]",e(0,.25,.5,.75,1),i(1,0,1,0,1),An)])}function tf(n,t){const e=tn(0,n),i=tn(0,t);return new _n("bob",n,[new pe(".rotation[y]",e(0,.25,.75,1),i(0,-1,1,0),An)])}function $b(n,t,e){const i=new qf;i.moveTo(-n/2,-t/2),i.lineTo(-n/2,t/2),i.lineTo(n/2,t/2),i.lineTo(n/2,-t/2),i.closePath();const r=new Dl(i,{depth:e,bevelSize:e/7,bevelEnabled:!0,bevelOffset:-e/7,bevelSegments:1,bevelThickness:e/10});return r.rotateX(-Math.PI/2),r}function aa([n,t,e]){return new I(n,t,e)}function jb(n,t,e,i){return new kf(aa(n),aa(t),aa(e),aa(i))}function Zb(n,t){const e=n==="right"?1:-1,i=t.armRadius,r=e*(t.hipWidth/2+t.torsoOffset),s=t.legLength*.6,a=new Xf,o=[[0,0,0],[e*i,0,0],[e*i*2,-i,0],[e*i*2,-i*2,0],[e*i*2,-i*8,0],[e*i*2,-s,0],[-r,-s,0]];for(let l=0;l<o.length-3;l+=3)a.add(jb(o[l],o[l+1],o[l+2],o[l+3]));const c=Math.PI/180*(41+e*10);return new Fl(a,t.armSegmentCount,i,8).rotateX(c)}const ef=.2;function Jb(n,t,e){if(n>t/e)return{strideLength:t,strideDuration:t/n};if(n>t/e*ef)return{strideLength:n*e,strideDuration:e};{const i=t*ef;return{strideLength:i,strideDuration:i/n}}}const[ys,Re]=he.broadLeaf,Qr=.3,He=ys/2*.35,Kb=Re*(1-Qr),Qb=Sr.brown3;function tE(n){return(Kb/ys)**(1-n)}const eE=5,$o=[...li(eE).map(n=>{const t=new Ul(ys/2,1).scale(1,tE(n),1);return t.computeBoundingBox(),t})],nE=[0,Re,He,0,0,0,[[Qr,Re/2,He/3,0,60,90,[[.3,Re/4,He/6,0,60,140],[.4,Re/4,He/6,0,80,-100]]],[Qr+.1,Re/2,He/3,0,60,-135,[[.2,Re/4,He/5,0,40,-90],[.4,Re/4,He/6,0,40,150]]],[Qr+.1,Re/2,He/3,0,60,-20,[[.3,Re/4,He/6,0,60,90],[.4,Re/4,He/7,0,70,-90]]],[.7,Re/4,He/5,0,80,15],[.75,Re/5,He/5,0,80,-105],[.6,Re/4,He/5,0,70,135]]],iE=Vd(...nE,!0),rE=new ms(He,Re,4).translate(0,Re/2,0);function sE(n=!0){const t=n?$a($o):$o[0],e=Re*Qr,i=new We;n&&(i.rotation.y=Le()*Math.PI);const r=new Zt(t,Sr.green2);r.position.set(0,e-t.boundingBox.min.y,0),r.castShadow=!0,r.receiveShadow=!0,i.add(r);const s=new Zt(rE,Sr.brown3);return s.castShadow=!0,s.receiveShadow=!0,i.add(s),i.userData.extent2d=new Se(void 0,ys/2),i.userData.type="object",i.userData.height=e+t.boundingBox.max.y-t.boundingBox.min.y,i.userData._crownIndex=$o.indexOf(t),i}function aE(){const n=new Zt(iE,Qb);return n.castShadow=!0,n.receiveShadow=!0,n.userData.extent2d=new Se(void 0,ys/2),n.userData.type="object",n}function Vd(n,t,e,i,r,s,a,o=!1){const c=[];if(c.push(new Fi(i,e,t,3,1,!o).translate(0,t/2,0)),a)for(const[l,...u]of a)c.push(Vd(t*l,...u));return tu(c).rotateX(r/180*Math.PI).rotateY(s/180*Math.PI).translate(0,n,0)}const nf=[Sr.green3,Sr.green2],Gd=Sr.brown3,ts=5,Hd=.2,[Ss,Oa]=he.conifer,oE=5,al=Ss/2*.3,Wd=Oa*(1-Hd),ol=Hd*Oa,rf=[...li(oE).map(n=>{const t=Wd*1.11**n;return{height:t,cones:[...li(ts).map(e=>{const i=t*(1-.9**(ts-1-e)),r=.8**e,s=Ss/2*r**.55,a=t*r-i,o=t-i-a;return new ms(s,a,4,1,e>0).translate(0,a/2+o,0)})]}})],Xd=new ms(al,Oa,4).translate(0,Oa/2,0),cE=tu([Xd,...li(ts*2).map(n=>{const t=Wd,e=t*(1-.9**(ts-1-n)),i=.8**n,r=Ss/2*i**.55,s=t*i-e,a=t-e-s,o=Math.min(al*(1-a/t)*.8,al/2);return new Fi(o,o/3,r,4,1).rotateY(Math.PI/4).rotateZ(Math.PI/2).translate(r/2,a+ol,0).rotateY(Math.PI*4/ts*n)})]);function lE(n=!0){const t=new We;n&&(t.rotation.y=Le()*Math.PI);const{height:e,cones:i}=n?$a(rf):rf[0];for(let s=0;s<i.length;s+=1){const a=nf[s%nf.length],o=new Zt(i[s],a);o.castShadow=!0,o.receiveShadow=!0,o.position.y=ol,t.add(o)}const r=new Zt(Xd,Gd);return r.castShadow=!0,r.receiveShadow=!0,t.add(r),t.userData.extent2d=new Se(void 0,Ss/2),t.userData.type="object",t.userData.height=e+ol,t}function uE(){const n=new Zt(cE,Gd);return n.castShadow=!0,n.receiveShadow=!0,n.userData.extent2d=new Se(void 0,Ss/2),n.userData.type="object",n}function hE(n){const t=Cb();t.userData.extent2d=new Se(void 0,he.bullet[1]/2),t.userData.type="bullet",t.translateY(n.userData.gunHeight??he.player[1]/2);const e=Cd(t,YS,"z");return t.addEventListener("removed",()=>e.stop()),t}function fE(n,t){n instanceof Zt&&(n.geometry=qh.geometry,n.material=qh.material),n.position.z=ib(t,n.position.x)+.1-n.parent.position.z,Jl(n),setTimeout(()=>n.removeFromParent(),XS*1e3)}function dE(n,t){const{w:e,d:i=1,color:r}=gM[n],s=Db(e,r);return s.userData.extent2d=new jn(new j(-e/2,-i),new j(e/2,1)),s.userData.type="object",s.userData.onPlayerCollision=t,s.userData.benign=!0,s}function pE(n){HM(n,Za)}function mE(n,t=!1){const e=Ob();if(e.userData.extent2d=new Se(void 0,he.gem[0]/2),e.userData.type="object",n&&(e.userData.id=n),e.castShadow=!0,e.translateY(he.player[1]/2),e.userData.height=he.gem[1],!t){e.rotateY(Le()*Math.PI);const i=Cd(e,OS,"y");e.addEventListener("removed",()=>i.stop())}return e}function gE(n,t=!1){t&&n.userData.id&&AM(n.userData.id),t||Xl(n,Za)}function _E(){const n=_b();return n.userData.extent2d=new Se(void 0,he.bag[0]/2),n.userData.type="object",n.castShadow=!0,n.receiveShadow=!0,n.rotateY(Le()*Math.PI*2),n}function vE(n){Xl(n,Za)}function xE(n=Le()<.5){const t=n?lE():sE();return t.userData._createRandomTree_isConifer=n,t}function yE(n){const t=n.userData._createRandomTree_isConifer?uE():aE();t.position.copy(n.position),t.scale.copy(n.scale),t.rotation.copy(n.rotation),t.userData=n.userData,Ad(t,FS),n.parent.add(t),n.removeFromParent()}const jo=[Gn.beige1,Gn.brown1,Gn.brown2,Gn.brown3];function SE(n){const t=jo[Math.min(jo.length-1,Math.floor(n*jo.length))],e=yb(t),[i,r]=he.boulder;return e.userData.extent2d=new jn(new j(-i/2,-i/2),new j(i/2,i/2)),e.userData.type="object",e.userData.height=r,e}function ME(n){Xl(n,Za)}const qd={tree:[xE,yE],gems:[mE,gE],coins:[_E,vE],gate:[dE,pE],endBlock:[SE,ME]};function Ms(n,...t){const e=qd[n][0](...t);return e.userData._createObject_type=n,e.userData.height&&e.add(Bb().translateY(e.userData.height)),e}function Yd(n,t=!1){const e=n.userData._createObject_type;Jl(n),qd[e][1](n,t);const i=vn(n);if(typeof i.useForAward=="string"){const r=n.getObjectByName(i.useForAward);r&&Yd(r,t)}}const $d=Gn.silver,jd=Gn.gunGrey,eu=new Map;eu.set($d,Ld.red1);eu.set(jd,Ld.red1);function bE(){const[n,t]=he.player,e=new kd({hipWidth:n,legLength:t/2,legRadius:t*.053,speed:vs},$d,jd),i=e.object;return i.userData.extent2d=new Se(void 0,n/2*1.3),i.userData.type="player",i.userData.gunHeight=e.getGunHeight(),i.userData.marvin=e,i}function EE(n){const t=n.userData.marvin;return t instanceof kd?t:void 0}function TE(n,t){EE(n)?.setWalking(t)}function wE(n){Jl(n),Ad(n,qS,!0),n.traverse(t=>{if("material"in t){const e=eu.get(t.material);e&&(t.material=e)}})}const cl=new kt,AE=pd("brickSquare1"),CE=[0,-3,-1,-2],RE=[...li(10).map(n=>cl.setHSL(28/360,.37,(30+n*2)/100,ke).getHex())];function PE(n=100,t=4,e=RE){const i=Math.round(t),r=e.map(m=>{cl.setHex(m,ke);const{r:y,g:M,b:x}=cl;return[y,M,x,y,M,x,y,M,x,y,M,x,y,M,x,y,M,x]}),s=i*4,a=i*8,c=(i**2*8+i*3)*18,l=n/s,u=l/2,f=new Float32Array(c),h=new Float32Array(c);let d=0;for(let m=0;m<s;m+=1){const y=m*l,M=(m+1)*l;for(let x=CE[m%4];x<a;x+=4){const w=Math.max(0,x*u),A=Math.min(n,(x+4)*u),C=[w,y],_=[A,y],b=[A,M],F=[w,M];f.set(C,d),f.set(_,d+3),f.set(b,d+6),f.set(b,d+9),f.set(F,d+12),f.set(C,d+15);const P=$a(r,AE);h.set(P,d),d+=18}}const p=new Te;p.setAttribute("position",new Ye(f,3)),p.setAttribute("color",new Ye(h,3)),p.translate(-n/2,-n/2,0),p.computeVertexNormals();const S=new Oi({vertexColors:!0,shadowSide:Ke}),g=new Zt(p,S);return g.receiveShadow=!0,g}const Ci=ui+2*Gl,IE=PE(Ci,15).rotateX(-Math.PI/2);function LE(n){const t=Math.ceil(us/Ci)*2;let e=ja-Ci/2;for(let i=0;i<t;i+=1){const r=IE.clone();r.position.z=e,r.userData.type="track",n.add(r),e-=Ci}n.userData.trackDist=Ci,n.userData.trackNextZ=e}function DE(n){LE(n);const t=us/PS,e=IS,i=Gl,r=sf(!1,i,i,e),s=sf(!0,i,i,e);let a=ja+e/2;for(;a>=-400-t*2;){const o=new Zt(r,Gn.brown2),c=new Zt(s,Gn.brown2);o.position.set(-Ci/2+i/2,i/2,a),c.position.set(Ci/2-i/2,i/2,a),o.userData.type="side",c.userData.type="side",o.receiveShadow=!0,c.receiveShadow=!0,o.castShadow=!0,c.castShadow=!0,n.add(o),n.add(c),a-=t}n.userData.sideDist=t,n.userData.sideNextZ=a}function UE(n,t){n.position.z+=t*vs;const e=ja-n.position.z,i=n.userData.sideNextZ,r=n.userData.trackNextZ,s=e+n.userData.trackDist/2;let a=!1,o=!1;for(const c of[...n.children])c.userData.type==="side"&&c.position.z>e?(c.position.z=i,a=!0):c.userData.type==="track"&&c.position.z>s&&(c.position.z=r,o=!0);a&&(n.userData.sideNextZ-=n.userData.sideDist),o&&(n.userData.trackNextZ-=n.userData.trackDist)}function sf(n,t=1,e=1,i=1){return new Ni(t,e,i)}function Zd(n,t,e,i=e){const r=[],s=he.conifer[0],a=Math.round(n/(s/t))+1,o=ui-s;let c=1/0;for(let l=0;l<=a;l++){const u=-l*n/a,f=AS(-o/2,o/2,c,n/a,s*.75);c=f;const h=Ms("tree"),d=vn(h);h.position.x=f,h.position.z=u;const p=e===i?e:Math.max(i,(1-Le()/2)*e);d.hitPoints=p,Ud(d.extent2d,.9),r.push(h)}return r}function Jd(n,t,e=!1){const i=Ms("gems",t,e),r=vn(i);return r.hitPoints=n,r.benign=!0,r.award={type:"gem",amount:1},r.useForAward=!0,i}function Kd(n){const t=Ms("coins"),e=vn(t);return e.collectible=!0,e.award={type:"coin",amount:n},Ud(e.extent2d,3),t}function Qd(n,t,e,i,r=0){const s=[],a=ui/Kc,o=rS(r,t);for(let c=0;c<t;c+=1)for(let l=0;l<Kc;l+=1){const u=Ms("endBlock",c/(t-1));u.position.x=l*a+a/2-ui/2,u.position.z=n-(c+1)*a*1.5;const f=vn(u);f.hitPoints=Sm.lerp(i,e,c/(t-1)),o[c]&&(f.award={amount:o[c],type:"coin"}),s.push(u)}return s}const Zo=[ll,ll,tp,NE];function ll(n,t){return{objects:Zd(gd,_d,t.playerBulletHitPoints),customMessage:"don't run into trees"}}function tp(n,t){const{objects:e}=ll(n,t),i=[1,2,3,1,2,3,1,2,3,2],r=i.length,s=Zc(e,r);for(const a of s){const o=e[a],c=Kd(md(i));e[a]=c,c.position.add(o.position)}return{objects:e,customMessage:"find and collect coins"}}function NE(n,t){const{objects:e}=tp(n,t),i="some things take more than one bullet",r=e.at(-1).position.z-he.boulder[0]-he.conifer[0],s=Qd(r,4,3,1);return{objects:e.concat(s),customMessage:i}}const af=4;function FE(n,t){const e=cM**(n.level-af+1),i=t.objectHitPoints*e,r=n.level===af?`from now on
it gets harder`:"",s=Zd(gd,_d,i,t.objectHitPoints),a=Ja("cards",n)?t.gemsPerLevel:0,o=Math.round(a/2),c=a-o,l=OE(lM,t.coinsPerLevel);l.push(...of(o,"tree"));const u=Zc(s,l.length);let f=0;for(const g of u){const m=s[g],y=md(l);let M=null;if(y.type==="gem"){const x=Jd(t.gemHitPoints*e,y.id);n.collectedGemIds.includes(y.id)||(M=x,f+=1)}else if(y.type==="bag")M=Kd(y.amount);else throw new Error(`unhandled item ${JSON.stringify(y)}`);M&&(s[g]=M,M.position.add(m.position))}const h=s.at(-1).position.z-he.boulder[0]-he.conifer[0],d=Qd(h,8,t.maxEndBlockHitPoints*e,i/2,t.endBlockCoinsPerLevel),p=[...of(c,"block")],S=Zc(d,p.length);for(const g of S){const m=p.pop();BE(m,d[g],n)&&(f+=1)}return{objects:s.concat(d),customMessage:r,gemCount:f}}function of(n,t=""){return li(n).map(e=>({type:"gem",id:`gem_${t}${e}`}))}function OE(n,t){if(t<=n)return Array(t).fill({type:"bag",amount:1});const e=Array(n);let i=t;for(let a=0;a<n;a+=1){const o=Math.round(i/(n-a));e[a]=o,i-=o}const r=t/n,s=Math.round(r*.26);if(s>=1){const a=n/(s+.5);for(let o=0;o<n-1;o+=2){const c=s-Math.floor((o+1)/a);e[o]-=c,e[o+1]+=c}}return e.map(a=>({type:"bag",amount:a}))}function BE(n,t,e){const i=Jd(0,n.id,!0),r=Math.PI*2*Le(),s=Math.PI*(Le()*.05+.05);if(e.collectedGemIds.includes(n.id))return!1;{i.position.y=he.boulder[1]-he.gem[1]*.3;const a=zb(t);a&&(a.position.y+=he.gem[1]*.3),i.name=n.id,i.castShadow=!1,i.rotation.y=r,i.rotation.z=s,t.add(i);const o=vn(t);return o.award={amount:1,type:"gem"},o.useForAward=n.id,!0}}function zE(n,t){try{return n.level<Zo.length?Zo[n.level](n,t):FE(n,t)}catch(e){return console.error("error making a level",e),{...Zo[0](n,t),customMessage:"unexpected intermission"}}}const on=new We;function kE(n){Qa(on),on.position.z=-50;const{objects:t,customMessage:e="",gemCount:i=0}=zE(n.state,n.params);for(const s of t){const a=vn(s);a.maxHitPoints=a.hitPoints,s.userData.maxZ=s.position.z+a.extent2d.max.y}t.sort(VE);const r=Ms("gate","end",n.onFinish);r.userData.maxZ=t.at(-1).userData.maxZ-US,r.translateZ(r.userData.maxZ),vn(r).hitPoints=1/0,t.push(r);for(const s of t)on.add(s);return{msg:e??"",gemCount:i??0}}function VE(n,t){return t.userData.maxZ-n.userData.maxZ}function GE(n){const t=vs*n;on.position.z+=t,Id(on)}function ep(n,t,e=!1){if(Xn(n))return!1;const i=vn(n);if(!e&&i.collectible)return!1;if(e&&i.benign||(i.hitPoints-=t),i.maxHitPoints&&i.hitPoints<i.maxHitPoints&&kb(n,i.hitPoints/i.maxHitPoints),i.collectible||i.hitPoints<=0||i.benign&&e&&i.hitPoints!==1/0){const r=i.award&&!(i.benign&&e);Yd(n,r),r&&ab(n,i)}return!0}const cf=new Oi({color:0,wireframe:!0});function lf(n){for(const t of[...n])t.type!=="Sprite"&&np(t)}function np(n){const t=HE(n.userData.extent2d);t.rotateX(Math.PI/2),t.position.y=-n.position.y+.1,t.userData.isExtent=!0,n.add(t)}const Jo=new j;function HE(n){if(n instanceof Se){const t=new Pl(n.radius,16);return new Zt(t,cf)}else{n.getSize(Jo);const t=new fi(Jo.x,Jo.y);return new Zt(t,cf)}}const Tn=new We;function WE(){Qa(Tn)}function XE(n,t){const e=hE(n),i=Yl(e);i.minZ=Tn.position.z-t.range,i.hitPoints=t.bulletHitPoints,e.position.z=-Tn.position.z+n.position.z+t.extent2d.min.y*2,e.position.x=QM(n),Tn.add(e),xr.showingExtents&&np(e)}function qE(n){const t=WS*n;Tn.position.z-=t;for(const r of[...Tn.children])JE(r);const e=Tn.position.z,i=[];for(const r of Tn.children){const s=Yl(r);if(e>=s.minZ)break;Xn(r)||i.push(r)}for(const r of i)r.removeFromParent()}const YE=new jn,$E=new jn,jE=new Se,ZE=new Se;function JE(n){const t=Yl(n),e=ds(n),i=e+t.extent2d.min.y,r=e+t.extent2d.max.y;for(const s of on.children){const a=ds(s),o=vn(s),c=a+o.extent2d.min.y;if(a+o.extent2d.max.y<i)return;const u=Na(s,o.extent2d,YE,jE),f=Na(n,t.extent2d,$E,ZE);if(c<r&&Dd(u,f)&&ep(s,t.hitPoints)){fE(n,u);return}}}const ye=new We;function KE(n,t){Qa(ye);const e=Qo(t.playerShotsPerSecond,n.runUpgradeLevels,"rate"),i=Qo(t.startingPlayers,n.runUpgradeLevels,"players"),r=Le()<.5;for(let s=0;s<i;s+=1){const a=bE(),{row:o,column:c}=QE(s);a.position.z=o*he.player[0]*1.35,a.position.x=c*he.player[0]*2.5*(r?-1:1);const l=ql(a);l.shotTime=1/e,l.remainingShotTime=l.shotTime/i*s+l.shotTime/2,l.range=t.playerBulletRange,l.bulletHitPoints=Qo(t.playerBulletHitPoints,n.runUpgradeLevels,"damage"),l.hitPoints=t.playerHitPoints,ye.add(a)}ip(ye),Pd(0)}function QE(n){const t=Math.floor((Math.sqrt(1+8*n)-1)/2),e=t&&t*(t+1)/2,i=n+1-e,r=t%2/2,s=Math.floor(i/2)*(i%2*2-1),a=r+s,o=t>0?(Le()-.5)/4:0;return{row:t+o,column:a}}function ip(n){let t=1/0,e=-1/0;for(const i of n.children)if(!Xn(i)){const r=i.userData.extent2d.min.x+i.position.x;t>r&&(t=r);const s=i.userData.extent2d.max.x+i.position.x;e<s&&(e=s)}t<1/0&&(ye.userData.minX=t,ye.userData.maxX=e)}function tT(){ip(ye)}function eT(n){const t=ui-ye.userData.maxX+ye.userData.minX,e=n*t,i=ye.position.x+e,r=ui/2,s=-r-ye.userData.minX,a=r-ye.userData.maxX;ye.position.x=Math.max(s,Math.min(a,i)),Pd(ye.position.x,!0)}function nT(n){for(const t of ye.children){if(Xn(t))continue;const e=ql(t);e.remainingShotTime-=n,e.remainingShotTime<=0&&(e.remainingShotTime+=e.shotTime,XE(t,e))}}const iT=new jn,rT=new jn,sT=new Se,aT=new Se;function oT(n){const t=ql(n),e=ds(n),i=e+t.extent2d.max.y,r=e+t.extent2d.min.y;for(const s of[...on.children]){if(Xn(s))continue;const a=ds(s),o=vn(s),c=a+o.extent2d.min.y;if(a+o.extent2d.max.y<r)return;if(c<i&&Dd(Na(s,o.extent2d,iT,sT),Na(n,t.extent2d,rT,aT))){o.onPlayerCollision&&o.onPlayerCollision(n);const u=o.hitPoints;if(ep(s,t.hitPoints,!0)&&!o.collectible&&!o.benign&&(t.hitPoints-=u),t.hitPoints<=0){wE(n),tT();return}}}}function cT(){for(const n of[...ye.children])Xn(n)||oT(n)}function rp(n){for(const t of ye.children)TE(t,n)}const Ri=new We;function lT(){Qa(Ri)}function uT(n){const t=vs*n;Ri.position.z+=t,Id(Ri,!1);const e=[...Iterator.from(on.children).filter(i=>Xn(i)),...Iterator.from(ye.children).filter(i=>Xn(i)),...Iterator.from(Tn.children).filter(i=>Xn(i))];for(const i of e)i.position.add(i.parent.position),Ri.add(i),i.position.sub(Ri.position)}const ul=new We;function hT(){return DE(ul),ul}function fT(n){UE(ul,n)}let Ei;const ze=new Nm;function dT(n){const t=n.querySelector("canvas");if(!t)throw new Error("cannot work without a canvas");Ei=new nS({antialias:!0,canvas:t}),Ei.shadowMap.enabled=NS,jM(t),window.gameScene=ze,window.gameRenderer=Ei,e(),window.addEventListener("resize",e);function e(){Ei.setPixelRatio(window.devicePixelRatio),Ei.setSize(n.clientWidth,n.clientHeight),Je.aspect=n.clientWidth/n.clientHeight,Je.updateProjectionMatrix(),nu()}return()=>{window.removeEventListener("resize",e)}}function nu(n){if(!ze){console.warn("render called before setting the scene");return}Ei.render(ze,Je),n&&console.log("triangles",Ei.info.render.triangles)}class pT{constructor(t,e){this.el=t,this.opts=e,t.addEventListener("touchstart",this.handleStart,{passive:!0}),t.addEventListener("touchend",this.handleEnd,{passive:!0}),t.addEventListener("touchmove",this.handleMove,{passive:!0}),t.addEventListener("mousedown",this.handleStart,{passive:!0}),t.addEventListener("mouseup",this.handleEnd,{passive:!0}),t.addEventListener("mouseleave",this.handleEnd,{passive:!0}),t.addEventListener("mousemove",this.handleMove,{passive:!0}),this.speedUp=e.speedUp??1}lastPosition=null;speedUp;enabled=!0;isActive=!1;handleStart=t=>{this.lastPosition=this.getPositionFraction(t),this.isActive=!0};handleEnd=()=>{this.lastPosition=null,this.isActive=!1};handleMove=t=>{if(!this.enabled||!this.isActive)return;const e=this.getPositionFraction(t);if(e!=null&&this.lastPosition!=null){const i=(e-this.lastPosition)*this.speedUp;i&&this.opts.onMoveBy?.(i),this.lastPosition=e}};toggle=t=>{this.enabled=t??!this.enabled};shutdown=()=>{this.el.removeEventListener("touchstart",this.handleStart),this.el.removeEventListener("touchend",this.handleEnd),this.el.removeEventListener("touchmove",this.handleMove),this.el.removeEventListener("mousedown",this.handleStart),this.el.removeEventListener("mouseup",this.handleEnd),this.el.removeEventListener("mouseleave",this.handleEnd),this.el.removeEventListener("mousemove",this.handleMove)};getPositionFraction=t=>{const e=t instanceof TouchEvent?t.touches[0]?.clientX:t.clientX;return e!=null?e/this.el.clientWidth:null}}let sp,$n=!1,Ba=!1,iu=!1;const Ti={main:document.querySelector("main"),canvas:document.querySelector("#webglCanvas"),exitBtn:document.querySelector("#exitBtn"),shortMessage:document.querySelector("#shortMessage")};function mT(){dT(Ti.main),gT(),op(),sp=new pT(Ti.canvas,{speedUp:1+pM/100,onMoveBy:eT}),bs(),Ti.main.addEventListener("fullscreenchange",()=>{vT(document.fullscreenElement==null)}),Ti.exitBtn.addEventListener("click",n=>{$n&&(ru(!0),n.stopImmediatePropagation(),n.stopPropagation(),n.preventDefault(),Ti.exitBtn.disabled=!0)})}function bs(){sp.toggle($n&&!Ba&&!iu)}function gT(){ze.clear(),ze.background=new kt(11583696),ze.fog=new Tl(ze.background,Ua-us*.2,Ua);const n=new Wg(16777215,12155424,1);ze.add(n);const t=new Yg(16777215,3);t.position.set(40,40,20),ze.add(t),t.castShadow=!0,t.shadow.camera.left=-100,t.shadow.camera.right=us,t.shadow.camera.top=40,t.shadow.camera.bottom=-40,t.shadow.camera.near=1,t.shadow.camera.far=200,t.shadow.bias=-.01,t.shadow.camera.up=new I(-1,1,0).normalize(),t.shadow.mapSize.set(2048,256),ze.add(Ql),ze.add(on),ze.add(ye),ze.add(Tn),ze.add(Ri),ze.add(hT())}function ap(n,t){wS(String(n.level)),GM(),sb();const e=kE({state:n,params:t,onFinish:()=>ru(!0,!0)});Ti.shortMessage.textContent=e.msg,db(e.gemCount),KE(n,t),WE(),lT(),$n=!1,bs(),xr.showingExtents&&(lf(ye.children),lf(on.children)),nu(!0)}function _T(){$n||bM(),$n=!0,Ba=!1,bs(),rp(!0)}function ru(n=!1,t=!1){!$n||Ba||(Ba=!0,Ti.exitBtn.disabled=!0,t&&SM(),bs(),fb(),setTimeout(()=>{Nd(!0,t),setTimeout(()=>{$n=!1,rp(!1)},1e3)},n?0:1e3))}function vT(n){iu=n,bs(),Li.update()}function xT(){const n=ye.children.length===0;return!n&&on.children.length===0&&Ri.children.length===0?"win":n}function op(n){if(requestAnimationFrame(op),Li.update(n),!iu){if(n!=null){const t=Li.getDelta();if(VM(t),JM(),$n){GE(t),fT(t),cT(),nT(t),qE(t),uT(t),ub(t);const e=xT();e&&ru(!1,e==="win")}}nu(),$n&&xr.fpsLogging&&kM(n,`${on.children.length}: `)}}const fr={upgrades:{players:document.querySelector("#mainScreen .upgradeButtons > .players"),rate:document.querySelector("#mainScreen .upgradeButtons > .rate"),damage:document.querySelector("#mainScreen .upgradeButtons > .damage")}};function yT(){fr.upgrades.players.addEventListener("click",Ko("players")),fr.upgrades.rate.addEventListener("click",Ko("rate")),fr.upgrades.damage.addEventListener("click",Ko("damage"))}function ST(n,t){for(const e of Object.keys(fr.upgrades))fr.upgrades[e].classList.toggle("hidden",!Ja(`${e}Upgrade`,n)),MT(e,n,t)}function MT(n,t,e){const{currentLevel:i,nextLevel:r,nextPrice:s}=lp(n,t,e),a=t.wallet.read("coin")>=(s??0),o=r==null,c=fr.upgrades[n],l=!a||o;c.classList.toggle("disabled",l),c.classList.toggle("unaffordable",!a),c.classList.toggle("max",o);const u=c.querySelector(".cost .value");u.textContent=s?Ia(s):"—";const f=c.querySelector(".level .value");f.textContent=o?"MAX":`Level ${i+1}`}function Ko(n){return t=>{if(t.currentTarget instanceof HTMLElement&&!t.currentTarget.classList.contains("disabled")){const e=xs(),i=Ar();bT(n,e,i),ap(e,i),za(e,i)}}}const cp={damage:{price:(n,t)=>tc(t.damageUpgradePrice,1.3*3**((n-1)/2)),value:(n,t)=>n*2**(t/6)},rate:{price:(n,t)=>tc(t.rateUpgradePrice,1.3*3**((n-1)/2)),value:(n,t)=>n*2**(t/6)},players:{price:(n,t)=>tc(t.playersUpgradePrice,31.92*1.2577**n),value:(n,t)=>n+t}};function bT(n,t,e){const{nextLevel:i,nextPrice:r}=lp(n,t,e);i&&(t.wallet.read("coin")<r||(xd("coin",r),EM(n,i)))}function lp(n,t,e){const i=t.runUpgradeLevels[n]??0,r=TT(`${n}MaxUpgrade`,e);if(i===r)return{currentLevel:i};const s=i+1,a=cp[n].price,o=a(s,e);return{currentLevel:i,nextLevel:s,nextPrice:o}}function Qo(n,t,e){const i=t[e];if(!i)return n;const r=cp[e].value;return r(n,i)}function ET(n){if(n==null)return{};if(typeof n!="object")throw new TypeError("malformed run upgrade levels data");const t={};for(const[e,i]of Object.entries(n)){if(!BM.includes(e))throw new TypeError(`unknown upgrade type ${e}`);t[e]=Xr(i)}return t}function tc(n,t){return Math.max(1,Math.round(n*Number(t.toPrecision(2))))}function TT(n,t){if(!(n in t))throw new Error(`cannot find ${n} in ${JSON.stringify(t)}`);return t[n]}const _e={main:document.querySelector("main"),canvas:document.querySelector("#webglCanvas"),topButtons:document.querySelector("#topBar"),exitBtn:document.querySelector("#exitBtn"),settingsBtn:document.querySelector("#settingsBtn"),endRunScreenOK:document.querySelector("#endRunScreen button.ok"),endRunScreenRetry:document.querySelector("#endRunScreen button.retry"),walletContainer:document.querySelector("#mainScreenWallet"),wallet:{gem:document.querySelector("#mainScreenWallet .gem"),coin:document.querySelector("#mainScreenWallet .coin")},playStats:{played:document.querySelector("#playStats .played"),level:document.querySelector("#playStats .level"),energy:document.querySelector("#playStats .energy")},upgradeButtons:document.querySelector("#mainScreen .upgradeButtons")};function wT(){vM(),mT(),yT(),_e.canvas.addEventListener("touchstart",uf),_e.canvas.addEventListener("mousedown",uf),_e.endRunScreenOK.addEventListener("click",()=>Mr("mainScreen")),_e.endRunScreenRetry.addEventListener("click",AT),_e.settingsBtn.addEventListener("click",RT),_e.topButtons.addEventListener("touchdown",n=>n.stopPropagation()),_e.upgradeButtons.addEventListener("touchdown",n=>n.stopPropagation()),_e.main.addEventListener("fullscreenchange",()=>za()),document.addEventListener("visibilitychange",()=>za())}function uf(){const n=Ar();if(!_e.main.classList.contains("run")){if(_e.main.classList.contains("no-energy")){up(n);return}if(!wM(n))return;_e.main.classList.add("run"),_T()}}function AT(){hb(),Mr("mainScreen")}function CT(){_e.main.classList.remove("run"),_e.exitBtn.disabled=!1;const n=xs(),t=Ar();ap(n,t),za(n,t)}function za(n=xs(),t=Ar()){Xe(_e.wallet.coin,n.wallet.read("coin")),Xe(_e.wallet.gem,n.wallet.read("gem")),fd(_e.walletContainer,!n.wallet.read("coin")&&!n.wallet.read("gem")),Xe(_e.playStats.level,n.level,String),Xe(_e.playStats.played,n.played,String),up(t),ST(n,t)}function up(n){const{energy:t,nextEnergyMs:e}=Sd(n);if(t<1/0)if(t)Xe(_e.playStats.energy,t);else{const i=Math.floor(e/6e4),r=i?`${i}min`:`${Math.ceil(e/1e3)}s`;Xe(_e.playStats.energy,`0 (next in ${r})`)}else fd(_e.playStats.energy,!0);_e.main.classList.toggle("no-energy",!t)}function RT(){window.confirm("reset all data?")&&(vd(),Mr("mainScreen"))}function PT(){wT(),NM()}const hf={...ff("mainScreen",CT),...ff("cards",wd)};function Mr(n){const t=hf[n];for(const e of Object.values(hf))e.el.classList.add("inactive");t.el.classList.remove("inactive"),t.cb?.()}function IT(n){const t=document.querySelector(`main > section#${n}`);if(!t)throw new Error(`cannot find element for section ${n}`);return t}function ff(n,t){return{[n]:{el:IT(n),cb:t}}}let LT=!0;const Sa={startBtn:document.querySelector("#startBtn"),exitBtn:document.querySelector("#exitBtn"),main:document.querySelector("main"),version:document.querySelector("#version")};function DT(){document.body.classList.toggle("using-fullscreen",LT),PT(),document.body.addEventListener("keyup",NT),Sa.startBtn.addEventListener("click",hp),Sa.exitBtn.addEventListener("click",UT),Xe(Sa.version,"20e9eed"),document.addEventListener("contextmenu",n=>n.preventDefault()),Mr("mainScreen")}async function hp(){await Sa.main.requestFullscreen()}function UT(){document.exitFullscreen()}function NT(n){n.key===" "&&!document.fullscreenElement&&hp()}DT();
