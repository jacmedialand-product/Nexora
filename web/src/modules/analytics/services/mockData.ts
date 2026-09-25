export const mockAnalyticsData = {
  overviewKpis: [
    { title: 'Total Enrollment', value: '4,521', trend: 3.2, trendLabel: 'vs last year' },
    { title: 'Overall Attendance', value: '94.8%', trend: -1.1, trendLabel: 'vs last month' },
    { title: 'Fee Collection', value: '$1.2M', trend: 8.4, trendLabel: 'vs target' },
    { title: 'Active Staff', value: '312', trend: 0, trendLabel: 'no change' }
  ],
  studentKpis: [
    { title: 'Avg Attendance', value: '94.8%', trend: -1.1, trendLabel: 'vs last month' },
    { title: 'Avg Marks', value: '78.5%', trend: 2.1, trendLabel: 'vs last term' },
    { title: 'Homework Completion', value: '88%', trend: 5.4, trendLabel: 'vs last month' },
    { title: 'Disciplinary Issues', value: '24', trend: -15, trendLabel: 'vs last month' }
  ],
  teacherKpis: [
    { title: 'Total Classes Handled', value: '1,240', trend: 2, trendLabel: 'this week' },
    { title: 'Attendance Marked', value: '98%', trend: 1.2, trendLabel: 'compliance' },
    { title: 'Marks Entry Status', value: '100%', trend: 0, trendLabel: 'all complete' },
    { title: 'Avg Class Performance', value: 'B+', trend: 0, trendLabel: 'stable' }
  ],
  financeKpis: [
    { title: 'Total Collected', value: '$1.2M', trend: 8.4, trendLabel: 'vs target' },
    { title: 'Pending Dues', value: '$240K', trend: -5.2, trendLabel: 'vs last month' },
    { title: 'Overdue > 30 Days', value: '$55K', trend: 12.1, trendLabel: 'needs attention' },
    { title: 'Refunds Processed', value: '$12K', trend: -2, trendLabel: 'vs last month' }
  ],
  alerts: [
    {
      id: '1',
      type: 'critical',
      title: 'Declining Attendance - Grade 10A',
      description: 'Average attendance dropped by 15% this week. Recommend intervention.'
    },
    {
      id: '2',
      type: 'critical',
      title: 'Declining Marks - Math Dept',
      description: 'Term 2 mid-terms show a 12% drop in average Math scores across Grade 8 and 9.'
    },
    {
      id: '3',
      type: 'warning',
      title: 'Pending Transport Fees',
      description: '45 students have overdue transport fees exceeding 30 days.'
    },
    {
      id: '4',
      type: 'info',
      title: 'AI Insight: Outstanding Performance',
      description: 'Science department shows a 12% increase in average scores following the new lab curriculum.'
    },
    {
      id: '5',
      type: 'warning',
      title: 'Missed Assignments Spike',
      description: 'Grade 11 History shows 40% of students missed the latest essay submission.'
    }
  ]
};
