import { useEffect, useState } from 'react';
import logo from '../assets/icons/code2.png';
import { FaBars } from 'react-icons/fa';

type NavButtonProps = {
  title: string,
  links: string
}

function HeaderRC() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavButton = ({ nav }: { nav: NavButtonProps }) => {
    return (<a href={nav.links} className='block mt-4 lg:inline-block lg:mt-0 text-violet-900 mr-4 border-b-2 border-transparent transition duration-300 hover:border-indigo-700'>{nav.title}</a>);
  }

  const buttons = [
    { title: 'Service', links: '#link-service' },
    { title: 'Works', links: '#link-works' },
    { title: 'Resume', links: '#link-resume' },
    { title: 'Skills', links: '#link-skills' },
    // { title: 'Testimonials', links: '#link-testimonials' },
    { title: 'Contact', links: '#link-contact' }
  ];

  return (
    <>
      <div className={`sticky z-10 top-0 w-full ${isScrolled ? 'bg-violet-100 shadow-xl shadow-violet-500/20 rounded-b-xl' : 'bg-transparent'}`}>
        <nav className="flex flex-col md:flex-row justify-between px-4 py-3">
          <div className='flex flex-row items-center'>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <img src={logo} alt="not found" className='rounded-full size-14' />
            </div>
            <a href='mailto:ridoykj@gmail.com' className='font-medium text-indigo-900 hover:text-indigo-500 grow'>ridoykj@gmail.com</a>
            <div className="block lg:hidden">
              <button type='button' onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-violet-500 border-violet-500 hover:text-white hover:border-white">
                <span className='sr-only'>sd</span>
                <FaBars className="h-3 w-3 fill-current" />
              </button>
            </div>
          </div>
          <div className={`lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="font-medium md:text-indigo-900 text-2xl md:text-base lg:flex-grow gap-6 px-4 border-b-2 md:border-b-0">
              {buttons.map((button, index) => <NavButton key={index} nav={button} />)}
              <button type="button" className='rounded-full my-4 text-white font-medium px-4 py-2 bg-gradient-to-r from-violet-500  to-indigo-900 to-85% transition duration-1000 hover:from-indigo-900 hover:to-violet-500'>Hire Me!</button>
            </div>
          </div>
        </nav >
      </div >
    </>
  );
}

export default HeaderRC