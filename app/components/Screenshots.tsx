'use client';

import React from 'react';
import Image from 'next/image';

const Screenshots: React.FC = () => {

  const screenshots = [
    { id: 1, name: 'screen1.jpg', alt: 'Interface principale CinéBook' },
    { id: 2, name: 'screen2.jpg', alt: 'Sélection de films' },
    { id: 3, name: 'screen3.jpg', alt: 'Réservation de tickets' },
    { id: 4, name: 'screen4.jpg', alt: 'Profil utilisateur' },
    { id: 5, name: 'screen5.jpg', alt: 'Interface principale CinéBook' },
    { id: 6, name: 'screen6.jpg', alt: 'Sélection de films' },
    { id: 7, name: 'screen7.jpg', alt: 'Réservation de tickets' },
    { id: 8, name: 'screen8.jpg', alt: 'Profil utilisateur' }
  ];

  return (
    <section className="screenshots">
      <div className="container">
        <h2 className="section-title">Découvrez l&apos;interface</h2>
        <div className="screenshots-scroll">
          {screenshots.map((screenshot, idx) => (
            <div key={screenshot.id} className="screenshot-item">
              <div className="screenshot-phone">
                <div className="screenshot-content">
                  <Image
                    src={`/images/${screenshot.name}`}
                    alt={screenshot.alt}
                    width={200}
                    height={400}
                    className="screenshot-image"
                    priority={idx < 2} // Priorité pour les premières images
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;