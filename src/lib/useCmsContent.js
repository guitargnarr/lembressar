import { useState, useEffect } from 'react'

const CMS_API = 'https://client-cms-api.onrender.com'
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

function getCacheKey(siteId) {
  return `cms_content_${siteId}`
}

function readCache(siteId) {
  try {
    const raw = localStorage.getItem(getCacheKey(siteId))
    if (!raw) return null
    const entry = JSON.parse(raw)
    if (Date.now() - entry.timestamp < CACHE_TTL) {
      return entry.data
    }
    return null
  } catch {
    return null
  }
}

function writeCache(siteId, data) {
  try {
    localStorage.setItem(getCacheKey(siteId), JSON.stringify({ data, timestamp: Date.now() }))
  } catch { /* localStorage full or unavailable */ }
}

function deepMerge(defaults, overrides) {
  const result = { ...defaults }
  for (const key of Object.keys(overrides)) {
    const val = overrides[key]
    if (val === null || val === undefined) continue
    if (Array.isArray(val) && val.length > 0) {
      result[key] = val
    } else if (typeof val === 'object' && !Array.isArray(val)) {
      const defaultVal = result[key]
      if (defaultVal && typeof defaultVal === 'object' && !Array.isArray(defaultVal)) {
        result[key] = deepMerge(defaultVal, val)
      } else {
        result[key] = val
      }
    } else {
      result[key] = val
    }
  }
  return result
}

export function useCmsContent(siteId, defaults) {
  const [content, setContent] = useState(() => {
    const cached = readCache(siteId)
    return cached ? deepMerge(defaults, cached) : defaults
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function fetchContent() {
      try {
        const res = await fetch(`${CMS_API}/api/sites/${siteId}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if (cancelled) return
        writeCache(siteId, data)
        setContent(deepMerge(defaults, data))
        setError(false)
      } catch {
        if (cancelled) return
        setError(true)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchContent()
    return () => { cancelled = true }
  }, [siteId]) // eslint-disable-line react-hooks/exhaustive-deps

  return { content, loading, error }
}
