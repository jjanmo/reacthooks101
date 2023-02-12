import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { app, firebaseConfig } from '@config/firebase'
import { useEffect, useRef } from 'react'

const FB_BASE_URL = 'https://firebasestorage.googleapis.com'

export default function useFbStorage() {
  const storage = getStorage(app)

  // get ref
  // upload
  // download
  // delete

  const getImage = async (path: string) => {
    const result = await getDownloadURL(ref(storage, path))

    return result
  }

  return {
    getImage,
  }
}
