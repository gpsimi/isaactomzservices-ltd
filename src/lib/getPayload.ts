
import { getPayload as getPayloadLocal } from 'payload'
import config from '../../payload.config'
import type { Payload } from 'payload'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached = (global as any).payload

if (!cached) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cached = (global as any).payload = {
    client: null,
    promise: null,
  }
}

export const getPayload = async (): Promise<Payload> => {
  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    cached.promise = getPayloadLocal({
      config,
    })
  }

  try {
    cached.client = await cached.promise
  } catch (e: unknown) {
    cached.promise = null
    throw e
  }

  return cached.client
}
