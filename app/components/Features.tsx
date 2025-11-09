/* 'use client'
import React, { useEffect, useRef } from 'react'

const FEATURES = [
  {
    title: 'Films du moment & populaires',
    desc: 'Explore les films en tendance, les plus populaires et les mieux notés.'
  },
  {
    title: 'Programmation des séances',
    desc: 'Consulte l\'horaire, la salle, le prix et le type de ticket (2D/3D/IMAX).'
  },
  {
    title: 'Réservations & billets PDF',
    desc: 'Réserve ta place, récupère instantanément un billet téléchargeable en PDF.'
  },
  {
    title: 'Profil & historique',
    desc: 'Gère ton profil, tes préférences et retrouve facilement tes réservations passées.'
  }
]

export default function Features() {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const items = Array.from(el.querySelectorAll('.feature-card'))
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.18 })

    items.forEach(i => obs.observe(i))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="features container" ref={rootRef}>
      {FEATURES.map((f, idx) => (
        <div className="feature-card" key={idx}>
          <div style={{fontSize:20}}>{['🎞️','🕓','🎟️','👤'][idx]}</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  )
}
 */

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