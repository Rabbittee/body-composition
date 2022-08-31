import ga4 from 'react-ga4';

const TRACKING_ID = process.env.REACT_APP_GA_MEASUREMENT_ID as string;
const isProduction = process.env.NODE_ENV === 'production';

export const init = () =>
  ga4.initialize(TRACKING_ID, {
    testMode: !isProduction,
  });

// Automatically collected events
export const sendEvent = (name: string) =>
  ga4.event('screen_view', {
    app_name: 'body composition',
    screen_name: name,
  });

export const sendPageview = (path: string) =>
  ga4.send({
    hitType: 'pageview',
    page: path,
  });
