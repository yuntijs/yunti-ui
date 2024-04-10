"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[6242],{25120:function(c,n,e){e.r(n);var t=e(20456),a=e(34834),r=e(11527);n.default=function(){return(0,r.jsx)(t.MonacoDiffEditor,{height:"300px",language:"javascript",onChange:function(i){console.log(i)},original:a.J,value:a.S,width:"740px"})}},52709:function(c,n,e){e.r(n);var t=e(77117),a=e.n(t),r=e(18604),s=e(39944),i=e(20456),o=e(34834),m=e(11527);n.default=function(){var u=(0,r.WQ)(),p=(0,r.M4)({readOnly:!1,lineNumbers:{options:["on","off","relative","interval"],value:"on"},wordWrap:{options:["off","on","wordWrapColumn","bounded"],value:"off"},contextmenu:!0,minimapEnabled:!1,language:{options:["css","html","javascript","json","typescript","yaml"],value:"javascript"},theme:{options:["vs","vs-dark","hc-light","hc-black"],value:""},supportFullScreen:!0,enableOutline:!1,width:"400px",height:"560px",original:{rows:!0,value:o.J},value:{rows:!0,value:o.S},inlineView:{options:["off","on","auto"],value:"auto"}},{store:u});return(0,m.jsx)(s.ZP,{levaStore:u,children:(0,m.jsx)(i.MonacoDiffEditor,a()({},p))})}},40768:function(c,n,e){e.r(n);var t=e(21320),a=e.n(t),r=e(77117),s=e.n(r),i=e(28152),o=e.n(i),m=e(20456),u=e(1502),p=e(88612),b=e(50959),_=e(11527);n.default=function(){var E=(0,b.useState)({"a.json":{name:"a.json",language:"json",value:'{ "a": 1 }'},"b.js":{name:"b.js",language:"javascript",value:"var a = 1"},"c.sql":{name:"c.sql",language:"sql",value:"SELECT * from table where id = 1"}}),f=o()(E,2),h=f[0],g=f[1],P=(0,b.useState)("a.json"),y=o()(P,2),v=y[0],O=y[1],l=h[v];return(0,_.jsxs)(u.Z,{direction:"vertical",size:"large",children:[(0,_.jsx)(p.Z,{onChange:function(d){return O(d)},options:Object.keys(h),value:v}),(0,_.jsx)(m.MonacoEditor,{defaultValue:l.value,height:40,language:l.language,onChange:function(d){g(function(M){return s()(s()({},M),{},a()({},l.name,s()(s()({},M[l.name]),{},{value:d})))})},path:l.name,saveViewState:!0,width:600})]})}},36660:function(c,n,e){e.r(n);var t=e(77117),a=e.n(t),r=e(18604),s=e(39944),i=e(20456),o=e(11527);n.default=function(){var m=(0,r.WQ)(),u=(0,r.M4)({readOnly:!1,lineNumbers:{options:["on","off","relative","interval"],value:"on"},wordWrap:{options:["off","on","wordWrapColumn","bounded"],value:"off"},contextmenu:!0,minimapEnabled:!1,language:{options:["css","html","javascript","json","typescript","yaml"],value:"json"},theme:{options:["vs","vs-dark","hc-light","hc-black"],value:""},supportFullScreen:!0,enableOutline:!1,width:"400px",height:"440px",value:{rows:!0,value:JSON.stringify({type:"team",test:{testPage:"tools/testing/run-tests.htm",enabled:!0},search:{excludeFolders:[".git","node_modules","tools/bin","tools/counts","tools/policheck","tools/tfs_build_extensions","tools/testing/jscoverage","tools/testing/qunit","tools/testing/chutzpah","server.net"]}},null,2)}},{store:m});return(0,o.jsx)(s.ZP,{levaStore:m,children:(0,o.jsx)(i.MonacoEditor,a()({},u))})}},10271:function(c,n,e){e.r(n);var t=e(20456),a=e(4988),r=e(11527);n.default=function(){return(0,r.jsx)("div",{style:{padding:24,display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:(0,r.jsx)(t.MonacoEditor,{defaultValue:a.k,height:200,language:"javascript",onChange:function(i){console.log(i)},version:"0.19.3",width:740})})}},5365:function(c,n,e){e.r(n);var t=e(20456),a=e(4988),r=e(11527);n.default=function(){return(0,r.jsx)(t.MonacoEditor,{defaultValue:a.k,height:200,language:"javascript",onChange:function(i){console.log(i)},supportFullScreen:!0,width:740})}},34834:function(c,n,e){e.d(n,{J:function(){return t},S:function(){return a}});var t=`/*
\xA9 Microsoft. All rights reserved.

