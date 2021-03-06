__NULL_OBJECT__ = Object.create(null);
__WEBWORKER__ = false;
__NODEJS__ = false;
__BROWSER__ = false;
if ((typeof(process)!=="undefined"))
{
	__NODEJS__ = true;
}
if ((typeof(window)!=="undefined"))
{
	__BROWSER__ = true;
}
if ((typeof(importScripts)==="function"))
{
	__WEBWORKER__ = true;
}
if ((! (__NODEJS__) && ! (__WEBWORKER__)))
{
	if ((typeof(HTMLDocument)==="undefined"))
	{
		HTMLDocument = Document;
	}
}
IndexError = function(msg) {this.message = msg || "";}; IndexError.prototype = Object.create(Error.prototype); IndexError.prototype.name = "IndexError";
KeyError   = function(msg) {this.message = msg || "";}; KeyError.prototype = Object.create(Error.prototype); KeyError.prototype.name = "KeyError";
ValueError = function(msg) {this.message = msg || "";}; ValueError.prototype = Object.create(Error.prototype); ValueError.prototype.name = "ValueError";
AttributeError = function(msg) {this.message = msg || "";}; AttributeError.prototype = Object.create(Error.prototype);AttributeError.prototype.name = "AttributeError";
RuntimeError   = function(msg) {this.message = msg || "";}; RuntimeError.prototype = Object.create(Error.prototype);RuntimeError.prototype.name = "RuntimeError";
json = { "loads":(function (s) {return JSON.parse(s);}), "dumps":(function (o) {return JSON.stringify(o);}) };
var hasattr = function(ob, attr)
{
	return Object.hasOwnProperty.call(ob, attr);
}

var len = function(ob)
{
	if (ob instanceof Array)
	{
		return ob.length;
	}
	else
	{
		if (__is_typed_array(ob))
		{
			return ob.length;
		}
		else
		{
			if (ob.__len__)
			{
				return ob.__len__();
			}
			else
			{
				return Object.keys(ob).length;
			}
		}
	}
}

var func = function(a)
{
	if ((this.indexOf(a)===-1))
	{
		return false;
	}
	else
	{
		return true;
	}
}

String.prototype.__contains__ = func;
var func = function(start, stop, step)
{
	if ((( start ) === undefined && ( stop ) === undefined && (step===-1)))
	{
		return this.split("").reverse().join("");
	}
	else
	{
		if (( stop ) < 0)
		{
			stop = (this.length + stop);
		}
		return this.substring(start, stop);
	}
}

String.prototype.__getslice__ = func;
String.prototype.splitlines = (function () {return this.split("\n");});
String.prototype.strip = (function () {return this.trim();});
var func = function(a)
{
	if ((this.substring(0, a.length)===a))
	{
		return true;
	}
	else
	{
		return false;
	}
}

String.prototype.startswith = func;
var func = function(a)
{
	if ((this.substring((this.length - a.length), this.length)===a))
	{
		return true;
	}
	else
	{
		return false;
	}
}

String.prototype.endswith = func;
var func = function(a)
{
	out = "";
	if (a instanceof Array)
	{
		arr = a;
	}
	else
	{
		arr = a["$wrapped"];
	}
	i = 0;
	for (var __i1=0; __i1 < arr.length; __i1++)
	{
		var value = arr[ __i1 ];
		if (out instanceof Array || __is_typed_array(out)) { out.extend(value); }
else { out += value; }
		if (i instanceof Array || __is_typed_array(i)) { i.extend(1); }
else { i += 1; }
		if (( i ) < arr.length)
		{
			if (out instanceof Array || __is_typed_array(out)) { out.extend(this); }
else { out += this; }
		}
	}
	return out;
}

String.prototype.join = func;
String.prototype.upper = (function () {return this.toUpperCase();});
String.prototype.lower = (function () {return this.toLowerCase();});
var func = function(a)
{
	i = this.indexOf(a);
	if ((i===-1))
	{
		throw new ValueError((a + " - not in string"));
	}
	return i;
}

String.prototype.index = func;
var func = function(a)
{
	if ((this.indexOf(a)===-1))
	{
		return false;
	}
	else
	{
		return true;
	}
}

Array.prototype.__contains__ = func;
var func = function(start, stop, step)
{
	arr = [];
	start = (start | 0);
	if (( stop ) === undefined)
	{
		stop = this.length;
	}
	if (( start ) < 0)
	{
		start = (this.length + start);
	}
	if (( stop ) < 0)
	{
		stop = (this.length + stop);
	}
	if ((typeof(step)==="number"))
	{
		if (( step ) < 0)
		{
			i = start;
			while (( i ) >= 0)
			{
				arr.push(this[i]);
				if (i instanceof Array || __is_typed_array(i)) { i.extend(step); }
else { i += step; }
			}
			return arr;
		}
		else
		{
			i = start;
			n = stop;
			while (( i ) < n)
			{
				arr.push(this[i]);
				if (i instanceof Array || __is_typed_array(i)) { i.extend(step); }
else { i += step; }
			}
			return arr;
		}
	}
	else
	{
		i = start;
		n = stop;
		while (( i ) < n)
		{
			arr.push(this[i]);
			if (i instanceof Array || __is_typed_array(i)) { i.extend(1); }
else { i += 1; }
		}
		return arr;
	}
}

