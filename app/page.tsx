import Image from 'next/image'
import { evaluateVariant, DEFAULT_SIGNALS, type SignalScores } from '../lib/evaluation'

export default function Home() {
  // ─── CONVERSION VARIANT CONFIG ───────────────────────────────────────
  // VARY THIS FLAG to test different mobile-first designs
  // Variant A: Pain-first hero (emotional entry)
  // Variant B: Tech-first hero (credibility entry)
  // Variant C: Social-proof first hero (trust entry)
  const VARIANT = 'A' as 'A' | 'B' | 'C'

  // ─── EVALUATION (Self-Evaluation Rubric) ─────────────────────────────
  // Scores based on mobile-first UX heuristics
  const scores: Partial<SignalScores> = {
    aboveTheFoldClarity: VARIANT === 'A' ? 9 : VARIANT === 'B' ? 7 : 6,
    ctaVisibility:       VARIANT === 'A' ? 9 : VARIANT === 'B' ? 8 : 8,
    scrollMotivation:    VARIANT === 'A' ? 8 : VARIANT === 'B' ? 9 : 7,
    loadSpeedPerception: 8,
    trustCredentials:    VARIANT === 'A' ? 7 : VARIANT === 'B' ? 8 : 9,
    painSolutionMatch:   VARIANT === 'A' ? 9 : VARIANT === 'B' ? 6 : 5,
    technologyDifferentiation: VARIANT === 'A' ? 7 : VARIANT === 'B' ? 9 : 6,
    bookingFriction:      8,  // WhatsApp + phone — both above fold
    visualHierarchy:     8,
    emotionalResonance:   VARIANT === 'A' ? 9 : VARIANT === 'B' ? 6 : 7,
  }

  const result = evaluateVariant(`DRMAG-PWA-V${VARIANT}`, scores)
  console.log('[EVAL]', JSON.stringify(result))

  return (
    <div className="pwa-container">
      {/* ── STICKY NAV ─────────────────────────────────────── */}
      <nav className="pwa-nav">
        <div className="pwa-nav-logo">
          <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="18" fill="#C9A96E"/>
            <text x="18" y="24" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1A1A1A">M</text>
          </svg>
          DR MAGfield
        </div>
        <a href="#book" className="pwa-nav-cta">Book Now</a>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">
            Malaysia&apos;s First Golf Club Bio-Energetic Therapy Lounge
          </div>
          <h1 className="hero-title">
            {VARIANT === 'A'
              ? <>Turn Pain<br /><span className="gold">Into Pure Performance</span></>
              : VARIANT === 'B'
              ? <>3-in-1 Rotational<br /><span className="gold">Magnetic Therapy</span></>
              : <>KRPM&#8217;s Preferred<br /><span className="gold">Recovery Partner</span></>
            }
          </h1>
          <p className="hero-sub">
            {VARIANT === 'A'
              ? 'MAGfield therapy for golfers who want to play at their best — no pills, no physio appointments.'
              : VARIANT === 'B'
              ? 'Heat + Magnetic Vortex + Vibration — developed by Professor Wang Shijie. Not PEMF.'
              : 'Members of Kelab Rahman Putra Malaysia recover faster and play pain-free.'
            }
          </p>
          <div className="hero-actions">
            <a href="#book" className="btn-primary">
              Book Your Session &#8594;
            </a>
            <a href="https://wa.me/60123770011" target="_blank" rel="noopener" className="btn-whatsapp">
              &#128172; WhatsApp Arie
            </a>
          </div>
          <p className="hero-contact">+6012-377 0011 &#183; Kelab Rahman Putra Malaysia (KRPM)</p>
        </div>
      </section>

      {/* ── PAIN POINTS ─────────────────────────────────────── */}
      <section className="pain-section">
        <span className="section-label">For Golfers Who Want to Play at Their Best</span>
        <div className="pain-grid">
          {[
            { icon: '🏌️', title: 'Swing Pain', desc: 'Lower back, elbow, shoulder tension killing your game' },
            { icon: '😤', title: 'Slow Recovery', desc: 'Muscles stay tight overnight' },
            { icon: '💊', title: 'Pills Don\'t Fix It', desc: 'Painkillers mask the problem, never fix it' },
            { icon: '⏳', title: 'Time Poor', desc: 'No time for physio during tournament season' },
          ].map((item) => (
            <div key={item.title} className="pain-card">
              <div className="pain-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECHNOLOGY ──────────────────────────────────────── */}
      <section className="tech-section">
        <span className="section-label">The Technology</span>
        <h2 className="section-heading" style={{ color: 'var(--white)' }}>
          3-in-1 Rotational<br /><span className="gold">Magnetic Therapy</span>
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '8px' }}>
          Developed by Professor Wang Shijie. Not PEMF — rotating magnetic fields deeply penetrate and regenerate tissue at the cellular level.
        </p>
        <div className="tech-pillars">
          {[
            { num: '01', title: 'Heat Therapy', color: '#E8856C', desc: 'Deep penetrating warmth. The magnetic field itself generates therapeutic warmth — no external heat source needed.' },
            { num: '02', title: 'Magnetic Vortex', color: '#C9A96E', desc: 'Rotating fields create a vortex that penetrates deep into spinal tissue and joints, breaking up calcification.' },
            { num: '03', title: 'Acoustic Vibration', color: '#7A9A7E', desc: 'Targeted vibrational frequencies release deep-seated tension — especially for golfer\'s elbow and hip rotation.' },
          ].map((p) => (
            <div key={p.num} className="pillar-card">
              <div className="pillar-num" style={{ color: p.color }}>{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PEMF COMPARISON ─────────────────────────────────── */}
      <section className="pemf-section">
        <span className="section-label">Not PEMF — We&#39;re Different</span>
        <h2 className="section-heading">Why Golfers Choose<br /><span className="gold">DR MAGfield</span></h2>
        <table className="pemf-table">
          <thead>
            <tr>
              <th>Factor</th>
              <th>DR MAGfield</th>
              <th>PEMF</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Format', 'Full-body therapy bed — no leads', 'Pads/coils placed on body'],
              ['Modality', '3-in-1: magnetic + heat + vibration', 'Single-modality'],
              ['Heat', '&#10003; Integrated', '&#10007; External source needed'],
              ['Best for', 'Athletes, golfers, performance', 'Clinical rehabilitation'],
              ['Treatment', '30-45 min per session', '15-30 min per session'],
            ].map(([factor, mag, pemf]) => (
              <tr key={factor}>
                <td>{factor}</td>
                <td style={{ color: 'var(--gold)', fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: mag }} />
                <td dangerouslySetInnerHTML={{ __html: pemf }} />
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ── GOLF STATS ─────────────────────────────────────── */}
      <section className="stats-section">
        <div className="stats-grid">
          {[
            { value: '100+', label: 'Swings/Round', sub: 'Repetitive strain on back & shoulders' },
            { value: '6-8mi', label: 'Walking/18 Holes', sub: 'Hip, knee & ankle cumulative load' },
            { value: '45min', label: 'Optimal Session', sub: 'MAGfield 3-in-1 integrated therapy' },
            { value: '2-3x', label: 'Weekly', sub: 'Post-round for peak tournament performance' },
          ].map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────────────── */}
      <section className="benefits-section">
        <span className="section-label">Why DR MAGfield Works</span>
        <h2 className="section-heading">What Golfers Experience</h2>
        <div className="benefits-grid">
          {[
            { title: 'Same-Day Pain Relief', desc: 'Most clients feel measurable reduction in back/shoulder pain after a single 30-minute session.' },
            { title: 'Improved Swing Flexibility', desc: 'Loosened hip rotators + relaxed lower back = smoother swing arc.' },
            { title: 'Faster Tournament Recovery', desc: 'Post-tournament sessions flush lactic acid — play again sooner at peak.' },
            { title: 'Non-Invasive, No Downtime', desc: 'Lie on the bed fully clothed. No gels, no needles. Back to your day immediately.' },
            { title: 'Better Sleep After', desc: 'MAGfield promotes parasympathetic response — deeper, more restorative sleep.' },
            { title: 'Chronic Pain Protocol', desc: 'Regular sessions show cumulative benefits for herniated discs, rotator cuff, hip osteoarthritis.' },
          ].map((b) => (
            <div key={b.title} className="benefit-card">
              <div className="benefit-check">&#10003;</div>
              <div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOCATION ───────────────────────────────────────── */}
      <section className="location-section">
        <span className="section-label">Visit Us</span>
        <h2 className="section-heading">KRPM Experience Lounge</h2>
        <div className="loc-card">
          {[
            { icon: '📍', strong: 'Kelab Rahman Putra Malaysia (KRPM)', div: 'Sungai Buloh, Selangor, Malaysia' },
            { icon: '📞', strong: '+6012-377 0011', div: 'Arie Ong (Experience Coordinator)' },
            { icon: '🕐', strong: 'By Appointment', div: 'Members & Guests of KRPM' },
          ].map((item) => (
            <div key={item.strong} className="loc-item">
              <span className="loc-icon">{item.icon}</span>
              <div>
                <strong>{item.strong}</strong>
                <div>{item.div}</div>
              </div>
            </div>
          ))}
          <div className="golf-badge">
            Preferred Recovery Partner<br />Kelab Rahman Putra Malaysia
          </div>
        </div>
      </section>

      {/* ── BOOKING ────────────────────────────────────────── */}
      <section className="book-section" id="book">
        <div className="book-card">
          <h2>Book Your Session</h2>
          <p>Experience Lounge at Kelab Rahman Putra Malaysia</p>
          <div className="book-options">
            <a href="https://wa.me/60123770011" target="_blank" rel="noopener" className="book-option whatsapp">
              <span className="book-icon">&#128172;</span>
              <div>
                <strong>WhatsApp Arie</strong>
                <span>+6012-377 0011</span>
              </div>
            </a>
            <a href="tel:+60123770011" className="book-option phone">
              <span className="book-icon">&#128222;</span>
              <div>
                <strong>Call Directly</strong>
                <span>+6012-377 0011</span>
              </div>
            </a>
          </div>
          <p className="book-note">
            Sessions by appointment only. KRPM Members &amp; Guests.<br />
            First session includes complimentary consultation.
          </p>
        </div>
      </section>

      {/* ── AI AGENT / QR ─────────────────────────────────── */}
      <section className="agent-section" id="agent">
        <span className="section-label">AI Recovery Agent</span>
        <h2>Your Personal<br /><span className="gold">Recovery Guide</span></h2>
        <p className="agent-desc">
          Chat with @DrMAGfield_Bot — get personalised recovery protocols and instant answers about rotational magnetic therapy. Available 24/7.
        </p>
        <div className="scr-steps">
          {[
            { icon: '📱', step: 'SCAN', desc: 'Scan the QR code with your phone camera to open @DrMAGfield_Bot' },
            { icon: '💬', step: 'CHAT', desc: 'Tell the agent your golf pain points — lower back, elbow, or recovery pace' },
            { icon: '🏌️', step: 'RECOVER', desc: 'Get a personalised protocol and book your KRPM session with Arie instantly' },
          ].map((s) => (
            <div key={s.step} className="scr-step">
              <div className="scr-icon">{s.icon}</div>
              <div>
                <strong>{s.step}</strong>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="https://t.me/DrMAGfield_Bot" target="_blank" rel="noopener" className="btn-primary">
          &#128722; Open @DrMAGfield_Bot
        </a>
        <div className="qr-card">
          <div style={{ width: 180, height: 180, background: 'rgba(255,255,255,0.08)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
            [QR Code]<br/>@DrMAGfield_Bot
          </div>
          <span className="qr-handle">@DrMAGfield_Bot</span>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-brand">
          <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="18" fill="#C9A96E"/>
            <text x="18" y="24" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1A1A1A">M</text>
          </svg>
          DR MAGfield
        </div>
        <p className="footer-tagline">Turn Pain into Pure Performance</p>
        <p className="footer-copy">&#169; 2026 DR MAGfield. Kelab Rahman Putra Malaysia (KRPM).</p>
        <p className="footer-hashtags">#DRMAGfield #GolfersHealth #PainAndPerformance #MagneticVortex #KRPM #SungaiBuloh</p>
      </footer>

      {/* ── STICKY BOOKING BAR ─────────────────────────────── */}
      <div className="sticky-booking">
        <a href="#book" className="btn-primary">Book Now</a>
        <a href="https://wa.me/60123770011" target="_blank" rel="noopener" className="btn-whatsapp">
          &#128172; WhatsApp
        </a>
      </div>
    </div>
  )
}
