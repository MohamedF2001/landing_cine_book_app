'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Screenshots: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);

  const screenshots = [
    { id: 1, name: 'screen11.png', alt: 'Interface principale CinéBook' },
    { id: 2, name: 'screen22.png', alt: 'Sélection de films' },
    { id: 3, name: 'screen33.png', alt: 'Réservation de tickets' },
    { id: 4, name: 'screen44.png', alt: 'Profil utilisateur' },
    { id: 5, name: 'screen55.png', alt: 'Interface principale CinéBook' },
    { id: 6, name: 'screen66.png', alt: 'Sélection de films' },
    { id: 7, name: 'screen77.png', alt: 'Réservation de tickets' },
    { id: 8, name: 'screen8.jpg', alt: 'Profil utilisateur' }
  ];

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % screenshots.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [isPaused, screenshots.length]);

  return (
    <section className="screenshots">
      <div className="container">
        <h2 className="section-title">Découvrez l&apos;interface</h2>
        <div
          className="screenshots-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
          }}
        >
          <button className="carousel-arrow" type="button" aria-label="Tourner vers l’écran précédent" onClick={() => goTo(activeIndex - 1)}>
            <ChevronLeft aria-hidden="true" />
          </button>
          <div
            className={`screenshots-orbit${isDragging ? ' is-dragging' : ''}`}
            role="group"
            aria-label="Carrousel circulaire des écrans CinéBook"
            onPointerDown={(event) => {
              dragStartX.current = event.clientX;
              setIsDragging(true);
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (dragStartX.current === null) return;
              const delta = event.clientX - dragStartX.current;
              if (Math.abs(delta) > 36) {
                goTo(activeIndex + (delta < 0 ? 1 : -1));
                dragStartX.current = event.clientX;
              }
            }}
            onPointerUp={() => { dragStartX.current = null; setIsDragging(false); }}
            onPointerCancel={() => { dragStartX.current = null; setIsDragging(false); }}
          >
            <div className="screenshots-orbit-ring" style={{ transform: `rotateY(${-activeIndex * (360 / screenshots.length)}deg)` }}>
              {screenshots.map((screenshot, idx) => (
                <div
                  key={screenshot.id}
                  className={`screenshot-item${idx === activeIndex ? ' is-active' : ''}`}
                  style={{ transform: `translate(-50%, -50%) rotateY(${idx * (360 / screenshots.length)}deg) translateZ(var(--orbit-radius))` }}
                  aria-hidden={idx !== activeIndex}
                >
                  <div className="screenshot-phone">
                    <div className="screenshot-content">
                      <Image
                        src={`/images/${screenshot.name}`}
                        alt={screenshot.alt}
                        width={200}
                        height={400}
                        className="screenshot-image"
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-arrow" type="button" aria-label="Tourner vers l’écran suivant" onClick={() => goTo(activeIndex + 1)}>
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
        <div className="carousel-dots" aria-label="Choisir un écran">
          {screenshots.map((screenshot, idx) => (
            <button
              key={screenshot.id}
              type="button"
              className={`carousel-dot${idx === activeIndex ? ' is-active' : ''}`}
              aria-label={`Afficher l’écran ${idx + 1}`}
              aria-current={idx === activeIndex ? 'true' : undefined}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
