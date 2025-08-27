export {}

interface CalendlyWidget {
  initInlineWidget: (options: {
    url: string
    parentElement: Element | null
    prefill?: Record<string, unknown>
    utm?: Record<string, string>
  }) => void
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget
  }
}
