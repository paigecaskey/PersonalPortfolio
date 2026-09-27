import { useState } from 'react';
import styles from './DjRequestForm.module.css';

const INITIAL = { name: '', email: '', message: '', website: '' };

const DjRequestForm = () => {
  const [fields, setFields] = useState(INITIAL);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const update = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setError('');

    try {
      const response = await fetch('/api/dj-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'Couldn’t send right now. Try again soon!');
      }

      setFields(INITIAL);
      setStatus('sent');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return <p className={styles.sent}>got it!! i&apos;ll get back to u soon :)</p>;
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.row}>
        <input
          className={styles.field}
          type="text"
          name="name"
          placeholder="name"
          aria-label="Name"
          value={fields.name}
          onChange={update}
          maxLength={100}
          required
        />
        <input
          className={styles.field}
          type="email"
          name="email"
          placeholder="email"
          aria-label="Email"
          value={fields.email}
          onChange={update}
          maxLength={200}
          required
        />
      </div>
      <textarea
        className={styles.field}
        name="message"
        placeholder="book me! what's the event, date, vibe?"
        aria-label="Message"
        rows={3}
        value={fields.message}
        onChange={update}
        maxLength={2000}
        required
      />
      {/* Honeypot for bots; hidden from people and screen readers. */}
      <input
        className={styles.honeypot}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={fields.website}
        onChange={update}
      />
      <button className={styles.submit} type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'sending…' : 'send!'}
      </button>
      {status === 'error' && <p className={styles.error} role="alert">{error}</p>}
    </form>
  );
};

export default DjRequestForm;
