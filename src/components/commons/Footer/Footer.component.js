import React from 'react';

var d = new Date();
var n = d.getFullYear();

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <p>© {n} Remida</p>
    </div>
  );
};

export default Footer;
