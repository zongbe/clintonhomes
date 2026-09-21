import express from 'express'
import cors from 'cors'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataFile = path.join(__dirname, 'data', 'db.json')
const app = express()
const PORT = process.env.PORT || 3001

const seedData = {
  propertyListings: [
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
    {
      id: 5,
      title: 'Sunset garden residence',
      location: 'Victoria Island, Lagos',
      price: '₦895,000,000',
      status: 'Active',
      landlord: 'Aisha Okafor',
      bedrooms: 5,
      baths: 4,
      type: 'House',
    },
    {
      id: 6,
      title: 'Park Avenue city apartment',
      location: 'Wuse, Abuja',
      price: '₦1,250,000,000',
      status: 'Pending',
      landlord: 'Daniel Nwachukwu',
      bedrooms: 4,
      baths: 3,
      type: 'Apartment',
    },
    {
      id: 7,
      title: 'Congress Avenue modern home',
      location: 'Abeokuta, Ogun',
      price: '₦735,000,000',
      status: 'Active',
      landlord: 'Samuel Adeola',
      bedrooms: 6,
      baths: 5,
      type: 'House',
    },
    {
      id: 8,
      title: 'Peachtree street townhouse',
      location: 'Gwarinpa, Abuja',
      price: '₦680,000,000',
      status: 'Active',
      landlord: 'Tola Adebayo',
      bedrooms: 3,
      baths: 3,
      type: 'Townhouse',
    },
    {
      id: 9,
      title: 'Lincoln Road coastal retreat',
      location: 'Ikeja, Lagos',
      price: '₦925,000,000',
      status: 'Active',
      landlord: 'Musa Bello',
      bedrooms: 4,
      baths: 4,
      type: 'Apartment',
    },
    {
      id: 10,
      title: 'Third Avenue light-filled home',
      location: 'Festac, Lagos',
      price: '₦820,000,000',
      status: 'Pending',
      landlord: 'Kingsley Okafor',
      bedrooms: 5,
      baths: 4,
      type: 'Apartment',
    },
  ],
  landlordApplications: [
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
    {
      id: 4,
      name: 'Blessing Eze',
      property: 'Palm court duplex',
      location: 'Lekki Phase 2',
      submitted: '5 hours ago',
      status: 'Pending',
    },
    {
      id: 5,
      name: 'Peter Ojo',
      property: 'Emerald villa',
      location: 'Surulere',
      submitted: '1 day ago',
      status: 'Approved',
    },
    {
      id: 6,
      name: 'Ada Mba',
      property: 'Cedar lane residence',
      location: 'Gwarinpa',
      submitted: '3 days ago',
      status: 'Pending',
    },
    {
      id: 7,
      name: 'Funke Akin',
      property: 'Azure terrace home',
      location: 'Ikoyi',
      submitted: '6 days ago',
      status: 'Pending',
    },
    {
      id: 8,
      name: 'Chika Umeh',
      property: 'Harbor view apartments',
      location: 'Ajah',
      submitted: '2 weeks ago',
      status: 'Pending',
    },
  ],
  leadRecords: [
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
  ],
  dashboardStats: [
    { label: 'Active listings', value: '128', change: '+12%' },
    { label: 'Pending approvals', value: '18', change: '+4%' },
    { label: 'Leads this month', value: '246', change: '+18%' },
    { label: 'Closed deals', value: '39', change: '+9%' },
  ],
  recentActivity: [
    'New landlord application received from Victoria Island',
    'Buyer request moved to follow-up stage for Yaba apartment',
    'Property listing updated for Chevron residence',
    'Monthly report generated for Q3 property pipeline',
  ],
  reports: {
    summary: [
      { label: 'Revenue pipeline', value: '₦14.8M', change: '+18% from last month' },
      { label: 'Buyer conversion', value: '31%', change: 'Target: 40%' },
      { label: 'Top location', value: 'Lekki', change: '24 active leads' },
    ],
    chart: [
      { month: 'Jan', value: 38, detail: '₦2.4M' },
      { month: 'Feb', value: 52, detail: '₦3.1M' },
      { month: 'Mar', value: 68, detail: '₦4.1M' },
      { month: 'Apr', value: 75, detail: '₦4.6M' },
      { month: 'May', value: 86, detail: '₦5.8M' },
      { month: 'Jun', value: 96, detail: '₦6.4M' },
    ],
  },
}

async function ensureDatabase() {
  await fs.mkdir(path.dirname(dataFile), { recursive: true })

  try {
    await fs.access(dataFile)
  } catch {
    await fs.writeFile(dataFile, JSON.stringify(seedData, null, 2))
  }
}

async function readDatabase() {
  await ensureDatabase()
  const raw = await fs.readFile(dataFile, 'utf8')
  return JSON.parse(raw)
}

async function writeDatabase(data) {
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2))
}

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Clinton Homes backend is running' })
})

app.post('/api/login', async (req, res) => {
  const { email = '', password = '' } = req.body || {}
  const emailValue = String(email).trim().toLowerCase()

  if (emailValue === 'admin@clintonhomes.com' && String(password) === 'admin123') {
    return res.json({
      success: true,
      user: {
        email: emailValue,
        role: 'admin',
      },
      message: 'Login successful',
    })
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid admin credentials',
  })
})

