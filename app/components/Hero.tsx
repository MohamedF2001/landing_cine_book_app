'use client';

import React from 'react';
import { Download } from 'lucide-react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content animate-fadeIn">
          <h1 className="hero-title">
            Réservez vos films préférés en un clic 🎬
          </h1>
          <p className="hero-subtitle animate-slideUp">
            Avec CinéBook, trouvez les films du moment, réservez vos tickets et téléchargez vos billets en PDF.
          </p>
          <a
            href="/cinebook.apk"
            download="CinéBook.apk"
            className="btn-hero animate-slideUp"
          >
            <Download size={20} />
            Télécharger l&apos;application
          </a>
        </div>

        <div className="hero-mockup animate-zoomIn">
          <Image
            src="/images/maquette.png"
            alt="Aperçu de l’application CinéBook"
            width={700}
            height={900}
            className="hero-maquette"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
