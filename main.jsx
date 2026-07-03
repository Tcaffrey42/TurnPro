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
      <div className="logo-mark v2">
        <svg viewBox="0 0 96 96" role="img" aria-label="TurnPro TP logo">
          <defs>
            <linearGradient id="tpGradient" x1="10" y1="8" x2="86" y2="88" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff4a4a" />
              <stop offset="0.48" stopColor="#e50919" />
              <stop offset="1" stopColor="#65020a" />
            </linearGradient>
            <linearGradient id="slashGradient" x1="20" y1="12" x2="76" y2="84" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#ffd1d5" />
            </linearGradient>
          </defs>
          <rect x="6" y="6" width="84" height="84" rx="24" fill="#07080b" stroke="rgba(255,255,255,.18)" strokeWidth="2" />
          <path d="M18 26C18 20 22 16 28 16H78L68 26H18Z" fill="url(#tpGradient)" />
          <path d="M18 26H47V78H34V38H18V26Z" fill="url(#slashGradient)" />
          <path d="M53 26H68C78 26 84 32 84 41C84 51 77 57 67 57H53V78H40V26H53ZM53 38V46H66C69 46 71 44 71 42C71 39 69 38 66 38H53Z" fill="url(#slashGradient)" />
          <path d="M18 80L80 18" stroke="#ef1f2d" strokeWidth="5" strokeLinecap="round" opacity=".65" />
        </svg>
      </div>
      <div className="brand-text">
        <span className="brand-name">TurnPro</span>
        <span className="brand-tag">Every Vacant Day Is Lost Revenue</span>
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
            <div className="eyebrow"><Zap size={16} /> RUN 4 LIVE • Built for multifamily operators</div>
            <h1>Turn Empty Apartments Into More Revenue</h1>
            <p className="hero-lede">
              Every vacant day is a lost revenue day. TurnPro gets move-outs painted, cleaned, closed out, and rent-ready ASAP so operators lose fewer revenue days and property teams deal with fewer headaches.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="mailto:hello@turnpro.ai?subject=Cut%20Vacancy%20Days">
                Cut Vacancy Days <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="#system">See The System</a>
            </div>
            <div className="proof-strip" aria-label="TurnPro operating promises">
              <span><CheckCircle2 size={16} /> Turned ASAP</span>
              <span><CheckCircle2 size={16} /> Fewer vacant days</span>
              <span><CheckCircle2 size={16} /> No vendor noise</span>
              <span><CheckCircle2 size={16} /> Clean billing</span>
            </div>
          </div>

          <div className="command-card" aria-label="TurnPro vacancy command card">
            <div className="card-header">
              <span>RUN 4 Turn Pipeline</span>
              <strong>Move-Out → Revenue Back On</strong>
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
          Property managers want units turned ASAP because every extra vacant day is lost rent. They want no complaints from our work, seamless billing, quiet in-and-out vendors, and a turn partner that earns more work by making their ecosystem easier to run.
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
          <p>TurnPro gives multifamily teams a faster, quieter, cleaner way to turn empty apartments back into rent-producing homes.</p>
        </div>
        <a className="primary-button" href="mailto:hello@turnpro.ai?subject=TurnPro%20Revenue%20Days">
          Build My Turn Plan <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
