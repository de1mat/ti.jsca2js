ti.jsca2js
==========

> I have adopted this project to get it working again with python3 and the Titanium SDK independent of Appcelerator.
> This part of the mission is done. But the code completion is sub-optimal. Improvements coming shortly.

This project provides a set of utilities to convert the Titanium SDK API to JSDoc annotated
JavaScript files. This generated JS file can then be used in IDE's such as [IntelliJ IDEA](http://www.jetbrains.com/idea/)
for code completion and documentation lookup.

If you drop this Javascript API in the root of your Titanium mobile project,
smart JS editors' code completion will help you write this kind of stuff easily:

```
var win = Ti.UI.createWindow(options);
win.<completion for Window proxy object>
```

How It Works
------------

The main function used to convert JSCA JSON to JavaScript is named `convertJsca2Js` and is provided through 
the `jsca2js.py` script. This function expects a JSON object containing the API in the [JSCA specification](https://web.archive.org/web/20160812230230/https://wiki.appcelerator.org/display/guides2/JSCA+1.0+Specification) 
and produces a string containing the converted JavaScript.

You can find the files a valid JSCA file inside your locally installed Titanium SDKs folder.

On Macs, for example:  

```
/Users/{YOUR USER}/Library/Application Support/Titanium/mobilesdk/osx/{TI SDK VERSION}/api.jsca
```

Creating the Titanium JavaScript file
-------------------------------------

The `titanium-mobile.py` script can be used to create a JavaScript file for Titanium Mobile API. This script 
will automatically fetch the `api.json` file from the installed SDK location and produce the corresponding JavaScript file.

### Usage:

```
titanium-mobile.py <path-to-local-titanium-version>
```

### Output

The script will produce the JavaScript file in the current directory with a name that follows the following format:

```
titanium-mobile-<titanium-version>.js
```