import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#001F3F', color: '#00FFFF', padding: '20px', textAlign: 'center' }}>
      <div>
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
        <div>
          <a href="https://github.com/Shingini04" style={{ color: '#00FFFF', margin: '0 10px' }}>
            GitHub
          </a>
          |
          <a href="https://codeforces.com/profile/ShinginiLahiri" style={{ color: '#00FFFF', margin: '0 10px' }}>
            Codeforces
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