This library is supported for use in Windows Tailored Apps only.

Build: 6.2.8100.0
Version: 0.5
*/

(function (global, undefined) {
"use strict";
undefinedVariable = {};
undefinedVariable.prop = 5;

function initializeProperties(target, members) {
  var keys = Object.keys(members);
  var properties;
  var i, len;
  for (i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    var enumerable = key.charCodeAt(0) !== /*_*/95;
    var member = members[key];
    if (member && typeof member === 'object') {
      if (member.value !== undefined || typeof member.get === 'function' || typeof member.set === 'function') {
        if (member.enumerable === undefined) {
          member.enumerable = enumerable;
        }
        properties = properties || {};
        properties[key] = member;
        continue;
      }
    }
    // These next lines will be deleted
    if (!enumerable) {
      properties = properties || {};
      properties[key] = { value: member, enumerable: enumerable, configurable: true, writable: true }
      continue;
    }
    target[key] = member;
  }
  if (properties) {
    Object.defineProperties(target, properties);
  }
}

(function (rootNamespace) {

  // Create the rootNamespace in the global namespace
  if (!global[rootNamespace]) {
    global[rootNamespace] = Object.create(Object.prototype);
  }

  // Cache the rootNamespace we just created in a local variable
  var _rootNamespace = global[rootNamespace];
  if (!_rootNamespace.Namespace) {
    _rootNamespace.Namespace = Object.create(Object.prototype);
  }

  function defineWithParent(parentNamespace, name, members) {
    /// <summary locid="1">
    /// Defines a new namespace with the specified name, under the specified parent namespace.
    /// </summary>
    /// <param name="parentNamespace" type="Object" locid="2">
    /// The parent namespace which will contain the new namespace.
    /// </param>
    /// <param name="name" type="String" locid="3">
    /// Name of the new namespace.
    /// </param>
    /// <param name="members" type="Object" locid="4">
    /// Members in the new namespace.
    /// </param>
    /// <returns locid="5">
    /// The newly defined namespace.
    /// </returns>
    var currentNamespace = parentNamespace,
      namespaceFragments = name.split(".");

    for (var i = 0, len = namespaceFragments.length; i < len; i++) {
      var namespaceName = namespaceFragments[i];
      if (!currentNamespace[namespaceName]) {
        Object.defineProperty(currentNamespace, namespaceName,
          { value: {}, writable: false, enumerable: true, configurable: true }
        );
      }
      currentNamespace = currentNamespace[namespaceName];
    }

    if (members) {
      initializeProperties(currentNamespace, members);
    }

    return currentNamespace;
  }

  function define(name, members) {
    /// <summary locid="6">
    /// Defines a new namespace with the specified name.
    /// </summary>
    /// <param name="name" type="String" locid="7">
    /// Name of the namespace.  This could be a dot-separated nested name.
    /// </param>
    /// <param name="members" type="Object" locid="4">
    /// Members in the new namespace.
    /// </param>
    /// <returns locid="5">
    /// The newly defined namespace.
    /// </returns>
    return defineWithParent(global, name, members);
  }

  // Establish members of the "WinJS.Namespace" namespace
  Object.defineProperties(_rootNamespace.Namespace, {

    defineWithParent: { value: defineWithParent, writable: true, enumerable: true },

    define: { value: define, writable: true, enumerable: true }

  });

})("WinJS");

(function (WinJS) {

  function define(constructor, instanceMembers, staticMembers) {
    /// <summary locid="8">
    /// Defines a class using the given constructor and with the specified instance members.
    /// </summary>
    /// <param name="constructor" type="Function" locid="9">
    /// A constructor function that will be used to instantiate this class.
    /// </param>
    /// <param name="instanceMembers" type="Object" locid="10">
    /// The set of instance fields, properties and methods to be made available on the class.
    /// </param>
    /// <param name="staticMembers" type="Object" locid="11">
    /// The set of static fields, properties and methods to be made available on the class.
    /// </param>
    /// <returns type="Function" locid="12">
    /// The newly defined class.
    /// </returns>
    constructor = constructor || function () { };
    if (instanceMembers) {
      initializeProperties(constructor.prototype, instanceMembers);
    }
    if (staticMembers) {
      initializeProperties(constructor, staticMembers);
    }
    return constructor;
  }

  function derive(baseClass, constructor, instanceMembers, staticMembers) {
    /// <summary locid="13">
    /// Uses prototypal inheritance to create a sub-class based on the supplied baseClass parameter.
    /// </summary>
    /// <param name="baseClass" type="Function" locid="14">
    /// The class to inherit from.
    /// </param>
    /// <param name="constructor" type="Function" locid="9">
    /// A constructor function that will be used to instantiate this class.
    /// </param>
    /// <param name="instanceMembers" type="Object" locid="10">
    /// The set of instance fields, properties and methods to be made available on the class.
    /// </param>
    /// <param name="staticMembers" type="Object" locid="11">
    /// The set of static fields, properties and methods to be made available on the class.
    /// </param>
    /// <returns type="Function" locid="12">
    /// The newly defined class.
    /// </returns>
    if (baseClass) {
      constructor = constructor || function () { };
      var basePrototype = baseClass.prototype;
      constructor.prototype = Object.create(basePrototype);
      Object.defineProperty(constructor.prototype, "_super", { value: basePrototype });
      Object.defineProperty(constructor.prototype, "constructor", { value: constructor });
      if (instanceMembers) {
        initializeProperties(constructor.prototype, instanceMembers);
      }
      if (staticMembers) {
        initializeProperties(constructor, staticMembers);
      }
      return constructor;
    } else {
      return define(constructor, instanceMembers, staticMembers);
    }
  }

  function mix(constructor) {
    /// <summary locid="15">
    /// Defines a class using the given constructor and the union of the set of instance members
    /// specified by all the mixin objects.  The mixin parameter list can be of variable length.
    /// </summary>
    /// <param name="constructor" locid="9">
    /// A constructor function that will be used to instantiate this class.
    /// </param>
    /// <returns locid="12">
    /// The newly defined class.
    /// </returns>
    constructor = constructor || function () { };
    var i, len;
    for (i = 0, len = arguments.length; i < len; i++) {
      initializeProperties(constructor.prototype, arguments[i]);
    }
    return constructor;
  }

  // Establish members of "WinJS.Class" namespace
  WinJS.Namespace.define("WinJS.Class", {
    define: define,
    derive: derive,
    mix: mix
  });

})(WinJS);

})(this);
`,a=`/*
\xA9 Microsoft. All rights reserved.

This library is supported for use in Windows Tailored Apps only.

Build: 6.2.8100.0
Version: 0.5
*/

