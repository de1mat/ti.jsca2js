/**
 * @namespace <p>Top-level module for Alloy functions.</p>

<p>Alloy is an application framework built on top of the Titanium SDK designed to help rapidly
develop high quality applications and reduce maintenance.</p>

<p>Alloy uses the model-view-controller architecture to separate the application into three
components:</p>

<ul>
<li><p><strong>Models</strong> provide the data of the application. Alloy utilizes <strong>Backbone Model and Collection</strong>
 objects for this functionality.</p></li>
<li><p><strong>Views</strong> provide the UI components to interact with the application, written using <strong>XML markup</strong>
and <strong>Titanium Stylesheets (TSS)</strong>, which abstracts the UI components of the Titanium API.</p></li>
<li><p><strong>Controllers</strong> provide the glue layer between the Model and View components as well as
additional application logic using the <strong>Alloy API</strong> and <strong>Titanium API</strong>.</p></li>
</ul>


<p>The API documentation provided here is used with Alloy Controllers and Widget Controllers to
interact with the View and Model components of the application or widget.</p>

<p>For guides on using Alloy, see
{@link http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Framework}.</p>

 */
var Alloy = {

    /**
     * @type Object
     */
    CFG:null,

    /**
     * @type Object
     */
    Collections:null,

    /**
     * @type Object
     */
    Globals:null,

    /**
     * @type Object
     */
    Models:null,

    /**
     * @type Boolean
     */
    isHandheld:null,

    /**
     * @type Boolean
     */
    isTablet:null,


    /**
     * @param {String} name <p>Name of model to hold in this collection.</p>


     * @param {Object} [args] <p>Arguments to pass to the collection.</p>


     */
    createCollection:function(name, args) {
    },

    /**
     * @param {String} name <p>Name of controller to instantiate.</p>


     * @param {Object} [args] <p>Arguments to pass to the controller.</p>


     */
    createController:function(name, args) {
    },

    /**
     * @param {String} name <p>Name of model to instantiate.</p>


     * @param {Object} [args] <p>Arguments to pass to the model.</p>


     */
    createModel:function(name, args) {
    },

    /**
     * @param {String} id <p>Id of widget to instantiate.</p>


     * @param {String} [name] <p>Name of the view within the widget to instantiate ('widget' by default)</p>


     * @param {Object} [args] <p>Arguments to pass to the widget.</p>


     */
    createWidget:function(id, name, args) {
    }
};

/**
 * @namespace <p>Class to access or create collections.</p>

<p>Collections can either be created in markup or programmatically in the controller.</p>

<p>To create collections in markup use a <code>&lt;Collection/&gt;</code> element. For
more information see {@link #!/guide/Alloy_XML_Markup}
in the Alloy developer guide.</p>

<p>In the controller code:</p>

<ul>
<li> To create a local instance, use the {@link #!/api/Alloy} method.</li>
<li> To create a global singleton instance, use the {@link #!/api/Alloy.Collections} method.</li>
</ul>


<p>Previously created collections through markup or using the <code>{@link #!/api/Alloy.Collections}</code> method
are directly accessed as properties of the <code>{@link #!/api/Alloy.Collections" rel="Alloy.Collections" class="docClass}</code> namespace,
using either the name of the model JavaScript file for singletons
or the ID name for local instances.</p>

 */
Alloy.Collections = {


    /**
     * @param {String} name <p>the name of the base model for the collection</p>

     */
    instance:function(name) {
    }
};

/**
 * @namespace <p>The base class for Alloy controllers.</p>

<p>Each controller is associated with a UI hierarchy, defined in an XML file in the
<code>views</code> folder. Each element in the view hierarchy is either a Titanium View
or another Alloy controller or widget. Each Alloy controller or widget can additionally contain
Titanium Views and/or more controllers and widgets.</p>

 */
