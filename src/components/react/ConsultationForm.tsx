import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'error' | 'done';

interface Props {
  subjects: string[];
}

export default function ConsultationForm({ subjects }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus('sending');
    setMessage('');

    try {
      // No backend endpoint is configured yet. The payload below is the
      // complete, structured submission ready to POST wherever you wire it up.
      const payload = Object.fromEntries(data.entries());
      console.info('[wonder-ivf] consultation request', payload);

      await new Promise((r) => setTimeout(r, 700));
      setStatus('done');
      form.reset();
    } catch {
      setStatus('error');
      setMessage('We could not send your request. Please call +91-70734-31122 instead.');
    }
  }

  if (status === 'done') {
    return (
      <div className="form-success" role="status">
        <span className="form-success-mark" aria-hidden="true">
          ✓
        </span>
        <h3>Thank you — your request has been received</h3>
        <p>
          Our patient care team will get in touch to confirm a time that suits you. If you would
          rather speak with us now, call <strong>+91-70734-31122</strong>.
        </p>
        <button type="button" className="btn btn-ghost" onClick={() => setStatus('idle')}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate={false}>
      <div className="field-row">
        <label className="field">
          <span>
            Full Name <em>*</em>
          </span>
          <input type="text" name="name" autoComplete="name" required placeholder="Your full name" />
        </label>
        <label className="field">
          <span>
            Phone Number <em>*</em>
          </span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            required
            placeholder="+91 00000 00000"
            pattern="[0-9+\s\-()]{8,18}"
          />
        </label>
      </div>

      <div className="field-row">
        <label className="field">
          <span>
            Email <em>*</em>
          </span>
          <input type="email" name="email" autoComplete="email" required placeholder="you@example.com" />
        </label>
        <label className="field">
          <span>Preferred centre</span>
          <select name="centre" defaultValue="Andheri West, Mumbai">
            <option>Andheri West, Mumbai</option>
            <option>Kolhapur</option>
            <option>Either centre</option>
          </select>
        </label>
      </div>

      <label className="field">
        <span>
          What can we help with? <em>*</em>
        </span>
        <select name="subject" defaultValue="Fertility Assessment" required>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us a little about your situation, any reports you have, and the best time to reach you."
        />
      </label>

      <label className="field-check">
        <input type="checkbox" name="consent" required />
        <span>
          I agree to be contacted by Wonder IVF about my enquiry. My information will be handled in
          line with the <a href="/privacy-policy/">Privacy Policy</a>.
        </span>
      </label>

      {status === 'error' && (
        <p className="form-error" role="alert">
          {message}
        </p>
      )}

      <button type="submit" className="btn btn-lg" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Request a consultation'}
      </button>

      <p className="form-note">
        This form does not create a doctor–patient relationship and is not for medical emergencies.
        Please do not include sensitive medical records here.
      </p>
    </form>
  );
}
