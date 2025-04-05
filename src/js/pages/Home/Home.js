/* eslint-disable react/jsx-key */
import React, { useEffect, useRef, useState } from 'react';
import { 
  FaDownload, 
  FaMagic, 
  FaPalette, 
  FaBars,
  FaTimes,
  FaRegCalendarAlt,
  FaRegEdit,
  FaChevronDown,
  FaCogs,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPencilAlt,
  FaLayerGroup
} from 'react-icons/fa';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);
  const showcaseRef = useRef(null);

  const getGradientForIndex = (index) => {
    const gradients = [
      'linear-gradient(45deg, #FF3CAC, #784BA0, #2B86C5)',
      'linear-gradient(45deg, #FC466B, #3F5EFB)',
      'linear-gradient(45deg, #00F260, #0575E6)',
      'linear-gradient(45deg, #FFD166, #EF476F)',
      'linear-gradient(45deg, #8A2387, #E94057, #F27121)',
      'linear-gradient(45deg, #4158D0, #C850C0, #FFCC70)'
    ];
    return gradients[index % gradients.length];
  };

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation on component mount
  useEffect(() => {
    // Simulate GSAP animations with CSS and JS
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.style.opacity = 0;
      heroElement.style.transform = 'translateY(50px)';
      
      setTimeout(() => {
        heroElement.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        heroElement.style.opacity = 1;
        heroElement.style.transform = 'translateY(0)';
      }, 100);
    }

    // Animate features when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [featuresRef.current, ctaRef.current, showcaseRef.current];
    elements.forEach(element => {
      if (element) {
        element.style.opacity = 0;
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);
  return (
    <div style={{
      fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
      color: '#333',
      overflowX: 'hidden',
      position: 'relative',
      minHeight: '100vh',
    }}>
       {/* Background with gradient animation */}
       <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #4158D0, #C850C0, #FFCC70)',
        backgroundSize: '300% 300%',
        zIndex: -1,
        opacity: 0.08,
        animation: 'gradientAnimation 15s ease infinite',
      }} />

<style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 5%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#4158D0',
        }}>
          <div style={{ 
            marginRight: '10px',
            animation: 'pulse 2s infinite ease-in-out',
          }}>
            <FaPalette />
          </div>
          PosterMagic
        </div>

        {/* Mobile menu button */}
        <div 
          style={{ 
            display: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            zIndex: 1001,
            ' @media (maxWidth: 768px)': {
              display: 'block',
            }
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '30px',
          '@media (maxWidth: 768px)': {
            display: 'none',
          }
        }}>
          {['Home', 'Features', 'Showcase', 'Pricing', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                textDecoration: 'none',
                color: '#333',
                fontWeight: 500,
                position: 'relative',
                padding: '5px 0',
                transition: 'color 0.3s ease',
                ':hover': {
                  color: '#C850C0',
                }
              }}
            >
              {item}
            </a>
          ))}
          <button style={{
            background: 'linear-gradient(90deg, #4158D0, #C850C0)',
            color: 'white',
            border: 'none',
            padding: '8px 20px',
            borderRadius: '30px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0 4px 10px rgba(200, 80, 192, 0.3)',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 15px rgba(200, 80, 192, 0.5)',
            }
          }}>
            Try Now
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            zIndex: 1000,
            animation: 'fadeIn 0.3s forwards',
          }}>
            {['Home', 'Features', 'Showcase', 'Pricing', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                }}
              >
                {item}
              </a>
            ))}
            <button style={{
              background: 'linear-gradient(90deg, #4158D0, #C850C0)',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '30px',
              fontWeight: 600,
              fontSize: '1.2rem',
              marginTop: '20px',
              cursor: 'pointer',
            }}>
              Try Now
            </button>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 5% 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ 
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          '@media (maxWidth: 992px)': {
            flexDirection: 'column',
            textAlign: 'center',
          }
        }}>
          <div style={{ flex: '1' }}>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 800,
              marginBottom: '20px',
              background: 'linear-gradient(90deg, #4158D0, #C850C0)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1.2,
            }}>
              Generate Beautiful Event Posters in Seconds
            </h1>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: 1.6,
              color: '#555',
              marginBottom: '30px',
            }}>
              Transform your event details into stunning, shareable posters with just a few clicks. Perfect for promotions, announcements, and social media.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              '@media (maxWidth: 992px)': {
                justifyContent: 'center',
              }
            }}>
              <button style={{
                background: 'linear-gradient(90deg, #4158D0, #C850C0)',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '30px',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 15px rgba(200, 80, 192, 0.3)',
                ':hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 20px rgba(200, 80, 192, 0.5)',
                }
              }}>
                <FaMagic /> Create Your Poster
              </button>
              <button style={{
                background: 'transparent',
                color: '#4158D0',
                border: '2px solid #4158D0',
                padding: '12px 25px',
                borderRadius: '30px',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease',
                ':hover': {
                  background: 'rgba(65, 88, 208, 0.1)',
                }
              }}>
                See Examples
              </button>
            </div>
          </div>
          <div style={{ 
            flex: '1',
            position: 'relative',
            height: '500px',
            '@media (maxWidth: 992px)': {
              marginTop: '40px',
            }
          }}>
            {/* Floating poster mockups */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '280px',
              height: '400px',
              background: 'linear-gradient(45deg, #FF3CAC, #784BA0, #2B86C5)',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
              color: 'white',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              zIndex: 2,
              animation: 'float 6s ease-in-out infinite',
            }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>SUMMER FEST</h3>
              <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>JULY 15-18, 2025</p>
              <div style={{ 
                width: '80%', 
                height: '120px', 
                background: 'rgba(255, 255, 255, 0.2)',
                margin: '0 auto 20px',
                borderRadius: '5px',
              }}></div>
              <p style={{ fontSize: '1rem' }}>CENTRAL PARK • NYC</p>
            </div>
            
            <div style={{
              position: 'absolute',
              top: '30%',
              right: '10%',
              width: '220px',
              height: '320px',
              background: 'linear-gradient(45deg, #FC466B, #3F5EFB)',
              borderRadius: '10px',
              padding: '15px',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
              color: 'white',
              textAlign: 'center',
              zIndex: 1,
              transform: 'rotate(15deg)',
              animation: 'float 7s ease-in-out infinite 1s',
            }}>
              <h3 style={{ fontSize: '1.5rem', marginTop: '10px' }}>TECH CONFERENCE</h3>
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '20%',
              left: '5%',
              width: '200px',
              height: '300px',
              background: 'linear-gradient(45deg, #00F260, #0575E6)',
              borderRadius: '10px',
              padding: '15px',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
              color: 'white',
              textAlign: 'center',
              zIndex: 1,
              transform: 'rotate(-10deg)',
              animation: 'float 5s ease-in-out infinite 0.5s',
            }}>
              <h3 style={{ fontSize: '1.5rem', marginTop: '10px' }}>MUSIC NIGHT</h3>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #C850C0, #4158D0)',
          opacity: 0.1,
          animation: 'float 8s ease-in-out infinite',
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #FFCC70, #C850C0)',
          opacity: 0.1,
          animation: 'float 10s ease-in-out infinite 1s',
        }}></div>
      </section>
       {/* How It Works Section */}
      <section 
  id="how-it-works"
  style={{
    padding: '100px 5%',
    background: 'linear-gradient(to bottom, #f9f9ff, white)',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
    <h2 style={{
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '60px',
      background: 'linear-gradient(90deg, #4158D0, #C850C0)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    }}>
      How It Works
    </h2>
    
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '50px',
    }}>
      {[
        {
          icon: <FaRegCalendarAlt />,
          title: 'Enter Event Details',
          description: 'Provide your event name, date, location, and other key information in our simple form.',
          animation: 'slideInLeft'
        },
        {
          icon: <FaRegEdit />,
          title: 'Choose Your Style',
          description: 'Select from our curated collection of themes or customize colors, fonts, and layouts to match your vision.',
          animation: 'slideInRight'
        },
        {
          icon: <FaCogs />,
          title: 'AI Generation',
          description: 'Our intelligent system processes your information and creates multiple poster options optimized for your event type.',
          animation: 'slideInLeft'
        },
        {
          icon: <FaDownload />,
          title: 'Download & Share',
          description: 'Download your perfect poster in high-resolution formats ready for printing or digital sharing.',
          animation: 'slideInRight'
        },
      ].map((step, index) => (
        <div key={index} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
          background: 'white',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.4s ease, box-shadow 0.4s ease',
          ':hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
          },
          animation: `${step.animation} 0.8s forwards ${0.3 + index * 0.2}s`,
          opacity: 0,
        }}>
          <div style={{
            fontSize: '3rem',
            color: '#4158D0',
            background: 'linear-gradient(45deg, #4158D0, #C850C0)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            colorScheme: 'transparent',
            animation: 'pulse 3s infinite ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            boxShadow: '0 5px 15px rgba(65, 88, 208, 0.2)',
          }}>
            {step.icon}
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 600, 
              marginBottom: '15px',
              color: '#333'
            }}>
              {step.title}
            </h3>
            <p style={{ color: '#666', lineHeight: 1.7, fontSize: '1.1rem' }}>
              {step.description}
            </p>
          </div>
          <div style={{
            width: '50px',
            height: '50px',
            display: index < 3 ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            color: '#C850C0',
            animation: 'bounce 2s infinite ease-in-out',
          }}>
            {index < 3 && <FaChevronDown />}
          </div>
        </div>
      ))}
    </div>
    
    {/* Call to action button */}
    <div style={{
      textAlign: 'center',
      marginTop: '60px',
      animation: 'fadeIn 1s forwards 1.5s',
      opacity: 0,
    }}>
      <button style={{
        background: 'linear-gradient(45deg, #4158D0, #C850C0)',
        color: 'white',
        border: 'none',
        padding: '15px 40px',
        fontSize: '1.2rem',
        fontWeight: 600,
        borderRadius: '50px',
        cursor: 'pointer',
        boxShadow: '0 10px 25px rgba(65, 88, 208, 0.3)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 15px 30px rgba(65, 88, 208, 0.4)',
        },
      }}>
        Create Your Poster Now
      </button>
    </div>
  </div>
  
  {/* Background decorations */}
  <div style={{
    position: 'absolute',
    top: '10%',
    left: '-5%',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #4158D0, #C850C0)',
    opacity: 0.03,
    transform: `translateY(${scrollY * 0.15}px)`,
  }}></div>
  
  <div style={{
    position: 'absolute',
    bottom: '5%',
    right: '-8%',
    width: '350px',
    height: '350px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #C850C0, #FFCC70)',
    opacity: 0.03,
    transform: `translateY(${-scrollY * 0.1}px)`,
  }}></div>
  
  {/* Add the CSS keyframes for animations */}
  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(10px); }
    }
  `}</style>
</section>
     
{/* Features Section */}
<section
  style={{
    padding: '100px 5%',
    background: '#fff',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  {/* Decorative elements */}
  <div style={{
    position: 'absolute',
    top: '10%',
    left: '8%',
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #4158D0, #C850C0)',
    opacity: '0.05',
    animation: 'float 9s ease-in-out infinite',
  }}></div>
  
  <div style={{
    position: 'absolute',
    bottom: '15%',
    right: '5%',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #C850C0, #4158D0)',
    opacity: '0.05',
    animation: 'float 7s ease-in-out infinite 0.5s',
  }}></div>
  
  <div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  }}>
    <h2 style={{
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '20px',
      background: 'linear-gradient(90deg, #4158D0, #C850C0)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    }}>
      Powerful Features
    </h2>
    
    <p style={{
      fontSize: '1.2rem',
      color: '#555',
      maxWidth: '700px',
      margin: '0 auto 60px',
      lineHeight: 1.6,
    }}>
      Our poster generator is packed with everything you need to create professional event visuals
    </p>
    
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      textAlign: 'left',
    }}>
      {/* Feature 1 */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(65, 88, 208, 0.1)',
        transition: 'all 0.3s ease',
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fadeInUp 0.8s forwards',
        animationDelay: '0.1s',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 15px 35px rgba(65, 88, 208, 0.1)',
          border: '1px solid rgba(65, 88, 208, 0.2)',
        }
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          background: 'linear-gradient(45deg, #4158D0, #6C63FF)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          color: 'white',
          fontSize: '1.5rem',
          boxShadow: '0 8px 15px rgba(65, 88, 208, 0.2)',
        }}>
          <FaLayerGroup />
        </div>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '600',
          marginBottom: '12px',
          color: '#333',
        }}>
          Designer Templates
        </h3>
        <p style={{
          color: '#666',
          lineHeight: '1.6',
        }}>
          Choose from dozens of professionally designed templates for any type of event - concerts, conferences, parties, and more.
        </p>
      </div>
      
      {/* Feature 2 */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(200, 80, 192, 0.1)',
        transition: 'all 0.3s ease',
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fadeInUp 0.8s forwards',
        animationDelay: '0.2s',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 15px 35px rgba(200, 80, 192, 0.1)',
          border: '1px solid rgba(200, 80, 192, 0.2)',
        }
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          background: 'linear-gradient(45deg, #C850C0, #FF5E98)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          color: 'white',
          fontSize: '1.5rem',
          boxShadow: '0 8px 15px rgba(200, 80, 192, 0.2)',
        }}>
          <FaPencilAlt />
        </div>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '600',
          marginBottom: '12px',
          color: '#333',
        }}>
          Custom Colors
        </h3>
        <p style={{
          color: '#666',
          lineHeight: '1.6',
        }}>
          Personalize your poster with your brand colors or choose from beautiful pre-defined color schemes to match your events mood.
        </p>
      </div>
      
      {/* Feature 3 */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(65, 88, 208, 0.1)',
        transition: 'all 0.3s ease',
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fadeInUp 0.8s forwards',
        animationDelay: '0.3s',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 15px 35px rgba(65, 88, 208, 0.1)',
          border: '1px solid rgba(65, 88, 208, 0.2)',
        }
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          background: 'linear-gradient(45deg, #4158D0, #6C63FF)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          color: 'white',
          fontSize: '1.5rem',
          boxShadow: '0 8px 15px rgba(65, 88, 208, 0.2)',
        }}>
          <FaDownload />
        </div>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '600',
          marginBottom: '12px',
          color: '#333',
        }}>
          Multiple Formats
        </h3>
        <p style={{
          color: '#666',
          lineHeight: '1.6',
        }}>
          Download your poster in high-resolution PDF, PNG, or JPG formats - perfect for printing or digital sharing.
        </p>
      </div>
      
      {/* Feature 4 */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(200, 80, 192, 0.1)',
        transition: 'all 0.3s ease',
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fadeInUp 0.8s forwards',
        animationDelay: '0.4s',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 15px 35px rgba(200, 80, 192, 0.1)',
          border: '1px solid rgba(200, 80, 192, 0.2)',
        }
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          background: 'linear-gradient(45deg, #C850C0, #FF5E98)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          color: 'white',
          fontSize: '1.5rem',
          boxShadow: '0 8px 15px rgba(200, 80, 192, 0.2)',
        }}>
          <FaLayerGroup />
        </div>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '600',
          marginBottom: '12px',
          color: '#333',
        }}>
          Social Media Ready
        </h3>
        <p style={{
          color: '#666',
          lineHeight: '1.6',
        }}>
          Get perfectly sized posters for Instagram, Facebook, Twitter, and other platforms with a single click.
        </p>
      </div>
      
      {/* Feature 5 */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(65, 88, 208, 0.1)',
        transition: 'all 0.3s ease',
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fadeInUp 0.8s forwards',
        animationDelay: '0.5s',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 15px 35px rgba(65, 88, 208, 0.1)',
          border: '1px solid rgba(65, 88, 208, 0.2)',
        }
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          background: 'linear-gradient(45deg, #4158D0, #6C63FF)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          color: 'white',
          fontSize: '1.5rem',
          boxShadow: '0 8px 15px rgba(65, 88, 208, 0.2)',
        }}>
          <FaPencilAlt />
        </div>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '600',
          marginBottom: '12px',
          color: '#333',
        }}>
          Custom Typography
        </h3>
        <p style={{
          color: '#666',
          lineHeight: '1.6',
        }}>
          Choose from a wide selection of fonts to match your events style and ensure your message stands out.
        </p>
      </div>
      
      {/* Feature 6 */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(200, 80, 192, 0.1)',
        transition: 'all 0.3s ease',
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fadeInUp 0.8s forwards',
        animationDelay: '0.6s',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 15px 35px rgba(200, 80, 192, 0.1)',
          border: '1px solid rgba(200, 80, 192, 0.2)',
        }
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          background: 'linear-gradient(45deg, #C850C0, #FF5E98)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          color: 'white',
          fontSize: '1.5rem',
          boxShadow: '0 8px 15px rgba(200, 80, 192, 0.2)',
        }}>
          <FaDownload />
        </div>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '600',
          marginBottom: '12px',
          color: '#333',
        }}>
          Instant Generation
        </h3>
        <p style={{
          color: '#666',
          lineHeight: '1.6',
        }}>
          No waiting - your poster is generated instantly so you can download, share, or make adjustments right away.
        </p>
      </div>
    </div>
  </div>
  
  {/* Animation keyframes */}
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}} />
</section>

       {/* Showcase Section */}
       <section 
        id="showcase"
        ref={showcaseRef}
        style={{
          padding: '100px 5%',
          background: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '20px',
            background: 'linear-gradient(90deg, #4158D0, #C850C0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}>
            Stunning Poster Gallery
          </h2>
          
          <p style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '60px',
            maxWidth: '700px',
            margin: '0 auto 60px',
          }}>
            Check out some of the amazing posters created by our users for various events
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px',
          }}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} style={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                aspectRatio: '1/1.4',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
                },
                animation: `fadeIn 0.5s forwards ${0.2 + index * 0.1}s`,
                opacity: 0,
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: getGradientForIndex(index),
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px',
                  color: 'white',
                  textAlign: 'center',
                }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
                    {['Music Festival', 'Tech Summit', 'Art Exhibition', 'Food Tasting', 'Fitness Workshop', 'Business Conference'][index]}
                  </h3>
                  <p>Created with PosterMagic</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Call to Action */}
       <section 
        ref={ctaRef}
        style={{
          padding: '100px 5%',
          background: 'linear-gradient(135deg, #4158D0, #C850C0)',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.2,
        }}></div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: '20px' }}>
            Ready to Create Your First Poster?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>
            Join thousands of users who are already creating stunning posters in seconds. 
            No design skills needed!
          </p>
          <button style={{
            background: 'white',
            color: '#4158D0',
            border: 'none',
            padding: '15px 40px',
            borderRadius: '30px',
            fontSize: '1.2rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            animation: 'pulse 2s infinite ease-in-out',
            ':hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
            }
          }}>
            <FaMagic /> Start Creating Now
          </button>
        </div>
      </section>
      <footer 
  style={{
    background: 'linear-gradient(to right, #4158D0, #C850C0)',
    padding: '80px 5% 40px',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    marginTop: '100px'
  }}
>
  {/* Background animated elements */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: 1,
  }}>
    <div style={{
      position: 'absolute',
      top: '10%',
      left: '5%',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.05)',
      animation: 'float 15s infinite ease-in-out',
    }}></div>
    <div style={{
      position: 'absolute',
      bottom: '15%',
      right: '10%',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.05)',
      animation: 'float 12s infinite ease-in-out 1s',
    }}></div>
    <div style={{
      position: 'absolute',
      top: '60%',
      left: '40%',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.03)',
      animation: 'float 20s infinite ease-in-out 0.5s',
    }}></div>
  </div>

  {/* Footer content container */}
  <div style={{ 
    maxWidth: '1200px', 
    margin: '0 auto', 
    position: 'relative',
    zIndex: 2,
  }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      marginBottom: '60px',
    }}>
      {/* Company info */}
      <div style={{ 
        animation: 'fadeInUp 0.8s forwards',
      }}>
        <h3 style={{ 
          fontSize: '1.8rem', 
          fontWeight: 700, 
          marginBottom: '20px',
          background: 'rgba(255, 255, 255, 0.95)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}>
          PosterGenius
        </h3>
        <p style={{ lineHeight: '1.7', marginBottom: '25px', color: 'rgba(255, 255, 255, 0.8)' }}>
          Transforming your event details into stunning, shareable posters with the power of AI.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '15px',
          animation: 'fadeIn 1s forwards 0.5s',
          opacity: 0,
        }}>
          {[<FaFacebookF />, <FaTwitter />, <FaInstagram />, <FaLinkedinIn />].map((icon, index) => (
            <a key={index} href="#" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              color: 'white',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: 'white',
                color: '#4158D0',
                transform: 'translateY(-5px)',
              },
            }}>
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div style={{ 
        animation: 'fadeInUp 0.8s forwards 0.2s',
        opacity: 0,
      }}>
        <h4 style={{ 
          fontSize: '1.2rem', 
          fontWeight: 600, 
          marginBottom: '25px',
          color: 'white', 
        }}>
          Quick Links
        </h4>
        <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
          {['Home', 'Features', 'How It Works', 'Pricing', 'Templates', 'Blog'].map((item, index) => (
            <li key={index} style={{ marginBottom: '12px' }}>
              <a href="#" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                ':hover': {
                  color: 'white',
                  transform: 'translateX(5px)',
                },
              }}>
                <FaChevronRight style={{ fontSize: '0.8rem' }} /> {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact info */}
      <div style={{ 
        animation: 'fadeInUp 0.8s forwards 0.4s',
        opacity: 0,
      }}>
        <h4 style={{ 
          fontSize: '1.2rem', 
          fontWeight: 600, 
          marginBottom: '25px',
          color: 'white', 
        }}>
          Contact Us
        </h4>
        <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
          {[
            { icon: <FaEnvelope />, text: 'hello@postergenius.com' },
            { icon: <FaPhoneAlt />, text: '+1 (555) 123-4567' },
            { icon: <FaMapMarkerAlt />, text: '123 Design Street, Creative City' },
          ].map((item, index) => (
            <li key={index} style={{
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px',
            }}>
              <div style={{
                minWidth: '20px',
                color: 'rgba(255, 255, 255, 0.7)',
              }}>
                {item.icon}
              </div>
              <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div style={{ 
        animation: 'fadeInUp 0.8s forwards 0.6s',
        opacity: 0,
      }}>
        <h4 style={{ 
          fontSize: '1.2rem', 
          fontWeight: 600, 
          marginBottom: '25px',
          color: 'white', 
        }}>
          Stay Updated
        </h4>
        <p style={{ lineHeight: '1.7', marginBottom: '20px', color: 'rgba(255, 255, 255, 0.8)' }}>
          Subscribe to our newsletter for the latest features and design tips.
        </p>
        <div style={{
          display: 'flex',
          borderRadius: '50px',
          overflow: 'hidden',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        }}>
          <input 
            type="email" 
            placeholder="Your email address" 
            style={{
              flex: 1,
              padding: '15px 20px',
              border: 'none',
              outline: 'none',
              fontSize: '0.95rem',
            }}
          />
          <button style={{
            background: 'white',
            color: '#4158D0',
            border: 'none',
            padding: '15px 20px',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            ':hover': {
              background: '#f2f2f2',
            },
            animation: 'pulse 2s infinite ease-in-out',
          }}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div style={{
      height: '1px',
      background: 'rgba(255, 255, 255, 0.1)',
      margin: '20px 0',
      animation: 'expandWidth 1s forwards 0.8s',
      width: '0%',
    }}></div>

    {/* Bottom section */}
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      paddingTop: '20px',
      animation: 'fadeIn 1s forwards 1s',
      opacity: 0,
    }}>
      <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
        © {new Date().getFullYear()} PosterGenius. All rights reserved.
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
          <a 
            key={index} 
            href="#" 
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '0.95rem',
              transition: 'color 0.3s ease',
              ':hover': {
                color: 'white',
              },
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </div>

  {/* Add the CSS keyframes for animations */}
  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes fadeInUp {
      from { 
        opacity: 0;
        transform: translateY(30px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @keyframes float {
      0% { transform: translate(0, 0); }
      25% { transform: translate(10px, 10px); }
      50% { transform: translate(5px, -5px); }
      75% { transform: translate(-10px, 10px); }
      100% { transform: translate(0, 0); }
    }
    
    @keyframes expandWidth {
      from { width: 0%; }
      to { width: 100%; }
    }
  `}</style>
</footer>
    </div>
  )
};


export default Home;
