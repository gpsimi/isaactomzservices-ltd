  import React from 'react'

export const JsonLd = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ConstructionBusiness',
    name: 'Isaac Tomz Services Ltd',
    image: 'https://isaactomzservices.com/images/og-image.jpg',
    '@id': 'https://isaactomzservices.com',
    url: 'https://isaactomzservices.com',
    telephone: '+2348000000000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Lagos',
      postalCode: '100001',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.5244,
      longitude: 3.3792,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.facebook.com/isaactomzservices',
      'https://twitter.com/isaactomz',
      'https://www.instagram.com/isaactomz',
      'https://www.linkedin.com/company/isaactomzservices',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