Alloy.Controller = {


    /**
     * @param {Object} proxy <p>View object to which to add class(es).</p>

     * @param {Array<String>/String} classes <p>Array or space-separated list of classes to apply.</p>

     * @param {Dictionary} [opts] <p>Dictionary of properties to apply after classes have been added.</p>

     * @since [u'1.2.0']
     */
    addClass:function(proxy, classes, opts) {
    },

    /**
     * @param {Object} [proxy] <p>Proxy view object to listen to.</p>

     * @param {String} [type] <p>Event type to listen to.</p>

     * @param {Function} [callback] <p>Callback to receive event.</p>

     */
    addListener:function(proxy, type, callback) {
    },

    /**
     * @param {AlloyStyleDict} opts <p>Dictionary of styles to apply.</p>

     * @since [u'1.2.0']
     */
    createStyle:function(opts) {
    },

    /**
     */
    destroy:function() {
    },

    /**
     * @param {Object} [proxy] <p>Proxy view object to remove from.</p>

     * @param {String} [type] <p>Event type to remove.</p>

     */
    getListener:function(proxy, type) {
    },

    /**
     */
    getTopLevelViews:function() {
    },

    /**
     * @param {String} [id] <p>ID of the view to return.</p>

     */
    getView:function(id) {
    },

    /**
     */
    getViews:function() {
    },

    /**
     * @param {Object} proxy <p>View object from which to remove class(es).</p>

     * @param {Array<String>/String} classes <p>Array or space-separated list of classes to remove.</p>

     * @param {Dictionary} [opts] <p>Dictionary of properties to apply after the class removal.</p>

     * @since [u'1.2.0']
     */
    removeClass:function(proxy, classes, opts) {
    },

    /**
     * @param {Object} [proxy] <p>Proxy view object to remove from.</p>

     * @param {String} [type] <p>Event type to remove.</p>

     * @param {Function} [callback] <p>Callback to remove.</p>

     */
    removeListener:function(proxy, type, callback) {
    },

    /**
     * @param {Object} proxy <p>View object to reset.</p>

     * @param {Array<String>/String} [classes] <p>Array or space-separated list of classes to apply after the reset.</p>

     * @param {Dictionary} [opts] <p>Dictionary of properties to apply after the reset.</p>

     * @since [u'1.2.0']
     */
    resetClass:function(proxy, classes, opts) {
    },

    /**
     * @param {Object} args <p>An object whose keys are the IDs (in form '#id') of views to which the styles will be applied.</p>

     * @since [u'1.4.0']
     */
    updateViews:function(args) {
    }
};

/**
 * @namespace <p>Provides convenience methods for working with Titanium UI objects.</p>

 */
Alloy.Controller.UI = {


    /**
     * @param {String} apiName <p>Name of the Titanium object to create. This can either be the full class
name, such as <code>Ti.UI.Button</code>, or the XML element, such as <code>Button</code>.</p>

     * @param {AlloyStyleDict} opts <p>Dictionary of styles to apply. <code>opts</code> may also contain any additional properties you would like to apply directly the created Titanium object.</p>

     * @since [u'1.2.0']
     */
    create:function(apiName, opts) {
    }
};

/**
 * @namespace <p>Class to access or create models.</p>

<p>Models can either be created in markup or programmatically in the controller.</p>

<p>To create models in markup, see the 'Model Element' section in the
{@link #!/guide/Alloy_XML_Markup}.</p>

<p>In the controller code:</p>

<ul>
<li> To create a local instance, use the {@link #!/api/Alloy} method.</li>
<li> To create a global singleton instance, use the {@link #!/api/Alloy.Models} method.</li>
</ul>


<p>Previously created models through markup or using the <code>instance</code> method
are directly accessed as properties of the <code>{@link #!/api/Alloy.Models" rel="Alloy.Models" class="docClass}</code> namespace,
using either the name of the model JavaScript file for singletons
or the ID name for local instances.</p>

 */
