const turns = [
  { unit: 'A-104', property: 'Harbor Point', status: 'Cleaning', due: 'Today 4:00 PM', vendor: 'NorthStar', risk: 'On Track' },
  { unit: 'B-221', property: 'Parkline', status: 'Paint', due: 'Tomorrow 10:00 AM', vendor: 'Prime Paint', risk: 'Watch' },
  { unit: 'C-018', property: 'Riverbend', status: 'Final QA', due: 'Today 2:30 PM', vendor: 'Turn Crew 7', risk: 'Ready' },
  { unit: 'D-332', property: 'The Grove', status: 'Vendor Delay', due: 'Past Due', vendor: 'Metro Clean', risk: 'Escalate' },
];

export default function Dashboard() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="logo">Turn<span>Pro</span></div>
        <nav>
          <a className="active">Dashboard</a>
          <a>Turns</a>
          <a>Vendors</a>
          <a>Properties</a>
          <a>Reports</a>
        </nav>
        <div className="sideCard">
          <strong>Phase 1</strong>
          <p>Core dashboard for apartment turns, painting, cleaning, SLA risk, and vendor visibility.</p>
        </div>
      </aside>

      <section className="content">
        <header className="hero">
          <div>
            <p className="eyebrow">TurnPro Command Dashboard</p>
            <h1>Apartment turns without the blind spots.</h1>
            <p className="copy">Track vacant units, vendors, paint, cleaning, punch lists, SLA risk, and property performance from one executive view.</p>
          </div>
          <button>New Turn</button>
        </header>

        <section className="stats">
          <div><p>Active Turns</p><h2>126</h2><span>+18 this week</span></div>
          <div><p>Avg. Turn Time</p><h2>3.8d</h2><span>Target 3.5d</span></div>
          <div><p>SLA Risk</p><h2>9</h2><span>Needs action</span></div>
          <div><p>Ready Units</p><h2>42</h2><span>Move-in ready</span></div>
        </section>

        <section className="grid">
          <div className="panel wide">
            <div className="panelHead"><h3>Live Turn Board</h3><span className="pill">Portfolio View</span></div>
            <div className="table head"><span>Unit</span><span>Property</span><span>Status</span><span>Due</span><span>Vendor</span><span>Risk</span></div>
            {turns.map((t) => <div className="table row" key={t.unit}>
              <span>{t.unit}</span><span>{t.property}</span><span>{t.status}</span><span>{t.due}</span><span>{t.vendor}</span><strong className={t.risk.toLowerCase().replace(' ', '-')}>{t.risk}</strong>
            </div>)}
          </div>

          <div className="panel"><h3>SLA Alerts</h3><div className="alerts"><p><b>3</b> turns past due</p><p><b>6</b> vendor delays</p><p><b>11</b> QA items open</p></div></div>
          <div className="panel"><h3>Vendor Scorecard</h3><div className="score"><p>NorthStar <b>96%</b></p><p>Prime Paint <b>91%</b></p><p>Metro Clean <b>78%</b></p></div></div>
        </section>
      </section>
    </main>
  );
}
