import * as io from 'socket.io-client';
import * as handlers from './handlers';

/**
 * Объект с api.
 */
let api: Api;

/**
 * Класс для работы с сервером по socket.io.
 */
export class Api {
  /**
   * Подключение.
   */
  private readonly _socket: SocketIOClient.Socket;

  /**
   * Параметры запроса к api.
   */
  private _queryParams: Object = {};

  /**
   * Соединение успешно подготовлено к дальнейшей работе.
   */
  private _isInitialized: boolean = false;

  /**
   * Конструктор.
   * @param uri Ссылка на соединение с сервером.
   */
  constructor(uri: string) {
    this._socket = io.connect(uri);
    if (this._socket) {
      console.log('Соединение установлено');
    } else {
      throw new Error('Соединение не установлено');
    }
  }

  /**
   * Подключить слушатели.
   */
  public connectListeners = () => {
    this._socket.on('server.state.init.result', handlers.initResult);
    return this;
  };

  /**
   * Инициализация.
   */
  public commandInit = () => {
    this._socket.emit('server.state.init', this._queryParams);
  };

  /**
   * Установить параметры запроса.
   */
  public setQueryParams = (object: Object) => {
    this._queryParams = object;
  };

  /**
   * Установить признак инициализации.
   * @param isInit Инициализировано.
   */
  public setIsInitialized = (isInit: boolean) => {
    this._isInitialized = isInit;
  };

  /**
   * API готово к работе.
   */
  public isInitialized = () => {
    return this._isInitialized;
  };

  /**
   * Получить Socket соединения.
   */
  public getSocket = () => {
    return this._socket;
  }
}

/**
 * Создать Api класс
 * @param uri Ссылка к серверу с Api.
 */
export const create = (uri: string): void => {
  api = new Api(uri);
};

/**
 * Получить api.
 */
export const get = (): Api => {
  return api;
};
