/* 'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="hero container" ref={ref as any}>
      <div>
        <div className="kicker">Application mobile / web</div>
        <h1>Réservez vos films préférés en un clic 🎬</h1>
        <p>Avec CinéBook, trouvez les films du moment, réservez vos tickets et téléchargez vos billets en PDF. Simple, rapide et sécurisé.</p>

        <div className="actions">
          <a className="cta-btn zoom-in" href="/cinebook.apk" download>📲 Télécharger .apk</a>
          <a className="cta-btn" href="https://demo.cinebook.example" target="_blank" rel="noreferrer" style={{background:'#111'}}>🌐 Essayer en ligne</a>
        </div>
      </div>

      <div className="mockup zoom-in" style={{minHeight:420}}>
        <Image src="/screen1.png" alt="CinéBook mockup" width={300} height={600} style={{borderRadius:12}} priority />
      </div>
    </section>
  )
}
 */

'use client';

import React from 'react';
import { Download } from 'lucide-react';

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
            Télécharger le .apk
          </a>
        </div>
        <div className="hero-mockup animate-zoomIn">
          <div className="mockup-phone">
            <div className="mockup-screen">
              <img src="/images/screen1.jpg" alt="Header" width={290} height={630} />
              {/* <div className="mockup-content">
                <div className="mockup-header">
                  <img src="/images/header.png" alt="Header" width={100} height={100} />
                </div>
                <div className="mockup-movies">
                  <div className="movie-card">movie 1</div>
                  <div className="movie-card">movie 2</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;