import React from 'react';

export function Modal({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1000,
      display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: 'var(--color-bg-card)', padding: 'var(--spacing-xl)',
        borderRadius: 'var(--radius-lg)', width: '500px', maxWidth: '90%',
        border: '1px solid var(--color-primary-dark)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ margin: 0, color: 'var(--color-text-primary)' }}>{title}</h2>
          <button onClick={onClose} style={{
            background: 'transparent', border: 'none', color: 'var(--color-text-secondary)',
            fontSize: '1.5rem', cursor: 'pointer', lineHeight: 1
          }}>&times;</button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