Alloy.Models = {


    /**
     * @param {String} name <p>the name of the base model for the model</p>

     */
    instance:function(name) {
    }
};

/**
 * @namespace <p>Widgets are self-contained components that can be easily dropped into an Alloy project.
They were conceived as a way to reuse code in multiple projects or to be used multiple
times in the same project.</p>

<p>Note that to use the methods list below, the correct namespace is <code>Widget.create*</code> not
<code>Alloy.Widget.create*</code>.</p>

<p>For more information on widgets, see {@link http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Widgets}.</p>

<h4>Creating a Widget</h4>

<p>Widgets are essentially miniature Alloy projects that contain their own models, views, controllers
and assets.  They are laid out the same way as an Alloy project.</p>

<p>Use <code>Widget.createController()</code>, <code>Widget.createWidget()</code>,  <code>Widget.createModel()</code> and
<code>Widget.createCollection()</code> rather than the <code>Alloy.create*</code> methods to create
components relative to the widget context rather than the Alloy project.</p>

<h4>Using a Widget</h4>

<p>To import a widget in to a project:</p>

<ol>
<li>Copy the widget to the <code>app/widgets</code> folder.  The widget must be contained within its own folder.</li>
<li>Update the <code>dependencies</code> object in the <code>config.json</code> file by adding a key/value pair with the name of
the widget as the key and the version number as the value.</li>
<li><p>Add the widget to a view or create an instance of the widget in a controller:</p>

<ul>
<li>To add a widget to a view, add the <Widget> tag in the XML markup and
set the <code>src</code> attribute to the folder name of the widget.</Widget></li>
<li>To create an instance of a widget in a controller, use the {@link #!/api/Alloy} method.</li>
</ul>
</li>
</ol>


<p>You can optionally add the <code>id</code> and <code>name</code> attributes to the <code>Widget</code> element:</p>

<ul>
<li>The <code>id</code> attribute allows you to reference the widget in the controller code.  You can use this
reference to call methods exported by the widget.</li>
<li>The <code>name</code> attribute allows you to import a specific view-controller in the widget rather than the
default one (<code>widget.xml</code>/<code>widget.js</code>).  Specify the name of the view-controller minus the extension.</li>
</ul>


<p>For example, to import a widget called <code>mywidget</code> in to a project, copy <code>mywidget</code> to the
<code>app/widgets</code> folder, where its assets, controllers, views, etc. are contained in the
<code>app/widgets/mywidget</code> folder.</p>

<pre><code>app
 config.json
 controllers
    index.js
 views
    index.xml
 widgets
     mywidget
         controllers
            foo.js
            widget.js
         views
            foo.xml
            widget.xml
         widget.json
</code></pre>

<p>Next, add it as a dependency in your <code>config.json</code> file:</p>

<pre><code>...
"dependencies":{
    "mywidget":"1.0"
}
</code></pre>

<p>Finally, either add the widget in the XML markup of the view or create an instance of the widget in the controller.</p>

<p>To add the widget in the view, use the <code>Widget</code> tag, specifying the <code>src</code> attribute as the name of
the widget:</p>

<pre><code>&lt;Alloy&gt;
    &lt;Window id="win"&gt;
        &lt;Widget id="myWidget" src="mywidget" /&gt;
    &lt;/Window&gt;
&lt;/Alloy&gt;
</code></pre>

<p>Since the <code>id</code> attribute is defined, the widget can be referenced in the controller using
<code>$.myWidget</code>.</p>

<p>To add the widget in the controller, use the <code>{@link #!/api/Alloy}</code> method. The first required parameter is
the name of the widget. The second optional parameter can specify the view component to
instantiate and the last optional parameter can specify the arguments to instantiate the widget.
For example, the following controller code is equivalent to the previous view markup example.</p>

<pre><code>var myWidget = {@link #!/api/Alloy}("mywidget");
win.add(myWidget.getView());
</code></pre>

<p>A widget can also be added to other widgets.  Follow the same procedure as above except the widget
configuration file is called <code>widget.json</code> instead of <code>config.json</code>.</p>

 */
