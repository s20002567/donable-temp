import logoGreen from '../../assets/img/logo-green.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <img src={logoGreen} alt='Donable logo' />
      </div>
      <ul className='footer__nav'>
        <li>
          <a href='#'>About us</a>
        </li>
        <li>
          <a href='#'>Download apps</a>
        </li>
        <li>
          <a href='#'>Become a organizer</a>
        </li>
        <li>
          <a href='#'>Careers</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <p className='footer__copyright'>© by Donable 2023.</p>
    </footer>
  );
};

export default Footer;
