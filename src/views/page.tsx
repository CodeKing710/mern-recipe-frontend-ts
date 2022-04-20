const React = require('react');
const { default: ScriptTag } = require('react-script-tag/lib/ScriptTag');

function PageWrapper (html) {
  return (
    <html>
      <head>
        <title>{html.title}</title>
        <ScriptTag src="./js/main.js" />
      </head>
      <body>
        {html.children}
      </body>
    </html>
  );
}

module.exports = PageWrapper;