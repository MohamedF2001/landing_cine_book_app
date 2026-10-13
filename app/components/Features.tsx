

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Film, Clock, Ticket, User } from 'lucide-react';

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  const features = [
    {
      icon: <Film size={40} />,
      title: 'Films du moment',
      description: 'Découvrez les films populaires, les mieux notés et les nouveautés du cinéma.'
    },
    {
      icon: <Clock size={40} />,
      title: 'Programmation des séances',
      description: 'Consultez les horaires, salles, prix et types de séances disponibles.'
    },
    {
      icon: <Ticket size={40} />,
      title: 'Gestion des réservations',
      description: 'Réservez vos places et téléchargez vos tickets au format PDF instantanément.'
    },
    {
      icon: <User size={40} />,
      title: 'Profil utilisateur',
      description: 'Gérez vos informations, historique de réservations et préférences personnelles.'
    }
  ];

  return (
    <section className="features" ref={featuresRef}>
      <div className="container">
        <h2 className="section-title">Fonctionnalités principales</h2>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`feature-card ${animated ? 'animate-fadeUp' : ''}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;