Alloy.Widget = {


    /**
     * @param {String} name <p>Name of model to hold in this collection.</p>


     * @param {Object} [args] <p>Arguments to pass to the collection.</p>


     * @since [u'1.1.0']
     */
    createCollection:function(name, args) {
    },

    /**
     * @param {String} name <p>Name of controller to instantiate.</p>


     * @param {Object} [args] <p>Arguments to pass to the controller.</p>


     * @since [u'1.1.0']
     */
    createController:function(name, args) {
    },

    /**
     * @param {String} name <p>Name of model to instantiate.</p>


     * @param {Object} [args] <p>Arguments to pass to the model.</p>


     * @since [u'1.1.0']
     */
    createModel:function(name, args) {
    },

    /**
     * @param {String} id <p>Id of widget to instantiate.</p>


     * @param {String} [name] <p>Name of the view within the widget to instantiate ('widget' by default)</p>


     * @param {Object} [args] <p>Arguments to pass to the widget.</p>


     * @since [u'1.1.0']
     */
    createWidget:function(id, name, args) {
    }
};

/**
 * @namespace <p>Alloy provides some additional utility libraries that simplify certain functions,
such as animations, string manipultation and display unit conversion.  These libraries
are referred to as "builtins."</p>

<p>To use a builtin library, require the library name, minus the '.js' extension,
with <code>alloy</code> as the root directory in your <code>require</code> call.
For example, to use the animation builtin:</p>

<pre><code>var animation = require('alloy/animation');
animation.crossFade(view1, view2, 500, finishCallback);
</code></pre>

<p>During the compilation process, Alloy determines which builtins are being used,
and adds them to the generated Titanium project.</p>

 */
Alloy.builtins = {



};

/**
 * @namespace <p>Moment.js is a freely distributable, third-party JavaScript date library
for parsing, validating, manipulating, and formatting dates.</p>

<p>To use the moment.js library in Alloy,
require it with the <code>alloy</code> root directory in your <code>require</code> call. For example:</p>

<pre><code>var moment = require('alloy/moment');
var day = moment("12-25-1995", "MM-DD-YYYY");
Ti.API.info("Date:" + day.format("dddd, MMMM Do YYYY, h:mm:ss a")); // --&gt; Monday, December 25th 1995, 12:00:00 am
</code></pre>

<p>To change the locale globally, the application calls the moment.lang() function, passing it the new language code.</p>

<pre><code>var moment = require('alloy/moment');
require('alloy/moment/lang/de');
require('alloy/moment/lang/fr');
moment.lang(Ti.Locale.currentLocale); // Set current system locale, as a combination of ISO 2-letter language and country codes.
</code></pre>

<p>For documentation, usage examples and more information, see {@link http://momentjs.com}.</p>

 */
Alloy.builtins.moment = {



};

/**
 * @namespace <p>The sample widgets are no longer supplied or supported and have been removed from Alloy.</p>

<p>Maintained versions of the sample widgets are available at {@link http://gitt.io/}.</p>

<p>For information on using a widget in your project, see
{@link #!/api/Alloy.Widget" rel="Alloy.Widget" class="docClass}.</p>

 */
Alloy.widgets = {



};

/**
 * @namespace <p>Simple JavaScript object of properties and TSS classes to apply to a Titanium UI object.</p>

<p>All properties are optional.</p>

<p>The <code>apiName</code> property is only specified with the <code>createStyle</code> method.</p>

<p>In addition to the properties defined below, you can also specify properties related to the
component.</p>

 * @since [u'1.2.0']
 */
var AlloyStyleDict = {

    /**
     * @type String
     */
    apiName:null,

    /**
     * @type Array<String>
     */
    classes:null,

    /**
     * @type String
     */
    id:null,



};


var Titanium = Ti;