Array.prototype.__getslice__ = func;
var func = function(start, stop, step, items)
{
	if (( start ) === undefined)
	{
		start = 0;
	}
	if (( stop ) === undefined)
	{
		stop = this.length;
	}
	arr = [start, (stop - start)];
	for (var __i2=0; __i2 < items.length; __i2++)
	{
		var item = items[ __i2 ];
		arr.push(item);
	}
	this.splice.apply(this, arr);
}

Array.prototype.__setslice__ = func;
var func = function(item)
{
	this.push(item);
	return this;
}

Array.prototype.append = func;
var func = function(other)
{
	a = [];
	a.extend(this);
	a.extend(other);
	return a;
}

Array.prototype.__add__ = func;
var func = function(other)
{
	for (var __i3=0; __i3 < other.length; __i3++)
	{
		var obj = other[ __i3 ];
		this.push(obj);
	}
	return this;
}

Array.prototype.extend = func;
var func = function(item)
{
	index = this.indexOf(item);
	this.splice(index, 1);
}

Array.prototype.remove = func;
var func = function(index, obj)
{
	if (( index ) < 0)
	{
		index = (this.length + index);
	}
	this.splice(index, 0, obj);
}

Array.prototype.insert = func;
Array.prototype.index = (function (obj) {return this.indexOf(obj);});
var func = function(obj)
{
	a = 0;
	for (var __i4=0; __i4 < this.length; __i4++)
	{
		var item = this[ __i4 ];
		if (( item ) === obj)
		{
			if (a instanceof Array || __is_typed_array(a)) { a.extend(1); }
else { a += 1; }
		}
	}
	return a;
}

