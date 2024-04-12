"use strict";
(function(root,module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(root,exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(global,exports);}else{module(root,root);}}(typeof self!=='undefined'?self:this,function($rt_globals,$rt_exports){var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,
cls){return obj instanceof $rt_objcls()&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,
cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,
data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),
data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data)
{var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data)
{var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data){var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data){var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data)
{var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls()
{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:
jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element
=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays
=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),
arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i
=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),
arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]
=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+
0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"
?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix
=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if
(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass
=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f)
{return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f)
{return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target)
{return target.$clinit=function(){};}var $rt_numberConversionBuffer=new $rt_globals.ArrayBuffer(16);var $rt_numberConversionView=new $rt_globals.DataView($rt_numberConversionBuffer);var $rt_numberConversionFloatArray=new $rt_globals.Float32Array($rt_numberConversionBuffer);var $rt_numberConversionDoubleArray=new $rt_globals.Float64Array($rt_numberConversionBuffer);var $rt_numberConversionIntArray=new $rt_globals.Int32Array($rt_numberConversionBuffer);var $rt_doubleToRawLongBits;var $rt_longBitsToDouble;if(typeof $rt_globals.BigInt
!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else if(typeof $rt_globals.BigInt64Array!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,
true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)
<<$rt_globals.BigInt(32));};}else {var $rt_numberConversionLongArray=new $rt_globals.BigInt64Array($rt_numberConversionBuffer);$rt_doubleToRawLongBits=function(n){$rt_numberConversionDoubleArray[0]=n;return $rt_numberConversionLongArray[0];};$rt_longBitsToDouble=function(n){$rt_numberConversionLongArray[0]=n;return $rt_numberConversionDoubleArray[0];};}function $rt_floatToRawIntBits(n){$rt_numberConversionFloatArray[0]=n;return $rt_numberConversionIntArray[0];}function $rt_intBitsToFloat(n){$rt_numberConversionIntArray[0]
=n;return $rt_numberConversionFloatArray[0];}function $rt_equalDoubles(a,b){if(a!==a){return b!==b;}$rt_numberConversionDoubleArray[0]=a;$rt_numberConversionDoubleArray[1]=b;return $rt_numberConversionIntArray[0]===$rt_numberConversionIntArray[2]&&$rt_numberConversionIntArray[1]===$rt_numberConversionIntArray[3];}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,
[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){try {var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString()
:null;}}return this[defaultMessage];}catch(e){return "Exception occurred trying to extract Java exception message: "+e;}}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "
+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName
="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if
(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val,
 -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(lo))
