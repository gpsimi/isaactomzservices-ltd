import type { CollectionConfig } from 'payload'
import formatSlug from '../utils/formatSlug'

export const BlogCategories: CollectionConfig = {
  slug: 'blog-categories',
  labels: {
    singular: 'Blog Category',
    plural: 'Blog Categories',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
  ],
}
