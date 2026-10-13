

import React from 'react';
import { Film } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Film size={28} />
            <span>CinéBook</span>
          </div>
          <div className="footer-links">
            <a href="#mentions">Mentions légales</a>
            <a href="#privacy">Politique de confidentialité</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copyright">
            © 2025 CinéBook. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;