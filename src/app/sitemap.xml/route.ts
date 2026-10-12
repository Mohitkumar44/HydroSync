import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hydrosync.in';
  
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/internships',
    '/courses',
    '/live-classes',
    '/events',
    '/for-schools',
    '/for-colleges',
    '/projects',
    '/team',
    '/gallery',
    '/blog',
    '/task-progress',
    '/contact',
    '/apply',
    '/careers',
    '/certifications',
    '/partners',
    '/testimonials',
    '/faq',
    '/privacy-policy',
    '/terms',
    '/refund-policy',
    '/forum',
    '/portals',
    '/portals/student',
    '/portals/institution',
    '/portals/organizer',
    '/portals/admin',
    '/payment',
    '/setup',
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map((route) => {
    return `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
