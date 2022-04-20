"use strict";
var React = require('react');
var ScriptTag = require('react-script-tag/lib/ScriptTag').default;
function PageWrapper(html) {
    return (<html>
      <head>
        <title>{html.title}</title>
        <ScriptTag src="./js/main.js"/>
      </head>
      <body>
        {html.children}
      </body>
    </html>);
}
module.exports = PageWrapper;
