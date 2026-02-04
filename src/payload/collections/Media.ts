import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'section',
      type: 'select',
      options: [
        { label: 'Hero', value: 'hero' },
        { label: 'Blog', value: 'blog' },
        { label: 'Projects', value: 'projects' },
        { label: 'Services', value: 'services' },
        { label: 'Testimonials', value: 'testimonials' },
        { label: 'Global', value: 'global' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
