export const SERVER_BASE_URL =
  import.meta.env.MODE === 'production'
    ? 'https://donable-backend-production.up.railway.app'
    : 'http://localhost:3000';
