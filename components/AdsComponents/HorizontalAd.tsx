'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function HorizontalAd() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        ; (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  return (
    <div className="w-full my-4 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '728px',
          maxWidth: '100%',
        }}
        data-ad-client="ca-pub-3990057144186847"
        data-ad-slot="6932865815"
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />
    </div>
  )
}