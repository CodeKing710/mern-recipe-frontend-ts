"use strict";
const React = require('react');
const PageWrapper = require('./page');
function Index() {
    return (<PageWrapper title="Home">
      <h1 id="hi"></h1>
    </PageWrapper>);
}
module.exports = Index;
