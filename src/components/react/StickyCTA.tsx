import { useEffect, useState } from 'react';
import { site } from '../../lib/site';
import { withBase } from '../../lib/base';

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="sticky-cta" role="region" aria-label="Quick contact">
        <a
          className="cta-icon"
          href={`tel:${site.phoneHref}`}
          aria-label={`Call Wonder IVF on ${site.phone}`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" />
          </svg>
        </a>
        <a
          className="cta-icon cta-wa"
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Wonder IVF on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.5-4.1-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.5 1.9 1 .9 1.9 1.2 2.2 1.3.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.5.3.1.2.1.6-.1 1.1z" />
          </svg>
        </a>
        <a className="cta-primary" href={withBase('/contact-us/')}>
          Book Consultation
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h13m0 0-5.5-5.5M18 12l-5.5 5.5" />
          </svg>
        </a>
      </div>

      <div className="float-cta" data-show={show}>
        <a className="btn" href={withBase('/contact-us/')}>
          Book a Consultation
          <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M5 12h13m0 0-5.5-5.5M18 12l-5.5 5.5" />
          </svg>
        </a>
      </div>
    </>
  );
}
