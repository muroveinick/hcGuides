

const M: Months[] = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',];

export type Months = 'Январь' | 'Февраль' | 'Март' | 'Апрель' | 'Май' | 'Июнь' | 'Июль' | 'Август' | 'Сентябрь' | 'Октябрь' | 'Ноябрь' | 'Декабрь'

export interface Month {
  name: Months;
  major: any;
  event_content: any;
}


const events_data = {
  2017: Array<Month>(12)
}

M.forEach((m, index) => {
  events_data[2017][index] = { name: m, major: 'dasda', event_content: 'fdsfsd' };
})

export const events = events_data;

