import React from "react";

const Footer = () => {
  return (
    <footer className="grid sm:grid-cols-2">
      <div className="left bg-info">
        left side
        <h2 className="text-semibold">CONTACT US</h2>
        <h4>123 ABS Street, Uni 21, Bangladesh</h4>
        <h4>+88 123456789</h4>
        <h4>Mon - Fri: 08:00 - 22:00</h4>
        <h4>Sat - Sun: 10:00 - 23:00</h4>
      </div>
      <div className="right bg-warning">
        right side
        <h2 className="text-semibold">CONTACT US</h2>
      </div>
      <p className="col-span-2 bg-red-400 text-center">
        Copyright © CulinaryCloud. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
