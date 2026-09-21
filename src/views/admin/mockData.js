export const propertyListings = [
  {
    id: 1,
    title: 'Contemporary family duplex',
    location: 'Lekki Phase 1, Lagos',
    price: '₦85,000,000',
    status: 'Active',
    landlord: 'Hammed Yahyah',
    bedrooms: 4,
    baths: 3,
    type: 'Duplex',
  },
  {
    id: 2,
    title: 'Warm family residence',
    location: 'Chevron, Lagos',
    price: '₦62,500,000',
    status: 'Pending',
    landlord: 'Olanrewaju Gideon',
    bedrooms: 3,
    baths: 3,
    type: 'Apartment',
  },
  {
    id: 3,
    title: 'The nightfall terrace home',
    location: 'Ikoyi, Lagos',
    price: '₦110,000,000',
    status: 'Sold',
    landlord: 'Gabriel Chris',
    bedrooms: 5,
    baths: 5,
    type: 'Penthouse',
  },
  {
    id: 4,
    title: 'Quiet modern townhouse',
    location: 'Yaba, Lagos',
    price: '₦48,000,000',
    status: 'Active',
    landlord: 'Chukuemeka Promisess',
    bedrooms: 3,
    baths: 2,
    type: 'Townhouse',
  },
]

export const landlordApplications = [
  {
    id: 1,
    name: 'Aisha Okafor',
    property: 'Sunset garden residence',
    location: 'Victoria Island',
    submitted: '2 days ago',
    status: 'Pending',
  },
  {
    id: 2,
    name: 'Daniel Nwachukwu',
    property: 'Lincoln Road coastal retreat',
    location: 'Ikeja',
    submitted: '4 days ago',
    status: 'Approved',
  },
  {
    id: 3,
    name: 'Musa Bello',
    property: 'Park Avenue city apartment',
    location: 'Wuse',
    submitted: '1 week ago',
    status: 'Pending',
  },
]

export const leadRecords = [
  {
    id: 1,
    name: 'Femi A.',
    inquiry: 'Interested in Lekki duplex',
    source: 'Website',
    status: 'New',
    date: 'Today',
  },
  {
    id: 2,
    name: 'Joy S.',
    inquiry: 'Requested viewing for Yaba apartment',
    source: 'Instagram',
    status: 'Follow up',
    date: 'Yesterday',
  },
  {
    id: 3,
    name: 'Tunde B.',
    inquiry: 'Looking for 3-bedroom in Ikoyi',
    source: 'Referral',
    status: 'Qualified',
    date: '2 days ago',
  },
  {
    id: 4,
    name: 'Ada O.',
    inquiry: 'Asked for landlord details',
    source: 'WhatsApp',
    status: 'Closed',
    date: '3 days ago',
  },
]

export const dashboardStats = [
  { label: 'Active listings', value: '128', change: '+12%' },
  { label: 'Pending approvals', value: '18', change: '+4%' },
  { label: 'Leads this month', value: '246', change: '+18%' },
  { label: 'Closed deals', value: '39', change: '+9%' },
]

export const recentActivity = [
  'New landlord application received from Victoria Island',
  'Buyer request moved to follow-up stage for Yaba apartment',
  'Property listing updated for Chevron residence',
  'Monthly report generated for Q3 property pipeline',
]
