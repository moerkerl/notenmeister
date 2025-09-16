import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

interface TrackingParams {
  trackingParams: string | null
  gclid: string | null
  utmParams: {
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    utm_term?: string
    utm_content?: string
  }
}

export function useTrackingParams(): TrackingParams {
  const searchParams = useSearchParams()
  const [trackingData, setTrackingData] = useState<TrackingParams>({
    trackingParams: null,
    gclid: null,
    utmParams: {}
  })

  useEffect(() => {
    // Get tracking parameters from URL
    const gclid = searchParams.get('gclid')
    const utmSource = searchParams.get('utm_source')
    const utmMedium = searchParams.get('utm_medium')
    const utmCampaign = searchParams.get('utm_campaign')
    const utmTerm = searchParams.get('utm_term')
    const utmContent = searchParams.get('utm_content')

    // Store in sessionStorage for later use
    if (gclid) {
      sessionStorage.setItem('gclid', gclid)
    }

    // Create tracking params object
    const params: Record<string, string> = {}
    if (gclid) params.gclid = gclid
    if (utmSource) params.utm_source = utmSource
    if (utmMedium) params.utm_medium = utmMedium
    if (utmCampaign) params.utm_campaign = utmCampaign
    if (utmTerm) params.utm_term = utmTerm
    if (utmContent) params.utm_content = utmContent

    // Update state
    setTrackingData({
      trackingParams: Object.keys(params).length > 0 ? JSON.stringify(params) : null,
      gclid: gclid || sessionStorage.getItem('gclid'),
      utmParams: {
        utm_source: utmSource || undefined,
        utm_medium: utmMedium || undefined,
        utm_campaign: utmCampaign || undefined,
        utm_term: utmTerm || undefined,
        utm_content: utmContent || undefined
      }
    })
  }, [searchParams])

  return trackingData
}