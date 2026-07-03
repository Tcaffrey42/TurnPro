import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BellOff,
  Building2,
  CheckCircle2,
  Clock3,
  DollarSign,
  FileCheck2,
  Paintbrush,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap
} from 'lucide-react';
import './styles.css';

function TurnProLogo() {
  return (
    <div className="brand-lockup" aria-label="TurnPro logo">
      <div className="logo-mark">
        <svg viewBox="0 0 88 88" role="img" aria-label="TurnPro TP logo">
          <defs>
            <linearGradient id="tpGradient" x1="8" y1="8" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff2b2b" />
              <stop offset="0.5" stopColor="#d80d16" />
              <stop offset="1" stopColor="#7a0710" />
            </linearGradient>
            <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feColorMatrix in="blur" type="matrix" values="1 0 0 0 1  0 0 0 0 0.06  0 0 0 0 0.08  0 0 0 .55 0" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect x="5" y="5" width="78" height="78" rx="21" fill="url(#tpGradient)" filter="url(#softGlow)" />
          <path d="M22 24H64" stroke="white" strokeWidth="7" strokeLinecap="round" />
          <path d="M33 24V64" stroke="white" strokeWidth="7" strokeLinecap="round" />
          <path d="M45 64V24H56C64 24 69 29 69 36C69 44 63 49 55 49H45" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M21 69H68" stroke="white" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="brand-text">
        <span className="brand-name">TurnPro</span>
        <span className="brand-tag">Vacancy Days Become Revenue Days</span>
      </div>
    </div>
  );
}

function StatCard({ value, label, icon: Icon }) {
  return (
    <article className="stat-card">
      <div className="stat-icon"><Icon size={20} /></div>
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </article>
  );
}

function PainCard({ icon: Icon, title, copy }) {
  return (
    <article className="pain-card">
      <div className="pain-icon"><Icon size={22} /></div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  );
}

function WorkflowStep({ number, title, copy, icon: Icon }) {
  return (
    <article className="workflow-step">
      <div className="step-topline">
        <span>{number}</span>
        <Icon size={22} />
      </div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  );
}

function App() {
  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="bg-grid" />
        <div className="glow glow-one" />
        <div className="glow glow-two" />

        <nav className="top-nav">
          <TurnProLogo />
          <a className="nav-cta" href="mailto:hello@turnpro.ai?subject=TurnPro%20Apartment%20Turns">
            Talk Turns <ArrowRight size={17} />
          </a>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <div className="eyebrow"><Zap size={16} /> Built for multifamily operators</div>
            <h1>Turn Empty Apartments Into More Revenue</h1>
            <p className="hero-lede">
              Every vacant day is a lost revenue day. TurnPro helps property teams get units rent-ready faster with less vendor noise, fewer complaints, clean billing, and zero babysitting.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="mailto:hello@turnpro.ai?subject=Cut%20Vacancy%20Days">
                Cut Vacancy Days <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="#system">See The System</a>
            </div>
            <div className="proof-strip" aria-label="TurnPro operating promises">
              <span><CheckCircle2 size={16} /> In fast</span>
              <span><CheckCircle2 size={16} /> Out quiet</span>
              <span><CheckCircle2 size={16} /> Billed clean</span>
              <span><CheckCircle2 size={16} /> Rent-ready faster</span>
            </div>
          </div>

          <div className="command-card" aria-label="TurnPro vacancy command card">
            <div className="card-header">
              <span>Live Turn Pipeline</span>
              <strong>Vacant → Rent-Ready</strong>
            </div>
            <div className="unit-card hot">
              <div>
                <span className="unit-label">Unit 4B</span>
                <strong>Paint + clean scheduled</strong>
              </div>
              <span className="status-pill">Today</span>
            </div>
            <div className="unit-card">
              <div>
                <span className="unit-label">Unit 12A</span>
                <strong>Final walkthrough queued</strong>
              </div>
              <span className="status-pill soft">Ready</span>
            </div>
            <div className="unit-card">
              <div>
                <span className="unit-label">Unit 7C</span>
                <strong>Invoice matched to turn</strong>
              </div>
              <span className="status-pill soft">Clean</span>
            </div>
            <div className="revenue-meter">
              <div className="meter-copy">
                <span>Revenue drag reduced</span>
                <strong>Vacancy days protected</strong>
              </div>
              <div className="meter-track"><span /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section" aria-label="TurnPro value pillars">
        <StatCard value="ASAP" label="move-out to make-ready coordination" icon={Clock3} />
        <StatCard value="Zero" label="vendor babysitting for property teams" icon={BellOff} />
        <StatCard value="Clean" label="billing, updates, and closeout flow" icon={ReceiptText} />
      </section>

      <section className="message-section">
        <div className="section-kicker">What operators actually want</div>
        <h2>Not another vendor. A quiet turn engine.</h2>
        <p>
          Property managers want units turned ASAP, no complaints from our work, seamless billing, and vendors who get in, get out, and grow inside their ecosystem because they make life easier.
        </p>
        <div className="pain-grid">
          <PainCard
            icon={DollarSign}
            title="Fewer lost revenue days"
            copy="Vacancy kills NOI. TurnPro is built around reducing the time between move-out and rent-ready."
          />
          <PainCard
            icon={ShieldCheck}
            title="Fewer headaches"
            copy="Clear scheduling, professional field teams, clean communication, and less property-team chasing."
          />
          <PainCard
            icon={FileCheck2}
            title="Cleaner billing"
            copy="Turn work is organized, trackable, and easier to reconcile without invoice confusion or mystery charges."
          />
        </div>
      </section>

      <section className="workflow-section" id="system">
        <div className="section-kicker">Move-out to money-back-on</div>
        <h2>The TurnPro flow</h2>
        <div className="workflow-grid">
          <WorkflowStep
            number="01"
            icon={Building2}
            title="Move-out hits"
            copy="The vacant unit enters the turn pipeline and gets scheduled before days start slipping."
          />
          <WorkflowStep
            number="02"
            icon={Paintbrush}
            title="Paint, clean, repair"
            copy="Vendors coordinate the make-ready scope quickly, quietly, and professionally."
          />
          <WorkflowStep
            number="03"
            icon={Wrench}
            title="Closeout stays clean"
            copy="Updates, proof, billing, and completion status stay organized so teams are not chasing answers."
          />
          <WorkflowStep
            number="04"
            icon={Sparkles}
            title="Rent-ready faster"
            copy="The unit gets back on the market faster so empty space starts producing again."
          />
        </div>
      </section>

      <section className="closing-section">
        <div>
          <span className="section-kicker">TurnPro</span>
          <h2>Every vacant day is a lost revenue day.</h2>
          <p>TurnPro gives multifamily teams a faster, quieter, cleaner way to turn empty apartments into rent-ready revenue.</p>
        </div>
        <a className="primary-button" href="mailto:hello@turnpro.ai?subject=TurnPro%20Revenue%20Days">
          Build My Turn Plan <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
