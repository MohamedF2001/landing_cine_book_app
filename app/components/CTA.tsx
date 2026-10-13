
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
            Télécharger l&apos;application
            <ChevronRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;