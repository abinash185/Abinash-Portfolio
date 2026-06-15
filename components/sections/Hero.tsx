export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-content">
          <div className="hero-tags reveal">
            <span className="tag t-amber">⚡ Full Stack Developer</span>
            <span className="tag t-teal">🤖 GenAI Developer</span>
            <span className="tag t-blue">🔥 MERN Stack</span>
            <span className="tag">2+ Years Experience</span>
            <span className="tag">● Teampumpkin · SDE 1</span>
            <span className="tag">📍 Varanasi, UP</span>
          </div>

          <h1 className="hero-h1 reveal" style={{ transitionDelay: '.07s' }}>
            Full Stack &amp;<br />
            <span className="hero-accent">GenAI Developer.</span>
          </h1>

          <p className="hero-sub reveal" style={{ transitionDelay: '.14s' }}>
            Building <strong>scalable web applications</strong> and{' '}
            <strong>AI-powered products</strong> with React, Next.js, Node.js,
            PostgreSQL &amp; MongoDB. Experienced in <strong>GSAP animations</strong>,
            Three.js, <strong>WordPress</strong>, Blockchain, and production-ready{' '}
            <strong>GenAI pipelines</strong>. Currently at Teampumpkin as SDE 1.
          </p>

          <div className="hero-contact reveal" style={{ transitionDelay: '.21s' }}>
            <a href="mailto:abinashkumar185@gmail.com" className="cpill">
              ✉️ abinashkumar185@gmail.com
            </a>
            <a href="tel:7355027827" className="cpill">📞 7355027827</a>
            <a href="https://leetcode.com/abinash185" target="_blank" rel="noreferrer" className="cpill">
              🧩 abinash185
            </a>
            <span className="cpill">📍 Varanasi, UP</span>
          </div>
        </div>
      </div>
    </section>
  )
}
