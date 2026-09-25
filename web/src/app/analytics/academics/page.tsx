"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { KPICard } from '@/modules/analytics/components/ui/KPICard';
import { generateData } from '@/modules/analytics/data/mockData';

export default function academicsPage() {
  const data = generateData();
  
  return (
    <div style={{ padding: 'var(--spacing-xl)', color: 'var(--color-text-primary)' }}>
      <h1 style={{ fontSize: 'var(--font-size-h2)', marginBottom: 'var(--spacing-lg)', background: 'var(--color-primary-gradient)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
        Academics Analytics
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
        <KPICard title="Total Metric 1" value={Math.floor(Math.random() * 1000)} trend={Math.floor(Math.random() * 20) - 10} />
        <KPICard title="Active Metric 2" value={Math.floor(Math.random() * 1000)} trend={Math.floor(Math.random() * 20) - 10} />
        <KPICard title="Pending Metric 3" value={Math.floor(Math.random() * 100)} trend={Math.floor(Math.random() * 20) - 10} />
        <KPICard title="Success Rate" value={Math.floor(Math.random() * 100) + "%"} trend={Math.floor(Math.random() * 20) - 10} />
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>
        <div style={{ background: 'var(--color-bg-card)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-primary-dark)' }}>
          <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Trend Analysis</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#A1A1AA" />
                <YAxis stroke="#A1A1AA" />
                <Tooltip contentStyle={{ backgroundColor: '#1E1E1E', borderColor: '#D4AF37' }} />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#D4AF37" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#3B82F6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div style={{ background: 'var(--color-bg-card)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-primary-dark)' }}>
          <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Distribution Overview</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#A1A1AA" />
                <YAxis stroke="#A1A1AA" />
                <Tooltip contentStyle={{ backgroundColor: '#1E1E1E', borderColor: '#D4AF37' }} />
                <Legend />
                <Bar dataKey="pv" fill="#D4AF37" />
                <Bar dataKey="uv" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
