import type { CollectionConfig } from 'payload'
import formatSlug from '../utils/formatSlug'

export const ProjectCategories: CollectionConfig = {
  slug: 'project-categories',
  labels: {
    singular: 'Project Category',
    plural: 'Project Categories',
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
