/* 'use client'
import React, { useEffect, useRef } from 'react'

export default function CTA(){
  const ref = useRef<HTMLDivElement | null>(null)

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
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="big-cta container in-view" ref={ref}>
      <div className="txt">
        <h2>Essayez CinéBook dès aujourd'hui</h2>
        <p>Vivez l'expérience du cinéma moderne : réservation instantanée, tickets téléchargeables et accès rapide aux séances.</p>
      </div>
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <a className="cta-btn pulse" href="/cinebook.apk" download style={{padding:'12px 18px'}}>📲 Télécharger .apk</a>
        <a className="cta-btn" href="https://demo.cinebook.example" target="_blank" rel="noreferrer" style={{background:'#111'}}>🌐 Essayer en ligne</a>
      </div>
    </section>
  )
}
 */

import React from 'react';
import { Download, ChevronRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Essayez CinéBook dès aujourd&apos;hui et vivez l&apos;expérience du cinéma autrement !
          </h2>
          <a
            href="/cinebook.apk"
            download="CinéBook.apk"
            className="btn-cta"
          >
            <Download size={24} />
            Télécharger l&apos;app .apk
            <ChevronRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;