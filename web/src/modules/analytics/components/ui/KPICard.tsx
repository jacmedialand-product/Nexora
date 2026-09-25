import React from 'react';
export function KPICard({ title, value, trend, icon: Icon }: any) {
  return (
    <div style={{
      background: 'var(--color-bg-card)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--color-primary-dark)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-secondary)' }}>
        <h3 style={{ fontSize: 'var(--font-size-body-sm)', margin: 0, textTransform: 'uppercase' }}>{title}</h3>
        {Icon && <Icon size={18} color="var(--color-primary-main)" />}
      </div>
      <div style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-text-primary)', margin: 'var(--spacing-sm) 0', fontWeight: 'bold' }}>
        {value}
      </div>
      {trend && (
        <div style={{ fontSize: 'var(--font-size-body-sm)', color: trend > 0 ? 'var(--color-status-success)' : 'var(--color-status-error)' }}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% vs last period
        </div>
      )}
    </div>
  );
}
