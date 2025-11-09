/* 'use client';

import React, { useEffect, useState } from 'react';
import { Film } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Film size={32} />
          <span>CinéBook</span>
        </div>
        <button className="btn-primary">Télécharger l&apos;app</button>
      </div>
    </header>
  );
};

export default Header; */

'use client';

import React, { useEffect, useState } from 'react';
import { Film, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Film size={32} />
          <span>CinéBook</span>
        </div>
        <a
          href="/cinebook.apk"
          download="CinéBook.apk"
          className="btn-primary"
        >
          <Download size={20} />
          Télécharger l&apos;app
        </a>
      </div>
    </header>
  );
};

export default Header;