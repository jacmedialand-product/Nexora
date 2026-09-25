"use client";
import React, { useState } from 'react';

export default function ContactPage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div style={{ color: 'var(--color-text-primary)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ fontSize: 'var(--font-size-h2)', margin: 0, background: 'var(--color-primary-gradient)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
          Contact Management
        </h1>
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
          <button style={{ padding: 'var(--spacing-sm) var(--spacing-md)', background: 'transparent', border: '1px solid var(--color-primary-main)', color: 'var(--color-primary-main)', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }} onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel Edit' : 'Edit Content'}
          </button>
          <button style={{ padding: 'var(--spacing-sm) var(--spacing-md)', background: 'var(--color-primary-main)', border: 'none', color: '#000', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 'bold' }}>
            Publish Changes
          </button>
        </div>
      </div>

      <div style={{ background: 'var(--color-bg-card)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-primary-dark)', minHeight: '60vh' }}>
        {isEditing ? (
          <div>
            <h3 style={{ marginTop: 0 }}>Editing Contact</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>Use this frontend mock interface to modify the public website data.</p>
            <div style={{ marginTop: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <input type="text" placeholder="Title" defaultValue="Contact Title" style={{ width: '100%', padding: 'var(--spacing-sm)', background: 'var(--color-bg-surface)', border: '1px solid #333', color: '#fff', borderRadius: 'var(--radius-sm)' }} />
              <textarea placeholder="Content body..." rows={10} defaultValue="Mock content for Contact..." style={{ width: '100%', padding: 'var(--spacing-sm)', background: 'var(--color-bg-surface)', border: '1px solid #333', color: '#fff', borderRadius: 'var(--radius-sm)' }}></textarea>
            </div>
          </div>
        ) : (
          <div>
            <h3 style={{ marginTop: 0 }}>Previewing Contact</h3>
            <div style={{ padding: 'var(--spacing-lg)', background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px dashed #333', marginTop: 'var(--spacing-md)' }}>
              <h2 style={{ color: 'var(--color-primary-main)' }}>Contact Title</h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>Mock content for Contact...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
