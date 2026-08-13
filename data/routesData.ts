export interface RouteInfo {
  slug: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  sedanPrice: string;
  suvPrice: string;
  innovaPrice: string;
  description: string;
  highlights: string[];
  tollInfo: string;
  image?: string;
}

export const routesData: Record<string, RouteInfo> = {
  // Local & Nearby Transfers
  'haridwar-to-rishikesh-taxi-service': {
    slug: 'haridwar-to-rishikesh-taxi-service',
    from: 'Haridwar',
    to: 'Rishikesh',
    distance: '30 km',
    duration: '45 - 60 Mins',
    sedanPrice: '₹1,200',
    suvPrice: '₹1,800',
    innovaPrice: '₹2,500',
    description: 'Quick transfer from Haridwar Railway Station or Ganga Ghats to Tapovan, Triveni Ghat, or Lakshman Jhula in Rishikesh.',
    highlights: ['24/7 Pickup from Haridwar Station', 'Clean cabs with AC', 'Direct drop at ashrams/hotels'],
    tollInfo: 'Tolls included in final fare.'
  },
  'haridwar-to-dehradun-taxi-service': {
    slug: 'haridwar-to-dehradun-taxi-service',
    from: 'Haridwar',
    to: 'Dehradun City',
    distance: '52 km',
    duration: '1.5 Hours',
    sedanPrice: '₹1,800',
    suvPrice: '₹2,500',
    innovaPrice: '₹3,500',
    description: 'Comfortable city-to-city taxi service from Haridwar to Dehradun ISBT, Clock Tower, or Rajpur Road.',
    highlights: ['Express highway route', 'Experienced local drivers', 'Flexible pickup timings'],
    tollInfo: 'Toll taxes included.'
  },
  'haridwar-to-mussoorie-taxi-service': {
    slug: 'haridwar-to-mussoorie-taxi-service',
    from: 'Haridwar',
    to: 'Mussoorie',
    distance: '85 km',
    duration: '2.5 - 3 Hours',
    sedanPrice: '₹2,800',
    suvPrice: '₹3,800',
    innovaPrice: '₹5,200',
    description: 'Direct hill taxi service from Haridwar to Mussoorie Mall Road, Kempty Falls, and Bhatta Falls.',
    highlights: ['Hill-experienced drivers', 'Sightseeing options on route', 'Spacious boot space for luggage'],
    tollInfo: 'Tolls & Mussoorie eco-tax included.'
  },
  'haridwar-to-jolly-grant-airport-taxi-service': {
    slug: 'haridwar-to-jolly-grant-airport-taxi-service',
    from: 'Haridwar',
    to: 'Jolly Grant Airport (DED)',
    distance: '38 km',
    duration: '50 Mins',
    sedanPrice: '₹1,500',
    suvPrice: '₹2,200',
    innovaPrice: '₹3,000',
    description: 'Timely airport drop and pickup service between Haridwar and Dehradun Jolly Grant Airport.',
    highlights: ['Flight tracking for accurate pickups', 'Zero delay guarantee', 'Luggage assistance included'],
    tollInfo: 'Fixed price with no extra charges.'
  },
  'haridwar-to-neelkanth-mahadev-taxi-service': {
    slug: 'haridwar-to-neelkanth-mahadev-taxi-service',
    from: 'Haridwar',
    to: 'Neelkanth Mahadev Temple',
    distance: '55 km',
    duration: '2 Hours',
    sedanPrice: '₹2,200',
    suvPrice: '₹3,000',
    innovaPrice: '₹4,200',
    description: 'Sacred temple pilgrimage cab service from Haridwar through mountain forests to Neelkanth Mahadev.',
    highlights: ['Special mountain driver', 'Same-day return available', 'Flexible waiting time for darshan'],
    tollInfo: 'Parking charges extra if applicable.'
  },
  'haridwar-to-devprayag-taxi-service': {
    slug: 'haridwar-to-devprayag-taxi-service',
    from: 'Haridwar',
    to: 'Devprayag',
    distance: '95 km',
    duration: '3 Hours',
    sedanPrice: '₹3,000',
    suvPrice: '₹4,200',
    innovaPrice: '₹5,500',
    description: 'Scenic taxi ride from Haridwar to the holy confluence of Alaknanda and Bhagirathi rivers at Devprayag.',
    highlights: ['Sangam view stop', 'Pilgrimage-friendly drivers', 'Clean vehicles for long hills'],
    tollInfo: 'Tolls included.'
  },
  'haridwar-to-roorkee-taxi-service': {
    slug: 'haridwar-to-roorkee-taxi-service',
    from: 'Haridwar',
    to: 'Roorkee / IIT Roorkee',
    distance: '32 km',
    duration: '45 Mins',
    sedanPrice: '₹1,400',
    suvPrice: '₹2,000',
    innovaPrice: '₹2,800',
    description: 'Reliable one-way or roundtrip cab from Haridwar to IIT Roorkee and nearby industrial areas.',
    highlights: ['Door-to-door service', 'Fastag enabled cabs', '24/7 availability'],
    tollInfo: 'Toll included.'
  },

  // Hill Stations & Circuit Tours
  'haridwar-to-dhanaulti-taxi-service': {
    slug: 'haridwar-to-dhanaulti-taxi-service',
    from: 'Haridwar',
    to: 'Dhanaulti',
    distance: '100 km',
    duration: '3.5 Hours',
    sedanPrice: '₹3,500',
    suvPrice: '₹4,800',
    innovaPrice: '₹6,200',
    description: 'Cool mountain gateway trip from Haridwar to Eco Park Dhanaulti, Surkanda Devi, and Potato Farm.',
    highlights: ['Scenic forest route', 'Ideal for weekend getaways', 'Clean SUVs for steep climbs'],
    tollInfo: 'Tolls included.'
  },
  'haridwar-to-kanatal-taxi-service': {
    slug: 'haridwar-to-kanatal-taxi-service',
    from: 'Haridwar',
    to: 'Kanatal',
    distance: '105 km',
    duration: '3.5 Hours',
    sedanPrice: '₹3,600',
    suvPrice: '₹5,000',
    innovaPrice: '₹6,500',
    description: 'Offbeat hill vacation cab service from Haridwar to Kanatal camping grounds and resorts.',
    highlights: ['Direct resort drop', 'Mountain expert driver', 'Flexible stops on route'],
    tollInfo: 'Tolls included.'
  },
  'haridwar-to-new-tehri-taxi-service': {
    slug: 'haridwar-to-new-tehri-taxi-service',
    from: 'Haridwar',
    to: 'New Tehri / Tehri Dam',
    distance: '125 km',
    duration: '4 Hours',
    sedanPrice: '₹3,800',
    suvPrice: '₹5,200',
    innovaPrice: '₹6,800',
    description: 'Comfortable cab transfer to Tehri Jheel, Dobra Chanti Bridge, and water sports complexes.',
    highlights: ['Tehri Lake view points', 'Experienced hill drivers', 'Full day rental option'],
    tollInfo: 'Tolls included.'
  },
  'haridwar-to-chamba-taxi-service': {
    slug: 'haridwar-to-chamba-taxi-service',
    from: 'Haridwar',
    to: 'Chamba (Garhwal)',
    distance: '110 km',
    duration: '3.5 Hours',
    sedanPrice: '₹3,500',
    suvPrice: '₹4,800',
    innovaPrice: '₹6,200',
    description: 'Direct taxi service from Haridwar to Chamba town junction for Tehri or Mussoorie routes.',
    highlights: ['Punctual service', 'Safe mountain driving', 'AC / Non-AC choices'],
    tollInfo: 'Tolls included.'
  },
  'haridwar-to-lansdowne-taxi-service': {
    slug: 'haridwar-to-lansdowne-taxi-service',
    from: 'Haridwar',
    to: 'Lansdowne',
    distance: '125 km',
    duration: '4 Hours',
    sedanPrice: '₹3,800',
    suvPrice: '₹5,200',
    innovaPrice: '₹6,800',
    description: 'Peaceful pine forest taxi travel from Haridwar to Lansdowne cantonment town and Bhulla Lake.',
    highlights: ['Smooth hill drive', 'Direct hotel drop', 'Safe for family travel'],
    tollInfo: 'Tolls included.'
  },
  'haridwar-to-kotdwar-taxi-service': {
    slug: 'haridwar-to-kotdwar-taxi-service',
    from: 'Haridwar',
    to: 'Kotdwar',
    distance: '85 km',
    duration: '2.5 Hours',
    sedanPrice: '₹2,600',
    suvPrice: '₹3,600',
    innovaPrice: '₹4,800',
    description: 'Reliable one-way or roundtrip cab connecting Haridwar to Kotdwar railway station or town.',
    highlights: ['Plain and hill transition', 'Fastag enabled', 'Prompt pickup'],
    tollInfo: 'Tolls included.'
  },
  'haridwar-to-chopta-taxi-service': {
    slug: 'haridwar-to-chopta-taxi-service',
    from: 'Haridwar',
    to: 'Chopta / Tungnath Base',
    distance: '225 km',
    duration: '7 Hours',
    sedanPrice: '₹5,500',
    suvPrice: '₹7,500',
    innovaPrice: '₹9,500',
    description: 'Dedicated trekker cab service from Haridwar to Chopta (Mini Switzerland of Uttarakhand) for Tungnath & Chandrashila.',
    highlights: ['Trek luggage friendly', 'High altitude driver expert', 'Overnight stay package option'],
    tollInfo: 'Tolls & permits extra if required.'
  },
  'haridwar-to-pauri-taxi-service': {
    slug: 'haridwar-to-pauri-taxi-service',
    from: 'Haridwar',
    to: 'Pauri Garhwal',
    distance: '135 km',
    duration: '4.5 Hours',
    sedanPrice: '₹4,000',
    suvPrice: '₹5,500',
    innovaPrice: '₹7,200',
    description: 'Safe taxi booking from Haridwar to Pauri town with Himalayan mountain range views.',
    highlights: ['Kandoliya temple drop', 'Himalayan view stops', 'Clean mountain cabs'],
    tollInfo: 'Tolls included.'
  },
  'haridwar-to-srinagar-taxi-service': {
    slug: 'haridwar-to-srinagar-taxi-service',
    from: 'Haridwar',
    to: 'Srinagar Garhwal',
    distance: '130 km',
    duration: '4 Hours',
    sedanPrice: '₹3,800',
    suvPrice: '₹5,200',
    innovaPrice: '₹6,800',
    description: 'Direct taxi transfer from Haridwar to HNB Garhwal University or Medical College in Srinagar.',
    highlights: ['Smooth highway & hill drive', 'On-time pickup', 'Spacious cars'],
    tollInfo: 'Tolls included.'
  },

  // Char Dham Pilgrimage Routes
  'haridwar-to-kedarnath-taxi-service': {
    slug: 'haridwar-to-kedarnath-taxi-service',
    from: 'Haridwar',
    to: 'Kedarnath',
    distance: '235 km',
    duration: '8 Hours',
    sedanPrice: '₹6,000',
    suvPrice: '₹8,500',
    innovaPrice: '₹11,000',
    description: 'Special pilgrimage cab service from Haridwar to Sonprayag for Kedarnath Yatra.',
    highlights: ['Char Dham expert driver', 'Assistance with Yatra registration stops', 'Commercial high-ground clearance vehicles'],
    tollInfo: 'Green tax & parking extra at actuals.'
    
  },
  'haridwar-to-badrinath-taxi-service': {
    slug: 'haridwar-to-badrinath-taxi-service',
    from: 'Haridwar',
    to: 'Badrinath Dham',
    distance: '315 km',
    duration: '10 - 11 Hours',
    sedanPrice: '₹7,500',
    suvPrice: '₹10,500',
    innovaPrice: '₹13,500',
    description: 'Holy shrine journey cab from Haridwar to Badrinath Dham via Joshimath and Vishnuprayag.',
    highlights: ['Experienced long-route driver', 'Stops at Panch Prayag on request', 'Comfortable long-haul seating'],
    tollInfo: 'State permits and parking extra at actuals.'
  },
  'haridwar-to-gangotri-taxi-service': {
    slug: 'haridwar-to-gangotri-taxi-service',
    from: 'Haridwar',
    to: 'Gangotri Dham',
    distance: '285 km',
    duration: '9.5 Hours',
    sedanPrice: '₹7,000',
    suvPrice: '₹9,800',
    innovaPrice: '₹12,500',
    description: 'Pilgrimage taxi service from Haridwar to Gangotri via Uttarkashi and Harsil Valley.',
    highlights: ['Harsil valley stopover', 'High altitude mountain safety', 'Sanitised air-conditioned vehicles'],
    tollInfo: 'Tolls included.'
  },
  'haridwar-to-yamunotri-taxi-service': {
    slug: 'haridwar-to-yamunotri-taxi-service',
    from: 'Haridwar',
    to: 'Janki Chatti (Yamunotri Base)',
    distance: '240 km',
    duration: '8 Hours',
    sedanPrice: '₹6,200',
    suvPrice: '₹8,800',
    innovaPrice: '₹11,500',
    description: 'Dedicated Yatra cab from Haridwar to Janki Chatti trek starting point for Yamunotri Dham.',
    highlights: ['Barkot stopover assistance', 'Yatra route specialist drivers', 'Reliable commercial fleet'],
    tollInfo: 'Tolls included.'
  }
};