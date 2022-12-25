import Airtable from 'airtable'

export const base = new Airtable({apiKey: import.meta.env.VITE_API_KEY}).base(import.meta.env.VITE_APP_ID);
