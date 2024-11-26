import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['ru'],

    resources: {
      ru: {
        translations: {
          CLEAR: 'Ясно',
          PARTLY_CLOUDY: 'Малооблачно',
          CLOUDY: 'Облачно',
          OVERCAST: 'Пасмурно',
          LIGHT_RAIN: 'Небольшой дождь',
          RAIN: 'Дождь',
          HEAVY_RAIN: 'Сильный дождь',
          SHOWERS: 'Ливень',
          SLEET: 'Мокрый снег',
          LIGHT_SNOW: 'Небольшой снег',
          SNOW: 'Снег',
          SNOWFALL: 'Снегопад',
          HAIL: 'Град',
          THUNDERSTORM: 'Гроза',
          THUNDERSTORM_WITH_RAIN: 'Гроза с дождем',
          THUNDERSTORM_WITH_HAIL: 'Гроза с градом',
          CALM: 'Штиль',
          NORTH: 'Северный',
          NORTH_EAST: 'Северо-восточный',
          EAST: 'Восточный',
          SOUTH_EAST: 'Юго-восточный',
          SOUTH: 'Южный',
          SOUTH_WEST: 'Юго-западный',
          WEST: 'Западный',
          NORTH_WEST: 'Северо-западный',
          feelsLike: 'Ощущается как',
          forecast: 'Прогноз на',
          day: 'дня',
          days: 'дней',
          '0_day': 'Вс',
          '1_day': 'Пн',
          '2_day': 'Вт',
          '3_day': 'Ср',
          '4_day': 'Чт',
          '5_day': 'Пт',
          '6_day': 'Сб',
          '0_month': 'Янв',
          '1_month': 'Фев',
          '2_month': 'Мар',
          '3_month': 'Апр',
          '4_month': 'Май',
          '5_month': 'Июня',
          '6_month': 'Июл',
          '7_month': 'Авг',
          '8_month': 'Сен',
          '9_month': 'Окт',
          '10_month': 'Нояб',
          '11_month': 'Дек',
        },
      },
    },

    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export const i18 = i18next;
