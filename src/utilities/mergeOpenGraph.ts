import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Isaac Tomz Services Ltd - Premier Construction & Engineering Solutions in Nigeria.',
  images: [
    {
      url: `${getServerSideURL()}/images/og-image.jpg`,
    },
  ],
  siteName: 'Isaac Tomz Services Ltd',
  title: 'Isaac Tomz Services Ltd',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
