import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Building2, RefreshCw, Users, Wrench, CalendarDays, Camera, BarChart3, Bot,
  Settings, Search, Bell, Plus, ChevronRight, CheckCircle2, AlertTriangle,
  Clock, MapPin, ClipboardList
} from 'lucide-react';
import './styles.css';

const nav = [
  ['dashboard', 'Dashboard', Building2],
  ['properties', 'Properties', Building2],
  ['turns', 'Turns', RefreshCw],
  ['vendors', 'Vendors', Users],
  ['workorders', 'Work Orders', Wrench],
  ['scheduling', 'Scheduling', CalendarDays],
  ['photos', 'Photos', Camera],
  ['analytics', 'Analytics', BarChart3],
  ['ai', 'AI Copilot', Bot],
  ['settings', 'Settings', Settings],
];

const turns = [
  { unit: 'Apt 204', property: 'Harbor Point', task: 'Paint + Clean', status: 'In Progress', vendor: 'Elite Paint', due: 'Today 4:00 PM', risk: 'On Track' },
  { unit: 'Apt 118', property: 'Maple Commons', task: 'Final Clean', status: 'Late', vendor: 'CleanCo', due: 'Yesterday', risk: 'At Risk' },
  { unit: 'Apt 411', property: 'Station Lofts', task: 'Punch List', status: 'Scheduled', vendor: 'Prime Turns', due: 'Tomorrow', risk: 'Watch' },
  { unit: 'Apt 302', property: 'Bayview Flats', task: 'Floor Repair', status: 'Blocked', vendor: 'FloorPro', due: 'Friday', risk: 'Escalate' },
];

const properties = [
  { name: 'Harbor Point', units: 312, active: 18, late: 2, city: 'Tampa, FL' },
  { name: 'Maple Commons', units: 224, active: 11, late: 1, city: 'Charlotte, NC' },
  { name: 'Station Lofts', units: 188, active: 9, late: 0, city: 'Austin, TX' },
  { name: 'Bayview Flats', units: 420, active: 26, late: 4, city: 'Phoenix, AZ' },
];

const vendors = [
  { name: 'Elite Paint', trade: 'Painting', score: 98, open: 14 },
  { name: 'CleanCo', trade: 'Cleaning', score: 94, open: 22 },
  { name: 'Prime Turns', trade: 'Full Turn', score: 91, open: 19 },
  { name: 'FloorPro', trade: 'Flooring', score: 86, open: 8 },
];

function App() {
  const [page, setPage] = useState('dashboard');
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState('');
  const title = nav.find((n) => n[0] === page)?.[1] || 'Dashboard';

  function act(message) {
    setToast(message);
    window.setTimeout(() => setToast(''), 2200);
  }

  return (
    <div className="app">
      <aside>
        <div className="brand">
          <div className="logo">TP</div>
          <div><b>TurnPro</b><span>Apartment Turn Command</span></div>
        </div>
        <nav>
          {nav.map(([id, label, Icon]) => (
            <button key={id} onClick={() => setPage(id)} className={page === id ? 'active' : ''}>
              <Icon size={18} />{label}
            </button>
          ))}
        </nav>
        <div className="sidecard">
          <b>System Status</b>
          <p>All dashboards live</p>
          <small>Sprint 1 working prototype</small>
        </div>
      </aside>

      <main>
        <header>
          <div>
            <h1>{title}</h1>
            <p>National apartment turn operations command center.</p>
          </div>
          <div className="topActions">
            <div className="search">
              <Search size={16} />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search turns, vendors, properties..." />
            </div>
            <button className="icon" onClick={() => act('Notifications opened')}><Bell size={18} /></button>
            <button className="primary" onClick={() => act(`New ${title.replace(/s$/, '') || 'item'} action started`)}><Plus size={17} />New</button>
          </div>
        </header>
        {toast && <div className="toast">{toast}</div>}
        <View page={page} query={query} act={act} />
      </main>
    </div>
  );
}

function View({ page, query, act }) {
  if (page === 'dashboard') return <Dashboard act={act} />;
  if (page === 'properties') return <Properties />;
  if (page === 'turns') return <Turns query={query} act={act} />;
  if (page === 'vendors') return <Vendors />;
  if (page === 'workorders') return <WorkOrders act={act} />;
  if (page === 'scheduling') return <Scheduling />;
  if (page === 'photos') return <Photos />;
  if (page === 'analytics') return <Analytics />;
  if (page === 'ai') return <AI act={act} />;
  return <SettingsPage act={act} />;
}

function KPIs() {
  return (
    <div className="kpis">
      {[
        ['Active Turns', '64', '+12 today'],
        ['Due Today', '17', '5 need photos'],
        ['Late', '7', '3 escalated'],
        ['SLA', '94%', 'portfolio avg'],
        ['Vendors', '38', 'active crews'],
      ].map((k) => <div className="card kpi" key={k[0]}><span>{k[0]}</span><b>{k[1]}</b><small>{k[2]}</small></div>)}
    </div>
  );
}

function Dashboard({ act }) {
  return (
    <>
      <KPIs />
      <div className="grid two">
        <section className="card">
          <div className="cardHead"><h2>Turn Queue</h2><button onClick={() => act('Turn queue filtered to high priority')}>Filter Priority</button></div>
          <TurnTable rows={turns} />
        </section>
        <section className="card orange">
          <h2>AI Command Center</h2>
          <Insight icon={<AlertTriangle />} title="12 turns at risk" text="Recommend adding one cleaning crew in Tampa and Phoenix." />
          <Insight icon={<Clock />} title="3 vendor deadlines overdue" text="CleanCo and FloorPro need escalation before 3 PM." />
          <Insight icon={<CheckCircle2 />} title="SLA holding at 94%" text="Painting performance is carrying the portfolio this week." />
          <button className="primary wide" onClick={() => act('AI summary generated')}>Generate Executive Summary</button>
        </section>
      </div>
      <div className="grid two"><Activity /><VendorBoard /></div>
    </>
  );
}

