import { Adapter, GeneratedAdapter } from '@payloadcms/plugin-cloud-storage/types'
import path from 'path'

interface CloudinaryConfig {
  cloud_name: string
  api_key: string
  api_secret: string
}

export const cloudinaryAdapter = (config: CloudinaryConfig): Adapter => {
  return ({ prefix }): GeneratedAdapter => {
    return {
      name: 'cloudinary',
      handleUpload: async ({ file, data }) => {
        const { v2: cloudinary } = await import('cloudinary')
        const { Readable } = await import('stream')

        cloudinary.config({
          cloud_name: config.cloud_name,
          api_key: config.api_key,
          api_secret: config.api_secret,
        })

        return new Promise<void>((resolve, reject) => {
          const folder = data?.section ? `${prefix ? `${prefix}/` : ''}${data.section}` : prefix

          const uploadStream = cloudinary.uploader.upload_stream(
            {
              public_id: path.parse(file.filename).name,
              folder,
              overwrite: true,
              resource_type: 'auto',
            },
            (error, _result) => {
              if (error) return reject(error)
              resolve()
            },
          )

          const stream = new Readable()
          stream.push(file.buffer)
          stream.push(null)
          stream.pipe(uploadStream)
        })
      },
      handleDelete: async ({ filename }) => {
        const { v2: cloudinary } = await import('cloudinary')
        cloudinary.config({
          cloud_name: config.cloud_name,
          api_key: config.api_key,
          api_secret: config.api_secret,
        })
        await cloudinary.uploader.destroy(filename)
      },
      generateURL: ({ filename }) => {
        return `https://res.cloudinary.com/${config.cloud_name}/image/upload/${filename}`
      },
      staticHandler: () => {
        return new Response('Not found', { status: 404 })
      },
    }
  }
}