app.get('/api/dashboard', async (req, res) => {
  const db = await readDatabase()

  const activeListings = db.propertyListings.filter((property) => property.status !== 'Sold').length
  const pendingApprovals = db.landlordApplications.filter((item) => item.status === 'Pending').length
  const leadsThisMonth = db.leadRecords.length
  const closedDeals = db.propertyListings.filter((property) => property.status === 'Sold').length + db.leadRecords.filter((lead) => lead.status === 'Closed').length

  const stats = [
    { label: 'Active listings', value: String(activeListings), change: '+12%' },
    { label: 'Pending approvals', value: String(pendingApprovals), change: '+4%' },
    { label: 'Leads this month', value: String(leadsThisMonth), change: '+18%' },
    { label: 'Closed deals', value: String(closedDeals), change: '+9%' },
  ]

  const recentActivity = [
    ...db.landlordApplications
      .filter((application) => application.status === 'Pending')
      .slice(0, 2)
      .map((application) => `Landlord request pending for ${application.name} in ${application.location}`),
    ...db.leadRecords
      .slice(0, 2)
      .map((lead) => `${lead.name} is in the ${lead.status} stage for ${lead.inquiry}`),
    ...db.propertyListings
      .slice(0, 2)
      .map((property) => `${property.title} is currently ${property.status.toLowerCase()} in ${property.location}`),
  ].slice(0, 5)

  res.json({
    stats,
    recentActivity,
  })
})

app.get('/api/properties', async (req, res) => {
  const db = await readDatabase()
  res.json(db.propertyListings)
})

app.post('/api/properties', async (req, res) => {
  const payload = req.body || {}
  const db = await readDatabase()

  const nextId = db.propertyListings.reduce((maxId, property) => Math.max(maxId, Number(property.id) || 0), 0) + 1

  const property = {
    id: nextId,
    title: String(payload.title || 'New listing').trim(),
    location: String(payload.location || 'Unspecified location').trim(),
    price: String(payload.price || '₦0').trim(),
    status: String(payload.status || 'Pending').trim(),
    landlord: String(payload.landlord || 'Unassigned landlord').trim(),
    bedrooms: Number(payload.bedrooms || 0),
    baths: Number(payload.baths || 0),
    type: String(payload.type || 'Apartment').trim(),
  }

  db.propertyListings.unshift(property)
  await writeDatabase(db)
  res.status(201).json({ success: true, property })
})

app.put('/api/properties/:id', async (req, res) => {
  const payload = req.body || {}
  const db = await readDatabase()
  const id = Number(req.params.id)

  const index = db.propertyListings.findIndex((property) => property.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Property not found' })
  }

  if (db.propertyListings[index].status === 'Sold') {
    return res.status(400).json({ message: 'Sold properties cannot be edited.' })
  }

  db.propertyListings[index] = {
    ...db.propertyListings[index],
    title: String(payload.title || db.propertyListings[index].title).trim(),
    location: String(payload.location || db.propertyListings[index].location).trim(),
    price: String(payload.price || db.propertyListings[index].price).trim(),
    status: String(payload.status || db.propertyListings[index].status).trim(),
    landlord: String(payload.landlord || db.propertyListings[index].landlord).trim(),
    bedrooms: Number(payload.bedrooms ?? db.propertyListings[index].bedrooms),
    baths: Number(payload.baths ?? db.propertyListings[index].baths),
    type: String(payload.type || db.propertyListings[index].type).trim(),
  }

  await writeDatabase(db)
  return res.json({ success: true, property: db.propertyListings[index] })
})

app.patch('/api/properties/:id/status', async (req, res) => {
  const { status } = req.body || {}
  const db = await readDatabase()
  const id = Number(req.params.id)

  const property = db.propertyListings.find((item) => item.id === id)

  if (!property) {
    return res.status(404).json({ message: 'Property not found' })
  }

  if (property.status === 'Sold') {
    return res.status(400).json({ message: 'Sold properties cannot change status.' })
  }

  db.propertyListings = db.propertyListings.map((item) =>
    item.id === id ? { ...item, status } : item,
  )

  await writeDatabase(db)
  res.json({ success: true, property: db.propertyListings.find((item) => item.id === id) })
})

app.delete('/api/properties/:id', async (req, res) => {
  const db = await readDatabase()
  const id = Number(req.params.id)

  db.propertyListings = db.propertyListings.filter((property) => property.id !== id)

  await writeDatabase(db)
  res.json({ success: true })
})

app.get('/api/landlords', async (req, res) => {
  const db = await readDatabase()
  res.json(db.landlordApplications)
})

app.patch('/api/landlords/:id/status', async (req, res) => {
  const { status } = req.body || {}
  const db = await readDatabase()
  const id = Number(req.params.id)

  db.landlordApplications = db.landlordApplications.map((application) =>
    application.id === id ? { ...application, status } : application,
  )

  await writeDatabase(db)
  res.json({ success: true, application: db.landlordApplications.find((item) => item.id === id) })
})

app.get('/api/leads', async (req, res) => {
  const db = await readDatabase()
  res.json(db.leadRecords)
})

app.patch('/api/leads/:id/status', async (req, res) => {
  const { status } = req.body || {}
  const db = await readDatabase()
  const id = Number(req.params.id)

  db.leadRecords = db.leadRecords.map((lead) =>
    lead.id === id ? { ...lead, status } : lead,
  )

  await writeDatabase(db)
  res.json({ success: true, lead: db.leadRecords.find((item) => item.id === id) })
})

app.get('/api/reports', async (req, res) => {
  const db = await readDatabase()
  const chart = Array.isArray(db.reports?.chart) ? db.reports.chart : []
  const normalizedChart =
    chart.length > 0 && typeof chart[0] === 'number'
      ? chart.map((value, index) => ({
          month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index] || `M${index + 1}`,
          value,
          detail: `₦${(value / 10).toFixed(1)}M`,
        }))
      : chart

  res.json({
    ...db.reports,
    chart: normalizedChart,
  })
})

app.listen(PORT, () => {
  console.log(`Clinton Homes backend running on http://localhost:${PORT}`)
})
