import { useEffect } from 'react'
export default function RefreshToTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return null
}
