import {State} from "../models/State";

/**
 * Хранилище.
 */
let storage: StateStorage;

/**
 * Хранилище стейтов.
 */
export class StateStorage {
  /**
   * Коллекция.
   */
  private _collection: Map<string, State>;

  constructor() {
    this._collection = new Map<string, State>();
  }

  /**
   * Добавить.
   * @param key Ключ.
   * @param state Стейт.
   */
  add(key: string, state: State) {
    this._collection.set(key, state);
  }

  /**
   * Получить.
   * @param key Ключ.
   */
  get(key: string): State {
    return this._collection.get(key);
  }
}

/**
 * Создать хранилище.
 */
export const createStorage = (): StateStorage => {
  storage = new StateStorage();
  return storage;
};

/**
 * Получить хранилище.
 */
export const get = (): StateStorage => {
  if (undefined === storage) {
    createStorage();
  }
  return storage;
};
