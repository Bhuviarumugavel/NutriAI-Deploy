// src/components/Layout.js
import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
  </>
);

export default Layout;