// Here are some inserted lines
// with some extra comments

(function (global, undefined) {
"use strict";
var definedVariable = {};
definedVariable.prop = 5;

function initializeProperties(target, members) {
  var keys = Object.keys(members);
  var properties;
  var i, len;
  for (i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    var enumerable = key.charCodeAt(0) !== /*_*/95;
    var member = members[key];
    if (member && typeof member === 'object') {
      if (member.value !== undefined || typeof member.get === 'function' || typeof member.set === 'function') {
        if (member.enumerable === undefined) {
          member.enumerable = enumerable;
        }
        properties = properties || {};
        properties[key] = member;
        continue;
      }
    }
    target[key] = member;
  }
  if (properties) {
    Object.defineProperties(target, properties);
  }
}

(function (rootNamespace) {

  // Create the rootNamespace in the global namespace
  if (!global[rootNamespace]) {
    global[rootNamespace] = Object.create(Object.prototype);
  }

  // Cache the rootNamespace we just created in a local variable
  var _rootNamespace = global[rootNamespace];
  if (!_rootNamespace.Namespace) {
    _rootNamespace.Namespace = Object.create(Object.prototype);
  }

  function defineWithParent(parentNamespace, name, members) {
    /// <summary locid="1">
    /// Defines a new namespace with the specified name, under the specified parent namespace.
    /// </summary>
    /// <param name="parentNamespace" type="Object" locid="2">
    /// The parent namespace which will contain the new namespace.
    /// </param>
    /// <param name="name" type="String" locid="3">
    /// Name of the new namespace.
    /// </param>
    /// <param name="members" type="Object" locid="4">
    /// Members in the new namespace.
    /// </param>
    /// <returns locid="5">
    /// The newly defined namespace.
    /// </returns>
    var currentNamespace = parentNamespace,
      namespaceFragments = name.split(".");

    for (var i = 0, len = namespaceFragments.length; i < len; i++) {
      var namespaceName = namespaceFragments[i];
      if (!currentNamespace[namespaceName]) {
        Object.defineProperty(currentNamespace, namespaceName,
          { value: {}, writable: false, enumerable: true, configurable: true }
        );
      }
      currentNamespace = currentNamespace[namespaceName];
    }

    if (members) {
      initializeProperties(currentNamespace, members);
    }

    return currentNamespace;
  }

  function define(name, members) {
    /// <summary locid="6">
    /// Defines a new namespace with the specified name.
    /// </summary>
    /// <param name="name" type="String" locid="7">
    /// Name of the namespace.  This could be a dot-separated nested name.
    /// </param>
    /// <param name="members" type="Object" locid="4">
    /// Members in the new namespace.
    /// </param>
    /// <returns locid="5">
    /// The newly defined namespace.
    /// </returns>
    return defineWithParent(global, name, members);
  }

  // Establish members of the "WinJS.Namespace" namespace
  Object.defineProperties(_rootNamespace.Namespace, {

    defineWithParent: { value: defineWithParent, writable: true, enumerable: true },

    define: { value: define, writable: true, enumerable: true }

  });

})("WinJS");

(function (WinJS) {

  function define(constructor, instanceMembers, staticMembers) {
    /// <summary locid="8">
    /// Defines a class using the given constructor and with the specified instance members.
    /// </summary>
    /// <param name="constructor" type="Function" locid="9">
    /// A constructor function that will be used to instantiate this class.
    /// </param>
    /// <param name="instanceMembers" type="Object" locid="10">
    /// The set of instance fields, properties and methods to be made available on the class.
    /// </param>
    /// <param name="staticMembers" type="Object" locid="11">
    /// The set of static fields, properties and methods to be made available on the class.
    /// </param>
    /// <returns type="Function" locid="12">
    /// The newly defined class.
    /// </returns>
    constructor = constructor || function () { };
    if (instanceMembers) {
      initializeProperties(constructor.prototype, instanceMembers);
    }
    if (staticMembers) {
      initializeProperties(constructor, staticMembers);
    }
    return constructor;
  }

  function derive(baseClass, constructor, instanceMembers, staticMembers) {
    /// <summary locid="13">
    /// Uses prototypal inheritance to create a sub-class based on the supplied baseClass parameter.
    /// </summary>
    /// <param name="baseClass" type="Function" locid="14">
    /// The class to inherit from.
    /// </param>
    /// <param name="constructor" type="Function" locid="9">
    /// A constructor function that will be used to instantiate this class.
    /// </param>
    /// <param name="instanceMembers" type="Object" locid="10">
    /// The set of instance fields, properties and methods to be made available on the class.
    /// </param>
    /// <param name="staticMembers" type="Object" locid="11">
    /// The set of static fields, properties and methods to be made available on the class.
    /// </param>
    /// <returns type="Function" locid="12">
    /// The newly defined class.
    /// </returns>
    if (baseClass) {
      constructor = constructor || function () { };
      var basePrototype = baseClass.prototype;
      constructor.prototype = Object.create(basePrototype);
      Object.defineProperty(constructor.prototype, "_super", { value: basePrototype });
      Object.defineProperty(constructor.prototype, "constructor", { value: constructor });
      if (instanceMembers) {
        initializeProperties(constructor.prototype, instanceMembers);
      }
      if (staticMembers) {
        initializeProperties(constructor, staticMembers);
      }
      return constructor;
    } else {
      return define(constructor, instanceMembers, staticMembers);
    }
  }

  function mix(constructor) {
    /// <summary locid="15">
    /// Defines a class using the given constructor and the union of the set of instance members
    /// specified by all the mixin objects.  The mixin parameter list can be of variable length.
    /// </summary>
    /// <param name="constructor" locid="9">
    /// A constructor function that will be used to instantiate this class.
    /// </param>
    /// <returns locid="12">
    /// The newly defined class.
    /// </returns>
    constructor = constructor || function () { };
    var i, len;
    for (i = 0, len = arguments.length; i < len; i++) {
      initializeProperties(constructor.prototype, arguments[i]);
    }
    return constructor;
  }

  // Establish members of "WinJS.Class" namespace
  WinJS.Namespace.define("WinJS.Class", {
    define: define,
    derive: derive,
    mix: mix
  });

})(WinJS);

})(this);
`},4988:function(c,n,e){e.d(n,{k:function(){return t}});var t=`const value = /* set from \`myEditor.getModel()\`: */ \`function hello() {
  alert('Hello world!');
}\`;

// Hover on each property to see its docs!
const myEditor = monaco.editor.create(document.getElementById("container"), {
  value,
  language: "javascript",
  automaticLayout: true,
});
`}}]);
