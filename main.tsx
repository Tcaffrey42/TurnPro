import React from 'react';
import { createRoot } from 'react-dom/client';
import { Building2, CalendarClock, CheckCircle2, Clock3, FileText, Gauge, Home, MapPin, MessageSquareText, Settings, ShieldAlert, Sparkles, Truck, Users, Wrench, TrendingUp, Camera, ClipboardList } from 'lucide-react';
import './style.css';

const turns = [
  { unit: 'Apt 204', property: 'Harbor View', service: 'Paint + clean', vendor: 'Elite Turn Crew', status: 'In Progress', due: 'Today 3:00 PM', risk: 'On Track' },
  { unit: 'Apt 118', property: 'Oak Ridge', service: 'Deep clean', vendor: 'CleanCo Pro', status: 'Vendor Assigned', due: 'Today 5:00 PM', risk: 'Watch' },
  { unit: 'Apt 411', property: 'Metro Lofts', service: 'Punch list', vendor: 'NorthStar', status: 'Needs Photos', due: 'Tomorrow', risk: 'At Risk' },
  { unit: 'Apt 32B', property: 'Pine Court', service: 'Paint', vendor: 'Prime Paint', status: 'Scheduled', due: 'Jul 6', risk: 'On Track' },
];

const vendors = [
  { name: 'Elite Turn Crew', score: 98, jobs: 42 },
  { name: 'CleanCo Pro', score: 96, jobs: 37 },
  { name: 'Prime Paint', score: 93, jobs: 28 },
  { name: 'NorthStar Repairs', score: 88, jobs: 19 },
];

const nav = [
  ['Dashboard', Home], ['Properties', Building2], ['Turns', CalendarClock], ['Vendors', Users], ['Work Orders', ClipboardList], ['Scheduling', Clock3], ['Photos', Camera], ['Analytics', TrendingUp], ['AI Copilot', Sparkles], ['Settings', Settings]
];

function StatusPill({ value }: { value: string }) {
  const cls = value === 'At Risk' ? 'danger' : value === 'Watch' ? 'warn' : 'good';
  return <span className={`pill ${cls}`}>{value}</span>;
}

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand"><div className="logo">TP</div><div><b>TurnPro</b><span>Command Center</span></div></div>
        <nav>{nav.map(([label, Icon]: any) => <a className={label === 'Dashboard' ? 'active' : ''} key={label}><Icon size={18}/>{label}</a>)}</nav>
        <div className="side-card"><Sparkles size={18}/><b>AI Turn Watch</b><p>12 turns scanned. 3 need attention before SLA impact.</p></div>
      </aside>
      <main className="main">
        <header className="topbar"><div><p className="eyebrow">National Apartment Turn Platform</p><h1>Executive Dashboard</h1></div><div className="user"><span>Live Portfolio</span><b>Tim Caffrey</b></div></header>
        <section className="hero">
          <div><h2>Run every apartment turn from one command center.</h2><p>Painting, cleaning, punch work, vendor coordination, photos, SLA tracking, and executive visibility in one operating layer.</p></div>
          <button>+ New Turn</button>
        </section>
        <section className="kpis">
          <div className="card"><Gauge/><span>Active Turns</span><b>184</b><small>+21 this week</small></div>
          <div className="card"><CalendarClock/><span>Due Today</span><b>37</b><small>14 already complete</small></div>
          <div className="card"><ShieldAlert/><span>At Risk</span><b>9</b><small>AI flagged</small></div>
          <div className="card"><CheckCircle2/><span>SLA Health</span><b>96%</b><small>Portfolio average</small></div>
        </section>
        <section className="grid">
          <div className="panel wide"><div className="panel-head"><h3>Turn Queue</h3><span>Live priority board</span></div><table><thead><tr><th>Unit</th><th>Property</th><th>Scope</th><th>Vendor</th><th>Status</th><th>Due</th><th>Risk</th></tr></thead><tbody>{turns.map(t => <tr key={t.unit}><td>{t.unit}</td><td>{t.property}</td><td>{t.service}</td><td>{t.vendor}</td><td>{t.status}</td><td>{t.due}</td><td><StatusPill value={t.risk}/></td></tr>)}</tbody></table></div>
          <div className="panel ai"><div className="panel-head"><h3>AI Command Center</h3><Sparkles size={19}/></div><div className="insight"><b>Action Needed</b><p>NorthStar has 2 turns trending late. Recommend adding backup crew for Metro Lofts.</p></div><div className="insight"><b>Forecast</b><p>Friday move-ins create a 19-turn spike. Pre-stage cleaners by Thursday 10 AM.</p></div><div className="insight"><b>Cost Control</b><p>Paint labor is running 8% under last month across comparable units.</p></div></div>
          <div className="panel map"><div className="panel-head"><h3>National Activity</h3><MapPin size={18}/></div><div className="mapbox"><span className="pin p1"></span><span className="pin p2"></span><span className="pin p3"></span><span className="pin p4"></span><b>Portfolio Heat Map</b><p>184 active turns across 42 properties</p></div></div>
          <div className="panel"><div className="panel-head"><h3>Vendor Performance</h3><Truck size={18}/></div>{vendors.map(v => <div className="vendor" key={v.name}><div><b>{v.name}</b><span>{v.jobs} jobs</span></div><strong>{v.score}%</strong><div className="bar"><i style={{width: `${v.score}%`}} /></div></div>)}</div>
          <div className="panel activity"><div className="panel-head"><h3>Recent Activity</h3><FileText size={18}/></div><p><CheckCircle2/> Apt 512 completed and photo verified</p><p><MessageSquareText/> Vendor update received for Harbor View</p><p><Wrench/> Punch item opened at Metro Lofts</p><p><Camera/> 18 completion photos uploaded</p></div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
