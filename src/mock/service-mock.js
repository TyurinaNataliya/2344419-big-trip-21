import Observable from '../framework/observable.js';
import {UpdateType} from '../const.js';

export default class MockService extends Observable{
  destinations = [];
  offers = [];
  points = [];
  pointsApiService = null;

  constructor({pointsApiService}) {
    super();
    this.pointsApiService = pointsApiService;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

  getPoints() {
    return this.points;
  }

  async init() {
    try {
      this.destinations = await this.pointsApiService.destinations;
      this.offers = await this.pointsApiService.offers;
      const points = await this.pointsApiService.points;
      this.points = points.map(this.adaptToClient);
    } catch (err) {
      this.destinations = [];
      this.offers = [];
      this.points = [];
    }
    this._notify(UpdateType.INIT, this.points);
  }

  async updatePoint(updateType, update) {//изменение
    const index = this.points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting point');
    }

    try {
      const response = await this.pointsApiService.updatePoint(update);
      const updatedPoint = this.adaptToClient(response);
      this.points = [...this.points.slice(0, index), updatedPoint, ...this.points.slice(index + 1)];
      this._notify(updateType, updatedPoint);
    } catch(err) {
      throw new Error('Can\'t update point');
    }
  }

  addPoint(updateType, update) {//добавление
    this.points = [update, ...this.points];

    this._notify(updateType, update);
  }

  deletePoint(updateType, update) {//удаление
    const index = this.points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting point');
    }

    this.points = [...this.points.slice(0, index), ...this.points.slice(index + 1)];

    this._notify(updateType);
  }

  adaptToClient(point) {
    const adaptedPoint = {
      ...point,
      basePrice: point['base_price'],
      dateFrom: point['date_from'] !== null ? new Date(point['date_from']) : point['date_from'],
      dateTo: point['date_to'] !== null ? new Date(point['date_to']) : point['date_to'],
      isFavorite: point['is_favorite'],
    };

    delete adaptedPoint['base_price'];
    delete adaptedPoint['date_from'];
    delete adaptedPoint['date_to'];
    delete adaptedPoint['is_favorite'];

    return adaptedPoint;
  }
}
