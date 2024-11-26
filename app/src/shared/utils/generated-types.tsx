import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  Time: { input: any; output: any };
  Timestamp: { input: any; output: any };
  Url: { input: any; output: any };
};

/** Blog post alternative on other language. */
export type Alternate = {
  __typename?: 'Alternate';
  /** Language of the post. */
  language: Scalars['String']['output'];
  /** Slug of the post. */
  slug: Scalars['String']['output'];
};

/** Limits for `pollution.aqi` parameter. */
export type AqiLimits = {
  __typename?: 'AqiLimits';
  /** Values less or equal to this limit characterize a hazardous air quality. */
  Hazardous: Scalars['Int']['output'];
  /** Values less or equal to this limit characterize a unhealthy air quality for sensitive groups. */
  bad: Scalars['Int']['output'];
  /** Values less or equal to this limit characterize a good air quality. */
  good: Scalars['Int']['output'];
  /**
   * Values less than this limit characterize a poor air quality,
   * greater than – elevated air quality index.
   */
  high: Scalars['Int']['output'];
  /** Values less or equal to this limit characterize a acceptable air quality. */
  moderate: Scalars['Int']['output'];
  /** Values less than this limit characterize normal air quality. */
  norm: Scalars['Int']['output'];
  /** Values less or equal to this limit characterize a unhealthy air quality. */
  unhealthy: Scalars['Int']['output'];
  /** Values less or equal to this limit characterize a very unhealthy air quality. */
  veryUnhealthy: Scalars['Int']['output'];
};

/** Interface for blog information. */
export type Blog = {
  __typename?: 'Blog';
  /** Author of the blog. */
  author?: Maybe<BlogAuthor>;
  /** Start time of blog. */
  beginDate: Scalars['Timestamp']['output'];
  /** Time of blog creation. */
  createdAt: Scalars['Timestamp']['output'];
  /** Blog SEO description. */
  description: Scalars['String']['output'];
  /** Domain at which blog should be displayed. */
  domain: Scalars['String']['output'];
  /** End time of blog. */
  endDate: Scalars['Timestamp']['output'];
  /** Link for blog image. */
  imageLink: Scalars['String']['output'];
  /** Blog SEO keywords. */
  keywords: Scalars['String']['output'];
  /** Start time of blog rotation. */
  rotationBeginDate: Scalars['Timestamp']['output'];
  /** End time of blog rotation. */
  rotationEndDate: Scalars['Timestamp']['output'];
  /** Unique name of blog entry. */
  slug: Scalars['String']['output'];
  /** Alternative slugs and languages. */
  slugs: Array<Alternate>;
  /** Short blog description. */
  summary: Scalars['String']['output'];
  /** Blog content with markdown. */
  text: Scalars['String']['output'];
  /** Blog headline. */
  title: Scalars['String']['output'];
  /** Blog topic. */
  topic?: Maybe<BlogTopic>;
};

/** Interface for blog author information. */
export type BlogAuthor = {
  __typename?: 'BlogAuthor';
  /** Author's name. */
  name: Scalars['String']['output'];
  /** Unique name of author's entry. */
  slug: Scalars['String']['output'];
};

/** Interface for blog topic information. */
export type BlogTopic = {
  __typename?: 'BlogTopic';
  /** Topic's name. */
  name: Scalars['String']['output'];
  /** Unique name of topic's entry. */
  slug: Scalars['String']['output'];
};

/** Blogs by different types of geographical requests. */
export type Blogs = {
  __typename?: 'Blogs';
  /** Blogs without location filtering. */
  articles: Array<Blog>;
  /** Blog authors without */
  authorBySlug?: Maybe<BlogAuthor>;
  /** Blogs for a location with `geoId`. */
  byGeoId: Array<Blog>;
  /** Blogs for a geographical point with `lat` and `lon` coordinates. */
  byPoint: Array<Blog>;
  /** One blog by slug. */
  bySlug?: Maybe<Blog>;
  /** All available topics */
  topics: Array<BlogTopic>;
};

/** Blogs by different types of geographical requests. */
export type BlogsArticlesArgs = {
  authorSlug?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyRotating?: InputMaybe<Scalars['Boolean']['input']>;
  shuffle?: InputMaybe<Scalars['Boolean']['input']>;
  topicSlug?: InputMaybe<Scalars['String']['input']>;
};

/** Blogs by different types of geographical requests. */
export type BlogsAuthorBySlugArgs = {
  slug: Scalars['String']['input'];
};

/** Blogs by different types of geographical requests. */
export type BlogsByGeoIdArgs = {
  authorSlug?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyRotating?: InputMaybe<Scalars['Boolean']['input']>;
  request: GeoIdInput;
  shuffle?: InputMaybe<Scalars['Boolean']['input']>;
  topicSlug?: InputMaybe<Scalars['String']['input']>;
};

/** Blogs by different types of geographical requests. */
export type BlogsByPointArgs = {
  authorSlug?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  onlyRotating?: InputMaybe<Scalars['Boolean']['input']>;
  request: PointInput;
  shuffle?: InputMaybe<Scalars['Boolean']['input']>;
  topicSlug?: InputMaybe<Scalars['String']['input']>;
};

/** Blogs by different types of geographical requests. */
export type BlogsBySlugArgs = {
  slug: Scalars['String']['input'];
};

