import Link from 'next/link';
import styles from './tech.module.css';

const STATS = [
  { value: '45%', label: 'cut in ML infrastructure costs ($80K/yr) across 10+ production BERT models' },
  { value: '70%', label: 'less time spent finding and reading research papers, via AI automations' },
  { value: '2×', label: 'precision (+0.25 F1) on production models through experimentation and A/B testing' },
  { value: '45%', label: 'better recommendation precision with deep learning at American Express' },
];

const EXPERIENCE = [
  {
    role: 'Technology Consultant',
    org: 'Self-Employed',
    dates: 'May 2026 – Present',
    points: [
      'Help non-technical organizations bring AI into their workflows with bespoke software, automations and data infrastructure that get rid of mundane, repetitive work.',
      'For BioShift Life Sciences, built AI infrastructure from the ground up, including a retrieval-augmented research assistant that helps the team access and synthesize research across domains.',
      'Designed automations for discovering and digesting academic literature, cutting time spent locating and reading papers by 70%.',
    ],
  },
  {
    role: 'Associate Applied AI/ML Scientist',
    org: 'Sprout Social',
    dates: 'Jun 2025 – Jul 2026',
    points: [
      'Reduced infrastructure costs by 45% ($80K annually) across 10+ production BERT models with FP16 mixed-precision inference, replica optimization (66 → 36), and quantization and distillation experiments, without sacrificing model quality.',
      'Improved model performance by +0.25 F1 and 2× precision through feature engineering, experimentation, A/B testing and post-deployment monitoring.',
      'Led evaluation and prototyping of LLM systems, designing benchmarks for quality, latency, bias, hallucination risk and cost to inform production decisions.',
      'Owned end-to-end Bluesky and Threads support for a production ML feature, extending ingestion pipelines and running Spark backfills for 6,000+ profiles.',
      'Built monitoring and observability for ML services with Airflow, StatsD and Datadog.',
    ],
  },
  {
    role: 'AI Studio Intern',
    org: 'American Express',
    dates: 'Aug 2024 – Dec 2024',
    points: [
      'Improved recommendation precision by 45% by developing and evaluating deep learning models for personalized product targeting.',
      'Engineered a two-tower recommendation model using user behavior and demographics to influence product strategy.',
      'Built scalable feature engineering pipelines, cutting data processing time by 30% and improving training efficiency by 20%.',
    ],
  },
];

const LEADERSHIP = [
  {
    role: 'Underrepresented Genders in Tech Committee',
    org: 'Sprout Social',
    dates: 'Jan 2026 – Jul 2026',
    text: 'Organized monthly meetings and cross-functional initiatives, leading plans for an org-wide hackathon and programming.',
  },
  {
    role: 'Panther Network Mentor',
    org: 'Chapman University',
    dates: 'Feb 2026 – May 2026',
    text: 'Mentored students on recruiting and careers through resume reviews, interview prep and internship placement.',
  },
  {
    role: 'Fellow Ambassador',
    org: 'Break Through Tech @ UCLA',
    dates: 'Sep 2025 – May 2026',
    text: 'Led info sessions and panels for 100+ applicants and collaborated on outreach to boost applicant engagement.',
  },
];

const EDUCATION = [
  {
    title: 'B.S. in Data Science',
    org: 'Chapman University',
    dates: 'May 2025',
    text: 'Minor in Business Administration. Dean’s Scholar, Provost List.',
  },
  {
    title: 'Certificate in Music Technology and Production',
    org: 'Los Angeles City College',
    dates: 'Expected May 2028',
    text: 'Music Technology, Music Theory, Music as a Business.',
  },
  {
    title: 'Machine Learning Foundations',
    org: 'Cornell University',
    dates: 'Aug 2024',
    text: 'Certification.',
  },
];

