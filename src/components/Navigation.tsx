import { useEffect } from "react";

const pages = [
  {name: "Home", url: '/'},
  {name: "About", url: '/posts/about'},
  // {name: "Events", url: '/events'},
  // {name: "Gallery", url: '/gallery'},
  {name: "Contact", url: '/posts/contact'},
];

export default function Navigation() {

  const handleToggle = () => {
    const mainNav = document.getElementById('navbarResponsive');
    if (mainNav.classList.contains('collapse'))
      mainNav.classList.remove('collapse');
    else
      mainNav.classList.add('collapse');
  }

  useEffect(() => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;

    window.addEventListener('scroll', function() {
      const currentTop = document.body.getBoundingClientRect().top * -1;
      if ( currentTop < scrollPos) {
        // Scrolling Up
        if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
          mainNav.classList.add('is-visible');
        } else {
          mainNav.classList.remove('is-visible', 'is-fixed');
        }
      } else {
        // Scrolling Down
        mainNav.classList.remove('is-visible');
        if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
          mainNav.classList.add('is-fixed');
        }
      }
      scrollPos = currentTop;
    });
    return () => {
      let scrollPos = 0;
      const mainNav = document.getElementById('mainNav');
      const headerHeight = mainNav.clientHeight;
      window.removeEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
          // Scrolling Up
          if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
            mainNav.classList.add('is-visible');
          } else {
            mainNav.classList.remove('is-visible', 'is-fixed');
          }
        } else {
          // Scrolling Down
          mainNav.classList.remove('is-visible');
          if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
            mainNav.classList.add('is-fixed');
          }
        }
        scrollPos = currentTop;
      });
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="/">Art Club, HKU</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarResponsive" 
            aria-controls="navbarResponsive" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              { pages.map(page => (
                <li className="nav-item" key={page.url+'-'+page.name}><a className="nav-link px-lg-3 py-3 py-lg-4" href={`${page.url}`}>{page.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <style jsx>{`
          #mainNav {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1030;
            border-bottom: 1px solid #dee2e6;
            background-color: #fff;
            font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
          }
          #mainNav .navbar-brand {
            font-weight: 800;
          }
          #mainNav .navbar-toggler {
            font-size: 0.75rem;
            font-weight: 800;
            padding: 0.75rem;
            text-transform: uppercase;
          }
          #mainNav .navbar-nav > li.nav-item > a.nav-link {
            font-size: 0.75rem;
            font-weight: 800;
            letter-spacing: 0.0625em;
            text-transform: uppercase;
          }
          @media (min-width: 992px) {
            #mainNav {
              border-bottom: 1px solid transparent;
              background: transparent;
            }
            #mainNav .navbar-brand {
              color: #fff;
            }
            #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {
              color: rgba(255, 255, 255, 0.8);
            }
            #mainNav .navbar-nav > li.nav-item > a.nav-link {
              color: #fff;
            }
            #mainNav .navbar-nav > li.nav-item > a.nav-link:focus, #mainNav .navbar-nav > li.nav-item > a.nav-link:hover {
              color: rgba(255, 255, 255, 0.8);
            }
          }
          @media (min-width: 992px) {
            #mainNav {
              transition: background-color 0.2s;
              /* Force Hardware Acceleration in WebKit */
              transform: translate3d(0, 0, 0);
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
            }
            #mainNav.is-fixed {
              /* when the user scrolls down, we hide the header right above the viewport */
              position: fixed;
              top: -83px;
              transition: transform 0.2s;
              border-bottom: 1px solid white;
              background-color: rgba(255, 255, 255, 0.9);
            }
            #mainNav.is-fixed .navbar-brand {
              color: #212529;
            }
            #mainNav.is-fixed .navbar-brand:focus, #mainNav.is-fixed .navbar-brand:hover {
              color: #0085A1;
            }
            #mainNav.is-fixed .navbar-nav > li.nav-item > a {
              color: #212529;
            }
            #mainNav.is-fixed .navbar-nav > li.nav-item > a:focus, #mainNav.is-fixed .navbar-nav > li.nav-item > a:hover {
              color: #0085A1;
            }
            #mainNav.is-visible {
              /* if the user changes the scrolling direction, we show the header */
              transform: translate3d(0, 100%, 0);
            }
          }
        `}</style>
      </nav>
    </>
  );
}
