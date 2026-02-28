import { useCmsContent } from './useCmsContent'

const SITE_ID = 'lembressar'

const DEFAULTS = {
  business_name: "L\u2019Embrasser",
  tagline: '',
  phone: '',
  email: 'contact@lembressar.com',
  address: "24 Rue Saint-Louis en l\u2019\u00cele, 75004 Paris, France",
  hours: {
    monday: 'Closed',
    tuesday: 'Closed',
    wednesday: '10h-18h / 10am-6pm',
    thursday: '10h-18h / 10am-6pm',
    friday: '10h-18h / 10am-6pm',
    saturday: '10h-18h / 10am-6pm',
    sunday: '14h-18h / 2pm-6pm',
  },
  services: [
    { title: 'Peintures Originales', price: '150' },
    { title: 'Tirages Photographiques', price: '80' },
    { title: 'C\u00e9ramiques Artisanales', price: '45' },
    { title: "Objets d\u2019Art", price: '35' },
  ],
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  },
  promotions: [],
  testimonials: [],
}

export function useLembrasserContent() {
  const { content, loading, error } = useCmsContent(SITE_ID, DEFAULTS)

  // Extract prices from CMS services (keyed by index)
  const prices = content.services.map(s => parseInt(s.price, 10) || 0)

  return {
    loading,
    error,
    email: content.email,
    address: content.address,
    social: content.social,
    hours: content.hours,
    prices,
  }
}
