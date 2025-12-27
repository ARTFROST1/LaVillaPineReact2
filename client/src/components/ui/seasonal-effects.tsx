import { SEASONAL_EVENTS, isEventActive } from '@/lib/seasonal-events';
import { SnowEffect } from './snow-effect';

export function SeasonalEffects() {
  return (
    <>
      {SEASONAL_EVENTS.map((event) => {
        if (!isEventActive(event)) return null;

        switch (event.component) {
          case 'SnowEffect':
            return <SnowEffect key={event.id} />;
          default:
            return null;
        }
      })}
    </>
  );
}
