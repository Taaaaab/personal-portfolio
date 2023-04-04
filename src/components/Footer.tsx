const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer>
      <small>Copyright © {currentYear} Owen Whitsett</small>
    </footer>
  );
};

export default Footer;
