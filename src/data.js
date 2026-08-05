// Shared mock data — modeled on the Ecosail / CVMS domain:
// vessel reporting, voyage performance, emissions compliance (CII, EU ETS), bunkering.

export const vessels = [
  { name: 'MV Nordwind',      imo: '9483671', type: 'Bulk Carrier',   cii: 'A', status: 'At Sea',    route: 'Santos → Qingdao',     eta: '12 Aug', sync: 'Synced' },
  { name: 'MV Coral Trader',  imo: '9512348', type: 'Container',      cii: 'B', status: 'In Port',   route: 'Singapore (berth 12)', eta: '—',      sync: 'Synced' },
  { name: 'MT Aegean Star',   imo: '9376921', type: 'Product Tanker', cii: 'C', status: 'At Sea',    route: 'Rotterdam → Houston',  eta: '18 Aug', sync: 'Lagging 4h' },
  { name: 'MV Baltic Rose',   imo: '9445102', type: 'Bulk Carrier',   cii: 'B', status: 'Anchorage', route: 'Off Paradip',          eta: '06 Aug', sync: 'Synced' },
  { name: 'MV Monsoon Glory', imo: '9528114', type: 'General Cargo',  cii: 'D', status: 'Dry Dock',  route: 'COSCO Zhoushan Yard',  eta: '24 Aug', sync: 'Offline 2d' },
]

export const kpis = [
  { label: 'Vessels Reporting',    value: '18',    delta: '17 synced · 1 lagging',      trend: 'up' },
  { label: 'Noon Reports Today',   value: '16',    delta: '2 pending approval',         trend: 'flat' },
  { label: 'Fleet CII Rating',     value: 'B',     delta: '3 vessels at C or below',    trend: 'up' },
  { label: 'EU ETS Exposure YTD',  value: '€412k', delta: '+€38k vs last month',        trend: 'down' },
]

export const approvals = [
  { id: 'NR-1284', vessel: 'MV Nordwind',     type: 'Noon Report',       detail: 'Submitted 04 Aug 06:00 UTC', status: 'Pending Approval' },
  { id: 'ER-0977', vessel: 'MT Aegean Star',  type: 'Engineer Report',   detail: 'FuelRob variance flagged',   status: 'Pending Approval' },
  { id: 'BN-0412', vessel: 'MV Baltic Rose',  type: 'Bunkering / BDN',   detail: 'VLSFO 850 MT · Paradip',     status: 'Approved' },
  { id: 'CA-0058', vessel: 'MV Monsoon Glory', type: 'CII Adjustment',   detail: 'Dry dock off-hire period',   status: 'Draft' },
]

export const modules = [
  'Dashboard', 'Fleet', 'Voyages', 'Reporting', 'Emissions', 'Bunkering', 'Masters', 'Admin',
]

// 12 weeks of fleet fuel consumption, metric tonnes
export const fuelTrend = [
  { week: 'W19', vlsfo: 512, mgo: 74 },
  { week: 'W20', vlsfo: 498, mgo: 82 },
  { week: 'W21', vlsfo: 545, mgo: 68 },
  { week: 'W22', vlsfo: 530, mgo: 91 },
  { week: 'W23', vlsfo: 484, mgo: 88 },
  { week: 'W24', vlsfo: 507, mgo: 72 },
  { week: 'W25', vlsfo: 552, mgo: 79 },
  { week: 'W26', vlsfo: 538, mgo: 95 },
  { week: 'W27', vlsfo: 501, mgo: 84 },
  { week: 'W28', vlsfo: 476, mgo: 70 },
  { week: 'W29', vlsfo: 519, mgo: 77 },
  { week: 'W30', vlsfo: 493, mgo: 86 },
]

// EU ETS exposure by month, €k
export const etsMonthly = [
  { month: 'Jan', eur: 38 },
  { month: 'Feb', eur: 42 },
  { month: 'Mar', eur: 51 },
  { month: 'Apr', eur: 47 },
  { month: 'May', eur: 55 },
  { month: 'Jun', eur: 61 },
  { month: 'Jul', eur: 58 },
  { month: 'Aug', eur: 60 },
]

export const statusTone = {
  'At Sea': 'positive',
  'In Port': 'info',
  'Anchorage': 'warning',
  'Dry Dock': 'critical',
  'Pending Approval': 'warning',
  'Approved': 'positive',
  'Draft': 'neutral',
  'Synced': 'positive',
  'Lagging 4h': 'warning',
  'Offline 2d': 'critical',
  A: 'positive', B: 'positive', C: 'warning', D: 'critical', E: 'critical',
}
