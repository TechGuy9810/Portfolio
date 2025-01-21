import React from 'react';
import { useState } from 'react';
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex ">
     
    </div>
  );
};

export default HamburgerMenu;
