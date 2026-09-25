"use client";

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-bg-default)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--spacing-xl)'
    }}>
      <h1 style={{
        fontSize: 'var(--font-size-h1)',
        fontWeight: 'bold',
        marginBottom: 'var(--spacing-md)',
        background: 'var(--color-primary-gradient)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center'
      }}>
        Nexora School OS
      </h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xxl)', fontSize: 'var(--font-size-body-lg)' }}>
        Modular Platform for Pre-KG to Grade 12
      </p>

      <div style={{
        display: 'flex',
        gap: 'var(--spacing-lg)',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <RoleCard href="/admin" title="School Admin" desc="Manage tenant, academics, operations" />
        <RoleCard href="/teacher" title="Teacher Portal" desc="Attendance, marks, homework" />
        <RoleCard href="/student" title="Student & Parent" desc="Timetable, documents, fees" />
        <RoleCard href="/analytics" title="School Analytics" desc="Premium Intelligence Dashboard" />
        <RoleCard href="/cms" title="School Website CMS" desc="Manage public website content" />
      </div>
    </div>
  );
}

function RoleCard({ href, title, desc }: { href: string, title: string, desc: string }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div style={{
        backgroundColor: 'var(--color-bg-card)',
        backdropFilter: 'blur(12px)',
        border: `1px solid var(--color-primary-dark)`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-xl)',
        width: '280px',
        height: '100%',
        transition: 'transform 0.3s ease, boxShadow 0.3s ease',
        cursor: 'pointer',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = `0 12px 40px 0 var(--color-primary-dark)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.4)';
      }}
      >
        <h3 style={{ margin: '0 0 var(--spacing-sm) 0', color: 'var(--color-text-primary)', fontSize: 'var(--font-size-h4)' }}>{title}</h3>
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-body)' }}>{desc}</p>
      </div>
    </Link>
  );
}
