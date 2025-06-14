import { CMS } from "./constants"

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const pageview = (url: string) => {
  window.gtag("config", CMS.GoogleAnalyticsId, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }: { action: string; category: string; label: string; value: string | number }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
