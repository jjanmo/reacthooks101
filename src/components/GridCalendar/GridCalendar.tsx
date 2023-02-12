import useFbStorage from '@hooks/useFbStorage'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function GridCalendar() {
  const { getImage } = useFbStorage()
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    getImage('images/months/apr.png').then((url) => setImageUrl(url))
  }, [imageUrl])

  return <div>{imageUrl && <Image src={imageUrl} alt="month" width={100} height={100} />}</div>
}
