export interface SeasonalEvent {
  id: string;
  name: string;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  component: string;
}

export const SEASONAL_EVENTS: SeasonalEvent[] = [
  {
    id: 'snow',
    name: 'Snow Effect',
    startMonth: 12, // Декабрь
    startDay: 15,
    endMonth: 1, // Январь
    endDay: 15,
    component: 'SnowEffect',
  },
  // Легко добавлять новые эффекты:
  // {
  //   id: 'hearts',
  //   name: 'Valentine Hearts',
  //   startMonth: 2,
  //   startDay: 1,
  //   endMonth: 2,
  //   endDay: 14,
  //   component: 'HeartsEffect',
  // },
];

export function isEventActive(event: SeasonalEvent): boolean {
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // getMonth возвращает 0-11
  const currentDay = today.getDate();

  // Если событие в одном месяце
  if (event.startMonth === event.endMonth) {
    return currentMonth === event.startMonth && currentDay >= event.startDay && currentDay <= event.endDay;
  }

  // Если событие пересекает несколько месяцев (как снег: декабрь-январь)
  if (event.startMonth < event.endMonth) {
    // Нормальный случай (в пределах одного года)
    if (currentMonth >= event.startMonth && currentMonth <= event.endMonth) {
      if (currentMonth === event.startMonth) {
        return currentDay >= event.startDay;
      }
      if (currentMonth === event.endMonth) {
        return currentDay <= event.endDay;
      }
      return true;
    }
  } else {
    // Случай, когда событие пересекает новый год (например, 12 месяц -> 1 месяц)
    if (currentMonth >= event.startMonth || currentMonth <= event.endMonth) {
      if (currentMonth === event.startMonth) {
        return currentDay >= event.startDay;
      }
      if (currentMonth === event.endMonth) {
        return currentDay <= event.endDay;
      }
      return true;
    }
  }

  return false;
}
