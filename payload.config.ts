import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'

import { Users } from './src/payload/collections/Users'
import { Media } from './src/payload/collections/Media'
import { Projects } from './src/payload/collections/Projects'
import { Testimonials } from './src/payload/collections/Testimonials'
import { Blog } from './src/payload/collections/Blog'
import { Services } from './src/payload/collections/Services'
import { BlogCategories } from './src/payload/collections/BlogCategories'
import { ProjectCategories } from './src/payload/collections/ProjectCategories'
import { Messages } from './src/payload/collections/Messages'
import { cloudinaryAdapter } from './src/lib/cloudinaryAdapter'

import { resendAdapter } from '@payloadcms/email-resend'
import { CustomLogo } from './src/components/payload/CustomLogo'
import { CustomIcon } from './src/components/payload/CustomIcon'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: CustomLogo as any,
        Icon: CustomIcon as any,
      },
    },
  },
  collections: [Users, Media, Projects, Testimonials, Blog, Services, BlogCategories, ProjectCategories, Messages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  email: resendAdapter({
    defaultFromAddress: 'onboarding@resend.dev',
    defaultFromName: 'Isaac Tomz Services',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    cloudStoragePlugin({
      collections: {
        media: {
          adapter: cloudinaryAdapter({
            cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
            api_key: process.env.CLOUDINARY_API_KEY || '',
            api_secret: process.env.CLOUDINARY_API_SECRET || '',
          }),
        },
      },
    }),
  ],
})
