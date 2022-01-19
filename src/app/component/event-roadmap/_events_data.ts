

const M: Month[] = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',];

export type Month = 'Январь' | 'Февраль' | 'Март' | 'Апрель' | 'Май' | 'Июнь' | 'Июль' | 'Август' | 'Сентябрь' | 'Октябрь' | 'Ноябрь' | 'Декабрь'

export interface MonthData {
  name: Month;
  major: any;
  event_content: any;
}


const events_data = {
  2017: Array<MonthData>(12)
}

M.forEach((m, index) => {
  events_data[2017][index] = { name: m, major: 'dasda', event_content: 'fdsfsd' };
})

export const events = events_data;

