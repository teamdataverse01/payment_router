import { NextRequest } from 'next/server';

export interface GeoLocation {
  country: string;
  countryCode: string;
  city?: string;
  region?: string;
}

/**
 * Extract geolocation from request headers
 * Works with Vercel edge functions and common IP geolocation services
 */
export function getGeolocationFromRequest(request: NextRequest): GeoLocation {
  // Vercel edge geolocation headers
  const country = request.headers.get('x-vercel-ip-country') || '';
  const countryCode = request.headers.get('x-vercel-ip-country-code') || '';
  const city = request.headers.get('x-vercel-ip-city') || '';
  const region = request.headers.get('x-vercel-ip-region') || '';

  return {
    country,
    countryCode: countryCode.toUpperCase(),
    city,
    region,
  };
}

/**
 * Determine which funnel URL to use based on country code
 */
export function getFunnelURL(countryCode: string): string {
  const normalizedCode = countryCode.toUpperCase();

  // Nigeria - Form submission
  if (normalizedCode === 'NG') {
    return (
      process.env.NEXT_PUBLIC_NG_FUNNEL_URL ||
      'https://www.dataverseconsultingsolutions.com/dpobootcamp-68c8959f-2c116596'
    );
  }

  // All other countries - Booking session
  return (
    process.env.NEXT_PUBLIC_DEFAULT_FUNNEL_URL ||
    'https://www.dataverseconsultingsolutions.com/dpobootcamp-68c8959f-2c116596-3129f127'
  );
}
