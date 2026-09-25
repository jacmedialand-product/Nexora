"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, BookOpen, Clock, Calendar, FileText, ClipboardList, DollarSign, UserPlus, MessageSquare, User, GraduationCap, UserMinus, Trophy, Award, CreditCard, Bell, Settings } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Students', href: '/students', icon: Users },
  { name: 'Academics', href: '/academics', icon: BookOpen },
  { name: 'Timetable', href: '/timetable', icon: Clock },
  { name: 'Attendance', href: '/attendance', icon: Calendar },
  { name: 'Examinations', href: '/examinations', icon: FileText },
  { name: 'Homework', href: '/homework', icon: ClipboardList },
  { name: 'Fees', href: '/fees', icon: DollarSign },
  { name: 'Admissions', href: '/admissions', icon: UserPlus },
  { name: 'Communication', href: '/communication', icon: MessageSquare },
  { name: 'Parent Portal', href: '/parent-portal', icon: User },
  { name: 'Student Portal', href: '/student-portal', icon: GraduationCap },
  { name: 'Leave', href: '/leave', icon: UserMinus },
  { name: 'Events', href: '/events', icon: Trophy },
  { name: 'Certificates', href: '/certificates', icon: Award },
  { name: 'Visitors', href: '/visitors', icon: CreditCard },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Profile', href: '/profile', icon: Settings }
];

export default function ERPLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg-default)' }}>
      <aside style={{
        width: '260px', backgroundColor: 'var(--color-bg-surface)', borderRight: '1px solid var(--color-primary-dark)',
        padding: 'var(--spacing-lg) 0', display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh', overflowY: 'auto'
      }}>
        <div style={{ padding: '0 var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ color: 'var(--color-primary-main)', margin: 0 }}>Core ERP</h2>
        </div>
        <nav style={{ flex: 1, padding: '0 var(--spacing-sm)' }}>
          {navItems.map((item) => {
            const isActive = pathname?.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link key={item.name} href={item.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', padding: 'var(--spacing-sm) var(--spacing-md)', margin: '4px 0',
                  borderRadius: 'var(--radius-md)', color: isActive ? 'var(--color-primary-main)' : 'var(--color-text-secondary)',
                  backgroundColor: isActive ? 'rgba(212, 175, 55, 0.1)' : 'transparent'
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
