"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, BookOpen, Clock, Calendar, FileText, ClipboardList, DollarSign, UserPlus, Truck, Home, Library, Briefcase, Box, AlertTriangle, Bell, PieChart, Activity, Settings, BarChart2 } from 'lucide-react';

const navItems = [
  { name: 'Executive Dashboard', href: '/analytics', icon: LayoutDashboard },
  { name: 'Students', href: '/analytics/students', icon: Users },
  { name: 'Teachers', href: '/analytics/teachers', icon: Briefcase },
  { name: 'Academics', href: '/analytics/academics', icon: BookOpen },
  { name: 'Attendance', href: '/analytics/attendance', icon: Calendar },
  { name: 'Examinations', href: '/analytics/examinations', icon: FileText },
  { name: 'Homework', href: '/analytics/homework', icon: ClipboardList },
  { name: 'Finance', href: '/analytics/finance', icon: DollarSign },
  { name: 'Admissions', href: '/analytics/admissions', icon: UserPlus },
  { name: 'Transport', href: '/analytics/transport', icon: Truck },
  { name: 'Hostel', href: '/analytics/hostel', icon: Home },
  { name: 'Library', href: '/analytics/library', icon: Library },
  { name: 'HR', href: '/analytics/hr', icon: Users },
  { name: 'Inventory & Assets', href: '/analytics/inventory', icon: Box },
  { name: 'Risks', href: '/analytics/risks', icon: AlertTriangle },
  { name: 'Alerts', href: '/analytics/alerts', icon: Bell },
  { name: 'Reports', href: '/analytics/reports', icon: PieChart },
  { name: 'KPI Management', href: '/analytics/kpi-management', icon: Activity },
  { name: 'Module Utilization', href: '/analytics/module-utilization', icon: BarChart2 },
  { name: 'Settings', href: '/analytics/settings', icon: Settings },
];

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg-default)' }}>
      <aside style={{
        width: '260px', backgroundColor: 'var(--color-bg-surface)', borderRight: '1px solid var(--color-primary-dark)',
        padding: 'var(--spacing-lg) 0', display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh', overflowY: 'auto'
      }}>
        <div style={{ padding: '0 var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ color: 'var(--color-primary-main)', margin: 0, fontFamily: 'var(--font-heading)' }}>School OS</h2>
          <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem' }}>Analytics Engine</span>
        </div>
        <nav style={{ flex: 1, padding: '0 var(--spacing-sm)' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link key={item.name} href={item.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', padding: 'var(--spacing-sm) var(--spacing-md)', margin: '4px 0',
                  borderRadius: 'var(--radius-md)', color: isActive ? 'var(--color-primary-main)' : 'var(--color-text-secondary)',
                  backgroundColor: isActive ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                  fontWeight: isActive ? 600 : 400
                }}>
                  <Icon size={18} style={{ marginRight: '12px' }} />
                  <span style={{ fontSize: '0.9rem' }}>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </aside>
      <main style={{ flex: 1, marginLeft: '260px', padding: 'var(--spacing-xl)' }}>
        {children}
      </main>
    </div>
  );
}
