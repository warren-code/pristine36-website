interface CalendlyEvent {
  event: string;
  payload?: unknown;
}

interface CalendlyWidget {
  initInlineWidget: (options: {
    url: string;
    parentElement: Element | null;
    prefill?: Record<string, unknown>;
    utm?: Record<string, string>;
  }) => void;
  initPopupWidget: (options: {
    url: string;
    prefill?: Record<string, unknown>;
    utm?: Record<string, string>;
  }) => void;
  initBadgeWidget: (options: {
    url: string;
    text?: string;
    color?: string;
    textColor?: string;
    branding?: boolean;
  }) => void;
  closePopupWidget: () => void;
  destroyBadgeWidget: () => void;
  showPopupWidget: (url?: string) => void;
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget;
  }
}

export {};
