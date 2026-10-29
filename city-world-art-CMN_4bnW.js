import{D as ph,C as xa,t as mh,m as gh,r as Ko,s as _h,A as Qo,a as vh,b as xh}from"./index-CSntLQNw.js";const fo="186",Mh=0,jo=1,Sh=2,cr=1,po=2,rs=3,ci=0,Ve=1,nn=2,Un=0,cs=1,tl=2,el=3,nl=4,yh=5,Oi=100,bh=101,Eh=102,wh=103,Th=104,Ah=200,Rh=201,Ch=202,Ph=203,uc=204,dc=205,Lh=206,Ih=207,Dh=208,Uh=209,Nh=210,Fh=211,Oh=212,Bh=213,zh=214,Ma=0,Sa=1,ya=2,_s=3,ba=4,Ea=5,wa=6,Ta=7,fc=0,Hh=1,Gh=2,Sn=0,pc=1,mc=2,gc=3,mo=4,_c=5,vc=6,xc=7,Mc=300,hi=301,ki=302,Nr=303,Fr=304,Tr=306,vs=1e3,In=1001,Aa=1002,Fe=1003,kh=1004,Ls=1005,ke=1006,Or=1007,oi=1008,je=1009,Sc=1010,yc=1011,xs=1012,go=1013,bn=1014,un=1015,En=1016,_o=1017,vo=1018,Ms=1020,bc=35902,Ec=35899,wc=1021,Tc=1022,dn=1023,Fn=1026,li=1027,xo=1028,Mo=1029,ui=1030,So=1031,yo=1033,hr=33776,ur=33777,dr=33778,fr=33779,Ra=35840,Ca=35841,Pa=35842,La=35843,Ia=36196,Da=37492,Ua=37496,Na=37488,Fa=37489,gr=37490,Oa=37491,Ba=37808,za=37809,Ha=37810,Ga=37811,ka=37812,Va=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,Za=37818,Ja=37819,$a=37820,Ka=37821,Qa=36492,ja=36494,to=36495,eo=36283,no=36284,_r=36285,io=36286,Vh=3200,so=0,Wh=1,Jn="",Ge="srgb",vr="srgb-linear",xr="linear",ge="srgb",Br=7680,Xh=519,qh=512,Yh=513,Zh=514,bo=515,Jh=516,$h=517,Eo=518,Kh=519,Ac=35044,il="300 es",Mn=2e3,Ss=2001;function Qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jh(){const i=ys("canvas");return i.style.display="block",i}const sl={};function Mr(...i){const t="THREE."+i.shift();console.log(t,...i)}function Rc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=Rc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=Rc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Hi(...i){const t=i.join(" ");t in sl||(sl[t]=!0,Vt(...i))}function tu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const eu={[Ma]:Sa,[ya]:wa,[ba]:Ta,[_s]:Ea,[Sa]:Ma,[wa]:ya,[Ta]:ba,[Ea]:_s};class fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rl=1234567;const hs=Math.PI/180,bs=180/Math.PI;function yn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function wo(i,t){return(i%t+t)%t}function nu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function iu(i,t,e){return i!==t?(e-i)/(t-i):0}function us(i,t,e){return(1-e)*i+e*t}function su(i,t,e,n){return us(i,t,1-Math.exp(-e*n))}function ru(i,t=1){return t-Math.abs(wo(i,t*2)-t)}function au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ou(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function lu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function cu(i,t){return i+Math.random()*(t-i)}function hu(i){return i*(.5-Math.random())}function uu(i){i!==void 0&&(rl=i);let t=rl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function du(i){return i*hs}function fu(i){return i*bs}function pu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function mu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _u(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),f=r((t-n)/2),h=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*u,o*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const vu={DEG2RAD:hs,RAD2DEG:bs,generateUUID:yn,clamp:te,euclideanModulo:wo,mapLinear:nu,inverseLerp:iu,lerp:us,damp:su,pingpong:ru,smoothstep:au,smootherstep:ou,randInt:lu,randFloat:cu,randFloatSpread:hu,seededRandom:uu,degToRad:du,radToDeg:fu,isPowerOfTwo:pu,ceilPowerOfTwo:mu,floorPowerOfTwo:gu,setQuaternionFromProperEuler:_u,normalize:_e,denormalize:hn},Fo=class Fo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fo.prototype.isVector2=!0;let at=Fo;class Qn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],M=r[a+3];if(f!==M||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*M;m<0&&(h=-h,d=-d,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),w=Math.sin(S);p=Math.sin(p*S)/w,o=Math.sin(o*S)/w,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+M*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+M*o;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-o*d,t[e+2]=c*g+u*d+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Oo=class Oo{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zr.copy(this).projectOnVector(t),this.sub(zr)}reflect(t){return this.sub(zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Oo.prototype.isVector3=!0;let I=Oo;const zr=new I,al=new Qn,Bo=class Bo{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],M=s[0],m=s[3],p=s[6],S=s[1],w=s[4],_=s[7],E=s[2],b=s[5],L=s[8];return r[0]=a*M+o*S+l*E,r[3]=a*m+o*w+l*b,r[6]=a*p+o*_+l*L,r[1]=c*M+u*S+f*E,r[4]=c*m+u*w+f*b,r[7]=c*p+u*_+f*L,r[2]=h*M+d*S+g*E,r[5]=h*m+d*w+g*b,r[8]=h*p+d*_+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=f*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=d*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hr.makeScale(t,e)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hr.makeRotation(-t)),this}translate(t,e){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bo.prototype.isMatrix3=!0;let Xt=Bo;const Hr=new Xt,ol=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ll=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xu(){const i={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ge&&(s.r=Nn(s.r),s.g=Nn(s.g),s.b=Nn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ge&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vr]:{primaries:t,whitePoint:n,transfer:xr,toXYZ:ol,fromXYZ:ll,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:ol,fromXYZ:ll,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),i}const ae=xu();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _i;class Mu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_i===void 0&&(_i=ys("canvas")),_i.width=t.width,_i.height=t.height;const s=_i.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=_i}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Nn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Su=0;class To{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=yn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gr(s[a].image)):r.push(Gr(s[a]))}else r=Gr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let yu=0;const kr=new I;class Oe extends fi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=In,s=In,r=ke,a=oi,o=dn,l=je,c=Oe.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=yn(),this.name="",this.source=new To(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kr).x}get height(){return this.source.getSize(kr).y}get depth(){return this.source.getSize(kr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Mc;Oe.DEFAULT_ANISOTROPY=1;const zo=class zo{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,_=(d+1)/2,E=(p+1)/2,b=(u+h)/4,L=(f+M)/4,x=(g+m)/4;return w>_&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=L/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=L/r,s=x/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-M)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zo.prototype.isVector4=!0;let we=zo;class bu extends fi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Oe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new To(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends bu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cc extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Eu extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const wr=class wr{constructor(t,e,n,s,r,a,o,l,c,u,f,h,d,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,h,d,g,M,m)}set(t,e,n,s,r,a,o,l,c,u,f,h,d,g,M,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),a=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*u,d=a*f,g=o*u,M=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-M*c,e[9]=-o*l,e[2]=M-h*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,M=c*f;e[0]=h+M*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=M+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,M=c*f;e[0]=h-M*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=M-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*f,g=o*u,M=o*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+M,e[1]=l*f,e[5]=M*c+h,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,g=o*l,M=o*c;e[0]=l*u,e[4]=M-h*f,e[8]=g*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-M*f}else if(t.order==="XZY"){const h=a*l,d=a*c,g=o*l,M=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+M,e[5]=a*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=M*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wu,t,Tu)}lookAt(t,e,n){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Hn.crossVectors(n,Je),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Hn.crossVectors(n,Je)),Hn.normalize(),Is.crossVectors(Je,Hn),s[0]=Hn.x,s[4]=Is.x,s[8]=Je.x,s[1]=Hn.y,s[5]=Is.y,s[9]=Je.y,s[2]=Hn.z,s[6]=Is.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],M=n[6],m=n[10],p=n[14],S=n[3],w=n[7],_=n[11],E=n[15],b=s[0],L=s[4],x=s[8],T=s[12],P=s[1],N=s[5],R=s[9],D=s[13],C=s[2],F=s[6],H=s[10],W=s[14],K=s[3],q=s[7],$=s[11],Q=s[15];return r[0]=a*b+o*P+l*C+c*K,r[4]=a*L+o*N+l*F+c*q,r[8]=a*x+o*R+l*H+c*$,r[12]=a*T+o*D+l*W+c*Q,r[1]=u*b+f*P+h*C+d*K,r[5]=u*L+f*N+h*F+d*q,r[9]=u*x+f*R+h*H+d*$,r[13]=u*T+f*D+h*W+d*Q,r[2]=g*b+M*P+m*C+p*K,r[6]=g*L+M*N+m*F+p*q,r[10]=g*x+M*R+m*H+p*$,r[14]=g*T+M*D+m*W+p*Q,r[3]=S*b+w*P+_*C+E*K,r[7]=S*L+w*N+_*F+E*q,r[11]=S*x+w*R+_*H+E*$,r[15]=S*T+w*D+_*W+E*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],M=t[7],m=t[11],p=t[15],S=l*d-c*h,w=o*d-c*f,_=o*h-l*f,E=a*d-c*u,b=a*h-l*u,L=a*f-o*u;return e*(M*S-m*w+p*_)-n*(g*S-m*E+p*b)+s*(g*w-M*E+p*L)-r*(g*_-M*b+m*L)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],M=t[13],m=t[14],p=t[15],S=e*o-n*a,w=e*l-s*a,_=e*c-r*a,E=n*l-s*o,b=n*c-r*o,L=s*c-r*l,x=u*M-f*g,T=u*m-h*g,P=u*p-d*g,N=f*m-h*M,R=f*p-d*M,D=h*p-d*m,C=S*D-w*R+_*N+E*P-b*T+L*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/C;return t[0]=(o*D-l*R+c*N)*F,t[1]=(s*R-n*D-r*N)*F,t[2]=(M*L-m*b+p*E)*F,t[3]=(h*b-f*L-d*E)*F,t[4]=(l*P-a*D-c*T)*F,t[5]=(e*D-s*P+r*T)*F,t[6]=(m*_-g*L-p*w)*F,t[7]=(u*L-h*_+d*w)*F,t[8]=(a*R-o*P+c*x)*F,t[9]=(n*P-e*R-r*x)*F,t[10]=(g*b-M*_+p*S)*F,t[11]=(f*_-u*b-d*S)*F,t[12]=(o*T-a*N-l*x)*F,t[13]=(e*N-n*T+s*x)*F,t[14]=(M*w-g*E-m*S)*F,t[15]=(u*E-f*w+h*S)*F,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,M=a*u,m=a*f,p=o*f,S=l*c,w=l*u,_=l*f,E=n.x,b=n.y,L=n.z;return s[0]=(1-(M+p))*E,s[1]=(d+_)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(d-_)*b,s[5]=(1-(h+p))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(g+w)*L,s[9]=(m-S)*L,s[10]=(1-(h+M))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=vi.set(s[0],s[1],s[2]).length();const o=vi.set(s[4],s[5],s[6]).length(),l=vi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),an.copy(this);const c=1/a,u=1/o,f=1/l;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,e.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Mn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===Mn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ss)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mn,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===Mn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ss)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};wr.prototype.isMatrix4=!0;let pe=wr;const vi=new I,an=new pe,wu=new I(0,0,0),Tu=new I(1,1,1),Hn=new I,Is=new I,Je=new I,cl=new pe,hl=new Qn;class Kn{constructor(t=0,e=0,n=0,s=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hl.setFromEuler(this),this.setFromQuaternion(hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Pc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Au=0;const ul=new I,xi=new Qn,An=new pe,Ds=new I,Yi=new I,Ru=new I,Cu=new Qn,dl=new I(1,0,0),fl=new I(0,1,0),pl=new I(0,0,1),ml={type:"added"},Pu={type:"removed"},Mi={type:"childadded",child:null},Vr={type:"childremoved",child:null};class Ie extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new I,e=new Kn,n=new Qn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Xt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(dl,t)}rotateY(t){return this.rotateOnAxis(fl,t)}rotateZ(t){return this.rotateOnAxis(pl,t)}translateOnAxis(t,e){return ul.copy(t).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dl,t)}translateY(t){return this.translateOnAxis(fl,t)}translateZ(t){return this.translateOnAxis(pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ds.copy(t):Ds.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Yi,Ds,this.up):An.lookAt(Ds,Yi,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(An),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ml),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pu),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ml),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,Ru),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Cu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ie.DEFAULT_UP=new I(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zt extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lu={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function Xr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=wo(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xr(a,r,t+1/3),this.g=Xr(a,r,t),this.b=Xr(a,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=Lc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ae.workingToColorSpace(He.copy(this),t),Math.round(te(He.r*255,0,255))*65536+Math.round(te(He.g*255,0,255))*256+Math.round(te(He.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(He.copy(this),e);const n=He.r,s=He.g,r=He.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ge){ae.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Us);const n=us(Gn.h,Us.h,e),s=us(Gn.s,Us.s,e),r=us(Gn.l,Us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Qt;Qt.NAMES=Lc;class Ao{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=e}clone(){return new Ao(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Iu extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const on=new I,Rn=new I,qr=new I,Cn=new I,Si=new I,yi=new I,gl=new I,Yr=new I,Zr=new I,Jr=new I,$r=new we,Kr=new we,Qr=new we;class sn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),Rn.subVectors(n,e),qr.subVectors(t,e);const a=on.dot(on),o=on.dot(Rn),l=on.dot(qr),c=Rn.dot(Rn),u=Rn.dot(qr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return $r.setScalar(0),Kr.setScalar(0),Qr.setScalar(0),$r.fromBufferAttribute(t,e),Kr.fromBufferAttribute(t,n),Qr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector($r,r.x),a.addScaledVector(Kr,r.y),a.addScaledVector(Qr,r.z),a}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),Rn.subVectors(t,e),on.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),on.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Si.subVectors(s,n),yi.subVectors(r,n),Yr.subVectors(t,n);const l=Si.dot(Yr),c=yi.dot(Yr);if(l<=0&&c<=0)return e.copy(n);Zr.subVectors(t,s);const u=Si.dot(Zr),f=yi.dot(Zr);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Si,a);Jr.subVectors(t,r);const d=Si.dot(Jr),g=yi.dot(Jr);if(g>=0&&d<=g)return e.copy(r);const M=d*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(yi,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return gl.subVectors(r,s),o=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(gl,o);const p=1/(m+M+h);return a=M*p,o=h*p,e.copy(n).addScaledVector(Si,a).addScaledVector(yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class jn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),Fs.subVectors(this.max,Zi),bi.subVectors(t.a,Zi),Ei.subVectors(t.b,Zi),wi.subVectors(t.c,Zi),kn.subVectors(Ei,bi),Vn.subVectors(wi,Ei),ei.subVectors(bi,wi);let e=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-ei.z,ei.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,ei.z,0,-ei.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-ei.y,ei.x,0];return!jr(e,bi,Ei,wi,Fs)||(e=[1,0,0,0,1,0,0,0,1],!jr(e,bi,Ei,wi,Fs))?!1:(Os.crossVectors(kn,Vn),e=[Os.x,Os.y,Os.z],jr(e,bi,Ei,wi,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,Ns=new jn,bi=new I,Ei=new I,wi=new I,kn=new I,Vn=new I,ei=new I,Zi=new I,Fs=new I,Os=new I,ni=new I;function jr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ni.fromArray(i,r);const o=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=t.dot(ni),c=e.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Pe=new I,Bs=new at;let Du=0;class pn extends fi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Du++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ac,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(t),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ic extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Dc extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Uu=new jn,Ji=new I,ta=new I;class Xi{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Uu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(ta)),this.expandByPoint(Ji.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Nu=0;const en=new pe,ea=new Ie,Ti=new I,$e=new jn,$i=new jn,Ne=new I;class Ae extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qh(t)?Dc:Ic)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return ea.lookAt(t),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors($e.min,$i.min),$e.expandByPoint(Ne),Ne.addVectors($e.max,$i.max),$e.expandByPoint(Ne)):($e.expandByPoint($i.min),$e.expandByPoint($i.max))}$e.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ne.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(t,c),Ne.add(Ti)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new I,l[x]=new I;const c=new I,u=new I,f=new I,h=new at,d=new at,g=new at,M=new I,m=new I;function p(x,T,P){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(N),o[x].add(M),o[T].add(M),o[P].add(M),l[x].add(m),l[T].add(m),l[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,T=S.length;x<T;++x){const P=S[x],N=P.start,R=P.count;for(let D=N,C=N+R;D<C;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const w=new I,_=new I,E=new I,b=new I;function L(x){E.fromBufferAttribute(s,x),b.copy(E);const T=o[x];w.copy(T),w.sub(E.multiplyScalar(E.dot(T))).normalize(),_.crossVectors(b,T);const N=_.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,N)}for(let x=0,T=S.length;x<T;++x){const P=S[x],N=P.start,R=P.count;for(let D=N,C=N+R;D<C;D+=3)L(t.getX(D+0)),L(t.getX(D+1)),L(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),M=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new pn(h,u,f)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ac,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Xe=new I;class Sr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Mr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Mr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const na=new I,Ou=new I,Bu=new Xt;class Yn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=na.subVectors(n,e).cross(Ou.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(na),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bu.getNormalMatrix(t),s=this.coplanarPoint(na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let zu=0;class pi extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=cs,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=dc,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class yr extends pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ai;const Ki=new I,Ri=new I,Ci=new I,Pi=new at,Qi=new at,Uc=new pe,zs=new I,ji=new I,Hs=new I,_l=new at,ia=new at,vl=new at;class ro extends Ie{constructor(t=new yr){if(super(),this.isSprite=!0,this.type="Sprite",Ai===void 0){Ai=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fu(e,5);Ai.setIndex([0,1,2,0,2,3]),Ai.setAttribute("position",new Sr(n,3,0,!1)),Ai.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=Ai,this.material=t,this.center=new at(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ri.setFromMatrixScale(this.matrixWorld),Uc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ci.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ri.multiplyScalar(-Ci.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Gs(zs.set(-.5,-.5,0),Ci,a,Ri,s,r),Gs(ji.set(.5,-.5,0),Ci,a,Ri,s,r),Gs(Hs.set(.5,.5,0),Ci,a,Ri,s,r),_l.set(0,0),ia.set(1,0),vl.set(1,1);let o=t.ray.intersectTriangle(zs,ji,Hs,!1,Ki);if(o===null&&(Gs(ji.set(-.5,.5,0),Ci,a,Ri,s,r),ia.set(0,1),o=t.ray.intersectTriangle(zs,Hs,ji,!1,Ki),o===null))return;const l=t.ray.origin.distanceTo(Ki);l<t.near||l>t.far||e.push({distance:l,point:Ki.clone(),uv:sn.getInterpolation(Ki,zs,ji,Hs,_l,ia,vl,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Gs(i,t,e,n,s,r){Pi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Qi.x=r*Pi.x-s*Pi.y,Qi.y=s*Pi.x+r*Pi.y):Qi.copy(Pi),i.copy(t),i.x+=Qi.x,i.y+=Qi.y,i.applyMatrix4(Uc)}const Ln=new I,sa=new I,ks=new I,Vs=new I;class Nc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sa.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),Vs.copy(this.origin).sub(sa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ks),o=Vs.dot(this.direction),l=-Vs.dot(ks),c=Vs.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const M=1/u;f*=M,h*=M,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(sa).addScaledVector(ks,h),d}intersectSphere(t,e){if(t.radius<0)return null;Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=n.x-a.x,S=n.y-a.y,w=n.z-a.z,_=Math.abs(l),E=Math.abs(c),b=Math.abs(u);let L,x,T,P,N,R,D,C,F,H,W,K;if(_>=E&&_>=b?(T=l,R=f,F=g,K=p,l>=0?(L=c,x=u,P=h,N=d,D=M,C=m,H=S,W=w):(L=u,x=c,P=d,N=h,D=m,C=M,H=w,W=S)):E>=b?(T=c,R=h,F=M,K=S,c>=0?(L=u,x=l,P=d,N=f,D=m,C=g,H=w,W=p):(L=l,x=u,P=f,N=d,D=g,C=m,H=p,W=w)):(T=u,R=d,F=m,K=w,u>=0?(L=l,x=c,P=f,N=h,D=g,C=M,H=p,W=S):(L=c,x=l,P=h,N=f,D=M,C=g,H=S,W=p)),T===0)return null;const q=L/T,$=x/T,Q=1/T,Ct=P-q*R,bt=N-$*R,oe=D-q*F,Zt=C-$*F,ne=H-q*K,Y=W-$*K,et=ne*Zt-Y*oe,vt=Ct*Y-bt*ne,Ht=oe*bt-Zt*Ct;if(s){if(et<0||vt<0||Ht<0)return null}else if((et<0||vt<0||Ht<0)&&(et>0||vt>0||Ht>0))return null;const Et=et+vt+Ht;if(Et===0)return null;const Gt=Q*(et*R+vt*F+Ht*K);return(Et>0?Gt<0:Gt>0)?null:this.at(Gt/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xl=new pe,ii=new Nc,Ws=new Xi,Ml=new I,Xs=new I,qs=new I,Ys=new I,ra=new I,Zs=new I,Sl=new I,Js=new I;class it extends Ie{constructor(t=new Ae,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(ra.fromBufferAttribute(f,t),a?Zs.addScaledVector(ra,u):Zs.addScaledVector(ra.sub(e),u))}e.add(Zs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(Ws.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Ws,Ml)===null||ii.origin.distanceToSquared(Ml)>(t.far-t.near)**2))&&(xl.copy(r).invert(),ii.copy(t.ray).applyMatrix4(xl),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=S,E=w;_<E;_+=3){const b=o.getX(_),L=o.getX(_+1),x=o.getX(_+2);s=$s(this,p,t,n,c,u,f,b,L,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){const S=o.getX(m),w=o.getX(m+1),_=o.getX(m+2);s=$s(this,a,t,n,c,u,f,S,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=S,E=w;_<E;_+=3){const b=_,L=_+1,x=_+2;s=$s(this,p,t,n,c,u,f,b,L,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){const S=m,w=m+1,_=m+2;s=$s(this,a,t,n,c,u,f,S,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Hu(i,t,e,n,s,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ci,o),l===null)return null;Js.copy(o),Js.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Js);return c<e.near||c>e.far?null:{distance:c,point:Js.clone(),object:i}}function $s(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Xs),i.getVertexPosition(l,qs),i.getVertexPosition(c,Ys);const u=Hu(i,t,e,n,Xs,qs,Ys,Sl);if(u){const f=new I;sn.getBarycoord(Sl,Xs,qs,Ys,f),s&&(u.uv=sn.getInterpolatedAttribute(s,o,l,c,f,new at)),r&&(u.uv1=sn.getInterpolatedAttribute(r,o,l,c,f,new at)),a&&(u.normal=sn.getInterpolatedAttribute(a,o,l,c,f,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};sn.getNormal(Xs,qs,Ys,h.normal),u.face=h,u.barycoord=f}return u}class Fc extends Oe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Fe,u=Fe,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yl extends pn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Li=new pe,bl=new pe,Ks=[],El=new jn,Gu=new pe,ts=new it,es=new Xi;class Oc extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),El.copy(t.boundingBox).applyMatrix4(Li),this.boundingBox.union(El)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),es.copy(t.boundingSphere).applyMatrix4(Li),this.boundingSphere.union(es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(n),t.ray.intersectsSphere(es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Li),bl.multiplyMatrices(n,Li),ts.matrixWorld=bl,ts.raycast(t,Ks);for(let a=0,o=Ks.length;a<o;a++){const l=Ks[a];l.instanceId=r,l.object=this,e.push(l)}Ks.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new yl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fc(new Float32Array(s*this.count),s,this.count,xo,un));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const si=new Xi,ku=new at(.5,.5),Qs=new I;class Ro{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],M=r[9],m=r[10],p=r[11],S=r[12],w=r[13],_=r[14],E=r[15];if(s[0].setComponents(c-a,d-u,p-g,E-S).normalize(),s[1].setComponents(c+a,d+u,p+g,E+S).normalize(),s[2].setComponents(c+o,d+f,p+M,E+w).normalize(),s[3].setComponents(c-o,d-f,p-M,E-w).normalize(),n)s[4].setComponents(l,h,m,_).normalize(),s[5].setComponents(c-l,d-h,p-m,E-_).normalize();else if(s[4].setComponents(c-l,d-h,p-m,E-_).normalize(),e===Mn)s[5].setComponents(c+l,d+h,p+m,E+_).normalize();else if(e===Ss)s[5].setComponents(l,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){si.center.set(0,0,0);const e=ku.distanceTo(t.center);return si.radius=.7071067811865476+e,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Qs.x=s.normal.x>0?t.max.x:t.min.x,Qs.y=s.normal.y>0?t.max.y:t.min.y,Qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bc extends pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wl=new pe,ao=new Nc,js=new Xi,tr=new I;class Vu extends Ie{constructor(t=new Ae,e=new Bc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(s),js.radius+=r,t.ray.intersectsSphere(js)===!1)return;wl.copy(s).invert(),ao.copy(t.ray).applyMatrix4(wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=h,M=d;g<M;g++){const m=c.getX(g);tr.fromBufferAttribute(f,m),Tl(tr,m,l,s,t,e,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=h,M=d;g<M;g++)tr.fromBufferAttribute(f,g),Tl(tr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Tl(i,t,e,n,s,r,a){const o=ao.distanceSqToPoint(i);if(o<e){const l=new I;ao.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class zc extends Oe{constructor(t=[],e=hi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Es extends Oe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ws extends Oe{constructor(t,e,n=bn,s,r,a,o=Fe,l=Fe,c,u=Fn,f=1){if(u!==Fn&&u!==li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new To(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Wu extends ws{constructor(t,e=bn,n=hi,s,r,a=Fe,o=Fe,l,c=Fn){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Hc extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class be extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function g(M,m,p,S,w,_,E,b,L,x,T){const P=_/L,N=E/x,R=_/2,D=E/2,C=b/2,F=L+1,H=x+1;let W=0,K=0;const q=new I;for(let $=0;$<H;$++){const Q=$*N-D;for(let Ct=0;Ct<F;Ct++){const bt=Ct*P-R;q[M]=bt*S,q[m]=Q*w,q[p]=C,c.push(q.x,q.y,q.z),q[M]=0,q[m]=0,q[p]=b>0?1:-1,u.push(q.x,q.y,q.z),f.push(Ct/L),f.push(1-$/x),W+=1}}for(let $=0;$<x;$++)for(let Q=0;Q<L;Q++){const Ct=h+Q+F*$,bt=h+Q+F*($+1),oe=h+(Q+1)+F*($+1),Zt=h+(Q+1)+F*$;l.push(Ct,bt,Zt),l.push(bt,oe,Zt),K+=6}o.addGroup(d,K,T),d+=K,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ke extends Ae{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=e/2,f=Math.PI/2*t,h=e,d=2*f+h,g=n*2+r,M=s+1,m=new I,p=new I;for(let S=0;S<=g;S++){let w=0,_=0,E=0,b=0;if(S<=n){const T=S/n,P=T*Math.PI/2;_=-u-t*Math.cos(P),E=t*Math.sin(P),b=-t*Math.cos(P),w=T*f}else if(S<=n+r){const T=(S-n)/r;_=-u+T*e,E=t,b=0,w=f+T*h}else{const T=(S-n-r)/n,P=T*Math.PI/2;_=u+t*Math.sin(P),E=t*Math.cos(P),b=t*Math.sin(P),w=f+h+T*f}const L=Math.max(0,Math.min(1,w/d));let x=0;S===0?x=.5/s:S===g&&(x=-.5/s);for(let T=0;T<=s;T++){const P=T/s,N=P*Math.PI*2,R=Math.sin(N),D=Math.cos(N);p.x=-E*D,p.y=_,p.z=E*R,o.push(p.x,p.y,p.z),m.set(-E*D,b,E*R),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+x,L)}if(S>0){const T=(S-1)*M;for(let P=0;P<s;P++){const N=T+P,R=T+P+1,D=S*M+P,C=S*M+P+1;a.push(N,R,D),a.push(R,C,D)}}}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class ds extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new I,u=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ee extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const M=[],m=n/2;let p=0;S(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2));function S(){const _=new I,E=new I;let b=0;const L=(e-t)/n;for(let x=0;x<=r;x++){const T=[],P=x/r,N=P*(e-t)+t;for(let R=0;R<=s;R++){const D=R/s,C=D*l+o,F=Math.sin(C),H=Math.cos(C);E.x=N*F,E.y=-P*n+m,E.z=N*H,f.push(E.x,E.y,E.z),_.set(F,L,H).normalize(),h.push(_.x,_.y,_.z),d.push(D,1-P),T.push(g++)}M.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const P=M[T][x],N=M[T+1][x],R=M[T+1][x+1],D=M[T][x+1];(t>0||T!==0)&&(u.push(P,N,D),b+=3),(e>0||T!==r-1)&&(u.push(N,R,D),b+=3)}c.addGroup(p,b,0),p+=b}function w(_){const E=g,b=new at,L=new I;let x=0;const T=_===!0?t:e,P=_===!0?1:-1;for(let R=1;R<=s;R++)f.push(0,m*P,0),h.push(0,P,0),d.push(.5,.5),g++;const N=g;for(let R=0;R<=s;R++){const C=R/s*l+o,F=Math.cos(C),H=Math.sin(C);L.x=T*H,L.y=m*P,L.z=T*F,f.push(L.x,L.y,L.z),h.push(0,P,0),b.x=F*.5+.5,b.y=H*.5*P+.5,d.push(b.x,b.y),g++}for(let R=0;R<s;R++){const D=E+R,C=N+R;_===!0?u.push(C,C+1,D):u.push(C+1,C,D),x+=3}c.addGroup(p,x,_===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Le extends ee{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Le(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ar extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const w=new I,_=new I,E=new I;for(let b=0;b<e.length;b+=3)d(e[b+0],w),d(e[b+1],_),d(e[b+2],E),l(w,_,E,S)}function l(S,w,_,E){const b=E+1,L=[];for(let x=0;x<=b;x++){L[x]=[];const T=S.clone().lerp(_,x/b),P=w.clone().lerp(_,x/b),N=b-x;for(let R=0;R<=N;R++)R===0&&x===b?L[x][R]=T:L[x][R]=T.clone().lerp(P,R/N)}for(let x=0;x<b;x++)for(let T=0;T<2*(b-x)-1;T++){const P=Math.floor(T/2);T%2===0?(h(L[x][P+1]),h(L[x+1][P]),h(L[x][P])):(h(L[x][P+1]),h(L[x+1][P+1]),h(L[x+1][P]))}}function c(S){const w=new I;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(S),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function u(){const S=new I;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];const _=m(S)/2/Math.PI+.5,E=p(S)/Math.PI+.5;a.push(_,1-E)}g(),f()}function f(){for(let S=0;S<a.length;S+=6){const w=a[S+0],_=a[S+2],E=a[S+4],b=Math.max(w,_,E),L=Math.min(w,_,E);b>.9&&L<.1&&(w<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function d(S,w){const _=S*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function g(){const S=new I,w=new I,_=new I,E=new I,b=new at,L=new at,x=new at;for(let T=0,P=0;T<r.length;T+=9,P+=6){S.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),b.set(a[P+0],a[P+1]),L.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),E.copy(S).add(w).add(_).divideScalar(3);const N=m(E);M(b,P+0,S,N),M(L,P+2,w,N),M(x,P+4,_,N)}}function M(S,w,_,E){E<0&&S.x===1&&(a[w]=S.x-1),_.x===0&&_.z===0&&(a[w]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.vertices,t.indices,t.radius,t.detail)}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new at:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],a=[],o=new I,l=new pe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(te(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(te(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Co extends Tn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Xu extends Co{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Po(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Al=new I,Rl=new I,aa=new Po,oa=new Po,la=new Po;class pr extends Tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Rl.subVectors(s[0],s[1]).add(s[0]),c=Rl);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Al.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Al),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),aa.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,M,m),oa.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,M,m),la.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(aa.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),oa.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),la.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(aa.calc(l),oa.calc(l),la.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Cl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function qu(i,t){const e=1-i;return e*e*t}function Yu(i,t){return 2*(1-i)*i*t}function Zu(i,t){return i*i*t}function fs(i,t,e,n){return qu(i,t)+Yu(i,e)+Zu(i,n)}function Ju(i,t){const e=1-i;return e*e*e*t}function $u(i,t){const e=1-i;return 3*e*e*i*t}function Ku(i,t){return 3*(1-i)*i*i*t}function Qu(i,t){return i*i*i*t}function ps(i,t,e,n,s){return Ju(i,t)+$u(i,e)+Ku(i,n)+Qu(i,s)}class Gc extends Tn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ps(t,s.x,r.x,a.x,o.x),ps(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ju extends Tn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ps(t,s.x,r.x,a.x,o.x),ps(t,s.y,r.y,a.y,o.y),ps(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kc extends Tn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class td extends Tn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vc extends Tn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(fs(t,s.x,r.x,a.x),fs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wc extends Tn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(fs(t,s.x,r.x,a.x),fs(t,s.y,r.y,a.y),fs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xc extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Cl(o,l.x,c.x,u.x,f.x),Cl(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var br=Object.freeze({__proto__:null,ArcCurve:Xu,CatmullRomCurve3:pr,CubicBezierCurve:Gc,CubicBezierCurve3:ju,EllipseCurve:Co,LineCurve:kc,LineCurve3:td,QuadraticBezierCurve:Vc,QuadraticBezierCurve3:Wc,SplineCurve:Xc});class ed extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new br[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new br[s.type]().fromJSON(s))}return this}}class Pl extends ed{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new kc(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Vc(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Gc(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Xc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Co(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $n extends Pl{constructor(t){super(t),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Pl().fromJSON(s))}return this}}function nd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=qc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=od(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,f=l;for(let h=e;h<s;h+=e){const d=i[h],g=i[h+1];d<o&&(o=d),g<l&&(l=g),d>u&&(u=d),g>f&&(f=g)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Ts(r,a,e,o,l,c,0),a}function qc(i,t,e,n,s){let r;if(s===vd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ll(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ll(a/n|0,i[a],i[a+1],r);return r&&Vi(r,r.next)&&(Rs(r),r=r.next),r}function di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vi(e,e.next)||Te(e.prev,e,e.next)===0)){if(Rs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ts(i,t,e,n,s,r,a){if(!i)return;!a&&r&&dd(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?sd(i,n,s,r):id(i)){t.push(l.i,i.i,c.i),Rs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rd(di(i),t),Ts(i,t,e,n,s,r,2)):a===2&&ad(i,t,e,n,s,r):Ts(di(i),t,e,n,s,r,1);break}}}function id(i){const t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&as(s,o,r,l,a,c,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sd(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Te(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),g=Math.min(u,f,h),M=Math.max(o,l,c),m=Math.max(u,f,h),p=oo(d,g,t,e,n),S=oo(M,m,t,e,n);let w=i.prevZ,_=i.nextZ;for(;w&&w.z>=p&&_&&_.z<=S;){if(w.x>=d&&w.x<=M&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&as(o,u,l,f,c,h,w.x,w.y)&&Te(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=d&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&as(o,u,l,f,c,h,_.x,_.y)&&Te(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=M&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&as(o,u,l,f,c,h,w.x,w.y)&&Te(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=S;){if(_.x>=d&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&as(o,u,l,f,c,h,_.x,_.y)&&Te(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function rd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Vi(n,s)&&Zc(n,e,e.next,s)&&As(n,s)&&As(s,n)&&(t.push(n.i,e.i,s.i),Rs(e),Rs(e.next),e=i=s),e=e.next}while(e!==i);return di(e)}function ad(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&md(a,o)){let l=Jc(a,o);a=di(a,a.next),l=di(l,l.next),Ts(a,t,e,n,s,r,0),Ts(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function od(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=qc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pd(c))}s.sort(ld);for(let r=0;r<s.length;r++)e=cd(s[r],e);return e}function ld(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cd(i,t){const e=hd(i,t);if(!e)return t;const n=Jc(e,i);return di(n,n.next),di(e,e.next)}function hd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Vi(i,e))return e;do{if(Vi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Yc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);As(e,i)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&ud(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function ud(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function dd(i,t,e,n){let s=i;do s.z===0&&(s.z=oo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fd(s)}function fd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function oo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function pd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function as(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Yc(i,t,e,n,s,r,a,o)}function md(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gd(i,t)&&(As(i,t)&&As(t,i)&&_d(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||Vi(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vi(i,t){return i.x===t.x&&i.y===t.y}function Zc(i,t,e,n){const s=nr(Te(i,t,e)),r=nr(Te(i,t,n)),a=nr(Te(e,n,i)),o=nr(Te(e,n,t));return!!(s!==r&&a!==o||s===0&&er(i,e,t)||r===0&&er(i,n,t)||a===0&&er(e,i,n)||o===0&&er(e,t,n))}function er(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function nr(i){return i>0?1:i<0?-1:0}function gd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function As(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function _d(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Jc(i,t){const e=lo(i.i,i.x,i.y),n=lo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ll(i,t,e,n){const s=lo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class xd{static triangulate(t,e,n=2){return nd(t,e,n)}}class Dn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Dn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Il(t),Dl(n,t);let a=t.length;e.forEach(Il);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Dl(n,e[l]);const o=xd.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Il(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Dl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ye extends Ae{constructor(t=new $n([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Md;let w,_=!1,E,b,L,x;if(p){w=p.getSpacedPoints(u),_=!0,h=!1;const nt=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(u,nt),b=new I,L=new I,x=new I}h||(m=0,d=0,g=0,M=0);const T=o.extractPoints(c);let P=T.shape;const N=T.holes;if(!Dn.isClockWise(P)){P=P.reverse();for(let nt=0,rt=N.length;nt<rt;nt++){const ot=N[nt];Dn.isClockWise(ot)&&(N[nt]=ot.reverse())}}function D(nt){const ot=10000000000000001e-36;let lt=nt[0];for(let ut=1;ut<=nt.length;ut++){const Ot=ut%nt.length,Nt=nt[Ot],kt=Nt.x-lt.x,Wt=Nt.y-lt.y,U=kt*kt+Wt*Wt,ue=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(lt.x),Math.abs(lt.y)),ie=ot*ue*ue;if(U<=ie){nt.splice(Ot,1),ut--;continue}lt=Nt}}D(P),N.forEach(D);const C=N.length,F=P;for(let nt=0;nt<C;nt++){const rt=N[nt];P=P.concat(rt)}function H(nt,rt,ot){return rt||le("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(rt,ot)}const W=P.length;function K(nt,rt,ot){let lt,ut,Ot;const Nt=nt.x-rt.x,kt=nt.y-rt.y,Wt=ot.x-nt.x,U=ot.y-nt.y,ue=Nt*Nt+kt*kt,ie=Nt*U-kt*Wt;if(Math.abs(ie)>Number.EPSILON){const A=Math.sqrt(ue),v=Math.sqrt(Wt*Wt+U*U),z=rt.x-kt/A,V=rt.y+Nt/A,Z=ot.x-U/v,ct=ot.y+Wt/v,ht=((Z-z)*U-(ct-V)*Wt)/(Nt*U-kt*Wt);lt=z+Nt*ht-nt.x,ut=V+kt*ht-nt.y;const J=lt*lt+ut*ut;if(J<=2)return new at(lt,ut);Ot=Math.sqrt(J/2)}else{let A=!1;Nt>Number.EPSILON?Wt>Number.EPSILON&&(A=!0):Nt<-Number.EPSILON?Wt<-Number.EPSILON&&(A=!0):Math.sign(kt)===Math.sign(U)&&(A=!0),A?(lt=-kt,ut=Nt,Ot=Math.sqrt(ue)):(lt=Nt,ut=kt,Ot=Math.sqrt(ue/2))}return new at(lt/Ot,ut/Ot)}const q=[];for(let nt=0,rt=F.length,ot=rt-1,lt=nt+1;nt<rt;nt++,ot++,lt++)ot===rt&&(ot=0),lt===rt&&(lt=0),q[nt]=K(F[nt],F[ot],F[lt]);const $=[];let Q,Ct=q.concat();for(let nt=0,rt=C;nt<rt;nt++){const ot=N[nt];Q=[];for(let lt=0,ut=ot.length,Ot=ut-1,Nt=lt+1;lt<ut;lt++,Ot++,Nt++)Ot===ut&&(Ot=0),Nt===ut&&(Nt=0),Q[lt]=K(ot[lt],ot[Ot],ot[Nt]);$.push(Q),Ct=Ct.concat(Q)}let bt;if(m===0)bt=Dn.triangulateShape(F,N);else{const nt=[],rt=[];for(let ot=0;ot<m;ot++){const lt=ot/m,ut=d*Math.cos(lt*Math.PI/2),Ot=g*Math.sin(lt*Math.PI/2)+M;for(let Nt=0,kt=F.length;Nt<kt;Nt++){const Wt=H(F[Nt],q[Nt],Ot);vt(Wt.x,Wt.y,-ut),lt===0&&nt.push(Wt)}for(let Nt=0,kt=C;Nt<kt;Nt++){const Wt=N[Nt];Q=$[Nt];const U=[];for(let ue=0,ie=Wt.length;ue<ie;ue++){const A=H(Wt[ue],Q[ue],Ot);vt(A.x,A.y,-ut),lt===0&&U.push(A)}lt===0&&rt.push(U)}}bt=Dn.triangulateShape(nt,rt)}const oe=bt.length,Zt=g+M;for(let nt=0;nt<W;nt++){const rt=h?H(P[nt],Ct[nt],Zt):P[nt];_?(L.copy(E.normals[0]).multiplyScalar(rt.x),b.copy(E.binormals[0]).multiplyScalar(rt.y),x.copy(w[0]).add(L).add(b),vt(x.x,x.y,x.z)):vt(rt.x,rt.y,0)}for(let nt=1;nt<=u;nt++)for(let rt=0;rt<W;rt++){const ot=h?H(P[rt],Ct[rt],Zt):P[rt];_?(L.copy(E.normals[nt]).multiplyScalar(ot.x),b.copy(E.binormals[nt]).multiplyScalar(ot.y),x.copy(w[nt]).add(L).add(b),vt(x.x,x.y,x.z)):vt(ot.x,ot.y,f/u*nt)}for(let nt=m-1;nt>=0;nt--){const rt=nt/m,ot=d*Math.cos(rt*Math.PI/2),lt=g*Math.sin(rt*Math.PI/2)+M;for(let ut=0,Ot=F.length;ut<Ot;ut++){const Nt=H(F[ut],q[ut],lt);vt(Nt.x,Nt.y,f+ot)}for(let ut=0,Ot=N.length;ut<Ot;ut++){const Nt=N[ut];Q=$[ut];for(let kt=0,Wt=Nt.length;kt<Wt;kt++){const U=H(Nt[kt],Q[kt],lt);_?vt(U.x,U.y+w[u-1].y,w[u-1].x+ot):vt(U.x,U.y,f+ot)}}}ne(),Y();function ne(){const nt=s.length/3;if(h){let rt=0,ot=W*rt;for(let lt=0;lt<oe;lt++){const ut=bt[lt];Ht(ut[2]+ot,ut[1]+ot,ut[0]+ot)}rt=u+m*2,ot=W*rt;for(let lt=0;lt<oe;lt++){const ut=bt[lt];Ht(ut[0]+ot,ut[1]+ot,ut[2]+ot)}}else{for(let rt=0;rt<oe;rt++){const ot=bt[rt];Ht(ot[2],ot[1],ot[0])}for(let rt=0;rt<oe;rt++){const ot=bt[rt];Ht(ot[0]+W*u,ot[1]+W*u,ot[2]+W*u)}}n.addGroup(nt,s.length/3-nt,0)}function Y(){const nt=s.length/3;let rt=0;et(F,rt),rt+=F.length;for(let ot=0,lt=N.length;ot<lt;ot++){const ut=N[ot];et(ut,rt),rt+=ut.length}n.addGroup(nt,s.length/3-nt,1)}function et(nt,rt){let ot=nt.length;for(;--ot>=0;){const lt=ot;let ut=ot-1;ut<0&&(ut=nt.length-1);for(let Ot=0,Nt=u+m*2;Ot<Nt;Ot++){const kt=W*Ot,Wt=W*(Ot+1),U=rt+lt+kt,ue=rt+ut+kt,ie=rt+ut+Wt,A=rt+lt+Wt;Et(U,ue,ie,A)}}}function vt(nt,rt,ot){l.push(nt),l.push(rt),l.push(ot)}function Ht(nt,rt,ot){Gt(nt),Gt(rt),Gt(ot);const lt=s.length/3,ut=S.generateTopUV(n,s,lt-3,lt-2,lt-1);me(ut[0]),me(ut[1]),me(ut[2])}function Et(nt,rt,ot,lt){Gt(nt),Gt(rt),Gt(lt),Gt(rt),Gt(ot),Gt(lt);const ut=s.length/3,Ot=S.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);me(Ot[0]),me(Ot[1]),me(Ot[3]),me(Ot[1]),me(Ot[2]),me(Ot[3])}function Gt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function me(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Sd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new br[s.type]().fromJSON(s)),new Ye(n,t.options)}}const Md={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new at(r,a),new at(o,l),new at(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new at(a,1-l),new at(c,1-f),new at(h,1-g),new at(M,1-p)]:[new at(o,1-l),new at(u,1-f),new at(d,1-g),new at(m,1-p)]}};function Sd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Er extends Ar{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Er(t.radius,t.detail)}}class Rr extends Ae{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=te(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,f=new I,h=new at,d=new I,g=new I,M=new I;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,M.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),l.push(d.x,d.y,d.z),M.copy(g)}for(let S=0;S<=e;S++){const w=n+S*u*s,_=Math.sin(w),E=Math.cos(w);for(let b=0;b<=t.length-1;b++){f.x=t[b].x*_,f.y=t[b].y,f.z=t[b].x*E,a.push(f.x,f.y,f.z),h.x=S/e,h.y=b/(t.length-1),o.push(h.x,h.y);const L=l[3*b+0]*_,x=l[3*b+1],T=l[3*b+0]*E;c.push(L,x,T)}}for(let S=0;S<e;S++)for(let w=0;w<t.length-1;w++){const _=w+S*t.length,E=_,b=_+t.length,L=_+t.length+1,x=_+1;r.push(E,b,x),r.push(L,x,b)}this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("uv",new Yt(o,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.points,t.segments,t.phiStart,t.phiLength)}}class Cr extends Ar{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cr(t.radius,t.detail)}}class Pr extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,d=[],g=[],M=[],m=[];for(let p=0;p<u;p++){const S=p*h-a;for(let w=0;w<c;w++){const _=w*f-r;g.push(_,-S,0),M.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const w=S+c*p,_=S+c*(p+1),E=S+1+c*(p+1),b=S+1+c*p;d.push(w,_,b),d.push(_,E,b)}this.setIndex(d),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(M,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Lo extends Ae{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let f=t;const h=(e-t)/s,d=new I,g=new at;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let M=0;M<s;M++){const m=M*(n+1);for(let p=0;p<n;p++){const S=p+m,w=S,_=S+n+1,E=S+n+2,b=S+1;o.push(w,_,b),o.push(_,E,b)}}this.setIndex(o),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Io extends Ae{constructor(t=new $n([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(a,2));function c(u){const f=s.length/3,h=u.extractPoints(e);let d=h.shape;const g=h.holes;Dn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];Dn.isClockWise(S)===!0&&(g[m]=S.reverse())}const M=Dn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){const S=d[m];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let m=0,p=M.length;m<p;m++){const S=M[m],w=S[0]+f,_=S[1]+f,E=S[2]+f;n.push(w,_,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return yd(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Io(n,t.curveSegments)}}function yd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Me extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new I,h=new I,d=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){const S=[],w=p/n,_=a+w*o,E=t*Math.cos(_),b=Math.sqrt(t*t-E*E);let L=0;p===0&&a===0?L=.5/e:p===n&&l===Math.PI&&(L=-.5/e);for(let x=0;x<=e;x++){const T=x/e,P=s+T*r;f.x=-b*Math.cos(P),f.y=E,f.z=b*Math.sin(P),g.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),m.push(T+L,1-w),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const w=u[p][S+1],_=u[p][S],E=u[p+1][S],b=u[p+1][S+1];(p!==0||a>0)&&d.push(w,_,b),(p!==n-1||l<Math.PI)&&d.push(_,E,b)}this.setIndex(d),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(M,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class re extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],f=[],h=new I,d=new I,g=new I;for(let M=0;M<=n;M++){const m=a+M/n*o;for(let p=0;p<=s;p++){const S=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(S),d.y=(t+e*Math.cos(m))*Math.sin(S),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){const p=(s+1)*M+m-1,S=(s+1)*(M-1)+m-1,w=(s+1)*(M-1)+m,_=(s+1)*M+m;l.push(p,S,_),l.push(S,w,_)}this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class ms extends Ae{constructor(t=new Wc(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new at;let u=new I;const f=[],h=[],d=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2));function M(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),S(),p()}function m(w){u=t.getPointAt(w/e,u);const _=a.normals[w],E=a.binormals[w];for(let b=0;b<=s;b++){const L=b/s*Math.PI*2,x=Math.sin(L),T=-Math.cos(L);l.x=T*_.x+x*E.x,l.y=T*_.y+x*E.y,l.z=T*_.z+x*E.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=e;w++)for(let _=1;_<=s;_++){const E=(s+1)*(w-1)+(_-1),b=(s+1)*w+(_-1),L=(s+1)*w+_,x=(s+1)*(w-1)+_;g.push(E,b,x),g.push(b,L,x)}}function S(){for(let w=0;w<=e;w++)for(let _=0;_<=s;_++)c.x=w/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ms(new br[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Wi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Ul(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ul(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=Wi(i[e]);for(const s in n)t[s]=n[s]}return t}function Ul(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $c(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Ed={clone:Wi,merge:qe};var wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=bd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new at().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ad extends wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jt extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rd extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cd extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ca={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Nl(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Nl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Nl(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Pd{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ld=new Pd;class Do{constructor(t){this.manager=t!==void 0?t:Ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Do.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii=new WeakMap;class Id extends Do{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ca.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=Ii.get(a);f===void 0&&(f=[],Ii.set(a,f)),f.push({onLoad:e,onError:s})}return a}const o=ys("img");function l(){u(),e&&e(this);const f=Ii.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Ii.delete(this),r.manager.itemEnd(t)}function c(f){u(),s&&s(f),ca.remove(`image:${t}`);const h=Ii.get(this)||[];for(let d=0;d<h.length;d++){const g=h[d];g.onError&&g.onError(f)}Ii.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ca.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class Dd extends Do{constructor(t){super(t)}load(t,e,n,s){const r=new Oe,a=new Id(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Uo extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Ud extends Uo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ha=new pe,Fl=new I,Ol=new I;class Kc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Fl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fl),Ol.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ol),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ha,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ss||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ir=new I,sr=new Qn,_n=new I;class Qc extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ir,sr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ir,sr,_n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ir,sr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ir,sr,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new I,Bl=new at,zl=new at;class Qe extends Qc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Bl,zl),e.subVectors(zl,Bl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Nd extends Kc{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}}class os extends Uo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class No extends Qc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Fd extends Kc{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Od extends Uo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Fd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Di=-90,Ui=1;class Bd extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Di,Ui,t,e);s.layers=this.layers,this.add(s);const r=new Qe(Di,Ui,t,e);r.layers=this.layers,this.add(r);const a=new Qe(Di,Ui,t,e);a.layers=this.layers,this.add(a);const o=new Qe(Di,Ui,t,e);o.layers=this.layers,this.add(o);const l=new Qe(Di,Ui,t,e);l.layers=this.layers,this.add(l);const c=new Qe(Di,Ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zd extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ho=class Ho{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Ho.prototype.isMatrix2=!0;let Hl=Ho;function Gl(i,t,e,n){const s=Hd(n);switch(e){case wc:return i*t;case xo:return i*t/s.components*s.byteLength;case Mo:return i*t/s.components*s.byteLength;case ui:return i*t*2/s.components*s.byteLength;case So:return i*t*2/s.components*s.byteLength;case Tc:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case yo:return i*t*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:case La:return Math.max(i,16)*Math.max(t,8)/4;case Ra:case Pa:return Math.max(i,8)*Math.max(t,8)/2;case Ia:case Da:case Na:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:case gr:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $a:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qa:case ja:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16;case eo:case no:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _r:case io:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hd(i){switch(i){case je:case Sc:return{byteLength:1,components:1};case xs:case yc:case En:return{byteLength:2,components:1};case _o:case vo:return{byteLength:2,components:4};case bn:case go:case un:return{byteLength:4,components:1};case bc:case Ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);function jc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gd(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],M=f[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,f[h]=M)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const M=f[d];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
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
#endif`,Wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zd=`#ifdef USE_AOMAP
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
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d=`#ifdef USE_BATCHING
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
#endif`,Kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ef=`#ifdef USE_IRIDESCENCE
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
#endif`,nf=`#ifdef USE_BUMPMAP
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,df=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pf=`vec3 transformedNormal = objectNormal;
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
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pf=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uf=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Nf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,Gf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,kf=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jf=`#if defined( USE_POINTS_UV )
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
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
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
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Rp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,Cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wp=`uniform sampler2D t2D;
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
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
}`,$p=`#if DEPTH_PACKING == 3200
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
}`,Kp=`#define DISTANCE
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
}`,Qp=`#define DISTANCE
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
void main() {
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,om=`#define MATCAP
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
}`,lm=`#define MATCAP
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
}`,cm=`#define NORMAL
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
}`,hm=`#define NORMAL
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
}`,um=`#define PHONG
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
}`,dm=`#define PHONG
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
}`,fm=`#define STANDARD
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
}`,pm=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,mm=`#define TOON
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
}`,gm=`#define TOON
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
}`,_m=`uniform float size;
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
}`,vm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,Mm=`uniform vec3 color;
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
}`,Sm=`uniform float rotation;
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
}`,ym=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:kd,alphahash_pars_fragment:Vd,alphamap_fragment:Wd,alphamap_pars_fragment:Xd,alphatest_fragment:qd,alphatest_pars_fragment:Yd,aomap_fragment:Zd,aomap_pars_fragment:Jd,batching_pars_vertex:$d,batching_vertex:Kd,begin_vertex:Qd,beginnormal_vertex:jd,bsdfs:tf,iridescence_fragment:ef,bumpmap_pars_fragment:nf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:af,clipping_planes_vertex:of,color_fragment:lf,color_pars_fragment:cf,color_pars_vertex:hf,color_vertex:uf,common:df,cube_uv_reflection_fragment:ff,defaultnormal_vertex:pf,displacementmap_pars_vertex:mf,displacementmap_vertex:gf,emissivemap_fragment:_f,emissivemap_pars_fragment:vf,colorspace_fragment:xf,colorspace_pars_fragment:Mf,envmap_fragment:Sf,envmap_common_pars_fragment:yf,envmap_pars_fragment:bf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Nf,envmap_vertex:wf,fog_vertex:Tf,fog_pars_vertex:Af,fog_fragment:Rf,fog_pars_fragment:Cf,gradientmap_pars_fragment:Pf,lightmap_pars_fragment:Lf,lights_lambert_fragment:If,lights_lambert_pars_fragment:Df,lights_pars_begin:Uf,lights_toon_fragment:Ff,lights_toon_pars_fragment:Of,lights_phong_fragment:Bf,lights_phong_pars_fragment:zf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Gf,lights_fragment_begin:kf,lights_fragment_maps:Vf,lights_fragment_end:Wf,lightprobes_pars_fragment:Xf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:Yf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:Jf,map_fragment:$f,map_pars_fragment:Kf,map_particle_fragment:Qf,map_particle_pars_fragment:jf,metalnessmap_fragment:tp,metalnessmap_pars_fragment:ep,morphinstance_vertex:np,morphcolor_vertex:ip,morphnormal_vertex:sp,morphtarget_pars_vertex:rp,morphtarget_vertex:ap,normal_fragment_begin:op,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:hp,normal_vertex:up,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:_p,packing:vp,premultiplied_alpha_fragment:xp,project_vertex:Mp,dithering_fragment:Sp,dithering_pars_fragment:yp,roughnessmap_fragment:bp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:Tp,shadowmap_vertex:Ap,shadowmask_pars_fragment:Rp,skinbase_vertex:Cp,skinning_pars_vertex:Pp,skinning_vertex:Lp,skinnormal_vertex:Ip,specularmap_fragment:Dp,specularmap_pars_fragment:Up,tonemapping_fragment:Np,tonemapping_pars_fragment:Fp,transmission_fragment:Op,transmission_pars_fragment:Bp,uv_pars_fragment:zp,uv_pars_vertex:Hp,uv_vertex:Gp,worldpos_vertex:kp,background_vert:Vp,background_frag:Wp,backgroundCube_vert:Xp,backgroundCube_frag:qp,cube_vert:Yp,cube_frag:Zp,depth_vert:Jp,depth_frag:$p,distance_vert:Kp,distance_frag:Qp,equirect_vert:jp,equirect_frag:tm,linedashed_vert:em,linedashed_frag:nm,meshbasic_vert:im,meshbasic_frag:sm,meshlambert_vert:rm,meshlambert_frag:am,meshmatcap_vert:om,meshmatcap_frag:lm,meshnormal_vert:cm,meshnormal_frag:hm,meshphong_vert:um,meshphong_frag:dm,meshphysical_vert:fm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:_m,points_frag:vm,shadow_vert:xm,shadow_frag:Mm,sprite_vert:Sm,sprite_frag:ym},_t={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},xn={basic:{uniforms:qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:qe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:qe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:qe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:qe([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:qe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:qe([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:qe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:qe([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:qe([_t.common,_t.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:qe([_t.lights,_t.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};xn.physical={uniforms:qe([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const rr={r:0,b:0,g:0},bm=new pe,th=new Xt;th.set(-1,0,0,0,1,0,0,0,1);function Em(i,t,e,n,s,r){const a=new Qt(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const _=S.backgroundBlurriness>0;w=t.get(w,_)}return w}function g(S){let w=!1;const _=d(S);_===null?m(a,o):_&&_.isColor&&(m(_,1),w=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,w){const _=d(w);_&&(_.isCubeTexture||_.mapping===Tr)?(c===void 0&&(c=new it(new be(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Wi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bm.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(th),c.material.toneMapped=ae.getTransfer(_.colorSpace)!==ge,(u!==_||f!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new it(new Pr(2,2),new wn({name:"BackgroundMaterial",uniforms:Wi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ae.getTransfer(_.colorSpace)!==ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,w){S.getRGB(rr,$c(i)),e.buffers.color.setClear(rr.r,rr.g,rr.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:M,dispose:p}}function wm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(N,R,D,C,F){let H=!1;const W=f(N,C,D,R);r!==W&&(r=W,c(r.object)),H=d(N,C,D,F),H&&g(N,C,D,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,_(N,R,D,C),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function f(N,R,D,C){const F=C.wireframe===!0;let H=n[R.id];H===void 0&&(H={},n[R.id]=H);const W=N.isInstancedMesh===!0?N.id:0;let K=H[W];K===void 0&&(K={},H[W]=K);let q=K[D.id];q===void 0&&(q={},K[D.id]=q);let $=q[F];return $===void 0&&($=h(l()),q[F]=$),$}function h(N){const R=[],D=[],C=[];for(let F=0;F<e;F++)R[F]=0,D[F]=0,C[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:C,object:N,attributes:{},index:null}}function d(N,R,D,C){const F=r.attributes,H=R.attributes;let W=0;const K=D.getAttributes();for(const q in K)if(K[q].location>=0){const Q=F[q];let Ct=H[q];if(Ct===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(Ct=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(Ct=N.instanceColor)),Q===void 0||Q.attribute!==Ct||Ct&&Q.data!==Ct.data)return!0;W++}return r.attributesNum!==W||r.index!==C}function g(N,R,D,C){const F={},H=R.attributes;let W=0;const K=D.getAttributes();for(const q in K)if(K[q].location>=0){let Q=H[q];Q===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor));const Ct={};Ct.attribute=Q,Q&&Q.data&&(Ct.data=Q.data),F[q]=Ct,W++}r.attributes=F,r.attributesNum=W,r.index=C}function M(){const N=r.newAttributes;for(let R=0,D=N.length;R<D;R++)N[R]=0}function m(N){p(N,0)}function p(N,R){const D=r.newAttributes,C=r.enabledAttributes,F=r.attributeDivisors;D[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),F[N]!==R&&(i.vertexAttribDivisor(N,R),F[N]=R)}function S(){const N=r.newAttributes,R=r.enabledAttributes;for(let D=0,C=R.length;D<C;D++)R[D]!==N[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function w(N,R,D,C,F,H,W){W===!0?i.vertexAttribIPointer(N,R,D,F,H):i.vertexAttribPointer(N,R,D,C,F,H)}function _(N,R,D,C){M();const F=C.attributes,H=D.getAttributes(),W=R.defaultAttributeValues;for(const K in H){const q=H[K];if(q.location>=0){let $=F[K];if($===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&($=N.instanceColor)),$!==void 0){const Q=$.normalized,Ct=$.itemSize,bt=t.get($);if(bt===void 0)continue;const oe=bt.buffer,Zt=bt.type,ne=bt.bytesPerElement,Y=Zt===i.INT||Zt===i.UNSIGNED_INT||$.gpuType===go;if($.isInterleavedBufferAttribute){const et=$.data,vt=et.stride,Ht=$.offset;if(et.isInstancedInterleavedBuffer){for(let Et=0;Et<q.locationSize;Et++)p(q.location+Et,et.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Et=0;Et<q.locationSize;Et++)m(q.location+Et);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Et=0;Et<q.locationSize;Et++)w(q.location+Et,Ct/q.locationSize,Zt,Q,vt*ne,(Ht+Ct/q.locationSize*Et)*ne,Y)}else{if($.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)p(q.location+et,$.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let et=0;et<q.locationSize;et++)m(q.location+et);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let et=0;et<q.locationSize;et++)w(q.location+et,Ct/q.locationSize,Zt,Q,Ct*ne,Ct/q.locationSize*et*ne,Y)}}else if(W!==void 0){const Q=W[K];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(q.location,Q);break;case 3:i.vertexAttrib3fv(q.location,Q);break;case 4:i.vertexAttrib4fv(q.location,Q);break;default:i.vertexAttrib1fv(q.location,Q)}}}}S()}function E(){T();for(const N in n){const R=n[N];for(const D in R){const C=R[D];for(const F in C){const H=C[F];for(const W in H)u(H[W].object),delete H[W];delete C[F]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;const R=n[N.id];for(const D in R){const C=R[D];for(const F in C){const H=C[F];for(const W in H)u(H[W].object),delete H[W];delete C[F]}}delete n[N.id]}function L(N){for(const R in n){const D=n[R];for(const C in D){const F=D[C];if(F[N.id]===void 0)continue;const H=F[N.id];for(const W in H)u(H[W].object),delete H[W];delete F[N.id]}}}function x(N){for(const R in n){const D=n[R],C=N.isInstancedMesh===!0?N.id:0,F=D[C];if(F!==void 0){for(const H in F){const W=F[H];for(const K in W)u(W[K].object),delete W[K];delete F[H]}delete D[C],Object.keys(D).length===0&&delete n[R]}}}function T(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function Tm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Am(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==dn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const x=L===En&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==je&&L!==un&&!x&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Vt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:_,maxSamples:E,samples:b}}function Rm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Yn,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:n,w=S*4;let _=p.clippingState||null;l.value=_,_=u(g,h,w,d);for(let E=0;E!==w;++E)_[E]=e[E];p.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const p=d+M*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=d;w!==M;++w,_+=4)a.copy(f[w]).applyMatrix4(S,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}const zi=4,Cm=6,Pm=20,Lm=256,ns=new No,kl=new Qt;let ua=null,da=0,fa=0,pa=!1;const Im=new I,ri=new I;class Vl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Im}=r;ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,da,fa),this._renderer.xr.enabled=pa,t.scissorTest=!1,Ni(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:En,format:dn,colorSpace:vr,depthBuffer:!1},s=Wl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dm(r)),this._blurMaterial=Nm(r,t,e),this._ggxMaterial=Um(r,t,e)}return s}_compileMaterial(t){const e=new it(new Ae,t);this._renderer.compile(e,ns)}_sceneToCubeUV(t,e,n,s,r){const l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(kl),f.toneMapping=Sn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new be,new cn({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(kl),p=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const E=this._cubeSize;Ni(s,_*E,w>2?E:0,E,E),f.setRenderTarget(s),p&&f.render(M,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===hi||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ni(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ns)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-zi?n-g+zi:0),p=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Ni(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,ns),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ni(t,m,p,3*M,2*M),s.setRenderTarget(t),s.render(o,ns)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-zi?s-this._lodMax+zi:0),h=4*(this._cubeSize-u);Ni(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(l,ns)}}function Dm(i){const t=[],e=[];let n=i;const s=i-zi+1+Cm;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,g=new Float32Array(d*h*f),M=new Float32Array(d*h*f);for(let p=0;p<f;p++){const S=p%3*2/3-1,w=p>2?0:-1,_=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];g.set(_,d*h*p);for(let E=0;E<h;E++){const b=u[E*2]*2-1,L=u[E*2+1]*2-1;p===0?ri.set(1,L,b):p===1?ri.set(-b,1,-L):p===2?ri.set(-b,L,1):p===3?ri.set(-1,L,-b):p===4?ri.set(-b,-1,L):ri.set(b,L,-1),ri.toArray(M,(p*h+E)*d)}}const m=new Ae;m.setAttribute("position",new pn(g,d)),m.setAttribute("outputDirection",new pn(M,d)),e.push(new it(m,null)),n>zi&&n--}return{lodMeshes:e,sizeLods:t}}function Wl(i,t,e){const n=new fn(i,t,e);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ni(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Um(i,t,e){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lr(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Nm(i,t,e){return new wn({name:"SphericalGaussianBlur",defines:{SAMPLES:Pm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Xl(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lr(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ql(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Lr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class eh extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new be(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Un});r.uniforms.tEquirect.value=e;const a=new it(s,r),o=e.minFilter;return e.minFilter===oi&&(e.minFilter=ke),new Bd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function Fm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Nr||d===Fr)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const M=new eh(g.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===Nr||d===Fr,M=d===hi||d===ki;if(g||M){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Vl(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new Vl(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===Nr?h.mapping=hi:d===Fr&&(h.mapping=ki),h}function l(h){let d=0;const g=6;for(let M=0;M<g;M++)h[M]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Om(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Hi("WebGLRenderer: "+n+" extension not supported."),s}}}function Bm(i,t,e,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let M=0;if(g===void 0)return;if(d!==null){const S=d.array;M=d.version;for(let w=0,_=S.length;w<_;w+=3){const E=S[w+0],b=S[w+1],L=S[w+2];h.push(E,b,b,L,L,E)}}else{const S=g.array;M=g.version;for(let w=0,_=S.length/3-1;w<_;w+=3){const E=w+0,b=w+1,L=w+2;h.push(E,b,b,L,L,E)}}const m=new(g.count>=65535?Dc:Ic)(h,1);m.version=M;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function zm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let M=0;for(let m=0;m<d;m++)M+=h[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Hm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:le("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gm(i,t,e){const n=new WeakMap,s=new we;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let T=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let w=0;d===!0&&(w=1),g===!0&&(w=2),M===!0&&(w=3);let _=o.attributes.position.count*w,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const b=new Float32Array(_*E*4*f),L=new Cc(b,_,E,f);L.type=un,L.needsUpdate=!0;const x=w*4;for(let P=0;P<f;P++){const N=m[P],R=p[P],D=S[P],C=_*E*4*P;for(let F=0;F<N.count;F++){const H=F*x;d===!0&&(s.fromBufferAttribute(N,F),b[C+H+0]=s.x,b[C+H+1]=s.y,b[C+H+2]=s.z,b[C+H+3]=0),g===!0&&(s.fromBufferAttribute(R,F),b[C+H+4]=s.x,b[C+H+5]=s.y,b[C+H+6]=s.z,b[C+H+7]=0),M===!0&&(s.fromBufferAttribute(D,F),b[C+H+8]=s.x,b[C+H+9]=s.y,b[C+H+10]=s.z,b[C+H+11]=D.itemSize===4?s.w:1)}}h={count:f,texture:L,size:new at(_,E)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function km(i,t,e,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Vm={[pc]:"LINEAR_TONE_MAPPING",[mc]:"REINHARD_TONE_MAPPING",[gc]:"CINEON_TONE_MAPPING",[mo]:"ACES_FILMIC_TONE_MAPPING",[vc]:"AGX_TONE_MAPPING",[xc]:"NEUTRAL_TONE_MAPPING",[_c]:"CUSTOM_TONE_MAPPING"};function Wm(i,t,e,n,s,r){const a=new fn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ae;c.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const u=new Ad({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new it(c,u),h=new No(-1,1,1,-1,0,1);let d=null,g=null,M=!1,m,p=null,S=[],w=!1;this.setSize=function(_,E){a.setSize(_,E),o!==null&&o.setSize(_,E),l!==null&&l.setSize(_,E);for(let b=0;b<S.length;b++){const L=S[b];L.setSize&&L.setSize(_,E)}},this.setEffects=function(_){S=_,w=S.length>0&&S[0].isRenderPass===!0;const E=a.width,b=a.height;S.length>0&&o===null&&(o=new fn(E,b,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new fn(E,b,{type:En,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<S.length;L++){const x=S[L];x.setSize&&x.setSize(E,b)}},this.begin=function(_,E){if(M||_.toneMapping===Sn&&S.length===0)return!1;if(p=E,E!==null){const b=E.width,L=E.height;(a.width!==b||a.height!==L)&&this.setSize(b,L)}return w===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=Sn,!0},this.hasRenderPass=function(){return w},this.end=function(_,E){_.toneMapping=m,M=!0;let b=a,L=o;for(let x=0;x<S.length;x++){const T=S[x];T.enabled!==!1&&(T.render(_,L,b,E),T.needsSwap!==!1&&(b=L,L=L===o?l:o))}if(d!==_.outputColorSpace||g!==_.toneMapping){d=_.outputColorSpace,g=_.toneMapping,u.defines={},ae.getTransfer(d)===ge&&(u.defines.SRGB_TRANSFER="");const x=Vm[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(p),_.render(f,h),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const nh=new Oe,co=new ws(1,1),ih=new Cc,sh=new Eu,rh=new zc,Yl=[],Zl=[],Jl=new Float32Array(16),$l=new Float32Array(9),Kl=new Float32Array(4);function qi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Yl[s];if(r===void 0&&(r=new Float32Array(s),Yl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ir(i,t){let e=Zl[t];e===void 0&&(e=new Int32Array(t),Zl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Kl.set(n),i.uniformMatrix2fv(this.addr,!1,Kl),Ue(e,n)}}function $m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;$l.set(n),i.uniformMatrix3fv(this.addr,!1,$l),Ue(e,n)}}function Km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Jl.set(n),i.uniformMatrix4fv(this.addr,!1,Jl),Ue(e,n)}}function Qm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function n0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function a0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(co.compareFunction=e.isReversedDepthBuffer()?Eo:bo,r=co):r=nh,e.setTexture2D(t||r,s)}function o0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sh,s)}function l0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rh,s)}function c0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ih,s)}function h0(i){switch(i){case 5126:return Xm;case 35664:return qm;case 35665:return Ym;case 35666:return Zm;case 35674:return Jm;case 35675:return $m;case 35676:return Km;case 5124:case 35670:return Qm;case 35667:case 35671:return jm;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function u0(i,t){i.uniform1fv(this.addr,t)}function d0(i,t){const e=qi(t,this.size,2);i.uniform2fv(this.addr,e)}function f0(i,t){const e=qi(t,this.size,3);i.uniform3fv(this.addr,e)}function p0(i,t){const e=qi(t,this.size,4);i.uniform4fv(this.addr,e)}function m0(i,t){const e=qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function g0(i,t){const e=qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _0(i,t){const e=qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function v0(i,t){i.uniform1iv(this.addr,t)}function x0(i,t){i.uniform2iv(this.addr,t)}function M0(i,t){i.uniform3iv(this.addr,t)}function S0(i,t){i.uniform4iv(this.addr,t)}function y0(i,t){i.uniform1uiv(this.addr,t)}function b0(i,t){i.uniform2uiv(this.addr,t)}function E0(i,t){i.uniform3uiv(this.addr,t)}function w0(i,t){i.uniform4uiv(this.addr,t)}function T0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=co:a=nh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function A0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||sh,r[a])}function R0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||rh,r[a])}function C0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ih,r[a])}function P0(i){switch(i){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return v0;case 35667:case 35671:return x0;case 35668:case 35672:return M0;case 35669:case 35673:return S0;case 5125:return y0;case 36294:return b0;case 36295:return E0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}class L0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=h0(e.type)}}class I0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P0(e.type)}}class D0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Ql(i,t){i.seq.push(t),i.map[t.id]=t}function U0(i,t,e){const n=i.name,s=n.length;for(ma.lastIndex=0;;){const r=ma.exec(n),a=ma.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ql(e,c===void 0?new L0(o,i,t):new I0(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new D0(o),Ql(e,f)),e=f}}}class mr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);U0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function jl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const N0=37297;let F0=0;function O0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const tc=new Xt;function B0(i){ae._getMatrix(tc,ae.workingColorSpace,i);const t=`mat3( ${tc.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case xr:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ec(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+O0(i.getShaderSource(t),o)}else return r}function z0(i,t){const e=B0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const H0={[pc]:"Linear",[mc]:"Reinhard",[gc]:"Cineon",[mo]:"ACESFilmic",[vc]:"AgX",[xc]:"Neutral",[_c]:"Custom"};function G0(i,t){const e=H0[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ar=new I;function k0(){ae.getLuminanceCoefficients(ar);const i=ar.x.toFixed(4),t=ar.y.toFixed(4),e=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function W0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function X0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ls(i){return i!==""}function nc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ic(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(i){return i.replace(q0,Z0)}const Y0=new Map;function Z0(i,t){let e=Kt[t];if(e===void 0){const n=Y0.get(t);if(n!==void 0)e=Kt[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ho(e)}const J0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sc(i){return i.replace(J0,$0)}function $0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const K0={[cr]:"SHADOWMAP_TYPE_PCF",[rs]:"SHADOWMAP_TYPE_VSM"};function Q0(i){return K0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const j0={[hi]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE_UV"};function tg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":j0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const eg={[ki]:"ENVMAP_MODE_REFRACTION"};function ng(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":eg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ig={[fc]:"ENVMAP_BLENDING_MULTIPLY",[Hh]:"ENVMAP_BLENDING_MIX",[Gh]:"ENVMAP_BLENDING_ADD"};function sg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ig[i.combine]||"ENVMAP_BLENDING_NONE"}function rg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ag(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Q0(e),c=tg(e),u=ng(e),f=sg(e),h=rg(e),d=V0(e),g=W0(r),M=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),p.length>0&&(p+=`
`)):(m=[rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),p=[rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?G0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,z0("linearToOutputTexel",e.outputColorSpace),k0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),a=ho(a),a=nc(a,e),a=ic(a,e),o=ho(o),o=nc(o,e),o=ic(o,e),a=sc(a),o=sc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=S+m+a,_=S+p+o,E=jl(s,s.VERTEX_SHADER,w),b=jl(s,s.FRAGMENT_SHADER,_);s.attachShader(M,E),s.attachShader(M,b),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function L(N){if(i.debug.checkShaderErrors){const R=s.getProgramInfoLog(M)||"",D=s.getShaderInfoLog(E)||"",C=s.getShaderInfoLog(b)||"",F=R.trim(),H=D.trim(),W=C.trim();let K=!0,q=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,b);else{const $=ec(s,E,"vertex"),Q=ec(s,b,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+$+`
`+Q)}else F!==""?Vt("WebGLProgram: Program Info Log:",F):(H===""||W==="")&&(q=!1);q&&(N.diagnostics={runnable:K,programLog:F,vertexShader:{log:H,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(E),s.deleteShader(b),x=new mr(s,M),T=X0(s,M)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(M,N0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=b,this}let og=0;class lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cg(t),e.set(t,n)),n}}class cg{constructor(t){this.id=og++,this.code=t,this.usedTimes=0}}function hg(i){return i===ui||i===gr||i===_r}function ug(i,t,e,n,s,r){const a=new Pc,o=new lg,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,T,P,N,R,D){const C=N.fog,F=R.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=t.get(x.envMap||H,W),q=K&&K.mapping===Tr?K.image.height:null,$=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Vt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ct=Q!==void 0?Q.length:0;let bt=0;F.morphAttributes.position!==void 0&&(bt=1),F.morphAttributes.normal!==void 0&&(bt=2),F.morphAttributes.color!==void 0&&(bt=3);let oe,Zt,ne,Y;if($){const Se=xn[$];oe=Se.vertexShader,Zt=Se.fragmentShader}else{oe=x.vertexShader,Zt=x.fragmentShader;const Se=o.getVertexShaderStage(x),de=o.getFragmentShaderStage(x);o.update(x,Se,de),ne=Se.id,Y=de.id}const et=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Ht=R.isInstancedMesh===!0,Et=R.isBatchedMesh===!0,Gt=!!x.map,me=!!x.matcap,nt=!!K,rt=!!x.aoMap,ot=!!x.lightMap,lt=!!x.bumpMap&&x.wireframe===!1,ut=!!x.normalMap,Ot=!!x.displacementMap,Nt=!!x.emissiveMap,kt=!!x.metalnessMap,Wt=!!x.roughnessMap,U=x.anisotropy>0,ue=x.clearcoat>0,ie=x.dispersion>0,A=x.retroreflectivity>0,v=x.iridescence>0,z=x.sheen>0,V=x.transmission>0,Z=U&&!!x.anisotropyMap,ct=ue&&!!x.clearcoatMap,ht=ue&&!!x.clearcoatNormalMap,J=ue&&!!x.clearcoatRoughnessMap,tt=v&&!!x.iridescenceMap,dt=v&&!!x.iridescenceThicknessMap,It=z&&!!x.sheenColorMap,gt=z&&!!x.sheenRoughnessMap,ft=!!x.specularMap,Dt=!!x.specularColorMap,Bt=!!x.specularIntensityMap,qt=V&&!!x.transmissionMap,B=V&&!!x.thicknessMap,pt=!!x.gradientMap,j=!!x.alphaMap,mt=x.alphaTest>0,yt=!!x.alphaHash,st=!!x.extensions;let Ut=Sn;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ut=i.toneMapping);const Pt={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:oe,fragmentShader:Zt,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Et,batchingColor:Et&&R._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&R.instanceColor!==null,instancingMorph:Ht&&R.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Gt,matcap:me,envMap:nt,envMapMode:nt&&K.mapping,envMapCubeUVHeight:q,aoMap:rt,lightMap:ot,bumpMap:lt,normalMap:ut,displacementMap:Ot,emissiveMap:Nt,normalMapObjectSpace:ut&&x.normalMapType===Wh,normalMapTangentSpace:ut&&x.normalMapType===so,packedNormalMap:ut&&x.normalMapType===so&&hg(x.normalMap.format),metalnessMap:kt,roughnessMap:Wt,anisotropy:U,anisotropyMap:Z,clearcoat:ue,clearcoatMap:ct,clearcoatNormalMap:ht,clearcoatRoughnessMap:J,dispersion:ie,retroreflection:A,iridescence:v,iridescenceMap:tt,iridescenceThicknessMap:dt,sheen:z,sheenColorMap:It,sheenRoughnessMap:gt,specularMap:ft,specularColorMap:Dt,specularIntensityMap:Bt,transmission:V,transmissionMap:qt,thicknessMap:B,gradientMap:pt,opaque:x.transparent===!1&&x.blending===cs&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:mt,alphaHash:yt,combine:x.combine,mapUv:Gt&&g(x.map.channel),aoMapUv:rt&&g(x.aoMap.channel),lightMapUv:ot&&g(x.lightMap.channel),bumpMapUv:lt&&g(x.bumpMap.channel),normalMapUv:ut&&g(x.normalMap.channel),displacementMapUv:Ot&&g(x.displacementMap.channel),emissiveMapUv:Nt&&g(x.emissiveMap.channel),metalnessMapUv:kt&&g(x.metalnessMap.channel),roughnessMapUv:Wt&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:ct&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:It&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(x.sheenRoughnessMap.channel),specularMapUv:ft&&g(x.specularMap.channel),specularColorMapUv:Dt&&g(x.specularColorMap.channel),specularIntensityMapUv:Bt&&g(x.specularIntensityMap.channel),transmissionMapUv:qt&&g(x.transmissionMap.channel),thicknessMapUv:B&&g(x.thicknessMap.channel),alphaMapUv:j&&g(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ut||U),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!F.attributes.uv&&(Gt||j),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&ut===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:vt,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:bt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Gt&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===ge,decodeVideoTextureEmissive:Nt&&x.emissiveMap.isVideoTexture===!0&&ae.getTransfer(x.emissiveMap.colorSpace)===ge,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===nn,flipSided:x.side===Ve,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(T,x),S(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const T=d[x.type];let P;if(T){const N=xn[T];P=Ed.clone(N.uniforms)}else P=x.uniforms;return P}function _(x,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new ag(i,T,x,s),c.push(P),u.set(T,P)),P}function E(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function L(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:L}}function dg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function oc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,M,m,p){let S=i[t];return S===void 0?(S={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:p},i[t]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=g,S.materialVariant=a(h),S.groupOrder=M,S.renderOrder=h.renderOrder,S.z=m,S.group=p),t++,S}function l(h,d,g,M,m,p,S){S.reversedDepth===!0&&(m=-m);const w=o(h,d,g,M,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(h,d,g,M,m,p){const S=o(h,d,g,M,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,d){e.length>1&&e.sort(h||fg),n.length>1&&n.sort(d||ac),s.length>1&&s.sort(d||ac)}function f(){for(let h=t,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function pg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new oc,i.set(n,[a])):s>=r.length?(a=new oc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function mg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Qt};break;case"SpotLight":e={position:new I,direction:new I,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function gg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let _g=0;function vg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xg(i){const t=new mg,e=gg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new pe,a=new pe;function o(c){let u=0,f=0,h=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let d=0,g=0,M=0,m=0,p=0,S=0,w=0,_=0,E=0,b=0,L=0,x=0,T=0,P=0;c.sort(vg);for(let R=0,D=c.length;R<D;R++){const C=c[R],F=C.color,H=C.intensity,W=C.distance;let K=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ui?K=C.shadow.map.texture:K=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=F.r*H,f+=F.g*H,h+=F.b*H;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],H);P++}else if(C.isSunLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,Q=e.get(C);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=K;const Ct=$.getViewportCount();for(let bt=0;bt<Ct;bt++)n.sunShadowMatrix[M+bt]=$.getMatrix(bt),n.sunShadowCascade[M+bt]=$._cascadeData[bt];M+=Ct,g++}n.sun[d]=q,d++}else if(C.isDirectionalLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,Q=e.get(C);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=C.shadow.matrix,E++}n.directional[m]=q,m++}else if(C.isSpotLight){const q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(F).multiplyScalar(H),q.distance=W,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[S]=q;const $=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,$.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[S]=$.matrix,C.castShadow){const Q=e.get(C);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.spotShadow[S]=Q,n.spotShadowMap[S]=K,L++}S++}else if(C.isRectAreaLight){const q=t.get(C);q.color.copy(F).multiplyScalar(H),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[w]=q,w++}else if(C.isPointLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const $=C.shadow,Q=e.get(C);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=C.shadow.matrix,b++}n.point[p]=q,p++}else if(C.isHemisphereLight){const q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(H),q.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[_]=q,_++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const N=n.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==S||N.rectAreaLength!==w||N.hemiLength!==_||N.numSunShadows!==g||N.numDirectionalShadows!==E||N.numPointShadows!==b||N.numSpotShadows!==L||N.numSpotMaps!==x||N.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=w,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,N.sunLength=d,N.directionalLength=m,N.pointLength=p,N.spotLength=S,N.rectAreaLength=w,N.hemiLength=_,N.numSunShadows=g,N.numDirectionalShadows=E,N.numPointShadows=b,N.numSpotShadows=L,N.numSpotMaps=x,N.numLightProbes=P,n.version=_g++)}function l(c,u){let f=0,h=0,d=0,g=0,M=0,m=0;const p=u.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){const _=c[S];if(_.isSunLight){const E=n.sun[f];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),f++}else if(_.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(_.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(_.isRectAreaLight){const E=n.rectArea[M];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(_.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function lc(i){const t=new xg(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Mg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new lc(i),t.set(s,[o])):r>=a.length?(o=new lc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
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
}`,bg=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Eg=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],cc=new pe,is=new I,ga=new I;function wg(i,t,e){let n=new Ro;const s=new at,r=new at,a=new we,o=new Rd,l=new Cd,c={},u=e.maxTextureSize,f={[ci]:Ve,[Ve]:ci,[nn]:nn},h=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Sg,fragmentShader:yg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new it(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let p=this.type;this.render=function(b,L,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===po&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cr);const T=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Un),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const D=p!==this.type;D&&L.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(F=>F.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,F=b.length;C<F;C++){const H=b[C],W=H.shadow;if(W===void 0){Vt("WebGLShadowMap:",H,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const K=W.getFrameExtents();s.multiply(K),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,W.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||D===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===rs){if(H.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new fn(s.x,s.y,{format:ui,type:En,minFilter:ke,magFilter:ke,generateMipmaps:!1}),W.map.texture.name=H.name+".shadowMap",W.map.depthTexture=new ws(s.x,s.y,un),W.map.depthTexture.name=H.name+".shadowMapDepth",W.map.depthTexture.format=Fn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Fe,W.map.depthTexture.magFilter=Fe}else H.isPointLight?(W.map=new eh(s.x),W.map.depthTexture=new Wu(s.x,bn)):(W.map=new fn(s.x,s.y),W.map.depthTexture=new ws(s.x,s.y,bn)),W.map.depthTexture.name=H.name+".shadowMap",W.map.depthTexture.format=Fn,this.type===cr?(W.map.depthTexture.compareFunction=q?Eo:bo,W.map.depthTexture.minFilter=ke,W.map.depthTexture.magFilter=ke):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Fe,W.map.depthTexture.magFilter=Fe);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const $=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();H.isPointLight!==!0&&W.updateMatrices(H,x);for(let Q=0;Q<$;Q++){const Ct=W.getCamera(Q);if(H.isPointLight){const bt=W.camera,oe=W.matrix,Zt=H.distance||bt.far;Zt!==bt.far&&(bt.far=Zt,bt.updateProjectionMatrix()),is.setFromMatrixPosition(H.matrixWorld),bt.position.copy(is),ga.copy(bt.position),ga.add(bg[Q]),bt.up.copy(Eg[Q]),bt.lookAt(ga),bt.updateMatrixWorld(),oe.makeTranslation(-is.x,-is.y,-is.z),cc.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(cc,bt.coordinateSystem,bt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(W.map),i.clear());const bt=W.getViewport(Q);a.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),R.viewport(a)}n=W.getFrustum(Q),_(L,x,Ct,H,this.type)}W.isPointLightShadow!==!0&&this.type===rs&&S(W,x),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,N)};function S(b,L){const x=t.update(M);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new fn(s.x,s.y,{format:ui,type:En}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(L,null,x,h,M,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(L,null,x,d,M,null)}function w(b,L,x,T){let P=null;const N=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)P=N;else if(P=x.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const R=P.uuid,D=L.uuid;let C=c[R];C===void 0&&(C={},c[R]=C);let F=C[D];F===void 0&&(F=P.clone(),C[D]=F,L.addEventListener("dispose",E)),P=F}if(P.visible=L.visible,P.wireframe=L.wireframe,T===rs?P.side=L.shadowSide!==null?L.shadowSide:L.side:P.side=L.shadowSide!==null?L.shadowSide:f[L.side],P.alphaMap=L.alphaMap,P.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,P.map=L.map,P.clipShadows=L.clipShadows,P.clippingPlanes=L.clippingPlanes,P.clipIntersection=L.clipIntersection,P.displacementMap=L.displacementMap,P.displacementScale=L.displacementScale,P.displacementBias=L.displacementBias,P.wireframeLinewidth=L.wireframeLinewidth,P.linewidth=L.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const R=i.properties.get(P);R.light=x}return P}function _(b,L,x,T,P){if(b.visible===!1)return;if(b.layers.test(L.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===rs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const D=t.update(b),C=b.material;if(Array.isArray(C)){const F=D.groups;for(let H=0,W=F.length;H<W;H++){const K=F[H],q=C[K.materialIndex];if(q&&q.visible){const $=w(b,q,T,P);b.onBeforeShadow(i,b,L,x,D,$,K),i.renderBufferDirect(x,null,D,$,b,K),b.onAfterShadow(i,b,L,x,D,$,K)}}}else if(C.visible){const F=w(b,C,T,P);b.onBeforeShadow(i,b,L,x,D,F,null),i.renderBufferDirect(x,null,D,F,b,null),b.onAfterShadow(i,b,L,x,D,F,null)}}const R=b.children;for(let D=0,C=R.length;D<C;D++)_(R[D],L,x,T,P)}function E(b){b.target.removeEventListener("dispose",E);for(const x in c){const T=c[x],P=b.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Tg(i,t){function e(){let B=!1;const pt=new we;let j=null;const mt=new we(0,0,0,0);return{setMask:function(yt){j!==yt&&!B&&(i.colorMask(yt,yt,yt,yt),j=yt)},setLocked:function(yt){B=yt},setClear:function(yt,st,Ut,Pt,Se){Se===!0&&(yt*=Pt,st*=Pt,Ut*=Pt),pt.set(yt,st,Ut,Pt),mt.equals(pt)===!1&&(i.clearColor(yt,st,Ut,Pt),mt.copy(pt))},reset:function(){B=!1,j=null,mt.set(-1,0,0,0)}}}function n(){let B=!1,pt=!1,j=null,mt=null,yt=null;return{setReversed:function(st){if(pt!==st){const Ut=t.get("EXT_clip_control");st?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),pt=st;const Pt=yt;yt=null,this.setClear(Pt)}},getReversed:function(){return pt},setTest:function(st){st?et(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(st){j!==st&&!B&&(i.depthMask(st),j=st)},setFunc:function(st){if(pt&&(st=eu[st]),mt!==st){switch(st){case Ma:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=st}},setLocked:function(st){B=st},setClear:function(st){yt!==st&&(yt=st,pt&&(st=1-st),i.clearDepth(st))},reset:function(){B=!1,j=null,mt=null,yt=null,pt=!1}}}function s(){let B=!1,pt=null,j=null,mt=null,yt=null,st=null,Ut=null,Pt=null,Se=null;return{setTest:function(de){B||(de?et(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(de){pt!==de&&!B&&(i.stencilMask(de),pt=de)},setFunc:function(de,rn,mn){(j!==de||mt!==rn||yt!==mn)&&(i.stencilFunc(de,rn,mn),j=de,mt=rn,yt=mn)},setOp:function(de,rn,mn){(st!==de||Ut!==rn||Pt!==mn)&&(i.stencilOp(de,rn,mn),st=de,Ut=rn,Pt=mn)},setLocked:function(de){B=de},setClear:function(de){Se!==de&&(i.clearStencil(de),Se=de)},reset:function(){B=!1,pt=null,j=null,mt=null,yt=null,st=null,Ut=null,Pt=null,Se=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],M=null,m=!1,p=null,S=null,w=null,_=null,E=null,b=null,L=null,x=new Qt(0,0,0),T=0,P=!1,N=null,R=null,D=null,C=null,F=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=K>=2);let $=null,Q={};const Ct=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),oe=new we().fromArray(Ct),Zt=new we().fromArray(bt);function ne(B,pt,j,mt){const yt=new Uint8Array(4),st=i.createTexture();i.bindTexture(B,st),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<j;Ut++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(pt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return st}const Y={};Y[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(_s),lt(!1),ut(jo),et(i.CULL_FACE),rt(Un);function et(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function vt(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Ht(B,pt){return h[B]!==pt?(i.bindFramebuffer(B,pt),h[B]=pt,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pt),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Et(B,pt){let j=g,mt=!1;if(B){j=d.get(pt),j===void 0&&(j=[],d.set(pt,j));const yt=B.textures;if(j.length!==yt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Ut=yt.length;st<Ut;st++)j[st]=i.COLOR_ATTACHMENT0+st;j.length=yt.length,mt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,mt=!0);mt&&i.drawBuffers(j)}function Gt(B){return M!==B?(i.useProgram(B),M=B,!0):!1}const me={[Oi]:i.FUNC_ADD,[bh]:i.FUNC_SUBTRACT,[Eh]:i.FUNC_REVERSE_SUBTRACT};me[wh]=i.MIN,me[Th]=i.MAX;const nt={[Ah]:i.ZERO,[Rh]:i.ONE,[Ch]:i.SRC_COLOR,[uc]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Lh]:i.DST_ALPHA,[Ph]:i.ONE_MINUS_SRC_COLOR,[dc]:i.ONE_MINUS_SRC_ALPHA,[Uh]:i.ONE_MINUS_DST_COLOR,[Ih]:i.ONE_MINUS_DST_ALPHA,[Fh]:i.CONSTANT_COLOR,[Oh]:i.ONE_MINUS_CONSTANT_COLOR,[Bh]:i.CONSTANT_ALPHA,[zh]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(B,pt,j,mt,yt,st,Ut,Pt,Se,de){if(B===Un){m===!0&&(vt(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),B!==yh){if(B!==p||de!==P){if((S!==Oi||E!==Oi)&&(i.blendEquation(i.FUNC_ADD),S=Oi,E=Oi),de)switch(B){case cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFunc(i.ONE,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",B);break}else switch(B){case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case el:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nl:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",B);break}w=null,_=null,b=null,L=null,x.set(0,0,0),T=0,p=B,P=de}return}yt=yt||pt,st=st||j,Ut=Ut||mt,(pt!==S||yt!==E)&&(i.blendEquationSeparate(me[pt],me[yt]),S=pt,E=yt),(j!==w||mt!==_||st!==b||Ut!==L)&&(i.blendFuncSeparate(nt[j],nt[mt],nt[st],nt[Ut]),w=j,_=mt,b=st,L=Ut),(Pt.equals(x)===!1||Se!==T)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Se),x.copy(Pt),T=Se),p=B,P=!1}function ot(B,pt){B.side===nn?vt(i.CULL_FACE):et(i.CULL_FACE);let j=B.side===Ve;pt&&(j=!j),lt(j),B.blending===cs&&B.transparent===!1?rt(Un):rt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const mt=B.stencilWrite;o.setTest(mt),mt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Nt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){N!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),N=B)}function ut(B){B!==Mh?(et(i.CULL_FACE),B!==R&&(B===jo?i.cullFace(i.BACK):B===Sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),R=B}function Ot(B){B!==D&&(W&&i.lineWidth(B),D=B)}function Nt(B,pt,j){B?(et(i.POLYGON_OFFSET_FILL),(C!==pt||F!==j)&&(C=pt,F=j,a.getReversed()&&(pt=-pt),i.polygonOffset(pt,j))):vt(i.POLYGON_OFFSET_FILL)}function kt(B){B?et(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Wt(B){B===void 0&&(B=i.TEXTURE0+H-1),$!==B&&(i.activeTexture(B),$=B)}function U(B,pt,j){j===void 0&&($===null?j=i.TEXTURE0+H-1:j=$);let mt=Q[j];mt===void 0&&(mt={type:void 0,texture:void 0},Q[j]=mt),(mt.type!==B||mt.texture!==pt)&&($!==j&&(i.activeTexture(j),$=j),i.bindTexture(B,pt||Y[B]),mt.type=B,mt.texture=pt)}function ue(){const B=Q[$];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function v(){try{i.texSubImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function z(){try{i.texSubImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function ct(){try{i.texStorage2D(...arguments)}catch(B){le("WebGLState:",B)}}function ht(){try{i.texStorage3D(...arguments)}catch(B){le("WebGLState:",B)}}function J(){try{i.texImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function tt(){try{i.texImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function dt(B){return f[B]!==void 0?f[B]:i.getParameter(B)}function It(B,pt){f[B]!==pt&&(i.pixelStorei(B,pt),f[B]=pt)}function gt(B){oe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),oe.copy(B))}function ft(B){Zt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Zt.copy(B))}function Dt(B,pt){let j=c.get(pt);j===void 0&&(j=new WeakMap,c.set(pt,j));let mt=j.get(B);mt===void 0&&(mt=i.getUniformBlockIndex(pt,B.name),j.set(B,mt))}function Bt(B,pt){const mt=c.get(pt).get(B);l.get(pt)!==mt&&(i.uniformBlockBinding(pt,mt,B.__bindingPointIndex),l.set(pt,mt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},$=null,Q={},h={},d=new WeakMap,g=[],M=null,m=!1,p=null,S=null,w=null,_=null,E=null,b=null,L=null,x=new Qt(0,0,0),T=0,P=!1,N=null,R=null,D=null,C=null,F=null,oe.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:vt,bindFramebuffer:Ht,drawBuffers:Et,useProgram:Gt,setBlending:rt,setMaterial:ot,setFlipSided:lt,setCullFace:ut,setLineWidth:Ot,setPolygonOffset:Nt,setScissorTest:kt,activeTexture:Wt,bindTexture:U,unbindTexture:ue,compressedTexImage2D:ie,compressedTexImage3D:A,texImage2D:J,texImage3D:tt,pixelStorei:It,getParameter:dt,updateUBOMapping:Dt,uniformBlockBinding:Bt,texStorage2D:ct,texStorage3D:ht,texSubImage2D:v,texSubImage3D:z,compressedTexSubImage2D:V,compressedTexSubImage3D:Z,scissor:gt,viewport:ft,reset:qt}}function Ag(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,v){return g?new OffscreenCanvas(A,v):ys("canvas")}function m(A,v,z){let V=1;const Z=ie(A);if((Z.width>z||Z.height>z)&&(V=z/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ct=Math.floor(V*Z.width),ht=Math.floor(V*Z.height);h===void 0&&(h=M(ct,ht));const J=v?M(ct,ht):h;return J.width=ct,J.height=ht,J.getContext("2d").drawImage(A,0,0,ct,ht),Vt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ct+"x"+ht+")."),J}else return"data"in A&&Vt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,v,z,V,Z,ct=!1){if(A!==null){if(i[A]!==void 0)return i[A];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ht;V&&(ht=t.get("EXT_texture_norm16"),ht||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&ht&&(J=ht.R16_EXT),z===i.SHORT&&ht&&(J=ht.R16_SNORM_EXT)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),v===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&ht&&(J=ht.RG16_EXT),z===i.SHORT&&ht&&(J=ht.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_SHORT&&ht&&(J=ht.RGB16_EXT),z===i.SHORT&&ht&&(J=ht.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){const tt=ct?xr:ae.getTransfer(Z);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=tt===ge?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ht&&(J=ht.RGBA16_EXT),z===i.SHORT&&ht&&(J=ht.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function E(A,v){let z;return A?v===null||v===bn||v===Ms?z=i.DEPTH24_STENCIL8:v===un?z=i.DEPTH32F_STENCIL8:v===xs&&(z=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===bn||v===Ms?z=i.DEPTH_COMPONENT24:v===un?z=i.DEPTH_COMPONENT32F:v===xs&&(z=i.DEPTH_COMPONENT16),z}function b(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Fe&&A.minFilter!==ke?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function L(A){const v=A.target;v.removeEventListener("dispose",L),T(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function x(A){const v=A.target;v.removeEventListener("dispose",x),N(v)}function T(A){const v=n.get(A);if(v.__webglInit===void 0)return;const z=A.source,V=d.get(z);if(V){const Z=V[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(A),Object.keys(V).length===0&&d.delete(z)}n.remove(A)}function P(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const z=A.source,V=d.get(z);delete V[v.__cacheKey],a.memory.textures--}function N(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let Z=0;Z<v.__webglFramebuffer[V].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[V][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)i.deleteFramebuffer(v.__webglFramebuffer[V]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=A.textures;for(let V=0,Z=z.length;V<Z;V++){const ct=n.get(z[V]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(z[V])}n.remove(A)}let R=0;function D(){R=0}function C(){return R}function F(A){R=A}function H(){const A=R;return A>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function W(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function K(A,v){const z=n.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const V=A.image;if(V===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(z,A,v);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function q(A,v){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){vt(z,A,v);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function $(A,v){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){vt(z,A,v);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function Q(A,v){const z=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){Ht(z,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}const Ct={[vs]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},bt={[Fe]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},oe={[qh]:i.NEVER,[Kh]:i.ALWAYS,[Yh]:i.LESS,[bo]:i.LEQUAL,[Zh]:i.EQUAL,[Eo]:i.GEQUAL,[Jh]:i.GREATER,[$h]:i.NOTEQUAL};function Zt(A,v){if(v.type===un&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ke||v.magFilter===Or||v.magFilter===Ls||v.magFilter===oi||v.minFilter===ke||v.minFilter===Or||v.minFilter===Ls||v.minFilter===oi)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ct[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ct[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ct[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,bt[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,bt[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,oe[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Fe||v.minFilter!==Ls&&v.minFilter!==oi||v.type===un&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ne(A,v){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",L));const V=v.source;let Z=d.get(V);Z===void 0&&(Z={},d.set(V,Z));const ct=W(v);if(ct!==A.__cacheKey){Z[ct]===void 0&&(Z[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[ct].usedTimes++;const ht=Z[A.__cacheKey];ht!==void 0&&(Z[A.__cacheKey].usedTimes--,ht.usedTimes===0&&P(v)),A.__cacheKey=ct,A.__webglTexture=Z[ct].texture}return z}function Y(A,v,z){return Math.floor(Math.floor(A/z)/v)}function et(A,v,z,V){const ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,V,v.data);else{ct.sort((It,gt)=>It.start-gt.start);let ht=0;for(let It=1;It<ct.length;It++){const gt=ct[ht],ft=ct[It],Dt=gt.start+gt.count,Bt=Y(ft.start,v.width,4),qt=Y(gt.start,v.width,4);ft.start<=Dt+1&&Bt===qt&&Y(ft.start+ft.count-1,v.width,4)===Bt?gt.count=Math.max(gt.count,ft.start+ft.count-gt.start):(++ht,ct[ht]=ft)}ct.length=ht+1;const J=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let It=0,gt=ct.length;It<gt;It++){const ft=ct[It],Dt=Math.floor(ft.start/4),Bt=Math.ceil(ft.count/4),qt=Dt%v.width,B=Math.floor(Dt/v.width),pt=Bt,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,qt,B,pt,j,z,V,v.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function vt(A,v,z){let V=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=i.TEXTURE_3D);const Z=ne(A,v),ct=v.source;e.bindTexture(V,A.__webglTexture,i.TEXTURE0+z);const ht=n.get(ct);if(ct.version!==ht.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const j=ae.getPrimaries(ae.workingColorSpace),mt=v.colorSpace===Jn?null:ae.getPrimaries(v.colorSpace),yt=v.colorSpace===Jn||j===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let tt=m(v.image,!1,s.maxTextureSize);tt=ue(v,tt);const dt=r.convert(v.format,v.colorSpace),It=r.convert(v.type);let gt=_(v.internalFormat,dt,It,v.normalized,v.colorSpace,v.isVideoTexture);Zt(V,v);let ft;const Dt=v.mipmaps,Bt=v.isVideoTexture!==!0,qt=ht.__version===void 0||Z===!0,B=ct.dataReady,pt=b(v,tt);if(v.isDepthTexture)gt=E(v.format===li,v.type),qt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,gt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,gt,tt.width,tt.height,0,dt,It,null));else if(v.isDataTexture)if(Dt.length>0){Bt&&qt&&e.texStorage2D(i.TEXTURE_2D,pt,gt,Dt[0].width,Dt[0].height);for(let j=0,mt=Dt.length;j<mt;j++)ft=Dt[j],Bt?B&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ft.width,ft.height,dt,It,ft.data):e.texImage2D(i.TEXTURE_2D,j,gt,ft.width,ft.height,0,dt,It,ft.data);v.generateMipmaps=!1}else Bt?(qt&&e.texStorage2D(i.TEXTURE_2D,pt,gt,tt.width,tt.height),B&&et(v,tt,dt,It)):e.texImage2D(i.TEXTURE_2D,0,gt,tt.width,tt.height,0,dt,It,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Bt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,gt,Dt[0].width,Dt[0].height,tt.depth);for(let j=0,mt=Dt.length;j<mt;j++)if(ft=Dt[j],v.format!==dn)if(dt!==null)if(Bt){if(B)if(v.layerUpdates.size>0){const yt=Gl(ft.width,ft.height,v.format,v.type);for(const st of v.layerUpdates){const Ut=ft.data.subarray(st*yt/ft.data.BYTES_PER_ELEMENT,(st+1)*yt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,st,ft.width,ft.height,1,dt,Ut)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ft.width,ft.height,tt.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,gt,ft.width,ft.height,tt.depth,0,ft.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ft.width,ft.height,tt.depth,dt,It,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,gt,ft.width,ft.height,tt.depth,0,dt,It,ft.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Bt&&qt&&e.texStorage2D(i.TEXTURE_2D,pt,gt,Dt[0].width,Dt[0].height);for(let j=0,mt=Dt.length;j<mt;j++)ft=Dt[j],v.format!==dn?dt!==null?Bt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,j,gt,ft.width,ft.height,0,ft.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?B&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ft.width,ft.height,dt,It,ft.data):e.texImage2D(i.TEXTURE_2D,j,gt,ft.width,ft.height,0,dt,It,ft.data)}else if(v.isDataArrayTexture)if(Bt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,gt,tt.width,tt.height,tt.depth),B)if(v.layerUpdates.size>0){const j=Gl(tt.width,tt.height,v.format,v.type);for(const mt of v.layerUpdates){const yt=tt.data.subarray(mt*j/tt.data.BYTES_PER_ELEMENT,(mt+1)*j/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,tt.width,tt.height,1,dt,It,yt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,dt,It,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,tt.width,tt.height,tt.depth,0,dt,It,tt.data);else if(v.isData3DTexture)Bt?(qt&&e.texStorage3D(i.TEXTURE_3D,pt,gt,tt.width,tt.height,tt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,dt,It,tt.data)):e.texImage3D(i.TEXTURE_3D,0,gt,tt.width,tt.height,tt.depth,0,dt,It,tt.data);else if(v.isFramebufferTexture){if(qt)if(Bt)e.texStorage2D(i.TEXTURE_2D,pt,gt,tt.width,tt.height);else{let j=tt.width,mt=tt.height;for(let yt=0;yt<pt;yt++)e.texImage2D(i.TEXTURE_2D,yt,gt,j,mt,0,dt,It,null),j>>=1,mt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),tt.parentNode!==j){j.appendChild(tt),f.add(v),j.onpaint=mt=>{const yt=mt.changedElements;for(const st of f)yt.includes(st.image)&&(st.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{const yt=i.RGBA,st=i.RGBA,Ut=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,yt,st,Ut,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Bt&&qt){const j=ie(Dt[0]);e.texStorage2D(i.TEXTURE_2D,pt,gt,j.width,j.height)}for(let j=0,mt=Dt.length;j<mt;j++)ft=Dt[j],Bt?B&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,dt,It,ft):e.texImage2D(i.TEXTURE_2D,j,gt,dt,It,ft);v.generateMipmaps=!1}else if(Bt){if(qt){const j=ie(tt);e.texStorage2D(i.TEXTURE_2D,pt,gt,j.width,j.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,It,tt)}else e.texImage2D(i.TEXTURE_2D,0,gt,dt,It,tt);p(v)&&S(V),ht.__version=ct.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Ht(A,v,z){if(v.image.length!==6)return;const V=ne(A,v),Z=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const ct=n.get(Z);if(Z.version!==ct.__version||V===!0){e.activeTexture(i.TEXTURE0+z);const ht=ae.getPrimaries(ae.workingColorSpace),J=v.colorSpace===Jn?null:ae.getPrimaries(v.colorSpace),tt=v.colorSpace===Jn||ht===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const dt=v.isCompressedTexture||v.image[0].isCompressedTexture,It=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let st=0;st<6;st++)!dt&&!It?gt[st]=m(v.image[st],!0,s.maxCubemapSize):gt[st]=It?v.image[st].image:v.image[st],gt[st]=ue(v,gt[st]);const ft=gt[0],Dt=r.convert(v.format,v.colorSpace),Bt=r.convert(v.type),qt=_(v.internalFormat,Dt,Bt,v.normalized,v.colorSpace),B=v.isVideoTexture!==!0,pt=ct.__version===void 0||V===!0,j=Z.dataReady;let mt=b(v,ft);Zt(i.TEXTURE_CUBE_MAP,v);let yt;if(dt){B&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,qt,ft.width,ft.height);for(let st=0;st<6;st++){yt=gt[st].mipmaps;for(let Ut=0;Ut<yt.length;Ut++){const Pt=yt[Ut];v.format!==dn?Dt!==null?B?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,0,0,Pt.width,Pt.height,Dt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,qt,Pt.width,Pt.height,0,Pt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,0,0,Pt.width,Pt.height,Dt,Bt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,qt,Pt.width,Pt.height,0,Dt,Bt,Pt.data)}}}else{if(yt=v.mipmaps,B&&pt){yt.length>0&&mt++;const st=ie(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,qt,st.width,st.height)}for(let st=0;st<6;st++)if(It){B?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,gt[st].width,gt[st].height,Dt,Bt,gt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,qt,gt[st].width,gt[st].height,0,Dt,Bt,gt[st].data);for(let Ut=0;Ut<yt.length;Ut++){const Se=yt[Ut].image[st].image;B?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,0,0,Se.width,Se.height,Dt,Bt,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,qt,Se.width,Se.height,0,Dt,Bt,Se.data)}}else{B?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt,Bt,gt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,qt,Dt,Bt,gt[st]);for(let Ut=0;Ut<yt.length;Ut++){const Pt=yt[Ut];B?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,0,0,Dt,Bt,Pt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,qt,Dt,Bt,Pt.image[st])}}}p(v)&&S(i.TEXTURE_CUBE_MAP),ct.__version=Z.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Et(A,v,z,V,Z,ct){const ht=r.convert(z.format,z.colorSpace),J=r.convert(z.type),tt=_(z.internalFormat,ht,J,z.normalized,z.colorSpace),dt=n.get(v),It=n.get(z);if(It.__renderTarget=v,!dt.__hasExternalTextures){const gt=Math.max(1,v.width>>ct),ft=Math.max(1,v.height>>ct);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,ct,tt,gt,ft,v.depth,0,ht,J,null):e.texImage2D(Z,ct,tt,gt,ft,0,ht,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Wt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Z,It.__webglTexture,0,kt(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Z,It.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(A,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const V=v.depthTexture,Z=V&&V.isDepthTexture?V.type:null,ct=E(v.stencilBuffer,Z),ht=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Wt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(v),ct,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(v),ct,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ct,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,A)}else{const V=v.textures;for(let Z=0;Z<V.length;Z++){const ct=V[Z],ht=r.convert(ct.format,ct.colorSpace),J=r.convert(ct.type),tt=_(ct.internalFormat,ht,J,ct.normalized,ct.colorSpace);Wt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt(v),tt,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt(v),tt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,tt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(A,v,z){const V=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",L)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,v.depthTexture);const dt=r.convert(v.depthTexture.format),It=r.convert(v.depthTexture.type);let gt;v.depthTexture.format===Fn?gt=i.DEPTH_COMPONENT24:v.depthTexture.format===li&&(gt=i.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,gt,v.width,v.height,0,dt,It,null)}}else K(v.depthTexture,0);const ct=Z.__webglTexture,ht=kt(v),J=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,tt=v.depthTexture.format===li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Fn)Wt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,J,ct,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,tt,J,ct,0);else if(v.depthTexture.format===li)Wt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,J,ct,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,tt,J,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){const v=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const V=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=V}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let V=0;V<6;V++)me(v.__webglFramebuffer[V],A,V);else{const V=A.texture.mipmaps;V&&V.length>0?me(v.__webglFramebuffer[0],A,0):me(v.__webglFramebuffer,A,0)}else if(z){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=i.createRenderbuffer(),Gt(v.__webglDepthbuffer[V],A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=v.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ct)}}else{const V=A.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Gt(v.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(A,v,z){const V=n.get(A);v!==void 0&&Et(V.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&nt(A)}function ot(A){const v=A.texture,z=n.get(A),V=n.get(v);A.addEventListener("dispose",x);const Z=A.textures,ct=A.isWebGLCubeRenderTarget===!0,ht=Z.length>1;if(ht||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=v.version,a.memory.textures++),ct){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let tt=0;tt<v.mipmaps.length;tt++)z.__webglFramebuffer[J][tt]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ht)for(let J=0,tt=Z.length;J<tt;J++){const dt=n.get(Z[J]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Wt(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const tt=Z[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const dt=r.convert(tt.format,tt.colorSpace),It=r.convert(tt.type),gt=_(tt.internalFormat,dt,It,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),ft=kt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let tt=0;tt<v.mipmaps.length;tt++)Et(z.__webglFramebuffer[J][tt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,tt);else Et(z.__webglFramebuffer[J],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(v)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let J=0,tt=Z.length;J<tt;J++){const dt=Z[J],It=n.get(dt);let gt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,It.__webglTexture),Zt(gt,dt),Et(z.__webglFramebuffer,A,dt,i.COLOR_ATTACHMENT0+J,gt,0),p(dt)&&S(gt)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,V.__webglTexture),Zt(J,v),v.mipmaps&&v.mipmaps.length>0)for(let tt=0;tt<v.mipmaps.length;tt++)Et(z.__webglFramebuffer[tt],A,v,i.COLOR_ATTACHMENT0,J,tt);else Et(z.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,J,0);p(v)&&S(J),e.unbindTexture()}A.depthBuffer&&nt(A)}function lt(A){const v=A.textures;for(let z=0,V=v.length;z<V;z++){const Z=v[z];if(p(Z)){const ct=w(A),ht=n.get(Z).__webglTexture;e.bindTexture(ct,ht),S(ct),e.unbindTexture()}}}const ut=[],Ot=[];function Nt(A){if(A.samples>0){if(Wt(A)===!1){const v=A.textures,z=A.width,V=A.height;let Z=i.COLOR_BUFFER_BIT;const ct=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(A),J=v.length>1;if(J)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);const tt=A.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);const It=n.get(v[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,It,0)}i.blitFramebuffer(0,0,z,V,0,0,z,V,Z,i.NEAREST),l===!0&&(ut.length=0,Ot.length=0,ut.push(i.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ut.push(ct),Ot.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);const It=n.get(v[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function kt(A){return Math.min(s.maxSamples,A.samples)}function Wt(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(A){const v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function ue(A,v){const z=A.colorSpace,V=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==vr&&z!==Jn&&(ae.getTransfer(z)===ge?(V!==dn||Z!==je)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",z)),v}function ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=D,this.getTextureUnits=C,this.setTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Rg(i,t){function e(n,s=Jn){let r;const a=ae.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===_o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sc)return i.BYTE;if(n===yc)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===go)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===wc)return i.ALPHA;if(n===Tc)return i.RGB;if(n===dn)return i.RGBA;if(n===Fn)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===xo)return i.RED;if(n===Mo)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===So)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(a===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ca||n===Pa||n===La)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===Da||n===Ua||n===Na||n===Fa||n===gr||n===Oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===Da)return a===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ua)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Na)return r.COMPRESSED_R11_EAC;if(n===Fa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===gr)return r.COMPRESSED_RG11_EAC;if(n===Oa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ba||n===za||n===Ha||n===Ga||n===ka||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$a)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===ja||n===to)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qa)return a===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eo||n===no||n===_r||n===io)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
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

}`;class Lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Hc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wn({vertexShader:Cg,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Pr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ig extends fi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const M=typeof XRWebGLBinding<"u",m=new Lg,p={},S=e.getContextAttributes();let w=null,_=null;const E=[],b=[],L=new at;let x=null,T=null;const P=new Qe;P.viewport=new we;const N=new Qe;N.viewport=new we;const R=[P,N],D=new zd;let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=E[Y];return et===void 0&&(et=new Wr,E[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=E[Y];return et===void 0&&(et=new Wr,E[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=E[Y];return et===void 0&&(et=new Wr,E[Y]=et),et.getHandSpace()};function H(Y){const et=b.indexOf(Y.inputSource);if(et===-1)return;const vt=E[et];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||a),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<E.length;Y++){const et=b[Y];et!==null&&(b[Y]=null,E[Y].disconnect(et))}C=null,F=null,m.reset();for(const Y in p)delete p[Y];if(t.setRenderTarget(w),d=null,h=null,f=null,s=null,_=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(L.width,L.height,!1),T!==null){const Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(L),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ht=null,Et=null;S.depth&&(Et=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=S.stencil?li:Fn,Ht=S.stencil?Ms:bn);const Gt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Gt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new fn(h.textureWidth,h.textureHeight,{format:dn,type:je,depthTexture:new ws(h.textureWidth,h.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const vt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new fn(d.framebufferWidth,d.framebufferHeight,{format:dn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Y){for(let et=0;et<Y.removed.length;et++){const vt=Y.removed[et],Ht=b.indexOf(vt);Ht>=0&&(b[Ht]=null,E[Ht].disconnect(vt))}for(let et=0;et<Y.added.length;et++){const vt=Y.added[et];let Ht=b.indexOf(vt);if(Ht===-1){for(let Gt=0;Gt<E.length;Gt++)if(Gt>=b.length){b.push(vt),Ht=Gt;break}else if(b[Gt]===null){b[Gt]=vt,Ht=Gt;break}if(Ht===-1)break}const Et=E[Ht];Et&&Et.connect(vt)}}const q=new I,$=new I;function Q(Y,et,vt){q.setFromMatrixPosition(et.matrixWorld),$.setFromMatrixPosition(vt.matrixWorld);const Ht=q.distanceTo($),Et=et.projectionMatrix.elements,Gt=vt.projectionMatrix.elements,me=Et[14]/(Et[10]-1),nt=Et[14]/(Et[10]+1),rt=(Et[9]+1)/Et[5],ot=(Et[9]-1)/Et[5],lt=(Et[8]-1)/Et[0],ut=(Gt[8]+1)/Gt[0],Ot=me*lt,Nt=me*ut,kt=Ht/(-lt+ut),Wt=kt*-lt;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Wt),Y.translateZ(kt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Et[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const U=me+kt,ue=nt+kt,ie=Ot-Wt,A=Nt+(Ht-Wt),v=rt*nt/ue*U,z=ot*nt/ue*U;Y.projectionMatrix.makePerspective(ie,A,v,z,U,ue),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ct(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,vt=Y.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),D.near=N.near=P.near=et,D.far=N.far=P.far=vt,(C!==D.near||F!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),C=D.near,F=D.far),D.layers.mask=Y.layers.mask|6,P.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;const Ht=Y.parent,Et=D.cameras;Ct(D,Ht);for(let Gt=0;Gt<Et.length;Gt++)Ct(Et[Gt],Ht);Et.length===2?Q(D,P,N):D.projectionMatrix.copy(P.projectionMatrix),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),bt(Y,D,Ht)};function bt(Y,et,vt){vt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=bs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Y){return p[Y]};let oe=null;function Zt(Y,et){if(u=et.getViewerPose(c||a),g=et,u!==null){const vt=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Ht=!1;vt.length!==D.cameras.length&&(D.cameras.length=0,Ht=!0);for(let nt=0;nt<vt.length;nt++){const rt=vt[nt];let ot=null;if(d!==null)ot=d.getViewport(rt);else{const ut=f.getViewSubImage(h,rt);ot=ut.viewport,nt===0&&(t.setRenderTargetTextures(_,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(_))}let lt=R[nt];lt===void 0&&(lt=new Qe,lt.layers.enable(nt),lt.viewport=new we,R[nt]=lt),lt.matrix.fromArray(rt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(rt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ot.x,ot.y,ot.width,ot.height),nt===0&&(D.matrix.copy(lt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ht===!0&&D.cameras.push(lt)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const nt=f.getDepthInformation(vt[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,s.renderState)}if(Et&&Et.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let nt=0;nt<vt.length;nt++){const rt=vt[nt].camera;if(rt){let ot=p[rt];ot||(ot=new Hc,p[rt]=ot);const lt=f.getCameraImage(rt);ot.sourceTexture=lt}}}}for(let vt=0;vt<E.length;vt++){const Ht=b[vt],Et=E[vt];Ht!==null&&Et!==void 0&&Et.update(Ht,et,c||a)}oe&&oe(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ne=new jc;ne.setAnimationLoop(Zt),this.setAnimationLoop=function(Y){oe=Y},this.dispose=function(){}}}const Dg=new pe,ah=new Xt;ah.set(-1,0,0,0,1,0,0,0,1);function Ug(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$c(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,w,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),w=S.envMap,_=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ah),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ng(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){const b=E.program;n.uniformBlockBinding(_,b)}function c(_,E){let b=s[_.id];b===void 0&&(m(_),b=u(_),s[_.id]=b,_.addEventListener("dispose",S));const L=E.program;n.updateUBOMapping(_,L);const x=t.render.frame;r[_.id]!==x&&(h(_),r[_.id]=x)}function u(_){const E=f();_.__bindingPointIndex=E;const b=i.createBuffer(),L=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const E=s[_.id],b=_.uniforms,L=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,T=b.length;x<T;x++){const P=b[x];if(Array.isArray(P))for(let N=0,R=P.length;N<R;N++)d(P[N],x,N,L);else d(P,x,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,E,b,L){if(M(_,E,b,L)===!0){const x=_.__offset,T=_.value;if(Array.isArray(T)){let P=0;for(let N=0;N<T.length;N++){const R=T[N],D=p(R);g(R,_.__data,P),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(P+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function g(_,E,b){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,b)}function M(_,E,b,L){const x=_.value,T=E+"_"+b;if(L[T]===void 0)return typeof x=="number"||typeof x=="boolean"?L[T]=x:ArrayBuffer.isView(x)?L[T]=x.slice():L[T]=x.clone(),!0;{const P=L[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return L[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(_){const E=_.uniforms;let b=0;const L=16;for(let T=0,P=E.length;T<P;T++){const N=Array.isArray(E[T])?E[T]:[E[T]];for(let R=0,D=N.length;R<D;R++){const C=N[R],F=Array.isArray(C.value)?C.value:[C.value];for(let H=0,W=F.length;H<W;H++){const K=F[H],q=p(K),$=b%L,Q=$%q.boundary,Ct=$+Q;b+=Q,Ct!==0&&L-Ct<q.storage&&(b+=L-Ct),C.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,b+=q.storage}}}const x=b%L;return x>0&&(b+=L-x),_.__size=b,_.__cache={},this}function p(_){const E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",_),E}function S(_){const E=_.target;E.removeEventListener("dispose",S);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}const Fg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vn=null;function Og(){return vn===null&&(vn=new Fc(Fg,16,16,ui,En),vn.name="DFG_LUT",vn.minFilter=ke,vn.magFilter=ke,vn.wrapS=In,vn.wrapT=In,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}class Bg{constructor(t={}){const{canvas:e=jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=je}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=d,m=new Set([yo,So,Mo]),p=new Set([je,bn,xs,Ms,_o,vo]),S=new Uint32Array(4),w=new Int32Array(4),_=new I;let E=null,b=null;const L=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,R=null,D=null,C=null,F=null;this._outputColorSpace=Ge;let H=0,W=0,K=null,q=-1,$=null;const Q=new we,Ct=new we;let bt=null;const oe=new Qt(0);let Zt=0,ne=e.width,Y=e.height,et=1,vt=null,Ht=null;const Et=new we(0,0,ne,Y),Gt=new we(0,0,ne,Y);let me=!1;const nt=new Ro;let rt=!1,ot=!1;const lt=new pe,ut=new I,Ot=new we,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Wt(){return K===null?et:1}let U=n;function ue(y,O){return e.getContext(y,O)}let ie,A,v,z,V,Z,ct,ht,J,tt,dt,It,gt,ft,Dt,Bt,qt,B,pt,j,mt,yt,st;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fo}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",rn,!1),U===null){const O="webgl2";if(U=ue(O,y),U===null)throw ue(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(y){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),le("WebGLRenderer: "+y.message),y}function Ut(){ie=new Om(U),ie.init(),mt=new Rg(U,ie),A=new Am(U,ie,t,mt),v=new Tg(U,ie),A.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),D=U.createFramebuffer(),C=U.createFramebuffer(),F=U.createFramebuffer(),z=new Hm(U),V=new dg,Z=new Ag(U,ie,v,V,A,mt,z),ct=new Fm(P),ht=new Gd(U),yt=new wm(U,ht),J=new Bm(U,ht,z,yt),tt=new km(U,J,ht,yt,z),B=new Gm(U,A,Z),Dt=new Rm(V),dt=new ug(P,ct,ie,A,yt,Dt),It=new Ug(P,V),gt=new pg,ft=new Mg(ie),qt=new Em(P,ct,v,tt,g,l),Bt=new wg(P,tt,A),st=new Ng(U,z,A,v),pt=new Tm(U,ie,z),j=new zm(U,ie,z),z.programs=dt.programs,P.capabilities=A,P.extensions=ie,P.properties=V,P.renderLists=gt,P.shadowMap=Bt,P.state=v,P.info=z}M!==je&&(T=new Wm(M,e.width,e.height,o,s,r));const Pt=new Ig(P,U);this.xr=Pt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(y){y!==void 0&&(et=y,this.setSize(ne,Y,!1))},this.getSize=function(y){return y.set(ne,Y)},this.setSize=function(y,O,X=!0){if(Pt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=y,Y=O,e.width=Math.floor(y*et),e.height=Math.floor(O*et),X===!0&&(e.style.width=y+"px",e.style.height=O+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(ne*et,Y*et).floor()},this.setDrawingBufferSize=function(y,O,X){ne=y,Y=O,et=X,e.width=Math.floor(y*X),e.height=Math.floor(O*X),this.setViewport(0,0,y,O)},this.setEffects=function(y){if(M===je){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let O=0;O<y.length;O++)if(y[O].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Q)},this.getViewport=function(y){return y.copy(Et)},this.setViewport=function(y,O,X,G){y.isVector4?Et.set(y.x,y.y,y.z,y.w):Et.set(y,O,X,G),v.viewport(Q.copy(Et).multiplyScalar(et).round())},this.getScissor=function(y){return y.copy(Gt)},this.setScissor=function(y,O,X,G){y.isVector4?Gt.set(y.x,y.y,y.z,y.w):Gt.set(y,O,X,G),v.scissor(Ct.copy(Gt).multiplyScalar(et).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(y){v.setScissorTest(me=y)},this.setOpaqueSort=function(y){vt=y},this.setTransparentSort=function(y){Ht=y},this.getClearColor=function(y){return y.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,X=!0){let G=0;if(y){let k=!1;if(K!==null){const St=K.texture.format;k=m.has(St)}if(k){const St=K.texture.type,Tt=p.has(St),xt=qt.getClearColor(),At=qt.getClearAlpha(),Lt=xt.r,Jt=xt.g,se=xt.b;Tt?(S[0]=Lt,S[1]=Jt,S[2]=se,S[3]=At,U.clearBufferuiv(U.COLOR,0,S)):(w[0]=Lt,w[1]=Jt,w[2]=se,w[3]=At,U.clearBufferiv(U.COLOR,0,w))}else G|=U.COLOR_BUFFER_BIT}O&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),R=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",rn,!1),qt.dispose(),gt.dispose(),ft.dispose(),V.dispose(),ct.dispose(),tt.dispose(),yt.dispose(),st.dispose(),dt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",ko),Pt.removeEventListener("sessionend",Vo),ti.stop()};function Se(y){y.preventDefault(),Mr("WebGLRenderer: Context Lost."),N=!0}function de(){Mr("WebGLRenderer: Context Restored."),N=!1;const y=z.autoReset,O=Bt.enabled,X=Bt.autoUpdate,G=Bt.needsUpdate,k=Bt.type;Ut(),z.autoReset=y,Bt.enabled=O,Bt.autoUpdate=X,Bt.needsUpdate=G,Bt.type=k}function rn(y){le("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function mn(y){const O=y.target;O.removeEventListener("dispose",mn),oh(O)}function oh(y){lh(y),V.remove(y)}function lh(y){const O=V.get(y).programs;O!==void 0&&(O.forEach(function(X){dt.releaseProgram(X)}),y.isShaderMaterial&&dt.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,X,G,k,St){O===null&&(O=Nt);const Tt=k.isMesh&&k.matrixWorld.determinantAffine()<0,xt=uh(y,O,X,G,k);v.setMaterial(G,Tt);let At=X.index,Lt=1;if(G.wireframe===!0){if(At=J.getWireframeAttribute(X),At===void 0)return;Lt=2}const Jt=X.drawRange,se=X.attributes.position;let Rt=Jt.start*Lt,fe=(Jt.start+Jt.count)*Lt;St!==null&&(Rt=Math.max(Rt,St.start*Lt),fe=Math.min(fe,(St.start+St.count)*Lt)),At!==null?(Rt=Math.max(Rt,0),fe=Math.min(fe,At.count)):se!=null&&(Rt=Math.max(Rt,0),fe=Math.min(fe,se.count));const Ce=fe-Rt;if(Ce<0||Ce===1/0)return;yt.setup(k,G,xt,X,At);let Ee,xe=pt;if(At!==null&&(Ee=ht.get(At),xe=j,xe.setIndex(Ee)),k.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*Wt()),xe.setMode(U.LINES)):xe.setMode(U.TRIANGLES);else if(k.isLine){let Be=G.linewidth;Be===void 0&&(Be=1),v.setLineWidth(Be*Wt()),k.isLineSegments?xe.setMode(U.LINES):k.isLineLoop?xe.setMode(U.LINE_LOOP):xe.setMode(U.LINE_STRIP)}else k.isPoints?xe.setMode(U.POINTS):k.isSprite&&xe.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))xe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Be=k._multiDrawStarts,wt=k._multiDrawCounts,We=k._multiDrawCount,ce=At?ht.get(At).bytesPerElement:1,tn=V.get(G).currentProgram.getUniforms();for(let gn=0;gn<We;gn++)tn.setValue(U,"_gl_DrawID",gn),xe.render(Be[gn]/ce,wt[gn])}else if(k.isInstancedMesh)xe.renderInstances(Rt,Ce,k.count);else if(X.isInstancedBufferGeometry){const Be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wt=Math.min(X.instanceCount,Be);xe.renderInstances(Rt,Ce,wt)}else xe.render(Rt,Ce)};function Go(y,O,X,G){R!==null&&y.isNodeMaterial&&R.setObject(G,y),rt===!0&&Dt.setState(y,X,!1),y.transparent===!0&&y.side===nn&&y.forceSinglePass===!1?(y.side=Ve,y.needsUpdate=!0,Ps(y,O,G),y.side=ci,y.needsUpdate=!0,Ps(y,O,G),y.side=nn):Ps(y,O,G)}this.compile=function(y,O,X=null){X===null&&(X=y),R!==null&&R.renderStart(y,O,X),b=ft.get(X),b.init(O),x.push(b),X.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),y!==X&&y.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights(),R!==null&&R.updateLights(b.state.lightsArray),ot=this.localClippingEnabled,rt=Dt.init(this.clippingPlanes,ot),rt===!0&&Dt.setGlobalState(this.clippingPlanes,O),R!==null&&Bt.render(b.state.shadowsArray,X,O);const G=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const St=k.material;if(St)if(Array.isArray(St))for(let Tt=0;Tt<St.length;Tt++){const xt=St[Tt];Go(xt,X,O,k),G.add(xt)}else Go(St,X,O,k),G.add(St)}),b=x.pop(),R!==null&&R.renderEnd(),G},this.compileAsync=function(y,O,X=null){const G=this.compile(y,O,X);return new Promise(k=>{function St(){if(G.forEach(function(Tt){const At=V.get(Tt).currentProgram;(At===void 0||At.isReady())&&G.delete(Tt)}),G.size===0){k(y);return}setTimeout(St,10)}ie.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Dr=null;function ch(y){Dr&&Dr(y)}function ko(){ti.stop()}function Vo(){ti.start()}const ti=new jc;ti.setAnimationLoop(ch),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(y){Dr=y,Pt.setAnimationLoop(y),y===null?ti.stop():ti.start()},Pt.addEventListener("sessionstart",ko),Pt.addEventListener("sessionend",Vo),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;R!==null&&R.renderStart(y,O);const X=Pt.enabled===!0&&Pt.isPresenting===!0,G=T!==null&&(K===null||X)&&T.begin(P,K);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(O),O=Pt.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,O,K),b=ft.get(y,x.length),b.init(O),b.state.textureUnits=Z.getTextureUnits(),x.push(b),lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),nt.setFromProjectionMatrix(lt,Mn,O.reversedDepth),ot=this.localClippingEnabled,rt=Dt.init(this.clippingPlanes,ot),E=gt.get(y,L.length),E.init(),L.push(E),Pt.enabled===!0&&Pt.isPresenting===!0){const Tt=P.xr.getDepthSensingMesh();Tt!==null&&Ur(Tt,O,-1/0,P.sortObjects)}Ur(y,O,0,P.sortObjects),E.finish(),R!==null&&R.updateLights(b.state.lightsArray),P.sortObjects===!0&&E.sort(vt,Ht),kt=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,kt&&qt.addToRenderList(E,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Dt.beginShadows();const k=b.state.shadowsArray;if(Bt.render(k,y,O),rt===!0&&Dt.endShadows(),(G&&T.hasRenderPass())===!1){const Tt=E.opaque,xt=E.transmissive;if(b.setupLights(),O.isArrayCamera){const At=O.cameras;if(xt.length>0)for(let Lt=0,Jt=At.length;Lt<Jt;Lt++){const se=At[Lt];Xo(Tt,xt,y,se)}kt&&qt.render(y);for(let Lt=0,Jt=At.length;Lt<Jt;Lt++){const se=At[Lt];Wo(E,y,se,se.viewport)}}else xt.length>0&&Xo(Tt,xt,y,O),kt&&qt.render(y),Wo(E,y,O)}K!==null&&W===0&&(Z.updateMultisampleRenderTarget(K),Z.updateRenderTargetMipmap(K)),G&&T.end(P),y.isScene===!0&&y.onAfterRender(P,y,O),yt.resetDefaultState(),q=-1,$=null,x.pop(),x.length>0?(b=x[x.length-1],Z.setTextureUnits(b.state.textureUnits),rt===!0&&Dt.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,L.pop(),L.length>0?E=L[L.length-1]:E=null,R!==null&&R.renderEnd()};function Ur(y,O,X,G){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(nt)){G&&Ot.setFromMatrixPosition(y.matrixWorld).applyMatrix4(lt);const Tt=tt.update(y),xt=y.material;xt.visible&&E.push(y,Tt,xt,X,Ot.z,null,O)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(nt))){const Tt=tt.update(y),xt=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ot.copy(y.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Ot.copy(Tt.boundingSphere.center)),Ot.applyMatrix4(y.matrixWorld).applyMatrix4(lt)),Array.isArray(xt)){const At=Tt.groups;for(let Lt=0,Jt=At.length;Lt<Jt;Lt++){const se=At[Lt],Rt=xt[se.materialIndex];Rt&&Rt.visible&&E.push(y,Tt,Rt,X,Ot.z,se,O)}}else xt.visible&&E.push(y,Tt,xt,X,Ot.z,null,O)}}const St=y.children;for(let Tt=0,xt=St.length;Tt<xt;Tt++)Ur(St[Tt],O,X,G)}function Wo(y,O,X,G){const{opaque:k,transmissive:St,transparent:Tt}=y;b.setupLightsView(X),rt===!0&&Dt.setGlobalState(P.clippingPlanes,X),G&&v.viewport(Q.copy(G)),k.length>0&&Cs(k,O,X),St.length>0&&Cs(St,O,X),Tt.length>0&&Cs(Tt,O,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Xo(y,O,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const Rt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new fn(1,1,{generateMipmaps:!0,type:Rt?En:je,minFilter:oi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const St=b.state.transmissionRenderTarget[G.id],Tt=G.viewport||Q;St.setSize(Tt.z*P.transmissionResolutionScale,Tt.w*P.transmissionResolutionScale);const xt=P.getRenderTarget(),At=P.getActiveCubeFace(),Lt=P.getActiveMipmapLevel();P.setRenderTarget(St),P.getClearColor(oe),Zt=P.getClearAlpha(),Zt<1&&P.setClearColor(16777215,.5),P.clear(),kt&&qt.render(X);const Jt=P.toneMapping;P.toneMapping=Sn;const se=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),rt===!0&&Dt.setGlobalState(P.clippingPlanes,G),Cs(y,X,G),Z.updateMultisampleRenderTarget(St),Z.updateRenderTargetMipmap(St),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let fe=0,Ce=O.length;fe<Ce;fe++){const Ee=O[fe],{object:xe,geometry:Be,material:wt,group:We}=Ee;if(wt.side===nn&&xe.layers.test(G.layers)){const ce=wt.side;wt.side=Ve,wt.needsUpdate=!0,qo(xe,X,G,Be,wt,We),wt.side=ce,wt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Z.updateMultisampleRenderTarget(St),Z.updateRenderTargetMipmap(St))}P.setRenderTarget(xt,At,Lt),P.setClearColor(oe,Zt),se!==void 0&&(G.viewport=se),P.toneMapping=Jt}function Cs(y,O,X){const G=O.isScene===!0?O.overrideMaterial:null;for(let k=0,St=y.length;k<St;k++){const Tt=y[k],{object:xt,geometry:At,group:Lt}=Tt;let Jt=Tt.material;Jt.allowOverride===!0&&G!==null&&(Jt=G),xt.layers.test(X.layers)&&qo(xt,O,X,At,Jt,Lt)}}function qo(y,O,X,G,k,St){R!==null&&k.isNodeMaterial&&R.setObject(y,k),y.onBeforeRender(P,O,X,G,k,St),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(P,O,X,G,y,St),k.transparent===!0&&k.side===nn&&k.forceSinglePass===!1?(k.side=Ve,k.needsUpdate=!0,P.renderBufferDirect(X,O,G,k,y,St),k.side=ci,k.needsUpdate=!0,P.renderBufferDirect(X,O,G,k,y,St),k.side=nn):P.renderBufferDirect(X,O,G,k,y,St),y.onAfterRender(P,O,X,G,k,St)}function Ps(y,O,X){O.isScene!==!0&&(O=Nt);const G=V.get(y),k=b.state.lights,St=b.state.shadowsArray,Tt=k.state.version,xt=dt.getParameters(y,k.state,St,O,X,b.state.lightProbeGridArray),At=dt.getProgramCacheKey(xt);let Lt=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const Jt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=ct.get(y.envMap||G.environment,Jt),G.envMapRotation=G.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Lt===void 0&&(y.addEventListener("dispose",mn),Lt=new Map,G.programs=Lt);let se=Lt.get(At);if(se!==void 0){if(G.currentProgram===se&&G.lightsStateVersion===Tt)return Zo(y,xt),se}else xt.uniforms=dt.getUniforms(y),R!==null&&y.isNodeMaterial&&R.build(y,X,xt),y.onBeforeCompile(xt,P),se=dt.acquireProgram(xt,At),Lt.set(At,se),G.uniforms=xt.uniforms;const Rt=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Rt.clippingPlanes=Dt.uniform),Zo(y,xt),G.needsLights=fh(y),G.lightsStateVersion=Tt,G.needsLights&&(Rt.ambientLightColor.value=k.state.ambient,Rt.lightProbe.value=k.state.probe,Rt.sunLights.value=k.state.sun,Rt.sunLightShadows.value=k.state.sunShadow,Rt.directionalLights.value=k.state.directional,Rt.directionalLightShadows.value=k.state.directionalShadow,Rt.spotLights.value=k.state.spot,Rt.spotLightShadows.value=k.state.spotShadow,Rt.rectAreaLights.value=k.state.rectArea,Rt.ltc_1.value=k.state.rectAreaLTC1,Rt.ltc_2.value=k.state.rectAreaLTC2,Rt.pointLights.value=k.state.point,Rt.pointLightShadows.value=k.state.pointShadow,Rt.hemisphereLights.value=k.state.hemi,Rt.sunShadowMatrix.value=k.state.sunShadowMatrix,Rt.sunShadowCascade.value=k.state.sunShadowCascade,Rt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Rt.spotLightMatrix.value=k.state.spotLightMatrix,Rt.spotLightMap.value=k.state.spotLightMap,Rt.pointShadowMatrix.value=k.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=se,G.uniformsList=null,se}function Yo(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=mr.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Zo(y,O){const X=V.get(y);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function hh(y,O){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let X=0,G=y.length;X<G;X++){const k=y[X];if(k.texture!==null&&k.boundingBox.containsPoint(_))return k}return null}function uh(y,O,X,G,k){O.isScene!==!0&&(O=Nt),Z.resetTextureUnits();const St=O.fog,Tt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,xt=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ae.workingColorSpace,At=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Lt=ct.get(G.envMap||Tt,At),Jt=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,se=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Rt=!!X.morphAttributes.position,fe=!!X.morphAttributes.normal,Ce=!!X.morphAttributes.color;let Ee=Sn;G.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ee=P.toneMapping);const xe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Be=xe!==void 0?xe.length:0,wt=V.get(G),We=b.state.lights;if(rt===!0&&(ot===!0||y!==$)){const ye=y===$&&G.id===q;Dt.setState(G,y,ye)}let ce=!1;G.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==We.state.version||wt.outputColorSpace!==xt||k.isBatchedMesh&&wt.batching===!1||!k.isBatchedMesh&&wt.batching===!0||k.isBatchedMesh&&wt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&wt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&wt.instancing===!1||!k.isInstancedMesh&&wt.instancing===!0||k.isSkinnedMesh&&wt.skinning===!1||!k.isSkinnedMesh&&wt.skinning===!0||k.isInstancedMesh&&wt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&wt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&wt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&wt.instancingMorph===!1&&k.morphTexture!==null||wt.envMap!==Lt||G.fog===!0&&wt.fog!==St||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Dt.numPlanes||wt.numIntersection!==Dt.numIntersection)||wt.vertexAlphas!==Jt||wt.vertexTangents!==se||wt.morphTargets!==Rt||wt.morphNormals!==fe||wt.morphColors!==Ce||wt.toneMapping!==Ee||wt.morphTargetsCount!==Be||!!wt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,wt.__version=G.version);let tn=wt.currentProgram;ce===!0&&(tn=Ps(G,O,k),R&&G.isNodeMaterial&&R.onUpdateProgram(G,tn,wt));let gn=!1,On=!1,mi=!1;const ve=tn.getUniforms(),Re=wt.uniforms;if(v.useProgram(tn.program)&&(gn=!0,On=!0,mi=!0),G.id!==q&&(q=G.id,On=!0),wt.needsLights){const ye=hh(b.state.lightProbeGridArray,k);wt.lightProbeGrid!==ye&&(wt.lightProbeGrid=ye,On=!0)}if(gn||$!==y){v.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ve.setValue(U,"projectionMatrix",y.projectionMatrix),ve.setValue(U,"viewMatrix",y.matrixWorldInverse);const zn=ve.map.cameraPosition;zn!==void 0&&zn.setValue(U,ut.setFromMatrixPosition(y.matrixWorld)),A.logarithmicDepthBuffer&&ve.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ve.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),$!==y&&($=y,On=!0,mi=!0)}if(wt.needsLights&&(We.state.sunShadowMap.length>0&&ve.setValue(U,"sunShadowMap",We.state.sunShadowMap,Z),We.state.directionalShadowMap.length>0&&ve.setValue(U,"directionalShadowMap",We.state.directionalShadowMap,Z),We.state.spotShadowMap.length>0&&ve.setValue(U,"spotShadowMap",We.state.spotShadowMap,Z),We.state.pointShadowMap.length>0&&ve.setValue(U,"pointShadowMap",We.state.pointShadowMap,Z)),k.isSkinnedMesh){ve.setOptional(U,k,"bindMatrix"),ve.setOptional(U,k,"bindMatrixInverse");const ye=k.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),ve.setValue(U,"boneTexture",ye.boneTexture,Z))}k.isBatchedMesh&&(ve.setOptional(U,k,"batchingTexture"),ve.setValue(U,"batchingTexture",k._matricesTexture,Z),ve.setOptional(U,k,"batchingIdTexture"),ve.setValue(U,"batchingIdTexture",k._indirectTexture,Z),ve.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(U,"batchingColorTexture",k._colorsTexture,Z));const Bn=X.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&B.update(k,X,tn),(On||wt.receiveShadow!==k.receiveShadow)&&(wt.receiveShadow=k.receiveShadow,ve.setValue(U,"receiveShadow",k.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Re.envMapIntensity.value=O.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=Og()),On){if(ve.setValue(U,"toneMappingExposure",P.toneMappingExposure),wt.needsLights&&dh(Re,mi),St&&G.fog===!0&&It.refreshFogUniforms(Re,St),It.refreshMaterialUniforms(Re,G,et,Y,b.state.transmissionRenderTarget[y.id]),wt.needsLights&&wt.lightProbeGrid){const ye=wt.lightProbeGrid;Re.probesSH.value=ye.texture,Re.probesMin.value.copy(ye.boundingBox.min),Re.probesMax.value.copy(ye.boundingBox.max),Re.probesResolution.value.copy(ye.resolution)}mr.upload(U,Yo(wt),Re,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(mr.upload(U,Yo(wt),Re,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ve.setValue(U,"center",k.center),ve.setValue(U,"modelViewMatrix",k.modelViewMatrix),ve.setValue(U,"normalMatrix",k.normalMatrix),ve.setValue(U,"modelMatrix",k.matrixWorld),G.uniformsGroups!==void 0){const ye=G.uniformsGroups;for(let zn=0,gi=ye.length;zn<gi;zn++){const $o=ye[zn];st.update($o,tn),st.bind($o,tn)}}return tn}function dh(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.sunLights.needsUpdate=O,y.sunLightShadows.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function fh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(y,O,X){const G=V.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),V.get(y.texture).__webglTexture=O,V.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){const X=V.get(y);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,X=0){K=y,H=O,W=X;let G=null,k=!1,St=!1;if(y){const xt=V.get(y);if(xt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,xt.__webglFramebuffer),Q.copy(y.viewport),Ct.copy(y.scissor),bt=y.scissorTest,v.viewport(Q),v.scissor(Ct),v.setScissorTest(bt),q=-1;return}else if(xt.__webglFramebuffer===void 0)Z.setupRenderTarget(y);else if(xt.__hasExternalTextures)Z.rebindTextures(y,V.get(y.texture).__webglTexture,V.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Jt=y.depthTexture;if(xt.__boundDepthTexture!==Jt){if(Jt!==null&&V.has(Jt)&&(y.width!==Jt.image.width||y.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(y)}}const At=y.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(St=!0);const Lt=V.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Lt[O])?G=Lt[O][X]:G=Lt[O],k=!0):y.samples>0&&Z.useMultisampledRTT(y)===!1?G=V.get(y).__webglMultisampledFramebuffer:Array.isArray(Lt)?G=Lt[X]:G=Lt,Q.copy(y.viewport),Ct.copy(y.scissor),bt=y.scissorTest}else Q.copy(Et).multiplyScalar(et).floor(),Ct.copy(Gt).multiplyScalar(et).floor(),bt=me;if(X!==0&&(G=D),v.bindFramebuffer(U.FRAMEBUFFER,G)&&v.drawBuffers(y,G),v.viewport(Q),v.scissor(Ct),v.setScissorTest(bt),k){const xt=V.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,xt.__webglTexture,X)}else if(St){const xt=O;for(let At=0;At<y.textures.length;At++){const Lt=V.get(y.textures[At]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+At,Lt.__webglTexture,X,xt)}}else if(y!==null&&X!==0){const xt=V.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xt.__webglTexture,X)}q=-1};function Jo(y){const O=V.get(y);return(O.__readFormat!==y.format||O.__readType!==y.type)&&(O.__readFormat=y.format,O.__readType=y.type,O.__formatReadable=A.textureFormatReadable(y.format),O.__typeReadable=A.textureTypeReadable(y.type)),O}this.readRenderTargetPixels=function(y,O,X,G,k,St,Tt,xt=0){if(!(y&&y.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Tt!==void 0&&(At=At[Tt]),At){v.bindFramebuffer(U.FRAMEBUFFER,At);try{const Lt=y.textures[xt],Jt=Lt.format,se=Lt.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xt);const Rt=Jo(Lt);if(Rt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-G&&X>=0&&X<=y.height-k&&U.readPixels(O,X,G,k,mt.convert(Jt),mt.convert(se),St)}finally{const Lt=K!==null?V.get(K).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(y,O,X,G,k,St,Tt,xt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=V.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Tt!==void 0&&(At=At[Tt]),At)if(O>=0&&O<=y.width-G&&X>=0&&X<=y.height-k){v.bindFramebuffer(U.FRAMEBUFFER,At);const Lt=y.textures[xt],Jt=Lt.format,se=Lt.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xt);const Rt=Jo(Lt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,fe),U.bufferData(U.PIXEL_PACK_BUFFER,St.byteLength,U.STREAM_READ),U.readPixels(O,X,G,k,mt.convert(Jt),mt.convert(se),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Ce=K!==null?V.get(K).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Ce);const Ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await tu(U,Ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,fe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,St),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(fe),U.deleteSync(Ee),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,X=0){const G=Math.pow(2,-X),k=Math.floor(y.image.width*G),St=Math.floor(y.image.height*G),Tt=O!==null?O.x:0,xt=O!==null?O.y:0;Z.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Tt,xt,k,St),v.unbindTexture()},this.copyTextureToTexture=function(y,O,X=null,G=null,k=0,St=0){let Tt,xt,At,Lt,Jt,se,Rt,fe,Ce;const Ee=y.isCompressedTexture?y.mipmaps[St]:y.image;if(X!==null)Tt=X.max.x-X.min.x,xt=X.max.y-X.min.y,At=X.isBox3?X.max.z-X.min.z:1,Lt=X.min.x,Jt=X.min.y,se=X.isBox3?X.min.z:0;else{const Re=Math.pow(2,-k);Tt=Math.floor(Ee.width*Re),xt=Math.floor(Ee.height*Re),y.isDataArrayTexture?At=Ee.depth:y.isData3DTexture?At=Math.floor(Ee.depth*Re):At=1,Lt=0,Jt=0,se=0}G!==null?(Rt=G.x,fe=G.y,Ce=G.z):(Rt=0,fe=0,Ce=0);const xe=mt.convert(O.format),Be=mt.convert(O.type);let wt;O.isData3DTexture?(Z.setTexture3D(O,0),wt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Z.setTexture2DArray(O,0),wt=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(O,0),wt=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const We=v.getParameter(U.UNPACK_ROW_LENGTH),ce=v.getParameter(U.UNPACK_IMAGE_HEIGHT),tn=v.getParameter(U.UNPACK_SKIP_PIXELS),gn=v.getParameter(U.UNPACK_SKIP_ROWS),On=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,Ee.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ee.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Lt),v.pixelStorei(U.UNPACK_SKIP_ROWS,Jt),v.pixelStorei(U.UNPACK_SKIP_IMAGES,se);const mi=y.isDataArrayTexture||y.isData3DTexture,ve=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const Re=V.get(y),Bn=V.get(O),ye=V.get(Re.__renderTarget),zn=V.get(Bn.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,ye.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let gi=0;gi<At;gi++)mi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(y).__webglTexture,k,se+gi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(O).__webglTexture,St,Ce+gi)),U.blitFramebuffer(Lt,Jt,Tt,xt,Rt,fe,Tt,xt,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||V.has(y)){const Re=V.get(y),Bn=V.get(O);v.bindFramebuffer(U.READ_FRAMEBUFFER,C),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,F);for(let ye=0;ye<At;ye++)mi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.__webglTexture,k,se+ye):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Re.__webglTexture,k),ve?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bn.__webglTexture,St,Ce+ye):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Bn.__webglTexture,St),k!==0?U.blitFramebuffer(Lt,Jt,Tt,xt,Rt,fe,Tt,xt,U.COLOR_BUFFER_BIT,U.NEAREST):ve?U.copyTexSubImage3D(wt,St,Rt,fe,Ce+ye,Lt,Jt,Tt,xt):U.copyTexSubImage2D(wt,St,Rt,fe,Lt,Jt,Tt,xt);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ve?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(wt,St,Rt,fe,Ce,Tt,xt,At,xe,Be,Ee.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(wt,St,Rt,fe,Ce,Tt,xt,At,xe,Ee.data):U.texSubImage3D(wt,St,Rt,fe,Ce,Tt,xt,At,xe,Be,Ee):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,St,Rt,fe,Tt,xt,xe,Be,Ee.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,St,Rt,fe,Ee.width,Ee.height,xe,Ee.data):U.texSubImage2D(U.TEXTURE_2D,St,Rt,fe,Tt,xt,xe,Be,Ee);v.pixelStorei(U.UNPACK_ROW_LENGTH,We),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ce),v.pixelStorei(U.UNPACK_SKIP_PIXELS,tn),v.pixelStorei(U.UNPACK_SKIP_ROWS,gn),v.pixelStorei(U.UNPACK_SKIP_IMAGES,On),St===0&&O.generateMipmaps&&U.generateMipmap(wt),v.unbindTexture()},this.initRenderTarget=function(y){V.get(y).__webglFramebuffer===void 0&&Z.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Z.setTextureCube(y,0):y.isData3DTexture?Z.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Z.setTexture2DArray(y,0):Z.setTexture2D(y,0),v.unbindTexture()},this.resetState=function(){H=0,W=0,K=null,v.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const zg=.55,gs=[{id:"nucleo-1",label:"Nucleo energetico ovest",kind:"core",x:-12.5,z:9},{id:"nucleo-2",label:"Nucleo energetico est",kind:"core",x:14,z:11},{id:"nucleo-3",label:"Nucleo energetico centrale",kind:"core",x:1,z:12},{id:"motore-ovest",label:"Terminale motore ovest",kind:"console",x:-12,z:0},{id:"motore-est",label:"Terminale motore est",kind:"console",x:12,z:0},{id:"navigazione",label:"Terminale di navigazione",kind:"console",x:0,z:-8.5},{id:"console-piazza",label:"Console della piazza",kind:"console",x:0,z:2},{id:"console-comando",label:"Console della sala di comando",kind:"console",x:0,z:-10.5},{id:"robot-guida",label:"Robot guida imperiale",kind:"npc",x:-4.5,z:3.5},{id:"porta-palazzo",label:"Ingresso del palazzo imperiale",kind:"door",x:-7.5,z:-4.2},{id:"porta-hangar",label:"Porta dell’hangar spaziale",kind:"door",x:9,z:-3.5},{id:"porta-comando",label:"Ingresso della Sala Comando",kind:"door",x:0,z:-11.1}];function he(i,t,e,n,s,r,a,o,l,c={}){const u=new be(r,a,o),f=new jt({color:l,roughness:c.roughness??.76,metalness:c.metalness??.12}),h=new it(u,f);return h.name=t,h.position.set(e,n,s),i.add(h),h}function Xn(i,t,e,n,s,r,a,o=.5){const l=new it(new Me(r,10,8),new jt({color:a,roughness:o,emissive:a,emissiveIntensity:.08}));return l.name=t,l.position.set(e,n,s),i.add(l),l}function ss(i,{name:t,x:e,z:n,sx:s,sz:r,height:a,color:o,roof:l="#e5b84f",entry:c=!0}){if(he(i,`${t}-base`,e,a/2,n,s,a,r,o),he(i,`${t}-roof`,e,a+.18,n,s+.35,.36,r+.35,l,{metalness:.32}),he(i,`${t}-cornice`,e,a-.42,n+r/2+.04,s+.12,.34,.16,"#bd9d4c",{metalness:.64,roughness:.3}),c){const f=n+r/2+.055;he(i,`${t}-portale`,e,1.35+.55,f,2.65,2.95,.36,"#ba9748",{metalness:.65,roughness:.28}),he(i,`${t}-ingresso`,e,1.35,f+.2,1.82,2.48,.24,"#0a1c32",{metalness:.34,roughness:.27}),he(i,`${t}-insegna`,e,a-1.05,f+.25,Math.min(5.4,s*.75),.32,.12,"#203f61",{metalness:.58})}for(let u=0;u<Math.max(1,Math.floor(a/2.2));u++){const f=1.1+u*2.2;for(const h of[-1,1]){const d=he(i,`${t}-window`,e+h*(s/2+.025),f,n,.06,.72,Math.max(.6,r*.34),"#72c9ff",{roughness:.22,metalness:.18});d.material.emissive.set("#24659b"),d.material.emissiveIntensity=.62;const g=he(i,`${t}-window`,e,f,n+h*(r/2+.025),Math.max(.6,s*.34),.72,.06,"#72c9ff",{roughness:.22,metalness:.18});g.material.emissive.set("#24659b"),g.material.emissiveIntensity=.62}}}function _a(i){const t=document.createElement("canvas");t.width=320,t.height=64;const e=t.getContext("2d");e.fillStyle="rgba(5,17,35,.88)",e.fillRect(0,0,t.width,t.height),e.strokeStyle="#e5b84f",e.lineWidth=3,e.strokeRect(2,2,t.width-4,t.height-4),e.font="bold 23px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillStyle="#fff1bd",e.fillText(i,t.width/2,t.height/2,t.width-18);const n=new Es(t),s=new ro(new yr({map:n,transparent:!0,depthWrite:!1}));return s.scale.set(6,1.2,1),s}let Hg=class{constructor(t,{getState:e,getProfile:n=()=>null,onState:s,onMessage:r}){this.canvas=t,this.getState=e,this.getProfile=n,this.onState=s,this.onMessage=r,this.keys=new Set,this.joystick={x:0,y:0},this.yaw=0,this.lastTime=0,this.lastSaveAt=0,this.lastHitAt=0,this.disposed=!1,this.scene=new Iu,this.scene.background=new Qt("#263e5c"),this.scene.fog=new Ao("#9fb8ca",.009),this.camera=new Qe(58,1,.1,300),this.camera.position.set(0,12,17);const a=window.matchMedia("(max-width: 700px)").matches||window.devicePixelRatio>2;this.renderer=new Bg({canvas:t,antialias:!a,alpha:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,a?1.15:1.6)),this.renderer.setSize(t.clientWidth||800,t.clientHeight||480,!1),this.renderer.outputColorSpace=Ge,this.renderer.toneMapping=mo,this.renderer.toneMappingExposure=1.18,this.renderer.shadowMap.enabled=!a,this.renderer.shadowMap.type=po,this.scene.add(new Ud("#e2efff","#243750",1.72));const o=new Od("#ffe6b0",2.5);o.position.set(-12,24,10),o.castShadow=!a,this.scene.add(o),this.makeSky(),this.cityRoot=new zt,this.cityRoot.name="Città Volante",this.scene.add(this.cityRoot),this.makeCity(),this.makeInteriors(),this.makeAvatar(),this.makeTargets(),this.makeDrone(),this.makeShuttles(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.bindInput(),this.syncState(),this.frame=this.frame.bind(this),this.raf=requestAnimationFrame(this.frame)}makeSky(){const t=document.createElement("canvas");t.width=4,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#111d38"),n.addColorStop(.48,"#496c8d"),n.addColorStop(.72,"#d3ac83"),n.addColorStop(1,"#b8cad3"),e.fillStyle=n,e.fillRect(0,0,4,256);const s=new Es(t);s.colorSpace=Ge;const r=new it(new Me(145,20,12),new cn({map:s,side:Ve,depthWrite:!1}));r.name="cielo-cinematografico",r.renderOrder=-10,this.scene.add(r);const a=new Ae,o=[];let l=711;const c=()=>(l=l*16807%2147483647,(l-1)/2147483646);for(let h=0;h<360;h++)o.push((c()-.5)*180,14+c()*65,(c()-.5)*180);a.setAttribute("position",new Yt(o,3)),this.scene.add(new Vu(a,new Bc({color:"#e7f4ff",size:.42,sizeAttenuation:!0})));const u=new jt({color:"#e3eef3",roughness:1,transparent:!0,opacity:.66,depthWrite:!1});this.clouds=[];for(let h=0;h<13;h++){const d=new zt,g=2.8+h%5*.32,M=new Me(1,8,6),m=new Oc(M,u,4);for(let p=0;p<4;p++){const S=new pe;S.compose(new I((p-1.5)*g*.6,p%2*.3,Math.sin(p*2)*g*.18),new Qn,new I(g*(.53+p*.055),g*(.53+p*.055),g*(.53+p*.055))),m.setMatrixAt(p,S)}m.instanceMatrix.needsUpdate=!0,d.add(m),d.position.set(h*37%100-50,-3.15+h%3*.42,h*23%92-46),d.userData.baseX=d.position.x,this.scene.add(d),this.clouds.push(d)}const f=["#54a7df","#d4a45a","#df725c","#9f9ad9"];Object.entries(ph).forEach(([h,d],g)=>{const M=Xn(this.scene,`pianeta-${h}`,d.x*.6-7,12+g*2,d.z*.6-48,3.2+g%2,f[g]);M.material.emissiveIntensity=.18;const m=new it(new re(4.8,.08,5,48),new cn({color:"#f0d37d",transparent:!0,opacity:.48}));m.position.copy(M.position),m.rotation.x=Math.PI/2.4,this.scene.add(m);const p=_a(h);p.position.set(M.position.x,M.position.y+5.4,M.position.z),this.scene.add(p)})}makeCity(){const t=new it(new ee(25,23,2.2,12),new jt({color:"#233d5a",metalness:.62,roughness:.43}));t.position.y=-1.15,this.cityRoot.add(t);const e=new it(new re(24.5,.22,5,48),new jt({color:"#e2b84c",metalness:.72,roughness:.3}));e.rotation.x=Math.PI/2,e.position.y=-.05,this.cityRoot.add(e);const n=new jt({color:"#49617b",roughness:.85}),s=new it(new be(2.2,.12,33),n);s.position.set(0,.03,1),this.cityRoot.add(s);const r=new it(new be(31,.12,2.2),n);r.position.set(0,.04,0),this.cityRoot.add(r);const a=new it(new ee(5.4,5.4,.22,16),new jt({color:"#d0b77d",roughness:.74}));a.position.set(0,.14,0),this.cityRoot.add(a);for(let c=0;c<4;c++){const u=new zt;u.position.set(Math.cos(c*Math.PI/2)*5.7,0,Math.sin(c*Math.PI/2)*5.7),this.cityRoot.add(u);const f=new it(new ee(.08,.12,2,6),new jt({color:"#e1c269",metalness:.5}));f.position.y=1,u.add(f),Xn(u,"lampada",0,2.12,0,.28,"#ffe488",.28)}ss(this.cityRoot,{name:"Palazzo imperiale",x:-7.5,z:-8,sx:7.2,sz:6.2,height:7.2,color:"#173b62",roof:"#e2b84c"}),ss(this.cityRoot,{name:"Hangar spaziale",x:9,z:-7.5,sx:8,sz:7,height:5.5,color:"#214766",roof:"#70a9d3"}),ss(this.cityRoot,{name:"Sala di comando",x:0,z:-14.5,sx:7.2,sz:5.4,height:6.4,color:"#142d50",roof:"#d6b252"}),ss(this.cityRoot,{name:"Quartiere dei Sudditi",x:7.6,z:5.5,sx:4.5,sz:4.7,height:5,color:"#487a87",roof:"#c3d484"}),ss(this.cityRoot,{name:"Quartiere dei Sudditi",x:14.2,z:5.5,sx:4.5,sz:4.7,height:4.3,color:"#506b93",roof:"#c3d484"});for(const c of[-1,1]){const u=new zt;u.position.set(c*17,1,1),this.cityRoot.add(u),he(u,"motore-centrale",0,0,0,4.5,3.3,5,"#536b85",{metalness:.58});for(let h=-1;h<=1;h++){const d=new it(new ee(.48,.72,2.6,10),new jt({color:"#2c73a5",emissive:"#148ce1",emissiveIntensity:1.1,metalness:.55}));d.rotation.x=Math.PI/2,d.position.set(h*1.1,-.05,c*-2.3),u.add(d)}const f=he(u,"nacelle-motore",0,2.2,0,5.8,.3,6.4,"#e2b84c",{metalness:.65});f.material.emissive=new Qt("#c28331"),f.material.emissiveIntensity=.35}for(let c=0;c<7;c++){const u=new zt;u.position.set(-13+c%4*2,0,9+Math.floor(c/4)*3),this.cityRoot.add(u);const f=new it(new ee(.13,.2,1.1,5),new jt({color:"#79533c"}));f.position.y=.55,u.add(f),Xn(u,"chioma",0,1.38,0,.75,c%2?"#55a77d":"#77b775")}for(const c of[-10.8,-4.2]){const u=new zt;u.position.set(c,0,-11.8),this.cityRoot.add(u);const f=new it(new ee(.45,.76,6.2,8),new jt({color:"#d2ad56",metalness:.62,roughness:.28}));f.position.y=3.1,u.add(f);const h=new it(new Le(.66,2.1,8),new jt({color:"#28557c",metalness:.45}));h.position.y=7.1,u.add(h),Xn(u,"luce-torre",0,5.2,0,.42,"#ffd86f",.25)}const o=new zt;o.position.set(0,0,-17.4),this.cityRoot.add(o);const l=new it(new ee(.12,.32,5.4,8),new jt({color:"#c49d47",metalness:.68}));l.position.y=7.1,o.add(l);for(const c of[6.2,7.3,8.3]){const u=new it(new re(.72+(c-6.2)*.16,.07,6,24),new jt({color:"#73cbf5",emissive:"#168ad3",emissiveIntensity:.72,metalness:.55}));u.position.y=c,o.add(u)}}makeInteriors(){this.interiorRooms=new Map;const t={palace:["#183454","#d6b45a"],hangar:["#1a344d","#75b9df"],command:["#101e39","#5fd8f2"],imperial:["#182a4a","#ebc45b"]};for(const[e,n]of[["palace","Atrio del Palazzo"],["hangar","Hangar Imperiale"],["command","Sala Comando"],["imperial","Area Imperiale Riservata"]]){const s=new zt;s.name=`interno-${e}`,s.visible=!1;const[r,a]=t[e],o=e==="imperial"?12:8,l=new it(new be(o*2,.3,16),new jt({color:"#17243a",metalness:.45,roughness:.5}));l.position.y=-.19,s.add(l);const c=new it(new be(e==="imperial"?14:8,.035,10),new jt({color:e==="imperial"?"#314d72":"#274362",roughness:.92}));c.position.set(0,-.01,-.2),s.add(c);for(const f of[-o,o])he(s,`${e}-parete-lato`,f,2.7,0,.32,5.4,15.8,r);he(s,`${e}-parete-fondo`,0,2.7,-7.8,o*2+.3,5.4,.32,r),he(s,`${e}-facciata-sx`,-o*.69,2.7,7.8,o*.62,5.4,.32,r),he(s,`${e}-facciata-dx`,o*.69,2.7,7.8,o*.62,5.4,.32,r),he(s,`${e}-ingresso-architrave`,0,5.28,7.8,4.8,.34,.32,a);for(const f of[-o+2,0,o-2]){const h=he(s,`${e}-pannello-luce`,f,3.4,-7.57,e==="imperial"?3.2:2.5,1.7,.05,e==="command"?"#1a98b6":"#4a80aa",{metalness:.52,roughness:.24});h.material.emissive.set(e==="command"?"#0c91b5":"#1c5f96"),h.material.emissiveIntensity=.7}const u=new os(e==="command"?"#65d9ff":"#ffdf8a",e==="imperial"?36:25,28);if(u.position.set(0,4.8,0),s.add(u),e==="palace"){for(const d of[-5.4,5.4]){const g=new it(new ee(.34,.48,4.8,8),new jt({color:a,metalness:.68,roughness:.27}));g.position.set(d,2.35,-.4),s.add(g)}he(s,"trono-imperiale",0,1.35,-4.8,2.1,2.6,1.35,"#8a6730",{metalness:.42});const f=he(s,"portale-esclusivo",0,2.65,-7.45,4.5,4.9,.24,"#21456a",{metalness:.55,roughness:.24});f.material.emissive.set("#174f83"),f.material.emissiveIntensity=.5;for(const d of[-2.45,2.45])he(s,"bordo-portale-esclusivo",d,2.65,-7.2,.2,5.1,.34,"#edc65b",{metalness:.7});const h=new it(new re(.65,.12,8,32),new jt({color:"#f0c558",emissive:"#9a6824",emissiveIntensity:.55,metalness:.63}));h.position.set(0,3.3,-7.16),s.add(h)}else if(e==="hangar"){for(const f of[-4.2,4.2]){const h=new zt;h.position.set(f,.5,-1.2),s.add(h);const d=new it(new Ke(.48,2.2,3,8),new jt({color:"#b9c7d2",metalness:.75,roughness:.24}));d.rotation.x=Math.PI/2,d.position.y=1.25,h.add(d),he(h,"ala-caccia",0,1.2,0,4.1,.16,1.1,"#35618a",{metalness:.6}).material.emissive.set("#0f3d62");for(const M of[-1,1]){const m=Xn(h,"ugello-blu",M*1.25,.45,-.8,.32,"#4bd3fa",.28);m.material.emissiveIntensity=.95}}he(s,"pista-hangar",0,.08,-1.2,2.1,.08,11,"#3980ac",{metalness:.42,roughness:.25})}else if(e==="command"){const f=new it(new ee(2.4,2.9,.42,20),new jt({color:"#243e5d",metalness:.72,roughness:.25}));f.position.set(0,1.35,-1.2),s.add(f);const h=new it(new Me(1.05,18,12),new cn({color:"#38c8ff",wireframe:!0,transparent:!0,opacity:.72}));h.position.set(0,3.2,-1.2),s.add(h);const d=new it(new re(1.5,.04,5,40),new cn({color:"#e9c75d"}));d.position.set(0,3.2,-1.2),d.rotation.x=.5,s.add(d);for(let g=0;g<5;g++){const M=he(s,`display-tattico-${g}`,-5+g*2.5,2.3,-7.48,1.65,1.45,.08,"#0d233d",{metalness:.55});M.material.emissive.set(g%2?"#0f9bbd":"#b38532"),M.material.emissiveIntensity=.42}}else{const f=new jt({color:a,metalness:.68,roughness:.27,emissive:"#4f3d17",emissiveIntensity:.25}),h=new it(new ee(2.25,2.4,.48,16),f);h.position.set(-6,.5,-3.3),s.add(h);for(let S=0;S<6;S++){const w=new it(new ee(.42,.48,.85,8),new jt({color:"#293d5e",metalness:.36})),_=S*Math.PI/3;w.position.set(-6+Math.cos(_)*3,.42,-3.3+Math.sin(_)*2.2),s.add(w)}const d=new zt;d.position.set(7,0,-4.8),s.add(d);const g=new it(new ee(.36,.58,3.2,10),new jt({color:"#83bce2",metalness:.78,roughness:.22}));g.rotation.z=Math.PI/3,g.position.y=2.2,d.add(g),he(s,"guardaroba-imperiale",7,1.5,3.2,2.7,3,1,"#302d39",{metalness:.46,roughness:.32}).material.emissive.set("#372c1b");const m=he(s,"specchio-guardaroba",7,2,2.65,1.35,2,.08,"#79a2bb",{metalness:.8,roughness:.14});m.material.emissive.set("#163b5c"),m.material.emissiveIntensity=.35;const p=he(s,"centro-autorizzazioni",-7,1.55,3.4,3,3.1,1.1,"#1a405e",{metalness:.54});p.material.emissive.set("#0a4770"),p.material.emissiveIntensity=.32;for(const S of[-8.3,-7,-5.7]){const w=he(s,"display-autorizzazioni",S,2.1,2.8,.7,.8,.08,"#4acdf0",{metalness:.5,roughness:.22});w.material.emissive.set("#168fb6"),w.material.emissiveIntensity=.6}}s.userData.label=n,this.scene.add(s),this.interiorRooms.set(e,s)}}makeShuttles(){this.shuttles=[];for(let t=0;t<3;t++){const e=new zt;e.name=`navetta-imperiale-${t+1}`;const n=new it(new Ke(.22,1.15,3,7),new jt({color:t===1?"#d6b455":"#d6e0e8",metalness:.8,roughness:.24}));n.rotation.x=Math.PI/2,e.add(n),he(e,"ali-navetta",0,-.05,0,2.4,.12,.62,"#294f73",{metalness:.6});for(const s of[-1,1]){const r=Xn(e,"propulsore",s*.58,-.05,-.62,.15,"#44d1f3",.2);r.material.emissiveIntensity=1.2}this.scene.add(e),this.shuttles.push(e)}}makeAvatar(){this.avatar=new zt,this.avatar.name="Avatar",this.cityRoot.add(this.avatar),this.avatarBodyMaterial=new jt({color:"#173b65",roughness:.4,metalness:.18}),this.avatarTrimMaterial=new jt({color:"#e5b84f",roughness:.28,metalness:.72});const t=new it(new Ke(.43,.66,4,9),this.avatarBodyMaterial);t.position.y=1.08,t.scale.set(.95,1.08,.72),this.avatar.add(t);for(const f of[-.27,.27]){const h=new it(new Me(.23,9,7),this.avatarTrimMaterial);h.scale.set(1,.48,.78),h.position.set(f,1.58,0),this.avatar.add(h);const d=new it(new Ke(.15,.48,3,7),new jt({color:"#101c2e",roughness:.72}));d.position.set(f*.55,.34,0),this.avatar.add(d);const g=new it(new be(.34,.18,.48),this.avatarTrimMaterial);g.position.set(f*.55,.12,.08),this.avatar.add(g)}for(const f of[-1,1]){const h=new it(new Ke(.13,.52,3,7),this.avatarBodyMaterial);h.position.set(f*.5,1.04,0),h.rotation.z=f*-.12,this.avatar.add(h)}const e=new it(new Me(.43,16,12),new jt({color:"#f0c49c",roughness:.84}));e.position.y=2.04,e.scale.set(.92,1.08,.82),this.avatar.add(e);const n=new it(new Me(.08,8,6),new jt({color:"#dfa878",roughness:.86}));n.position.set(0,1.97,.355),this.avatar.add(n),this.suneoFeatures=new zt,this.avatar.add(this.suneoFeatures);const s=new jt({color:"#795336",roughness:.78}),r=new it(new Me(.48,12,8,0,Math.PI*2,0,1),s);r.position.set(0,2.27,-.04),this.suneoFeatures.add(r);const a=new it(new Le(.35,.92,9),s);a.position.set(.03,2.77,.02),a.rotation.z=-.34,this.suneoFeatures.add(a);const o=new it(new Le(.19,.58,7),s);o.position.set(-.28,2.27,.14),o.rotation.z=-.7,this.suneoFeatures.add(o);for(const f of[-.15,.15]){const h=new it(new Me(.05,8,6),new cn({color:"#1b1d22"}));h.position.set(f,2.07,.35),this.avatar.add(h)}const l=new it(new re(.095,.025,5,12,Math.PI),new cn({color:"#7b3936"}));l.position.set(.03,1.83,.33),l.rotation.z=Math.PI,this.avatar.add(l),this.suneoFeatures.visible=!1,this.genericHead=new it(new Me(.43,12,10),new jt({color:"#f0c49c",roughness:.84})),this.genericHead.position.y=2.04,this.avatar.add(this.genericHead),this.genericHair=new it(new Me(.46,10,7),new jt({color:"#253247",roughness:.88})),this.genericHair.position.set(0,2.32,-.02),this.avatar.add(this.genericHair),this.crown=new zt,this.crown.name="Corona indipendente",this.avatar.add(this.crown);const c=new it(new ee(.34,.39,.18,10),this.avatarTrimMaterial);c.position.y=2.58,this.crown.add(c);for(let f=0;f<5;f++){const h=new it(new Le(.09,.3,5),this.avatarTrimMaterial);h.position.set((f-2)*.14,2.78,.02),this.crown.add(h)}const u=new it(new be(.22,.24,.05),this.avatarTrimMaterial);u.position.set(.2,1.4,.3),this.avatar.add(u),this.avatarLabel=_a("Esploratore"),this.avatarLabel.scale.set(3.7,.75,1),this.avatarLabel.position.set(0,3.1,0),this.avatar.add(this.avatarLabel)}makeTargets(){this.targets=new Map;for(const t of gs){const e=new zt;if(e.name=t.id,e.position.set(t.x,0,t.z),e.userData.target=t,this.cityRoot.add(e),t.kind==="core"){const s=new it(new Cr(.62,0),new jt({color:"#52def1",emissive:"#31c7e8",emissiveIntensity:.95,metalness:.38,roughness:.22}));s.position.y=1.1,e.add(s);const r=new it(new re(.95,.07,5,20),new cn({color:"#fff1a5",transparent:!0,opacity:.8}));r.rotation.x=Math.PI/2,r.position.y=1.08,e.add(r)}else if(t.kind==="door"){he(e,"stipite-porta",0,.95,0,1.75,2.2,.3,"#a98a45",{metalness:.45});const s=he(e,"anta-porta",0,.95,-.2,1.35,1.9,.16,"#2e5477",{metalness:.32});e.userData.doorPanel=s,e.userData.open=!1,Xn(e,"pulsante-porta",.48,.98,-.31,.12,"#ffe082",.24)}else if(t.kind==="npc"){const s=new it(new Ke(.43,.35,2,6),new jt({color:"#477ea8",metalness:.38}));s.position.y=.68,e.add(s),Xn(e,"testa-robot",0,1.52,0,.43,"#d7e7f1",.34),he(e,"visore-robot",0,1.54,.38,.48,.15,.12,"#52d8f3",{roughness:.22});for(const r of[-.48,.48]){const a=new it(new ee(.035,.05,.55,5),new jt({color:"#d9be64"}));a.position.set(r,1.85,0),e.add(a)}}else{const s=new it(new ee(.13,.18,1.35,6),new jt({color:"#8faac1",metalness:.45}));s.position.y=.68,e.add(s);const r=he(e,"schermo-console",0,1.38,0,1.05,.56,.22,t.kind==="door"?"#ebbd5a":"#58d2ec",{metalness:.36,roughness:.25});r.material.emissive=r.material.color,r.material.emissiveIntensity=.55}e.visible=t.kind!=="core";const n=_a(t.label);n.position.set(0,2.6,0),n.scale.set(4.6,.88,1),e.add(n),this.targets.set(t.id,e)}}makeDrone(){this.drone=new zt,this.drone.position.set(0,1.4,0),this.cityRoot.add(this.drone);const t=new it(new Me(.6,8,6),new jt({color:"#7d4b39",emissive:"#ec5738",emissiveIntensity:.44,metalness:.4}));this.drone.add(t);for(const e of[-1,1]){const n=he(this.drone,"ala-drone",e*.68,0,0,.85,.08,.26,"#d08a4f");n.rotation.z=e*-.12}this.drone.visible=!1}bindInput(){this.onKeyDown=t=>{t.target instanceof HTMLElement&&["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d","W","A","S","D"," "].includes(t.key)&&this.isVisible()&&t.preventDefault(),this.keys.add(t.key.toLowerCase()),t.key.toLowerCase()==="e"&&this.onInteract?.())},this.onKeyUp=t=>this.keys.delete(t.key.toLowerCase()),this.onBlur=()=>this.keys.clear(),this.onPointerDown=t=>{t.target===this.canvas&&(this.dragging=!0,this.dragX=t.clientX,this.canvas.setPointerCapture?.(t.pointerId))},this.onPointerMove=t=>{if(!this.dragging)return;const e=t.clientX-this.dragX;this.dragX=t.clientX,this.yaw-=e*.006},this.onPointerUp=()=>{this.dragging=!1},window.addEventListener("keydown",this.onKeyDown,{passive:!1}),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),this.canvas.addEventListener("pointerdown",this.onPointerDown),this.canvas.addEventListener("pointermove",this.onPointerMove),this.canvas.addEventListener("pointerup",this.onPointerUp),this.canvas.addEventListener("pointercancel",this.onPointerUp)}isVisible(){return this.canvas.isConnected&&this.canvas.getBoundingClientRect().height>0}setJoystick(t,e){this.joystick.x=Math.max(-1,Math.min(1,t)),this.joystick.y=Math.max(-1,Math.min(1,e))}onInteract=null;syncState(){const t=this.getState(),e=this.getProfile(),n=e?.role==="emperor"&&!!e?.user_id,s=xa,r=s[t.avatar.outfit]||s.classico;this.avatarBodyMaterial.color.set(n?r.jacket:t.avatar.color),this.avatarTrimMaterial.color.set(n?r.trim:"#bdcbd9"),this.suneoFeatures.visible=n,this.genericHead.visible=!n,this.genericHair.visible=!n,this.crown.visible=n&&t.avatar.crown,this.avatarLabel.material.map?.dispose?.(),this.avatarLabel.material.map=this.makeNameTexture(n?"Suneo · Imperatore":t.avatar.name),this.avatarLabel.material.needsUpdate=!0,this.cityRoot.visible=!t.interior;for(const[l,c]of this.interiorRooms)c.visible=l===t.interior;const a=t.interior?this.interiorRooms.get(t.interior):this.cityRoot;this.avatar.parent!==a&&a.attach(this.avatar),this.cityRoot.position.set(t.position.x*.12,0,t.position.z*.12),this.avatar.position.set(t.avatar.x,0,t.avatar.z);const o=t.mission;for(const l of gs){const c=this.targets.get(l.id),u=o?.status==="active"&&(o.id==="signal_recovery"?l.kind==="core"||l.id==="console-piazza":["motore-ovest","motore-est","navigazione","console-comando"].includes(l.id)),f=o?.completedTargets?.includes(l.id);c.visible=l.kind==="door"||l.kind==="npc"||!!u&&!f,l.kind==="door"&&(c.userData.open=t.openDoors.includes(l.id),c.userData.doorOpen=c.userData.open,c.userData.doorTarget=c.userData.open?-Math.PI/2:0)}this.drone.visible=o?.status==="active"}makeNameTexture(t){const e=document.createElement("canvas");e.width=320,e.height=64;const n=e.getContext("2d");return n.fillStyle="rgba(5,17,35,.88)",n.fillRect(0,0,320,64),n.strokeStyle="#e5b84f",n.lineWidth=3,n.strokeRect(2,2,316,60),n.font="bold 24px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#fff1bd",n.fillText(t,160,32,300),new Es(e)}nearestTarget(){const t=this.getState();let e=null,n=3.15;if(t.interior){const s=t.interior==="palace"?[{id:"exit-palace",label:"Uscita del Palazzo",kind:"exit",x:0,z:6.3},{id:"portale-imperiale",label:"Portale dell’Area Imperiale Riservata",kind:"reserved-door",x:0,z:-6.25}]:t.interior==="imperial"?[{id:"exit-imperial",label:"Rientro nel Palazzo",kind:"exit",x:0,z:6.3},{id:"osservatorio",label:"Osservatorio Imperiale",kind:"console",x:7,z:-2.8},{id:"guardaroba",label:"Guardaroba degli Appartamenti Imperiali",kind:"wardrobe",x:7,z:2.5},{id:"centro-autorizzazioni",label:"Centro Autorizzazioni",kind:"authorization",x:-7,z:2.7}]:[{id:`exit-${t.interior}`,label:"Uscita",kind:"exit",x:0,z:6.3},{id:`console-${t.interior}`,label:t.interior==="hangar"?"Console manutenzione hangar":"Tavolo olografico di comando",kind:"console",x:0,z:-2.7}];for(const r of s){const a=Math.hypot(t.avatar.x-r.x,t.avatar.z-r.z);a<n&&(n=a,e={...r,distance:a})}return e}for(const s of gs){if(!this.targets.get(s.id)?.visible)continue;const a=Math.hypot(t.avatar.x-s.x,t.avatar.z-s.z);a<n&&(n=a,e={...s,distance:a})}return e}toggleDoor(t){const e=this.targets.get(t);if(!e||e.userData.doorPanel===void 0)return null;const n=mh(this.getState(),t);return n.ok?(e.userData.open=n.open,e.userData.doorOpen=e.userData.open,e.userData.doorTarget=e.userData.open?-Math.PI/2:0,e.userData.open):null}update(t,e){if(!this.isVisible())return;const n=this.getState(),s=(this.keys.has("d")||this.keys.has("arrowright")?1:0)-(this.keys.has("a")||this.keys.has("arrowleft")?1:0),r=(this.keys.has("s")||this.keys.has("arrowdown")?1:0)-(this.keys.has("w")||this.keys.has("arrowup")?1:0);let a=s+this.joystick.x,o=r+this.joystick.y;const l=Math.hypot(a,o);if(l>.08){a/=Math.max(1,l),o/=Math.max(1,l);const M=Math.cos(this.yaw),m=Math.sin(this.yaw),p=a*M-o*m,S=a*m+o*M;if(gh(n,p,S,t).moved)this.avatar.rotation.y=Math.atan2(p,S);else if(n.mission?.status==="active"&&e-this.lastHitAt>1300){this.lastHitAt=e;const _=Ko(n);_.message&&this.onMessage(_.message)}}if(this.drone.visible&&!n.interior&&(this.drone.position.set(Math.sin(e*45e-5)*4.1,1.4+Math.sin(e*.002)*.32,Math.cos(e*45e-5)*3.7),this.drone.rotation.y=e*7e-4,Math.hypot(n.avatar.x-this.drone.position.x,n.avatar.z-this.drone.position.z)<zg+.45&&e-this.lastHitAt>1600)){this.lastHitAt=e;const m=Ko(n);this.onMessage(m.message||"Urto con drone di sicurezza.")}const c=_h(n,t);c.arrived&&this.onMessage(`La Città Volante è arrivata a ${c.destination}.`),this.cityRoot.position.x=n.position.x*.12,this.cityRoot.position.z=n.position.z*.12,this.avatar.position.x=n.avatar.x,this.avatar.position.z=n.avatar.z;for(const M of this.targets.values()){const m=M.children[0];m?.geometry?.type==="OctahedronGeometry"&&(m.rotation.y+=t*1.1,m.position.y=1.1+Math.sin(e*.002+M.position.x)*.14)}const u=this.yaw,f=n.interior?6.2:8.8,h=n.interior?4.8:6.2,d=new I(Math.sin(u)*f,h,Math.cos(u)*f),g=this.avatar.getWorldPosition(new I).add(d);this.camera.position.lerp(g,Math.min(1,t*(n.interior?5:4.5))),this.camera.lookAt(this.avatar.getWorldPosition(new I).add(new I(0,1.25,0))),n.navigation?this.cityRoot.rotation.y=Math.sin(e*8e-4)*.035:this.cityRoot.rotation.y=0,this.clouds.forEach((M,m)=>{M.position.x=M.userData.baseX+Math.sin(e*25e-6+m)*.65,M.position.y=-3.15+Math.sin(e*4e-4+m)*.08}),this.shuttles.forEach((M,m)=>{const p=e*19e-5+m*Math.PI*2/this.shuttles.length;M.position.set(Math.cos(p)*(29+m*2),4+Math.sin(p*2)*1.5,Math.sin(p)*(24+m*1.7)),M.rotation.y=-p,M.rotation.z=Math.sin(p*2)*.045});for(const M of this.targets.values()){const m=M.userData.doorPanel;m&&M.userData.doorTarget!==void 0&&(m.rotation.y+=(M.userData.doorTarget-m.rotation.y)*Math.min(1,t*5),m.position.x+=((M.userData.doorOpen?.66:0)-m.position.x)*Math.min(1,t*5))}e-this.lastSaveAt>700&&(this.lastSaveAt=e,this.onState(!1))}frame(t){if(this.disposed)return;const e=this.lastTime?Math.min((t-this.lastTime)/1e3,.05):0;this.lastTime=t,this.update(e,t),this.renderer.render(this.scene,this.camera),this.raf=requestAnimationFrame(this.frame)}resize(){!this.renderer||!this.canvas.clientWidth||!this.canvas.clientHeight||(this.camera.aspect=this.canvas.clientWidth/this.canvas.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight,!1))}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.resizeObserver?.disconnect(),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("pointercancel",this.onPointerUp),this.scene.traverse(t=>{t.geometry?.dispose?.(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material?.dispose?.()}),this.renderer.dispose()}};const Gg=""+new URL("imperial-facade-v1-JSCJH-Xn.webp",import.meta.url).href,or="#d6ad58",kg="#f7d888",Vg="#0c2340";let uo=null,lr=null;function Zg(){return lr||(lr=new Promise((i,t)=>{new Dd().load(Gg,e=>{e.colorSpace=Ge,e.wrapS=vs,e.wrapT=vs,e.repeat.set(1.4,1.8),uo=e,i(e)},void 0,()=>t(new Error("Non è stato possibile caricare la texture locale della facciata imperiale.")))}).catch(i=>{throw lr=null,uo=null,i})),lr}function Ft(i,t=.6,e=.25,n={}){return new jt({color:i,roughness:t,metalness:e,...n})}function Mt(i,t,e,n=0,s=0,r=0,a=""){const o=new it(t,e);return o.position.set(n,s,r),o.name=a,o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function $t(i,t,e,n,s,r,a,o,l){return Mt(i,new be(r,a,o),l,e,n,s,t)}function Ze(i,t,e,n,s,r,a,o=16,l=12){return Mt(i,new Me(r,o,l),a,e,n,s,t)}function Bi(i,t,e,n,s,r,a,o=14){const l=new Rr(r.map(c=>new at(c[0],c[1])),o);return Mt(i,l,a,e,n,s,t)}function Zn(i,t){const e=i*.5,n=new $n;return n.moveTo(-i/2,0),n.lineTo(-i/2,t-e),n.quadraticCurveTo(-i/2,t,0,t),n.quadraticCurveTo(i/2,t,i/2,t-e),n.lineTo(i/2,0),n.closePath(),n}function Wg(i,t,e){const n=new $n;return n.moveTo(-i/2+e,0),n.lineTo(i/2-e,0),n.lineTo(i/2,e),n.lineTo(i/2,t-e),n.lineTo(i/2-e,t),n.lineTo(-i/2+e,t),n.lineTo(-i/2,t-e),n.lineTo(-i/2,e),n.closePath(),n}function ai(i,t,e,n,s,r,a,o,l,c){const u=new Ye(Wg(r,a,l),{depth:o,bevelEnabled:!0,bevelSegments:2,bevelSize:.1,bevelThickness:.08,curveSegments:2});return Mt(i,u,c,e,n,s,t)}function qn(i,t,e,n,s,r,a,o,l){const c=Mt(i,new Ye(Zn(s,r),{depth:a,bevelEnabled:!0,bevelSegments:1,bevelSize:.055,bevelThickness:.055,curveSegments:8}),o,t,e,n,"finestra-arco");c.castShadow=!0;const u=s*.76,f=Mt(i,new Ye(Zn(u,r*.84),{depth:.035,bevelEnabled:!1,curveSegments:8}),l,t,e+.04,n+a+.065,"vetro-arco");return f.material.side=nn,{frame:c,glass:f}}function va(i,t,e,n,s,r,a="colonna"){const o=new zt;o.position.set(t,0,e),o.name=a,i.add(o);const l=new it(new ee(s*.74,s,n*.78,16,1),r.stone);l.position.y=n*.46,l.castShadow=!0,o.add(l);const c=[[s*1.25,0],[s*1.35,.12],[s*.94,.26],[s*.92,.38],[s*1.35,.5],[s*1.5,.58]];Bi(o,a+"-capitello",0,n*.78-.18,0,c,r.gold,16);const u=new it(new ee(s*1.55,s*1.68,.34,12),r.gold);return u.position.y=.17,o.add(u),o}function Xg(i,t,e,n,s,r,a,o,l){const c=new zt;c.position.set(t,0,e),c.name=l,i.add(c);for(let u=0;u<a;u++){const f=s/a,h=new it(new be(n-u*.3,r,f+.035),o);h.position.set(0,r*(u+.5),-s/2+f*(u+.5)),h.receiveShadow=!0,c.add(h)}return c}function Fi(i,t,e,n,s,r,a,o,l=96){const c=new Lo(r,a,l,1);return c.rotateX(-Math.PI/2),Mt(i,c,o,e,n,s,t)}function hc(i,t,e,n,s,r){const a=[[-e*.5,0,s],[-e*.48,n*.2,s],[-e*.37,n*.53,s],[-e*.22,n*.82,s],[0,n,s],[e*.22,n*.82,s],[e*.37,n*.53,s],[e*.48,n*.2,s],[e*.5,0,s]].map(([g,M,m])=>new I(g,M,m)),o=new pr(a,!1,"catmullrom",.12),l=new zt;l.name=t,i.add(l);const c=new it(new ms(o,112,1.22,14,!1),r.navy);c.name=`${t}-nervatura-blu`,c.castShadow=!0,c.receiveShadow=!0,l.add(c);const u=new pr(a.map(g=>new I(g.x,g.y,g.z+.68)),!1,"catmullrom",.12),f=new it(new ms(u,112,.17,8,!1),r.gold);f.name=`${t}-nervatura-oro`,f.castShadow=!0,l.add(f);const h=new pr(a.map(g=>new I(g.x,g.y-.48,g.z+.08)),!1,"catmullrom",.12),d=new it(new ms(h,112,.075,7,!1),r.light);d.name=`${t}-filo-ciano`,l.add(d);for(const g of[-1,1]){const M=$t(l,`${t}-basamento`,g*(e*.5-.8),.45,s,2.6,.9,2.2,r.gold);M.castShadow=!0}return l}class Jg extends Hg{constructor(t,e){if(super(t,e),this.rendererId=Qo,this.rendererVersion=vh,this.artAssetsReady=!!(this.facadeTexture?.image?.complete&&this.facadeTexture.image.naturalWidth>0),!this.artAssetsReady)throw new Error("La texture locale della facciata imperiale non è pronta. Tocca Riprova.");const n=xh(this);this.acropolisDiagnostics=n;const s=t.clientHeight>t.clientWidth;this.camera.fov=s?56:49,this.camera.far=340,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,s?1.05:1.35)),this.renderer.shadowMap.enabled=!window.matchMedia("(max-width: 700px)").matches,this.renderer.shadowMap.type=po,this.cameraMode="overview",this.acropolisCameraTarget=new I(-7.5,25,-12),this.setOverviewCamera()}setOverviewCamera(){const t=new jn().setFromObject(this.acropolis);if(t.isEmpty())throw new Error("Il Palazzo Imperiale non ha geometria visibile.");const e=t.getSize(new I),n=t.getCenter(new I);this.acropolisCameraTarget.set(n.x,Math.max(18,t.min.y+e.y*.4),n.z+4.5);const s=Math.max(.35,this.canvas.clientWidth/Math.max(1,this.canvas.clientHeight)),r=vu.degToRad(this.camera.fov*.5),a=Math.atan(Math.tan(r)*s),o=e.x/(2*Math.tan(a)),l=e.y/(2*Math.tan(r)),c=Math.max(o,l,48)*1.16;this.acropolisCameraPosition=new I(this.acropolisCameraTarget.x+c*.1,this.acropolisCameraTarget.y+c*.16,this.acropolisCameraTarget.z+c),this.camera.position.copy(this.acropolisCameraPosition),this.camera.lookAt(this.acropolisCameraTarget)}toggleCameraMode(){return this.cameraMode=this.cameraMode==="overview"?"follow":"overview",this.cameraMode==="overview"&&this.setOverviewCamera(),this.cameraMode}setJoystick(t,e){Math.hypot(t,e)>.08&&(this.cameraMode="follow"),super.setJoystick(t,e)}update(t,e){this.keys?.size&&[...this.keys].some(n=>["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(n))&&(this.cameraMode="follow"),super.update(t,e),this.cameraMode==="overview"&&!this.getState().interior&&(this.camera.position.copy(this.acropolisCameraPosition),this.camera.lookAt(this.acropolisCameraTarget))}resize(){super.resize(),this.cameraMode==="overview"&&this.acropolis&&this.setOverviewCamera()}makeSky(){const t=document.createElement("canvas");t.width=8,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,512);n.addColorStop(0,"#162745"),n.addColorStop(.36,"#4c7196"),n.addColorStop(.64,"#d99e77"),n.addColorStop(.84,"#f2c899"),n.addColorStop(1,"#d2e0e3"),e.fillStyle=n,e.fillRect(0,0,8,512);const s=new Es(t);s.colorSpace=Ge;const r=Mt(this.scene,new Me(250,32,24),new cn({map:s,side:Ve,depthWrite:!1}),0,0,0,"atmosfera-sopra-nuvole");r.renderOrder=-10;const a=document.createElement("canvas");a.width=256,a.height=256;const o=a.getContext("2d"),l=o.createRadialGradient(128,128,5,128,128,126);l.addColorStop(0,"rgba(255,236,188,0.92)"),l.addColorStop(.12,"rgba(255,214,153,0.48)"),l.addColorStop(.42,"rgba(255,189,134,0.14)"),l.addColorStop(1,"rgba(255,189,134,0)"),o.fillStyle=l,o.fillRect(0,0,256,256);const c=new Es(a),u=new ro(new yr({map:c,transparent:!0,depthWrite:!1}));u.position.set(62,44,-110),u.scale.set(74,74,1),this.scene.add(u);const f=new jt({color:"#fff4e6",roughness:1,transparent:!0,opacity:.76,depthWrite:!1});this.clouds=[];let h=54239;const d=()=>(h=h*16807%2147483647,(h-1)/2147483646);for(let g=0;g<24;g++){const M=new zt;M.name="nuvola-volumetrica-"+g;const m=new Me(1,12,8),p=new Oc(m,f,7);for(let S=0;S<7;S++){const w=4.8+d()*4.6,_=new pe,E=new I((S-3)*(3.2+d()*.7),d()*1.6,(d()-.5)*6),b=new I(w*1.32,w*.48,w*.72);_.compose(E,new Qn,b),p.setMatrixAt(S,_)}p.instanceMatrix.needsUpdate=!0,M.add(p),M.position.set((d()-.5)*230,-8-d()*7,(d()-.5)*210),M.userData.baseX=M.position.x,M.userData.baseZ=M.position.z,this.scene.add(M),this.clouds.push(M)}}makeCity(){const t=uo;if(!t)throw new Error("Texture architettonica non preparata: avvio Acropoli interrotto.");t.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),this.facadeTexture=t;const e={stone:Ft("#d7cfc1",.65,.12),pale:Ft("#f0e3c9",.48,.2),navy:Ft("#102a48",.34,.56,{map:t}),blue:Ft("#183d61",.3,.62),gold:Ft(or,.27,.76),light:Ft("#b5e1f3",.2,.24,{emissive:"#2c779d",emissiveIntensity:.54,transparent:!0,opacity:.9}),darkGlass:Ft("#08213c",.12,.55,{emissive:"#1b5b83",emissiveIntensity:.42}),paving:Ft("#b6b1a4",.73,.1),pavementDark:Ft("#50657a",.78,.14),green:Ft("#315b4d",.89,.04),leaf:Ft("#477c66",.82,.02),water:Ft("#68d6ed",.2,.32,{emissive:"#1ca9c7",emissiveIntensity:.52}),white:Ft("#f6e5c2",.42,.1)},n=new it(new ee(66,61,4.2,96,1,!1),Ft("#253e57",.46,.62));n.position.y=-3.35,n.receiveShadow=!0,this.cityRoot.add(n),Fi(this.cityRoot,"anello-strutturale-luce",0,-1.28,0,62,66,e.gold,112),Fi(this.cityRoot,"bordo-energia-ciano",0,-1.5,0,63.8,65.1,e.light,112);for(let R=0;R<4;R++)Fi(this.cityRoot,"fascia-circolare-citta-"+R,0,-1.12-R*.38,0,45+R*3.8,45.9+R*3.8,R%2?e.blue:e.gold,112);const s=new it(new ee(47,54,3.1,64,1,!1),Ft("#243d59",.42,.7));s.position.y=-5.5,this.cityRoot.add(s);for(let R=0;R<28;R++){const D=R/28*Math.PI*2,C=new it(new ee(.28,.82,7.6,8),e.gold);C.position.set(Math.cos(D)*42,-5,Math.sin(D)*42),C.rotation.z=Math.cos(D)*.16,C.rotation.x=Math.sin(D)*.16,this.cityRoot.add(C)}const r=new it(new ee(17,17,.65,96),e.pale);r.position.set(0,.02,6),this.cityRoot.add(r),Fi(this.cityRoot,"pavimentazione-anello-interno",0,.37,6,10.2,11.8,e.gold,96),Fi(this.cityRoot,"pavimentazione-anello-esterno",0,.37,6,15.6,16.6,e.pavementDark,96);for(let R=0;R<48;R++){const D=R*Math.PI*2/48,C=new it(new be(.16,.025,15),R%4===0?e.gold:e.paving);C.position.set(Math.cos(D)*13.9,.365,6+Math.sin(D)*13.9),C.rotation.y=-D,this.cityRoot.add(C)}$t(this.cityRoot,"viale-imperiale",-3.75,.34,-10,4.2,.08,27,e.pale),$t(this.cityRoot,"bordo-viale-oro-sinistro",-5.85,.4,-10,.13,.08,27,e.gold),$t(this.cityRoot,"bordo-viale-oro-destro",-1.65,.4,-10,.13,.08,27,e.gold);const a=new zt;a.position.set(0,.42,6),this.cityRoot.add(a);const o=new it(new ee(3.6,4.1,.56,48,1,!1),e.pale);o.position.y=.22,a.add(o);const l=new it(new re(3.6,.16,12,64),e.gold);l.rotation.x=Math.PI/2,l.position.y=.5,a.add(l);const c=new it(new ds(3.35,48),e.water);c.rotation.x=-Math.PI/2,c.position.y=.52,a.add(c),Bi(a,"fontana-colonna-scolpita",0,.54,0,[[1.2,0],[1.12,.16],[.68,.3],[.54,.5],[.48,1.45],[.76,1.66],[.74,1.82],[.36,2.1],[.27,2.48]],e.pale,36);const u=new it(new Le(.1,3.2,14),e.water);u.position.y=3.72,a.add(u);const f=new zt;f.position.y=4.25,a.add(f),Ze(f,"nucleo-fontana",0,.1,0,.26,e.light);for(let R=0;R<7;R++){const D=R*Math.PI*2/7,C=new it(new Le(.11,1.2,8),e.water);C.position.set(Math.cos(D)*.42,.1,Math.sin(D)*.42),C.rotation.z=-Math.cos(D)*.42,C.rotation.x=Math.sin(D)*.42,f.add(C)}const h=new os("#59d9ef",9,17);h.position.set(0,2.5,6),this.cityRoot.add(h);const d=new zt;d.name="Palazzo Imperiale monumentale",d.position.set(-7.5,0,-15.5),d.userData.rendererId=Qo,this.acropolis=d,this.cityRoot.add(d);const g=10.8;ai(d,"basamento-ottagonale",0,-.15,-11.2,25.4,2.1,22,2.4,e.navy),ai(d,"ala-inferiore-sagomata",0,1.4,-6,23.8,7.4,16.8,2.1,e.pale),ai(d,"corpo-centrale-sagomato",0,8.7,-3.1,17.6,7.3,13.9,1.8,e.navy),ai(d,"corpo-superiore-sagomato",0,15.7,.2,10.2,6,10.6,1.45,e.blue);const M=new zt;M.name="terrazza-panoramica-imperiale",d.add(M);for(const[R,D,C,F]of[[9.1,26.4,19.2,-3.5],[16.05,20.2,16.4,-2.3],[22,12.1,11.8,-.5]]){ai(M,"terrazza-livello",0,R,F,D,.42,C,.8,e.pale);const H=new it(new be(D+.16,.12,.18),e.gold);H.position.set(0,R+.25,F+C*.5-.22),M.add(H);const W=new it(new be(D*.82,.045,.07),e.light);W.position.set(0,R+.1,F+C*.5-.12),M.add(W)}const m=new $n;m.moveTo(-7.1,0),m.lineTo(-6.55,.62),m.lineTo(-4.5,1.08),m.lineTo(0,6.35),m.lineTo(4.5,1.08),m.lineTo(6.55,.62),m.lineTo(7.1,0),m.closePath(),Mt(d,new Ye(m,{depth:.72,bevelEnabled:!0,bevelSegments:2,bevelSize:.07,bevelThickness:.07}),e.pale,0,21.92,g+.1,"frontone-imperiale-scolpito");const p=Mt(d,new re(.74,.1,9,32),e.gold,0,26.08,g+.92,"medaglione-corona-facciata");p.rotation.y=0,Ze(d,"gemma-frontone",0,26.08,g+.92,.22,e.light,16,12);for(const[R,D,C]of[[1.55,25.8,17.2],[8.85,24.3,17],[15.95,18.2,14],[21.8,11,10.7]]){const F=new it(new be(D,.38,C),e.gold);F.position.set(0,R,-1.2),d.add(F);const H=new it(new be(D*1.01,.13,C*1.02),e.navy);H.position.set(0,R-.34,-1.2),d.add(H)}for(const R of[-1,1]){new it(new be(5.6,9.3,18),e.blue),ai(d,"loggia-laterale",R*10.2,.95,1.8,5.6,9.3,18,1.05,e.blue);for(let D=0;D<3;D++)for(let C=0;C<2;C++)qn(d,R*(8+C*2.25),2+D*2.35,g-.12,1.18,2.05,.13,e.gold,e.darkGlass)}for(let R=0;R<3;R++){const D=2.05+R*2.35;for(let C=0;C<9;C++){const F=-9.1+C*2.275;if(R===0&&C>=3&&C<=5)continue;const H=R===2?1.52:1.7;qn(d,F,D,g+.06,H,R===2?2.45:2.1,.16,e.gold,e.darkGlass),$t(d,"davanzale-finestra",F,D+.05,g+.31,H+.28,.12,.3,e.gold)}}const S=new zt;S.position.set(0,0,g+.15),d.add(S),$t(S,"portale-basamento",0,.6,.22,7.6,.85,1.1,e.gold);for(const R of[-3.55,-2.35,2.35,3.55])va(S,R,.3,7.2,.48,e,"colonna-portico");const w=Mt(S,new Ye(Zn(6.2,7.7),{depth:.72,bevelEnabled:!0,bevelSegments:2,bevelSize:.09,bevelThickness:.08,curveSegments:16}),e.gold,0,.65,.42,"arco-monumentale");w.castShadow=!0;const _=Mt(S,new Ye(Zn(4.8,6.45),{depth:.1,bevelEnabled:!1,curveSegments:16}),e.darkGlass,0,.78,1.12,"portale-luce");_.material.side=nn;const E=new zt;E.position.set(0,8.8,.92),S.add(E);const b=new it(new re(.86,.12,10,40),e.gold);b.position.y=.45,E.add(b);const L=Ze(E,"gemma-imperiale",0,.45,0,.31,e.light);L.material.emissiveIntensity=1.1;for(let R=0;R<5;R++){const D=new it(new Le(.12,.75,8),e.gold);D.position.set((R-2)*.42,1.15-Math.abs(R-2)*.1,0),E.add(D)}[-10.4,-5.2,0,5.2,10.4].forEach((R,D)=>{const C=D===2?31:D===0||D===4?23.2:26.2,F=8.6,H=new it(new ee(2.2,3.2,3.3,12),e.pale);H.position.set(R,21.6,F),d.add(H),Bi(d,D===2?"torre-campanile-principale":"torre-campanile-secondaria",R,23.15,F,[[1.7,0],[1.48,1.6],[1.06,2.5],[.96,7.2],[1.42,7.6],[1.28,8.2],[.74,9.4],[.55,12]],e.blue,16);for(let $=0;$<4;$++){const Q=27+$*2.25;qn(d,R,Q,F+1.3,.85,1.7,.16,e.gold,e.light)}const W=new it(new Le(1.55,C-14,16),e.gold);W.position.set(R,31+(C-14)/2,F),d.add(W);const K=new it(new Le(.32,5.8,10),e.blue);K.position.set(R,C+30,F),d.add(K);const q=new os("#6bd8f1",2.6,10);q.position.set(R,C+30,F),d.add(q)}),hc(d,"arco-strutturale-orbitale-esterno",60,62,-10.4,e),hc(d,"arco-strutturale-orbitale-interno",48,55.5,-7.4,e);const T=new zt;T.name="giardino-pensile-imperiale",d.add(T);for(const R of[-1,1]){const D=new it(new be(7.2,.32,2.25),e.green);D.position.set(R*8.6,9.55,6.3),T.add(D);const C=new it(new be(7.45,.34,2.46),e.gold);C.position.copy(D.position),C.position.y-=.09,C.position.z-=.08,T.add(C);for(let F=0;F<5;F++){const H=new it(new Er(.55+F%2*.12,1),e.leaf);H.position.set(R*8.6-2.7+F*1.35,10.15+F%2*.08,6.25),H.scale.set(1.12,.86,.78),T.add(H)}}for(const R of[-1,1]){ai(d,"padiglione-laterale-sagomato",R*16.6,.2,-10,8.7,11.2,12.8,1.45,e.pale);const D=new it(new Me(4.15,24,14,0,Math.PI*2,0,Math.PI/2),e.blue);D.position.set(R*16.6,11.35,-3.6),D.scale.set(1.13,1.06,.92),d.add(D);const C=new it(new re(4.25,.16,8,48),e.gold);C.rotation.x=Math.PI/2,C.position.set(R*16.6,11.43,-3.6),d.add(C);for(let F=0;F<3;F++)qn(d,R*(13.6+F*2.35),2.1,2.08,1.35,3.4,.14,e.gold,e.darkGlass)}for(let R=0;R<5;R++){const D=new it(new be(23-R*2.6,.08,.09),e.gold);D.position.set(0,2.05+R*1.25,g+.45),d.add(D)}const P=new os("#ffdf9e",18,40);P.position.set(-7.5,8,-3.4),this.cityRoot.add(P),Xg(this.cityRoot,-7.5,-.7,10.6,8.8,.3,11,e.pale,"scalinata-imperiale"),S.name="portale-imperiale-principale",Fi(this.cityRoot,"marciapiede-piazza",0,.37,6,17,17.55,e.gold,96);const N=Ft("#76674e",.76,.18);for(let R=0;R<8;R++){const D=R/8*Math.PI*2+Math.PI/8,C=Math.cos(D)*24,F=6+Math.sin(D)*22,H=new it(new ee(3.35,3.65,.55,28),N);H.position.set(C,.18,F),this.cityRoot.add(H);const W=new it(new ds(3.15,28),e.green);W.rotation.x=-Math.PI/2,W.position.set(C,.48,F),this.cityRoot.add(W);for(let K=0;K<5;K++){const q=K*Math.PI*.4,$=new it(new ee(.12,.18,1.35,9),Ft("#725746",.92,.02));$.position.set(C+Math.cos(q)*(.5+K%2*.6),1.12,F+Math.sin(q)*(.5+K%2*.6)),this.cityRoot.add($);const Q=new it(new Er(.9+K%2*.18,1),e.leaf);Q.scale.set(.88,1.25,.88),Q.position.set($.position.x,2.16+K%2*.24,$.position.z),Q.castShadow=!0,this.cityRoot.add(Q)}}for(const R of[-16,-11,-4,1,6,11,16]){const D=new zt;D.position.set(R,.36,13),this.cityRoot.add(D),Bi(D,"lampione-art-deco",0,0,0,[[.16,0],[.1,.22],[.08,1.8],[.23,2],[.3,2.12]],e.gold,12);const C=Ze(D,"lanterna-ambra",0,2.42,0,.31,e.light);C.material.emissiveIntensity=.75}for(let R=0;R<9;R++){const C=(R%2?1:-1)*(25+R%3*7),F=-31+Math.floor(R/3)*22,H=new zt;H.position.set(C,0,F),this.cityRoot.add(H);const W=4+R%4,K=W*2.65,q=[[3.5,0],[4.2,.35],[3.55,.72],[3.4,2.35],[4.05,2.55],[3.5,2.85],[3.3,4.85],[3.9,5.1],[3.25,5.38],[3,K-1.1],[2.5,K-.2],[1.7,K+1.05],[.55,K+4.9],[0,K+5.55]];Bi(H,"torre-residenziale-scolpita",0,0,0,q,R%2?e.navy:e.pale,24);for(let bt=0;bt<W;bt++){const oe=1.6+bt*2.65,Zt=new it(new re(3.55-bt*.045,.11,6,40),e.gold);Zt.rotation.x=Math.PI/2,Zt.position.y=oe,H.add(Zt);for(let ne=0;ne<8;ne++){const Y=ne*Math.PI/4;Ze(H,"finestra-luminosa",Math.cos(Y)*3.38,oe+.38,Math.sin(Y)*3.38,.13,e.light,8,6).scale.set(.68,1.45,.35)}}const $=new it(new Me(2.25,24,14,0,Math.PI*2,0,Math.PI/2),e.blue);$.position.y=K+1.2,$.scale.set(1.12,1.28,1.12),H.add($);const Q=new it(new re(2.45,.14,8,40),e.gold);Q.rotation.x=Math.PI/2,Q.position.y=K+1.3,H.add(Q);const Ct=new it(new Le(.26,4.2,12),e.gold);Ct.position.y=K+4.6,H.add(Ct)}for(const R of[-1,1])for(let D=0;D<3;D++){const C=-28+D*19,F=new it(new be(17,.62,3.8),Ft("#8b99a6",.48,.56));F.position.set(R*29,.1,C),this.cityRoot.add(F);const H=$t(this.cityRoot,"ringhiera-ponte",R*29,.72,C,17,.22,.22,e.gold);H.position.z=C-1.78;const W=new it(new ee(8,9,.7,32),Ft("#294653",.6,.32));W.position.set(R*45,-.2,C),this.cityRoot.add(W);const K=new it(new ds(7.5,32),e.green);K.rotation.x=-Math.PI/2,K.position.set(R*45,.18,C),this.cityRoot.add(K)}}makeInteriors(){this.interiorRooms=new Map;const t={navy:Ft("#0c2340",.32,.58,{map:this.facadeTexture}),blue:Ft("#183d61",.31,.58),stone:Ft("#cfc9bd",.58,.18),gold:Ft(kg,.24,.78),darkGold:Ft("#9a7134",.3,.72),glass:Ft("#7bd8f0",.14,.42,{emissive:"#1786a8",emissiveIntensity:.48,transparent:!0,opacity:.78,side:nn}),carpet:Ft("#23456a",.94,.02),wine:Ft("#633d50",.82,.06),cyan:Ft("#57d9ef",.18,.42,{emissive:"#1599bd",emissiveIntensity:1}),dark:Ft("#07172a",.38,.48),green:Ft("#47765d",.9,.03),ivory:Ft("#e7decb",.52,.14)},e=[["palace","Atrio Imperiale"],["hangar","Hangar Imperiale"],["command","Sala Comando"],["imperial","Area Imperiale Riservata"]];for(const[n,s]of e){const r=n==="imperial",a=r?12:8,o=new zt;o.name=`interno-${n}`,o.userData.label=s,o.visible=!1;const l=$t(o,`${n}-pavimento-imperiale`,0,-.24,0,a*2,.48,16.4,t.navy);l.receiveShadow=!0,$t(o,`${n}-pedana`,0,.035,0,a*2-.65,.12,15.7,t.blue),$t(o,`${n}-tappeto-centrale`,0,.11,.25,r?8.5:5.2,.035,11.2,n==="palace"?t.wine:t.carpet),$t(o,`${n}-parete-ovest`,-a+.12,2.85,0,.24,5.7,15.8,t.navy),$t(o,`${n}-parete-est`,a-.12,2.85,0,.24,5.7,15.8,t.navy),$t(o,`${n}-parete-nord`,0,2.85,-8,a*2,5.7,.24,t.navy),$t(o,`${n}-parete-sud-ovest`,-a*.66,2.85,8,a*.68,5.7,.24,t.navy),$t(o,`${n}-parete-sud-est`,a*.66,2.85,8,a*.68,5.7,.24,t.navy),$t(o,`${n}-architrave-ingresso`,0,5.45,8,5.3,.38,.45,t.gold),$t(o,`${n}-cornice-interna`,0,5.05,7.82,4.7,.12,.18,t.cyan);for(const d of[.62,5.2])$t(o,`${n}-cornice-ovest-${d}`,-a+.28,d,0,.34,.16,15.7,t.gold),$t(o,`${n}-cornice-est-${d}`,a-.28,d,0,.34,.16,15.7,t.gold),$t(o,`${n}-cornice-nord-${d}`,0,d,-7.75,a*2-.5,.16,.34,t.gold);for(const d of[-5.2,0,5.2]){const g=new zt;g.position.set(-a+.28,1.1,d),g.rotation.y=Math.PI/2,o.add(g),qn(g,0,0,0,1.65,3.25,.14,t.gold,t.glass);const M=new zt;M.position.set(a-.28,1.1,d),M.rotation.y=-Math.PI/2,o.add(M),qn(M,0,0,0,1.65,3.25,.14,t.gold,t.glass)}for(const d of[-a*.64,0,a*.64]){const g=qn(o,d,1.05,-7.82,r?2.25:1.85,3.45,.14,t.gold,t.glass);g.frame.name=`${n}-finestra-panoramica-arcuata`}for(const d of[-5.2,-1.8,1.8,5.2]){const g=Mt(o,new re(a*.78,.12,7,48,Math.PI),t.gold,0,5.68,d,`${n}-costola-volta`);g.rotation.z=Math.PI}const c=Mt(o,new re(r?2.4:1.65,.1,8,48),t.cyan,0,5.58,0,`${n}-oculo-luminoso`);c.rotation.x=Math.PI/2;const u=Mt(o,new re(r?3.8:2.7,.07,6,64),t.gold,0,.13,0,`${n}-medaglione-pavimento`);u.rotation.x=Math.PI/2;const f=new zt;f.position.set(0,4.75,0),o.add(f),Mt(f,new re(.72,.08,8,32),t.gold,0,0,0,`${n}-lampadario-anello`),Ze(f,`${n}-lampadario-nucleo`,0,-.06,0,.22,t.cyan,16,12);const h=new os(n==="command"?"#70dfff":"#ffe1a0",r?29:24,27,1.8);if(h.position.set(0,4.4,0),o.add(h),n==="palace"){const d={stone:t.stone,gold:t.gold};for(const S of[-3.8,0,3.8])va(o,-5.8,S,5.05,.38,d,"colonna-atrio-ovest"),va(o,5.8,S,5.05,.38,d,"colonna-atrio-est");$t(o,"pedana-trono-inferiore",0,.32,-5.05,5.1,.42,3,t.darkGold),$t(o,"pedana-trono-superiore",0,.62,-5.45,3.8,.25,2.2,t.gold),$t(o,"trono-seduta",0,1.15,-5.15,2.15,.38,1.55,t.darkGold),$t(o,"trono-schienale",0,2.05,-6.05,2.05,1.85,.42,t.blue),$t(o,"trono-bracciolo-ovest",-1.05,1.55,-5.15,.34,.85,1.55,t.gold),$t(o,"trono-bracciolo-est",1.05,1.55,-5.15,.34,.85,1.55,t.gold);const g=Mt(o,new re(.63,.1,8,32),t.gold,0,3.3,-6.25,"stemma-trono");g.rotation.x=Math.PI/2,Ze(o,"gemma-trono",0,3.3,-6.23,.19,t.cyan,12,8);const M=new zt;M.position.set(0,.18,-7.54),o.add(M),Mt(M,new Ye(Zn(5.2,5.1),{depth:.24,bevelEnabled:!0,bevelSegments:2,bevelSize:.05,bevelThickness:.05,curveSegments:12}),t.darkGold,0,0,0,"portale-esclusivo-cornice");const m=Mt(M,new Ye(Zn(4.45,4.45),{depth:.06,bevelEnabled:!1,curveSegments:12}),t.dark,0,.16,.26,"portale-esclusivo-varco");m.material.emissive=new Qt("#0a4770"),m.material.emissiveIntensity=.86;for(const S of[-1,1]){const w=Mt(M,new be(.08,4,.08),t.cyan,S*2.14,2.1,.36,"bordo-energetico-portale");w.material.emissiveIntensity=1.15}const p=Mt(M,new re(.68,.1,8,40),t.gold,0,5.75,.36,"sigillo-portale");p.rotation.x=Math.PI/2}else if(n==="hangar"){const d=Ft("#c5d3dc",.24,.78),g=Ft("#173c60",.28,.65),M=Ft("#59cbea",.14,.44,{emissive:"#16779a",emissiveIntensity:.64,transparent:!0,opacity:.86});for(const m of[-1,1]){const p=new zt;p.name=`navetta-hangar-${m<0?"ovest":"est"}`,p.position.set(m*4.2,.42,-1.2),o.add(p);const S=Mt(p,new Ke(.42,2.75,4,12),d,0,1.5,-.18,"fusoliera-navetta");S.rotation.x=Math.PI/2,S.scale.set(.84,1,.82);const w=Mt(p,new Le(.43,1.2,12),d,0,1.5,-2.06,"muso-navetta");w.rotation.x=-Math.PI/2;const _=new $n;_.moveTo(-.36,.72),_.lineTo(-2.4,-.52),_.lineTo(-2.18,-1.18),_.lineTo(-.35,-.48),_.lineTo(.35,-.48),_.lineTo(2.18,-1.18),_.lineTo(2.4,-.52),_.lineTo(.36,.72),_.closePath();const E=Mt(p,new Ye(_,{depth:.16,bevelEnabled:!0,bevelSegments:1,bevelSize:.06,bevelThickness:.045}),g,0,1.38,.58,"ali-a-freccia");E.rotation.x=Math.PI/2,Mt(p,new Me(.4,16,10),M,0,1.82,-1,"cabina-vetrata").scale.set(.72,.54,1.38);for(const x of[-1,1]){const T=Mt(p,new ee(.22,.3,.86,12),t.blue,x*1.55,1.22,.58,"propulsore-navetta");T.rotation.x=Math.PI/2;const P=Mt(p,new re(.24,.065,7,20),t.cyan,x*1.55,1.22,1.03,"anello-propulsore");P.rotation.x=Math.PI/2}const L=Mt(p,new Ye(_,{depth:.11,bevelEnabled:!1}),t.gold,0,1.43,1.7,"stabilizzatore-posteriore");L.scale.set(.38,.3,1),L.rotation.x=Math.PI/2}for(const m of[-5.8,-2.7,.4,3.5])for(const p of[-1,1]){const S=Mt(o,new re(8.5,.16,8,56,Math.PI),t.blue,0,0,m,"arco-strutturale-hangar");S.rotation.z=Math.PI}$t(o,"pista-atterraggio-centrale",0,.13,-.9,1.8,.12,12.2,t.dark);for(const m of[-1,1]){const p=$t(o,"guida-ciano-pista",m*1.05,.22,-.9,.09,.05,11.4,t.cyan);p.material.emissiveIntensity=1.2;for(const S of[-6,-4.7,-3.4,3.8,5.2])Ze(o,"segnale-piazzola",m*6.6,.18,S,.12,t.gold,12,8)}for(const m of[-1,1]){$t(o,"banco-manutenzione",m*6.2,1.05,-5.3,2.1,1.7,.65,t.blue);for(let p=0;p<3;p++){const S=$t(o,"schermo-manutenzione",m*6.2+(p-1)*.58,2.2,-5.62,.45,.62,.08,t.cyan);S.material.emissiveIntensity=1}}}else if(n==="command"){Mt(o,new ee(1.72,2,.4,40),t.navy,0,1.22,-4.55,"tavolo-olografico-comando");const d=Mt(o,new re(1.85,.09,7,48),t.gold,0,1.48,-4.55,"bordo-tavolo-olografico");d.rotation.x=Math.PI/2;const g=Mt(o,new Me(.94,24,16),t.cyan,0,2.62,-4.55,"mappa-olografica-impero");g.material.wireframe=!0,Mt(o,new re(1.27,.035,6,56),t.gold,0,2.65,-4.55,"orbita-olografica").rotation.set(.65,.2,.1);for(const m of[-5.2,-2.7,2.7,5.2]){$t(o,"pannello-comando",m,2.1,-7.48,1.65,1.85,.16,t.dark);const p=$t(o,"schermo-comando",m,2.2,-7.37,1.34,1.24,.045,t.cyan);p.material.emissiveIntensity=.72,$t(o,"basamento-monitor",m,.42,-7.24,1.9,.45,.45,t.gold)}for(const m of[-1,1])for(let p=0;p<3;p++){const S=Mt(o,new ee(.34,.4,.48,12),t.blue,m*(2.3+p*.48),.46,-4.5+(p-1)*.8,"seduta-comando");S.rotation.y=m*.25}}else{Mt(o,new ee(1.95,2.15,.38,32),t.darkGold,-6,.83,-3.3,"tavolo-sala-consiglio");const d=Mt(o,new re(2.04,.09,8,44),t.gold,-6,1.05,-3.3,"bordo-tavolo-consiglio");d.rotation.x=Math.PI/2;for(let _=0;_<6;_++){const E=_*Math.PI/3,b=Mt(o,new ee(.34,.44,.84,10),t.blue,-6+Math.cos(E)*2.8,.48,-3.3+Math.sin(E)*2.35,"sedia-consiglio");b.rotation.y=-E,$t(o,"schienale-sedia-consiglio",b.position.x,1,b.position.z-.28,.64,.62,.16,t.gold)}const g=Mt(o,new re(3.05,.12,8,56),t.gold,7,4.4,-4.6,"anello-osservatorio");g.rotation.x=Math.PI/2;for(const _ of[4.2,9.8]){const E=new zt;E.position.set(_,1,-7.78),o.add(E),qn(E,0,0,0,2.2,3.65,.16,t.gold,t.glass)}const M=new zt;M.position.set(7,.2,-4.8),o.add(M),Mt(M,new ee(.62,.78,.32,20),t.gold,0,.16,0,"base-telescopio");const m=Mt(M,new ee(.31,.48,2.8,16),t.blue,0,2.1,0,"telescopio-orientabile");m.rotation.z=Math.PI/3;const p=Mt(M,new re(.38,.06,8,24),t.cyan,1.22,2.82,0,"lente-telescopio");p.rotation.y=Math.PI/2,$t(o,"guardaroba-imperiale",7,1.6,2.8,2.45,3.2,.8,t.blue);for(let _=0;_<4;_++)Mt(o,new Ke(.21,1.05,3,10),[t.gold,t.cyan,t.ivory,t.wine][_],6.34+_*.44,1.85,2.28,`uniforme-espositiva-${_+1}`).scale.set(.72,1,.3);const S=$t(o,"specchio-guardaroba",7,2,2.32,1.15,2.15,.08,t.glass);S.material.metalness=.72,Mt(o,new ee(.48,.55,.5,16),t.darkGold,7,.42,3.55,"piedistallo-corona"),Mt(o,new re(.32,.07,8,28),t.gold,7,.86,3.55,"corona-espositiva"),$t(o,"centro-autorizzazioni",-7,1.35,3.4,2.9,2.4,1,t.navy);for(let _=0;_<3;_++){const E=$t(o,"display-autorizzazioni",-7.72+_*.72,2.25,2.83,.58,.85,.08,t.cyan);E.material.emissiveIntensity=.9}const w=Mt(o,new re(.36,.06,8,28),t.gold,-7,3.05,2.78,"sigillo-autorizzazioni");w.rotation.x=Math.PI/2}this.scene.add(o),this.interiorRooms.set(n,o)}}makeAvatar(){this.avatar=new zt,this.avatar.name="Avatar Suneo",this.cityRoot.add(this.avatar),this.avatarBodyMaterial=Ft(Vg,.34,.42),this.avatarTrimMaterial=Ft(or,.24,.82);const t=Ft("#edc19e",.77,.02),e=Ft("#392d2b",.58,.07),n=Ft("#102038",.44,.2),s=Ft("#eee3cd",.58,.02),r=[[.42,.24],[.53,.45],[.46,1.12],[.38,1.47],[.3,1.62],[.28,1.72]];Mt(this.avatar,new Rr(r.map(p=>new at(p[0],p[1])),20),this.avatarBodyMaterial,0,0,0,"giacca-da-comandante"),$t(this.avatar,"pannello-frontale-uniforme",0,1.02,.35,.55,1.07,.055,this.avatarBodyMaterial);const a=Mt(this.avatar,new Le(.19,.36,4),s,-.16,1.76,.31,"colletto");a.rotation.z=Math.PI;const o=a.clone();o.position.x=.16,this.avatar.add(o);for(const p of[-1,1]){Mt(this.avatar,new Me(.27,14,8),this.avatarTrimMaterial,p*.48,1.59,0,"spallina-ricamata").scale.set(1.2,.36,.83);const w=new zt;w.position.set(p*.54,1.48,.02),this.avatar.add(w);for(let T=0;T<4;T++){const P=Mt(w,new Le(.025,.2,5),this.avatarTrimMaterial,p*T*.07,-.09,0,"frangia-spallina");P.rotation.z=-p*.12}const _=new zt;_.position.set(p*.22,.48,0),this.avatar.add(_),Mt(_,new Ke(.15,.54,4,12),n,0,-.2,0,"gamba"),Mt(_,new Me(.21,12,8),this.avatarTrimMaterial,0,-.48,.12,"stivale").scale.set(1.05,.62,1.5),this.walkLegs||=[],this.walkLegs.push(_);const b=new zt;b.position.set(p*.51,1.4,.02),this.avatar.add(b);const L=Mt(b,new Ke(.14,.48,4,10),this.avatarBodyMaterial,0,-.28,0,"manica");L.rotation.z=-p*.08;const x=Mt(b,new re(.14,.035,6,14),this.avatarTrimMaterial,0,-.58,0,"polsino");x.rotation.x=Math.PI/2,this.walkArms||=[],this.walkArms.push(b)}for(let p=0;p<5;p++)Ze(this.avatar,"bottone-oro",.08,1.35-p*.2,.39,.046,this.avatarTrimMaterial,8,6);this.avatarHead=new zt,this.avatarHead.position.set(0,1.88,.01),this.avatar.add(this.avatarHead),this.genericHead=Mt(this.avatarHead,new Me(.49,24,18),t,0,.23,0,"volto"),this.genericHead.scale.set(.86,1.08,.76),this.suneoFeatures=new zt,this.avatarHead.add(this.suneoFeatures),Mt(this.suneoFeatures,new Me(.46,20,16,0,Math.PI*2,0,Math.PI*.56),e,0,.58,-.08,"ciuffo-laterale").scale.set(1.08,.82,.9);const c=Mt(this.suneoFeatures,new Le(.31,.96,9),e,.2,1.05,-.03,"ciuffo-appuntito");c.rotation.z=-.62,c.rotation.x=-.2;const u=Mt(this.suneoFeatures,new Le(.19,.78,8),e,-.22,.92,-.02,"ciocca-alta");u.rotation.z=.38;const f=Mt(this.suneoFeatures,new Le(.18,.54,8),e,-.38,.48,.04,"basetta");f.rotation.z=-.6,this.genericHair=Mt(this.avatarHead,new Me(.48,18,12,0,Math.PI*2,0,Math.PI*.52),Ft("#342b2b",.7,.02),0,.66,-.07,"capelli-avatar"),this.genericHair.scale.set(1.02,.76,.9);const h=Ft("#fff9ea",.52,.01),d=new cn({color:"#1a202c"});for(const p of[-1,1]){Ze(this.avatarHead,"occhio",p*.17,.28,.37,.083,h,12,10),Ze(this.avatarHead,"pupilla",p*.17,.27,.44,.04,d,10,8);const S=Mt(this.avatarHead,new be(.18,.045,.05),e,p*.17,.43,.38,"sopracciglio");S.rotation.z=p*.18}Mt(this.avatarHead,new Me(.11,12,8),t,0,.13,.44,"naso").scale.set(.78,.74,.7);const M=Mt(this.avatarHead,new re(.1,.018,6,16,Math.PI),Ft("#a64d47",.8,0),.03,-.02,.39,"sorriso");M.rotation.z=Math.PI,this.crown=new zt,this.crown.name="Corona indipendente",this.avatarHead.add(this.crown);const m=Mt(this.crown,new re(.36,.08,8,32),this.avatarTrimMaterial,0,.69,0,"cerchio-corona");m.rotation.x=Math.PI/2;for(let p=0;p<7;p++){const S=p*Math.PI*2/7,w=Mt(this.crown,new Le(.065,.28,7),this.avatarTrimMaterial,Math.cos(S)*.33,.84,Math.sin(S)*.33,"punta-corona");w.rotation.z=-Math.cos(S)*.17}Ze(this.crown,"gemma-corona",0,.78,.36,.075,Ft("#48d8f2",.18,.45,{emissive:"#1aa6df",emissiveIntensity:1.1}),10,8),this.avatarLabel=new ro(new yr({color:"#ffffff",transparent:!0,opacity:0})),this.avatarLabel.scale.set(.001,.001,1),this.avatarLabel.position.set(0,3.7,0)}makeTargets(){this.targets=new Map;const t=Ft(or,.27,.74),e=Ft("#1b3048",.32,.58),n=Ft("#6bdeef",.18,.3,{emissive:"#16a5c5",emissiveIntensity:.8});for(const s of gs){const r=new zt;if(r.name=s.id,r.position.set(s.x,0,s.z),r.userData.target=s,this.cityRoot.add(r),s.kind==="core"){Mt(r,new Cr(.43,1),n,0,1,0,"nucleo");const a=Mt(r,new re(.76,.05,6,28),t,0,1,0,"aureola");a.rotation.x=Math.PI/2}else if(s.kind==="door"){const a=Mt(r,new Ye(Zn(2.5,3.2),{depth:.35,bevelEnabled:!0,bevelSegments:1,bevelSize:.05,bevelThickness:.05}),e,0,.05,-.24,"anta-portale-mobile");Mt(r,new Ye(Zn(2.9,3.5),{depth:.13,bevelEnabled:!0,bevelSegments:1,bevelSize:.04,bevelThickness:.04}),t,0,0,-.48,"cornice-portale"),r.userData.doorPanel=a,r.userData.open=!1}else s.kind==="npc"?(Mt(r,new Ke(.32,.46,3,12),Ft("#4e87a9",.38,.48),0,.55,0,"robot-accompagnatore"),Ze(r,"testa-robot",0,1.4,0,.32,Ft("#d5e6ec",.25,.62),16,12),Mt(r,new re(.34,.05,6,24),n,0,1.4,.08,"visore")):(Bi(r,"console-colonna",0,0,0,[[.12,0],[.18,.18],[.1,.92],[.29,1.06]],t,12),$t(r,"console-schermo",0,1.32,.16,.8,.55,.12,n));this.targets.set(s.id,r)}}makeShuttles(){this.shuttles=[];const t=Ft("#c9d5dc",.27,.82),e=Ft("#183752",.28,.72),n=Ft(or,.22,.83),s=Ft("#39bce5",.21,.5,{emissive:"#138ac6",emissiveIntensity:1.25});for(let r=0;r<4;r++){const a=new zt;a.name="navetta-imperiale-"+(r+1);const o=new $n;o.moveTo(0,2.4),o.lineTo(.42,.45),o.quadraticCurveTo(.43,0,.2,-1.65),o.lineTo(0,-2.3),o.lineTo(-.2,-1.65),o.quadraticCurveTo(-.43,0,-.42,.45),o.closePath();const l=Mt(a,new Ye(o,{depth:.42,bevelEnabled:!0,bevelSegments:3,bevelSize:.09,bevelThickness:.11}),t,0,0,0,"scafo-navetta");l.rotation.x=Math.PI/2;const c=Mt(a,new Io((()=>{const u=new $n;return u.moveTo(0,.4),u.lineTo(3.2,-.3),u.lineTo(2.1,-1.6),u.lineTo(0,-1.2),u.lineTo(-2.1,-1.6),u.lineTo(-3.2,-.3),u.lineTo(0,.4),u})()),e,0,.02,.08,"ala-delta");c.rotation.x=Math.PI/2;for(const u of[-1,1]){const f=Mt(a,new ee(.24,.36,1.05,12),s,u*1.25,0,-.75,"propulsore");f.rotation.x=Math.PI/2;const h=Mt(a,new Le(.34,.78,12),n,u*1.25,0,.62,"turbina-oro");h.rotation.x=Math.PI/2}Ze(a,"cabina-vetro",0,.08,1.08,.33,Ft("#6dc9ed",.13,.55,{emissive:"#2e9cc8",emissiveIntensity:.35}),16,10),this.scene.add(a),this.shuttles.push(a)}}syncState(){const t=this.getState(),e=this.getProfile(),n=e?.role==="emperor"&&!!e?.user_id,s=xa[t.avatar.outfit]||xa.classico;this.avatarBodyMaterial.color.set(n?s.jacket:t.avatar.color),this.avatarTrimMaterial.color.set(n?s.trim:"#c9d5dc"),this.suneoFeatures.visible=n,this.genericHead.visible=!0,this.genericHair.visible=!n,this.crown.visible=n&&t.avatar.crown,this.cityRoot.visible=!t.interior;for(const[o,l]of this.interiorRooms)l.visible=o===t.interior;const r=t.interior?this.interiorRooms.get(t.interior):this.cityRoot;this.avatar.parent!==r&&r.attach(this.avatar),this.cityRoot.position.set(t.position.x*.12,0,t.position.z*.12),this.avatar.position.set(t.avatar.x,0,t.avatar.z);const a=t.mission;for(const o of gs){const l=this.targets.get(o.id),c=a?.status==="active"&&(a.id==="signal_recovery"?o.kind==="core"||o.id==="console-piazza":["motore-ovest","motore-est","navigazione","console-comando"].includes(o.id)),u=a?.completedTargets?.includes(o.id);l.visible=o.kind==="door"||o.kind==="npc"||!!c&&!u,o.kind==="door"&&(l.userData.open=t.openDoors.includes(o.id),l.userData.doorOpen=l.userData.open,l.userData.doorTarget=l.userData.open?-Math.PI/2:0)}this.drone.visible=a?.status==="active"}update(t,e){super.update(t,e);const n=this.getState(),r=Math.hypot(this.joystick.x,this.joystick.y)>.08||this.keys.size>0?Math.sin(e*.012)*.46:0;this.walkLegs?.forEach((h,d)=>{h.rotation.x=r*(d?1:-1)}),this.walkArms?.forEach((h,d)=>{h.rotation.x=r*(d?-.78:.78)});const a=this.avatar.getWorldPosition(new I),o=this.canvas.clientHeight>this.canvas.clientWidth,l=n.interior?7:o?17:14.5,c=n.interior?5.4:o?10:8.2,u=new I(Math.sin(this.yaw)*l,c,Math.cos(this.yaw)*l);this.camera.position.lerp(a.clone().add(u),Math.min(1,t*3.2));const f=a.clone().add(new I(0,o?2.9:2.5,-3.7));this.camera.lookAt(f),this.camera.fov=o?59:50,this.camera.updateProjectionMatrix(),this.clouds&&this.clouds.forEach((h,d)=>{h.position.x=h.userData.baseX+Math.sin(e*25e-6+d)*1.4,h.position.z=h.userData.baseZ+Math.cos(e*18e-6+d)*.9})}resize(){super.resize(),this.camera&&(this.camera.fov=this.canvas.clientHeight>this.canvas.clientWidth?59:50,this.camera.updateProjectionMatrix())}dispose(){this.facadeTexture&&this.facadeTexture.dispose(),super.dispose()}}export{Jg as CityWorld,Zg as prepareCityWorldAssets};
