import React from 'react';
import { createRoot } from 'react-dom/client';
import { AlertTriangle, CheckCircle2, Clock, MapPin, Users, Wrench, Building2, TrendingUp } from 'lucide-react';
import './style.css';

const turns = [
  { unit: 'Apt 12B', property: 'Harbor Point', status: 'Ready for QC', sla: '4h left', vendor: 'Prime Paint' },
  { unit: 'Apt 4F', property: 'Maple Ridge', status: 'Cleaning', sla: 'On Track', vendor: 'CleanPro' },
  { unit: 'Apt 18C', property: 'Oak Commons', status: 'Paint Delay', sla: 'At Risk', vendor: 'Elite Turns' },
  { unit: 'Apt 7A', property: 'Westbrook', status: 'Scheduled', sla: 'Tomorrow', vendor: 'North Crew' },
];

function App() {
  return (
    <main className="shell">
      <section className="hero">
        <div>
          <p className="eyebrow">TurnPro Phase 1</p>
          <h1>Apartment Turn Command Center</h1>
          <p className="sub">Painting, cleaning, vendor dispatch, SLA tracking, and portfolio visibility in one dashboard.</p>
        </div>
        <div className="badge">Live Build</div>
      </section>

      <section className="cards">
        <Card icon={<Building2 />} label="Active Turns" value="42" />
        <Card icon={<Clock />} label="Avg Turn Time" value="3.8 Days" />
        <Card icon={<CheckCircle2 />} label="Ready Units" value="18" />
        <Card icon={<AlertTriangle />} label="At Risk" value="5" />
      </section>

      <section className="grid">
        <div className="panel wide">
          <div className="panelHead"><h2>Turn Board</h2><span>Today</span></div>
          <table>
            <thead><tr><th>Unit</th><th>Property</th><th>Status</th><th>SLA</th><th>Vendor</th></tr></thead>
            <tbody>{turns.map((t) => <tr key={t.unit}><td>{t.unit}</td><td>{t.property}</td><td><span className="pill">{t.status}</span></td><td>{t.sla}</td><td>{t.vendor}</td></tr>)}</tbody>
          </table>
        </div>
        <div className="panel">
          <div className="panelHead"><h2>Vendor Pulse</h2><Users /></div>
          <p className="big">91%</p><p>On-time completion across active cleaning and painting crews.</p>
        </div>
        <div className="panel">
          <div className="panelHead"><h2>Work Mix</h2><Wrench /></div>
          <ul><li>Paint: 19</li><li>Clean: 15</li><li>Repairs: 8</li><li>QC: 6</li></ul>
        </div>
        <div className="panel wide map">
          <div className="panelHead"><h2>Portfolio View</h2><MapPin /></div>
          <div className="mapBox"><span>North Region</span><span>Midwest</span><span>Southeast</span><span>West</span></div>
        </div>
        <div className="panel">
          <div className="panelHead"><h2>Executive Impact</h2><TrendingUp /></div>
          <p className="big">$128K</p><p>Estimated vacancy loss prevented this month.</p>
        </div>
      </section>
    </main>
  );
}

function Card({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="card"><div>{icon}</div><p>{label}</p><h3>{value}</h3></div>;
}

createRoot(document.getElementById('root')!).render(<App />);