Array.prototype.count = func;
var __contains__ = function(ob, a)
{
	t = typeof(ob);
	if ((t==="string"))
	{
		if ((ob.indexOf(a)===-1))
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	else
	{
		if ((t==="number"))
		{
			throw new TypeError;
		}
		else
		{
			if (__is_typed_array(ob))
			{
				for (var __i5=0; __i5 < ob.length; __i5++)
				{
					var x = ob[ __i5 ];
					if ((x===a))
					{
						return true;
					}
				}
				return false;
			}
			else
			{
				if ((ob && ob.__contains__))
				{
					return ob.__contains__(a);
				}
				else
				{
					if ((ob instanceof Object && Object.hasOwnProperty.call(ob, a)))
					{
						return true;
					}
					else
					{
						return false;
					}
				}
			}
		}
	}
}

__dom_array_types__ = [];
if ((typeof(NodeList)==="function"))
{
	__dom_array_types__ = [NodeList, FileList, DOMStringList, HTMLCollection, SVGNumberList, SVGTransformList];
	if ((typeof(DataTransferItemList)==="function"))
	{
		__dom_array_types__.push(DataTransferItemList);
	}
	if ((typeof(HTMLAllCollection)==="function"))
	{
		__dom_array_types__.push(HTMLAllCollection);
	}
	if ((typeof(SVGElementInstanceList)==="function"))
	{
		__dom_array_types__.push(SVGElementInstanceList);
	}
	if ((typeof(ClientRectList)==="function"))
	{
		__dom_array_types__.push(ClientRectList);
	}
}
var __is_some_array = function(ob)
{
	if (( __dom_array_types__.length ) > 0)
	{
		for (var __i6=0; __i6 < __dom_array_types__.length; __i6++)
		{
			var t = __dom_array_types__[ __i6 ];
			if (ob instanceof t)
			{
				return true;
			}
		}
	}
	return false;
}

var __is_typed_array = function(ob)
{
	if ((ob instanceof Int16Array || ob instanceof Uint16Array))
	{
		return true;
	}
	else
	{
		if ((ob instanceof Int32Array || ob instanceof Uint32Array))
		{
			return true;
		}
		else
		{
			if ((ob instanceof Float32Array || ob instanceof Float64Array))
			{
				return true;
			}
			else
			{
				return false;
			}
		}
	}
}

var __js_typed_array = function(t, a)
{
	if ((t==="i"))
	{
		arr =  new Int32Array(a.length);
	}
	arr.set(a);
	return arr;
}

/* notes:
		. Object.keys(ob) will not work because we create PythonJS objects using `Object.create(null)`
		. this is different from Object.keys because it traverses the prototype chain. */
var __object_keys__ = function(ob)
{
	arr = [];
	for (var key in ob) { arr.push(key) };
	return arr;
}

var __sprintf = function(fmt, args)
{
	if (args instanceof Array)
	{
		chunks = fmt.split("%s");
		arr = [];
		i = 0;
		for (var __i7=0; __i7 < chunks.length; __i7++)
		{
			var txt = chunks[ __i7 ];
			arr.append(txt);
			if (( i ) >= args.length)
			{
				break;
			}
			item = args[i];
			if ((typeof(item)==="string"))
			{
				arr.append(item);
			}
			else
			{
				if ((typeof(item)==="number"))
				{
					arr.append(("" + item));
				}
				else
				{
					arr.append(Object.prototype.toString.call(item));
				}
			}
			if (i instanceof Array || __is_typed_array(i)) { i.extend(1); }
else { i += 1; }
		}
		return "".join(arr);
	}
	else
	{
		return fmt.replace('%s', args);
	}
}

var __jsdict = function(items)
{
	d = {};
	for (var __i8=0; __i8 < items.length; __i8++)
	{
		var item = items[ __i8 ];
		key = item[0];
		if (key instanceof Array)
		{
			key = JSON.stringify(key);
		}
		else
		{
			if (key.__uid__)
			{
				key = key.__uid__;
			}
		}
		d[key] = item[1];
	}
	return d;
}

var __jsdict_get = function(ob, key, default_value)
{
	if (ob instanceof Object)
	{
		if (key instanceof Array)
		{
			key = JSON.stringify(key);
		}
		if (key in ob)
		{
			return ob[key];
		}
		return default_value;
	}
	else
	{
		if (( default_value ) !== undefined)
		{
			return ob.get(key, default_value);
		}
		else
		{
			return ob.get(key);
		}
	}
}

var __jsdict_set = function(ob, key, value)
{
	if (ob instanceof Object)
	{
		if (key instanceof Array)
		{
			key = JSON.stringify(key);
		}
		ob[key] = value;
	}
	else
	{
		ob.set(key,value);
	}
}

var __jsdict_keys = function(ob)
{
	if (ob instanceof Object)
	{
		return Object.keys( ob );
	}
	else
	{
		return ob.keys();
	}
}

var __jsdict_values = function(ob)
{
	if (ob instanceof Object)
	{
		arr = [];
		for (var __i9=0; __i9 < ob.length; __i9++)
		{
			var key = ob[ __i9 ];
			if (ob.hasOwnProperty(key))
			{
				value = ob[key];
				arr.push(value);
			}
		}
		return arr;
	}
	else
	{
		return ob.values();
	}
}

var __jsdict_items = function(ob)
{
	if ((ob instanceof Object || ( ob.items ) === undefined))
	{
		arr = [];
		for (var __i10=0; __i10 < ob.length; __i10++)
		{
			var key = ob[ __i10 ];
			if (Object.hasOwnProperty.call(ob, key))
			{
				value = ob[key];
				arr.push([key, value]);
			}
		}
		return arr;
	}
	else
	{
		return ob.items();
	}
}

var __jsdict_pop = function(ob, key, _default)
{
	if (ob instanceof Array)
	{
		if (ob.length)
		{
			if (( key ) === undefined)
			{
				return ob.pop();
			}
			else
			{
				return ob.splice(key, 1)[0];
			}
		}
		else
		{
			throw new IndexError(key);
		}
	}
	else
	{
		if (ob instanceof Object)
		{
			if (key in ob)
			{
				v = ob[key];
				delete ob[key];
				return v;
			}
			else
			{
				if (( _default ) === undefined)
				{
					throw new KeyError(key);
				}
				else
				{
					return _default;
				}
			}
		}
		else
		{
			return ob.pop(key, _default);
		}
	}
}

var __jsdict_update = function(ob, other)
{
	if ((typeof(ob["update"])==="function"))
	{
		return ob.update(other);
	}
	else
	{
		for (var __i11=0; __i11 < __object_keys__(other).length; __i11++)
		{
			var key = __object_keys__(other)[ __i11 ];
			ob[key] = other[key];
		}
	}
}

/* This returns an array that is a minimal implementation of set.
	Often sets are used simply to remove duplicate entries from a list, 
	and then it get converted back to a list, it is safe to use fastset for this.

	The array prototype is overloaded with basic set functions:
		difference
		intersection
		issubset */
var set = function(a)
{
	s = [];
	for (var __i12=0; __i12 < a.length; __i12++)
	{
		var item = a[ __i12 ];
		if ((s.indexOf(item)===-1))
		{
			s.push(item);
		}
	}
	return s;
}

var frozenset = function(a)
{
	return set(a);
}
