
const DEFAULT_TYPE = 'flight';
const DESTINATION_ITEMS_LENGTH = 3;

const WAYPOINT_TYPE = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'CheckIn',
  'Sightseeing',
  'Restaurant',
];


const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer',
};

const BLANK_POINT = {
  basePrice: null,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: DEFAULT_TYPE
};
const enabledSortType = {
  [SortType.DAY]: true,
  [SortType.EVENT]: false,
  [SortType.TIME]: true,
  [SortType.PRICE]: true,
  [SortType.OFFER]: false
};

const FilterType = {
  EVERYTHING: 'everything',//все
  FUTURE: 'future',//будущее
  PRESENT: 'present',//настоящее
  PAST: 'past',
};//прошлое

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',//малые изменения
  MINOR: 'MINOR',//средние изменения
  MAJOR: 'MAJOR',//большие изменения
  INIT: 'INIT',//инициализация
};

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export {
  UpdateType,
  TimeLimit,
  UserAction,
  Mode,
  SortType,
  enabledSortType,
  WAYPOINT_TYPE,
  DEFAULT_TYPE,
  BLANK_POINT,
  FilterType,
  DESTINATION_ITEMS_LENGTH
};
