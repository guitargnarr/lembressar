import { createContext, useContext } from 'react'
import { useLembrasserContent } from './cmsContent'

const CmsContext = createContext(null)

export function CmsProvider({ children }) {
  const cms = useLembrasserContent()
  return <CmsContext.Provider value={cms}>{children}</CmsContext.Provider>
}

export function useCms() {
  return useContext(CmsContext)
}
