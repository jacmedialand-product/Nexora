import React from 'react';
import styles from '../analytics.module.css';

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: number;
  trendLabel?: string;
}

export function StatCard({ title, value, trend, trendLabel }: StatCardProps) {
  const isUp = trend && trend > 0;
  const isDown = trend && trend < 0;

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardValue}>{value}</div>
      {trend !== undefined && (
        <div className={styles.cardTrend}>
          <span className={isUp ? styles.trendUp : isDown ? styles.trendDown : ''}>
            {isUp ? '↑' : isDown ? '↓' : '-'} {Math.abs(trend)}%
          </span>
          <span style={{ color: '#64748b', marginLeft: '0.5rem' }}>{trendLabel}</span>
        </div>
      )}
    </div>
  );
}
