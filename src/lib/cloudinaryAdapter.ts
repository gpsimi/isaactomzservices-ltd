import { Adapter, GeneratedAdapter } from '@payloadcms/plugin-cloud-storage/types'
import { v2 as cloudinary } from 'cloudinary'
import path from 'path'
import { Readable } from 'stream'

interface CloudinaryConfig {
  cloud_name: string
  api_key: string
  api_secret: string
}

export const cloudinaryAdapter = (config: CloudinaryConfig): Adapter => {
  cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.api_key,
    api_secret: config.api_secret,
  })

  return ({ collection, prefix }): GeneratedAdapter => {
    return {
      name: 'cloudinary',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      handleUpload: async ({ file, data }: { file: any; data: any }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new Promise<any>((resolve, reject) => { // Payload types might expect Partial<File> or similar, sticking to 'any' for result currently or Partial<File>
          const folder = data?.section ? `${prefix ? `${prefix}/` : ''}${data.section}` : prefix
          
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              public_id: path.parse(file.filename).name,
              folder,
              overwrite: true,
              resource_type: 'auto',
            },
            (error, result) => {
              if (error) return reject(error)
              resolve({
                filename: result?.public_id || file.filename,
                url: result?.secure_url,
              })
            }
          )
          
          const stream = new Readable()
          stream.push(file.buffer)
          stream.push(null)
          stream.pipe(uploadStream)
        })
      },
      handleDelete: async ({ filename }) => {
        // Delete using the public_id (filename)
        // If the filename contains the folder/prefix, Cloudinary expects public_id to include it?
        // Usually Payload stores the filename as returned by handleUpload.
        // If handleUpload returned public_id (which might include folder if unrelated to prefix, but here prefix is set in upload_stream via 'folder')
        // Cloudinary public_id usually INCLUDES the folder path if one was specified.
        await cloudinary.uploader.destroy(filename)
      },
      generateURL: ({ filename }) => {
        return cloudinary.url(filename, { secure: true })
      },
      staticHandler: () => {
        return new Response('Not found', { status: 404 })
      },
    }
    }
}
