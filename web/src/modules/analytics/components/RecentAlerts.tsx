import React from 'react';
import styles from '../analytics.module.css';

interface Alert {
  id: string;
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
}

export function RecentAlerts({ alerts }: { alerts: Alert[] }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Early Warning & AI Alerts</h3>
      <div className={styles.alertList}>
        {alerts.map(alert => (
          <div key={alert.id} className={`${styles.alertItem} ${styles[alert.type]}`}>
            <div className={styles.alertContent}>
              <h4>{alert.title}</h4>
              <p>{alert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