/** Blogs by different types of geographical requests. */
export type BlogsTopicsArgs = {
  domain?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shuffle?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Rectangle where data is available. */
export type Bounds = {
  __typename?: 'Bounds';
  lat: BoundsRange;
  lon: BoundsRange;
};

/** The range of coordinates for one of the dimensions. */
export type BoundsRange = {
  __typename?: 'BoundsRange';
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
};

/** Warning about abnormal weather events (CAP). */
export type CapWarning = Warning & {
  __typename?: 'CAPWarning';
  beginTime: Scalars['Time']['output'];
  beginTimestamp: Scalars['Timestamp']['output'];
  code: Scalars['String']['output'];
  endTime: Scalars['Time']['output'];
  endTimestamp: Scalars['Timestamp']['output'];
  header: Scalars['String']['output'];
  icon: Scalars['Url']['output'];
  instruction?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  sender?: Maybe<Scalars['String']['output']>;
  significance: EmercomSignificance;
  web?: Maybe<Scalars['String']['output']>;
  yandexWeatherUrl: Scalars['Url']['output'];
};

/** Warning about abnormal weather events (CAP). */
export type CapWarningIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/** Warning about abnormal weather events (CAP). */
export type CapWarningMessageArgs = {
  language?: InputMaybe<Language>;
};

/** Average weather statistics for 10 years. */
export type Climate = {
  __typename?: 'Climate';
  /** Statistics grouped by day. */
  days: Array<ClimateDay>;
  /** Statistics grouped by month. */
  months: Array<ClimateMonth>;
  /** Statistics grouped by week. */
  weeks: Array<ClimateWeek>;
  /** Climate zone description. */
  zone: ClimateZone;
};

/** Average weather statistics for 10 years. */
export type ClimateDaysArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  loop?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Average weather statistics for 10 years. */
export type ClimateMonthsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  loop?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Average weather statistics for 10 years. */
export type ClimateWeeksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  loop?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Statistics for one day. */
export type ClimateDay = {
  __typename?: 'ClimateDay';
  /** Average cloudiness for this day. */
  cloudiness: Cloudiness;
  /**
   * The general weather condition
   * that fits to `cloudiness`, `precStrength` and `precType`.
   */
  condition: Condition;
  /**
   * The same temperature values may be perceived differently
   * depending on humidity, wind strength, and ultraviolet radiation.
   * `feelsLike` shows how comfortable the weather conditions are,
   * taking into account all these factors.
   */
  feelsLike: Scalars['Int']['output'];
  /**
   * Holiday on this day.
   * Skipped when the day is a normal weekday.
   */
  holiday?: Maybe<Holiday>;
  /**
   * The percentage of the mass fraction of water vapor in the air
   * to the maximum possible at the current temperature.
   * Contains the average value for this day.
   */
  humidity: Scalars['Int']['output'];
  /**
   * Icon describing the general weather condition for this day.
   * Fits to the `cloudiness`, `precStrength` and `precType`.
   */
  icon: Scalars['Url']['output'];
  /** The highest temperature for this day. */
  maxDayTemperature: Scalars['Int']['output'];
  /** The highest wind speed for this day. */
  maxWindSpeed: Scalars['Float']['output'];
  /** The lowest temperature for this day. */
  minNightTemperature: Scalars['Int']['output'];
  /** The lowest wind speed for this day. */
  minWindSpeed: Scalars['Float']['output'];
  /**
   * Total amount of precipitation in this day.
   * Measured in millimeters.
   */
  prec: Scalars['Float']['output'];
  /**
   * The probability of precipitation for this day.
   * Possible values are in `[0, 1]`.
   */
  precProbability: Scalars['Float']['output'];
  /** The highest strength of precipitation for this day. */
  precStrength: PrecStrength;
  /** Precipitation corresponding to the precipitation strength. */
  precType: PrecType;
  /** Atmospheric pressure for this day. */
  pressure: Scalars['Int']['output'];
  /** Start time of the day. */
  time: Scalars['Time']['output'];
  /** Start time of the day. */
  timestamp: Scalars['Timestamp']['output'];
  /**
   * The water surface temperature for this day.
   * Exists only for cities that are located near large bodies of water.
   */
  waterTemperature?: Maybe<Scalars['Int']['output']>;
  /** The angle of the wind direction in degrees. */
  windAngle: Scalars['Int']['output'];
  /** Average wind direction for this day. */
  windDirection: WindDirection;
};

/** Statistics for one day. */
export type ClimateDayFeelsLikeArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Statistics for one day. */
export type ClimateDayIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/** Statistics for one day. */
export type ClimateDayMaxDayTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Statistics for one day. */
export type ClimateDayMaxWindSpeedArgs = {
  unit?: InputMaybe<WindSpeedUnit>;
};

/** Statistics for one day. */
export type ClimateDayMinNightTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Statistics for one day. */
export type ClimateDayMinWindSpeedArgs = {
  unit?: InputMaybe<WindSpeedUnit>;
};

/** Statistics for one day. */
export type ClimateDayPressureArgs = {
  unit?: InputMaybe<PressureUnit>;
};

/** Statistics for one day. */
export type ClimateDayWaterTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Statistics for one month. */
export type ClimateMonth = {
  __typename?: 'ClimateMonth';
  /** Average daily temperature for this month. */
  avgDayTemperature: Scalars['Int']['output'];
  /**
   * The percentage of the mass fraction of water vapor in the air
   * to the maximum possible at the current temperature.
   * Contains the average value for this month.
   */
  humidity: Scalars['Int']['output'];
  /** The highest daily temperature for this month. */
  maxDayTemperature: Scalars['Int']['output'];
  /** The lowest night temperature for this month. */
  minNightTemperature: Scalars['Int']['output'];
  /** The number of cloudy days for this month. */
  overcastDays: Scalars['Int']['output'];
  /**
   * Total amount of precipitation for this month.
   * Measured in millimeters.
   */
  prec: Scalars['Float']['output'];
  /** The number of days with precipitation for this month. */
  precDays: Scalars['Int']['output'];
  /** Average atmospheric pressure for this month. */
  pressure: Scalars['Int']['output'];
  /** The number of days with rain for this month. */
  rainyDays: Scalars['Int']['output'];
  /** The number of days with snow for this month. */
  snowyDays: Scalars['Int']['output'];
  /** Number of sunny days for this month. */
  sunnyDays: Scalars['Int']['output'];
  /**
   * Average water surface temperature for this month.
   * Exists only for cities that are located near large bodies of water.
   */
  waterTemperature?: Maybe<Scalars['Int']['output']>;
  /** Average angle of the wind direction in degrees. */
  windAngle: Scalars['Int']['output'];
  /** Average wind direction for this month. */
  windDirection: WindDirection;
  /** Average wind speed for this month. */
  windSpeed: Scalars['Float']['output'];
};

/** Statistics for one month. */
export type ClimateMonthAvgDayTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Statistics for one month. */
export type ClimateMonthMaxDayTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Statistics for one month. */
export type ClimateMonthMinNightTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Statistics for one month. */
export type ClimateMonthPressureArgs = {
  unit?: InputMaybe<PressureUnit>;
};

/** Statistics for one month. */
export type ClimateMonthWaterTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Statistics for one month. */
export type ClimateMonthWindSpeedArgs = {
  unit?: InputMaybe<WindSpeedUnit>;
};

/** Statistics for one week. */
export type ClimateWeek = {
  __typename?: 'ClimateWeek';
  /** The highest daily temperature for this week. */
  maxDayTemperature: Scalars['Int']['output'];
  /** The highest wind speed for this week. */
  maxWindSpeed: Scalars['Float']['output'];
  /** The lowest night temperature for this week. */
  minNightTemperature: Scalars['Int']['output'];
  /**
   * Total amount of precipitation for this week.
   * Measured in millimeters.
   */
  prec: Scalars['Float']['output'];
  /** Days of this week with heavy precipitation. */
  strongPrecDays: Scalars['Int']['output'];
  /** Number of sunny days for this week. */
  sunnyDays: Scalars['Int']['output'];
  /** Days of this week with very heavy precipitation. */
  veryStrongPrecDays: Scalars['Int']['output'];
  /** Number of very sunny days for this week. */
  verySunnyDays: Scalars['Int']['output'];
  /**
   * Average water surface temperature for this week.
   * Exists only for cities that are located near large bodies of water.
   */
  waterTemperature?: Maybe<Scalars['Int']['output']>;
  /** Average angle of the wind direction in degrees. */
  windAngle: Scalars['Int']['output'];
  /** Average wind direction for this week. */
  windDirection: WindDirection;
  /** Average wind speed for this week. */
  windSpeed: Scalars['Float']['output'];
};

/** Statistics for one week. */
export type ClimateWeekMaxDayTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Statistics for one week. */
export type ClimateWeekMaxWindSpeedArgs = {
  unit?: InputMaybe<WindSpeedUnit>;
};

/** Statistics for one week. */
export type ClimateWeekMinNightTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Statistics for one week. */
export type ClimateWeekWaterTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Statistics for one week. */
export type ClimateWeekWindSpeedArgs = {
  unit?: InputMaybe<WindSpeedUnit>;
};

/**
 * Climate zone description.
 * Read more: https://koeppen-geiger.vu-wien.ac.at/present.htm
 */
export type ClimateZone = {
  __typename?: 'ClimateZone';
  code: ClimateZoneCode;
  description: Scalars['String']['output'];
};

/** Represents codes of climate zones. See more here https://koeppen-geiger.vu-wien.ac.at/present.htm */
export enum ClimateZoneCode {
  Af = 'Af',
  Am = 'Am',
  Aw = 'Aw',
  BSh = 'BSh',
  BSk = 'BSk',
  BWh = 'BWh',
  BWk = 'BWk',
  Cfa = 'Cfa',
  Cfb = 'Cfb',
  Cfc = 'Cfc',
  Csa = 'Csa',
  Csb = 'Csb',
  Csc = 'Csc',
  Cwa = 'Cwa',
  Cwb = 'Cwb',
  Cwc = 'Cwc',
  Dfa = 'Dfa',
  Dfb = 'Dfb',
  Dfc = 'Dfc',
  Dfd = 'Dfd',
  Dsa = 'Dsa',
  Dsb = 'Dsb',
  Dsc = 'Dsc',
  Dsd = 'Dsd',
  Dwa = 'Dwa',
  Dwb = 'Dwb',
  Dwc = 'Dwc',
  Dwd = 'Dwd',
  Ef = 'EF',
  Et = 'ET',
  None = 'None',
}

/**
 * Represents the state of cloudiness.
 * In ascending order: `CLEAR` – minimum, `OVERCAST` – maximum.
 */
export enum Cloudiness {
  /** 0 oktas. */
  Clear = 'CLEAR',
  /** 5-7 oktas. */
  Cloudy = 'CLOUDY',
  /** 8 oktas. */
  Overcast = 'OVERCAST',
  /** 1-2 oktas. */
  Partly = 'PARTLY',
  /** 3-4 oktas. */
  Significant = 'SIGNIFICANT',
}

/** Response of cloudinessOnHeight function. */
export type CloudinessWithHeight = {
  __typename?: 'CloudinessWithHeight';
  /** Cloudiness at the provided height. */
  cloudiness: Scalars['Int']['output'];
  /** The closest to the specified height. */
  height: Scalars['Int']['output'];
};

/** Represents the general weather conditions. */
export enum Condition {
  Clear = 'CLEAR',
  Cloudy = 'CLOUDY',
  Hail = 'HAIL',
  HeavyRain = 'HEAVY_RAIN',
  LightRain = 'LIGHT_RAIN',
  LightSnow = 'LIGHT_SNOW',
  Overcast = 'OVERCAST',
  PartlyCloudy = 'PARTLY_CLOUDY',
  Rain = 'RAIN',
  Showers = 'SHOWERS',
  Sleet = 'SLEET',
  Snow = 'SNOW',
  Snowfall = 'SNOWFALL',
  Thunderstorm = 'THUNDERSTORM',
  ThunderstormWithHail = 'THUNDERSTORM_WITH_HAIL',
  ThunderstormWithRain = 'THUNDERSTORM_WITH_RAIN',
}

/**
 * Supported datum options.
 * https://tidesandcurrents.noaa.gov/datum_options.html
 */
export enum Datum {
  Lat = 'LAT',
  Mllw = 'MLLW',
  Msl = 'MSL',
}

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type Daypart = {
  __typename?: 'Daypart';
  /** Average temperature value for this time of day. */
  avgTemperature: Scalars['Int']['output'];
  /** Average cloudiness for this time of day. */
  cloudiness: Cloudiness;
  /**
   * The general weather condition
   * that fits to `cloudiness`, `precStrength` and `precType`.
   */
  condition: Condition;
  /**
   * Indicates the presence of the sun
   * most of the time during the aggregation period.
   */
  daytime: Daytime;
  /**
   * The same temperature values may be perceived differently
   * depending on humidity, wind strength, and ultraviolet radiation.
   * `feelsLike` shows how comfortable the weather conditions are,
   * taking into account all these factors.
   */
  feelsLike: Scalars['Int']['output'];
  /**
   * Amount of fresh snow in this time of day.
   *
   * **Units:** `mm`
   * **Possible values:** `[0, +Infinity)`
   */
  freshSnow: Scalars['Float']['output'];
  /**
   * The percentage of the mass fraction of water vapor in the air
   * to the maximum possible at the current temperature.
   * Contains the average value for time of day.
   *
   * **Units:** `%`
   * **Possible values:** `[0, 100]`
   */
  humidity: Scalars['Int']['output'];
  /**
   * Sea ice area fraction.
   *
   * **Possible values:** `[0, 1]`
   */
  iceAreaFraction?: Maybe<Scalars['Float']['output']>;
  /**
   * Ice thickness.
   *
   * **Units:** `m`
   * **Possible values:** `[0, +Infinity)`
   */
  iceThickness?: Maybe<Scalars['Float']['output']>;
  /**
   * Icon describing the general weather condition.
   * Fits to the `cloudiness`, `precStrength` and `precType`.
   */
  icon: Scalars['Url']['output'];
  /** What percentage of the daypart leafWetnessIndex is equal to true. */
  leafWetnessPercent?: Maybe<Scalars['Int']['output']>;
  /** Highest dew point value for this time of day. */
  maxDewPoint?: Maybe<Scalars['Float']['output']>;
  /**
   * Max planetary K-index for this time of day.
   * If `gScale` true scale K-index to NOAA Space Weather Scales.
   * More information about G-Scale: https://www.swpc.noaa.gov/noaa-scales-explanation
   *
   * **Possible values:** `[0, 5] if gScale else [0, 9]`
   */
  maxKpIndex?: Maybe<Scalars['Float']['output']>;
  /** Highest soil temperature at a depth of 7 cm. */
  maxSoilTemperature?: Maybe<Scalars['Int']['output']>;
  /** Highest temperature value for this time of day. */
  maxTemperature: Scalars['Int']['output'];
  /** Atmospheric pressure on mean sea level for this time of day. */
  meanSeaLevelPressure: Scalars['Int']['output'];
  /** Lowest soil temperature at a depth of 7 cm. */
  minSoilTemperature?: Maybe<Scalars['Int']['output']>;
  /** Lowest temperature value for this time of day. */
  minTemperature: Scalars['Int']['output'];
  /** Current phenomenon. Skipped when weather conditions are normal. */
  phenomCondition?: Maybe<PhenomCondition>;
  /** Icon of the phenomenon. Skipped when weather conditions are normal. */
  phenomIcon?: Maybe<Scalars['Url']['output']>;
  /** Atmospheric composition forecast for this time of day. */
  pollution?: Maybe<PollutionDaypart>;
  /**
   * Total amount of precipitation in this time of day.
   *
   * **Units:** `mm`
   * **Possible values:** `[0, +Infinity)`
   */
  prec: Scalars['Float']['output'];
  /**
   * The probability of precipitation for this time of day.
   *
   * **Possible values:** `[0, 1]`
   */
  precProbability?: Maybe<Scalars['Float']['output']>;
  /** Highest strength of precipitation for this time of day. */
  precStrength: PrecStrength;
  /** Precipitation corresponding to the precipitation strength. */
  precType: PrecType;
  /** Atmospheric pressure for this time of day. */
  pressure: Scalars['Int']['output'];
  /** Atmospheric pressure for this time of day in inHg. */
  pressureInHg: Scalars['Float']['output'];
  /** Road condition for this time of day. */
  roadCondition: RoadCondition;
  /** Mode of sea current direction from. */
  seaCurrentDirection?: Maybe<SeaCurrentDirection>;
  /**
   * Maximum of sea current speed.
   *
   * **Units:** `cm/s`
   * **Possible values:** `[0, +Infinity)`
   */
  seaCurrentSpeed?: Maybe<Scalars['Float']['output']>;
  /**
   * Snow depth.
   *
   * **Units:** `mm`
   * **Possible values:** `[0, +Infinity)`
   */
  snowDepth?: Maybe<Scalars['Int']['output']>;
  /**
   * Median fraction of all soil moisture to dry soil.
   *
   * **Possible values:** `[0, 1]`
   */
  soilMoisture?: Maybe<Scalars['Float']['output']>;
  /** Median soil temperature at a depth of 7 cm. */
  soilTemperature?: Maybe<Scalars['Int']['output']>;
  /** Mode of swell wave direction from. */
  swellDirection?: Maybe<SwellDirection>;
  /**
   * Average spectral significant primary swell wave height
   *
   * **Units:** `m`
   * **Possible values:** `[0, +Infinity)`
   */
  swellHeight?: Maybe<Scalars['Float']['output']>;
  /**
   * Average spectral moments (0,1) primary swell wave period
   *
   * **Units:** `s`
   * **Possible values:** `[0, +Infinity)`
   */
  swellPeriod?: Maybe<Scalars['Int']['output']>;
  /** Contains the temperature value that is more suitable for this time of day. */
  temperature: Scalars['Int']['output'];
  /**
   * The level of solar radiation on the Earth's surface.
   *
   * **Possible values:** `[0, 11]`
   */
  uvIndex?: Maybe<Scalars['Int']['output']>;
  /**
   * Visibility  for this time of day.
   *
   * **Units:** `m`
   * **Possible values:** `[0, 10000]`
   */
  visibility?: Maybe<Scalars['Int']['output']>;
  /**
   * Highest water surface temperature for this time of day.
   * Exists only for cities that are located near large bodies of water.
   */
  waterTemperature?: Maybe<Scalars['Int']['output']>;
  /**
   * The angle in which the primary wave is moving.
   *
   * **Units:** `°`
   * **Possible values:** `[0, 359]`
   */
  waveAngle?: Maybe<Scalars['Int']['output']>;
  /** The direction in which the primary wave is moving. */
  waveDirection?: Maybe<WaveDirection>;
  /**
   * Significant height of combined wind waves and swell surface.
   *
   * **Units:** `m`
   * **Possible values:** `[0, +Infinity)`
   */
  waveHeight?: Maybe<Scalars['Float']['output']>;
  /**
   * Maximum height of combined wind waves and swell surface.
   *
   * **Units:** `m`
   * **Possible values:** `[0, +Infinity)`
   */
  waveMaxHeight?: Maybe<Scalars['Float']['output']>;
  /**
   * Primary wave mean period surface.
   *
   * **Units:** `s`
   * **Possible values:** `[0, +Infinity)`
   */
  wavePeriod?: Maybe<Scalars['Int']['output']>;
  /**
   * The angle of the wind direction.
   *
   * **Units:** `°`
   * **Possible values:** `[0, 359]`
   */
  windAngle: Scalars['Int']['output'];
  /** Wind direction for this time of day. */
  windDirection: WindDirection;
  /**
   * Highest speed of wind gusts for this time of day.
   * Measured in meters per second.
   */
  windGust: Scalars['Float']['output'];
  /**
   * Highest wind speed for this time of day.
   * Measured in meters per second.
   */
  windSpeed: Scalars['Float']['output'];
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartAvgTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartFeelsLikeArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartMaxDewPointArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartMaxKpIndexArgs = {
  gScale?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartMaxSoilTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartMaxTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartMeanSeaLevelPressureArgs = {
  unit?: InputMaybe<PressureUnit>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartMinSoilTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartMinTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartPhenomIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartPressureArgs = {
  unit?: InputMaybe<PressureUnit>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartSoilTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartWaterTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartWindGustArgs = {
  unit?: InputMaybe<WindSpeedUnit>;
};

/**
 * Aggregations for one time of day.
 * Be careful, some of the fields may be skipped.
 */
export type DaypartWindSpeedArgs = {
  unit?: InputMaybe<WindSpeedUnit>;
};

/**
 * Summary for four parts of the day.
 * Use this aggregations when you divide
 * the day into morning, afternoon, evening, and night.
 */
export type Dayparts = {
  __typename?: 'Dayparts';
  /** Afternoon aggregations. */
  day: Daypart;
  /** Evening aggregations. */
  evening: Daypart;
  /** Morning aggregations. */
  morning: Daypart;
  /**
   * Night aggregations.
   * Be careful, it is the night before the morning of the current day.
   * If you need a night after the evening of the current day,
   * take the night from the next day.
   */
  night: Daypart;
};

/** Represents the time of day. */
export enum Daytime {
  Day = 'DAY',
  Night = 'NIGHT',
}

/** Represents the strength of dust storm. */
export enum DustStormStrength {
  /** Risk of dust storm. */
  Average = 'AVERAGE',
  /** Risk of strong dust storm. */
  Strong = 'STRONG',
  /** Risk of dust (without storm). */
  Weak = 'WEAK',
  /** No risk of dust storm. */
  Zero = 'ZERO',
}

/**
 * Represents importance of warning.
 * In ascending order: `ZERO` – minimum, `RED` – maximum.
 */
export enum EmercomSignificance {
  Orange = 'ORANGE',
  Red = 'RED',
  Yellow = 'YELLOW',
  Zero = 'ZERO',
}

/**
 * Warning about abnormal weather events
 * from the Ministry of Emergency Situations (МЧС).
 */
export type EmercomWarning = Warning & {
  __typename?: 'EmercomWarning';
  code: Scalars['String']['output'];
  icon: Scalars['Url']['output'];
  message: Scalars['String']['output'];
  significance: EmercomSignificance;
  yandexWeatherUrl: Scalars['Url']['output'];
};

/**
 * Warning about abnormal weather events
 * from the Ministry of Emergency Situations (МЧС).
 */
export type EmercomWarningIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/**
 * Warning about abnormal weather events
 * from the Ministry of Emergency Situations (МЧС).
 */
export type EmercomWarningMessageArgs = {
  language?: InputMaybe<Language>;
};

/** FAQ for location slug. */
export type Faq = {
  __typename?: 'FAQ';
  /** All FAQ entries by slug. */
  entries: Array<FaqEntry>;
};

/** Content of single FAQ entry. */
export type FaqEntry = {
  __typename?: 'FAQEntry';
  /** FAQ answer. */
  answer: Scalars['String']['output'];
  /** FAQ question. */
  question: Scalars['String']['output'];
};

/** The main weather forecast. */
export type Forecast = {
  __typename?: 'Forecast';
  /** Forecasts grouped by day. */
  days: Array<ForecastDay>;
  /** Forecasts in plain list. */
  hours: ForecastHoursConnection;
};

/** The main weather forecast. */
export type ForecastDaysArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** The main weather forecast. */
export type ForecastHoursArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
};

/** Forecast for one day. */
export type ForecastDay = {
  __typename?: 'ForecastDay';
  /**
   * Holiday on this day.
   * Skipped when the day is a normal weekday.
   */
  holiday?: Maybe<Holiday>;
  /**
   * Forecast hours list for this day.
   * Be careful, the size of this list may be less than 24
   * due to the decreasing frequency of forecasts for distant days.
   */
  hours: Array<ForecastHour>;
  /**
   * Magnetic field Kp-index (`biomet` in REST).
   * Possible values are in `[0, 9]`.
   * Calculated as maximum of `Daypart.maxKpIndex`.
   * @deprecated Use `maxKpIndex`
   */
  kpIndex?: Maybe<Scalars['Int']['output']>;
  /**
   * Planetary K-index.
   * More information: https://www.swpc.noaa.gov/phenomena/geomagnetic-storms
   * If `gScale` true scale K-index to NOAA Space Weather Scales.
   * More information about G-Scale: https://www.swpc.noaa.gov/noaa-scales-explanation
   *
   * **Possible values:** `[0, 5] if gScale else [0, 9]`
   */
  maxKpIndex?: Maybe<Scalars['Float']['output']>;
  /**
   * Moon phase.
   *
   * **Possible values:** `[0, 15]`
   */
  moon: Scalars['Int']['output'];
  /** The ocean water level maximums and minimums in day. */
  oceanTideExtremums?: Maybe<Array<OceanTideExtremumItem>>;
  /** Dayparts aggregations for this day. */
  parts: Dayparts;
  /**
   * Indicates the polar day or polar night.
   * Skipped when the day is normal.
   */
  polar?: Maybe<Daytime>;
  /** Summary aggregations for this day. */
  summary: Summary;
  /**
   * Sunrise time in format `hh:mm`.
   * @deprecated use `sunriseTime` field
   */
  sunrise: Scalars['String']['output'];
  /**
   * Start time of the sunrise in format `hh:mm`.
   * @deprecated use `sunriseBeginTime` field
   */
  sunriseBegin: Scalars['String']['output'];
  /** Start time of the sunrise. */
  sunriseBeginTime: Scalars['Time']['output'];
  /** Start time of the sunrise. */
  sunriseBeginTimestamp: Scalars['Timestamp']['output'];
  /** Sunrise time. */
  sunriseTime: Scalars['Time']['output'];
  /** Sunrise time. */
  sunriseTimestamp: Scalars['Timestamp']['output'];
  /**
   * Sunset time in format `hh:mm`.
   * @deprecated use `sunsetTime` field
   */
  sunset: Scalars['String']['output'];
  /**
   * End time of the sunset in format `hh:mm`.
   * @deprecated use `sunsetEndTime` field
   */
  sunsetEnd: Scalars['String']['output'];
  /** End time of the sunset. */
  sunsetEndTime: Scalars['Time']['output'];
  /** End time of the sunset. */
  sunsetEndTimestamp: Scalars['Timestamp']['output'];
  /** Sunset time. */
  sunsetTime: Scalars['Time']['output'];
  /** Sunset time. */
  sunsetTimestamp: Scalars['Timestamp']['output'];
  /** Start time of the day. */
  time: Scalars['Time']['output'];
  /** Start time of the day. */
  timestamp: Scalars['Timestamp']['output'];
};

/** Forecast for one day. */
export type ForecastDayMaxKpIndexArgs = {
  gScale?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Forecast for one day. */
export type ForecastDayOceanTideExtremumsArgs = {
  datum?: InputMaybe<Datum>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHour = {
  __typename?: 'ForecastHour';
  /**
   * Total amount of precipitation in this hour.
   *
   * **Units:** `mm`
   * **Possible values:** `[0, +Infinity)`
   */
  accumulatedPrec: Scalars['Float']['output'];
  /** Cloudiness for this hour. */
  cloudiness: Cloudiness;
  /**
   * Cloud cover [%] at the closest to the given height (in meters).
   * from the ground surface.
   * Use `height: 0` if you need total cloud cover.
   * Read more about levels (low, middle or high):
   * https://www.metoffice.gov.uk/weather/learn-about/weather/types-of-weather/clouds/
   */
  cloudinessOnHeight?: Maybe<CloudinessWithHeight>;
  /**
   * The general weather condition
   * that fits to `cloudiness`, `isThunder`, `precStrength` and `precType`.
   */
  condition: Condition;
  /**
   * The dew point value in the shade
   * at a height of 2 meters from the ground surface.
   */
  dewPoint?: Maybe<Scalars['Float']['output']>;
  /**
   * The same temperature values may be perceived differently
   * depending on humidity, wind strength, and ultraviolet radiation.
   * `feelsLike` shows how comfortable the weather conditions are,
   * taking into account all these factors.
   */
  feelsLike: Scalars['Int']['output'];
  /**
   * Amount of fresh snow in this hour.
   *
   * **Units:** `mm`
   * **Possible values:** `[0, +Infinity)`
   */
  freshSnow: Scalars['Float']['output'];
  /**
   * An index that combines air temperature and relative humidity, in shaded areas,
   * to posit a human-perceived equivalent temperature.
   * More information: https://www.wpc.ncep.noaa.gov/html/heatindex_equation.shtml
   */
  heatIndex: Scalars['Float']['output'];
  /**
   * The percentage of the mass fraction of water vapor in the air
   * to the maximum possible at the current temperature.
   *
   * **Units:** `%`
   * **Possible values:** `[0, 100]`
   */
  humidity: Scalars['Int']['output'];
  /**
   * Sea ice area fraction.
   *
   * **Possible values:** `[0, 1]`
   */
  iceAreaFraction?: Maybe<Scalars['Float']['output']>;
  /**
   * Ice thickness.
   *
   * **Units:** `m`
   * **Possible values:** `[0, +Infinity)`
   */
  iceThickness?: Maybe<Scalars['Float']['output']>;
  /**
   * Icon describing the general weather condition.
   * Fits to the `cloudiness`, `isThunder`, `precStrength` and `precType`.
   */
  icon: Scalars['Url']['output'];
  /** Flag showing the presence of a thunder for the current hour. */
  isThunder: Scalars['Boolean']['output'];
  /**
   * Planetary K-index.
   * More information: https://www.swpc.noaa.gov/phenomena/geomagnetic-storms
   * If `gScale` true scale K-index to NOAA Space Weather Scales.
   * More information about G-Scale: https://www.swpc.noaa.gov/noaa-scales-explanation
   *
   * **Possible values:** `[0, 5] if gScale else [0, 9]`
   */
  kpIndex?: Maybe<Scalars['Float']['output']>;
  /**
   * Indicates whether there is moisture on leaves (`true`) or not (`false`).
   * This value is calculated based on factors such as precipitation,
   * air temperature, surface temperature, and dew point.
   */
  leafWetnessIndex?: Maybe<Scalars['Boolean']['output']>;
  /** Atmospheric pressure on mean sea level for this hour. */
  meanSeaLevelPressure: Scalars['Int']['output'];
  /**
   * The height of the ocean water level relative to the specified datum in centimeters.
   *
   * **Units:** `cm`
   * **Possible values:** `(-Infinity, +Infinity)`
   */
  oceanTide?: Maybe<Scalars['Float']['output']>;
  /** Current phenomenon. Skipped when weather conditions are normal. */
  phenomCondition?: Maybe<PhenomCondition>;
  /** Icon of the phenomenon. Skipped when weather conditions are normal. */
  phenomIcon?: Maybe<Scalars['Url']['output']>;
  /** Atmospheric composition forecast for this hour. */
  pollution?: Maybe<Pollution>;
  /**
   * Average amount of precipitation in this hour.
   * For total amount use `accumulatedPrec`.
   *
   * **Units:** `mm`
   * **Possible values:** `[0, +Infinity)`
   */
  prec: Scalars['Float']['output'];
  /**
   * The probability of precipitation for this hour.
   *
   * **Possible values:** `[0, 1]`
   */
  precProbability?: Maybe<Scalars['Float']['output']>;
  /** The strength of precipitation for this hour. */
  precStrength: PrecStrength;
  /** The type of precipitation for this hour. */
  precType: PrecType;
  /** Atmospheric pressure for this hour. */
  pressure: Scalars['Int']['output'];
  /** Atmospheric pressure for this hour in inHg. */
  pressureInHg: Scalars['Float']['output'];
  /**
   * Preceding 1h or 3h evaporative water flux sum.
   *
   * **Units:** `mm/h`
   * **Possible values:** `[0, +Infinity)`
   */
  referenceEvapotranspiration?: Maybe<Scalars['Float']['output']>;
  /** Road condition for this hour. */
  roadCondition: RoadCondition;
  /**
   * Sea current angle from.
   *
   * **Units:** `degrees`
   * **Possible values:** `[0, 360)`
   */
  seaCurrentAngle?: Maybe<Scalars['Int']['output']>;
  /** Sea current direction from. */
  seaCurrentDirection?: Maybe<SeaCurrentDirection>;
  /**
   * Sea current speed.
   *
   * **Units:** `cm/s`
   * **Possible values:** `[0, +Infinity)`
   */
  seaCurrentSpeed?: Maybe<Scalars['Float']['output']>;
  /**
   * Sea water salinity.
   *
   * **Units:** `PSU`
   * **Possible values:** `[0, 1000]`
   */
  seaSalinity?: Maybe<Scalars['Float']['output']>;
  /**
   * Snow depth.
   *
   * **Units:** `mm`
   * **Possible values:** `[0, +Infinity)`
   */
  snowDepth?: Maybe<Scalars['Int']['output']>;
  /**
   * The fraction of all soil moisture to dry soil.
   *
   * **Possible values:** `[0, 1]`
   */
  soilMoisture?: Maybe<Scalars['Float']['output']>;
  /** Soil temperature at a depth of 7 cm. */
  soilTemperature?: Maybe<Scalars['Int']['output']>;
  /**
   * Average direct solar irradiation on the horizontal plane
   * https://en.wikipedia.org/wiki/Solar_irradiance
   */
  solarIrradiation?: Maybe<Scalars['Float']['output']>;
  /** The temperature of the surface of the Earth for this hour. */
  surfaceTemperature?: Maybe<Scalars['Int']['output']>;
  /**
   * Mean primary swell wave angle from.
   *
   * **Units:** `degrees`
   * **Possible values:** `[0, 360)`
   */
  swellAngle?: Maybe<Scalars['Int']['output']>;
  /** Mean primary swell wave direction from. */
  swellDirection?: Maybe<SwellDirection>;
  /**
   * Spectral significant primary swell wave height.
   *
   * **Units:** `m`
   * **Possible values:** `[0, +Infinity)`
   */
  swellHeight?: Maybe<Scalars['Float']['output']>;
  /**
   * Spectral moments (0, 1) primary swell wave period.
   *
   * **Units:** `s`
   * **Possible values:** `[0, +Infinity)`
   */
  swellPeriod?: Maybe<Scalars['Int']['output']>;
  /**
   * The temperature value in the shade
   * at a height of 2 meters from the ground surface.
   */
  temperature: Scalars['Int']['output'];
  /**
   * The temperature value at the closest to the given height (in meters)
   * from the ground surface.
   */
  temperatureOnHeight?: Maybe<TemperatureWithHeight>;
  /** Forecast horizon time. */
  time: Scalars['Time']['output'];
  /** Forecast horizon time. */
  timestamp: Scalars['Timestamp']['output'];
  /**
   * The level of solar radiation on the Earth's surface.
   * Open-ended version of `uvIndex` parameter.
   *
   * **Possible values:** `[0, +Infinity)`
   */
  uv?: Maybe<Scalars['Int']['output']>;
  /**
   * The level of solar radiation on the Earth's surface.
   *
   * **Possible values:** `[0, 11]`
   */
  uvIndex?: Maybe<Scalars['Int']['output']>;
  /**
   * Visibility.
   *
   * **Units:** `m`
   * **Possible values:** `[0, 10000]`
   */
  visibility?: Maybe<Scalars['Int']['output']>;
  /**
   * The water surface temperature.
   * Exists only for cities that are located near large bodies of water.
   */
  waterTemperature?: Maybe<Scalars['Int']['output']>;
  /**
   * The angle in which the primary wave is moving.
   *
   * **Units:** `°`
   * **Possible values:** `[0, 359]`
   */
  waveAngle?: Maybe<Scalars['Int']['output']>;
  /** The direction in which the primary wave is moving. */
  waveDirection?: Maybe<WaveDirection>;
  /**
   * Significant height of combined wind waves and swell surface.
   *
   * **Units:** `m`
   * **Possible values:** `[0, +Infinity)`
   */
  waveHeight?: Maybe<Scalars['Float']['output']>;
  /**
   * Maximum height of combined wind waves and swell surface.
   *
   * **Units:** `m`
   * **Possible values:** `[0, +Infinity)`
   */
  waveMaxHeight?: Maybe<Scalars['Float']['output']>;
  /**
   * Primary wave mean period surface.
   *
   * **Units:** `s`
   * **Possible values:** `[0, +Infinity)`
   */
  wavePeriod?: Maybe<Scalars['Int']['output']>;
  /**
   * The angle of the wind direction.
   *
   * **Units:** `°`
   * **Possible values:** `[0, 359]`
   */
  windAngle: Scalars['Int']['output'];
  /** The angle of the wind direction in degrees at the closest to the given height (in meters). */
  windAngleOnHeight?: Maybe<WindAngleWithHeight>;
  /**
   * The air temperature feels like to the human skin
   * due to the combination of cold temperatures and winds blowing on exposed skin.
   * If `temperature` is above 10°C or `windSpeed` is less than or equal to 3 mph
   * then `temperature` value will be returned.
   * More information: https://www.weather.gov/safety/cold-wind-chill-chart
   */
  windChill: Scalars['Float']['output'];
  /** Wind direction for this hour. */
  windDirection: WindDirection;
  /** Wind direction for this hour at the closest to the given height (in meters). */
  windDirectionOnHeight?: Maybe<WindDirectionWithHeight>;
  /**
   * The speed of wind gusts.
   * Measured in meters per second.
   */
  windGust: Scalars['Float']['output'];
  /**
   * Wind speed at a height of 10 meters from the ground surface.
   * Measured in meters per second.
   */
  windSpeed: Scalars['Float']['output'];
  /**
   * Wind speed at the closest to the given height (in meters) from the ground surface.
   * Measured in meters per second.
   */
  windSpeedOnHeight?: Maybe<WindSpeedWithHeight>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourCloudinessOnHeightArgs = {
  height: Scalars['Int']['input'];
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourDewPointArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourFeelsLikeArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourHeatIndexArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourKpIndexArgs = {
  gScale?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourMeanSeaLevelPressureArgs = {
  unit?: InputMaybe<PressureUnit>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourOceanTideArgs = {
  datum?: InputMaybe<Datum>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourPhenomIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourPressureArgs = {
  unit?: InputMaybe<PressureUnit>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourSoilTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourSolarIrradiationArgs = {
  unit?: InputMaybe<SolarIrradiationUnit>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourSurfaceTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourTemperatureOnHeightArgs = {
  height: Scalars['Int']['input'];
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourWaterTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourWindAngleOnHeightArgs = {
  height: Scalars['Int']['input'];
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourWindChillArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourWindDirectionOnHeightArgs = {
  height: Scalars['Int']['input'];
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourWindGustArgs = {
  unit?: InputMaybe<WindSpeedUnit>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourWindSpeedArgs = {
  unit?: InputMaybe<WindSpeedUnit>;
};

/**
 * One hour of the forecast.
 * Can contains data from Meteum, Nowcast, and others.
 */
export type ForecastHourWindSpeedOnHeightArgs = {
  height: Scalars['Int']['input'];
  unit?: InputMaybe<WindSpeedUnit>;
};

/** The connection type for `ForecastHour`. */
export type ForecastHoursConnection = {
  __typename?: 'ForecastHoursConnection';
  /** A list of edges. */
  edges: Array<ForecastHoursEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ForecastHoursEdge = {
  __typename?: 'ForecastHoursEdge';
  /**
   * The cursor pointing to the entry.
   * It can be used in future queries for paging.
   */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ForecastHour;
};

/**
 * Information about the region hierarchy for the requested location or point.
 * Be careful, all levels of the hierarchy are optional.
 * `district` → `locality` → `province` → `country`.
 */
export type GeoHierarchy = {
  __typename?: 'GeoHierarchy';
  country?: Maybe<GeoObject>;
  district?: Maybe<GeoObject>;
  locality?: Maybe<GeoObject>;
  province?: Maybe<GeoObject>;
};

/**
 * Input for `Query.weatherByGeoId`.
 * You can get `geoId` from `Query.weatherByPoint.location.geoId`.
 */
export type GeoIdInput = {
  geoId: Scalars['Int']['input'];
};

/** Entry for `GeoHierarchy`. */
export type GeoObject = {
  __typename?: 'GeoObject';
  /** Country slug if exist. */
  countrySlug?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** Location texts and cases. */
  linguistics: Linguistics;
  /**
   * Location name.
   * To change the language of this text use the `language` argument
   * of `Query.weather` and `Query.weatherByPoint`.
   */
  name: Scalars['String']['output'];
  /** Human readable slug for this object. */
  slug: Scalars['String']['output'];
  /** Location type. */
  type: LocationType;
};

/** Information about holiday. */
export type Holiday = {
  __typename?: 'Holiday';
  /** Indicates the need to color the day red. */
  isRed: Scalars['Boolean']['output'];
  /**
   * Official name of the holiday.
   * To change the language of this text use the `language` argument
   * of `Query.weather` and `Query.weatherByPoint`.
   */
  name: Scalars['String']['output'];
  /** Type of holiday. */
  type: HolidayType;
};

/** Represents a type of holiday. */
export enum HolidayType {
  Holiday = 'HOLIDAY',
  Memday = 'MEMDAY',
  Weekday = 'WEEKDAY',
  Weekend = 'WEEKEND',
}

/** Limits for `humidity` parameter. */
export type HumidityLimits = {
  __typename?: 'HumidityLimits';
  /** Values less than this limit characterize low air humidity. */
  low: Scalars['Int']['output'];
  /**
   * Values less than this limit characterize normal air humidity,
   * greater than – high air humidity.
   */
  norm: Scalars['Int']['output'];
};

export type Hydro = {
  __typename?: 'Hydro';
  /** Hydro object (lake, river, sea, etc.) name. */
  name: Scalars['String']['output'];
};

/**
 * Represents the icon format.
 * If you need a fixed-size png, use `PNG_{size}`.
 * If you need only code, use `CODE`.
 */
export enum IconFormat {
  Code = 'CODE',
  Png_24 = 'PNG_24',
  Png_32 = 'PNG_32',
  Png_48 = 'PNG_48',
  Png_64 = 'PNG_64',
  Png_96 = 'PNG_96',
  Png_112 = 'PNG_112',
  Png_128 = 'PNG_128',
  Svg = 'SVG',
}

/**
 * Represents the theme of the icon.
 * Be careful, some icons may not exist in a particular theme.
 */
export enum IconTheme {
  Black = 'BLACK',
  Circle = 'CIRCLE',
  Dark = 'DARK',
  Flat = 'FLAT',
  Light = 'LIGHT',
  Outline = 'OUTLINE',
}

/** Traffic jams state for location. */
export type Jams = {
  __typename?: 'Jams';
  /** Yandex maps url with traffic state. */
  clickUrl: Scalars['Url']['output'];
  /** Text representation. */
  hint: Scalars['String']['output'];
  /** Traffic light color representation. */
  iconColor: TrafficLight;
  /** Strength of traffic jam, number between 0 and 10. */
  level: Scalars['Int']['output'];
};

/**
 * Represents all available Weather languages.
 * The language will be used in texts.
 */
export enum Language {
  Be = 'BE',
  Bg = 'BG',
  De = 'DE',
  En = 'EN',
  Es = 'ES',
  Es_419 = 'ES_419',
  /** @deprecated use `ES_419` */
  EsLa = 'ES_LA',
  Fr = 'FR',
  Hi = 'HI',
  Hu = 'HU',
  Id = 'ID',
  It = 'IT',
  Kk = 'KK',
  Mk = 'MK',
  Pl = 'PL',
  Pt = 'PT',
  PtBr = 'PT_BR',
  Ro = 'RO',
  Ru = 'RU',
  Sr = 'SR',
  Tr = 'TR',
  Tt = 'TT',
  Uk = 'UK',
  Uz = 'UZ',
}

/**
 * The boundaries of the weather parameters
 * on the basis of which the business logic is built.
 * It can be used for marking up graphs.
 * You should compare the values with the limit using `<`.
 */
export type Limits = {
  __typename?: 'Limits';
  aqi: AqiLimits;
  co: PollutantLimits;
  humidity: HumidityLimits;
  no2: PollutantLimits;
  o3: PollutantLimits;
  pm2p5: PollutantLimits;
  pm10: PollutantLimits;
  pressure: PressureLimits;
  so2: PollutantLimits;
  uvIndex: UvIndexLimits;
  visibility: VisibilityLimits;
  windGust: WindGustLimits;
  windSpeed: WindSpeedLimits;
};

/** Location texts and cases. */
export type Linguistics = {
  __typename?: 'Linguistics';
  ablative: Scalars['String']['output'];
  accusative: Scalars['String']['output'];
  dative: Scalars['String']['output'];
  directional: Scalars['String']['output'];
  genitive: Scalars['String']['output'];
  instrumental: Scalars['String']['output'];
  locative: Scalars['String']['output'];
  nominative: Scalars['String']['output'];
  preposition: Scalars['String']['output'];
  prepositional: Scalars['String']['output'];
};

/** Localization element, represents one dictionary item. */
export type Localization = {
  __typename?: 'Localization';
  key: Scalars['String']['output'];
  val: Scalars['String']['output'];
};

/** All information about requested location or point. */
export type Location = {
  __typename?: 'Location';
  /** Altitude of this location from topography data source. */
  altitude?: Maybe<Scalars['Int']['output']>;
  /** Region hierarchy for this location. */
  geoHierarchy: GeoHierarchy;
  /** ID that can be used in `Query.weather`. */
  geoId: Scalars['Int']['output'];
  /** Info about the nearest water object for this location. */
  hydro?: Maybe<Hydro>;
  /** Indicates that the requested location is equals to user's location. */
  isUserLocation: Scalars['Boolean']['output'];
  /** Indicates that user IP is inside of Yandex Nets. */
  isYandexIp: Scalars['Boolean']['output'];
  /** Latitude of this location. */
  lat: Scalars['Float']['output'];
  /** Longitude of this location. */
  lon: Scalars['Float']['output'];
  /** Other similar locations. */
  other: Array<GeoObject>;
  /** Info about normal pressure values for this location. */
  pressureNorm: Scalars['Int']['output'];
  /** Info about nearest resort for this location. */
  resort?: Maybe<Resort>;
  /** Slug that can be used in `Query.weather`. */
  slug: Scalars['String']['output'];
  /** Current sport category in this location. */
  sport?: Maybe<SportCategory>;
  /** Timezone information for this location. */
  timezone: Timezone;
};

/** All information about requested location or point. */
export type LocationPressureNormArgs = {
  unit?: InputMaybe<PressureUnit>;
};

/** Locations list info. */
export type LocationList = {
  __typename?: 'LocationList';
  /** Chief location */
  chief?: Maybe<GeoObject>;
  /** List of locations */
  locations: Array<GeoObject>;
  /** Type of locations */
  type: LocationType;
};

export enum LocationType {
  Airport = 'AIRPORT',
  Area = 'AREA',
  City = 'CITY',
  CityDistrict = 'CITY_DISTRICT',
  CityDistrictLvl2 = 'CITY_DISTRICT_LVL2',
  Country = 'COUNTRY',
  District = 'DISTRICT',
  ExtTerritory = 'EXT_TERRITORY',
  Locality = 'LOCALITY',
  Province = 'PROVINCE',
  RailwayStation = 'RAILWAY_STATION',
  Settlement = 'SETTLEMENT',
  Unknown = 'UNKNOWN',
  Vegetation = 'VEGETATION',
  Village = 'VILLAGE',
}

/** Represents the theme of static map. */
export enum MapTheme {
  Dark = 'DARK',
  Light = 'LIGHT',
}

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type Now = {
  __typename?: 'Now';
  /** Current value of cloudiness. */
  cloudiness: Cloudiness;
  /**
   * Current general weather condition
   * that fits to `cloudiness`, `isThunder`, `precStrength` and `precType`.
   */
  condition: Condition;
  /** Indicates the presence of the sun right now. */
  daytime: Daytime;
  /**
   * The dew point value in the shade
   * at a height of 2 meters from the ground surface.
   */
  dewPoint?: Maybe<Scalars['Float']['output']>;
  /**
   * The same temperature values may be perceived differently
   * depending on humidity, wind strength, and ultraviolet radiation.
   * `feelsLike` shows how comfortable the weather conditions are,
   * taking into account all these factors.
   */
  feelsLike: Scalars['Int']['output'];
  /**
   * An index that combines air temperature and relative humidity, in shaded areas,
   * to posit a human-perceived equivalent temperature.
   * More information: https://www.wpc.ncep.noaa.gov/html/heatindex_equation.shtml
   */
  heatIndex: Scalars['Float']['output'];
  /**
   * The percentage of the mass fraction of water vapor in the air
   * to the maximum possible at the current temperature.
   *
   * **Units:** `%`
   * **Possible values:** `[0, 100]`
   */
  humidity: Scalars['Int']['output'];
  /**
   * Sea ice area fraction.
   *
   * **Possible values:** `[0, 1]`
   */
  iceAreaFraction?: Maybe<Scalars['Float']['output']>;
  /**
   * Ice thickness.
   *
   * **Units:** `m`
   * **Possible values:** `[0, +Infinity)`
   */
  iceThickness?: Maybe<Scalars['Float']['output']>;
  /**
   * Icon describing the general weather condition.
   * Fits to the `cloudiness`, `isThunder`, `precStrength` and `precType`.
   */
  icon: Scalars['Url']['output'];
  /**
   * Flag showing the presence of a thunder right now
   * (or for some short time period).
   */
  isThunder: Scalars['Boolean']['output'];
  /**
   * Planetary K-index.
   * More information: https://www.swpc.noaa.gov/phenomena/geomagnetic-storms
   * If `gScale` true scale K-index to NOAA Space Weather Scales.
   * More information about G-Scale: https://www.swpc.noaa.gov/noaa-scales-explanation
   *
   * **Possible values:** `[0, 5] if gScale else [0, 9]`
   */
  kpIndex?: Maybe<Scalars['Float']['output']>;
  /**
   * Indicates whether there is moisture on leaves (`true`) or not (`false`).
   * This value is calculated based on factors such as precipitation,
   * air temperature, surface temperature, and dew point.
   */
  leafWetnessIndex?: Maybe<Scalars['Boolean']['output']>;
  /** Current atmospheric pressure on mean sea level. */
  meanSeaLevelPressure: Scalars['Int']['output'];
  /** Current phenomenon. Skipped when weather conditions are normal. */
  phenomCondition?: Maybe<PhenomCondition>;
  /** Icon of the phenomenon. Skipped when weather conditions are normal. */
  phenomIcon?: Maybe<Scalars['Url']['output']>;
  /** The current composition of the atmosphere. */
  pollution?: Maybe<Pollution>;
  /**
   * Current probability of precipitation.
   *
   * **Possible values:** `[0, 1]`
   */
  precProbability: Scalars['Float']['output'];
  /** Current value of precipitation strength. */
  precStrength: PrecStrength;
  /** Current type of precipitation. */
  precType: PrecType;
  /** Current atmospheric pressure. */
  pressure: Scalars['Int']['output'];
  /** Current atmospheric pressure in inHg. */
  pressureInHg: Scalars['Float']['output'];
  /** Current road condition. */
  roadCondition: RoadCondition;
  /** Current run condition. */
  runCondition: RunCondition;
  /**
   * Sea current angle from.
   *
   * **Units:** `degrees`
   * **Possible values:** `[0, 360)`
   */
  seaCurrentAngle?: Maybe<Scalars['Int']['output']>;
  /** Sea current direction from. */
  seaCurrentDirection?: Maybe<SeaCurrentDirection>;
  /**
   * Sea current speed.
   *
   * **Units:** `cm/s`
   * **Possible values:** `[0, +Infinity)`
   */
  seaCurrentSpeed?: Maybe<Scalars['Float']['output']>;
  /** Current time of year. */
  season: Season;
  /**
   * Snow depth.
   *
   * **Units:** `mm`
   * **Possible values:** `[0, +Infinity)`
   */
  snowDepth?: Maybe<Scalars['Int']['output']>;
  /**
   * The fraction of all soil moisture to dry soil.
   *
   * **Possible values:** `[0, 1]`
   */
  soilMoisture?: Maybe<Scalars['Float']['output']>;
  /** Soil temperature at a depth of 7 cm. */
  soilTemperature?: Maybe<Scalars['Int']['output']>;
  /** Space weather */
  space?: Maybe<Space>;
  /** URL of the image with the precipitation map. */
  staticMapUrl?: Maybe<Scalars['Url']['output']>;
  /**
   * Mean primary swell wave angle from.
   *
   * **Units:** `degrees`
   * **Possible values:** `[0, 360)`
   */
  swellAngle?: Maybe<Scalars['Int']['output']>;
  /** Mean primary swell wave direction from. */
  swellDirection?: Maybe<SwellDirection>;
  /**
   * Spectral significant primary swell wave height.
   *
   * **Units:** `m`
   * **Possible values:** `[0, +Infinity)`
   */
  swellHeight?: Maybe<Scalars['Float']['output']>;
  /**
   * Spectral moments (0, 1) primary swell wave period.
   *
   * **Units:** `s`
   * **Possible values:** `[0, +Infinity)`
   */
  swellPeriod?: Maybe<Scalars['Int']['output']>;
  /**
   * The temperature value in the shade
   * at a height of 2 meters from the ground surface.
   */
  temperature: Scalars['Int']['output'];
  /**
   * The level of solar radiation on the Earth's surface.
   * Open-ended version of `uvIndex` parameter.
   *
   * **Possible values:** `[0, +Infinity)`
   */
  uv?: Maybe<Scalars['Int']['output']>;
  /**
   * The level of solar radiation on the Earth's surface.
   *
   * **Possible values:** `[0, 11]`
   */
  uvIndex?: Maybe<Scalars['Int']['output']>;
  /**
   * Visibility.
   *
   * **Units:** `m`
   * **Possible values:** `[0, 10000]`
   */
  visibility?: Maybe<Scalars['Int']['output']>;
  /**
   * The water surface temperature.
   * Exists only for cities that are located near large bodies of water.
   */
  waterTemperature?: Maybe<Scalars['Int']['output']>;
  /**
   * The angle in which the primary wave is moving.
   *
   * **Units:** `°`
   * **Possible values:** `[0, 359]`
   */
  waveAngle?: Maybe<Scalars['Int']['output']>;
  /** The direction in which the primary wave is moving. */
  waveDirection?: Maybe<WaveDirection>;
  /**
   * Significant height of combined wind waves and swell surface.
   *
   * **Units:** `m`
   * **Possible values:** `[0, +Infinity)`
   */
  waveHeight?: Maybe<Scalars['Float']['output']>;
  /**
   * Maximum height of combined wind waves and swell surface.
   *
   * **Units:** `m`
   * **Possible values:** `[0, +Infinity)`
   */
  waveMaxHeight?: Maybe<Scalars['Float']['output']>;
  /**
   * Primary wave mean period surface.
   *
   * **Units:** `s`
   * **Possible values:** `[0, +Infinity)`
   */
  wavePeriod?: Maybe<Scalars['Int']['output']>;
  /**
   * The angle of the wind direction.
   *
   * **Units:** `°`
   * **Possible values:** `[0, 359]`
   */
  windAngle: Scalars['Int']['output'];
  /**
   * The air temperature feels like to the human skin
   * due to the combination of cold temperatures and winds blowing on exposed skin.
   * If `temperature` is above 10°C or `windSpeed` is less than or equal to 3 mph
   * then `temperature` value will be returned.
   * More information: https://www.weather.gov/safety/cold-wind-chill-chart
   */
  windChill: Scalars['Float']['output'];
  /** Current wind direction. */
  windDirection: WindDirection;
  /** The speed of wind gusts. */
  windGust?: Maybe<Scalars['Float']['output']>;
  /** Wind speed at a height of 10 meters from the ground surface. */
  windSpeed: Scalars['Float']['output'];
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowDewPointArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowFeelsLikeArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowHeatIndexArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowKpIndexArgs = {
  gScale?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowMeanSeaLevelPressureArgs = {
  unit?: InputMaybe<PressureUnit>;
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowPhenomIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowPressureArgs = {
  unit?: InputMaybe<PressureUnit>;
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowSoilTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowStaticMapUrlArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  hideLocationNames?: InputMaybe<Scalars['Boolean']['input']>;
  placemark?: InputMaybe<Scalars['Boolean']['input']>;
  scale?: InputMaybe<Scalars['Int']['input']>;
  theme?: InputMaybe<MapTheme>;
  width?: InputMaybe<Scalars['Int']['input']>;
  zoom?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowWaterTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowWindChillArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowWindGustArgs = {
  unit?: InputMaybe<WindSpeedUnit>;
};

/**
 * Weather now.
 * It can be compiled from many sources based on different business logic.
 * If you need the actual weather values,
 * then use the data from the `Query.stations`.
 */
export type NowWindSpeedArgs = {
  unit?: InputMaybe<WindSpeedUnit>;
};

/** Info about nowcast source that was used for nowcast calculation. */
export type NowcastSource = {
  __typename?: 'NowcastSource';
  /** Difference in seconds between now and most recent generation time of data. */
  age: Scalars['Int']['output'];
  /** Name of data source. */
  domain: Scalars['String']['output'];
  /** Human readable name of data source. */
  title: Scalars['String']['output'];
};

/**
 * Radars and satellites that were used for nowcast calculation.
 * Has their age and domains.
 */
export type NowcastSources = {
  __typename?: 'NowcastSources';
  /** Nowcast generation time. */
  genTime: Scalars['Timestamp']['output'];
  /** Info about radars used for nowcast calculation. */
  radars: Array<NowcastSource>;
  /** Info about satellites used for nowcast calculation. */
  satellites: Array<NowcastSource>;
  /** Nowcast's prediction time. */
  time: Scalars['Timestamp']['output'];
};

/**
 * Input for `Weather.nowcastSources`.
 * Contains nowcast generaion time and prediction time.
 */
export type NowcastSourcesInput = {
  /** Nowcast generation time. */
  genTime: Scalars['Timestamp']['input'];
  /** Nowcast's prediction time. */
  time?: InputMaybe<Scalars['Timestamp']['input']>;
};

/** Weather precipitations nowcast timeline. */
export type NowcastTimeline = {
  __typename?: 'NowcastTimeline';
  /** Nowcast region. */
  region: Scalars['String']['output'];
  /** Nowcast timeline steps array. */
  steps: Array<NowcastTimelineStep>;
};

/** One step of nowcast timeline. */
export type NowcastTimelineStep = {
  __typename?: 'NowcastTimelineStep';
  /** Rectangle where nowcast data is available. */
  bounds: Bounds;
  /** Cloudiness for this step. */
  cloudiness: Cloudiness;
  /**
   * The general weather condition
   * that fits to `cloudiness`, `precStrength` and `precType`.
   */
  condition: Condition;
  /**
   * Indicates the presence of the sun
   * most of the time during the aggregation period.
   */
  daytime: Daytime;
  /**
   * Nowcast generation time.
   * Used for synchronization when requesting tile data.
   */
  genTime: Scalars['Timestamp']['output'];
  /**
   * Icon describing the general weather condition.
   * Fits to the `cloudiness`, `isThunder`, `precStrength` and `precType`.
   */
  icon: Scalars['Url']['output'];
  /** For hourly precipitation will have the value `true`. */
  isLongterm: Scalars['Boolean']['output'];
  /** For 6-hour precipitation will have the value `true`. */
  isLongtermCfs: Scalars['Boolean']['output'];
  /**
   * Intensity of precipitation per hour.
   *
   * **Units:** `mm/h`
   * **Possible values:** `[0, +Infinity)`
   */
  prec?: Maybe<Scalars['Float']['output']>;
  /** The strength of precipitation for this step. */
  precStrength: PrecStrength;
  /** The type of precipitation for this step. */
  precType: PrecType;
  /** Resolution of the image with data. Measured in degrees. */
  resolution: Resolution;
  /** Nowcast step time. */
  time: Scalars['Time']['output'];
  /** Nowcast step time. */
  timestamp: Scalars['Timestamp']['output'];
};

/** One step of nowcast timeline. */
export type NowcastTimelineStepIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/** Warnings about precipitation in the near future. */
export type NowcastWarning = Warning & {
  __typename?: 'NowcastWarning';
  code: Scalars['String']['output'];
  icon: Scalars['Url']['output'];
  message: Scalars['String']['output'];
  /**
   * Contains short version of warning message.
   * To change the language of this text use the `language` argument
   * of `Query.weather` and `Query.weatherByPoint`.
   */
  shortMessage: Scalars['String']['output'];
  /** Current state of precipitations. */
  state: NowcastWarningState;
  /** URL of the image with the precipitation map. */
  staticMapUrl: Scalars['Url']['output'];
  yandexWeatherUrl: Scalars['Url']['output'];
};

/** Warnings about precipitation in the near future. */
export type NowcastWarningIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/** Warnings about precipitation in the near future. */
export type NowcastWarningMessageArgs = {
  language?: InputMaybe<Language>;
};

/** Warnings about precipitation in the near future. */
export type NowcastWarningStaticMapUrlArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  hideLocationNames?: InputMaybe<Scalars['Boolean']['input']>;
  placemark?: InputMaybe<Scalars['Boolean']['input']>;
  scale?: InputMaybe<Scalars['Int']['input']>;
  theme?: InputMaybe<MapTheme>;
  width?: InputMaybe<Scalars['Int']['input']>;
  zoom?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents state of precipitations in nowcast warning. */
export enum NowcastWarningState {
  Begins = 'BEGINS',
  Ends = 'ENDS',
  NoPrec = 'NO_PREC',
  NoRule = 'NO_RULE',
  Still = 'STILL',
}

/** Ocean tide timeline point. */
export type OceanTideExtremumItem = {
  __typename?: 'OceanTideExtremumItem';
  /** Tide timestamp. */
  timestamp: Scalars['Timestamp']['output'];
  /** Extemum type. */
  type: OceanTideExtremumType;
  /**
   * Tide value.
   *
   * **Units:** `cm`
   * **Possible values:** `(-Infinity, +Infinity)`
   */
  value: Scalars['Float']['output'];
};

/** Ocean tide extremum type. */
export enum OceanTideExtremumType {
  /** Maximum from 12 a.m to 12 p.m or from 12 p.m. to 12 a.m. */
  Max = 'MAX',
  /** Minimum from 12 a.m to 12 p.m or from 12 p.m. to 12 a.m. */
  Min = 'MIN',
  /** Just local extremum. */
  Usual = 'USUAL',
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Cursor to the last element of page. */
  endCursor: Scalars['String']['output'];
  /** Flag indicating the presence of the next page. */
  hasNextPage: Scalars['Boolean']['output'];
};

/** The range of tile palette values. */
export type PaletteRange = {
  __typename?: 'PaletteRange';
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
};

/** Information about the last precipitation in the past. */
export type PastPrec = {
  __typename?: 'PastPrec';
  /** Latitude of the station, if the information came from the station. */
  lat: Scalars['Float']['output'];
  /** Longitude of the station, if the information came from the station. */
  lon: Scalars['Float']['output'];
  /** Intensity of precipitation. */
  precStrength: PrecStrength;
  /** Type of precipitation. */
  precType: PrecType;
  /** ID of the station, if the information came from the station. */
  stationID: Scalars['Int']['output'];
  /** Time when precipitation fell. */
  timestamp: Scalars['Timestamp']['output'];
};

/**
 * Warnings about all weather parameters with personalization.
 * For more info, see https://wiki.yandex-team.ru/weather/warnings
 */
export type PersonalWarning = Warning & {
  __typename?: 'PersonalWarning';
  /** Code of this warning. */
  code: Scalars['String']['output'];
  icon: Scalars['Url']['output'];
  message: Scalars['String']['output'];
  /**
   * Represents relative significance of warning.
   * Possible values are in `[0, 1]`.
   */
  significance: Scalars['Float']['output'];
  staticMapUrl?: Maybe<Scalars['Url']['output']>;
  /**
   * Header for this warning (can be an empty string).
   * Note: Sometimes the title may duplicate part of the text.
   * To remove the mention of the horizon from the warning message,
   * use the `DEFAULT_WITHOUT_HORIZON` preset.
   */
  title: Scalars['String']['output'];
  yandexWeatherUrl: Scalars['Url']['output'];
};

/**
 * Warnings about all weather parameters with personalization.
 * For more info, see https://wiki.yandex-team.ru/weather/warnings
 */
export type PersonalWarningIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/**
 * Warnings about all weather parameters with personalization.
 * For more info, see https://wiki.yandex-team.ru/weather/warnings
 */
export type PersonalWarningMessageArgs = {
  language?: InputMaybe<Language>;
};

/** Represents the phenomenon weather conditions. */
export enum PhenomCondition {
  BlowingSnow = 'BLOWING_SNOW',
  ContinuousHeavyRain = 'CONTINUOUS_HEAVY_RAIN',
  DriftingSnow = 'DRIFTING_SNOW',
  Drizzle = 'DRIZZLE',
  Dust = 'DUST',
  Duststorm = 'DUSTSTORM',
  DustSuspension = 'DUST_SUSPENSION',
  Fog = 'FOG',
  FreezingRain = 'FREEZING_RAIN',
  IcePellets = 'ICE_PELLETS',
  Mist = 'MIST',
  ModerateRain = 'MODERATE_RAIN',
  Smoke = 'SMOKE',
  ThunderstormWithDuststorm = 'THUNDERSTORM_WITH_DUSTSTORM',
  Tornado = 'TORNADO',
  VolcanicAsh = 'VOLCANIC_ASH',
}

/**
 * Input for `Query.weatherByPoint`.
 * Represents a geographical point with `lat` and `lon` coordinates.
 */
export type PointInput = {
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
};

/** Represents the air pollutant. */
export enum Pollutant {
  Co = 'CO',
  No2 = 'NO2',
  O3 = 'O3',
  Pm2p5 = 'PM2p5',
  Pm10 = 'PM10',
  So2 = 'SO2',
}

/** Limits for pollution parameters. */
export type PollutantLimits = {
  __typename?: 'PollutantLimits';
  /**
   * Values less than this limit characterize abnormal concentration of pollutant.
   * greater than – hazardous concentration.
   */
  high: Scalars['Int']['output'];
  /** Values less than this limit characterize normal concentration of pollutant. */
  norm: Scalars['Int']['output'];
};

/** Atmospheric composition forecasts. */
export type Pollution = {
  __typename?: 'Pollution';
  /**
   * Air quality index (AQI).
   * See more here https://www.airnow.gov/aqi/aqi-basics/
   *
   * **Possible values:** `[0, 500]`
   */
  aqi: Scalars['Int']['output'];
  /**
   * Carbon monoxide (CO) is a colorless, highly poisonous, odorless,
   * tasteless, flammable gas that is slightly less dense than air.
   * See more here https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health
   *
   * **Units:** `µg⋅m⁻³`
   * **Possible values:** `[0, +Infinity)`
   */
  co: Scalars['Float']['output'];
  /**
   * The density of air or atmospheric density,
   * is the mass per unit volume of Earth's atmosphere.
   *
   * **Units:** `kg⋅m⁻³`
   * **Possible values:** `[0, +Infinity)`
   */
  density: Scalars['Float']['output'];
  /**
   * The pollutant that makes the greatest contribution to the calculation of AQI.
   * You can assume that `aqi` is the IAQI of this pollutant.
   * See more here https://www.airnow.gov/aqi/aqi-basics/
   */
  dominant: Pollutant;
  /**
   * Strength of a duststorm. Based on wind speed and
   * amount of dust particles in the atmosphere.
   */
  dustStormStrength: DustStormStrength;
  /**
   * The individual AQI for a specific pollutant.
   * See more here https://www.airnow.gov/aqi/aqi-basics/
   *
   * You can request multiple values of this field, using following syntax:
   *
   * `coIAQI: iaqi(pollutant: CO)`
   *
   * **Possible values:** `[0, 500]`
   */
  iaqi: Scalars['Int']['output'];
  /**
   * The major sources of anthropogenic emissions of NO2 are
   * combustion processes (heating, power generation, and engines in vehicles and ships).
   * See more here https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health
   *
   * **Units:** `µg⋅m⁻³`
   * **Possible values:** `[0, +Infinity)`
   */
  no2: Scalars['Float']['output'];
  /**
   * Ground-level ozone (O3), also known as surface-level ozone and
   * tropospheric ozone, is a trace gas in the troposphere.
   * See more here https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health
   *
   * **Units:** `µg⋅m⁻³`
   * **Possible values:** `[0, +Infinity)`
   */
  o3: Scalars['Float']['output'];
  /**
   * PM10 is a suspended large solid particles,
   * with a diameter of 10 micrometers (microns) or less.
   * See more here https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health
   *
   * **Units:** `µg⋅m⁻³`
   * **Possible values:** `[0, +Infinity)`
   */
  pm2p5: Scalars['Float']['output'];
  /**
   * PM2.5 is a fine particulate matter,
   * with a diameter of 2.5 micrometers (microns) or less.
   * See more here https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health
   *
   * **Units:** `µg⋅m⁻³`
   * **Possible values:** `[0, +Infinity)`
   */
  pm10: Scalars['Float']['output'];
  /**
   * SO2 is a colorless gas with a pungent odor,
   * which is formed during the burning of fossil fuels
   * and the melting of mineral ores containing sulfur.
   * See more here https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health
   *
   * **Units:** `µg⋅m⁻³`
   * **Possible values:** `[0, +Infinity)`
   */
  so2: Scalars['Float']['output'];
};

/** Atmospheric composition forecasts. */
export type PollutionIaqiArgs = {
  pollutant: Pollutant;
};

/** Atmospheric composition forecasts aggregated for one time of day . */
export type PollutionDaypart = {
  __typename?: 'PollutionDaypart';
  /** Max air quality index (AQI). */
  maxAqi: Scalars['Int']['output'];
  /** Min air quality index (AQI). */
  minAqi: Scalars['Int']['output'];
};

/**
 * Represents the strength of precipitations.
 * In ascending order: `ZERO` – minimum, `VERY_STRONG` – maximum.
 */
export enum PrecStrength {
  Average = 'AVERAGE',
  Strong = 'STRONG',
  VeryStrong = 'VERY_STRONG',
  Weak = 'WEAK',
  Zero = 'ZERO',
}

/** Represents the type of precipitations. */
export enum PrecType {
  Hail = 'HAIL',
  NoType = 'NO_TYPE',
  Rain = 'RAIN',
  Sleet = 'SLEET',
  Snow = 'SNOW',
}

/** Preset type used in warnings. */
export enum Preset {
  Alice = 'ALICE',
  Default = 'DEFAULT',
  DefaultWithoutHorizon = 'DEFAULT_WITHOUT_HORIZON',
  Drivers = 'DRIVERS',
  Fact = 'FACT',
  Fishing = 'FISHING',
  ForMedia = 'FOR_MEDIA',
  Gardening = 'GARDENING',
  Home = 'HOME',
  MagneticField = 'MAGNETIC_FIELD',
  Pushes = 'PUSHES',
  Running = 'RUNNING',
  Ski = 'SKI',
  Sports = 'SPORTS',
  Summary = 'SUMMARY',
  TodayNoNumberSummary = 'TODAY_NO_NUMBER_SUMMARY',
  TodaySummary = 'TODAY_SUMMARY',
  Viber = 'VIBER',
  WaterSports = 'WATER_SPORTS',
}

/** Limits for `pressure` parameter. */
export type PressureLimits = {
  __typename?: 'PressureLimits';
  /**
   * The pressure below the `pressureNorm` by `delta` points is considered low.
   * The pressure above the `pressureNorm` by `delta` points is considered high.
   */
  delta: Scalars['Int']['output'];
  /**
   * Values less than this limit characterize high pressure.
   * @deprecated use `delta` field, relative to `pressureNorm`
   */
  high: Scalars['Int']['output'];
  /** The pressure change within an hour by `hourDelta` points is considered as a jump. */
  hourDelta: Scalars['Int']['output'];
  /**
   * Values less than this limit characterize low pressure.
   * @deprecated use `delta` field, relative to `pressureNorm`
   */
  low: Scalars['Int']['output'];
  /**
   * Atmospheric pressure norm.
   * @deprecated use `pressureNorm` field
   */
  norm: Scalars['Int']['output'];
};

/**
 * Represents the units of measurement of the pressure value.
 * Can be used to convert to convenient units of measurement.
 * Default unit for this API is `MM_HG`.
 */
export enum PressureUnit {
  /**
   * inches of mercury (in Hg)
   *
   * **Possible values:** `[20, 40]`
   */
  InHg = 'IN_HG',
  /**
   * millibars (mbar)
   *
   * **Possible values:** `[800, 1200]`
   */
  Mbar = 'MBAR',
  /**
   * millimeters of mercury (mm Hg)
   *
   * **Possible values:** `[600, 900]`
   */
  MmHg = 'MM_HG',
  /**
   * hectopascals (hPa)
   *
   * **Possible values:** `[800, 1200]`
   */
  Pascal = 'PASCAL',
}

/** The query root of Weather GraphQL interface. */
export type Query = {
  __typename?: 'Query';
  /** Different articles about weather. */
  blogs?: Maybe<Blogs>;
  /** FAQ for slug. */
  faq?: Maybe<Faq>;
  /** Traffic jams state for location. */
  jams?: Maybe<Jams>;
  /** Limits of weather parameters. */
  limits: Limits;
  /** Additional weather texts and condition translations. */
  localization: Array<Localization>;
  /** List of children locations by `geoId` or `slug` */
  locationList: LocationList;
  /** List of locations for "other locations" frontend block. */
  locationsByDomain: Array<GeoObject>;
  /** List of all resorts. */
  resorts: Array<Resort>;
  /** Current time on the server. */
  serverTime: Scalars['Time']['output'];
  /** Current time on the server. */
  serverTimestamp: Scalars['Timestamp']['output'];
  /** List of weather stations values. */
  stations: Array<Station>;
  /** List of weather stations values by time range. */
  stationsByTimeRange: Array<Station>;
  /**
   * Histotical facts (e.g min/max temperature in this day in history)
   * for a location with `geoId` at `date` format `mm-dd`.
   */
  stationsHistory: Array<Maybe<StationHistory>>;
  /** Timelines for tiled data. */
  tileTimelines: Tiles;
  /** Timelines for tiled data for point with `lat` and `lon` coordinates. */
  tiles: Tiles;
  /**
   * Timelines for tiled data for point with `geoId` coordinate.
   * @deprecated use `tileTimelines`
   */
  tilesByGeoId: Tiles;
  /** List of video streams available for a location. */
  videoStreams: Array<Maybe<VideoStream>>;
  /**
   * List of video streams available for a location with `geoId`.
   * @deprecated use `videoStreams`
   */
  videoStreamsByGeoId: Array<Maybe<VideoStream>>;
  /**
   * List of video streams available for point with `lat` and 'lon' coordinates.
   * @deprecated use `videoStreams`
   */
  videoStreamsByPoint: Array<Maybe<VideoStream>>;
  /** Weather for a location. */
  weather: Weather;
  /**
   * Weather for a location with `geoId`.
   * @deprecated use `weather`
   */
  weatherByGeoId: Weather;
  /** Weather for a geographical point with `lat` and `lon` coordinates. */
  weatherByPoint: Weather;
};

/** The query root of Weather GraphQL interface. */
export type QueryBlogsArgs = {
  language?: InputMaybe<Language>;
};

/** The query root of Weather GraphQL interface. */
export type QueryFaqArgs = {
  language?: InputMaybe<Language>;
  slug: Scalars['String']['input'];
};

/** The query root of Weather GraphQL interface. */
export type QueryJamsArgs = {
  geoID: Scalars['Int']['input'];
  language?: InputMaybe<Language>;
};

/** The query root of Weather GraphQL interface. */
export type QueryLocalizationArgs = {
  language?: InputMaybe<Language>;
};

/** The query root of Weather GraphQL interface. */
export type QueryLocationListArgs = {
  geoId?: InputMaybe<Scalars['Int']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** The query root of Weather GraphQL interface. */
export type QueryLocationsByDomainArgs = {
  tld: Scalars['String']['input'];
};

/** The query root of Weather GraphQL interface. */
export type QueryResortsArgs = {
  language?: InputMaybe<Language>;
};

/** The query root of Weather GraphQL interface. */
export type QueryStationsArgs = {
  language?: InputMaybe<Language>;
  maxLat: Scalars['Float']['input'];
  maxLon: Scalars['Float']['input'];
  minLat: Scalars['Float']['input'];
  minLon: Scalars['Float']['input'];
};

/** The query root of Weather GraphQL interface. */
export type QueryStationsByTimeRangeArgs = {
  request: PointInput;
  timeRange: TimeRange;
};

/** The query root of Weather GraphQL interface. */
export type QueryStationsHistoryArgs = {
  date: Scalars['Date']['input'];
  request?: InputMaybe<GeoIdInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** The query root of Weather GraphQL interface. */
export type QueryTileTimelinesArgs = {
  geoId?: InputMaybe<Scalars['Int']['input']>;
  point?: InputMaybe<PointInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** The query root of Weather GraphQL interface. */
export type QueryTilesArgs = {
  request: PointInput;
};

/** The query root of Weather GraphQL interface. */
export type QueryTilesByGeoIdArgs = {
  request: GeoIdInput;
};

/** The query root of Weather GraphQL interface. */
export type QueryVideoStreamsArgs = {
  geoId?: InputMaybe<Scalars['Int']['input']>;
  point?: InputMaybe<PointInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** The query root of Weather GraphQL interface. */
export type QueryVideoStreamsByGeoIdArgs = {
  request: GeoIdInput;
};

/** The query root of Weather GraphQL interface. */
export type QueryVideoStreamsByPointArgs = {
  request: PointInput;
};

/** The query root of Weather GraphQL interface. */
export type QueryWeatherArgs = {
  geoId?: InputMaybe<Scalars['Int']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  point?: InputMaybe<PointInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** The query root of Weather GraphQL interface. */
export type QueryWeatherByGeoIdArgs = {
  language?: InputMaybe<Language>;
  request: GeoIdInput;
};

/** The query root of Weather GraphQL interface. */
export type QueryWeatherByPointArgs = {
  language?: InputMaybe<Language>;
  request: PointInput;
};

/** Record warnings */
export type RecordWarnings = Warning & {
  __typename?: 'RecordWarnings';
  code: Scalars['String']['output'];
  icon: Scalars['Url']['output'];
  message: Scalars['String']['output'];
  significance: EmercomSignificance;
  yandexWeatherUrl: Scalars['Url']['output'];
};

/** Record warnings */
export type RecordWarningsIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/** Record warnings */
export type RecordWarningsMessageArgs = {
  language?: InputMaybe<Language>;
};

/** Resolution of the image with data. Measured in degrees. */
export type Resolution = {
  __typename?: 'Resolution';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

/** Info about resort. */
export type Resort = {
  __typename?: 'Resort';
  /** Alert for resort. */
  alert?: Maybe<Scalars['String']['output']>;
  /** The resort annual closing date. */
  closingDate?: Maybe<Scalars['Date']['output']>;
  /** Amount of elevators in this resort. */
  elevatorsCount: Scalars['Int']['output'];
  /** Info about foot point of resort. */
  foot?: Maybe<ResortPoint>;
  /** Link to resort image. */
  imageLink?: Maybe<Scalars['Url']['output']>;
  /** Is resort in top. */
  inTop: Scalars['Boolean']['output'];
  /** Latitude of the resort. */
  lat: Scalars['Float']['output'];
  /** Longitude of the resort. */
  lon: Scalars['Float']['output'];
  /** Info about some point in between foot and top points of resort. */
  mid?: Maybe<ResortPoint>;
  /** Human-readable resort name. */
  name: Scalars['String']['output'];
  /** The resort annual opening date. */
  openingDate?: Maybe<Scalars['Date']['output']>;
  /** SERP resort id. */
  permalinkId: Scalars['String']['output'];
  /** Type of resort. */
  resortType: ResortType;
  /** Info about top point of resort. */
  top?: Maybe<ResortPoint>;
};

/** Info about some point of resort. */
export type ResortPoint = {
  __typename?: 'ResortPoint';
  /** Altitude in meters of certain resort point. */
  altitude?: Maybe<Scalars['Int']['output']>;
  /** Latitude of certain resort point. */
  lat?: Maybe<Scalars['Float']['output']>;
  /** Longitude of certain resort point. */
  lon?: Maybe<Scalars['Float']['output']>;
  /** Name of certain resort point. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Represents the type of resort. */
export enum ResortType {
  Ski = 'SKI',
  SummerSki = 'SUMMER_SKI',
}

/** Represents the road condition. */
export enum RoadCondition {
  BlackIce = 'BLACK_ICE',
  Dry = 'DRY',
  GlazeIce = 'GLAZE_ICE',
  LooseSnow = 'LOOSE_SNOW',
  RolledSnow = 'ROLLED_SNOW',
  Wet = 'WET',
}

/** Represents the condition for running. */
export enum RunCondition {
  Discomfort = 'DISCOMFORT',
  Undesirable = 'UNDESIRABLE',
  Well = 'WELL',
}

/**
 * Represents the direction of the sea current in terms of the cardinal directions.
 * To determine the direction more accurately, use `seaCurrentAngle`.
 * The value `0` of `seaCurrentAngle` corresponds to `NORTH`, `180` – `SOUTH`.
 * The enumeration value `CALM` is possible when the `seaCurrentSpeed` is near `0`.
 */
export enum SeaCurrentDirection {
  Calm = 'CALM',
  East = 'EAST',
  North = 'NORTH',
  NorthEast = 'NORTH_EAST',
  NorthWest = 'NORTH_WEST',
  South = 'SOUTH',
  SouthEast = 'SOUTH_EAST',
  SouthWest = 'SOUTH_WEST',
  West = 'WEST',
}

/** Represents the time of the year. */
export enum Season {
  Autumn = 'AUTUMN',
  Spring = 'SPRING',
  Summer = 'SUMMER',
  Winter = 'WINTER',
}

/**
 * Represents the units of measurement of the solar radiation value.
 * Can be used to convert to convenient units of measurement.
 * Default unit for this API is `WATTS_PER_SQUARE_METER`.
 */
export enum SolarIrradiationUnit {
  /**
   * MJ⋅m⁻²⋅h
   *
   * **Possible values:** `[0, +Infinity)`
   */
  MegajoulesPerSquareMeterPerHour = 'MEGAJOULES_PER_SQUARE_METER_PER_HOUR',
  /**
   * W⋅m⁻²
   *
   * **Possible values:** `[0, +Infinity)`
   */
  WattsPerSquareMeter = 'WATTS_PER_SQUARE_METER',
}

/** Space weather vars obtained with NOAA SWPC */
export type Space = {
  __typename?: 'Space';
  /** Interplanetary Magnetic Field in nT. Bt - the total strength of the IMF. More information: https://www.spaceweatherlive.com/en/help/the-interplanetary-magnetic-field-imf.html */
  imfBt: Scalars['Float']['output'];
  /** Interplanetary Magnetic Field in nT. Bx axis. More information: https://www.spaceweatherlive.com/en/help/the-interplanetary-magnetic-field-imf.html */
  imfBx: Scalars['Float']['output'];
  /** Interplanetary Magnetic Field in nT. By axis. More information: https://www.spaceweatherlive.com/en/help/the-interplanetary-magnetic-field-imf.html */
  imfBy: Scalars['Float']['output'];
  /** Interplanetary Magnetic Field in nT. Bz axis. More information: https://www.spaceweatherlive.com/en/help/the-interplanetary-magnetic-field-imf.html */
  imfBz: Scalars['Float']['output'];
  /** Solar wind density in p/cm3. More information: https://www.swpc.noaa.gov/phenomena/solar-wind */
  solarWindDensity: Scalars['Float']['output'];
  /** Solar wind speed in km/sec. More information: https://www.swpc.noaa.gov/phenomena/solar-wind */
  solarWindSpeed: Scalars['Float']['output'];
};

/** Represents the category of sport. */
export enum SportCategory {
  Run = 'RUN',
  Ski = 'SKI',
}

/**
 * Fact weather values from the station.
 * Be careful, some weather values may be skipped
 * because the station can't measure them.
 */
export type Station = {
  __typename?: 'Station';
  /** Cloudiness value from this station for this `timestamp`. */
  cloudiness?: Maybe<Cloudiness>;
  /** Unique station code for these values. */
  code: Scalars['String']['output'];
  /**
   * Calculated using the same logic as `Weather.forecast.hours.condition`,
   * but based on the values from this station.
   */
  condition?: Maybe<Condition>;
  /**
   * Distance between the station and the search point.
   * Measured in kilometers.
   */
  distance: Scalars['Float']['output'];
  /**
   * Calculated using the same logic as `Weather.forecast.hours.feelsLike`,
   * but based on the values from this station.
   */
  feelsLike?: Maybe<Scalars['Int']['output']>;
  /**
   * The percentage of the mass fraction of water vapor in the air
   * to the maximum possible at the current temperature.
   */
  humidity?: Maybe<Scalars['Int']['output']>;
  /**
   * Calculated using the same logic as `Weather.forecast.hours.icon`,
   * but based on the values from this station.
   */
  icon?: Maybe<Scalars['Url']['output']>;
  /** Unique station ID for these values. */
  id: Scalars['Int']['output'];
  /** Flag showing the presence of a thunder for the `timestamp`. */
  isThunder: Scalars['Boolean']['output'];
  /** Latitude of the station location. */
  lat: Scalars['Float']['output'];
  /** Longitude of the station location. */
  lon: Scalars['Float']['output'];
  /** Unique station name for these values. */
  name: Scalars['String']['output'];
  /** The phenomenon observed from this weather station. */
  phenomCondition?: Maybe<PhenomCondition>;
  /** The phenomenon icon that fits to `phenomCondition`. */
  phenomIcon?: Maybe<Scalars['Url']['output']>;
  /**
   * Total amount of precipitation.
   * Measured in millimeters.
   */
  prec?: Maybe<Scalars['Float']['output']>;
  /**
   * The probability of precipitation for this hour.
   * Possible values are in `[0, 1]`.
   */
  precProbability?: Maybe<Scalars['Float']['output']>;
  /** The strength of precipitation according to the data from the station. */
  precStrength?: Maybe<PrecStrength>;
  /** The type of precipitation according to the data from the station. */
  precType?: Maybe<PrecType>;
  /** Atmospheric pressure for this hour. */
  pressure?: Maybe<Scalars['Int']['output']>;
  /**
   * The temperature value in the shade
   * at a height of 2 meters from the ground surface.
   */
  temperature?: Maybe<Scalars['Int']['output']>;
  /** Time of the last data readout in string. */
  time: Scalars['Time']['output'];
  /** Time of the last data readout. */
  timestamp: Scalars['Timestamp']['output'];
  /**
   * The water surface temperature.
   * Exists only for cities that are located near large bodies of water.
   */
  waterTemperature?: Maybe<Scalars['Int']['output']>;
  /** The angle of the wind direction in degrees. */
  windAngle?: Maybe<Scalars['Int']['output']>;
  /** Wind direction according to the data from the station. */
  windDirection?: Maybe<WindDirection>;
  /** Wind speed at a height of 10 meters from the ground surface. */
  windSpeed?: Maybe<Scalars['Float']['output']>;
};

/**
 * Fact weather values from the station.
 * Be careful, some weather values may be skipped
 * because the station can't measure them.
 */
export type StationFeelsLikeArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Fact weather values from the station.
 * Be careful, some weather values may be skipped
 * because the station can't measure them.
 */
export type StationIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/**
 * Fact weather values from the station.
 * Be careful, some weather values may be skipped
 * because the station can't measure them.
 */
export type StationPhenomIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/**
 * Fact weather values from the station.
 * Be careful, some weather values may be skipped
 * because the station can't measure them.
 */
export type StationPressureArgs = {
  unit?: InputMaybe<PressureUnit>;
};

/**
 * Fact weather values from the station.
 * Be careful, some weather values may be skipped
 * because the station can't measure them.
 */
export type StationTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Fact weather values from the station.
 * Be careful, some weather values may be skipped
 * because the station can't measure them.
 */
export type StationWaterTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/**
 * Fact weather values from the station.
 * Be careful, some weather values may be skipped
 * because the station can't measure them.
 */
export type StationWindSpeedArgs = {
  unit?: InputMaybe<WindSpeedUnit>;
};

/** Histotical fact for some day */
export type StationHistory = {
  __typename?: 'StationHistory';
  /** Average cloudiness for this day. */
  cloudiness?: Maybe<Cloudiness>;
  /**
   * The percentage of the mass fraction of water vapor in the air
   * to the maximum possible at the current temperature.
   * Contains the average value for this day.
   */
  humidity?: Maybe<Scalars['Int']['output']>;
  /** The highest `day` daypart temperature for this day. */
  maxDayTemperature?: Maybe<Scalars['Int']['output']>;
  /** The highest temperature for this day. */
  maxTemperature?: Maybe<Scalars['Int']['output']>;
  /** The lowest `night` daypart temperature for this day. */
  minNightTemperature?: Maybe<Scalars['Int']['output']>;
  /** The lowest temperature for this day. */
  minTemperature?: Maybe<Scalars['Int']['output']>;
  /**
   * Total amount of precipitation for this day.
   * Measured in millimeters.
   */
  prec?: Maybe<Scalars['Float']['output']>;
  /** The highest strength of precipitation for this day. */
  precStrength?: Maybe<PrecStrength>;
  /** Precipitation corresponding to the precipitation strength. */
  precType?: Maybe<PrecType>;
  /** Atmospheric pressure for this day. */
  pressure?: Maybe<Scalars['Int']['output']>;
  /** Average wind speed for this day. */
  windSpeed?: Maybe<Scalars['Float']['output']>;
  /** The year corresponding to this day */
  year: Scalars['Int']['output'];
};

/** Histotical fact for some day */
export type StationHistoryMaxDayTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Histotical fact for some day */
export type StationHistoryMaxTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Histotical fact for some day */
export type StationHistoryMinNightTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Histotical fact for some day */
export type StationHistoryMinTemperatureArgs = {
  unit?: InputMaybe<TemperatureUnit>;
};

/** Histotical fact for some day */
export type StationHistoryPressureArgs = {
  unit?: InputMaybe<PressureUnit>;
};

/** Histotical fact for some day */
export type StationHistoryWindSpeedArgs = {
  unit?: InputMaybe<WindSpeedUnit>;
};

/**
 * Summary for day and night parts only.
 * Use this aggregations when you divide the day into two parts: day and night.
 */
export type Summary = {
  __typename?: 'Summary';
  /** Aggregations for the entire civil day. */
  day: Daypart;
  /**
   * Night aggregations.
   * Be careful, it is the night before the morning of the current day.
   * If you need a night after the evening of the current day,
   * take the night from the next day.
   */
  night: Daypart;
};

/**
 * Represents the direction of the swell wave in terms of the cardinal directions.
 * To determine the direction more accurately, use `swellAngle`.
 * The value `0` of `swellAngle` corresponds to `NORTH`, `180` – `SOUTH`.
 * The enumeration value `CALM` is possible when the `swellHeight` is near `0`.
 */
export enum SwellDirection {
  Calm = 'CALM',
  East = 'EAST',
  North = 'NORTH',
  NorthEast = 'NORTH_EAST',
  NorthWest = 'NORTH_WEST',
  South = 'SOUTH',
  SouthEast = 'SOUTH_EAST',
  SouthWest = 'SOUTH_WEST',
  West = 'WEST',
}

/**
 * Represents the units of measurement of the temperature value.
 * Can be used to convert to convenient units of measurement.
 * Default unit for this API is `CELSIUS`.
 */
export enum TemperatureUnit {
  /**
   * Celsius degree.
   *
   * **Possible values:** `[-273.15, +Infinity)`
   */
  Celsius = 'CELSIUS',
  /**
   * Fahrenheit degree.
   *
   * **Possible values:** `[-459,67, +Infinity)`
   */
  Fahrenheit = 'FAHRENHEIT',
}

/** Response of temperatureOnHeight function. */
export type TemperatureWithHeight = {
  __typename?: 'TemperatureWithHeight';
  /** The closest to the specified height. */
  height: Scalars['Int']['output'];
  /** Temperature at the provided height. */
  temperature: Scalars['Int']['output'];
};

/** Timelines for tiled data. */
export type Tiles = {
  __typename?: 'Tiles';
  humidity: TilesTimeline;
  prec: TilesTimeline;
  pressureMm: TilesTimeline;
  snowDepth: TilesTimeline;
  soilMoisture: TilesTimeline;
  soilTemperature: TilesTimeline;
  surfaceTemperature: TilesTimeline;
  temperature: TilesTimeline;
  temperatureCities: TilesTimeline;
  waterTemperature: TilesTimeline;
  windSpeed: TilesTimeline;
};

/** Weather tiles timeline. */
export type TilesTimeline = {
  __typename?: 'TilesTimeline';
  /** Palette minimal and maximal value. */
  paletteValuesRange: PaletteRange;
  /** Timeline steps array. */
  steps: Array<TimelineStep>;
};

/** Time interval [from, to]. */
export type TimeRange = {
  from: Scalars['Timestamp']['input'];
  to: Scalars['Timestamp']['input'];
};

/** One step of timeline. */
export type TimelineStep = {
  __typename?: 'TimelineStep';
  /** Rectangle where data is available. */
  bounds: Bounds;
  /**
   * Data generation time.
   * Used for synchronization when requesting tile data.
   */
  genTime: Scalars['Timestamp']['output'];
  /** Resolution of the image with data. Measured in degrees. */
  resolution: Resolution;
  /** Timeline step time. */
  time: Scalars['Time']['output'];
  /** Timeline step time. */
  timestamp: Scalars['Timestamp']['output'];
  /** Timeline step value. */
  value?: Maybe<Scalars['Float']['output']>;
};

/** Information that defines the time zone. */
export type Timezone = {
  __typename?: 'Timezone';
  /** A well-known abbreviation. */
  abbr: Scalars['String']['output'];
  /** Indicates that the timezone is currently daylight saving time (DST). */
  dst: Scalars['Boolean']['output'];
  /** Name from IANA time zone database. */
  name: Scalars['String']['output'];
  /** Offset in seconds (can be negative). */
  offset: Scalars['Int']['output'];
};

/** Represents color of current traffic state. */
export enum TrafficLight {
  Green = 'GREEN',
  Red = 'RED',
  Yellow = 'YELLOW',
}

/** Limits for `uvIndex` parameter. */
export type UvIndexLimits = {
  __typename?: 'UvIndexLimits';
  /** Values less than this limit characterize a high UV index. */
  high: Scalars['Int']['output'];
  /** Values less than this limit characterize a low UV index. */
  low: Scalars['Int']['output'];
  /** Values less than this limit characterize a medium UV index. */
  medium: Scalars['Int']['output'];
  /**
   * Values less than this limit characterize a very high UV index,
   * greater than – extreme UV index.
   */
  veryHigh: Scalars['Int']['output'];
};

export type VideoStream = {
  __typename?: 'VideoStream';
  /** Title of video stream */
  title: Scalars['String']['output'];
  /** URL to video steam */
  url: Scalars['String']['output'];
};

/** Limits for `visibility` parameter. */
export type VisibilityLimits = {
  __typename?: 'VisibilityLimits';
  /** @deprecated use `medium` field */
  high: Scalars['Int']['output'];
  /** Values less than this limit characterize poor visibility. */
  low: Scalars['Int']['output'];
  /**
   * Values less than this limit characterize good visibility,
   * greater than – high visibility.
   */
  medium: Scalars['Int']['output'];
};

/** Interface for all warnings from `Weather.warnings`. */
export type Warning = {
  /** Code of this warning. */
  code: Scalars['String']['output'];
  /** Contains an icon that describes the warning. */
  icon: Scalars['Url']['output'];
  /**
   * Contains warning message.
   * To change the language of this text use the `language` argument
   * of `Query.weather` and `Query.weatherByPoint`.
   * Set the `language` parameter in this field to override the global `language` argument.
   */
  message: Scalars['String']['output'];
  /** Contains url to page of Yandex.Weather with warning details. */
  yandexWeatherUrl: Scalars['Url']['output'];
};

/** Interface for all warnings from `Weather.warnings`. */
export type WarningIconArgs = {
  format: IconFormat;
  theme?: InputMaybe<IconTheme>;
};

/** Interface for all warnings from `Weather.warnings`. */
export type WarningMessageArgs = {
  language?: InputMaybe<Language>;
};

/**
 * Input for `Weather.warnings`.
 * Contains warnings filters.
 * All types of warnings are enabled by default.
 */
export type WarningsInput = {
  /** Always return nowcast warning, even without precipitations. */
  alert?: InputMaybe<Scalars['Boolean']['input']>;
  /** Warnings about abnormal weather events (CAP). */
  cap?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Warnings about abnormal weather events
   * from the Ministry of Emergency Situations (МЧС).
   */
  emercom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Personal Warnings will be grouped by horizon. */
  grouped?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filters out warnings with low significance. Returns all warnings by default. */
  minSignificance?: InputMaybe<Scalars['Float']['input']>;
  /** Warnings about precipitation in the near future. */
  nowcast?: InputMaybe<Scalars['Boolean']['input']>;
  /** Warnings about all weather parameters for the current point. */
  personal?: InputMaybe<Scalars['Boolean']['input']>;
  /** Returns personal warnings with specified codes only. Leave empty to receive all available warnings. */
  personalCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Different translations for personal warnings. */
  personalMessageFormat?: InputMaybe<Scalars['String']['input']>;
  /** Preset type that changes translations and logic. */
  preset?: InputMaybe<Preset>;
  /** Warnings about weather records. */
  record?: InputMaybe<Scalars['Boolean']['input']>;
  /** Summary about current weather conditions. */
  summary?: InputMaybe<Scalars['Boolean']['input']>;
  /** Units of measurements. */
  units?: InputMaybe<WarningsUnitInput>;
};

/** Input with unit measurements for warnings. */
export type WarningsUnitInput = {
  /** Pressure unit measurement. */
  pressure?: PressureUnit;
  /** Temperature unit measurement. */
  temperature?: TemperatureUnit;
  /** Wind speed unit measurement. */
  windSpeed?: WindSpeedUnit;
};

/**
 * Represents the direction of the wave in terms of the cardinal directions.
 * To determine the direction more accurately, use `waveAngle`.
 * The value `0` of `waveAngle` corresponds to `NORTH`, `180` – `SOUTH`.
 * The enumeration value `CALM` is possible when the `waveHeight` is near `0`.
 */
export enum WaveDirection {
  Calm = 'CALM',
  East = 'EAST',
  North = 'NORTH',
  NorthEast = 'NORTH_EAST',
  NorthWest = 'NORTH_WEST',
  South = 'SOUTH',
  SouthEast = 'SOUTH_EAST',
  SouthWest = 'SOUTH_WEST',
  West = 'WEST',
}

/** Generic object containing all available types of weather data. */
export type Weather = {
  __typename?: 'Weather';
  /** Nowcast alert. */
  alert?: Maybe<NowcastWarning>;
  /** Average weather statistics for 10 years. */
  climate: Climate;
  /** Most relevant emercom warning. */
  emercom?: Maybe<EmercomWarning>;
  /** The main weather forecast. */
  forecast: Forecast;
  /** All information about requested location or point. */
  location: Location;
  /** Weather now. */
  now: Now;
  /** Weather precipitations nowcast timeline. */
  nowcast: NowcastTimeline;
  /** Info about nowcast source that was used for nowcast calculation. */
  nowcastSources: NowcastSources;
  /** Info about past precipitations in the past. */
  pastPrec?: Maybe<PastPrec>;
  /** Runtime personal warnings. */
  personalWarnings: Array<PersonalWarning>;
  /** URL to page for the current request. */
  url: Scalars['Url']['output'];
  /** All weather warnings. */
  warnings: Array<Warning>;
};

/** Generic object containing all available types of weather data. */
export type WeatherNowcastSourcesArgs = {
  request?: InputMaybe<NowcastSourcesInput>;
};

/** Generic object containing all available types of weather data. */
export type WeatherPersonalWarningsArgs = {
  minSignificance?: InputMaybe<Scalars['Float']['input']>;
  preset?: InputMaybe<Preset>;
  units?: InputMaybe<WarningsUnitInput>;
};

/** Generic object containing all available types of weather data. */
export type WeatherWarningsArgs = {
  request?: InputMaybe<WarningsInput>;
};

/** Response of windAngleOnHeight function. */
export type WindAngleWithHeight = {
  __typename?: 'WindAngleWithHeight';
  /** The closest to the specified height. */
  height: Scalars['Int']['output'];
  /**
   * Wind angle at the provided height.
   *
   * **Units:** `°`
   * **Possible values:** `[0, 359]`
   */
  windAngle: Scalars['Int']['output'];
};

/**
 * Represents the direction of the wind in terms of the cardinal directions.
 * To determine the direction more accurately, use `windAngle`.
 * The value `0` of `windAngle` corresponds to `NORTH`, `180` – `SOUTH`.
 * The enumeration value `CALM` is possible when the `windSpeed` is `0`.
 */
export enum WindDirection {
  Calm = 'CALM',
  East = 'EAST',
  North = 'NORTH',
  NorthEast = 'NORTH_EAST',
  NorthWest = 'NORTH_WEST',
  South = 'SOUTH',
  SouthEast = 'SOUTH_EAST',
  SouthWest = 'SOUTH_WEST',
  West = 'WEST',
}

/** Response of windDirectionOnHeight function. */
export type WindDirectionWithHeight = {
  __typename?: 'WindDirectionWithHeight';
  /** The closest to the specified height. */
  height: Scalars['Int']['output'];
  /** Wind direction at the provided height. */
  windDirection: WindDirection;
};

/** Limits for `windGust` parameter. */
export type WindGustLimits = {
  __typename?: 'WindGustLimits';
  /** The values of wind gusts less than this limit can be considered unimportant. */
  significant: Scalars['Float']['output'];
};

/** Limits for `windSpeed` parameter. */
export type WindSpeedLimits = {
  __typename?: 'WindSpeedLimits';
  /** Values less than this limit characterize average wind. */
  average: Scalars['Float']['output'];
  /** Values less than this limit can be considered the absence of wind. */
  calm: Scalars['Float']['output'];
  /**
   * Values less than this limit characterize strong wind,
   * greater than – very strong.
   */
  strong: Scalars['Float']['output'];
  /** Values less than this limit characterize weak wind. */
  weak: Scalars['Float']['output'];
};

/**
 * Represents the units of measurement of the wind speed value.
 * Can be used to convert to convenient units of measurement.
 * Default unit for this API is `METERS_PER_SECOND`.
 */
export enum WindSpeedUnit {
  /** kilometers per hour */
  KilometersPerHour = 'KILOMETERS_PER_HOUR',
  /** nautical miles per hour (knots) */
  Knots = 'KNOTS',
  /** meters per second */
  MetersPerSecond = 'METERS_PER_SECOND',
  /** miles per hour */
  MilesPerHour = 'MILES_PER_HOUR',
}

/** Response of windSpeedOnHeight function. */
export type WindSpeedWithHeight = {
  __typename?: 'WindSpeedWithHeight';
  /** The closest to the specified height. */
  height: Scalars['Int']['output'];
  /** Wind speed at the provided height. */
  windSpeed: Scalars['Float']['output'];
};

export type FetchWeatherDataQueryVariables = Exact<{
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
  limit: Scalars['Int']['input'];
}>;

export type FetchWeatherDataQuery = {
  __typename?: 'Query';
  weatherByPoint: {
    __typename?: 'Weather';
    now: {
      __typename?: 'Now';
      temperature: number;
      condition: Condition;
      feelsLike: number;
      windSpeed: number;
      windDirection: WindDirection;
      icon: any;
    };
    forecast: {
      __typename?: 'Forecast';
      hours: {
        __typename?: 'ForecastHoursConnection';
        edges: Array<{
          __typename?: 'ForecastHoursEdge';
          node: { __typename?: 'ForecastHour'; timestamp: any; temperature: number; icon: any };
        }>;
      };
      days: Array<{
        __typename?: 'ForecastDay';
        time: any;
        summary: {
          __typename?: 'Summary';
          day: { __typename?: 'Daypart'; temperature: number; condition: Condition; icon: any };
          night: { __typename?: 'Daypart'; temperature: number; condition: Condition; icon: any };
        };
      }>;
    };
  };
};

export const FetchWeatherDataDocument = gql`
  query fetchWeatherData($lat: Float!, $lon: Float!, $limit: Int!) {
    weatherByPoint(request: { lat: $lat, lon: $lon }) {
      now {
        temperature
        condition
        feelsLike
        windSpeed
        windDirection
        icon(format: SVG)
      }
      forecast {
        hours(first: 48) {
          edges {
            node {
              timestamp
              temperature
              icon(format: SVG, theme: FLAT)
            }
          }
        }
        days(limit: $limit) {
          time
          summary {
            day {
              temperature
              condition
              icon(format: SVG)
            }
            night {
              temperature
              condition
              icon(format: SVG)
            }
          }
        }
      }
    }
  }
`;

/**
 * __useFetchWeatherDataQuery__
 *
 * To run a query within a React component, call `useFetchWeatherDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchWeatherDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchWeatherDataQuery({
 *   variables: {
 *      lat: // value for 'lat'
 *      lon: // value for 'lon'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useFetchWeatherDataQuery(
  baseOptions: Apollo.QueryHookOptions<FetchWeatherDataQuery, FetchWeatherDataQueryVariables> &
    ({ variables: FetchWeatherDataQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchWeatherDataQuery, FetchWeatherDataQueryVariables>(FetchWeatherDataDocument, options);
}
export function useFetchWeatherDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FetchWeatherDataQuery, FetchWeatherDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchWeatherDataQuery, FetchWeatherDataQueryVariables>(FetchWeatherDataDocument, options);
}
export function useFetchWeatherDataSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<FetchWeatherDataQuery, FetchWeatherDataQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<FetchWeatherDataQuery, FetchWeatherDataQueryVariables>(
    FetchWeatherDataDocument,
    options,
  );
}
export type FetchWeatherDataQueryHookResult = ReturnType<typeof useFetchWeatherDataQuery>;
export type FetchWeatherDataLazyQueryHookResult = ReturnType<typeof useFetchWeatherDataLazyQuery>;
export type FetchWeatherDataSuspenseQueryHookResult = ReturnType<typeof useFetchWeatherDataSuspenseQuery>;
export type FetchWeatherDataQueryResult = Apollo.QueryResult<FetchWeatherDataQuery, FetchWeatherDataQueryVariables>;
