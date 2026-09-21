const API_BASE = '/api'

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || 'Request failed')
  }

  return data
}

export const adminApi = {
  login: (email, password) =>
    request('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  getDashboard: () => request('/dashboard'),
  getProperties: () => request('/properties'),
  createProperty: (property) =>
    request('/properties', {
      method: 'POST',
      body: JSON.stringify(property),
    }),
  updateProperty: (id, property) =>
    request(`/properties/${id}`, {
      method: 'PUT',
      body: JSON.stringify(property),
    }),
  updatePropertyStatus: (id, status) =>
    request(`/properties/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    }),
  deleteProperty: (id) =>
    request(`/properties/${id}`, {
      method: 'DELETE',
    }),

  getLandlords: () => request('/landlords'),
  updateLandlordStatus: (id, status) =>
    request(`/landlords/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    }),

  getLeads: () => request('/leads'),
  updateLeadStatus: (id, status) =>
    request(`/leads/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    }),

  getReports: () => request('/reports'),
}
