import {UserInterface} from "./User";
import {Socket} from "socket.io";

/**
 * Стейт пользователя.
 */
export class State {
  /**
   * Ключ валидации.
   */
  private _validKay: string;

  /**
   * Сокет соединения.
   */
  private _socket: Socket;

  /**
   * Населённый пункт.
   */
  settlement: Object;

  /**
   * Пользователь.
   */
  user: UserInterface;

  /**
   * Установить ключ валидации.
   * @param key
   */
  public setValidKey(key: string): void {
    this._validKay = key;
  }

  /**
   * Состояние валидно.
   * @param stateKey Ключ стейта.
   */
  public isValid(stateKey: string): boolean {
    return this._validKay === stateKey;
  }

  /**
   * Установить сокет соединения.
   * @param socket Сокет.
   */
  public setSocket(socket: Socket): void {
    this._socket = socket;
  }
}
