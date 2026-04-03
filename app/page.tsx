'use client'

import {
  MessageCircle, Phone, Send, MapPin, Clock,
  Flag, Activity, Heart, Timer, Check,
  Home as HomeIcon, Dumbbell, Zap, Calendar,
  QrCode, ChevronRight, Menu, X
} from 'lucide-react'
import { useState, useEffect } from 'react'
import QRCode from 'qrcode'

// Canonical brand phone — NEVER change
const BRAND_WHATSAPP = '60126595319'
const WA_URL = `https://wa.me/${BRAND_WHATSAPP}`

// Official DR MAGfield logo (transparent PNG — Keith's archive)
const LOGO_URL = 'https://wlwzfjlvwaosonorsvyf.supabase.co/storage/v1/object/public/brand-assets/dr-magfield/logo-nav-400.png'

// KRPM-authorised brand asset URLs (uploaded to Supabase public bucket)
const HERO_IMG = 'https://wlwzfjlvwaosonorsvyf.supabase.co/storage/v1/object/public/brand-assets/dr-magfield/hero-krpm.jpg'
const QI_MASTER_IMG = 'https://wlwzfjlvwaosonorsvyf.supabase.co/storage/v1/object/public/brand-assets/dr-magfield/qi-master.jpg'
const QI_MINI_IMG = 'https://wlwzfjlvwaosonorsvyf.supabase.co/storage/v1/object/public/brand-assets/dr-magfield/qi-mini-correct.jpg'
const ARIE_PORTRAIT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS9XsC--BuaTDtg6fLuXwoIBA9t06UuGmMHB6l6N6WeMcHRHBV1UhlqJnHGhtA5M-bgjObVb9e8mvnRiPKmOPdEXhChzruRaaIWxFwRNH6L4RZ1YuWR575IubB8fiZl6pBCjba0-8tbKtBosESjMdxjhL9hs2163qYd4ql5vlOO62cYkoKANBFOdw6TyOVbzS7pWigUH9SY9iHwQj9KtvPmWWUnO9smWZhcqLcvNRnpjoXPjJfdXQTOZphNnNngIikt9om7Mz2eDE'