function TurnTable({ rows }) {
  return (
    <table>
      <thead><tr><th>Unit</th><th>Property</th><th>Scope</th><th>Status</th><th>Vendor</th><th>Due</th><th>Risk</th></tr></thead>
      <tbody>
        {rows.map((t) => (
          <tr key={t.unit}>
            <td><b>{t.unit}</b></td><td>{t.property}</td><td>{t.task}</td>
            <td><span className={`pill ${t.status.toLowerCase().replaceAll(' ', '')}`}>{t.status}</span></td>
            <td>{t.vendor}</td><td>{t.due}</td><td>{t.risk}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Properties() {
  return <div className="grid cards">{properties.map((p) => <div className="card prop" key={p.name}><MapPin /><h2>{p.name}</h2><p>{p.city}</p><div className="metrics"><span>{p.units}<small>Units</small></span><span>{p.active}<small>Active</small></span><span className={p.late ? 'danger' : ''}>{p.late}<small>Late</small></span></div><button>Open Property <ChevronRight size={15} /></button></div>)}</div>;
}

function Turns({ query, act }) {
  const list = turns.filter((t) => JSON.stringify(t).toLowerCase().includes(query.toLowerCase()));
  return <section className="card"><div className="cardHead"><h2>All Turns</h2><button onClick={() => act('Bulk vendor update sent')}>Bulk Update Vendors</button></div>{list.length ? <TurnTable rows={list} /> : <p>No turns match your search.</p>}</section>;
}

function Vendors() {
  return <><VendorBoard /><div className="grid cards">{vendors.map((v) => <div className="card" key={v.name}><h2>{v.name}</h2><p>{v.trade}</p><div className="score"><span style={{ width: `${v.score}%` }} /></div><b>{v.score}% Score</b><small>{v.open} open assignments</small></div>)}</div></>;
}

function WorkOrders({ act }) {
  return <section className="card"><h2>Work Orders</h2>{['WO-1048 Paint touchups Apt 204', 'WO-1049 Clean final Apt 118', 'WO-1050 Replace blinds Apt 411', 'WO-1051 Floor repair Apt 302'].map((w) => <div className="row" key={w}><ClipboardList /><span>{w}</span><button onClick={() => act(`${w.split(' ')[0]} opened`)}>Open</button></div>)}</section>;
}

function Scheduling() {
  return <div className="grid three">{['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Weekend'].map((d, i) => <div className="card" key={d}><h2>{d}</h2><p>{8 + i * 2} scheduled turns</p><small>{i % 2 ? 'Cleaning crews heavy' : 'Painting crews heavy'}</small></div>)}</div>;
}

function Photos() {
  return <div className="grid cards">{['Before Paint', 'After Clean', 'Punch Item', 'Final Approval', 'Floor Damage', 'Ready Unit'].map((x) => <div className="photo card" key={x}><div /><b>{x}</b><small>Uploaded today</small></div>)}</div>;
}

function Analytics() {
  return <><KPIs /><section className="card"><h2>Executive Analytics</h2><div className="bars">{[['On-Time Completion', 94], ['Vendor Response', 88], ['Photo Compliance', 91], ['Average Turn Speed', 82], ['Cost Control', 89]].map((b) => <label key={b[0]}>{b[0]}<span>{b[1]}%</span><i><em style={{ width: `${b[1]}%` }} /></i></label>)}</div></section></>;
}

function AI({ act }) {
  const prompts = ['Which turns are at risk today?', 'Summarize vendor performance', 'Where do we need more crews?', 'Create executive weekly recap'];
  return <section className="card ai"><h2>AI Copilot</h2><p>Ask TurnPro what is happening across the portfolio.</p>{prompts.map((p) => <button key={p} onClick={() => act(`AI running: ${p}`)}>{p}</button>)}<div className="answer"><b>Sample AI Output</b><p>There are 7 late turns, primarily driven by cleaning delays in Tampa and Phoenix. Recommend dispatching one additional cleaning crew and escalating FloorPro for Apt 302.</p></div></section>;
}

function SettingsPage({ act }) {
  return <section className="card"><h2>Settings</h2>{['Company Profile', 'User Roles', 'Notification Rules', 'SLA Targets', 'Vendor Permissions'].map((s) => <div className="row" key={s}><Settings /><span>{s}</span><button onClick={() => act(`${s} opened`)}>Edit</button></div>)}</section>;
}

function Activity() {
  return <section className="card"><h2>Recent Activity</h2>{['Apt 204 photos uploaded', 'CleanCo marked Apt 118 delayed', 'Harbor Point turn completed', 'FloorPro requested approval', 'AI flagged 12 risk items'].map((a, i) => <div className="activity" key={a}><span>{i % 2 ? '⚠' : '✓'}</span>{a}</div>)}</section>;
}

function VendorBoard() {
  return <section className="card"><h2>Vendor Performance</h2>{vendors.map((v) => <div className="vendor" key={v.name}><span>{v.name}<small>{v.trade}</small></span><b>{v.score}%</b></div>)}</section>;
}

function Insight({ icon, title, text }) {
  return <div className="insight">{icon}<div><b>{title}</b><p>{text}</p></div></div>;
}

createRoot(document.getElementById('root')).render(<App />);
