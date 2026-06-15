const JOBS = [
  {
    title: 'SDE 1 – Full Stack & GenAI Developer',
    company: '🏢 Teampumpkin', location: '📍 Remote / Onsite',
    period: 'Present', badge: true, dot: 'dot-amber',
    bullets: [
      'Building client-facing web projects using Next.js, React, and Tailwind CSS with SSR optimization and performance tuning.',
      'Developing and maintaining WordPress-based sites with custom themes, Elementor, WooCommerce integrations, and plugin customization.',
      'Integrating GenAI APIs (OpenAI, Claude, Gemini) into web products to power AI-driven features and workflows.',
      'Building backend services with Node.js, Express, MongoDB, PostgreSQL and REST APIs for scalable data flow.',
      'Handling client communication, project delivery, and technical documentation across multiple concurrent projects.',
    ],
    stack: [
      { l: 'Next.js', c: 't-teal' }, { l: 'React' }, { l: 'GenAI APIs', c: 't-amber' },
      { l: 'WordPress' }, { l: 'Node.js' }, { l: 'PostgreSQL' },
      { l: 'MongoDB' }, { l: 'Tailwind CSS' },
    ],
  },
  {
    title: 'SDE 1',
    company: '🏢 Pedals Up', location: '📍 Ahmedabad',
    period: 'Nov 2024 – Current', badge: false, dot: 'dot-teal',
    bullets: [
      'Delivered dynamic UIs with GSAP and Three.js, boosting user engagement by 40% in 3D environments.',
      'Built scalable RESTful APIs with Node.js and Liquid.js, handling 10,000+ daily requests.',
      'Integrated blockchain capabilities for secure, decentralized interactions.',
      'Optimized React front-end with Tailwind CSS, cutting load times by 30%.',
    ],
    stack: [
      { l: 'GSAP', c: 't-teal' }, { l: 'Three.js' }, { l: 'Shopify' },
      { l: 'Node.js' }, { l: 'Blockchain' }, { l: 'React' }, { l: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Web Developer',
    company: '🏢 Vistaar WebX', location: '📍 Bhopal',
    period: 'Feb 2024 – Oct 2024', badge: false, dot: 'dot-blue',
    bullets: [
      'Led 2 client projects end-to-end, increasing client satisfaction by 20%.',
      'Developed REST APIs with Node.js, integrated with React + Axios front-end.',
      'Reduced front-end errors by 15% through request caching and error-boundary patterns.',
    ],
    stack: [
      { l: 'Node.js' }, { l: 'React' }, { l: 'Axios' },
      { l: 'MongoDB' }, { l: 'JWT' }, { l: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend Developer',
    company: '🏢 Visanka Technologies Pvt Ltd', location: '',
    period: 'Oct 2023 – Dec 2023', badge: false, dot: 'dot-purple',
    bullets: [
      'Developed back-end for social media software ensuring high performance and scalability.',
      'Designed Express.js APIs, improving response times by 20%.',
      'Conducted thorough API testing using Postman across all endpoints.',
    ],
    stack: [
      { l: 'Node.js' }, { l: 'Express.js' }, { l: 'MySQL' }, { l: 'Postman' },
    ],
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="sec-hdr reveal">
          <span className="sec-icon si-amber">💼</span>
          <span className="sec-label">Experience</span>
        </div>
        <div className="timeline">
          {JOBS.map((job, i) => (
            <div key={i} className="exp-item reveal">
              <div className={`exp-dot ${job.dot}`} />
              <div className="exp-content">
                <div className="exp-top">
                  <div>
                    <div className="exp-title">{job.title}</div>
                    <div className="exp-co">{job.company}</div>
                    {job.location && <div className="exp-loc">{job.location}</div>}
                  </div>
                  <div className="exp-right">
                    {job.badge && <span className="badge-cur">● CURRENT</span>}
                    <span className="exp-period">{job.period}</span>
                  </div>
                </div>
                <div className="exp-bullets">
                  {job.bullets.map((b, j) => (
                    <div key={j} className="exp-bullet">{b}</div>
                  ))}
                </div>
                <div className="exp-stack">
                  {job.stack.map((s) => (
                    <span key={s.l} className={`tag ${s.c ?? ''}`}>{s.l}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
