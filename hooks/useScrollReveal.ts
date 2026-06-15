'use client'
import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.07, rootMargin: '0px 0px -36px 0px' }
    )
    document.querySelectorAll('.reveal, .stagger').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
