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

  // US and US territories
  if (['US', 'PR', 'VI', 'GU', 'AS', 'MP'].includes(normalizedCode)) {
    return process.env.NEXT_PUBLIC_US_FUNNEL_URL || 'https://courses.systeme.io/us-funnel';
  }

  // Nigeria
  if (normalizedCode === 'NG') {
    return process.env.NEXT_PUBLIC_NG_FUNNEL_URL || 'https://courses.systeme.io/ng-funnel';
  }

  // Default for all other countries
  return (
    process.env.NEXT_PUBLIC_DEFAULT_FUNNEL_URL ||
    'https://courses.systeme.io/default-funnel'
  );
}
