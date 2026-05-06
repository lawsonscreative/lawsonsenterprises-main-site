import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lawsons Enterprises Ltd',
    short_name: 'Lawsons',
    description:
      'UK product company building cloud control assurance, SaaS platforms and specialist technology services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F8FA',
    theme_color: '#4F46E5',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
