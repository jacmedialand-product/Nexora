export const dashboardData = [
            { metric: 'Total Students', value: '1,250', trend: '+5%' },
            { metric: 'Active Teachers', value: '85', trend: '0%' },
            { metric: 'Today\'s Attendance', value: '92%', trend: '-1%' }
        ];

export const studentsData = [
            { id: 'STU001', name: 'John Doe', class: '10', section: 'A', status: 'Active' },
            { id: 'STU002', name: 'Jane Smith', class: '9', section: 'B', status: 'Active' },
            { id: 'STU003', name: 'Mike Johnson', class: '11', section: 'Science', status: 'Active' }
        ];

export const academicsData = [
            { code: 'MAT101', subject: 'Mathematics', teacher: 'Mr. Anderson', classes: '9, 10' },
            { code: 'SCI201', subject: 'Physics', teacher: 'Mrs. Davis', classes: '11, 12' }
        ];

export const timetableData = [
            { day: 'Monday', period: '1st (08:00 AM)', subject: 'Mathematics', teacher: 'Mr. Anderson', room: '101' },
            { day: 'Monday', period: '2nd (09:00 AM)', subject: 'Physics', teacher: 'Mrs. Davis', room: 'Lab 2' }
        ];

export const attendanceData = [
            { date: '2023-10-24', class: '10-A', present: '28', absent: '2', percentage: '93%' },
            { date: '2023-10-24', class: '9-B', present: '30', absent: '0', percentage: '100%' }
        ];

export const examinationsData = [
            { exam: 'Mid-Term 2023', class: '10', startdate: '2023-11-10', enddate: '2023-11-20', status: 'Scheduled' },
            { exam: 'Unit Test 1', class: '9', startdate: '2023-09-15', enddate: '2023-09-18', status: 'Completed' }
        ];

export const homeworkData = [
            { title: 'Algebra Worksheet', subject: 'Mathematics', class: '10-A', duedate: '2023-10-26', status: 'Active' },
            { title: 'Newton\'s Laws Essay', subject: 'Physics', class: '11-Sci', duedate: '2023-10-28', status: 'Active' }
        ];

export const feesData = [
            { invoiceid: 'INV-001', student: 'John Doe', amount: '$500', duedate: '2023-11-01', status: 'Pending' },
            { invoiceid: 'INV-002', student: 'Jane Smith', amount: '$500', duedate: '2023-11-01', status: 'Paid' }
        ];

export const admissionsData = [
            { appid: 'APP-1001', applicantname: 'Tommy Lee', classapplied: '1', date: '2023-10-20', status: 'Interview' },
            { appid: 'APP-1002', applicantname: 'Sara Connor', classapplied: '5', date: '2023-10-22', status: 'Under Review' }
        ];

export const communicationData = [
            { title: 'Diwali Holiday Notice', audience: 'All', date: '2023-10-23', priority: 'Normal' },
            { title: 'Urgent Weather Update', audience: 'Parents', date: '2023-10-24', priority: 'High' }
        ];

export const parentportalData = [
            { childname: 'John Doe', class: '10-A', attendance: '95%', feesdue: '$500' }
        ];

export const studentportalData = [
            { subject: 'Mathematics', upcomingassignment: 'Algebra Worksheet', duedate: '2023-10-26', grade: 'A' },
            { subject: 'Science', upcomingassignment: 'Lab Report', duedate: '2023-10-29', grade: 'B+' }
        ];

export const leaveData = [
            { applicant: 'Mr. Anderson', type: 'Sick Leave', from: '2023-10-25', to: '2023-10-26', status: 'Approved' },
            { applicant: 'John Doe', type: 'Family Event', from: '2023-11-01', to: '2023-11-03', status: 'Pending' }
        ];

export const eventsData = [
            { eventname: 'Annual Sports Day', date: '2023-12-15', location: 'Main Ground', organizer: 'Sports Dept' },
            { eventname: 'Science Fair', date: '2023-11-20', location: 'Auditorium', organizer: 'Science Dept' }
        ];

export const certificatesData = [
            { student: 'John Doe', certificattype: 'Bonafide', issuedate: '2023-10-15', status: 'Issued' },
            { student: 'Jane Smith', certificattype: 'Transfer', issuedate: '-', status: 'Requested' }
        ];

export const visitorsData = [
            { visitorname: 'Robert Doe', purpose: 'Parent Meeting', persontomeet: 'Mr. Anderson', timein: '10:30 AM' },
            { visitorname: 'Alice Williams', purpose: 'Delivery', persontomeet: 'Front Desk', timein: '11:15 AM' }
        ];

export const notificationsData = [
            { message: 'New Fee Structure updated', category: 'Finance', date: '2023-10-20', status: 'Unread' },
            { message: 'Your leave request was approved', category: 'HR', date: '2023-10-22', status: 'Read' }
        ];

export const profileData = [
            { setting: 'Full Name', value: 'Admin User' },
            { setting: 'Role', value: 'Super Administrator' },
            { setting: 'Email', value: 'admin@nexora.edu' },
            { setting: 'Theme Preference', value: 'Dark' }
        ];

