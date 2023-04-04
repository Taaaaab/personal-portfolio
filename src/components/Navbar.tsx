import { useState } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 250) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  const changeActive = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <a onClick={changeActive} className="toggle-button">
        <span className={navbar ? 'bar active' : 'bar'}></span>
        <span className={navbar ? 'bar active' : 'bar'}></span>
      </a>
      <div className={isActive ? 'navbar-links active' : 'navbar-links'}>
        <img src="" alt="" className="logo-image" />
        <img src="" alt="" className="logo-image" />
        <ul className={navbar ? 'navbar-list active' : 'navbar-list'}>
          <li>
            <a href="#work" onClick={changeActive}>
              WORK
            </a>
          </li>
          <li>
            <a href="#contact" onClick={changeActive}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
