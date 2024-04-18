import{a as O,P as q,C as S,at as F,V as P,a2 as D,au as k,av as X,ak as Q,aw as E,ax as I,an as N,ay as J,Q as te,h as re,T as oe,az as ae,aA as ne,R as H,m as ie,F as z,r as G,b as se,i as V}from"./three.module.25f8a8e1.js";class W extends O{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new q;const o=this,n=e.color!==void 0?new S(e.color):new S(8355711),l=e.textureWidth||512,a=e.textureHeight||512,d=e.clipBias||0,f=e.shader||W.ReflectorShader,b=e.multisample!==void 0?e.multisample:4,c=new F,h=new P,i=new P,p=new P,x=new D,y=new P(0,0,-1),v=new k,w=new P,M=new P,r=new k,m=new D,s=this.camera,_=new X(l,a,{samples:b,type:Q}),C=new E({uniforms:I.clone(f.uniforms),fragmentShader:f.fragmentShader,vertexShader:f.vertexShader});C.uniforms.tDiffuse.value=_.texture,C.uniforms.color.value=n,C.uniforms.textureMatrix.value=m,this.material=C,this.onBeforeRender=function(u,T,g){if(i.setFromMatrixPosition(o.matrixWorld),p.setFromMatrixPosition(g.matrixWorld),x.extractRotation(o.matrixWorld),h.set(0,0,1),h.applyMatrix4(x),w.subVectors(i,p),w.dot(h)>0)return;w.reflect(h).negate(),w.add(i),x.extractRotation(g.matrixWorld),y.set(0,0,-1),y.applyMatrix4(x),y.add(p),M.subVectors(i,y),M.reflect(h).negate(),M.add(i),s.position.copy(w),s.up.set(0,1,0),s.up.applyMatrix4(x),s.up.reflect(h),s.lookAt(M),s.far=g.far,s.updateMatrixWorld(),s.projectionMatrix.copy(g.projectionMatrix),m.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),m.multiply(s.projectionMatrix),m.multiply(s.matrixWorldInverse),m.multiply(o.matrixWorld),c.setFromNormalAndCoplanarPoint(h,i),c.applyMatrix4(s.matrixWorldInverse),v.set(c.normal.x,c.normal.y,c.normal.z,c.constant);const R=s.projectionMatrix;r.x=(Math.sign(v.x)+R.elements[8])/R.elements[0],r.y=(Math.sign(v.y)+R.elements[9])/R.elements[5],r.z=-1,r.w=(1+R.elements[10])/R.elements[14],v.multiplyScalar(2/v.dot(r)),R.elements[2]=v.x,R.elements[6]=v.y,R.elements[10]=v.z+1-d,R.elements[14]=v.w,o.visible=!1;const Y=u.getRenderTarget(),K=u.xr.enabled,Z=u.shadowMap.autoUpdate,$=u.outputColorSpace,ee=u.toneMapping;u.xr.enabled=!1,u.shadowMap.autoUpdate=!1,u.outputColorSpace=N,u.toneMapping=J,u.setRenderTarget(_),u.state.buffers.depth.setMask(!0),u.autoClear===!1&&u.clear(),u.render(T,s),u.xr.enabled=K,u.shadowMap.autoUpdate=Z,u.outputColorSpace=$,u.toneMapping=ee,u.setRenderTarget(Y);const B=g.viewport;B!==void 0&&u.state.viewport(B),o.visible=!0},this.getRenderTarget=function(){return _},this.dispose=function(){_.dispose(),o.material.dispose()}}}W.ReflectorShader={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`};class A extends O{constructor(t,e={}){super(t),this.isRefractor=!0,this.type="Refractor",this.camera=new q;const o=this,n=e.color!==void 0?new S(e.color):new S(8355711),l=e.textureWidth||512,a=e.textureHeight||512,d=e.clipBias||0,f=e.shader||A.RefractorShader,b=e.multisample!==void 0?e.multisample:4,c=this.camera;c.matrixAutoUpdate=!1,c.userData.refractor=!0;const h=new F,i=new D,p=new X(l,a,{samples:b,type:Q});this.material=new E({uniforms:I.clone(f.uniforms),vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,transparent:!0}),this.material.uniforms.color.value=n,this.material.uniforms.tDiffuse.value=p.texture,this.material.uniforms.textureMatrix.value=i;const x=function(){const r=new P,m=new P,s=new D,_=new P,C=new P;return function(T){return r.setFromMatrixPosition(o.matrixWorld),m.setFromMatrixPosition(T.matrixWorld),_.subVectors(r,m),s.extractRotation(o.matrixWorld),C.set(0,0,1),C.applyMatrix4(s),_.dot(C)<0}}(),y=function(){const r=new P,m=new P,s=new te,_=new P;return function(){o.matrixWorld.decompose(m,s,_),r.set(0,0,1).applyQuaternion(s).normalize(),r.negate(),h.setFromNormalAndCoplanarPoint(r,m)}}(),v=function(){const r=new F,m=new k,s=new k;return function(C){c.matrixWorld.copy(C.matrixWorld),c.matrixWorldInverse.copy(c.matrixWorld).invert(),c.projectionMatrix.copy(C.projectionMatrix),c.far=C.far,r.copy(h),r.applyMatrix4(c.matrixWorldInverse),m.set(r.normal.x,r.normal.y,r.normal.z,r.constant);const u=c.projectionMatrix;s.x=(Math.sign(m.x)+u.elements[8])/u.elements[0],s.y=(Math.sign(m.y)+u.elements[9])/u.elements[5],s.z=-1,s.w=(1+u.elements[10])/u.elements[14],m.multiplyScalar(2/m.dot(s)),u.elements[2]=m.x,u.elements[6]=m.y,u.elements[10]=m.z+1-d,u.elements[14]=m.w}}();function w(r){i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(r.projectionMatrix),i.multiply(r.matrixWorldInverse),i.multiply(o.matrixWorld)}function M(r,m,s){o.visible=!1;const _=r.getRenderTarget(),C=r.xr.enabled,u=r.shadowMap.autoUpdate,T=r.outputColorSpace,g=r.toneMapping;r.xr.enabled=!1,r.shadowMap.autoUpdate=!1,r.outputColorSpace=N,r.toneMapping=J,r.setRenderTarget(p),r.autoClear===!1&&r.clear(),r.render(m,c),r.xr.enabled=C,r.shadowMap.autoUpdate=u,r.outputColorSpace=T,r.toneMapping=g,r.setRenderTarget(_);const R=s.viewport;R!==void 0&&r.state.viewport(R),o.visible=!0}this.onBeforeRender=function(r,m,s){s.userData.refractor!==!0&&(!x(s)||(y(),w(s),v(s),M(r,m,s)))},this.getRenderTarget=function(){return p},this.dispose=function(){p.dispose(),o.material.dispose()}}}A.RefractorShader={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`

		uniform mat4 textureMatrix;

		varying vec4 vUv;

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec3 color;
		uniform sampler2D tDiffuse;

		varying vec4 vUv;

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`};class j extends O{constructor(t,e={}){super(t),this.isWater=!0,this.type="Water";const o=this,n=e.color!==void 0?new S(e.color):new S(16777215),l=e.textureWidth||512,a=e.textureHeight||512,d=e.clipBias||0,f=e.flowDirection||new re(1,0),b=e.flowSpeed||.03,c=e.reflectivity||.02,h=e.scale||1,i=e.shader||j.WaterShader,p=new oe,x=e.flowMap||void 0,y=e.normalMap0||p.load("textures/water/Water_1_M_Normal.jpg"),v=e.normalMap1||p.load("textures/water/Water_2_M_Normal.jpg"),w=.15,M=w*.5,r=new D,m=new ae;if(W===void 0){console.error("THREE.Water: Required component Reflector not found.");return}if(A===void 0){console.error("THREE.Water: Required component Refractor not found.");return}const s=new W(t,{textureWidth:l,textureHeight:a,clipBias:d}),_=new A(t,{textureWidth:l,textureHeight:a,clipBias:d});s.matrixAutoUpdate=!1,_.matrixAutoUpdate=!1,this.material=new E({uniforms:I.merge([ne.fog,i.uniforms]),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,transparent:!0,fog:!0}),x!==void 0?(this.material.defines.USE_FLOWMAP="",this.material.uniforms.tFlowMap={type:"t",value:x}):this.material.uniforms.flowDirection={type:"v2",value:f},y.wrapS=y.wrapT=H,v.wrapS=v.wrapT=H,this.material.uniforms.tReflectionMap.value=s.getRenderTarget().texture,this.material.uniforms.tRefractionMap.value=_.getRenderTarget().texture,this.material.uniforms.tNormalMap0.value=y,this.material.uniforms.tNormalMap1.value=v,this.material.uniforms.color.value=n,this.material.uniforms.reflectivity.value=c,this.material.uniforms.textureMatrix.value=r,this.material.uniforms.config.value.x=0,this.material.uniforms.config.value.y=M,this.material.uniforms.config.value.z=M,this.material.uniforms.config.value.w=h;function C(T){r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(T.projectionMatrix),r.multiply(T.matrixWorldInverse),r.multiply(o.matrixWorld)}function u(){const T=m.getDelta(),g=o.material.uniforms.config;g.value.x+=b*T,g.value.y=g.value.x+M,g.value.x>=w?(g.value.x=0,g.value.y=M):g.value.y>=w&&(g.value.y=g.value.y-w)}this.onBeforeRender=function(T,g,R){C(R),u(),o.visible=!1,s.matrixWorld.copy(o.matrixWorld),_.matrixWorld.copy(o.matrixWorld),s.onBeforeRender(T,g,R),_.onBeforeRender(T,g,R),o.visible=!0}}}j.WaterShader={uniforms:{color:{type:"c",value:null},reflectivity:{type:"f",value:0},tReflectionMap:{type:"t",value:null},tRefractionMap:{type:"t",value:null},tNormalMap0:{type:"t",value:null},tNormalMap1:{type:"t",value:null},textureMatrix:{type:"m4",value:null},config:{type:"v4",value:new k}},vertexShader:`

		#include <common>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>

		uniform mat4 textureMatrix;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			vUv = uv;
			vCoord = textureMatrix * vec4( position, 1.0 );

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vToEye = cameraPosition - worldPosition.xyz;

			vec4 mvPosition =  viewMatrix * worldPosition; // used in fog_vertex
			gl_Position = projectionMatrix * mvPosition;

			#include <logdepthbuf_vertex>
			#include <fog_vertex>

		}`,fragmentShader:`

		#include <common>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>

		uniform sampler2D tReflectionMap;
		uniform sampler2D tRefractionMap;
		uniform sampler2D tNormalMap0;
		uniform sampler2D tNormalMap1;

		#ifdef USE_FLOWMAP
			uniform sampler2D tFlowMap;
		#else
			uniform vec2 flowDirection;
		#endif

		uniform vec3 color;
		uniform float reflectivity;
		uniform vec4 config;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			#include <logdepthbuf_fragment>

			float flowMapOffset0 = config.x;
			float flowMapOffset1 = config.y;
			float halfCycle = config.z;
			float scale = config.w;

			vec3 toEye = normalize( vToEye );

			// determine flow direction
			vec2 flow;
			#ifdef USE_FLOWMAP
				flow = texture2D( tFlowMap, vUv ).rg * 2.0 - 1.0;
			#else
				flow = flowDirection;
			#endif
			flow.x *= - 1.0;

			// sample normal maps (distort uvs with flowdata)
			vec4 normalColor0 = texture2D( tNormalMap0, ( vUv * scale ) + flow * flowMapOffset0 );
			vec4 normalColor1 = texture2D( tNormalMap1, ( vUv * scale ) + flow * flowMapOffset1 );

			// linear interpolate to get the final normal color
			float flowLerp = abs( halfCycle - flowMapOffset0 ) / halfCycle;
			vec4 normalColor = mix( normalColor0, normalColor1, flowLerp );

			// calculate normal vector
			vec3 normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );

			// calculate the fresnel term to blend reflection and refraction maps
			float theta = max( dot( toEye, normal ), 0.0 );
			float reflectance = reflectivity + ( 1.0 - reflectivity ) * pow( ( 1.0 - theta ), 5.0 );

			// calculate final uv coords
			vec3 coord = vCoord.xyz / vCoord.w;
			vec2 uv = coord.xy + coord.z * normal.xz * 0.05;

			vec4 reflectColor = texture2D( tReflectionMap, vec2( 1.0 - uv.x, uv.y ) );
			vec4 refractColor = texture2D( tRefractionMap, uv );

			// multiply water color with the mix of both textures
			gl_FragColor = vec4( color, 1.0 ) * mix( refractColor, reflectColor, reflectance );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>

		}`};const L=new WeakMap;class ue extends ie{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,o,n){const l=new z(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,a=>{this.parse(a,e,n)},o,n)}parse(t,e,o){this.decodeDracoFile(t,e,null,null,G).catch(o)}decodeDracoFile(t,e,o,n,l=N){const a={attributeIDs:o||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!o,vertexColorSpace:l};return this.decodeGeometry(t,a).then(e)}decodeGeometry(t,e){const o=JSON.stringify(e);if(L.has(t)){const f=L.get(t);if(f.key===o)return f.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const l=this.workerNextTaskID++,a=t.byteLength,d=this._getWorker(l,a).then(f=>(n=f,new Promise((b,c)=>{n._callbacks[l]={resolve:b,reject:c},n.postMessage({type:"decode",id:l,taskConfig:e,buffer:t},[t])}))).then(f=>this._createGeometry(f.geometry));return d.catch(()=>!0).then(()=>{n&&l&&this._releaseTask(n,l)}),L.set(t,{key:o,promise:d}),d}_createGeometry(t){const e=new se;t.index&&e.setIndex(new V(t.index.array,1));for(let o=0;o<t.attributes.length;o++){const n=t.attributes[o],l=n.name,a=n.array,d=n.itemSize,f=new V(a,d);l==="color"&&this._assignVertexColorSpace(f,n.vertexColorSpace),e.setAttribute(l,f)}return e}_assignVertexColorSpace(t,e){if(e!==G)return;const o=new S;for(let n=0,l=t.count;n<l;n++)o.fromBufferAttribute(t,n).convertSRGBToLinear(),t.setXYZ(n,o.r,o.g,o.b)}_loadLibrary(t,e){const o=new z(this.manager);return o.setPath(this.decoderPath),o.setResponseType(e),o.setWithCredentials(this.withCredentials),new Promise((n,l)=>{o.load(t,n,void 0,l)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(o=>{const n=o[0];t||(this.decoderConfig.wasmBinary=o[1]);const l=le.toString(),a=["/* draco decoder */",n,"","/* worker */",l.substring(l.indexOf("{")+1,l.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(l){const a=l.data;switch(a.type){case"decode":n._callbacks[a.id].resolve(a);break;case"error":n._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,l){return n._taskLoad>l._taskLoad?-1:1});const o=this.workerPool[this.workerPool.length-1];return o._taskCosts[t]=e,o._taskLoad+=e,o})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function le(){let U,t;onmessage=function(a){const d=a.data;switch(d.type){case"init":U=d.decoderConfig,t=new Promise(function(c){U.onModuleLoaded=function(h){c({draco:h})},DracoDecoderModule(U)});break;case"decode":const f=d.buffer,b=d.taskConfig;t.then(c=>{const h=c.draco,i=new h.Decoder;try{const p=e(h,i,new Int8Array(f),b),x=p.attributes.map(y=>y.array.buffer);p.index&&x.push(p.index.array.buffer),self.postMessage({type:"decode",id:d.id,geometry:p},x)}catch(p){console.error(p),self.postMessage({type:"error",id:d.id,error:p.message})}finally{h.destroy(i)}});break}};function e(a,d,f,b){const c=b.attributeIDs,h=b.attributeTypes;let i,p;const x=d.GetEncodedGeometryType(f);if(x===a.TRIANGULAR_MESH)i=new a.Mesh,p=d.DecodeArrayToMesh(f,f.byteLength,i);else if(x===a.POINT_CLOUD)i=new a.PointCloud,p=d.DecodeArrayToPointCloud(f,f.byteLength,i);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||i.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const y={index:null,attributes:[]};for(const v in c){const w=self[h[v]];let M,r;if(b.useUniqueIDs)r=c[v],M=d.GetAttributeByUniqueId(i,r);else{if(r=d.GetAttributeId(i,a[c[v]]),r===-1)continue;M=d.GetAttribute(i,r)}const m=n(a,d,i,v,w,M);v==="color"&&(m.vertexColorSpace=b.vertexColorSpace),y.attributes.push(m)}return x===a.TRIANGULAR_MESH&&(y.index=o(a,d,i)),a.destroy(i),y}function o(a,d,f){const c=f.num_faces()*3,h=c*4,i=a._malloc(h);d.GetTrianglesUInt32Array(f,h,i);const p=new Uint32Array(a.HEAPF32.buffer,i,c).slice();return a._free(i),{array:p,itemSize:1}}function n(a,d,f,b,c,h){const i=h.num_components(),x=f.num_points()*i,y=x*c.BYTES_PER_ELEMENT,v=l(a,c),w=a._malloc(y);d.GetAttributeDataArrayForAllPoints(f,h,v,y,w);const M=new c(a.HEAPF32.buffer,w,x).slice();return a._free(w),{name:b,array:M,itemSize:i}}function l(a,d){switch(d){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}export{ue as D,j as W};
