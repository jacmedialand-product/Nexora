import React from 'react';
export function DataTable({ columns, data }: { columns: string[], data: any[] }) {
  return (
    <div style={{ overflowX: 'auto', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-primary-dark)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--color-text-primary)' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--color-primary-dark)', background: 'rgba(255,255,255,0.05)' }}>
            {columns.map(col => <th key={col} style={{ padding: 'var(--spacing-md)', textAlign: 'left' }}>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              {columns.map(col => <td key={col} style={{ padding: 'var(--spacing-md)' }}>{row[col.toLowerCase()] || '-'}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
