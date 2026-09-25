"use client";

import React, { useState } from 'react';
import styles from '../analytics.module.css';
import { StatCard } from './StatCard';
import { RecentAlerts } from './RecentAlerts';
import { mockAnalyticsData } from '../services/mockData';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    'Overview',
    'Students',
    'Teachers',
    'Finance',
    'Transport & Hostel',
    'AI & Early Warnings'
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>School Intelligence</h1>
          <p className={styles.subtitle}>Principal & Management Overview</p>
        </div>
        <div className={`${styles.badge} ${styles.premium}`}>
          Premium AI Enabled
        </div>
      </header>

      <div className={styles.tabs}>
        {tabs.map(tab => (
          <button
            key={tab}
            className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'Overview' && <OverviewTab />}
        {activeTab === 'Students' && <StudentsTab />}
        {activeTab === 'Teachers' && <TeachersTab />}
        {activeTab === 'Finance' && <FinanceTab />}
        {activeTab === 'Transport & Hostel' && <OperationsTab />}
        {activeTab === 'AI & Early Warnings' && <AITab />}
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <>
      <div className={styles.grid}>
        {mockAnalyticsData.overviewKpis.map((kpi: any, idx: number) => (
          <StatCard key={idx} {...kpi} />
        ))}
      </div>
      <div className={styles.twoColGrid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Platform Activity Trend</h3>
          <div className={styles.chartContainer}>[ Overall Performance Chart ]</div>
        </div>
        <RecentAlerts alerts={mockAnalyticsData.alerts as any} />
      </div>
    </>
  );
}

function StudentsTab() {
  return (
    <>
      <div className={styles.grid}>
        {mockAnalyticsData.studentKpis.map((kpi: any, idx: number) => (
          <StatCard key={idx} {...kpi} />
        ))}
      </div>
      <div className={styles.twoColGrid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Attendance & Marks Trend</h3>
          <div className={styles.chartContainer}>[ Student Trend Chart ]</div>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Risk Indicators</h3>
          <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1rem' }}>
            <li>45 students with &lt; 75% attendance</li>
            <li>12 students missing &gt; 3 homeworks</li>
            <li>8 severe behavioral reports this week</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function TeachersTab() {
  return (
    <>
      <div className={styles.grid}>
        {mockAnalyticsData.teacherKpis.map((kpi: any, idx: number) => (
          <StatCard key={idx} {...kpi} />
        ))}
      </div>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Workload & Compliance</h3>
        <div className={styles.chartContainer}>[ Teacher Metrics Chart ]</div>
      </div>
    </>
  );
}

function FinanceTab() {
  return (
    <>
      <div className={styles.grid}>
        {mockAnalyticsData.financeKpis.map((kpi: any, idx: number) => (
          <StatCard key={idx} {...kpi} />
        ))}
      </div>
      <div className={styles.twoColGrid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Monthly Collection Trends</h3>
          <div className={styles.chartContainer}>[ Finance Trend Chart ]</div>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Overdue Breakdown</h3>
          <div className={styles.chartContainer}>[ Overdue Pie Chart ]</div>
        </div>
      </div>
    </>
  );
}

function OperationsTab() {
  return (
    <div className={styles.twoColGrid}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Transport Analytics</h3>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>Vehicle Utilization: 88%</li>
          <li>Active Routes: 24</li>
          <li>Fuel Efficiency Alert: Bus 4</li>
        </ul>
        <div className={styles.chartContainer}>[ Transport Stats ]</div>
      </div>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Hostel Analytics</h3>
        <ul style={{ color: 'var(--color-text-secondary)' }}>
          <li>Occupancy: 95%</li>
          <li>Open Complaints: 12 (Maintenance)</li>
          <li>Leave Requests: 8 Pending</li>
        </ul>
        <div className={styles.chartContainer}>[ Hostel Stats ]</div>
      </div>
    </div>
  );
}

function AITab() {
  return (
    <div className={styles.grid} style={{ gridTemplateColumns: '1fr' }}>
      <div className={styles.card} style={{ borderLeft: '4px solid var(--color-primary-main)' }}>
        <h3 className={styles.cardTitle}>Principal Weekly Summary (AI Generated)</h3>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
          This week showed a stable 94% overall attendance, but Grade 10 Science has seen a sharp decline in assignment completion. 
          Financial collections are 12% ahead of target, largely due to early Q3 fee payments. 
          Transport operations are normal, though Hostel Block B reported repeated maintenance issues regarding water pressure.
        </p>
      </div>
      <RecentAlerts alerts={mockAnalyticsData.alerts as any} />
    </div>
  );
}
