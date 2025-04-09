
// Analytics utility for tracking page views and events

// Declare global gtag function
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string | undefined,
      params?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a page view in Google Analytics
 * @param path The path to track
 * @param title The page title
 */
export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('config', 'G-1VKQN2FKGX', {
        page_path: path,
        page_title: title
      });
      console.log(`📊 Page view tracked: ${path}`);
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }
};

/**
 * Track an event in Google Analytics
 * @param action The event action
 * @param category The event category
 * @param label Optional event label
 * @param value Optional event value
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
      console.log(`📊 Event tracked: ${action} (${category})`);
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  }
};
