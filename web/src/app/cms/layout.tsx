"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Home, Info, User, Book, Users, UserPlus, Calendar, Newspaper, Image, Trophy, Phone, Bell, Monitor, RefreshCw } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/cms', icon: LayoutDashboard },
  { name: 'Website Pages', href: '/cms/pages', icon: FileText },
  { name: 'Homepage', href: '/cms/homepage', icon: Home },
  { name: 'About', href: '/cms/about', icon: Info },
  { name: 'Principal Message', href: '/cms/principal-message', icon: User },
  { name: 'Academics', href: '/cms/academics', icon: Book },
  { name: 'Staff', href: '/cms/staff', icon: Users },
  { name: 'Admissions', href: '/cms/admissions', icon: UserPlus },
  { name: 'Events', href: '/cms/events', icon: Calendar },
  { name: 'News', href: '/cms/news', icon: Newspaper },
  { name: 'Gallery', href: '/cms/gallery', icon: Image },
  { name: 'Achievements', href: '/cms/achievements', icon: Trophy },
  { name: 'Contact', href: '/cms/contact', icon: Phone },
  { name: 'Notices', href: '/cms/notices', icon: Bell },
  { name: 'Website Preview', href: '/cms/preview', icon: Monitor },
  { name: 'ERP Integration', href: '/cms/erp-sync', icon: RefreshCw },
];

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg-default)' }}>
      {/* CMS Sidebar */}
      <aside style={{
        width: '260px',
        backgroundColor: 'var(--color-bg-surface)',
        borderRight: '1px solid var(--color-primary-dark)',
        padding: 'var(--spacing-lg) 0',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto'
      }}>
        <div style={{ padding: '0 var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ color: 'var(--color-primary-main)', margin: 0, fontSize: 'var(--font-size-h4)', fontFamily: 'var(--font-heading)' }}>
            CMS Engine
          </h2>
          <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem' }}>Website Management</span>
        </div>

        <nav style={{ flex: 1, padding: '0 var(--spacing-sm)' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link key={item.name} href={item.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', padding: 'var(--spacing-sm) var(--spacing-md)',
                  margin: '4px 0', borderRadius: 'var(--radius-md)',
                  color: isActive ? 'var(--color-primary-main)' : 'var(--color-text-secondary)',
                  backgroundColor: isActive ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                  transition: 'all 0.2s ease', fontWeight: isActive ? 600 : 400
                }}>
                  <Icon size={18} style={{ marginRight: '12px' }} />
                  <span style={{ fontSize: '0.9rem' }}>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, marginLeft: '260px', width: 'calc(100% - 260px)', padding: 'var(--spacing-xl)' }}>
        {children}
      </main>
    </div>
  );
}
