"use client";
import React, { useState } from 'react';
import { DataTable } from '@/components/DataTable';
import { Modal } from '@/components/Modal';
import { feesData } from '@/data/mockData';

export default function FeesPage() {
  const [data] = useState(feesData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div style={{ color: 'var(--color-text-primary)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-lg)' }}>
        <h1 style={{ fontSize: 'var(--font-size-h2)', margin: 0, background: 'var(--color-primary-gradient)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Fees Module
        </h1>
        <button onClick={() => setIsModalOpen(true)} style={{ padding: 'var(--spacing-sm) var(--spacing-md)', background: 'var(--color-primary-main)', border: 'none', color: '#000', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 'bold' }}>
          Add New
        </button>
      </div>
      <DataTable columns={['Invoice ID', 'Student', 'Amount', 'Due Date', 'Status']} data={data} />
    
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Add New ${'Fees'}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          <div>
            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-secondary)' }}>Mock Input Field 1</label>
            <input type="text" placeholder="Enter details..." style={{ width: '100%', padding: 'var(--spacing-sm)', background: 'var(--color-bg-surface)', border: '1px solid #333', color: '#fff', borderRadius: 'var(--radius-sm)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-secondary)' }}>Mock Input Field 2</label>
            <input type="text" placeholder="Enter details..." style={{ width: '100%', padding: 'var(--spacing-sm)', background: 'var(--color-bg-surface)', border: '1px solid #333', color: '#fff', borderRadius: 'var(--radius-sm)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-sm)', marginTop: 'var(--spacing-md)' }}>
            <button onClick={() => setIsModalOpen(false)} style={{ padding: 'var(--spacing-sm) var(--spacing-md)', background: 'transparent', border: '1px solid var(--color-text-secondary)', color: 'var(--color-text-primary)', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>Cancel</button>
            <button onClick={() => setIsModalOpen(false)} style={{ padding: 'var(--spacing-sm) var(--spacing-md)', background: 'var(--color-primary-main)', border: 'none', color: '#000', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 'bold' }}>Save</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}