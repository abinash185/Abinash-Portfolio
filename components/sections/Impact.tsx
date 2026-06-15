const METRICS = [
  { ico: '🚀', val: '40%',  lbl: 'Engagement Boost' },
  { ico: '⚡', val: '30%',  lbl: 'Load Time Cut' },
  { ico: '📡', val: '10K+', lbl: 'Daily API Req' },
  { ico: '🔧', val: '15%',  lbl: 'Error Reduction' },
  { ico: '🧩', val: '350+', lbl: 'DSA Solved' },
  { ico: '📂', val: '90+',  lbl: 'OSS Repos' },
]

export default function Impact() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-hdr reveal">
          <span className="sec-icon si-amber">⚡</span>
          <span className="sec-label">Impact at a Glance</span>
        </div>
        <div className="grid6 stagger">
          {METRICS.map((m) => (
            <div key={m.lbl} className="m-box">
              <div className="m-ico">{m.ico}</div>
              <div className="m-val">{m.val}</div>
              <div className="m-lbl">{m.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