const SKILLS = [
  { group: 'languages', items: ['Python', 'SQL', 'R', 'C++', 'JavaScript'] },
  {
    group: 'ml / ai',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NLP', 'LLMs', 'LoRA', 'XGBoost', 'LLM/Agent Evaluation', 'LLM Observability'],
  },
  {
    group: 'tools',
    items: ['Claude Code', 'Airflow', 'Spark', 'Datadog', 'AWS (S3, EMR, SageMaker)', 'Pandas', 'HuggingFace', 'React', 'Flask'],
  },
  { group: 'audio', items: ['Ableton Live', 'Logic Pro', 'Audio Engineering', 'DSP', 'MIDI'] },
];

const external = { target: '_blank', rel: 'noopener noreferrer' };

const TechPage = () => (
  <main className={styles.page}>
    <Link href="/" className={styles.back}>&larr; paige.</Link>

    <header className={styles.hero}>
      <h1 className={styles.title}>i build AI that does the boring stuff.</h1>
      <p className={styles.intro}>
        applied AI/ML scientist turned technology consultant. data science @ chapman.
        currently helping teams hand their repetitive work to software.
      </p>
    </header>

    <section className={styles.section}>
      <h2 className={styles.heading}>by the numbers</h2>
      <ul className={styles.stats}>
        {STATS.map(({ value, label }) => (
          <li key={label} className={styles.stat}>
            <span className={styles.statValue}>{value}</span>
            <span className={styles.statLabel}>{label}</span>
          </li>
        ))}
      </ul>
    </section>

    <section className={styles.section}>
      <h2 className={styles.heading}>experience</h2>
      {EXPERIENCE.map(({ role, org, dates, points }) => (
        <article key={role} className={styles.card}>
          <div className={styles.cardHead}>
            <h3 className={styles.role}>{role}</h3>
            <span className={styles.dates}>{dates}</span>
          </div>
          <p className={styles.org}>{org}</p>
          <ul className={styles.points}>
            {points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </article>
      ))}
    </section>

    <section className={styles.section}>
      <h2 className={styles.heading}>leadership</h2>
      <div className={styles.columns}>
        {LEADERSHIP.map(({ role, org, dates, text }) => (
          <article key={role} className={styles.card}>
            <h3 className={styles.role}>{role}</h3>
            <p className={styles.org}>{org} · {dates}</p>
            <p className={styles.text}>{text}</p>
          </article>
        ))}
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.heading}>education</h2>
      <div className={styles.columns}>
        {EDUCATION.map(({ title, org, dates, text }) => (
          <article key={title} className={styles.card}>
            <h3 className={styles.role}>{title}</h3>
            <p className={styles.org}>{org} · {dates}</p>
            <p className={styles.text}>{text}</p>
          </article>
        ))}
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.heading}>skills</h2>
      <div className={styles.card}>
        {SKILLS.map(({ group, items }) => (
          <div key={group} className={styles.skillRow}>
            <span className={styles.skillGroup}>{group}</span>
            <ul className={styles.chips}>
              {items.map((item) => <li key={item} className={styles.chip}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.heading}>writing</h2>
      <a
        className={`${styles.card} ${styles.writing}`}
        href="https://medium.com/@paigecaskey/explaining-adam-momentum-for-gradient-descent-optimization-45c2dc6a9798"
        {...external}
      >
        <h3 className={styles.role}>Optimization Algorithms for Deep Learning Convergence &rarr;</h3>
        <p className={styles.org}>Medium · Jul 2024</p>
        <p className={styles.text}>
          Technical articles on adaptive learning rate methods, with 81% engagement (30s+ read rate).
        </p>
      </a>
    </section>

    <nav className={styles.links}>
      <a className={styles.button} href="https://github.com/paigecaskey" {...external}>github!</a>
      <a className={styles.button} href="https://www.linkedin.com/in/paige-caskey/" {...external}>linkedin!</a>
      <Link className={styles.button} href="/contact">contact?</Link>
    </nav>
  </main>
);

export default TechPage;
