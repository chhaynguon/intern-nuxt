// ~/request/Service/service.master.ts
import axios, { type AxiosResponse } from 'axios'

const API = axios.create({
  baseURL: import.meta.env.NUXT_PUBLIC_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  },
})

// --- File Download ---
export const downloadFile = async (fileName: string, path: string) => {
  try {
    const response: AxiosResponse<Blob> = await API.get(`${path}/${fileName}`, {
      responseType: 'blob',
    })
    return response
  } catch (err) {
    console.error('Download Error:', err)
    throw err
  }
}

// --- File Upload ---
export const uploadFile = async (path: string, fileData: FormData) => {
  try {
    const response = await API.post(path, fileData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response
  } catch (err) {
    console.error('Upload Error:', err)
    throw err
  }
}

// --- Generic GET ---
export const get = async (path: string, params?: any) => {
  const response = await API.get(path, { params })
  return response
}

// --- Generic POST ---
export const post = async (path: string, data: any) => {
  const response = await API.post(path, data)
  return response
}

// --- Optional Export Default ---
export default {
  downloadFile,
  uploadFile,
  get,
  post,
}
