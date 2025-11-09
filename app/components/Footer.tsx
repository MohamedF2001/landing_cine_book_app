/* import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="inner">
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <div className="mark" style={{width:44,height:44,borderRadius:10,background:'var(--red)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:800}}>CB</div>
          <div>
            <div style={{fontWeight:700}}>CinéBook</div>
            <div style={{fontSize:13,color:'var(--muted)'}}>© {new Date().getFullYear()} CinéBook. Tous droits réservés.</div>
          </div>
        </div>

        <div style={{color:'var(--muted)'}}>
          <a href="/privacy" style={{marginRight:12,color:'inherit'}}>Mentions légales</a>
          <a href="mailto:contact@cinebook.example" style={{color:'inherit'}}>Contact</a>
        </div>
      </div>
    </footer>
  )
}
 */

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