export default function Home() {
  const [telegramQr, setTelegramQr] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    QRCode.toDataURL('https://t.me/DrMAGfield_Bot?start=krpm', {
      width: 180,
      margin: 2,
      color: { dark: '#182232', light: '#FFFDF9' },
    }).then(setTelegramQr).catch(() => {})
  }, [])

  return (
    <div className="pwa-container">
      {/* ── STICKY NAV ─────────────────────────────────────── */}
      <nav className="pwa-nav">
        <a href="#" className="pwa-nav-logo">
          <img src={LOGO_URL} alt="DR MAGfield" style={{ width: 28, height: 28, objectFit: 'contain' }} />
          DR MAGFIELD
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="#book" className="pwa-nav-cta">BOOK NOW</a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#182232', padding: 4 }}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 57, left: 0, right: 0, zIndex: 99,
          background: 'rgba(249,247,242,0.97)', backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(201,169,110,0.2)',
          padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 4
        }}>
          {[['#book','Book a Session'],['#technology','Technology'],['#benefits','Benefits'],['#location','Location'],['#agent','AI Agent']].map(([href,label]) => (
            <a key={href} href={href} onClick={()=>setMenuOpen(false)} style={{padding:'12px 0',color:'#182232',fontFamily:'Manrope,sans-serif',fontWeight:600,fontSize:15,textDecoration:'none',borderBottom:'1px solid rgba(15,76,92,0.07)'}}>{label}</a>
          ))}
        </div>
      )}

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_IMG} alt="Kelab Rahman Putra Malaysia" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">Kelab Rahman Putra Malaysia</div>
          <h1 className="hero-title">
            Turn <em>Pain</em><br />into Pure Performance
          </h1>
          <p className="hero-sub">
            3-in-1 rotational magnetic therapy for golfers who want to play at their peak — no pills, no physio appointments.
          </p>
          <div className="hero-actions">
            <a href="#book" className="btn-primary">Book Your Recovery Session</a>
            <a href={WA_URL} target="_blank" rel="noopener" className="btn-whatsapp">
              <MessageCircle size={18} strokeWidth={2} /> WhatsApp Arie
            </a>
          </div>
          <p className="hero-contact">+6012-659 5319 · Kelab Rahman Putra Malaysia (KRPM)</p>
        </div>
      </section>

      {/* ── PAIN POINTS ─────────────────────────────────────── */}
      <section className="pain-section">
        <span className="section-label">For Golfers Who Want to Play at Their Best</span>
        <div className="pain-grid">
          {[
            { Icon: Flag, title: 'Swing Pain', desc: 'Lower back, elbow, shoulder tension killing your game' },
            { Icon: Activity, title: 'Slow Recovery', desc: 'Muscles stay tight overnight between rounds' },
            { Icon: Heart, title: 'Pills Don\'t Fix It', desc: 'Painkillers mask the problem, never fix the root cause' },
            { Icon: Clock, title: 'Time Poor', desc: 'No time for physio during tournament season' },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="pain-card">
              <div className="pain-icon"><Icon size={26} strokeWidth={1.5} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECHNOLOGY ──────────────────────────────────────── */}
      <section className="tech-section" id="technology">
        <span className="section-label" style={{ color: '#C9A96E' }}>The Technology</span>
        <h2 className="section-heading" style={{ color: '#FFFFFF' }}>
          3-in-1 Rotational<br /><span className="gold">Magnetic Therapy</span>
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.75', maxWidth: 380 }}>
          Developed by Professor Wang Shijie. Not PEMF — rotating magnetic fields deeply penetrate and regenerate tissue at the cellular level.
        </p>
        <div className="tech-pillars">
          {[
            { num: '01', title: 'Heat Therapy', color: '#C9A96E', desc: 'Deep penetrating warmth. The magnetic field itself generates therapeutic warmth — no external heat source needed.' },
            { num: '02', title: 'Magnetic Vortex', color: '#E8856C', desc: 'Rotating fields create a vortex that penetrates deep into spinal tissue and joints, breaking up calcification.' },
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
        <span className="section-label">Not PEMF — We&apos;re Different</span>
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
              ['Heat', '✓ Integrated', '✗ External source needed'],
              ['Best for', 'Athletes, golfers, performance', 'Clinical rehabilitation'],
              ['Treatment', '30–45 min per session', '15–30 min per session'],
            ].map(([factor, mag, pemf]) => (
              <tr key={factor}>
                <td>{factor}</td>
                <td style={{ color: '#0F4C5C', fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: mag }} />
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
            { value: '6–8mi', label: 'Walking/18 Holes', sub: 'Hip, knee & ankle cumulative load' },
            { value: '45min', label: 'Optimal Session', sub: 'MAGfield 3-in-1 integrated therapy' },
            { value: '2–3×', label: 'Weekly', sub: 'Post-round for peak tournament performance' },
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
      <section className="benefits-section" id="benefits">
        <span className="section-label">Why DR MAGfield Works</span>
        <h2 className="section-heading">What Golfers Experience</h2>
        <div className="benefits-grid">
          {[
            { title: 'Same-Day Pain Relief', desc: 'Most clients feel measurable reduction in back/shoulder pain after a single 30-minute session.' },
            { title: 'Improved Swing Flexibility', desc: 'Loosened hip rotators + relaxed lower back = smoother swing arc and more yards off the tee.' },
            { title: 'Faster Tournament Recovery', desc: 'Post-tournament sessions flush lactic acid — play again sooner at peak form.' },
            { title: 'Non-Invasive, No Downtime', desc: 'Lie on the bed fully clothed. No gels, no needles. Back to your day immediately.' },
            { title: 'Better Sleep After', desc: 'DR MAGfield promotes parasympathetic response — deeper, more restorative sleep.' },
            { title: 'Chronic Pain Protocol', desc: 'Regular sessions show cumulative benefits for herniated discs, rotator cuff, hip osteoarthritis.' },
          ].map((b) => (
            <div key={b.title} className="benefit-card">
              <div className="benefit-check"><Check size={14} strokeWidth={2.5} /></div>
              <div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ───────────────────────────────── */}
      <section style={{ padding: '64px 20px', background: '#F9F7F2' }}>
        <h2 className="section-heading" style={{ textAlign: 'center' }}>Elite Instrumentation</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {/* Qi Master — correct photo from Keith's archive */}
          <div>
            <div style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', aspectRatio: '4/5', marginBottom: 20 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={QI_MASTER_IMG} alt="Qi Master Therapy Bed" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%) rotate(90deg)', transformOrigin: 'right center', background: '#182232', color: '#C9A96E', padding: '8px 20px', fontFamily: 'Montserrat, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em' }}>
                QI MASTER
              </div>
            </div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 28, fontWeight: 600, color: '#182232', marginBottom: 8 }}>Full-Size Therapy Bed</h3>
            <p style={{ fontSize: 14, color: '#45474C', lineHeight: 1.7 }}>
              The ultimate recovery sanctuary. A full-immersion experience using high-intensity rotational magnetic fields to reset your entire physiology.
            </p>
          </div>
          {/* Qi Mini — correct visual from Keith's archive */}
          <div>
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', aspectRatio: '4/3', marginBottom: 20 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={QI_MINI_IMG} alt="Qi Mini Portable" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 28, fontWeight: 600, color: '#182232', marginBottom: 8 }}>Qi Mini Portable</h3>
            <p style={{ fontSize: 14, color: '#45474C', lineHeight: 1.7 }}>
              Precision performance, anywhere. The portable powerhouse for targeted therapy on specific muscle groups and joints.
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCATION ───────────────────────────────────────── */}
      <section className="location-section" id="location">
        <span className="section-label">Visit Us</span>
        <h2 className="section-heading">KRPM Experience Lounge</h2>
        <div style={{ borderRadius: '1rem', overflow: 'hidden', aspectRatio: '16/9', marginBottom: 20 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3!2d101.55!3d3.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b9d0d0d0d0d%3A0x0!2sKelab%20Rahman%20Putra%20Malaysia!5e0!3m2!1sen!2smy!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KRPM Location"
          />
        </div>
        <div className="loc-card" style={{ marginTop: 0 }}>
          {[
            { Icon: MapPin, strong: 'Kelab Rahman Putra Malaysia (KRPM)', div: 'Sungai Buloh, Selangon, Malaysia' },
            { Icon: Phone, strong: '+6012-659 5319', div: 'Arie Ong (Experience Coordinator)' },
            { Icon: Clock, strong: 'By Appointment', div: 'Members & Guests of KRPM' },
          ].map(({ Icon, strong, div }) => (
            <div key={strong} className="loc-item">
              <span className="loc-icon"><Icon size={20} strokeWidth={1.5} /></span>
              <div>
                <strong>{strong}</strong>
                <div>{div}</div>
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
            <a href={WA_URL} target="_blank" rel="noopener" className="book-option whatsapp">
              <span className="book-icon"><MessageCircle size={22} strokeWidth={1.5} /></span>
              <div>
                <strong>WhatsApp Arie</strong>
                <span>+6012-659 5319</span>
              </div>
              <ChevronRight size={18} style={{ marginLeft: 'auto', color: '#2E7D32', flexShrink: 0 }} />
            </a>
            <a href="tel:+60126595319" className="book-option phone">
              <span className="book-icon"><Phone size={22} strokeWidth={1.5} /></span>
              <div>
                <strong>Call Directly</strong>
                <span>+6012-659 5319</span>
              </div>
              <ChevronRight size={18} style={{ marginLeft: 'auto', color: '#666', flexShrink: 0 }} />
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
        <span className="section-label" style={{ color: '#C9A96E' }}>AI Recovery Agent</span>
        <h2>Your Personal<br /><span className="gold">Recovery Guide</span></h2>
        <p className="agent-desc">
          Chat with @DrMAGfield_Bot — get personalised recovery protocols and instant answers about rotational magnetic therapy. Available 24/7.
        </p>
        <div className="scr-steps">
          {[
            { Icon: QrCode, step: 'SCAN', desc: 'Scan the QR code with your phone camera to open @DrMAGfield_Bot' },
            { Icon: MessageCircle, step: 'CHAT', desc: 'Tell the agent your golf pain points — lower back, elbow, or recovery pace' },
            { Icon: Flag, step: 'RECOVER', desc: 'Get a personalised protocol and book your KRPM session with Arie instantly' },
          ].map(({ Icon, step, desc }) => (
            <div key={step} className="scr-step">
              <div className="scr-icon"><Icon size={24} strokeWidth={1.5} /></div>
              <div>
                <strong>{step}</strong>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="https://t.me/DrMAGfield_Bot" target="_blank" rel="noopener" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          <Send size={18} strokeWidth={2} /> Open @DrMAGfield_Bot
        </a>
        <div className="qr-card">
          {telegramQr ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={telegramQr} alt="Telegram QR Code" />
          ) : (
            <div style={{ width: 180, height: 180, background: 'rgba(255,255,255,0.08)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <QrCode size={48} strokeWidth={1} style={{ color: 'rgba(255,255,255,0.4)' }} />
            </div>
          )}
          <span className="qr-handle">@DrMAGfield_Bot</span>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-brand">
          <img src={LOGO_URL} alt="DR MAGfield" style={{ width: 26, height: 26, objectFit: 'contain' }} />
          DR MAGFIELD
        </div>
        <p className="footer-tagline">Turn Pain into Pure Performance</p>
        <p className="footer-copy">© 2026 DR MAGfield. Kelab Rahman Putra Malaysia (KRPM).</p>
        <p className="footer-hashtags">#DRMAGfield #GolfersHealth #PainAndPerformance #MagneticVortex #KRPM #SungaiBuloh</p>
      </footer>

      {/* ── STICKY BOTTOM NAV ─────────────────────────────── */}
      <nav className="bottom-nav">
        <a href="#" className="active">
          <HomeIcon size={22} strokeWidth={1.5} />
          <span>Home</span>
        </a>
        <a href="#technology">
          <Dumbbell size={22} strokeWidth={1.5} />
          <span>Qi Master</span>
        </a>
        <a href={WA_URL} target="_blank" rel="noopener">
          <Zap size={22} strokeWidth={1.5} />
          <span>Qi Mini</span>
        </a>
        <a href="#location">
          <Flag size={22} strokeWidth={1.5} />
          <span>KRPM</span>
        </a>
        <a href="#book">
          <Calendar size={22} strokeWidth={1.5} />
          <span>Book</span>
        </a>
      </nav>
    </div>
  )
}
