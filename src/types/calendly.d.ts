interface CalendlyWidget {
  initInlineWidget: (options: {
    url: string
    parentElement: Element | null
    prefill?: any
    utm?: any
  }) => void
}

interface Window {
  Calendly?: CalendlyWidget
}
