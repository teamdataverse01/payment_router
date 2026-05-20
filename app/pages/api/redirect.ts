import { NextApiRequest, NextApiResponse } from 'next';
import { getGeolocationFromRequest, getFunnelURL } from '@/lib/geolocation';

/**
 * Server-side redirect endpoint
 * Detects user location and redirects to appropriate funnel
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get IP from request headers (x-forwarded-for or x-real-ip)
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
      req.headers['x-real-ip'] as string ||
      req.socket.remoteAddress ||
      'unknown';

    // Get country from headers (these are set by Vercel or your proxy)
    const countryCode = (req.headers['x-vercel-ip-country-code'] as string) || 
      (req.headers['cf-ipcountry'] as string) || 
      'DEFAULT';

    const funnelURL = getFunnelURL(countryCode);

    // Log the redirect (useful for analytics)
    console.log(`[Redirect] IP: ${ip} | Country: ${countryCode} | Target: ${funnelURL}`);

    // Redirect to the appropriate funnel
    res.redirect(302, funnelURL);
  } catch (error) {
    console.error('Redirect error:', error);
    // Fallback redirect on error
    res.redirect(302, process.env.NEXT_PUBLIC_DEFAULT_FUNNEL_URL || 'https://courses.systeme.io/default-funnel');
  }
}