|$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32)));};Long_fromInt=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val|0));};Long_fromNumber=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val)));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val)
{return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};var $rt_ucmp=function(a,b){a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.k=f;}
function $rt_cls(cls){return B9(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return KP(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.i.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return KE(t);}
function $rt_throwableCause(t){return KI(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Ls());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Bu();}
function $rt_setThread(t){return Du(t);}
function $rt_createException(message){return Lt(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){$rt_throw(Lu());}
var A=Object.create(null);
var F=$rt_throw;var C3=$rt_compare;var Lv=$rt_nullCheck;var O=$rt_cls;var X=$rt_createArray;var Ee=$rt_isInstance;var Ic=$rt_nativeThread;var Lw=$rt_suspending;var K1=$rt_resuming;var KR=$rt_invalidPointer;var D=$rt_s;var Z=$rt_eraseClinit;var I7=$rt_imul;var Bs=$rt_wrapException;var Lx=$rt_checkBounds;var Ly=$rt_checkUpperBound;var Lz=$rt_checkLowerBound;var LA=$rt_wrapFunction0;var LB=$rt_wrapFunction1;var LC=$rt_wrapFunction2;var LD=$rt_wrapFunction3;var LE=$rt_wrapFunction4;var E=$rt_classWithoutFields;var LF
=$rt_createArrayFromData;var K$=$rt_createCharArrayFromData;var LG=$rt_createByteArrayFromData;var Ko=$rt_createShortArrayFromData;var JH=$rt_createIntArrayFromData;var LH=$rt_createBooleanArrayFromData;var LI=$rt_createFloatArrayFromData;var LJ=$rt_createDoubleArrayFromData;var Fp=$rt_createLongArrayFromData;var LK=$rt_createBooleanArray;var FG=$rt_createByteArray;var LL=$rt_createShortArray;var Bw=$rt_createCharArray;var Kj=$rt_createIntArray;var LM=$rt_createLongArray;var LN=$rt_createFloatArray;var Ia=$rt_createDoubleArray;var C3
=$rt_compare;var LO=$rt_castToClass;var LP=$rt_castToInterface;var LQ=$rt_equalDoubles;var LR=Long_toNumber;var J=Long_fromInt;var LS=Long_fromNumber;var B=Long_create;var Bc=Long_ZERO;var LT=Long_hi;var Gg=Long_lo;
function C(){this.c=null;this.$id$=0;}
function LU(){var a=new C();It(a);return a;}
function Ll(b){var c,d;if(b.c===null)DY(b);c=b.c;d=c.e;if(d===null)c.e=Bu();else if(d!==Bu()){c=new Cv;L(c,D(0));F(c);}b=b.c;b.g=b.g+1|0;}
function Lf(b){var c,d;if(!Ck(b)&&b.c.e===Bu()){c=b.c;d=c.g-1|0;c.g=d;if(!d)c.e=null;Ck(b);return;}b=new Dd;G(b);F(b);}
function K8(b){var c;if(b.c===null)DY(b);c=b.c;if(c.e===null)c.e=Bu();if(b.c.e!==Bu())IO(b,1);else{b=b.c;b.g=b.g+1|0;}}
function DY(b){b.c=Ld();}
function Lj(b,c,d){var e,f,g;e=Bu();f=b.c;if(f===null){DY(b);Du(e);b=b.c;b.g=b.g+c|0;DH(d,null);return;}if(f.e===null){f.e=e;Du(e);b=b.c;b.g=b.g+c|0;DH(d,null);return;}if(f.r===null)f.r=Ke();f=f.r;g=new Eb;g.cn=e;g.co=b;g.cl=c;g.cm=d;d=g;f.push(d);}
function La(b){var c,d;if(!Ck(b)&&b.c.e===Bu()){c=b.c;d=c.g-1|0;c.g=d;if(d<=0){c.e=null;c=c.r;if(c!==null&&!DO(c)){c=new Fx;c.cQ=b;Ij(c,0);}else Ck(b);}return;}b=new Dd;G(b);F(b);}
function Ck(a){var b,c;b=a.c;if(b===null)return 1;a:{if(b.e===null){c=b.r;if(!(c!==null&&!DO(c))){b=b.er;if(b===null)break a;if(DO(b))break a;}}return 0;}a.c=null;return 1;}
function It(a){}
function BW(a){return B9(a.constructor);}
function KB(a){return D7(a);}
function Il(a,b){return a!==b?0:1;}
function JZ(a){var b,c,d,e,f,g,h,i,j;b=D7(a);if(!b)c=D(1);else{if(!b)d=32;else{e=0;d=b>>>16|0;if(d)e=16;else d=b;f=d>>>8|0;if(!f)f=d;else e=e|8;d=f>>>4|0;if(!d)d=f;else e=e|4;f=d>>>2|0;if(!f)f=d;else e=e|2;if(f>>>1|0)e=e|1;d=(32-e|0)-1|0;}d=(((32-d|0)+4|0)-1|0)/4|0;g=Bw(d);h=g.data;e=(d-1|0)*4|0;f=0;while(e>=0){i=f+1|0;h[f]=DI((b>>>e|0)&15,16);e=e-4|0;f=i;}c=KP(g);}j=new M;N(j);V(V(j,D(2)),c);return P(j);}
function D7(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function Kx(a){var b,c,d;if(!Ee(a,BO)&&a.constructor.$meta.item===null){b=new D2;G(b);F(b);}b=Iq(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function IO(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.d4=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.ew=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=Lo(callback);thread.suspend(function(){try{Lj(b,c,callback);}catch($e){callback.ew($rt_exception($e));}});return null;}
var Gv=E();
function LV(){var a=new Gv();Ju(a);return a;}
function Ju(a){}
function Lp(b){var c,d,e,f,g,h,i,j,k,l,m,n;Go();GK();Gh();Gi();Hy();Gj();HG();Gb();HM();GT();GU();Hr();HE();GB();c=Li();d=KN();Eg(d);e=d.da;if(e!==null&&DB(e)<0){c=new R;L(c,D(3));F(c);}a:{if(Fk(c)){d=c.dk;if(d!==null){if(e!==null){b:{if(Eq(e)<Eq(d))f=0;else if(BR(e)<BR(d))f=0;else{f=0;g=0;c:{d:while(true){if(f>=BR(d))break c;if(f==DB(d)){f=f+1|0;if(f>=BR(d))break c;}if(g==DB(e))g=g+1|0;e:{if((BD(d,f)).bJ){if(!(BD(e,g)).bJ){f=0;break b;}if(Da(BD(e,g))>=Da(BD(d,f)))break e;else{f=0;break b;}}if(!LW&&!(BD(d,f)).bu)break d;if
(!(BD(e,g)).bu){f=0;break b;}}f=f+1|0;g=g+1|0;}c=new E1;G(c);F(c);}f=1;}}if(f)break a;}d=new R;L(d,D(4));F(d);}}}c.dk=e;Eg(c);if(LX===null){d=new Eu;d.dw=LY;c=new M;N(c);d.bn=c;d.dz=Bw(32);d.eD=0;IM();d.dl=LZ;LX=d;}h=LX;c=h.bn;DQ(c,c.d,D(5));Bn(c,10);c=h.bn;i=c.d;b=h.dz;if(i>b.data.length)b=Bw(i);g=0;f=0;if(g>i){c=new Bb;L(c,D(6));F(c);}while(g<i){j=b.data;k=f+1|0;l=c.b.data;m=g+1|0;j[f]=l[g];f=k;g=m;}l=b.data;g=i-0|0;n=new E4;k=l.length;i=0+g|0;Ea(n,k);n.h=0;n.o=i;n.cC=0;n.eS=0;n.dq=b;b=FG(BF(16,BS(g,1024)));g
=b.data.length;e=new ES;i=0+g|0;Ea(e,g);J1();e.e3=L0;e.c5=0;e.cM=b;e.h=0;e.o=i;e.dL=0;e.cD=0;c=Hh(h.dl);EW();c=G9(F8(c,L1),L1);while(true){f=Df(G2(c,n,e,1));Ex(h,b,0,EO(e));E0(e);if(!f)break;}while(true){f=Df(Gr(c,e));Ex(h,b,0,EO(e));E0(e);if(!f)break;}HP(h.bn,0);}
var Cu=E(0);
var D3=E(0);
function Cz(){var a=this;C.call(a);a.bw=null;a.f=null;a.R=null;a.bQ=null;}
var L2=0;function B9(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Cz;c.f=b;d=c;b.classObject=d;}return c;}
function CT(a,b){var c;b=b;c=a.f;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&EJ(b.constructor,c)?1:0;}
function Ei(a,b){return EJ(b.f,a.f);}
function CN(a){if(a.bw===null)a.bw=$rt_str(a.f.$meta.name);return a.bw;}
function BT(a){return a.f.$meta.primitive?1:0;}
function E6(a){return Hs(a.f)===null?0:1;}
function Cq(a){return B9(Hs(a.f));}
function Kk(){HC.$meta.fields=[{name:"modelRandomSeedOption",modifiers:0,accessLevel:3,type:Hz,getter:null,setter:null},{name:"instanceRandomSeedOption",modifiers:0,accessLevel:3,type:Hz,getter:null,setter:null},{name:"numClassesOption",modifiers:0,accessLevel:3,type:Hz,getter:null,setter:null},{name:"numAttsOption",modifiers:0,accessLevel:3,type:Hz,getter:null,setter:null},{name:"numCentroidsOption",modifiers:0,accessLevel:3,type:Hz,getter:null,setter:null},{name:"streamHeader",modifiers:0,accessLevel:2,type
:FB,getter:null,setter:null},{name:"centroids",modifiers:0,accessLevel:2,type:$rt_arraycls(DR),getter:null,setter:null},{name:"centroidWeights",modifiers:0,accessLevel:2,type:$rt_arraycls($rt_doublecls()),getter:null,setter:null},{name:"instanceRandom",modifiers:0,accessLevel:2,type:C9,getter:null,setter:null}];HI.$meta.fields=[{name:"maxByteSizeOption",modifiers:0,accessLevel:3,type:Hz,getter:null,setter:null},{name:"numericEstimatorOption",modifiers:0,accessLevel:3,type:FF,getter:null,setter:null},{name:"nominalEstimatorOption",modifiers
:0,accessLevel:3,type:FF,getter:null,setter:null},{name:"memoryEstimatePeriodOption",modifiers:0,accessLevel:3,type:Hz,getter:null,setter:null},{name:"gracePeriodOption",modifiers:0,accessLevel:3,type:Hz,getter:null,setter:null},{name:"splitCriterionOption",modifiers:0,accessLevel:3,type:FF,getter:null,setter:null},{name:"splitConfidenceOption",modifiers:0,accessLevel:3,type:Hj,getter:null,setter:null},{name:"tieThresholdOption",modifiers:0,accessLevel:3,type:Hj,getter:null,setter:null},{name:"binarySplitsOption",modifiers
:0,accessLevel:3,type:C5,getter:null,setter:null},{name:"stopMemManagementOption",modifiers:0,accessLevel:3,type:C5,getter:null,setter:null},{name:"removePoorAttsOption",modifiers:0,accessLevel:3,type:C5,getter:null,setter:null},{name:"noPrePruneOption",modifiers:0,accessLevel:3,type:C5,getter:null,setter:null},{name:"treeRoot",modifiers:0,accessLevel:2,type:G_,getter:null,setter:null},{name:"decisionNodeCount",modifiers:0,accessLevel:2,type:$rt_intcls(),getter:null,setter:null},{name:"activeLeafNodeCount",modifiers
:0,accessLevel:2,type:$rt_intcls(),getter:null,setter:null},{name:"inactiveLeafNodeCount",modifiers:0,accessLevel:2,type:$rt_intcls(),getter:null,setter:null},{name:"inactiveLeafByteSizeEstimate",modifiers:0,accessLevel:2,type:$rt_doublecls(),getter:null,setter:null},{name:"activeLeafByteSizeEstimate",modifiers:0,accessLevel:2,type:$rt_doublecls(),getter:null,setter:null},{name:"byteSizeEstimateOverheadFraction",modifiers:0,accessLevel:2,type:$rt_doublecls(),getter:null,setter:null},{name:"growthAllowed",modifiers
:0,accessLevel:2,type:$rt_booleancls(),getter:null,setter:null},{name:"leafpredictionOption",modifiers:0,accessLevel:3,type:E9,getter:null,setter:null},{name:"nbThresholdOption",modifiers:0,accessLevel:3,type:Hz,getter:null,setter:null}];}
function HF(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(!(Cw(d.cz,b,d)!==null?0:1))return;if(!BT(b)&&!E6(b)){a:{if(b.R===null){if(!L2){L2=1;Kk();}e=b.f.$meta.fields;b.R=X(BZ,e.length);f=0;while(true){if(f>=e.length)break a;g=e[f];h=g===null?null:!(g instanceof $rt_objcls())?g:DJ(g);i=b.R.data;g=new BZ;j=$rt_str(h.name);k=h.modifiers;l=h.accessLevel;m=B9(h.type);n=GZ(h.getter,"get");o=GZ(h.setter,"set");g.dr=b;g.d8=j;g.bC=k;g.cA=l;g.c$=m;g.bE=n;g.eE=o;i[f]=g;f=f+1|0;}}}i=b.R.k();}else i=X(BZ,0);i=i.data;k=i.length;l
=0;while(l<k){g=i[l];if(FY(D1(g)))Cb(c,g);l=l+1|0;}i=(G3(b)).data;f=i.length;k=0;while(k<f){HF(i[k],c,d);k=k+1|0;}}
function HS(a){return B9(a.f.$meta.superclass);}
function G3(a){var b,c,d,e,f,g;b=a.f.$meta.supertypes;c=X(Cz,b.length);d=c.data;e=0;f=0;while(f<b.length){if(b[f]!==a.f.$meta.superclass){g=e+1|0;d[e]=B9(b[f]);e=g;}f=f+1|0;}if(d.length>e)c=Fb(c,e);return c;}
function HD(b){var c;c=Jp(b);if(c!==null)return B9(c);b=new F2;G(b);F(b);}
function Hm(a){var b;b=a.f;if(!L3){JU();L3=1;}b=Kr(b);if(b!==null)return b;b=new EK;G(b);F(b);}
function CD(a){var b,c,d,e;b=CN(a);c=BS(K(b)-1|0,K(b)-1|0);a:{while(true){if(c<0){c=(-1);break a;}if(b.i.data[c]==46)break;c=c+(-1)|0;}}b=Bd(b,0,c+1|0);d=L4;if(b===null)d=FW(d);else{e=B$(b);d=Eh(d,b,e&(d.j.data.length-1|0),e);}d=d===null?null:d.x;if(d===null){d=new Dg;d.N=b;Cw(L4,b,d);}return d;}
var HN=E();
function L5(){var a=new HN();Ky(a);return a;}
function Ky(a){}
function Gn(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function GZ(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Fi=E();
var L3=0;function L6(){var a=new Fi();Kh(a);return a;}
function Kh(a){}
function Iq(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function EJ(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(EJ(d[e],c))return 1;e=e+1|0;}return 0;}
function JU(){var c='$$constructor$$';Bm[c]=Gs;C[c]=It;G5[c]=Jh;GY[c]=Jl;GL[c]=IH;S[c]=IL;Hv[c]=Jq;M[c]=JY;B7[c]=Ks;Bf[c]=J2;Gv[c]=Ju;HN[c]=Ky;Fi[c]=Kh;BL[c]=G;Ci[c]=Id;BE[c]=Ka;De[c]=N;F6[c]=JG;Dn[c]=JV;Bb[c]=J7;BP[c]=J_;CB[c]=IF;H2[c]=IT;GF[c]=KH;Dr[c]=IK;HI[c]=Iv;HC[c]=II;R[c]=JO;E3[c]=Ha;D2[c]=JR;FP[c]=Hg;Er[c]=KG;FB[c]=Kg;Cn[c]=JI;E1[c]=I6;CM[c]=KJ;G$[c]=I$;F9[c]=IC;Be[c]=Ja;Fe[c]=Jb;G0[c]=Jg;CH[c]=KK;GA[c]=JB;F7[c]=Jw;F2[c]=KC;DA[c]=F_;Dy[c]=Gc;BH[c]=IQ;CJ[c]=GW;Fz[c]=Js;GX[c]=J4;HZ[c]=Is;Hq[c]=I1;GQ[c]
=Je;GV[c]=Ji;EK[c]=Kz;Gt[c]=Iw;DS[c]=JC;C9[c]=In;DR[c]=Iz;Dk[c]=C7;C8[c]=Jz;Do[c]=Jv;Cv[c]=Im;BX[c]=GC;E2[c]=JT;DV[c]=H_;Cy[c]=Ii;CW[c]=Jd;Fc[c]=ID;Dv[c]=IE;FV[c]=IJ;FK[c]=J5;EQ[c]=I0;Em[c]=Jr;Gm[c]=IS;C_[c]=Kn;EM[c]=H4;E$[c]=Hc;DE[c]=Jm;B_[c]=CF;Ed[c]=Kq;Ec[c]=JQ;Dd[c]=H9;Fv[c]=Ib;Fw[c]=J$;HK[c]=KD;BA[c]=HL;FO[c]=JA;H5[c]=J6;H3[c]=Jk;GI[c]=Ie;}
function Kr(b){if($rt_resuming()){var $r = $rt_nativeThread().pop();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}if(!b.hasOwnProperty('$$constructor$$')){return null;}var $r=new b();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}
function Jp(b){switch ($rt_ustr(b)) {case "edu.uow.Client": Gv.$clinit(); return Gv;case "java.lang.Object": C.$clinit(); return C;case "java.lang.Class": Cz.$clinit(); return Cz;case "java.lang.reflect.AnnotatedElement": Cu.$clinit(); return Cu;case "java.lang.reflect.Type": D3.$clinit(); return D3;case "org.teavm.jso.impl.JS": HN.$clinit(); return HN;case "org.teavm.platform.Platform": Fi.$clinit(); return Fi;case "java.lang.ClassCastException": Hv.$clinit(); return Hv;case "java.lang.RuntimeException": S.$clinit(); return S;case "java.lang.Exception": Bf.$clinit(); return Bf;case "java.lang.Throwable": BL.$clinit(); return BL;case "java.lang.String": Bm.$clinit(); return Bm;case "java.io.Serializable": Y.$clinit(); return Y;case "java.lang.Comparable": Bq.$clinit(); return Bq;case "java.lang.CharSequence": CC.$clinit(); return CC;case "java.lang.NoClassDefFoundError": G5.$clinit(); return G5;case "java.lang.LinkageError": Ci.$clinit(); return Ci;case "java.lang.Error": BE.$clinit(); return BE;case "java.lang.Integer": Cr.$clinit(); return Cr;case "java.lang.Number": BM.$clinit(); return BM;case "java.lang.StringBuilder": M.$clinit(); return M;case "java.lang.AbstractStringBuilder": De.$clinit(); return De;case "java.lang.Appendable": Di.$clinit(); return Di;case "java.lang.NoSuchFieldError": GY.$clinit(); return GY;case "java.lang.IncompatibleClassChangeError": B7.$clinit(); return B7;case "java.lang.NoSuchMethodError": GL.$clinit(); return GL;case "java.lang.System": Dn.$clinit(); return Dn;case "org.teavm.classlib.impl.IntegerUtil": H2.$clinit(); return H2;case "java.lang.String$<clinit>$lambda$_93_0": F6.$clinit(); return F6;case "java.util.Comparator": Fh.$clinit(); return Fh;case "java.lang.IndexOutOfBoundsException": Bb.$clinit(); return Bb;case "java.lang.reflect.Array": GF.$clinit(); return GF;case "java.lang.NullPointerException": BP.$clinit(); return BP;case "java.lang.ArrayStoreException": CB.$clinit(); return CB;case "java.lang.Character": B0.$clinit(); return B0;case "java.lang.StringIndexOutOfBoundsException": Dr.$clinit(); return Dr;case "moa.classifiers.trees.HoeffdingTree": HI.$clinit(); return HI;case "moa.classifiers.AbstractClassifier": Cx.$clinit(); return Cx;case "moa.options.AbstractOptionHandler": B6.$clinit(); return B6;case "moa.core.AbstractMOAObject": B4.$clinit(); return B4;case "moa.core.MOAObject": BY.$clinit(); return BY;case "moa.options.OptionHandler": BJ.$clinit(); return BJ;case "com.github.javacliparser.Configurable": Fj.$clinit(); return Fj;case "moa.classifiers.Classifier": E8.$clinit(); return E8;case "moa.learners.Learner": Eo.$clinit(); return Eo;case "moa.capabilities.CapabilitiesHandler": Cd.$clinit(); return Cd;case "moa.classifiers.MultiClassClassifier": Fq.$clinit(); return Fq;case "moa.streams.generators.RandomRBFGenerator": HC.$clinit(); return HC;case "moa.streams.InstanceStream": CI.$clinit(); return CI;case "com.github.javacliparser.IntOption": Hz.$clinit(); return Hz;case "com.github.javacliparser.AbstractOption": Bk.$clinit(); return Bk;case "com.github.javacliparser.Option": Cl.$clinit(); return Cl;case "moa.options.ClassOption": FF.$clinit(); return FF;case "moa.options.AbstractClassOption": C0.$clinit(); return C0;case "moa.classifiers.core.attributeclassobservers.NumericAttributeClassObserver": Ek.$clinit(); return Ek;case "moa.classifiers.core.attributeclassobservers.AttributeClassObserver": Db.$clinit(); return Db;case "moa.classifiers.core.attributeclassobservers.DiscreteAttributeClassObserver": FA.$clinit(); return FA;case "moa.classifiers.core.splitcriteria.SplitCriterion": D6.$clinit(); return D6;case "com.github.javacliparser.FloatOption": Hj.$clinit(); return Hj;case "com.github.javacliparser.FlagOption": C5.$clinit(); return C5;case "com.github.javacliparser.MultiChoiceOption": E9.$clinit(); return E9;case "java.io.PrintStream": Eu.$clinit(); return Eu;case "java.io.FilterOutputStream": Dc.$clinit(); return Dc;case "java.io.OutputStream": Cf.$clinit(); return Cf;case "java.io.Closeable": Ep.$clinit(); return Ep;case "java.lang.AutoCloseable": FD.$clinit(); return FD;case "java.io.Flushable": Fo.$clinit(); return Fo;case "org.teavm.classlib.impl.console.StdoutOutputStream": E3.$clinit(); return E3;case "org.teavm.classlib.impl.console.ConsoleOutputStream": CS.$clinit(); return CS;case "java.lang.IllegalArgumentException": R.$clinit(); return R;case "java.nio.charset.impl.UTF8Charset": FP.$clinit(); return FP;case "java.nio.charset.Charset": C6.$clinit(); return C6;case "java.lang.Cloneable": BO.$clinit(); return BO;case "java.lang.CloneNotSupportedException": D2.$clinit(); return D2;case "java.nio.charset.IllegalCharsetNameException": H1.$clinit(); return H1;case "moa.tasks.NullMonitor": Er.$clinit(); return Er;case "moa.tasks.TaskMonitor": FN.$clinit(); return FN;case "com.yahoo.labs.samoa.instances.Instances": CM.$clinit(); return CM;case "java.lang.AssertionError": E1.$clinit(); return E1;case "java.nio.CharBuffer": C4.$clinit(); return C4;case "java.nio.Buffer": B8.$clinit(); return B8;case "java.lang.Readable": F0.$clinit(); return F0;case "java.lang.Math": G$.$clinit(); return G$;case "java.nio.ByteBuffer": DG.$clinit(); return DG;case "java.nio.charset.CodingErrorAction": Cm.$clinit(); return Cm;case "com.yahoo.labs.samoa.instances.Attribute": Cn.$clinit(); return Cn;case "java.nio.CharBufferOverArray": E4.$clinit(); return E4;case "java.nio.CharBufferImpl": CU.$clinit(); return CU;case "java.nio.charset.CharsetEncoder": CR.$clinit(); return CR;case "java.nio.charset.CoderResult": C1.$clinit(); return C1;case "java.nio.ByteBufferImpl": ES.$clinit(); return ES;case "java.nio.ByteOrder": Dl.$clinit(); return Dl;case "moa.options.OptionsHandler": Gl.$clinit(); return Gl;case "com.github.javacliparser.JavaCLIParser": CV.$clinit(); return CV;case "java.lang.NumberFormatException": Be.$clinit(); return Be;case "java.nio.charset.impl.UTF8Encoder": F3.$clinit(); return F3;case "java.nio.charset.impl.BufferedEncoder": DT.$clinit(); return DT;case "java.io.IOException": Fe.$clinit(); return Fe;case "java.lang.Double": DW.$clinit(); return DW;case "java.io.File": B1.$clinit(); return B1;case "java.util.Arrays": G0.$clinit(); return G0;case "moa.tasks.Task": DM.$clinit(); return DM;case "com.github.javacliparser.Options": F9.$clinit(); return F9;case "java.util.Objects": GA.$clinit(); return GA;case "java.lang.Package": Dg.$clinit(); return Dg;case "java.util.LinkedList": CH.$clinit(); return CH;case "java.util.AbstractSequentialList": Dh.$clinit(); return Dh;case "java.util.AbstractList": Ce.$clinit(); return Ce;case "java.util.AbstractCollection": B2.$clinit(); return B2;case "java.util.Collection": Cc.$clinit(); return Cc;case "java.lang.Iterable": Ef.$clinit(); return Ef;case "java.util.List": D$.$clinit(); return D$;case "java.util.SequencedCollection": DK.$clinit(); return DK;case "java.util.Deque": Fs.$clinit(); return Fs;case "java.util.Queue": D4.$clinit(); return D4;case "org.teavm.classlib.impl.text.DoubleSynthesizer": DA.$clinit(); return DA;case "java.lang.Long": FR.$clinit(); return FR;case "java.lang.NegativeArraySizeException": F7.$clinit(); return F7;case "java.lang.ClassNotFoundException": F2.$clinit(); return F2;case "java.lang.ReflectiveOperationException": BH.$clinit(); return BH;case "org.teavm.classlib.impl.text.DoubleAnalyzer": CJ.$clinit(); return CJ;case "org.teavm.runtime.fs.VirtualFileSystemProvider": Fz.$clinit(); return Fz;case "java.util.HashMap": Dy.$clinit(); return Dy;case "java.util.AbstractMap": DC.$clinit(); return DC;case "java.util.Map": Cs.$clinit(); return Cs;case "org.teavm.runtime.fs.memory.InMemoryVirtualFileSystem": GX.$clinit(); return GX;case "org.teavm.runtime.fs.VirtualFileSystem": Ez.$clinit(); return Ez;case "org.teavm.platform.plugin.ResourceAccessor": HZ.$clinit(); return HZ;case "org.teavm.classlib.impl.unicode.UnicodeHelper": Hq.$clinit(); return Hq;case "org.teavm.runtime.fs.memory.InMemoryVirtualDirectory": Fa.$clinit(); return Fa;case "org.teavm.runtime.fs.memory.AbstractInMemoryVirtualFile": DU.$clinit(); return DU;case "org.teavm.classlib.impl.CharFlow": FU.$clinit(); return FU;case "org.teavm.classlib.impl.Base46": GV.$clinit(); return GV;case "java.util.LinkedHashMap": GQ.$clinit(); return GQ;case "java.util.SequencedMap": Ey.$clinit(); return Ey;case "java.lang.InstantiationException": EK.$clinit(); return EK;case "java.util.LinkedHashMap$LinkedHashMapEntry": EC.$clinit(); return EC;case "java.util.HashMap$HashEntry": BQ.$clinit(); return BQ;case "java.util.MapEntry": Ch.$clinit(); return Ch;case "java.util.Map$Entry": D0.$clinit(); return D0;case "org.teavm.classlib.impl.console.Console": Gt.$clinit(); return Gt;case "moa.core.FastVector": DS.$clinit(); return DS;case "java.util.ArrayList": Dk.$clinit(); return Dk;case "java.util.RandomAccess": E5.$clinit(); return E5;case "com.yahoo.labs.samoa.instances.InstancesHeader": FB.$clinit(); return FB;case "java.util.Random": C9.$clinit(); return C9;case "java.util.random.RandomGenerator": Fl.$clinit(); return Fl;case "moa.streams.generators.RandomRBFGenerator$Centroid": DR.$clinit(); return DR;case "com.yahoo.labs.samoa.instances.InstanceInformation": C8.$clinit(); return C8;case "com.yahoo.labs.samoa.instances.AttributesInformation": Do.$clinit(); return Do;case "java.lang.IllegalStateException": Cv.$clinit(); return Cv;case "java.nio.charset.CoderMalfunctionError": EU.$clinit(); return EU;case "java.lang.AbstractStringBuilder$Constants": BX.$clinit(); return BX;case "org.teavm.classlib.impl.text.DoubleAnalyzer$Result": E2.$clinit(); return E2;case "org.teavm.classlib.impl.text.FloatAnalyzer$Result": DV.$clinit(); return DV;case "java.lang.UnsupportedOperationException": Cy.$clinit(); return Cy;case "java.nio.charset.impl.BufferedEncoder$Controller": EL.$clinit(); return EL;case "java.lang.IllegalAccessException": CW.$clinit(); return CW;case "java.util.LinkedList$SequentialListIterator": Gf.$clinit(); return Gf;case "java.util.ListIterator": FX.$clinit(); return FX;case "java.util.Iterator": CP.$clinit(); return CP;case "java.util.LinkedList$Entry": Fc.$clinit(); return Fc;case "java.lang.reflect.Field": BZ.$clinit(); return BZ;case "java.lang.reflect.AccessibleObject": Dv.$clinit(); return Dv;case "java.lang.reflect.Member": Fg.$clinit(); return Fg;case "java.util.NoSuchElementException": FV.$clinit(); return FV;case "com.github.javacliparser.StringUtils": EM.$clinit(); return EM;case "java.nio.ReadOnlyBufferException": FK.$clinit(); return FK;case "java.nio.BufferOverflowException": EQ.$clinit(); return EQ;case "java.nio.BufferUnderflowException": Em.$clinit(); return Em;case "java.util.HashSet": Gm.$clinit(); return Gm;case "java.util.AbstractSet": CZ.$clinit(); return CZ;case "java.util.Set": FC.$clinit(); return FC;case "java.lang.reflect.Modifier": E$.$clinit(); return E$;case "java.util.ConcurrentModificationException": C_.$clinit(); return C_;case "java.util.Properties": DE.$clinit(); return DE;case "java.util.Hashtable": B_.$clinit(); return B_;case "java.util.Dictionary": Dm.$clinit(); return Dm;case "java.util.Hashtable$1": Ed.$clinit(); return Ed;case "java.util.Enumeration": EF.$clinit(); return EF;case "java.util.Hashtable$2": Ec.$clinit(); return Ec;case "java.util.Hashtable$Entry": CQ.$clinit(); return CQ;case "moa.classifiers.trees.HoeffdingTree$Node": G_.$clinit(); return G_;case "java.util.AbstractList$1": ED.$clinit(); return ED;case "org.teavm.jso.impl.JSWrapper": BN.$clinit(); return BN;case "java.lang.Object$Monitor": HK.$clinit(); return HK;case "java.lang.Thread": BA.$clinit(); return BA;case "java.lang.Runnable": EP.$clinit(); return EP;case "java.lang.IllegalMonitorStateException": Dd.$clinit(); return Dd;case "org.teavm.jso.core.JSWeakMap": Hk.$clinit(); return Hk;case "org.teavm.jso.JSObject": Bz.$clinit(); return Bz;case "org.teavm.jso.core.JSWeakRef": GH.$clinit(); return GH;case "org.teavm.jso.core.JSMap": HY.$clinit(); return HY;case "org.teavm.jso.impl.JSWrapper$<clinit>$lambda$_29_0": Fv.$clinit(); return Fv;case "org.teavm.jso.core.JSFinalizationRegistryConsumer": DL.$clinit(); return DL;case "org.teavm.jso.core.JSFinalizationRegistry": G4.$clinit(); return G4;case "org.teavm.jso.impl.JSWrapper$<clinit>$lambda$_29_1": Fw.$clinit(); return Fw;case "org.teavm.platform.PlatformQueue": Gw.$clinit(); return Gw;case "java.lang.Object$monitorExit$lambda$_8_0": Fx.$clinit(); return Fx;case "org.teavm.platform.PlatformRunnable": Dx.$clinit(); return Dx;case "java.lang.DefaultUncaughtExceptionHandler": FO.$clinit(); return FO;case "java.lang.Thread$UncaughtExceptionHandler": El.$clinit(); return El;case "org.teavm.platform.plugin.AsyncCallbackWrapper": EX.$clinit(); return EX;case "org.teavm.interop.AsyncCallback": Ff.$clinit(); return Ff;case "java.lang.Object$monitorEnterWait$lambda$_6_0": Eb.$clinit(); return Eb;case "org.teavm.jso.core.JSObjects": H5.$clinit(); return H5;case "org.teavm.classlib.impl.reflection.Flags": H3.$clinit(); return H3;case "org.teavm.classlib.impl.reflection.Converter": GI.$clinit(); return GI;default: return null;}}
function K4(b){var c,d,e;b=b.cQ;if(!Ck(b)){c=b.c;if(c.e===null){b=c.r;if(b!==null&&!DO(b)){b=c.r.shift();Dq();if(b!==null&&!(b instanceof $rt_objcls()))b=FE(b);d=b;c.r=null;b=d.cn;c=d.co;e=d.cl;d=d.cm;Du(b);c=c.c;c.e=b;c.g=c.g+e|0;DH(d,null);}}}}
function Ij(b,c){return setTimeout(function(){K4(b);},c);}
function Hs(b){return b.$meta.item;}
function Ke(){return [];}
function BL(){var a=this;C.call(a);a.b$=null;a.b8=null;a.bp=0;a.bs=0;}
function L7(){var a=new BL();G(a);return a;}
function L8(a){var b=new BL();L(b,a);return b;}
function G(a){a.bp=1;a.bs=1;}
function L(a,b){a.bp=1;a.bs=1;a.b$=b;}
function IG(a){return a;}
function KE(a){return a.b$;}
function KI(a){var b;b=a.b8;if(b===a)b=null;return b;}
var Bf=E(BL);
function L9(){var a=new Bf();J2(a);return a;}
function KQ(a,b){var c=new Bf();EB(c,a,b);return c;}
function J2(a){G(a);}
function EB(a,b,c){a.bp=1;a.bs=1;a.b$=b;a.b8=c;}
var S=E(Bf);
function L$(){var a=new S();IL(a);return a;}
function Lt(a){var b=new S();Jt(b,a);return b;}
function IL(a){G(a);}
function Jt(a,b){L(a,b);}
var Hv=E(S);
function Lu(){var a=new Hv();Jq(a);return a;}
function Jq(a){G(a);}
var Y=E(0);
var Bq=E(0);
var CC=E(0);
function Bm(){var a=this;C.call(a);a.i=null;a.ba=0;}
var L_=null;var Ma=null;var Mb=null;function CO(){CO=Z(Bm);I_();}
function K2(){var a=new Bm();Gs(a);return a;}
function KP(a){var b=new Bm();Ej(b,a);return b;}
function HB(a,b,c){var d=new Bm();F4(d,a,b,c);return d;}
function Gs(a){CO();a.i=L_;}
function Ej(a,b){CO();F4(a,b,0,b.data.length);}
function F4(a,b,c,d){var e,f,g,h,i,j,k,l;CO();e=Bw(d);a.i=e;if(b===null){f=new BP;L(f,D(7));F(f);}if(c>=0&&d>=0&&(c+d|0)<=Dt(b)&&(0+d|0)<=Dt(e)){a:{b:{c:{if(b!==e){g=Cq(BW(b));f=Cq(BW(e));if(g!==null&&f!==null){if(g===f)break c;if(!BT(g)&&!BT(f)){h=b;i=0;j=c;while(i<d){k=h.data;l=j+1|0;if(!CT(f,k[j])){DF(b,c,e,0,i);g=new CB;G(g);F(g);}i=i+1|0;j=l;}DF(b,c,e,0,d);break a;}if(!BT(g))break b;if(BT(f))break c;else break b;}g=new CB;G(g);F(g);}}DF(b,c,e,0,d);break a;}g=new CB;G(g);F(g);}return;}g=new Bb;G(g);F(g);}
function Q(a,b){var c,d;if(b>=0){c=a.i.data;if(b<c.length)return c[b];}d=new Dr;G(d);F(d);}
function K(a){return a.i.data.length;}
function Dz(a){return a.i.data.length?0:1;}
function BK(a,b){var c,d,e,f;if(a===b)return 1;a:{c=0;if((c+K(b)|0)>K(a))c=0;else{d=0;while(d<K(b)){e=Q(b,d);f=c+1|0;if(e!=Q(a,c)){c=0;break a;}d=d+1|0;c=f;}c=1;}}return c;}
function CA(a,b,c){var d,e,f,g,h;d=BF(0,c);if(b<65536){e=b&65535;while(true){f=a.i.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=HX(b);h=GR(b);while(true){f=a.i.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function B3(a,b,c){var d,e,f;d=BF(0,c);e=K(a)-K(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=K(b))break a;if(Q(a,d+f|0)!=Q(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function Bd(a,b,c){var d,e;d=C3(b,c);if(d>0){e=new Bb;G(e);F(e);}if(!d){CO();return Ma;}if(!b&&c==K(a))return a;return HB(a.i,b,c-b|0);}
function CE(a,b){return Bd(a,b,K(a));}
function Bt(a){var b,c;b=0;c=K(a)-1|0;a:{while(b<=c){if(Q(a,b)>32)break a;b=b+1|0;}}while(b<=c&&Q(a,c)<=32){c=c+(-1)|0;}return Bd(a,b,c+1|0);}
function Ft(a){var b,c,d,e,f;b=a.i.data;c=Bw(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function DP(b){CO();if(b===null)b=D(8);return b;}
function FH(b){var c,d;CO();c=new Bm;d=Bw(1);d.data[0]=b;Ej(c,d);return c;}
function BC(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bm))return 0;c=b;if(K(c)!=K(a))return 0;d=0;while(d<K(c)){if(Q(a,d)!=Q(c,d))return 0;d=d+1|0;}return 1;}
function B$(a){var b,c,d,e;a:{if(!a.ba){b=a.i.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.ba=(31*a.ba|0)+e|0;d=d+1|0;}}}return a.ba;}
function I_(){L_=Bw(0);Ma=K2();Mb=new F6;}
var BE=E(BL);
function Mc(){var a=new BE();Ka(a);return a;}
function Ka(a){G(a);}
var Ci=E(BE);
function Md(){var a=new Ci();Id(a);return a;}
function Id(a){G(a);}
var G5=E(Ci);
function Me(){var a=new G5();Jh(a);return a;}
function Jh(a){G(a);}
var BM=E();
function Cr(){BM.call(this);this.eJ=0;}
var Mf=null;var Mg=null;function IX(a){var b=new Cr();F$(b,a);return b;}
function F$(a,b){a.eJ=b;}
function F1(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;if(b===null){b=new Be;L(b,D(9));F(b);}c=K(b);if(0==c){b=new Be;L(b,D(10));F(b);}a:{d=0;switch(Q(b,0)){case 43:break;case 45:d=1;e=1;break a;default:e=0;break a;}e=1;}f=0;if(e==c){b=new Be;G(b);F(b);}b:{c:{while(e<c){g=e+1|0;h=Q(b,e);if(Mh===null){if(Mi===null)Mi=G6();i=(Mi.value!==null?$rt_str(Mi.value):null);j=new FU;j.dd=Ft(i);k=Hn(j);l=Kj(k*2|0);m=l.data;n=0;o=0;p=0;q=0;while(q<k){o=o+Gy(j)|0;p=p+Gy(j)|0;r=n+1|0;m[n]=o;n=r+1|0;m[r]=p;q=q+1|0;}Mh=l;}m=Mh.data;o
=0;p=(m.length/2|0)-1|0;d:{while(p>=o){e=(o+p|0)/2|0;k=e*2|0;n=C3(h,m[k]);if(n>0)o=e+1|0;else{if(n>=0){k=m[k+1|0];break d;}p=e-1|0;}}k=(-1);}if(k<0){i=new Be;b=DP(Bd(b,0,c));j=new M;N(j);V(V(j,D(11)),b);L(i,P(j));F(i);}if(k>=10){i=new Be;b=DP(Bd(b,0,c));j=new M;N(j);V(V(Ba(V(j,D(12)),10),D(13)),b);L(i,P(j));F(i);}f=(10*f|0)+k|0;if(f<0){if(g!=c)break b;if(f!=(-2147483648))break b;if(!d)break b;f=(-2147483648);break c;}e=g;}if(d)f= -f|0;}return f;}i=new Be;b=DP(Bd(b,0,c));j=new M;N(j);V(V(j,D(14)),b);L(i,P(j));F(i);}
function Go(){Mf=O($rt_intcls());}
function De(){var a=this;C.call(a);a.b=null;a.d=0;}
function Mj(){var a=new De();N(a);return a;}
function K_(a){var b=new De();GE(b,a);return b;}
function N(a){GE(a,16);}
function GE(a,b){a.b=Bw(b);}
function Ew(a,b,c){return Hi(a,a.d,b,c);}
function Hi(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Bp(a,b,b+1|0);else{Bp(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=DI(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=I7(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bp(a,b,b+i|0);if(e)e=b;else{f=a.b.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.b.data;b=e+1|0;f[e]=DI($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function H6(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=C3(c,0.0);if(!d){if(1.0/c===Infinity){Bp(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bp(a,b,b+4|0);e=a.b.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Bp(a,b,b+3|0);e=a.b.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Bp(a,b,b+8|0);d=b;}else{Bp(a,b,b+9|0);e=a.b.data;d=b+1|0;e[b]=45;}e=a.b.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Mk;Hl(c,f);g=f.bz;h=f.bX;i=f.cF;j=1;k=1;if(i)k=2;l=18;m=JM(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=BF(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bp(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.b.data;k=b+1|0;e[b]=45;}p=B(1569325056, 23283064);if(o){e=a.b.data;b=k+1|0;e[k]
=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(If(p,Bc))d=0;else{d=Gg(FI(g,p));g=Ix(g,p);}e=a.b.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=FI(p,J(10));q=q+1|0;}if(h){e=a.b.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function JM(b){var c,d,e,f,g;c=J(1);d=0;e=16;f=Ml.data;g=f.length-1|0;while(g>=0){if(Bv(Ix(b,U(c,f[g])),Bc)){d=d|e;c=U(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function EY(a,b){var c,d,e,f,g;c=a.b.data.length;if(c>=b)return;d=c>=1073741823?2147483647:BF(b,BF(c*2|0,5));e=a.b.data;f=Bw(d);g=f.data;b=BS(d,e.length);c=0;while(c<b){g[c]=e[c];c=c+1|0;}a.b=f;}
function P(a){return HB(a.b,0,a.d);}
function Bp(a,b,c){var d,e,f,g;d=a.d;e=d-b|0;a.b3((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.b.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.d=a.d+(c-b|0)|0;}
var Di=E(0);
var M=E(De);
function IV(){var a=new M();JY(a);return a;}
function JY(a){N(a);}
function V(a,b){var c;c=a.d;if(b===null)b=D(8);DQ(a,c,b);return a;}
function H(a,b){DQ(a,a.d,b);return a;}
function Ba(a,b){Ew(a,b,10);return a;}
function Cj(a,b){H6(a,a.d,b);return a;}
function Bn(a,b){var c;c=a.d;Bp(a,c,c+1|0);a.b.data[c]=b;return a;}
function HP(a,b){a.d=b;}
function Dp(a){return P(a);}
function Kt(a,b){EY(a,b);}
function DQ(a,b,c){var d,e,f;if(b>=0&&b<=a.d){a:{if(c===null)c=D(8);else if(Dz(c))break a;EY(a,a.d+K(c)|0);d=a.d-1|0;while(d>=b){a.b.data[d+K(c)|0]=a.b.data[d];d=d+(-1)|0;}a.d=a.d+K(c)|0;d=0;while(d<K(c)){e=a.b.data;f=b+1|0;e[b]=Q(c,d);d=d+1|0;b=f;}}return a;}c=new Dr;G(c);F(c);}
var B7=E(Ci);
function Mm(){var a=new B7();Ks(a);return a;}
function Ks(a){G(a);}
var GY=E(B7);
function Mn(){var a=new GY();Jl(a);return a;}
function Mo(a){var b=new GY();J3(b,a);return b;}
function Jl(a){G(a);}
function J3(a,b){L(a,b);}
var GL=E(B7);
function Mp(){var a=new GL();IH(a);return a;}
function Mq(a){var b=new GL();Kf(b,a);return b;}
function IH(a){G(a);}
function Kf(a,b){L(a,b);}
var Dn=E();
var LX=null;var Mr=null;function Ms(){var a=new Dn();JV(a);return a;}
function JV(a){}
function KX(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Dt(b)&&(e+f|0)<=Dt(d)){DF(b,c,d,e,f);return;}b=new Bb;G(b);F(b);}
function DF(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Gd(){return Long_fromNumber(new Date().getTime());}
var H2=E();
function Mt(){var a=new H2();IT(a);return a;}
function IT(a){}
var Fh=E(0);
var F6=E();
function Mu(){var a=new F6();JG(a);return a;}
function JG(a){}
var Bb=E(S);
function Mv(){var a=new Bb();J7(a);return a;}
function J7(a){G(a);}
var GF=E();
function Mw(){var a=new GF();KH(a);return a;}
function KH(a){}
function Dt(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Mx());}return b.data.length;}
function Hx(b,c){if(b===null){b=new BP;G(b);F(b);}if(b===O($rt_voidcls())){b=new R;G(b);F(b);}if(c>=0)return JE(b.f,c);b=new F7;G(b);F(b);}
function JE(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var BP=E(S);
function Ls(){var a=new BP();J_(a);return a;}
function J_(a){G(a);}
var CB=E(S);
function My(){var a=new CB();IF(a);return a;}
function IF(a){G(a);}
var B0=E();
var Mz=null;var Mh=null;var MA=null;var Mi=null;function EG(b){return (b&64512)!=55296?0:1;}
function Et(b){return (b&64512)!=56320?0:1;}
function HX(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function GR(b){return (56320|b&1023)&65535;}
function DI(b,c){if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GK(){Mz=O($rt_charcls());MA=X(B0,128);}
function G6(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
var Dr=E(Bb);
function MB(){var a=new Dr();IK(a);return a;}
function IK(a){G(a);}
var BY=E(0);
var B4=E();
var Fj=E(0);
var BJ=E(0);
function B6(){B4.call(this);this.L=null;}
function C$(a){if(a.L===null)a.L=Ih(a,D(15));return EA(a.L);}
function Eg(a){G7(a,new Er,null);}
function G7(a,b,c){var d,e,f,g,h,i,j;if(a.L===null){d=Ih(a,D(15));a.L=d;d.bf=null;e=(Fn(EA(d))).data;f=e.length;g=0;while(g<f){h=e[g];if(h instanceof FF){i=new M;N(i);P(H(H(H(i,D(16)),h.y()),D(17)));j=h.e6(b,c);if(Ee(j,BJ)){i=new M;N(i);P(H(H(H(i,D(18)),h.y()),D(17)));j.eo(b,c);}if(d.bf===null)d.bf=FZ();Cw(d.bf,h.y(),j);}g=g+1|0;}}a.c1(b,c);}
var Eo=E(0);
var E8=E(0);
var Cd=E(0);
function Cx(){var a=this;B6.call(a);a.dk=null;a.bZ=0.0;a.ds=0;a.eZ=null;a.gz=null;}
var LW=0;function IU(a,b,c){b=a.eZ;if(b!==null)a.ds=b.v;if(!Fk(a)){a.bZ=0.0;a.dP=null;a.dQ=0;a.eM=0;a.dE=0;a.dH=0.0;a.dF=0.0;a.eR=1.0;a.eK=1;if(a.dc.bF>0)a.cP=null;}}
function Fk(a){return a.bZ<=0.0?0:1;}
function Gh(){LW=0;}
var Fq=E(0);
function HI(){var a=this;Cx.call(a);a.dD=null;a.eV=null;a.eA=null;a.eO=null;a.eC=null;a.eU=null;a.d0=null;a.eG=null;a.ek=null;a.dC=null;a.cP=null;a.d5=null;a.dP=null;a.dQ=0;a.eM=0;a.dE=0;a.dH=0.0;a.dF=0.0;a.eR=0.0;a.eK=0;a.dc=null;a.dV=null;}
function Li(){var a=new HI();Iv(a);return a;}
function Iv(a){var b,c,d,e,f,g;a.bZ=0.0;a.ds=1;a.dD=B5(D(19),109,D(20),33554432,0,2147483647);a.eV=Hu(D(21),110,D(22),O(Ek),D(23));a.eA=Hu(D(24),100,D(25),O(FA),D(26));a.eO=B5(D(27),101,D(28),1000000,0,2147483647);a.eC=B5(D(29),103,D(30),200,0,2147483647);a.eU=Hu(D(31),115,D(32),O(D6),D(33));a.d0=Io(D(34),99,D(35),1.0E-7,0.0,1.0);a.eG=Io(D(36),116,D(37),0.05,0.0,1.0);a.ek=F5(D(38),98,D(39));a.dC=F5(D(40),122,D(41));a.cP=F5(D(42),114,D(43));a.d5=F5(D(44),112,D(45));b=new E9;c=X(Bm,3);d=c.data;d[0]=D(46);d[1]
=D(47);d[2]=D(48);e=X(Bm,3);f=e.data;f[0]=D(49);f[1]=D(50);f[2]=D(51);BV(b,D(52),108,D(53));if(d.length!=f.length){g=new R;L(g,D(54));F(g);}b.bl=c.k();b.dR=e.k();b.dx=2;Cp(b);a.dc=b;a.dV=B5(D(55),113,D(56),0,0,2147483647);}
var CI=E(0);
function HC(){var a=this;B6.call(a);a.dW=null;a.eb=null;a.bN=null;a.by=null;a.cp=null;a.da=null;a.bb=null;a.dy=null;a.eN=null;}
function KN(){var a=new HC();II(a);return a;}
function II(a){a.dW=JJ(D(57),114,D(58),1);a.eb=JJ(D(59),105,D(60),1);a.bN=B5(D(61),99,D(62),2,2,2147483647);a.by=B5(D(63),97,D(64),10,0,2147483647);a.cp=B5(D(65),110,D(66),50,1,2147483647);}
function IR(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;b=new DS;C7(b);d=0;while(d<a.by.v){c=new Cn;e=new M;N(e);e=H(e,D(67));d=d+1|0;Es(c,P(Ba(e,d)));Cb(b,c);}e=new DS;C7(e);f=0;while(f<a.bN.v){c=new M;N(c);c=H(c,D(68));f=f+1|0;Cb(e,P(Ba(c,f)));}g=new Cn;g.bH=D(68);g.cg=e;g.bJ=1;Cb(b,g);e=new FB;g=new CM;h=new M;N(h);i=CN(BW(a));if(BK(i,(CD(O(CI))).N))i=CE(i,K((CD(O(CI))).N)+1|0);c=H(H(h,i),D(69));h=C$(a);j=new M;N(j);h=CG(h.u);while(CK(h)){i=Ca(h);k=i.fe();if(k!==null&&!k.bh(i.C())){if(j.d>0)H(j,D(69));l=new M;N(l);H(j,
P(Bn(H(l,D(70)),i.bm())));if(k.cv()>0){if(k.e5(32)<0){i=new M;N(i);H(j,P(H(H(i,D(69)),k)));}else{i=new M;N(i);H(j,P(H(H(H(i,D(71)),k),D(72))));}}}}h=P(H(c,P(j)));m=X(Cn,b.l);n=m.data;f=0;while(f<b.l){n[f]=HR(b,f);f=f+1|0;}b=new C8;b.p=2147483647;b.Z=h;c=new Do;f=n.length;c.P=m;m=Kj(f);n=m.data;c.H=m;o=0;while(o<f){n[o]=o;o=o+1|0;}c.X=f;b.A=c;g.t=b;g.cd=IW(0);FL(g);b=new C8;j=g.t;b.p=2147483647;b.Z=j.Z;c=new Do;h=j.A;c.P=h.P.k();c.H=h.H.k();c.X=h.X;b.A=c;b.p=j.p;b.dA=j.dA;e.t=b;e.cd=IW(0);FL(e);m=g.cW;if(m!==
null){e.cW=m.k();e.cH=g.cH.k();}a.da=e;d=BR(e)-1|0;e.t.p=d;GM(a);a.eN=new C9;}
function GM(a){var b,c,d,e,f,g,h,i;b=new C9;c=X(DR,a.cp.v);d=c.data;a.bb=c;a.dy=Ia(d.length);e=0;while(true){c=a.bb.data;if(e>=c.length)break;c[e]=new DR;d=Ia(a.by.v);c=d.data;f=0;g=c.length;while(f<g){c[f]=Ct(b);f=f+1|0;}c=a.bb.data;c[e].es=d;h=c[e];i=a.bN.v;if(i<=0){b=new R;G(b);F(b);}h.dJ=Ct(b)*i|0;a.bb.data[e].dU=Ct(b);a.dy.data[e]=Ct(b);e=e+1|0;}}
var Cl=E(0);
function Bk(){var a=this;C.call(a);a.E=null;a.dM=0;a.eg=null;}
var MC=null;function BV(a,b,c,d){var e,f,g,h;e=MC.data;f=e.length;g=0;a:{while(g<f){if(CA(b,e[g],0)>=0){f=0;break a;}g=g+1|0;}f=1;}if(f){a.E=b;a.dM=c;a.eg=d;return;}h=new R;d=new M;N(d);L(h,P(H(H(d,D(73)),b)));F(h);}
function Cp(a){a.w(a.C());}
function Gi(){MC=K$([32,45,40,41]);}
function Hz(){var a=this;Bk.call(a);a.v=0;a.di=0;a.bY=0;a.bV=0;}
function JJ(a,b,c,d){var e=new Hz();Jj(e,a,b,c,d);return e;}
function B5(a,b,c,d,e,f){var g=new Hz();He(g,a,b,c,d,e,f);return g;}
function Jj(a,b,c,d,e){He(a,b,c,d,e,(-2147483648),2147483647);}
function He(a,b,c,d,e,f,g){BV(a,b,c,d);a.di=e;a.bY=f;a.bV=g;Cp(a);}
function I5(a){var b;b=a.di;return (Ew(K_(20),b,10)).bP();}
function IY(a,b){var c,d;c=F1(Bt(b));if(c<a.bY){b=new R;d=new M;N(d);L(b,P(Ba(H(Ba(H(H(H(d,D(74)),a.E),D(75)),a.bY),D(76)),c)));F(b);}if(c<=a.bV){a.v=c;return;}d=new R;b=new M;N(b);L(d,P(Ba(H(Ba(H(H(H(b,D(74)),a.E),D(77)),a.bV),D(76)),c)));F(d);}
function C0(){var a=this;Bk.call(a);a.cZ=null;a.cS=null;a.cy=null;a.bS=null;}
function JL(a){return a.cy;}
var FF=E(C0);
function Hu(a,b,c,d,e){var f=new FF();KA(f,a,b,c,d,e);return f;}
function KA(a,b,c,d,e,f){var g;g=null;BV(a,b,c,d);a.cS=e;a.cy=f;a.bS=g;Cp(a);}
function I8(a,b){var c,d,$$je;a:{if(a.bS!==null&&!(b!==null&&K(b)&&!BC(b,a.bS)))a.cZ=null;else try{a.cZ=I4(b,a.cS,null,X(Bm,0));break a;}catch($$e){$$je=Bs($$e);if($$je instanceof Bf){d=$$je;b=new R;c=new M;N(c);EB(b,P(H(H(c,D(78)),a.E)),d);F(b);}else{throw $$e;}}}}
function I4(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$$je;if(BK(b,D(79))){c=new B1;b=CE(b,K(D(79)));Kp();if(b===null){b=new BP;L(b,D(15));F(b);}f=K(b);g=0;Dw();h=0;d=Ft(b);i=0;while(i<f){e=d.data;j=e[i];if(j!=47&&j!=MD){k=g+1|0;e[g]=j;h=0;}else if(h&&i)k=g;else{k=g+1|0;e[g]=MD;h=1;}i=i+1|0;g=k;}if(h&&!(g<=1&&d.data[0]==47))g=g+(-1)|0;c.en=HB(d,0,g);return c;}if(BK(b,D(80)))return CE(b,K(D(80)));b=Bt(b);f=CA(b,32,0);if(f<=0)l=D(15);else{m=Bd(b,0,f);l=Bt(CE(b,f+1|0));b=m;}e=(Fb(e,e.data.length+2|0)).data;f=e.length;e[f
-2|0]=(CD(c)).N;e[f-1|0]=(CD(O(DM))).N;a:{try{n=HD(b);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof BL){}else{throw $$e;}}g=0;b:{while(g<f){m=e[g];try{n=HD(Dp(H(H(H(IV(),m),D(81)),b)));break b;}catch($$e){$$je=Bs($$e);if($$je instanceof BL){}else{throw $$e;}}g=g+1|0;}l=new Bf;c=new M;N(c);L(l,P(H(H(c,D(82)),b)));F(l);}}c:{try{o=Hm(n);break c;}catch($$e){$$je=Bs($$e);if($$je instanceof Bf){p=$$je;}else{throw $$e;}}c=new Bf;l=new M;N(l);EB(c,Dp(H(H(l,D(83)),b)),p);F(c);}if(!CT(c,o)&&!(Ee(o,DM)&&Ei(c,o.fC())))
{l=new Bf;m=new M;N(m);L(l,P(H(H(H(H(H(m,D(84)),b),D(85)),CN(c)),D(81))));F(l);}d:{q=IZ();if(d!==null){d=d.data;f=d.length;g=0;while(true){if(g>=f)break d;Ds(q,d[g]);g=g+1|0;}}}e:{if(Ee(o,BJ)){d=(Fn(C$(o))).data;f=d.length;g=0;while(true){if(g>=f)break e;Ds(q,d[g]);g=g+1|0;}}}f:{g:{try{GN(q,l);}catch($$e){$$je=Bs($$e);if($$je instanceof Bf){p=$$je;break g;}else{b=$$je;break f;}}DZ(q);return o;}try{F(KQ(Dp(H(H(H(H(H(H(IV(),D(86)),b),D(87)),b),D(88)),HW(C$(o)))),p));}catch($$e){$$je=Bs($$e);b=$$je;}}DZ(q);F(b);}
var Db=E(0);
var Ek=E(0);
var FA=E(0);
var D6=E(0);
function Hj(){var a=this;Bk.call(a);a.d7=0.0;a.c_=0.0;a.ca=0.0;a.b_=0.0;}
function Io(a,b,c,d,e,f){var g=new Hj();Kb(g,a,b,c,d,e,f);return g;}
function Kb(a,b,c,d,e,f,g){BV(a,b,c,d);a.c_=e;a.ca=f;a.b_=g;Cp(a);}
function I2(a){var b,c;b=a.c_;c=new M;N(c);return P(Cj(c,b));}
function J0(a,b){var c,d;c=Ht(Bt(b));if(c<a.ca){b=new R;d=new M;N(d);L(b,P(Cj(H(Cj(H(H(H(d,D(74)),a.E),D(75)),a.ca),D(76)),c)));F(b);}if(c<=a.b_){a.d7=c;return;}b=new R;d=new M;N(d);L(b,P(Cj(H(Cj(H(H(H(d,D(74)),a.E),D(77)),a.b_),D(76)),c)));F(b);}
function C5(){Bk.call(this);this.dB=0;}
function F5(a,b,c){var d=new C5();Ki(d,a,b,c);return d;}
function Ki(a,b,c,d){BV(a,b,c,d);a.dB=0;}
function E9(){var a=this;Bk.call(a);a.bl=null;a.dR=null;a.dx=0;a.bF=0;}
function Ku(a){return a.bl.data[a.dx];}
function IB(a,b){var c,d,e,f,$$je;a:{try{H0(a,F1(Bt(b)));break a;}catch($$e){$$je=Bs($$e);if($$je instanceof Be){}else{throw $$e;}}b=Bt(b);c=0;while(true){d=a.bl.data;if(c>=d.length){e=new R;f=new M;N(f);L(e,P(H(H(f,D(89)),b)));F(e);}if(BC(d[c],b))break;c=c+1|0;}a.bF=c;}}
function H0(a,b){var c;if(b>=0&&b<a.bl.data.length){a.bF=b;return;}c=new Bb;G(c);F(c);}
var FD=E(0);
var Ep=E(0);
var Fo=E(0);
var Cf=E();
function Dc(){Cf.call(this);this.dw=null;}
function Eu(){var a=this;Dc.call(a);a.eD=0;a.b2=0;a.bn=null;a.dz=null;a.dl=null;}
function Ex(a,b,c,d){var e,$$je;e=a.dw;if(e===null)a.b2=1;if(!(a.b2?0:1))return;a:{try{HA(e,b,c,d);break a;}catch($$e){$$je=Bs($$e);if($$je instanceof Fe){}else{throw $$e;}}a.b2=1;}}
function CS(){Cf.call(this);this.d6=null;}
var E3=E(CS);
var LY=null;function Lc(){var a=new E3();Ha(a);return a;}
function Ha(a){a.d6=FG(1);}
function HA(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Hy(){LY=Lc();}
var R=E(S);
function Mx(){var a=new R();JO(a);return a;}
function JO(a){G(a);}
function C6(){var a=this;C.call(a);a.dK=null;a.ec=null;}
function HU(b){var c,d;if(Dz(b))F(GD(b));if(!HV(Q(b,0)))F(GD(b));c=1;while(c<K(b)){a:{d=Q(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(HV(d))break a;else F(GD(b));}}c=c+1|0;}}
function HV(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var FP=E(C6);
var LZ=null;function IM(){IM=Z(FP);Ip();}
function K9(){var a=new FP();Hg(a);return a;}
function Hg(a){var b,c,d,e;IM();b=X(Bm,0);c=b.data;HU(D(90));d=c.length;e=0;while(e<d){HU(c[e]);e=e+1|0;}a.dK=D(90);a.ec=b.k();}
function Hh(a){var b,c,d,e,f;b=new F3;c=FG(1);d=c.data;d[0]=63;EW();e=ME;b.b5=e;b.b7=e;f=d.length;if(f&&f>=b.ce){b.em=a;b.cL=c.k();b.eu=2.0;b.ce=4.0;b.cB=Bw(512);b.cX=FG(512);return b;}e=new R;L(e,D(91));F(e);}
function Ip(){LZ=K9();}
var BO=E(0);
var D2=E(Bf);
function MF(){var a=new D2();JR(a);return a;}
function JR(a){G(a);}
function H1(){R.call(this);this.ev=null;}
function GD(a){var b=new H1();IP(b,a);return b;}
function IP(a,b){G(a);a.ev=b;}
var FN=E(0);
var Er=E();
function MG(){var a=new Er();KG(a);return a;}
function KG(a){}
function CM(){var a=this;C.call(a);a.t=null;a.cd=null;a.cr=null;a.cW=null;a.cH=null;}
function MH(){var a=new CM();KJ(a);return a;}
function KJ(a){}
function DB(a){return a.t.p;}
function BR(a){return a.t.A.X;}
function BD(a,b){return Fr(a.t.A,b);}
function Eq(a){var b;b=a.t;return Da(Fr(b.A,b.p));}
function FL(a){var b,c,d,e,f,g;a.cr=FZ();b=0;while(b<BR(a)){c=a.cr;d=(BD(a,b)).bH;if(b>=(-128)&&b<=127){a:{if(Mg===null){Mg=X(Cr,256);e=0;while(true){f=Mg.data;if(e>=f.length)break a;f[e]=IX(e-128|0);e=e+1|0;}}}g=Mg.data[b+128|0];}else g=IX(b);Cw(c,d,g);b=b+1|0;}}
var E1=E(BE);
function MI(){var a=new E1();I6(a);return a;}
function I6(a){G(a);}
function B8(){var a=this;C.call(a);a.cU=0;a.h=0;a.o=0;a.bg=0;}
function Ea(a,b){a.bg=(-1);a.cU=b;a.o=b;}
function EO(a){return a.h;}
function BB(a){return a.o-a.h|0;}
function BU(a){return a.h>=a.o?0:1;}
var F0=E(0);
var C4=E(B8);
function DX(a,b){var c,d,e;if(b>=0&&b<=a.o){a.h=b;if(b<a.bg)a.bg=0;return a;}c=new R;d=a.o;e=new M;N(e);Bn(Ba(V(Ba(V(e,D(92)),b),D(93)),d),93);L(c,P(e));F(c);}
var G$=E();
function MJ(){var a=new G$();I$(a);return a;}
function I$(a){}
function BS(b,c){if(b<c)c=b;return c;}
function BF(b,c){if(b>c)c=b;return c;}
function DG(){var a=this;B8.call(a);a.c5=0;a.cM=null;a.e3=null;}
function ET(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.cD){e=new FK;G(e);F(e);}if(BB(a)<d){e=new EQ;G(e);F(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new Bb;j=new M;N(j);Ba(V(Ba(V(j,D(94)),h),D(95)),g);L(i,P(j));F(i);}if(d<0){e=new Bb;i=new M;N(i);V(Ba(V(i,D(96)),d),D(97));L(e,P(i));F(e);}h=a.h;k=h+a.c5|0;l=0;while(l<d){b=a.cM.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.h=h+d|0;return a;}}b=b.data;e=new Bb;d=b.length;i=new M;N(i);Bn(Ba(V(Ba(V(i,D(98)),c),D(93)),d),41);L(e,P(i));F(e);}
function E0(a){a.h=0;a.o=a.cU;a.bg=(-1);return a;}
function Cm(){C.call(this);this.ea=null;}
var MK=null;var L1=null;var ME=null;function EW(){EW=Z(Cm);Ik();}
function G8(a){var b=new Cm();HQ(b,a);return b;}
function HQ(a,b){EW();a.ea=b;}
function Ik(){MK=G8(D(99));L1=G8(D(100));ME=G8(D(101));}
function Cn(){var a=this;C.call(a);a.bJ=0;a.bu=0;a.bH=null;a.cg=null;}
function KU(a){var b=new Cn();Es(b,a);return b;}
function ML(){var a=new Cn();JI(a);return a;}
function Es(a,b){a.bH=b;a.bu=1;}
function JI(a){Es(a,D(15));}
function Da(a){if(a.bu)return 0;return a.cg.l;}
var CU=E(C4);
function E4(){var a=this;CU.call(a);a.eS=0;a.cC=0;a.dq=null;}
function CR(){var a=this;C.call(a);a.em=null;a.cL=null;a.eu=0.0;a.ce=0.0;a.b5=null;a.b7=null;a.bi=0;}
function F8(a,b){var c;if(b!==null){a.b5=b;return a;}c=new R;L(c,D(102));F(c);}
function G9(a,b){var c;if(b!==null){a.b7=b;return a;}c=new R;L(c,D(102));F(c);}
function G2(a,b,c,d){var e,f,g,h,i,j,k,$$je;a:{e=a.bi;if(e!=3){if(d)break a;if(e!=2)break a;}b=new Cv;G(b);F(b);}a.bi=!d?1:2;while(true){try{f=G1(a,b,c);}catch($$e){$$je=Bs($$e);if($$je instanceof S){g=$$je;b=new EU;b.bp=1;b.bs=1;b.b8=g;F(b);}else{throw $$e;}}if(f.J?0:1){if(!d)return f;h=BB(b);if(h<=0)return f;f=Dj(h);}else if(Df(f))break;i=!ER(f)?a.b5:a.b7;b:{EW();if(i!==L1){if(i===MK)break b;else return f;}h=BB(c);j=a.cL;e=j.data.length;if(h<e)return MM;ET(c,j,0,e);}k=b.h;h=f.J!=2?0:1;if(!(!h&&!ER(f)?0:1))
{b=new Cy;G(b);F(b);}DX(b,k+f.c3|0);}return f;}
function Gr(a,b){var c,d;c=a.bi;if(c!=2&&c!=4){b=new Cv;G(b);F(b);}d=MN;if(d===d)a.bi=3;return d;}
function C1(){var a=this;C.call(a);a.J=0;a.c3=0;}
var MN=null;var MM=null;function Hd(a,b){var c=new C1();HT(c,a,b);return c;}
function HT(a,b,c){a.J=b;a.c3=c;}
function Df(a){return a.J!=1?0:1;}
function ER(a){return a.J!=3?0:1;}
function Dj(b){return Hd(2,b);}
function Gj(){MN=Hd(0,0);MM=Hd(1,0);}
function ES(){var a=this;DG.call(a);a.dL=0;a.cD=0;}
function Dl(){C.call(this);this.ex=null;}
var L0=null;var MO=null;function J1(){J1=Z(Dl);Kv();}
function Ig(a){var b=new Dl();Ga(b,a);return b;}
function Ga(a,b){J1();a.ex=b;}
function Kv(){L0=Ig(D(103));MO=Ig(D(104));}
function CV(){var a=this;C.call(a);a.bD=null;a.bk=null;a.bf=null;}
function EA(a){var b,c,d,e,f,g,h,i,j,k,l,$$je;a:{if(a.bk===null){a.bk=IZ();b=BW(a.bD);if(!BT(b)&&!E6(b)){if(b.bQ===null){c=K7();d=!(b.f.$meta.flags&2)?0:1;b:{if(d)HF(b,c,Lh());else{e=b;while(true){if(e===null)break b;f=b.R.data;d=f.length;g=0;while(g<d){h=f[g];if(FY(D1(h)))Cb(c,h);g=g+1|0;}e=HS(e);}}}b.bQ=CY(c,X(BZ,c.l));}f=b.bQ.k();}else f=X(BZ,0);f=f.data;b=new CH;i=f.length;j=0;while(j<i){c:{c=f[j];e=c.c$;h=CN(e);if(h===D(105))d=1;else if(K(D(105))>K(h))d=0;else{k=0;d=K(h)-K(D(105))|0;while(d<K(h)){g=Q(h,
d);l=k+1|0;if(g!=Q(D(105),k)){d=0;break c;}d=d+1|0;k=l;}d=1;}}if(d&&Ei(O(Cl),e)){e=null;d:{try{Gu(c,1);c=Gx(c,a.bD);e=c;break d;}catch($$e){$$je=Bs($$e);if($$je instanceof CW){}else{throw $$e;}}c=e;}if(c!==null)FQ(b,c);}j=j+1|0;}f=(CY(b,X(Cl,b.q))).data;d=f.length;g=0;while(true){if(g>=d)break a;b=f[g];Ds(a.bk,b);g=g+1|0;}}}return a.bk;}
var Gl=E(CV);
function Ih(a,b){var c=new Gl();Jy(c,a,b);return c;}
function Jy(a,b,c){a.bD=b;}
var Be=E(R);
function MP(){var a=new Be();Ja(a);return a;}
function Ja(a){G(a);}
function DT(){var a=this;CR.call(a);a.cB=null;a.cX=null;}
function G1(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.cB;e=0;f=0;g=a.cX;a:{b:{while(true){if((e+32|0)>f&&BU(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=BB(b)+j|0;h=i.length;f=BS(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new Bb;b=new M;N(b);Ba(V(Ba(V(b,D(106)),k),D(95)),h);L(l,P(b));F(l);}if(BB(b)<e)break;if(e<0){b=new Bb;c=new M;N(c);V(Ba(V(c,D(96)),e),D(97));L(b,P(c));F(b);}h=b.h;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.dq.data[n+b.cC|0];m=m+1|0;j=o;n=k;}b.h=h+e
|0;e=0;}if(!BU(c)){l=!BU(b)&&e>=f?MN:MM;break a;}i=g.data;k=BS(BB(c),i.length);p=new EL;p.ct=b;p.cR=c;l=HO(a,d,e,f,g,0,k,p);e=p.cs;j=p.c0;if(l===null){if(!BU(b)&&e>=f)l=MN;else if(!BU(c)&&e>=f)l=MM;}ET(c,g,0,j);if(l!==null)break a;}b=new Em;G(b);F(b);}p=new Bb;l=new M;N(l);Bn(Ba(V(Ba(V(l,D(98)),j),D(93)),h),41);L(p,P(l));F(p);}DX(b,b.h-(f-e|0)|0);return l;}
var F3=E(DT);
function HO(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(CX(h,2))break a;i=MM;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!(!EG(l)&&!Et(l)?0:1)){if((f+3|0)>g){j=j+(-1)|0;if(CX(h,3))break a;i=MM;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!EG(l))
{i=Dj(1);break a;}if(j>=d){if(BU(h.ct))break a;i=MN;break a;}c=j+1|0;n=k[j];if(!Et(n)){j=c+(-2)|0;i=Dj(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(CX(h,4))break a;i=MM;break a;}k=e.data;o=((l&1023)<<10|n&1023)+65536|0;n=f+1|0;k[f]=(240|o>>18)<<24>>24;f=n+1|0;k[n]=(128|o>>12&63)<<24>>24;n=f+1|0;k[f]=(128|o>>6&63)<<24>>24;m=n+1|0;k[n]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.cs=j;h.c0=f;return i;}
var Fe=E(Bf);
function MQ(){var a=new Fe();Jb(a);return a;}
function Jb(a){G(a);}
var DW=E(BM);
var MR=null;function Ht(b){var c,d,e,f,g,h,i,j,k,l,m;if(Dz(b)){b=new Be;G(b);F(b);}c=0;d=K(b);while(true){if(Q(b,c)>32){while(Q(b,d-1|0)<=32){d=d+(-1)|0;}e=0;if(Q(b,c)==45){c=c+1|0;e=1;}else if(Q(b,c)==43)c=c+1|0;if(c==d){b=new Be;G(b);F(b);}a:{f=Q(b,c);g=Bc;h=(-1);i=0;j=B(2808348672, 232830643);if(f!=46){i=1;if(f>=48&&f<=57){b:{while(c<d){if(Q(b,c)!=48)break b;c=c+1|0;}}while(c<d){k=Q(b,c);if(k<48)break a;if(k>57)break a;if(H8(j,Bc)){g=W(g,U(j,J(k-48|0)));j=Bg(j,J(10));}h=h+1|0;c=c+1|0;}}else{b=new Be;G(b);F(b);}}}if
(c<d&&Q(b,c)==46){c=c+1|0;c:{while(true){if(c>=d)break c;f=Q(b,c);k=C3(f,48);if(k<0)break c;if(f>57)break;if(Bv(g,Bc)&&!k)h=h+(-1)|0;else if(H8(j,Bc)){g=W(g,U(j,J(f-48|0)));j=Bg(j,J(10));}c=c+1|0;i=1;}}if(!i){b=new Be;G(b);F(b);}}if(c<d){f=Q(b,c);if(f!=101&&f!=69){b=new Be;G(b);F(b);}f=c+1|0;l=0;if(f==d){b=new Be;G(b);F(b);}if(Q(b,f)==45){f=f+1|0;l=1;}else if(Q(b,f)==43)f=f+1|0;m=0;c=0;d:{while(true){if(f>=d)break d;i=Q(b,f);if(i<48)break d;if(i>57)break;m=(10*m|0)+(i-48|0)|0;c=1;f=f+1|0;}}if(!c){b=new Be;G(b);F(b);}if
(l)m= -m|0;h=h+m|0;}return GP(g,h,e);}c=c+1|0;if(c==d)break;}b=new Be;G(b);F(b);}
function HG(){MR=O($rt_doublecls());}
function B1(){C.call(this);this.en=null;}
var MD=0;var MS=null;var MT=0;var MU=null;function Kp(){Kp=Z(B1);Kl();}
function Dw(){Kp();if(MV===null)MV=KV();return MV;}
function Kl(){Dw();MD=47;MS=FH(47);Dw();MT=58;MU=FH(58);}
var G0=E();
function MW(){var a=new G0();Jg(a);return a;}
function Jg(a){}
function Fb(b,c){var d,e,f,g;d=b.data;e=Hx(Cq(BW(b)),c);f=BS(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
var DM=E(0);
function F9(){C.call(this);this.u=null;}
function IZ(){var a=new F9();IC(a);return a;}
function IC(a){a.u=new CH;}
function Ds(a,b){var c,d;if(Ev(a,b.y())!==null){c=new R;d=new M;N(d);L(c,P(H(H(d,D(107)),b.y())));F(c);}if(CL(a,b.bm())===null){FQ(a.u,b);return;}d=new R;c=new M;N(c);L(d,P(Bn(H(c,D(108)),b.bm())));F(d);}
function Ev(a,b){var c,d;c=CG(a.u);while(true){if(!CK(c))return null;d=Ca(c);if(BC(b,d.y()))break;}return d;}
function CL(a,b){var c,d;c=CG(a.u);while(true){if(!CK(c))return null;d=Ca(c);if(d.bm()==b)break;}return d;}
function Fn(a){var b;b=a.u;return CY(b,X(Cl,b.q));}
function DZ(a){a.u=new CH;}
function GN(a,b){var c,d,e,f,g,h,i,j;c=Bt(b);while(K(c)>0){if(!BK(c,D(70))){d=new R;b=new M;N(b);L(d,P(H(H(H(b,D(109)),c),D(110))));F(d);}e=0;f=CA(c,32,1);if(f>0)b=Bd(c,1,f);else{b=Bd(c,1,K(c));f=K(c)-1|0;}if(K(b)==1)d=CL(a,Q(b,0));else{d=Ev(a,b);if(d===null){e=1;g=0;a:{while(g<K(b)){d=CL(a,Q(b,g));if(!(d instanceof C5)){e=0;d=null;break a;}g=g+1|0;}}if(e){g=0;while(g<K(b)){d=CL(a,Q(b,g));d.w(D(15));g=g+1|0;}c=Bd(c,f+1|0,K(c));}}}if(!e){if(d===null){c=new R;d=new M;N(d);L(c,P(H(H(d,D(111)),b)));F(c);}c=Bd(c,
f+1|0,K(c));if(d instanceof C5)d.w(D(15));else{h=X(Bm,2);c=Bt(c);if(!(!BK(c,D(112))&&!BK(c,D(113)))){g=CA(c,Q(c,0),1);if(g<0){b=new R;L(b,D(114));F(b);}i=h.data;i[0]=Bd(c,1,g);i[1]=Bd(c,g+1|0,K(c));}else if(!BK(c,D(115))){e=B3(c,D(69),0);if(e<0){i=h.data;i[0]=c;i[1]=D(15);}else{i=h.data;i[0]=Bd(c,0,e);i[1]=Bd(c,e+1|0,K(c));}}else{e=1;f=1;g=B3(c,D(72),f);j=B3(c,D(115),f);while(e){if(g<0){b=new R;L(b,D(116));F(b);}if(j>=0&&g>=j){e=e+1|0;f=j+1|0;j=B3(c,D(115),f);continue;}e=e+(-1)|0;f=g+1|0;g=B3(c,D(72),f);}i=
h.data;i[0]=Bd(c,1,f-1|0);i[1]=Bd(c,f,K(c));}i=h.data;d.w(i[0]);c=i[1];}}c=Bt(c);}}
function HW(a){var b,c,d,e;b=new M;N(b);c=a.u;if(c.q<=0){E_();C2(b,0);H(b,D(117));}else{c=CG(c);while(CK(c)){d=Ca(c);C2(b,0);Bn(b,45);Bn(b,d.bm());Bn(b,32);H(b,d.y());e=d.C();if(e!==null&&e.cv()>0){H(b,D(118));H(b,e);Bn(b,41);}FM(b);C2(b,0);H(b,d.ge());FM(b);}}return P(b);}
var GA=E();
function MX(){var a=new GA();JB(a);return a;}
function JB(a){}
function Dg(){C.call(this);this.N=null;}
var L4=null;function Gb(){L4=FZ();}
var Ef=E(0);
var Cc=E(0);
var B2=E();
function CY(a,b){var c,d,e,f,g;c=b.data;d=a.bU();e=c.length;if(e<d)b=Hx(Cq(BW(b)),d);else while(d<e){c[d]=null;d=d+1|0;}d=0;f=a.dm();while(f.dt()){g=b.data;e=d+1|0;g[d]=f.cT();d=e;}return b;}
var DK=E(0);
var D$=E(0);
function Ce(){B2.call(this);this.n=0;}
function FQ(a,b){var c,d,e,f;c=a.q;if(c<0){b=new Bb;G(b);F(b);}d=Fy(a,c);EN(d);e=new Fc;e.c8=b;b=d.bd;e.bt=b;f=d.I;e.O=f;if(b!==null)b.O=e;else d.S.bW=e;if(f!==null)f.bt=e;else d.S.cj=e;d.bd=e;b=d.S;b.q=b.q+1|0;c=b.n+1|0;b.n=c;d.bA=c;d.c7=null;return 1;}
function Iy(a){var b;b=new ED;b.cY=a;b.cI=a.n;b.cK=a.bU();b.cx=(-1);return b;}
var Dh=E(Ce);
function H$(a,b){var c;if(b>=0)return Ca(Fy(a,b));c=new Bb;G(c);F(c);}
function CG(a){return Hp(a,a.bW,null,0);}
var D4=E(0);
var Fs=E(0);
function CH(){var a=this;Dh.call(a);a.bW=null;a.cj=null;a.q=0;}
function MY(){var a=new CH();KK(a);return a;}
function KK(a){}
function Km(a){return a.q;}
function Fy(a,b){var c,d,e,f;if(b<0){c=new Bb;G(c);F(c);}d=a.q;if(b<=(d/2|0)){e=a.bW;f=0;while(f<b){e=e.O;f=f+1|0;}return Hp(a,e,e===null?null:e.bt,b);}if(b>d){c=new Bb;G(c);F(c);}c=a.cj;f=b;while(f<d){c=c.bt;f=f+1|0;}return Hp(a,c===null?null:c.O,c,b);}
var DA=E();
var MZ=null;var M0=null;function M1(){var a=new DA();F_(a);return a;}
function F_(a){}
function GP(b,c,d){var e,f,g,h,i,j,k,l,m,n;e=330+c|0;if(D9(b,Bc)){f=MZ.data;if(e<=f.length&&e>=0){g=By(b,f[e],0);h=M0.data[e];if(Bv(g,Bc))c=64;else{i=0;j=Bh(g,32);if(D9(j,Bc))i=32;else j=g;k=Bh(j,16);if(Bv(k,Bc))k=j;else i=i|16;j=Bh(k,8);if(Bv(j,Bc))j=k;else i=i|8;k=Bh(j,4);if(Bv(k,Bc))k=j;else i=i|4;j=Bh(k,2);if(Bv(j,Bc))j=k;else i=i|2;if(D9(Bh(j,1),Bc))i=i|1;c=(64-i|0)-1|0;}i=(64-c|0)-58|0;j=i>=0?Bh(g,i):BG(g, -i|0);c=h+i|0;if(c>=2047)return !d?Infinity:(-Infinity);l=Gg(Bi(j,J(31)));m=16;i=l-16|0;if(i<0)i
= -i|0;if(i<=1){k=Bi(j,J(-32));n=Br(E7(b,D5(k,32,e,c)),E7(D5(W(k,J(32)),32,e,c),b));if(n<0)m= -l|0;else if(n>0)m=32-l|0;}b=W(j,J(m));if(D9(Bi(b,B(0, 4227858432)),Bc)){b=Bh(b,1);c=c+1|0;}if(c<=0){b=JW(b,BS(( -c|0)+1|0,64));c=0;}j=Iu(Bi(Bh(b,5),B(4294967295, 1048575)),BG(J(c),52));if(d)j=KW(j,B(0, 2147483648));return $rt_longBitsToDouble(j);}}return $rt_longBitsToDouble((!d?Bc:B(0, 2147483648)));}
function D5(b,c,d,e){var f,g,h,i,j,k,l;f=c>>>1|0;g=7-(M2.data[d]-e|0)|0;h=By(b,M3.data[d],g);i=J(f);j=By(W(b,i),M3.data[d],g);i=Fd(h,By(E7(b,i),M3.data[d],g));k=EV(h,j);l=Br(i,k);return l>0?U(Bg(h,i),i):l<0?W(U(Bg(h,k),k),k):U(Bg(W(h,FI(k,J(2))),k),k);}
function HM(){MZ=Fp([B(136053384, 4203730336),B(85033365, 2627331460),B(106291706, 3284164325),B(1206606457, 4105205406),B(3975354508, 2565753378),B(2821709486, 3207191723),B(2453395034, 4008989654),B(459630072, 2505618534),B(2722021238, 3132023167),B(2328784724, 3915028959),B(3066103188, 2446893099),B(2758887162, 3058616374),B(1301125304, 3823270468),B(2960686963, 2389544042),B(1553375056, 2986930053),B(3015460644, 3733662566),B(810921078, 2333539104),B(1013651348, 2916923880),B(1267064185, 3646154850),B(1865656940, 2278846781),
B(3405812998, 2848558476),B(4257266248, 3560698095),B(4271404141, 2225436309),B(2118029704, 2781795387),B(1573795306, 3477244234),B(2057363890, 2173277646),B(424221215, 2716597058),B(2677760167, 3395746322),B(1199716561, 4244682903),B(2360435586, 2652926814),B(803060835, 3316158518),B(3151309692, 4145198147),B(1432697645, 2590748842),B(3938355705, 3238436052),B(627977335, 4048045066),B(1466227658, 2530028166),B(3980268221, 3162535207),B(3901593452, 3953169009),B(827883171, 2470730631),B(4256079436, 3088413288),
B(1025131999, 3860516611),B(103836588, 2412822882),B(2277279383, 3016028602),B(699115580, 3770035753),B(3121301798, 2356272345),B(680401775, 2945340432),B(850502219, 3681675540),B(2679047535, 2301047212),B(3348809418, 2876309015),B(3112269949, 3595386269),B(2482039630, 2247116418),B(955065890, 2808895523),B(120090538, 3511119404),B(2222540234, 2194449627),B(1704433469, 2743062034),B(4278025484, 3428827542),B(3200048207, 4286034428),B(4147513777, 2678771517),B(1963166750, 3348464397),B(3527700261, 4185580496),
B(2204812663, 2615987810),B(608532181, 3269984763),B(3981890698, 4087480953),B(878068951, 2554675596),B(1097586188, 3193344495),B(298240911, 3991680619),B(3944496953, 2494800386),B(2783137544, 3118500483),B(2405180106, 3898125604),B(3650721214, 2436328502),B(2415917870, 3045410628),B(3019897337, 3806763285),B(2424306748, 2379227053),B(4104125259, 2974033816),B(835189277, 3717542271),B(2132606034, 2323463919),B(1592015719, 2904329899),B(916277825, 3630412374),B(3793899112, 2269007733),B(1521148418, 2836259667),
B(827693699, 3545324584),B(517308562, 2215827865),B(1720377526, 2769784831),B(1076730084, 3462231039),B(2283569038, 2163894399),B(1780719474, 2704867999),B(1152157519, 3381084999),B(366455074, 4226356249),B(2913388981, 2641472655),B(2567994403, 3301840819),B(2136251179, 4127301024),B(1335156987, 2579563140),B(1668946234, 3224453925),B(3159924616, 4030567406),B(901211061, 2519104629),B(2200255651, 3148880786),B(602835915, 3936100983),B(1987385183, 2460063114),B(336747831, 3075078893),B(1494676613, 3843848616),
B(934172883, 2402405385),B(2241457928, 3003006731),B(1728080585, 3753758414),B(6308542, 2346099009),B(1081627501, 2932623761),B(2425776201, 3665779701),B(2052981037, 2291112313),B(3639968121, 2863890391),B(3476218327, 3579862989),B(2709507366, 2237414368),B(3386884208, 2796767960),B(4233605260, 3495959950),B(1572261463, 2184974969),B(3039068653, 2731218711),B(2725093993, 3414023389),B(185142019, 4267529237),B(652584674, 2667205773),B(1889472666, 3334007216),B(2361840833, 4167509020),B(3623634168, 2604693137),
B(1308317239, 3255866422),B(3782880196, 4069833027),B(1827429211, 2543645642),B(136802865, 3179557053),B(1244745406, 3974446316),B(2925449527, 2484028947),B(2583070084, 3105036184),B(3228837605, 3881295230),B(944281679, 2425809519),B(106610275, 3032261899),B(3354488316, 3790327373),B(2633426109, 2368954608),B(3291782637, 2961193260),B(4114728296, 3701491575),B(4182317921, 2313432234),B(3080413753, 2891790293),B(629291719, 3614737867),B(4151403709, 2259211166),B(3041770988, 2824013958),B(1654730087, 3530017448),
B(1034206304, 2206260905),B(2366499704, 2757826131),B(1884382806, 3447282664),B(1177739254, 2154551665),B(2545915892, 2693189581),B(4256136688, 3366486976),B(1025203564, 4208108721),B(3325106788, 2630067950),B(2008899837, 3287584938),B(363641148, 4109481173),B(764146629, 2568425733),B(2028925111, 3210532166),B(388672741, 4013165208),B(242920463, 2508228255),B(3524876051, 3135285318),B(2258611415, 3919106648),B(1411632134, 2449441655),B(690798344, 3061802069),B(1937239754, 3827252586),B(2284516670, 2392032866),
B(708162190, 2990041083),B(4106428209, 3737551353),B(955904895, 2335969596),B(1194881119, 2919961995),B(419859574, 3649952494),B(3483637706, 2281220308),B(59579836, 2851525386),B(2221958443, 3564406732),B(3536207675, 2227754207),B(3346517770, 2784692759),B(3109405388, 3480865949),B(2480249280, 2175541218),B(952827952, 2719426523),B(117293116, 3399283154),B(2294100043, 4249103942),B(360070703, 2655689964),B(450088378, 3319612455),B(3783835945, 4149515568),B(2364897466, 2593447230),B(808638184, 3241809038),B(3158281378, 4052261297),
B(363313125, 2532663311),B(3675366878, 3165829138),B(2446724950, 3957286423),B(3139815830, 2473304014),B(1777286139, 3091630018),B(74124026, 3864537523),B(3804423900, 2415335951),B(3681788051, 3019169939),B(3528493240, 3773962424),B(2205308275, 2358726515),B(1682893520, 2948408144),B(2103616900, 3685510180),B(3462244210, 2303443862),B(2180321615, 2879304828),B(2725402019, 3599131035),B(1166505350, 2249456897),B(2531873511, 2811821121),B(4238583713, 3514776401),B(1038502085, 2196735251),B(224385782, 2745919064),
B(280482227, 3432398830),B(2498086432, 4290498537),B(4245658580, 2681561585),B(2085847753, 3351951982),B(459826043, 4189939978),B(1361133101, 2618712486),B(3848900024, 3273390607),B(3737383206, 4091738259),B(1798993592, 2557336412),B(2248741990, 3196670515),B(1737185663, 3995838144),B(1085741040, 2497398840),B(1357176300, 3121748550),B(3843954022, 3902185687),B(4013084000, 2438866054),B(2868871352, 3048582568),B(3586089190, 3810728210),B(3315047568, 2381705131),B(3070067636, 2977131414),B(1690100897, 3721414268),
B(3203796708, 2325883917),B(783520414, 2907354897),B(2053142341, 3634193621),B(1820084875, 2271371013),B(3348847918, 2839213766),B(2038576249, 3549017208),B(1274110156, 2218135755),B(518895871, 2772669694),B(2796103486, 3465837117),B(2284435591, 2166148198),B(708060841, 2707685248),B(885076051, 3384606560),B(1106345064, 4230758200),B(691465665, 2644223875),B(4085557553, 3305279843),B(4033205117, 4131599804),B(373269550, 2582249878),B(2614070586, 3227812347),B(2193846408, 4034765434),B(2444895829, 2521728396),
B(3056119787, 3152160495),B(2746407909, 3940200619),B(1179634031, 2462625387),B(400800715, 3078281734),B(2648484542, 3847852167),B(3265915575, 2404907604),B(4082394468, 3006134505),B(1881767613, 3757668132),B(3323588406, 2348542582),B(2007001860, 2935678228),B(2508752325, 3669597785),B(4252324763, 2293498615),B(4241664130, 2866873269),B(2080854690, 3583591587),B(763663269, 2239744742),B(3102062735, 2799680927),B(2803836594, 3499601159),B(3363010608, 2187250724),B(4203763259, 2734063405),B(2033478602, 3417579257),
B(3615590077, 4271974071),B(3870356534, 2669983794),B(2690462020, 3337479743),B(2289335700, 4171849679),B(3041447549, 2607406049),B(580583964, 3259257562),B(2873213603, 4074071952),B(1795758502, 2546294970),B(97214479, 3182868713),B(1195259923, 3978585891),B(210166540, 2486616182),B(2410191823, 3108270227),B(1938997955, 3885337784),B(1211873722, 2428336115),B(441100328, 3035420144),B(551375410, 3794275180),B(2492093279, 2371421987),B(2041374775, 2964277484),B(2551718469, 3705346855),B(3205436779, 2315841784),
B(4006795974, 2894802230),B(2861011319, 3618502788),B(3935615723, 2261564242),B(2772036005, 2826955303),B(2391303183, 3533694129),B(4178919049, 2208558830),B(3076165163, 2760698538),B(1697722806, 3450873173),B(1597947666, 2156795733),B(3071176406, 2695994666),B(1691486860, 3369993333),B(3188100399, 4212491666),B(3066304573, 2632807291),B(2759138893, 3291009114),B(1301439968, 4113761393),B(3497754540, 2571100870),B(2224709527, 3213876088),B(2780886909, 4017345110),B(664312494, 2510840694),B(2977874265, 3138550867),
B(2648601008, 3923188584),B(1655375630, 2451992865),B(3142961361, 3064991081),B(707476230, 3831238852),B(2589656291, 2394524282),B(1089586716, 2993155353),B(2435725219, 3741444191),B(3132940998, 2338402619),B(2842434424, 2923003274),B(1405559382, 3653754093),B(1415345525, 2283596308),B(1769181907, 2854495385),B(3285219208, 3568119231),B(3663874741, 2230074519),B(3506101602, 2787593149),B(1161401530, 3484491437),B(1262746869, 2177807148),B(1578433586, 2722258935),B(899300158, 3402823669),B(2197867022, 4253529586),
B(2447408712, 2658455991),B(1985519067, 3323069989),B(3555640657, 4153837486),B(1148533587, 2596148429),B(2509408807, 3245185536),B(3136761009, 4056481920),B(1960475631, 2535301200),B(2450594539, 3169126500),B(3063243173, 3961408125),B(2451397895, 2475880078),B(916763721, 3094850098),B(3293438299, 3868562622),B(984657113, 2417851639),B(157079567, 3022314549),B(1270091283, 3777893186),B(1867548876, 2361183241),B(3408177919, 2951479051),B(3186480575, 3689348814),B(917808535, 2305843009),B(2221002493, 2882303761),
B(3849994940, 3602879701),B(2943117750, 2251799813),B(457671715, 2814749767),B(3793315116, 3518437208),B(2370821947, 2199023255),B(1889785610, 2748779069),B(3435973837, 3435973836),B(0, 2147483648),B(0, 2684354560),B(0, 3355443200),B(0, 4194304000),B(0, 2621440000),B(0, 3276800000),B(0, 4096000000),B(0, 2560000000),B(0, 3200000000),B(0, 4000000000),B(0, 2500000000),B(0, 3125000000),B(0, 3906250000),B(0, 2441406250),B(2147483648, 3051757812),B(2684354560, 3814697265),B(67108864, 2384185791),B(3305111552, 2980232238),
B(1983905792, 3725290298),B(2313682944, 2328306436),B(2892103680, 2910383045),B(393904128, 3637978807),B(1856802816, 2273736754),B(173519872, 2842170943),B(3438125312, 3552713678),B(1075086496, 2220446049),B(2417599944, 2775557561),B(4095741754, 3469446951),B(4170451332, 2168404344),B(918096869, 2710505431),B(73879263, 3388131789),B(1166090902, 4235164736),B(728806814, 2646977960),B(911008517, 3308722450),B(3286244295, 4135903062),B(980160860, 2584939414),B(3372684723, 3231174267),B(3142114080, 4038967834),
B(3037563124, 2524354896),B(3796953905, 3155443620),B(451225085, 3944304526),B(3503241150, 2465190328),B(84084142, 3081487911),B(3326330649, 3851859888),B(2078956656, 2407412430),B(451212172, 3009265538),B(2711498863, 3761581922),B(2768428613, 2350988701),B(239310295, 2938735877),B(1372879692, 3673419846),B(4079275280, 2295887403),B(4025352276, 2869859254),B(2884206696, 3587324068),B(3950112833, 2242077542),B(2790157394, 2802596928),B(3487696742, 3503246160),B(2179810464, 2189528850),B(577279432, 2736911063),
B(3942824762, 3421138828),B(633563656, 4276423536),B(395977285, 2672764710),B(2642455254, 3340955887),B(2229327244, 4176194859),B(856458615, 2610121787),B(4291798741, 3262652233),B(2143522955, 4078315292),B(3487185495, 2548947057),B(1137756396, 3186183822),B(3569679143, 3982729777),B(620436729, 2489206111),B(3996771383, 3111507638),B(2848480580, 3889384548),B(3927784011, 2430865342),B(2762246365, 3038581678),B(1305324309, 3798227098),B(1889569517, 2373891936),B(2361961896, 2967364920),B(2952452370, 3709206150),
B(771540907, 2318253844),B(964426134, 2897817305),B(2279274492, 3622271631),B(3035159293, 2263919769),B(572723645, 2829899712),B(715904556, 3537374640),B(447440347, 2210859150),B(2706784082, 2763573937),B(162254631, 3454467422),B(3322634616, 2159042138),B(2005809622, 2698802673),B(3581003852, 3373503341),B(1255029343, 4216879177),B(3468747899, 2635549485),B(1114709402, 3294436857),B(2467128577, 4118046071),B(3152568096, 2573778794),B(1793226473, 3217223493),B(3315274915, 4021529366),B(998304998, 2513455854),
B(3395364895, 3141819817),B(1022980647, 3927274772),B(2786846552, 2454546732),B(3483558190, 3068183415),B(3280705914, 3835229269),B(2587312108, 2397018293),B(12914663, 2996272867),B(3237368801, 3745341083),B(1486484589, 2340838177),B(2931847560, 2926047721),B(443583978, 3657559652),B(2424723634, 2285974782),B(883420895, 2857468478),B(3251759766, 3571835597),B(2569220766, 2232397248),B(3211525958, 2790496560),B(4014407447, 3488120700),B(361521006, 2180075438),B(2599384906, 2725094297),B(28005660, 3406367872),
B(35007075, 4257959840),B(21879422, 2661224900),B(27349278, 3326531125),B(1107928421, 4158163906),B(1766197087, 2598852441),B(3281488183, 3248565551),B(3028118405, 4060706939),B(1355703091, 2537941837),B(2768370688, 3172427296),B(3460463360, 3965534120),B(2162789600, 2478458825),B(3777228824, 3098073531),B(3647794206, 3872591914),B(3353613203, 2420369946),B(2044532855, 3025462433),B(3629407893, 3781828041),B(657767197, 2363642526),B(2969692644, 2954553157),B(490890333, 3693191447),B(1917419194, 2308244654),
B(249290345, 2885305818),B(2459096579, 3606632272),B(1536935362, 2254145170),B(4068652851, 2817681462),B(2938332415, 3522101828),B(3983941407, 2201313642),B(2832443111, 2751642053),B(319328417, 3439552567),B(1810192997, 2149720354),B(115257598, 2687150443),B(3365297469, 3358938053),B(985396365, 4198672567),B(2226485464, 2624170354),B(635623182, 3280212943),B(4015754449, 4100266178),B(3583588355, 2562666361),B(1258259972, 3203332952),B(1572824965, 4004166190),B(4204241075, 2502603868),B(960334048, 3128254836),
B(1200417559, 3910318545),B(3434615535, 2443949090),B(2145785770, 3054936363),B(1608490389, 3818670454),B(4226531965, 2386669033),B(2061939484, 2983336292),B(2577424355, 3729170365),B(2147761134, 2330731478),B(537217770, 2913414348),B(671522212, 3641767935),B(2030314119, 2276104959),B(1464150824, 2845131199),B(756446706, 3556413999),B(2083391927, 2222758749),B(3677981733, 2778448436),B(302509871, 3473060546),B(1262810493, 2170662841),B(2652254940, 2713328551),B(2241576851, 3391660689),B(3875712888, 4239575861),
B(2959191467, 2649734913),B(477763862, 3312168642),B(2744688476, 4140210802),B(2789172121, 2587631751),B(2412723328, 3234539689),B(4089645983, 4043174611),B(2019157828, 2526984132),B(2523947285, 3158730165),B(4228675930, 3948412706),B(3716664280, 2467757941),B(1424604878, 3084697427),B(707014274, 3855871784),B(441883921, 2409919865),B(1626096725, 3012399831),B(958879083, 3765499789),B(1136170339, 2353437368),B(1420212923, 2941796710),B(3922749802, 3677245887),B(4062331362, 2298278679),B(4004172379, 2872848349),
B(1783990002, 3591060437),B(1651864663, 2244412773),B(3138572653, 2805515966),B(1775732168, 3506894958),B(36090781, 2191809349),B(1118855300, 2739761686),B(3546052773, 3424702107),B(3358824142, 4280877634),B(3173006913, 2675548521),B(745033169, 3344435652),B(931291462, 4180544565),B(1118928076, 2612840353),B(2472401918, 3266050441),B(4164244222, 4082563051),B(2065781727, 2551601907),B(1508485334, 3189502384),B(1885606668, 3986877980),B(3325987816, 2491798737),B(936259297, 3114748422),B(3317807770, 3893435527),
B(3684242592, 2433397204),B(310335944, 3041746506),B(2535403578, 3802183132),B(3732110884, 2376364457),B(1443913133, 2970455572),B(1804891417, 3713069465),B(3812411696, 2320668415),B(3691772795, 2900835519),B(3540974170, 3626044399),B(3823721592, 2266277749),B(1558426518, 2832847187),B(874291324, 3541058984),B(546432078, 2213161865),B(1756781921, 2766452331),B(1122235577, 3458065414),B(3922622708, 2161290883),B(3829536561, 2701613604),B(491953405, 3377017006),B(2762425404, 4221271257),B(115903142, 2638294536),
B(144878927, 3297868170),B(2328582307, 4122335212),B(3602847590, 2576459507),B(3429817663, 3220574384),B(4287272079, 4025717980),B(532061401, 2516073738),B(2812560400, 3145092172),B(3515700500, 3931365215),B(3807925548, 2457103259),B(3686165111, 3071379074),B(2460222741, 3839223843),B(1000768301, 2399514902),B(3398444024, 2999393627),B(3174313207, 3749242034),B(3057687578, 2343276271),B(2748367649, 2929095339),B(2361717737, 3661369174),B(402331761, 2288355734),B(2650398350, 2860444667),B(2239256113, 3575555834),
B(2473276895, 2234722396),B(3091596119, 2793402995),B(2790753324, 3491753744),B(1744220828, 2182346090),B(32792387, 2727932613),B(1114732307, 3409915766),B(3540899032, 4262394707),B(1676190983, 2663996692),B(2095238729, 3329995865),B(3692790235, 4162494831),B(3918606633, 2601559269),B(1677032819, 3251949087),B(1022549200, 4064936359),B(2249705986, 2540585224),B(2812132482, 3175731530),B(1367681955, 3969664413),B(1391672134, 2481040258),B(3887073815, 3101300322),B(2711358621, 3876625403),B(1157728226, 2422890877),
B(2520902107, 3028613596),B(3151127633, 3785766995),B(1432583859, 2366104372),B(1790729824, 2957630465),B(3312154103, 3697038081),B(459483579, 2310648801),B(1648096297, 2888311001),B(3133862196, 3610388751),B(3569276608, 2256492969),B(1240370288, 2820616212),B(1550462860, 3525770265),B(3653393848, 2203606415),B(3493000486, 2754508019),B(3292508783, 3443135024),B(2057817989, 2151959390),B(424788839, 2689949238),B(2678469697, 3362436547),B(2274345297, 4203045684),B(3568949458, 2626903552),B(166219527, 3283629441),
B(1281516233, 4104536801),B(3485302206, 2565335500),B(61660461, 3206669376),B(77075576, 4008336720),B(48172235, 2505210450),B(2207698942, 3131513062),B(612140029, 3914391328),B(382587518, 2446494580),B(478234398, 3058118225),B(1671534821, 3822647781),B(1581580175, 2389154863),B(903233395, 2986443579),B(55299920, 3733054474),B(1108304274, 2333159046)]);M0=Ko([(-76),(-72),(-69),(-66),(-62),(-59),(-56),(-52),(-49),(-46),(-42),(-39),(-36),(-32),(-29),(-26),(-22),(-19),(-16),(-12),(-9),(-6),(-2),1,4,8,11,14,17,21,
24,27,31,34,37,41,44,47,51,54,57,61,64,67,71,74,77,81,84,87,91,94,97,101,104,107,110,114,117,120,124,127,130,134,137,140,144,147,150,154,157,160,164,167,170,174,177,180,184,187,190,194,197,200,204,207,210,213,217,220,223,227,230,233,237,240,243,247,250,253,257,260,263,267,270,273,277,280,283,287,290,293,297,300,303,306,310,313,316,320,323,326,330,333,336,340,343,346,350,353,356,360,363,366,370,373,376,380,383,386,390,393,396,400,403,406,409,413,416,419,423,426,429,433,436,439,443,446,449,453,456,459,463,466,
469,473,476,479,483,486,489,493,496,499,502,506,509,512,516,519,522,526,529,532,536,539,542,546,549,552,556,559,562,566,569,572,576,579,582,586,589,592,595,599,602,605,609,612,615,619,622,625,629,632,635,639,642,645,649,652,655,659,662,665,669,672,675,679,682,685,689,692,695,698,702,705,708,712,715,718,722,725,728,732,735,738,742,745,748,752,755,758,762,765,768,772,775,778,782,785,788,791,795,798,801,805,808,811,815,818,821,825,828,831,835,838,841,845,848,851,855,858,861,865,868,871,875,878,881,885,888,891,
894,898,901,904,908,911,914,918,921,924,928,931,934,938,941,944,948,951,954,958,961,964,968,971,974,978,981,984,987,991,994,997,1001,1004,1007,1011,1014,1017,1021,1024,1027,1031,1034,1037,1041,1044,1047,1051,1054,1057,1061,1064,1067,1071,1074,1077,1081,1084,1087,1090,1094,1097,1100,1104,1107,1110,1114,1117,1120,1124,1127,1130,1134,1137,1140,1144,1147,1150,1154,1157,1160,1164,1167,1170,1174,1177,1180,1183,1187,1190,1193,1197,1200,1203,1207,1210,1213,1217,1220,1223,1227,1230,1233,1237,1240,1243,1247,1250,1253,
1257,1260,1263,1267,1270,1273,1276,1280,1283,1286,1290,1293,1296,1300,1303,1306,1310,1313,1316,1320,1323,1326,1330,1333,1336,1340,1343,1346,1350,1353,1356,1360,1363,1366,1370,1373,1376,1379,1383,1386,1389,1393,1396,1399,1403,1406,1409,1413,1416,1419,1423,1426,1429,1433,1436,1439,1443,1446,1449,1453,1456,1459,1463,1466,1469,1472,1476,1479,1482,1486,1489,1492,1496,1499,1502,1506,1509,1512,1516,1519,1522,1526,1529,1532,1536,1539,1542,1546,1549,1552,1556,1559,1562,1566,1569,1572,1575,1579,1582,1585,1589,1592,1595,
1599,1602,1605,1609,1612,1615,1619,1622,1625,1629,1632,1635,1639,1642,1645,1649,1652,1655,1659,1662,1665,1668,1672,1675,1678,1682,1685,1688,1692,1695,1698,1702,1705,1708,1712,1715,1718,1722,1725,1728,1732,1735,1738,1742,1745,1748,1752,1755,1758,1761,1765,1768,1771,1775,1778,1781,1785,1788,1791,1795,1798,1801,1805,1808,1811,1815,1818,1821,1825,1828,1831,1835,1838,1841,1845,1848,1851,1855,1858,1861,1864,1868,1871,1874,1878,1881,1884,1888,1891,1894,1898,1901,1904,1908,1911,1914,1918,1921,1924,1928,1931,1934,1938,
1941,1944,1948,1951,1954,1957,1961,1964,1967,1971,1974,1977,1981,1984,1987,1991,1994,1997,2001,2004,2007,2011,2014,2017,2021,2024,2027,2031,2034,2037,2041,2044,2047,2051,2054,2057,2060,2064,2067,2070,2074,2077,2080,2084,2087,2090,2094,2097,2100,2104,2107,2110,2114]);}
var FR=E(BM);
var M4=null;function Bg(b,c){return Long_udiv(b, c);}
function Br(b,c){return Long_ucompare(b, c);}
function GT(){M4=O($rt_longcls());}
var F7=E(S);
function M5(){var a=new F7();Jw(a);return a;}
function Jw(a){G(a);}
var BH=E(Bf);
function M6(){var a=new BH();IQ(a);return a;}
function IQ(a){G(a);}
var F2=E(BH);
function M7(){var a=new F2();KC(a);return a;}
function KC(a){G(a);}
var CJ=E();
var M8=Bc;var M3=null;var M2=null;function M9(){var a=new CJ();GW(a);return a;}
function GW(a){}
function Hl(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):B(0, 2146959360);c.cF=Bv(Bi(d,B(0, 2147483648)),Bc)?0:1;e=Bi(d,B(4294967295, 1048575));f=Gg(JW(d,52))&2047;if(Bv(e,Bc)&&!f){c.bz=Bc;c.bX=0;return;}if(f)e=Iu(e,B(0, 1048576));else{e=BG(e,1);while(Bv(Bi(e,B(0, 1048576)),Bc)){e=BG(e,1);f=f+(-1)|0;}}g=M2.data;h=f<<16>>16;i=0;j=g.length;if(i>j){c=new R;G(c);F(c);}k=j-1|0;a:{while(true){if(i>k){j=( -i|0)-1|0;break a;}j=(i+k|0)/2|0;l=C3(g[j],h);if(!l)break;if(l<=
0)i=j+1|0;else k=j-1|0;}}if(j<0)j= -j|0;k=j+1|0;i=12+(f-g[k]|0)|0;m=By(e,M3.data[k],i);if(If(m,M8)){while(Br(m,M8)<=0){j=j+(-1)|0;m=W(U(m,J(10)),J(9));}g=M2.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=By(e,M3.data[h],i);}e=BG(e,1);d=W(e,J(1));g=M3.data;h=j+1|0;n=g[h];f=i-1|0;n=By(d,n,f);o=Fd(m,By(E7(e,J(1)),M3.data[h],f));p=EV(m,n);k=Br(o,p);e=k>0?U(Bg(m,o),o):k<0?W(U(Bg(m,p),p),p):U(Bg(W(m,FI(p,J(2))),p),p);if(Br(e,B(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Bg(e,J(10));if(Br(e,B(2808348672, 232830643))<0)break;}else if
(Br(e,B(1569325056, 23283064))<0){j=j+(-1)|0;e=U(e,J(10));}c.bz=e;c.bX=j-330|0;}
function Fd(b,c){var d,e;d=J(1);while(true){e=U(d,J(10));if(Br(Bg(b,e),Bg(c,e))<=0)break;d=e;}return d;}
function EV(b,c){var d,e;d=J(1);while(true){e=U(d,J(10));if(Br(Bg(b,e),Bg(c,e))>=0)break;d=e;}return d;}
function By(b,c,d){var e,f,g,h,i,j,k,l;e=Bi(b,J(65535));f=Bi(Bh(b,16),J(65535));g=Bi(Bh(b,32),J(65535));h=Bi(Bh(b,48),J(65535));i=Bi(c,J(65535));j=Bi(Bh(c,16),J(65535));k=Bi(Bh(c,32),J(65535));l=Bi(Bh(c,48),J(65535));return W(W(W(BG(U(l,h),32+d|0),BG(W(U(l,g),U(k,h)),16+d|0)),BG(W(W(U(l,f),U(k,g)),U(j,h)),d)),Bh(W(W(W(U(k,e),U(j,f)),U(i,g)),BG(W(W(W(U(l,e),U(k,f)),U(j,g)),U(i,h)),16)),32-d|0));}
function GU(){M8=Bg(J(-1),J(10));M3=Fp([B(3251292512, 2194092222),B(1766094183, 3510547556),B(553881887, 2808438045),B(443105509, 2246750436),B(3285949193, 3594800697),B(910772436, 2875840558),B(2446604867, 2300672446),B(2196580869, 3681075914),B(2616258154, 2944860731),B(1234013064, 2355888585),B(1974420903, 3769421736),B(720543263, 3015537389),B(1435428070, 2412429911),B(578697993, 3859887858),B(2180945313, 3087910286),B(885762791, 2470328229),B(3135207384, 3952525166),B(1649172448, 3162020133),B(3037324877, 2529616106),
B(3141732885, 4047385770),B(2513386308, 3237908616),B(1151715587, 2590326893),B(983751480, 4144523029),B(1645994643, 3315618423),B(3034782633, 2652494738),B(3996658754, 4243991581),B(2338333544, 3395193265),B(1870666835, 2716154612),B(4073513845, 2172923689),B(3940641775, 3476677903),B(575533043, 2781342323),B(2178413352, 2225073858),B(2626467905, 3560118173),B(3819161242, 2848094538),B(478348616, 2278475631),B(3342338164, 3645561009),B(3532863990, 2916448807),B(1108304273, 2333159046),B(55299919, 3733054474),
B(903233395, 2986443579),B(1581580175, 2389154863),B(1671534821, 3822647781),B(478234397, 3058118225),B(382587518, 2446494580),B(612140029, 3914391328),B(2207698941, 3131513062),B(48172235, 2505210450),B(77075576, 4008336720),B(61660460, 3206669376),B(3485302205, 2565335500),B(1281516232, 4104536801),B(166219527, 3283629441),B(3568949458, 2626903552),B(2274345296, 4203045684),B(2678469696, 3362436547),B(424788838, 2689949238),B(2057817989, 2151959390),B(3292508783, 3443135024),B(3493000485, 2754508019),B(3653393847, 2203606415),
B(1550462860, 3525770265),B(1240370288, 2820616212),B(3569276608, 2256492969),B(3133862195, 3610388751),B(1648096297, 2888311001),B(459483578, 2310648801),B(3312154103, 3697038081),B(1790729823, 2957630465),B(1432583858, 2366104372),B(3151127633, 3785766995),B(2520902106, 3028613596),B(1157728226, 2422890877),B(2711358621, 3876625403),B(3887073815, 3101300322),B(1391672133, 2481040258),B(1367681954, 3969664413),B(2812132482, 3175731530),B(2249705985, 2540585224),B(1022549199, 4064936359),B(1677032818, 3251949087),
B(3918606632, 2601559269),B(3692790234, 4162494831),B(2095238728, 3329995865),B(1676190982, 2663996692),B(3540899031, 4262394707),B(1114732307, 3409915766),B(32792386, 2727932613),B(1744220827, 2182346090),B(2790753324, 3491753744),B(3091596118, 2793402995),B(2473276894, 2234722396),B(2239256113, 3575555834),B(2650398349, 2860444667),B(402331761, 2288355734),B(2361717736, 3661369174),B(2748367648, 2929095339),B(3057687578, 2343276271),B(3174313206, 3749242034),B(3398444024, 2999393627),B(1000768301, 2399514902),
B(2460222741, 3839223843),B(3686165111, 3071379074),B(3807925548, 2457103259),B(3515700499, 3931365215),B(2812560399, 3145092172),B(532061401, 2516073738),B(4287272078, 4025717980),B(3429817663, 3220574384),B(3602847589, 2576459507),B(2328582306, 4122335212),B(144878926, 3297868170),B(115903141, 2638294536),B(2762425404, 4221271257),B(491953404, 3377017006),B(3829536560, 2701613604),B(3922622707, 2161290883),B(1122235577, 3458065414),B(1756781920, 2766452331),B(546432077, 2213161865),B(874291324, 3541058984),
B(1558426518, 2832847187),B(3823721592, 2266277749),B(3540974170, 3626044399),B(3691772795, 2900835519),B(3812411695, 2320668415),B(1804891416, 3713069465),B(1443913133, 2970455572),B(3732110884, 2376364457),B(2535403578, 3802183132),B(310335944, 3041746506),B(3684242592, 2433397204),B(3317807769, 3893435527),B(936259297, 3114748422),B(3325987815, 2491798737),B(1885606668, 3986877980),B(1508485334, 3189502384),B(2065781726, 2551601907),B(4164244222, 4082563051),B(2472401918, 3266050441),B(1118928075, 2612840353),
B(931291461, 4180544565),B(745033169, 3344435652),B(3173006913, 2675548521),B(3358824142, 4280877634),B(3546052773, 3424702107),B(1118855300, 2739761686),B(36090780, 2191809349),B(1775732167, 3506894958),B(3138572652, 2805515966),B(1651864662, 2244412773),B(1783990001, 3591060437),B(4004172378, 2872848349),B(4062331362, 2298278679),B(3922749802, 3677245887),B(1420212923, 2941796710),B(1136170338, 2353437368),B(958879082, 3765499789),B(1626096725, 3012399831),B(441883920, 2409919865),B(707014273, 3855871784),
B(1424604878, 3084697427),B(3716664280, 2467757941),B(4228675929, 3948412706),B(2523947284, 3158730165),B(2019157827, 2526984132),B(4089645983, 4043174611),B(2412723327, 3234539689),B(2789172121, 2587631751),B(2744688475, 4140210802),B(477763862, 3312168642),B(2959191467, 2649734913),B(3875712888, 4239575861),B(2241576851, 3391660689),B(2652254940, 2713328551),B(1262810493, 2170662841),B(302509870, 3473060546),B(3677981733, 2778448436),B(2083391927, 2222758749),B(756446706, 3556413999),B(1464150824, 2845131199),
B(2030314118, 2276104959),B(671522212, 3641767935),B(537217769, 2913414348),B(2147761134, 2330731478),B(2577424355, 3729170365),B(2061939484, 2983336292),B(4226531965, 2386669033),B(1608490388, 3818670454),B(2145785770, 3054936363),B(3434615534, 2443949090),B(1200417559, 3910318545),B(960334047, 3128254836),B(4204241074, 2502603868),B(1572824964, 4004166190),B(1258259971, 3203332952),B(3583588354, 2562666361),B(4015754449, 4100266178),B(635623181, 3280212943),B(2226485463, 2624170354),B(985396364, 4198672567),
B(3365297469, 3358938053),B(115257597, 2687150443),B(1810192996, 2149720354),B(319328417, 3439552567),B(2832443111, 2751642053),B(3983941407, 2201313642),B(2938332415, 3522101828),B(4068652850, 2817681462),B(1536935362, 2254145170),B(2459096579, 3606632272),B(249290345, 2885305818),B(1917419194, 2308244654),B(490890333, 3693191447),B(2969692644, 2954553157),B(657767197, 2363642526),B(3629407892, 3781828041),B(2044532855, 3025462433),B(3353613202, 2420369946),B(3647794205, 3872591914),B(3777228823, 3098073531),
B(2162789599, 2478458825),B(3460463359, 3965534120),B(2768370687, 3172427296),B(1355703090, 2537941837),B(3028118404, 4060706939),B(3281488183, 3248565551),B(1766197087, 2598852441),B(1107928421, 4158163906),B(27349277, 3326531125),B(21879422, 2661224900),B(35007075, 4257959840),B(28005660, 3406367872),B(2599384905, 2725094297),B(361521006, 2180075438),B(4014407446, 3488120700),B(3211525957, 2790496560),B(2569220766, 2232397248),B(3251759766, 3571835597),B(883420894, 2857468478),B(2424723634, 2285974782),B(443583977, 3657559652),
B(2931847559, 2926047721),B(1486484588, 2340838177),B(3237368801, 3745341083),B(12914663, 2996272867),B(2587312108, 2397018293),B(3280705914, 3835229269),B(3483558190, 3068183415),B(2786846552, 2454546732),B(1022980646, 3927274772),B(3395364895, 3141819817),B(998304997, 2513455854),B(3315274914, 4021529366),B(1793226472, 3217223493),B(3152568096, 2573778794),B(2467128576, 4118046071),B(1114709402, 3294436857),B(3468747899, 2635549485),B(1255029343, 4216879177),B(3581003852, 3373503341),B(2005809622, 2698802673),
B(3322634616, 2159042138),B(162254630, 3454467422),B(2706784082, 2763573937),B(447440347, 2210859150),B(715904555, 3537374640),B(572723644, 2829899712),B(3035159293, 2263919769),B(2279274491, 3622271631),B(964426134, 2897817305),B(771540907, 2318253844),B(2952452370, 3709206150),B(2361961896, 2967364920),B(1889569516, 2373891936),B(1305324308, 3798227098),B(2762246365, 3038581678),B(3927784010, 2430865342),B(2848480580, 3889384548),B(3996771382, 3111507638),B(620436728, 2489206111),B(3569679143, 3982729777),
B(1137756396, 3186183822),B(3487185494, 2548947057),B(2143522954, 4078315292),B(4291798741, 3262652233),B(856458615, 2610121787),B(2229327243, 4176194859),B(2642455254, 3340955887),B(395977285, 2672764710),B(633563656, 4276423536),B(3942824761, 3421138828),B(577279431, 2736911063),B(2179810463, 2189528850),B(3487696741, 3503246160),B(2790157393, 2802596928),B(3950112833, 2242077542),B(2884206696, 3587324068),B(4025352275, 2869859254),B(4079275279, 2295887403),B(1372879692, 3673419846),B(239310294, 2938735877),
B(2768428613, 2350988701),B(2711498862, 3761581922),B(451212171, 3009265538),B(2078956655, 2407412430),B(3326330649, 3851859888),B(84084141, 3081487911),B(3503241150, 2465190328),B(451225085, 3944304526),B(3796953905, 3155443620),B(3037563124, 2524354896),B(3142114080, 4038967834),B(3372684723, 3231174267),B(980160860, 2584939414),B(3286244294, 4135903062),B(911008517, 3308722450),B(728806813, 2646977960),B(1166090902, 4235164736),B(73879262, 3388131789),B(918096869, 2710505431),B(4170451332, 2168404344),B(4095741754, 3469446951),
B(2417599944, 2775557561),B(1075086496, 2220446049),B(3438125312, 3552713678),B(173519872, 2842170943),B(1856802816, 2273736754),B(393904128, 3637978807),B(2892103680, 2910383045),B(2313682944, 2328306436),B(1983905792, 3725290298),B(3305111552, 2980232238),B(67108864, 2384185791),B(2684354560, 3814697265),B(2147483648, 3051757812),B(0, 2441406250),B(0, 3906250000),B(0, 3125000000),B(0, 2500000000),B(0, 4000000000),B(0, 3200000000),B(0, 2560000000),B(0, 4096000000),B(0, 3276800000),B(0, 2621440000),B(0, 4194304000),
B(0, 3355443200),B(0, 2684354560),B(0, 2147483648),B(3435973836, 3435973836),B(1889785610, 2748779069),B(2370821947, 2199023255),B(3793315115, 3518437208),B(457671715, 2814749767),B(2943117749, 2251799813),B(3849994940, 3602879701),B(2221002492, 2882303761),B(917808535, 2305843009),B(3186480574, 3689348814),B(3408177918, 2951479051),B(1867548875, 2361183241),B(1270091283, 3777893186),B(157079567, 3022314549),B(984657113, 2417851639),B(3293438299, 3868562622),B(916763721, 3094850098),B(2451397895, 2475880078),
B(3063243173, 3961408125),B(2450594538, 3169126500),B(1960475630, 2535301200),B(3136761009, 4056481920),B(2509408807, 3245185536),B(1148533586, 2596148429),B(3555640657, 4153837486),B(1985519066, 3323069989),B(2447408712, 2658455991),B(2197867021, 4253529586),B(899300158, 3402823669),B(1578433585, 2722258935),B(1262746868, 2177807148),B(1161401530, 3484491437),B(3506101601, 2787593149),B(3663874740, 2230074519),B(3285219207, 3568119231),B(1769181906, 2854495385),B(1415345525, 2283596308),B(1405559381, 3653754093),
B(2842434423, 2923003274),B(3132940998, 2338402619),B(2435725219, 3741444191),B(1089586716, 2993155353),B(2589656291, 2394524282),B(707476229, 3831238852),B(3142961361, 3064991081),B(1655375629, 2451992865),B(2648601007, 3923188584),B(2977874265, 3138550867),B(664312493, 2510840694),B(2780886908, 4017345110),B(2224709526, 3213876088),B(3497754539, 2571100870),B(1301439967, 4113761393),B(2759138892, 3291009114),B(3066304573, 2632807291),B(3188100398, 4212491666),B(1691486859, 3369993333),B(3071176406, 2695994666),
B(1597947665, 2156795733),B(1697722806, 3450873173),B(3076165163, 2760698538),B(4178919049, 2208558830),B(2391303182, 3533694129),B(2772036005, 2826955303),B(3935615722, 2261564242),B(2861011319, 3618502788),B(4006795973, 2894802230),B(3205436779, 2315841784),B(2551718468, 3705346855),B(2041374775, 2964277484),B(2492093279, 2371421987),B(551375410, 3794275180),B(441100328, 3035420144),B(1211873721, 2428336115),B(1938997954, 3885337784),B(2410191822, 3108270227),B(210166539, 2486616182),B(1195259923, 3978585891),
B(97214479, 3182868713),B(1795758501, 2546294970),B(2873213602, 4074071952),B(580583963, 3259257562),B(3041447548, 2607406049),B(2289335700, 4171849679),B(2690462019, 3337479743),B(3870356534, 2669983794),B(3615590076, 4271974071),B(2033478602, 3417579257),B(4203763259, 2734063405),B(3363010607, 2187250724),B(2803836594, 3499601159),B(3102062734, 2799680927),B(763663269, 2239744742),B(2080854690, 3583591587),B(4241664129, 2866873269),B(4252324763, 2293498615),B(2508752324, 3669597785),B(2007001859, 2935678228),
B(3323588406, 2348542582),B(1881767613, 3757668132),B(4082394468, 3006134505),B(3265915574, 2404907604),B(2648484541, 3847852167),B(400800715, 3078281734),B(1179634031, 2462625387),B(2746407909, 3940200619),B(3056119786, 3152160495),B(2444895829, 2521728396),B(2193846408, 4034765434),B(2614070585, 3227812347),B(373269550, 2582249878),B(4033205117, 4131599804),B(4085557553, 3305279843),B(691465664, 2644223875),B(1106345063, 4230758200),B(885076050, 3384606560),B(708060840, 2707685248),B(2284435591, 2166148198),
B(2796103486, 3465837117),B(518895870, 2772669694),B(1274110155, 2218135755),B(2038576249, 3549017208),B(3348847917, 2839213766),B(1820084875, 2271371013),B(2053142340, 3634193621),B(783520413, 2907354897),B(3203796708, 2325883917),B(1690100896, 3721414268),B(3070067635, 2977131414),B(3315047567, 2381705131),B(3586089190, 3810728210),B(2868871352, 3048582568),B(4013084000, 2438866054),B(3843954022, 3902185687),B(1357176299, 3121748550),B(1085741039, 2497398840),B(1737185663, 3995838144),B(2248741989, 3196670515),
B(1798993591, 2557336412),B(3737383206, 4091738259),B(3848900024, 3273390607),B(1361133101, 2618712486),B(459826043, 4189939978),B(2085847752, 3351951982),B(4245658579, 2681561585),B(2498086431, 4290498537),B(280482227, 3432398830),B(224385781, 2745919064),B(1038502084, 2196735251),B(4238583712, 3514776401),B(2531873511, 2811821121),B(1166505349, 2249456897),B(2725402018, 3599131035),B(2180321615, 2879304828),B(3462244210, 2303443862),B(2103616899, 3685510180),B(1682893519, 2948408144),B(2205308275, 2358726515),
B(3528493240, 3773962424),B(3681788051, 3019169939),B(3804423900, 2415335951),B(74124026, 3864537523),B(1777286139, 3091630018),B(3139815829, 2473304014),B(2446724950, 3957286423),B(3675366878, 3165829138),B(363313125, 2532663311),B(3158281377, 4052261297),B(808638183, 3241809038),B(2364897465, 2593447230),B(3783835944, 4149515568),B(450088378, 3319612455),B(360070702, 2655689964),B(2294100042, 4249103942),B(117293115, 3399283154),B(952827951, 2719426523),B(2480249279, 2175541218),B(3109405388, 3480865949),
B(3346517769, 2784692759),B(3536207675, 2227754207),B(2221958443, 3564406732),B(59579836, 2851525386),B(3483637705, 2281220308),B(419859574, 3649952494),B(1194881118, 2919961995),B(955904894, 2335969596),B(4106428209, 3737551353),B(708162189, 2990041083),B(2284516670, 2392032866),B(1937239754, 3827252586),B(690798344, 3061802069),B(1411632134, 2449441655),B(2258611415, 3919106648),B(3524876050, 3135285318),B(242920462, 2508228255),B(388672740, 4013165208),B(2028925110, 3210532166),B(764146629, 2568425733),B(363641147, 4109481173),
B(2008899836, 3287584938),B(3325106787, 2630067950),B(1025203564, 4208108721),B(4256136688, 3366486976),B(2545915891, 2693189581),B(1177739254, 2154551665),B(1884382806, 3447282664),B(2366499704, 2757826131),B(1034206304, 2206260905),B(1654730086, 3530017448),B(3041770987, 2824013958),B(4151403708, 2259211166),B(629291719, 3614737867),B(3080413753, 2891790293),B(4182317920, 2313432234),B(4114728295, 3701491575),B(3291782636, 2961193260),B(2633426109, 2368954608),B(3354488315, 3790327373),B(106610275, 3032261899),
B(944281679, 2425809519),B(3228837605, 3881295230),B(2583070084, 3105036184),B(2925449526, 2484028947),B(1244745405, 3974446316),B(136802865, 3179557053),B(1827429210, 2543645642),B(3782880196, 4069833027),B(1308317238, 3255866422),B(3623634168, 2604693137),B(2361840832, 4167509020),B(1889472666, 3334007216),B(652584673, 2667205773),B(185142018, 4267529237),B(2725093992, 3414023389),B(3039068653, 2731218711),B(1572261463, 2184974969),B(4233605259, 3495959950),B(3386884207, 2796767960),B(2709507366, 2237414368),
B(3476218326, 3579862989),B(3639968120, 2863890391),B(2052981037, 2291112313),B(2425776200, 3665779701),B(1081627501, 2932623761),B(6308541, 2346099009),B(1728080585, 3753758414),B(2241457927, 3003006731),B(934172882, 2402405385),B(1494676612, 3843848616),B(336747830, 3075078893),B(1987385183, 2460063114),B(602835915, 3936100983),B(2200255650, 3148880786),B(901211061, 2519104629),B(3159924616, 4030567406),B(1668946233, 3224453925),B(1335156987, 2579563140),B(2136251179, 4127301024),B(2567994402, 3301840819),
B(2913388981, 2641472655),B(366455074, 4226356249),B(1152157518, 3381084999),B(1780719474, 2704867999),B(2283569038, 2163894399),B(1076730083, 3462231039),B(1720377526, 2769784831),B(517308561, 2215827865),B(827693699, 3545324584),B(1521148418, 2836259667),B(3793899112, 2269007733),B(916277824, 3630412374),B(1592015718, 2904329899),B(2132606034, 2323463919),B(835189277, 3717542271),B(4104125258, 2974033816),B(2424306747, 2379227053),B(3019897337, 3806763285),B(2415917869, 3045410628),B(3650721214, 2436328502),
B(2405180105, 3898125604),B(2783137543, 3118500483),B(3944496953, 2494800386),B(298240911, 3991680619),B(1097586188, 3193344495),B(878068950, 2554675596),B(3981890698, 4087480953),B(608532181, 3269984763),B(2204812663, 2615987810),B(3527700261, 4185580496),B(1963166749, 3348464397),B(4147513777, 2678771517),B(3200048207, 4286034428),B(4278025484, 3428827542),B(1704433468, 2743062034),B(2222540234, 2194449627),B(120090538, 3511119404),B(955065889, 2808895523),B(2482039630, 2247116418),B(3112269949, 3595386269),
B(3348809418, 2876309015),B(2679047534, 2301047212),B(850502218, 3681675540),B(680401775, 2945340432),B(3121301797, 2356272345),B(699115580, 3770035753),B(2277279382, 3016028602),B(103836587, 2412822882),B(1025131999, 3860516611),B(4256079436, 3088413288),B(827883168, 2470730631),B(3901593088, 3953169009)]);M2=Ko([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
var Fz=E();
var MV=null;function M$(){var a=new Fz();Js(a);return a;}
function Js(a){}
var Cs=E(0);
var DC=E();
function Dy(){var a=this;DC.call(a);a.K=0;a.j=null;a.br=0;a.dp=0.0;a.b1=0;}
function FZ(){var a=new Dy();Gc(a);return a;}
function Jc(a,b){return X(BQ,b);}
function Gc(a){var b;b=Hb(16);a.K=0;a.j=a.c6(b);a.dp=0.75;Fu(a);}
function Hb(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fu(a){a.b1=a.j.data.length*a.dp|0;}
function Eh(a,b,c,d){var e,f;e=a.j.data[c];while(e!==null){if(e.bI==d){f=e.Y;if(b!==f&&!b.bh(f)?0:1)break;}e=e.W;}return e;}
function FW(a){var b;b=a.j.data[0];while(b!==null&&b.Y!==null){b=b.W;}return b;}
function Cw(a,b,c){var d,e,f;if(b===null){d=FW(a);if(d===null){a.br=a.br+1|0;d=Fm(a,null,0,0);e=a.K+1|0;a.K=e;if(e>a.b1)FJ(a);}}else{e=b.bv();f=e&(a.j.data.length-1|0);d=Eh(a,b,f,e);if(d===null){a.br=a.br+1|0;d=Fm(a,b,f,e);e=a.K+1|0;a.K=e;if(e>a.b1)FJ(a);}}b=d.x;d.x=c;return b;}
function Fm(a,b,c,d){var e,f;e=new BQ;FT(e,b,null);e.bI=d;f=a.j.data;e.W=f[c];f[c]=e;return e;}
function FJ(a){var b,c,d,e,f,g,h,i;b=a.j.data.length;b=Hb(!b?1:b<<1);c=X(BQ,b);d=c.data;e=0;f=b-1|0;while(true){g=a.j.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.bI&f;i=h.W;h.W=d[b];d[b]=h;h=i;}e=e+1|0;}a.j=c;Fu(a);}
var Ez=E(0);
function GX(){var a=this;C.call(a);a.et=null;a.dO=null;}
function KV(){var a=new GX();J4(a);return a;}
function J4(a){var b;b=new Fa;b.e1=Gd();b.ef=D(15);b.dY=Lr();a.et=b;a.dO=D(119);}
var HZ=E();
function M_(){var a=new HZ();Is(a);return a;}
function Is(a){}
var Hq=E();
function Na(){var a=new Hq();I1(a);return a;}
function I1(a){}
function DU(){var a=this;C.call(a);a.ef=null;a.e1=Bc;}
function Fa(){DU.call(this);this.dY=null;}
function FU(){var a=this;C.call(a);a.dd=null;a.dg=0;}
var GV=E();
function Nb(){var a=new GV();Ji(a);return a;}
function Ji(a){}
function Hn(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.dd.data;f=b.dg;b.dg=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+I7(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Gy(b){var c,d;c=Hn(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Ey=E(0);
function GQ(){var a=this;Dy.call(a);a.ei=0;a.eI=null;}
function Lr(){var a=new GQ();Je(a);return a;}
function Je(a){Gc(a);a.ei=0;a.eI=null;}
function JK(a,b){return X(EC,b);}
var EK=E(BH);
function Nc(){var a=new EK();Kz(a);return a;}
function Kz(a){G(a);}
var D0=E(0);
function Ch(){var a=this;C.call(a);a.Y=null;a.x=null;}
function Nd(a,b){var c=new Ch();FT(c,a,b);return c;}
function FT(a,b,c){a.Y=b;a.x=c;}
function BQ(){var a=this;Ch.call(a);a.bI=0;a.W=null;}
var EC=E(BQ);
var Gt=E();
function Ne(){var a=new Gt();Iw(a);return a;}
function Iw(a){}
var E5=E(0);
function Dk(){var a=this;Ce.call(a);a.D=null;a.l=0;}
function K7(){var a=new Dk();C7(a);return a;}
function IW(a){var b=new Dk();Gk(b,a);return b;}
function C7(a){Gk(a,10);}
function Gk(a,b){var c;if(b>=0){a.D=X(C,b);return;}c=new R;G(c);F(c);}
function GJ(a,b){var c,d;c=a.D.data.length;if(c<b){d=c>=1073741823?2147483647:BF(b,BF(c*2|0,5));a.D=Fb(a.D,d);}}
function HR(a,b){var c;if(b>=0&&b<a.l)return a.D.data[b];c=new Bb;G(c);F(c);}
function Jo(a){return a.l;}
function Cb(a,b){var c,d;GJ(a,a.l+1|0);c=a.D.data;d=a.l;a.l=d+1|0;c[d]=b;a.n=a.n+1|0;return 1;}
var DS=E(Dk);
function Nf(){var a=new DS();JC(a);return a;}
function JC(a){C7(a);}
var FB=E(CM);
function Ng(){var a=new FB();Kg(a);return a;}
function Kg(a){}
var Fl=E(0);
var C9=E();
function Nh(){var a=new C9();In(a);return a;}
function In(a){}
function Ct(a){return $rt_globals.Math.random();}
function DR(){var a=this;C.call(a);a.es=null;a.dJ=0;a.dU=0.0;}
function Ni(){var a=new DR();Iz(a);return a;}
function Iz(a){}
function C8(){var a=this;C.call(a);a.Z=null;a.A=null;a.p=0;a.dA=null;}
function Nj(){var a=new C8();Jz(a);return a;}
function Jz(a){a.p=2147483647;a.Z=null;a.A=null;}
function Do(){var a=this;C.call(a);a.P=null;a.H=null;a.X=0;a.bq=null;}
function Nk(){var a=new Do();Jv(a);return a;}
function Jv(a){a.P=null;a.H=null;a.X=0;a.bq=null;}
function Fr(a,b){var c,d,e,f,g;c=a.P;if(c===null)return EZ(a);a:{d=0;e=a.H.data;f=e.length-1|0;if(f==(-1))g=(-1);else{b:{while(true){if(e[d]>b)break b;if(e[f]<b)break b;g=(f+d|0)/2|0;if(e[g]>b)f=g-1|0;else{if(e[g]>=b)break;d=g+1|0;}}break a;}if(e[f]<b)g=f;else g=d-1|0;}}if(g==(-1))return EZ(a);return c.data[g];}
function EZ(a){if(a.bq===null)a.bq=KU(D(120));return a.bq;}
var Cv=E(S);
function Nl(){var a=new Cv();Im(a);return a;}
function Im(a){G(a);}
var EU=E(BE);
var BX=E();
var Nm=null;var Nn=null;var Ml=null;var Mk=null;var No=null;function Np(){var a=new BX();GC(a);return a;}
function GC(a){}
function Hr(){Nm=JH([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Nn=Fp([J(1),J(10),J(100),J(1000),J(10000),J(100000),J(1000000),J(10000000),J(100000000),J(1000000000),B(1410065408, 2),B(1215752192, 23),B(3567587328, 232),B(1316134912, 2328),B(276447232, 23283),B(2764472320, 232830),B(1874919424, 2328306),B(1569325056, 23283064),B(2808348672, 232830643)]);Ml=Fp([J(1),J(10),J(100),J(10000),J(100000000),B(1874919424, 2328306)]);Mk=new E2;No=new DV;}
function E2(){var a=this;C.call(a);a.bz=Bc;a.bX=0;a.cF=0;}
function Nq(){var a=new E2();JT(a);return a;}
function JT(a){}
var DV=E();
function Nr(){var a=new DV();H_(a);return a;}
function H_(a){}
var Cy=E(S);
function Ns(){var a=new Cy();Ii(a);return a;}
function Ii(a){G(a);}
function EL(){var a=this;C.call(a);a.ct=null;a.cR=null;a.cs=0;a.c0=0;}
function CX(a,b){return BB(a.cR)<b?0:1;}
var CW=E(BH);
function Nt(){var a=new CW();Jd(a);return a;}
function Jd(a){G(a);}
var CP=E(0);
var FX=E(0);
function Gf(){var a=this;C.call(a);a.I=null;a.bd=null;a.c7=null;a.cb=0;a.bA=0;a.S=null;}
function Hp(a,b,c,d){var e=new Gf();JX(e,a,b,c,d);return e;}
function JX(a,b,c,d,e){a.S=b;a.bA=b.n;a.I=c;a.bd=d;a.cb=e;}
function CK(a){return a.I===null?0:1;}
function Ca(a){var b,c;EN(a);b=a.I;if(b===null){b=new FV;G(b);F(b);}c=b.c8;a.c7=b;a.bd=b;a.I=b.O;a.cb=a.cb+1|0;return c;}
function EN(a){var b;if(a.bA>=a.S.n)return;b=new C_;G(b);F(b);}
function Fc(){var a=this;C.call(a);a.c8=null;a.O=null;a.bt=null;}
function Nu(){var a=new Fc();ID(a);return a;}
function ID(a){}
var Dv=E();
function Nv(){var a=new Dv();IE(a);return a;}
function IE(a){}
function Gu(a,b){}
var Fg=E(0);
function BZ(){var a=this;Dv.call(a);a.dr=null;a.d8=null;a.bC=0;a.cA=0;a.c$=null;a.bE=null;a.eE=null;}
function D1(a){var b,c,d;a:{b=a.bC;c=a.cA;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function Gx(a,b){var c;if(a.bE===null){b=new CW;G(b);F(b);}if(!(a.bC&512)){if(b===null){b=new BP;G(b);F(b);}if(!CT(a.dr,b)){b=new R;G(b);F(b);}}c=a.bE;b=b;return c.get(b);}
var FV=E(S);
function Nw(){var a=new FV();IJ(a);return a;}
function IJ(a){G(a);}
var EM=E();
var Nx=null;function E_(){E_=Z(EM);JF();}
function Ny(){var a=new EM();H4(a);return a;}
function H4(a){E_();}
function FM(b){E_();H(b,Nx);}
function C2(b,c){var d;E_();d=0;while(d<c){Bn(b,32);d=d+1|0;}}
function JF(){var b,c;if(Mr===null){b=new DE;CF(b);Bx(b,D(121),D(122));Bx(b,D(123),D(124));Bx(b,D(125),D(119));Bx(b,D(126),D(127));Bx(b,D(128),D(129));Bx(b,D(130),D(131));Bx(b,D(132),D(122));Bx(b,D(133),D(119));c=new DE;CF(c);c.cN=b;Mr=c;}Nx=En(Mr,D(128));}
var FK=E(Cy);
function Nz(){var a=new FK();J5(a);return a;}
function J5(a){G(a);}
var EQ=E(S);
function NA(){var a=new EQ();I0(a);return a;}
function I0(a){G(a);}
var Em=E(S);
function NB(){var a=new Em();Jr(a);return a;}
function Jr(a){G(a);}
var FC=E(0);
var CZ=E(B2);
function Gm(){CZ.call(this);this.cz=null;}
function Lh(){var a=new Gm();IS(a);return a;}
function IS(a){a.cz=FZ();}
var E$=E();
var NC=null;function ND(){var a=new E$();Hc(a);return a;}
function Hc(a){}
function FY(b){return !(b&1)?0:1;}
function GB(){NC=JH([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
var C_=E(S);
function NE(){var a=new C_();Kn(a);return a;}
function Kn(a){G(a);}
var Dm=E();
function B_(){var a=this;Dm.call(a);a.bL=0;a.m=null;a.ck=0.0;a.c9=0;a.U=0;a.F=0;a.dn=0;}
var NF=null;var NG=null;function NH(){var a=new B_();CF(a);return a;}
function CF(a){var b,c;a.F=(-1);a.bL=0;b=X(CQ,11);c=b.data;a.m=b;a.U=c.length;a.ck=0.75;EI(a);}
function EI(a){a.c9=a.m.data.length*a.ck|0;}
function H7(a,b){var c,d,e,f;Ll(a);try{c=B$(b);d=c&2147483647;e=a.m.data;f=e[d%e.length|0];while(f!==null){if(EE(f,b,c))return f.x;f=f.Q;}return null;}finally{Lf(a);}}
function Bx(a,b,c){var d,e,f,g,h,i,j,k,l,m;Ll(a);try{if(b!==null&&c!==null){d=B$(b);e=d&2147483647;f=a.m.data;g=e%f.length|0;h=f[g];while(h!==null&&!EE(h,b,d)){h=h.Q;}if(h!==null){i=h.x;h.x=c;return i;}a.dn=a.dn+1|0;j=a.bL+1|0;a.bL=j;if(j>a.c9){j=(a.m.data.length<<1)+1|0;if(!j)j=1;g=(-1);k=X(CQ,j);f=k.data;d=a.F+1|0;l=j;while(true){d=d+(-1)|0;if(d<a.U)break;i=a.m.data[d];while(i!==null){m=(i.Y.bv()&2147483647)%j|0;if(m<l)l=m;if(m>g)g=m;h=i.Q;i.Q=f[m];f[m]=i;i=h;}}a.U=l;a.F=g;a.m=k;EI(a);g=e%a.m.data.length|
0;}if(g<a.U)a.U=g;if(g>a.F)a.F=g;h=new CQ;FT(h,b,c);h.cJ=B$(b);f=a.m.data;h.Q=f[g];f[g]=h;return null;}b=new BP;G(b);F(b);}finally{Lf(a);}}
function HE(){NF=new Ed;NG=new Ec;}
function DE(){B_.call(this);this.cN=null;}
function NI(){var a=new DE();Jm(a);return a;}
function Jm(a){CF(a);}
function En(a,b){var c,d;c=H7(a,b);d=!(c instanceof Bm)?null:c;if(d===null){c=a.cN;if(c!==null)d=En(c,b);}return d;}
var EF=E(0);
var Ed=E();
function NJ(){var a=new Ed();Kq(a);return a;}
function Kq(a){}
var Ec=E();
function NK(){var a=new Ec();JQ(a);return a;}
function JQ(a){}
function CQ(){var a=this;Ch.call(a);a.Q=null;a.cJ=0;}
function EE(a,b,c){return a.cJ==B$(b)&&a.Y.bh(b)?1:0;}
var G_=E(B4);
function ED(){var a=this;C.call(a);a.bT=0;a.cI=0;a.cK=0;a.cx=0;a.cY=null;}
function IN(a){return a.bT>=a.cK?0:1;}
function I3(a){var b,c,d;b=a.cI;c=a.cY;if(b<c.n){c=new C_;G(c);F(c);}d=a.bT;a.cx=d;a.bT=d+1|0;return c.cE(d);}
function BN(){C.call(this);this.cV=null;}
var NL=null;var NM=null;var NN=null;var NO=null;var NP=null;var NQ=null;function Dq(){Dq=Z(BN);Kc();}
function D_(a){var b=new BN();Gq(b,a);return b;}
function Gq(a,b){Dq();a.cV=b;}
function FE(b){var c,d,e,f,g,h;Dq();if(b===null)return null;a:{c=b;if(NM!==null){d=$rt_str(typeof c);if(!BC(d,D(134))&&!BC(d,D(135))){if(BC(d,D(136))){e=NN.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=D_(c);h=g;NN.set(c,new $rt_globals.WeakRef(h));EH(NP,h,c);return g;}if(!BC(d,D(137)))break a;else{e=NO.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=D_(c);h=g;NO.set(c,new $rt_globals.WeakRef(h));EH(NQ,h,
c);return g;}}e=NM.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=D_(c);NM.set(c,new $rt_globals.WeakRef(g));return g;}}return D_(c);}
function DJ(b){Dq();if(b!==null)return b.cV;return null;}
function D8(b){Dq();if(b===null)return null;return b instanceof $rt_objcls()?b:FE(b);}
function Kc(){NL=new $rt_globals.WeakMap();NM=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();NN=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();NO=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();NP=NN===null?null:new $rt_globals.FinalizationRegistry(Gn(new Fv,"accept"));NQ=NO===null?null:new $rt_globals.FinalizationRegistry(Gn(new Fw,"accept"));}
function EH(b,c,d){return b.register(c,d);}
function HK(){var a=this;C.call(a);a.r=null;a.er=null;a.e=null;a.g=0;}
function Ld(){var a=new HK();KD(a);return a;}
function KD(a){a.e=Bu();}
var EP=E(0);
function BA(){var a=this;C.call(a);a.eF=Bc;a.dI=Bc;a.ey=null;a.dX=null;a.d$=0;a.eW=null;}
var NR=null;var NS=null;var NT=0;var NU=0;var NV=null;function DD(){DD=Z(BA);Jn();}
function NW(){var a=new BA();HL(a);return a;}
function NX(a,b){var c=new BA();DN(c,a,b);return c;}
function HL(a){DD();DN(a,null,null);}
function DN(a,b,c){var d;DD();a.ey=new C;a.d$=1;a.dX=c;a.eW=b;d=NT;NT=d+1|0;a.eF=J(d);}
function Du(b){DD();if(NS!==b)NS=b;NS.dI=Gd();}
function Bu(){DD();return NS;}
function Jn(){var b;b=new BA;DD();DN(b,null,D(138));NR=b;NS=b;NT=1;NU=1;NV=new FO;}
var Dd=E(S);
function NY(){var a=new Dd();H9(a);return a;}
function H9(a){G(a);}
var Bz=E(0);
var Hk=E();
var GH=E();
var HY=E();
var DL=E(0);
var Fv=E();
function NZ(){var a=new Fv();Ib(a);return a;}
function Ib(a){}
function J8(a,b){var c;b=D8(b);c=NN;b=DJ(b);c.delete(b);}
var G4=E();
var Fw=E();
function N0(){var a=new Fw();J$(a);return a;}
function J$(a){}
function Ir(a,b){var c;b=D8(b);c=NO;b=DJ(b);c.delete(b);}
var Gw=E();
function DO(b){return b.length?0:1;}
var Dx=E(0);
function Fx(){C.call(this);this.cQ=null;}
var El=E(0);
var FO=E();
function N1(){var a=new FO();JA(a);return a;}
function JA(a){}
var Ff=E(0);
function EX(){C.call(this);this.b9=null;}
function Lo(b){var c;c=new EX;c.b9=b;return c;}
function DH(a,b){a.b9.d4(b);}
function J9(a,b){a.b9.ew(b);}
function Eb(){var a=this;C.call(a);a.cn=null;a.co=null;a.cl=0;a.cm=null;}
var H5=E();
function N2(){var a=new H5();J6(a);return a;}
function J6(a){}
var H3=E();
function N3(){var a=new H3();Jk(a);return a;}
function Jk(a){}
var GI=E();
function N4(){var a=new GI();Ie(a);return a;}
function Ie(a){}
$rt_packages([-1,"com",0,"github",1,"javacliparser",0,"yahoo",3,"labs",4,"samoa",5,"instances",-1,"java",7,"util",-1,"moa",9,"streams",10,"generators",9,"classifiers",12,"core",13,"splitcriteria",13,"attributeclassobservers",12,"trees",9,"options",9,"tasks"]);
$rt_metadata([C,0,0,[],0,3,0,0,["bv",LA(KB),"bh",LB(Il)],Gv,0,C,[],0,3,0,0,0,Cu,0,C,[],3,3,0,0,0,D3,0,C,[],3,3,0,0,0,Cz,0,C,[Cu,D3],0,3,0,0,0,HN,0,C,[],4,0,0,0,0,Fi,0,C,[],4,3,0,0,0,BL,0,C,[],0,3,0,0,0,Bf,0,BL,[],0,3,0,0,0,S,0,Bf,[],0,3,0,0,0,Hv,0,S,[],0,3,0,0,0,Y,0,C,[],3,3,0,0,0,Bq,0,C,[],3,3,0,0,0,CC,0,C,[],3,3,0,0,0,Bm,0,C,[Y,Bq,CC],0,3,0,CO,["bh",LB(BC),"bv",LA(B$)],BE,0,BL,[],0,3,0,0,0,Ci,0,BE,[],0,3,0,0,0,G5,0,Ci,[],0,3,0,0,0,BM,0,C,[Y],1,3,0,0,0,Cr,0,BM,[Bq],0,3,0,0,0,De,0,C,[Y,CC],0,0,0,0,["b3",LB(EY),
"bP",LA(P)],Di,0,C,[],3,3,0,0,0,M,0,De,[Di],0,3,0,0,["bP",LA(Dp),"b3",LB(Kt)],B7,0,Ci,[],0,3,0,0,0,GY,0,B7,[],0,3,0,0,0,GL,0,B7,[],0,3,0,0,0,Dn,0,C,[],4,3,0,0,0,H2,0,C,[],4,3,0,0,0,Fh,0,C,[],3,3,0,0,0,F6,0,C,[Fh],0,3,0,0,0,Bb,0,S,[],0,3,0,0,0,GF,0,C,[],4,3,0,0,0,BP,0,S,[],0,3,0,0,0,CB,0,S,[],0,3,0,0,0,B0,0,C,[Bq],0,3,0,0,0,Dr,0,Bb,[],0,3,0,0,0,BY,0,C,[Y],3,3,0,0,0,B4,0,C,[BY],1,3,0,0,0,Fj,0,C,[Y],3,3,0,0,0,BJ,0,C,[BY,Fj],3,3,0,0,0,B6,0,B4,[BJ],1,3,0,0,0,Eo,0,C,[BY,BJ],3,3,0,0,0,E8,0,C,[Eo],3,3,0,0,0,Cd,0,C,
[],3,3,0,0,0,Cx,0,B6,[E8,Cd],1,3,0,0,["c1",LC(IU)],Fq,0,C,[],3,3,0,0,0,HI,0,Cx,[Fq,Cd],0,3,0,0,0,CI,"InstanceStream",10,C,[BY,Cd],3,3,0,0,0,HC,"RandomRBFGenerator",11,B6,[CI,Cd],0,3,0,0,["c1",LC(IR)],Cl,0,C,[Y],3,3,0,0,0]);
$rt_metadata([Bk,0,C,[Cl],1,3,0,0,0,Hz,"IntOption",2,Bk,[],0,3,0,0,["C",LA(I5),"w",LB(IY)],C0,0,Bk,[],1,3,0,0,["C",LA(JL)],FF,"ClassOption",17,C0,[],0,3,0,0,["w",LB(I8)],Db,0,C,[BJ],3,3,0,0,0,Ek,"NumericAttributeClassObserver",15,C,[Db],3,3,0,0,0,FA,"DiscreteAttributeClassObserver",15,C,[Db],3,3,0,0,0,D6,"SplitCriterion",14,C,[BJ],3,3,0,0,0,Hj,"FloatOption",2,Bk,[],0,3,0,0,["C",LA(I2),"w",LB(J0)],C5,"FlagOption",2,Bk,[],0,3,0,0,0,E9,"MultiChoiceOption",2,Bk,[],0,3,0,0,["C",LA(Ku),"w",LB(IB)],FD,0,C,[],3,3,0,
0,0,Ep,0,C,[FD],3,3,0,0,0,Fo,0,C,[],3,3,0,0,0,Cf,0,C,[Ep,Fo],1,3,0,0,0,Dc,0,Cf,[],0,3,0,0,0,Eu,0,Dc,[],0,3,0,0,0,CS,0,Cf,[],1,3,0,0,0,E3,0,CS,[],0,3,0,0,0,R,0,S,[],0,3,0,0,0,C6,0,C,[Bq],1,3,0,0,0,FP,0,C6,[],0,3,0,IM,0,BO,0,C,[],3,3,0,0,0,D2,0,Bf,[],0,3,0,0,0,H1,0,R,[],0,3,0,0,0,FN,0,C,[],3,3,0,0,0,Er,0,C,[FN],0,3,0,0,0,CM,0,C,[Y],0,3,0,0,0,E1,0,BE,[],0,3,0,0,0,B8,0,C,[],1,3,0,0,0,F0,0,C,[],3,3,0,0,0,C4,0,B8,[Bq,Di,CC,F0],1,3,0,0,0,G$,0,C,[],4,3,0,0,0,DG,0,B8,[Bq],1,3,0,0,0,Cm,0,C,[],0,3,0,EW,0,Cn,0,C,[Y],0,
3,0,0,0,CU,0,C4,[],1,0,0,0,0,E4,0,CU,[],0,0,0,0,0,CR,0,C,[],1,3,0,0,0,C1,0,C,[],0,3,0,0,0,ES,0,DG,[],0,0,0,0,0,Dl,0,C,[],4,3,0,J1,0,CV,0,C,[Y],0,3,0,0,0,Gl,0,CV,[],0,3,0,0,0,Be,0,R,[],0,3,0,0,0,DT,0,CR,[],1,3,0,0,0,F3,0,DT,[],0,3,0,0,0,Fe,0,Bf,[],0,3,0,0,0,DW,0,BM,[Bq],0,3,0,0,0,B1,0,C,[Y,Bq],0,3,0,Kp,0]);
$rt_metadata([G0,0,C,[],0,3,0,0,0,DM,"Task",18,C,[BY],3,3,0,0,0,F9,0,C,[Y],0,3,0,0,0,GA,0,C,[],4,3,0,0,0,Dg,0,C,[Cu],0,3,0,0,0,Ef,0,C,[],3,3,0,0,0,Cc,0,C,[Ef],3,3,0,0,0,B2,0,C,[Cc],1,3,0,0,0,DK,0,C,[Cc],3,3,0,0,0,D$,0,C,[DK],3,3,0,0,0,Ce,0,B2,[D$],1,3,0,0,["dm",LA(Iy)],Dh,0,Ce,[],1,3,0,0,["cE",LB(H$),"dm",LA(CG)],D4,0,C,[Cc],3,3,0,0,0,Fs,0,C,[D4,DK],3,3,0,0,0,CH,0,Dh,[Fs],0,3,0,0,["bU",LA(Km)],DA,0,C,[],4,3,0,0,0,FR,0,BM,[Bq],0,3,0,0,0,F7,0,S,[],0,3,0,0,0,BH,0,Bf,[],0,3,0,0,0,F2,0,BH,[],0,3,0,0,0,CJ,0,C,[],
4,3,0,0,0,Fz,0,C,[],4,3,0,0,0,Cs,0,C,[],3,3,0,0,0,DC,0,C,[Cs],1,3,0,0,0,Dy,0,DC,[BO,Y],0,3,0,0,["c6",LB(Jc)],Ez,0,C,[],3,3,0,0,0,GX,0,C,[Ez],0,3,0,0,0,HZ,0,C,[],4,0,0,0,0,Hq,0,C,[],4,3,0,0,0,DU,0,C,[],1,3,0,0,0,Fa,0,DU,[],0,3,0,0,0,FU,0,C,[],0,3,0,0,0,GV,0,C,[],4,3,0,0,0,Ey,0,C,[Cs],3,3,0,0,0,GQ,0,Dy,[Ey],0,3,0,0,["c6",LB(JK)],EK,0,BH,[],0,3,0,0,0,D0,0,C,[],3,3,0,0,0,Ch,0,C,[D0,BO],0,0,0,0,0,BQ,0,Ch,[],0,0,0,0,0,EC,0,BQ,[],4,0,0,0,0,Gt,0,C,[],4,3,0,0,0,E5,0,C,[],3,3,0,0,0,Dk,0,Ce,[BO,Y,E5],0,3,0,0,["cE",LB(HR),
"bU",LA(Jo)],DS,0,Dk,[],0,3,0,0,0,FB,"InstancesHeader",6,CM,[],0,3,0,0,0,Fl,0,C,[],3,3,0,0,0,C9,"Random",8,C,[Fl,Y],0,3,0,0,0,DR,"RandomRBFGenerator$Centroid",11,C,[Y],0,3,0,0,0,C8,0,C,[Y],0,3,0,0,0,Do,0,C,[Y],0,3,0,0,0]);
$rt_metadata([Cv,0,S,[],0,3,0,0,0,EU,0,BE,[],0,3,0,0,0,BX,0,C,[],0,0,0,0,0,E2,0,C,[],0,3,0,0,0,DV,0,C,[],0,3,0,0,0,Cy,0,S,[],0,3,0,0,0,EL,0,C,[],0,3,0,0,0,CW,0,BH,[],0,3,0,0,0,CP,0,C,[],3,3,0,0,0,FX,0,C,[CP],3,3,0,0,0,Gf,0,C,[FX],0,0,0,0,["dt",LA(CK),"cT",LA(Ca)],Fc,0,C,[],0,0,0,0,0,Dv,0,C,[Cu],0,3,0,0,0,Fg,0,C,[],3,3,0,0,0,BZ,0,Dv,[Fg],0,3,0,0,0,FV,0,S,[],0,3,0,0,0,EM,0,C,[],0,3,0,E_,0,FK,0,Cy,[],0,3,0,0,0,EQ,0,S,[],0,3,0,0,0,Em,0,S,[],0,3,0,0,0,FC,0,C,[Cc],3,3,0,0,0,CZ,0,B2,[FC],1,3,0,0,0,Gm,0,CZ,[BO,Y],0,
3,0,0,0,E$,0,C,[],0,3,0,0,0,C_,0,S,[],0,3,0,0,0,Dm,0,C,[],1,3,0,0,0,B_,0,Dm,[Cs,BO,Y],0,3,0,0,0,DE,0,B_,[],0,3,0,0,0,EF,0,C,[],3,3,0,0,0,Ed,0,C,[EF],0,0,0,0,0,Ec,0,C,[CP],0,0,0,0,0,CQ,0,Ch,[],0,0,0,0,0,G_,"HoeffdingTree$Node",16,B4,[],0,3,0,0,0,ED,0,C,[CP],0,0,0,0,["dt",LA(IN),"cT",LA(I3)],BN,0,C,[],4,3,0,Dq,0,HK,0,C,[],0,0,0,0,0,EP,0,C,[],3,3,0,0,0,BA,0,C,[EP],0,3,0,DD,0,Dd,0,S,[],0,3,0,0,0,Bz,0,C,[],3,3,0,0,0,Hk,0,C,[Bz],1,3,0,0,0,GH,0,C,[Bz],1,3,0,0,0,HY,0,C,[Bz],1,3,0,0,0,DL,0,C,[Bz],3,3,0,0,0,Fv,0,C,[DL],
0,3,0,0,["eP",LB(J8)],G4,0,C,[Bz],1,3,0,0,0,Fw,0,C,[DL],0,3,0,0,["eP",LB(Ir)],Gw,0,C,[Bz],1,3,0,0,0,Dx,0,C,[],3,3,0,0,0,Fx,0,C,[Dx],0,3,0,0,0]);
$rt_metadata([El,0,C,[],3,3,0,0,0,FO,0,C,[El],0,3,0,0,0,Ff,0,C,[],3,3,0,0,0,EX,0,C,[Ff],0,0,0,0,["d4",LB(DH),"ew",LB(J9)],Eb,0,C,[Dx],0,3,0,0,0,H5,0,C,[],4,3,0,0,0,H3,0,C,[],4,3,0,0,0,GI,0,C,[],4,3,0,0,0]);
function $rt_array(cls,data){this.c=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","0","<java_object>@","Context for a classifier must include a class to learn","New context is not compatible with existing model","true","Index out of bounds","Either src or dest is null","null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ",
"","Materializing option ","...","Preparing option ","maxByteSize","Maximum memory consumed by the tree.","numericEstimator","Numeric estimator to use.","GaussianNumericAttributeClassObserver","nominalEstimator","Nominal estimator to use.","NominalAttributeClassObserver","memoryEstimatePeriod","How many instances between memory consumption checks.","gracePeriod","The number of instances a leaf should observe between split attempts.","splitCriterion","Split criterion to use.","InfoGainSplitCriterion","splitConfidence",
"The allowable error in split decision, values closer to 0 will take longer to decide.","tieThreshold","Threshold below which a split will be forced to break ties.","binarySplits","Only allow binary splits.","stopMemManagement","Stop growing as soon as memory limit is hit.","removePoorAtts","Disable poor attributes.","noPrePrune","Disable pre-pruning.","MC","NB","NBAdaptive","Majority class","Naive Bayes","Naive Bayes Adaptive","leafprediction","Leaf prediction to use.","Labels/descriptions mismatch.","nbThreshold",
"The number of instances a leaf should observe before permitting Naive Bayes.","modelRandomSeed","Seed for random generation of model.","instanceRandomSeed","Seed for random generation of instances.","numClasses","The number of classes to generate.","numAtts","The number of attributes to generate.","numCentroids","The number of centroids in the model.","att","class"," ","-"," (",")","Illegal option name: ","Option "," cannot be less than ",", out of range: "," cannot be greater than ","Problems with option: ",
"file:","inmem:",".","Class not found: ","Problem creating instance of class: ","Class named \'","\' is not an instance of ","Problem with options to \'","\'.\n\nValid options for ",":\n","Label not recognised: ","UTF-8","Replacement preconditions do not hold","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","Action must be non-null","BIG_ENDIAN","LITTLE_ENDIAN","Option","The last char in dst ",
"Duplicate option name: ","Duplicate option command line character: ","Expecting option, found: \'","\'.","Unknown option: -","\"","\'","Quotes not terminated correctly.","(","Brackets do not match.","No options."," (default: ","/","default","java.version","1.8","os.name","TeaVM","file.separator","path.separator",":","line.separator","\n","java.io.tmpdir","/tmp","java.vm.version","user.home","object","function","string","number","main"]);
Bm.prototype.toString=function(){return $rt_ustr(this);};
Bm.prototype.valueOf=Bm.prototype.toString;C.prototype.toString=function(){return $rt_ustr(JZ(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_ucompare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof $rt_globals.BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi
<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x
=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo
+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo
>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r
=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_ucompare=function(a,b){var r=$rt_ucmp(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo
=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo
&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if($rt_globals.Math.abs(a.hi)
<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|
a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo
=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>
16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo
>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==
0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,
b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits
=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,
bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return $rt_globals.BigInt.asIntN(64,a+b);};Long_inc=function(a){return $rt_globals.BigInt.asIntN(64,a+1);};Long_dec=function(a){return $rt_globals.BigInt.asIntN(64,a -1);};Long_neg=function(a){return $rt_globals.BigInt.asIntN(64, -a);};Long_sub=function(a,
b){return $rt_globals.BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_ucompare=function(a,b){a=$rt_globals.BigInt.asUintN(64,a);b=$rt_globals.BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return $rt_globals.BigInt.asIntN(64,a*b);};Long_div=function(a,b){return $rt_globals.BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)/$rt_globals.BigInt.asUintN(64,b));};Long_rem=function(a,b){return $rt_globals.BigInt.asIntN(64,
a%b);};Long_urem=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)%$rt_globals.BigInt.asUintN(64,b));};Long_and=function(a,b){return $rt_globals.BigInt.asIntN(64,a&b);};Long_or=function(a,b){return $rt_globals.BigInt.asIntN(64,a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var W=Long_add;var E7=Long_sub;var U=Long_mul;var FI=Long_div;var Ix=Long_rem;var Iu=Long_or;var Bi=Long_and;var KW=Long_xor;var BG=Long_shl;var JW=Long_shr;var Bh=Long_shru;var N5=Long_compare;var Bv=Long_eq;var D9=Long_ne;var N6=Long_lt;var If=Long_le;var H8=Long_gt;var N7=Long_ge;var N8=Long_not;var N9=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(Lp);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Fv.prototype;c.accept=c.eP;c=Fw.prototype;c.accept=c.eP;})();
}));

//# sourceMappingURL=classes.js.map