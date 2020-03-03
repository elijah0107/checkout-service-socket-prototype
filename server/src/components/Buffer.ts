import {State} from "../models/State";

/**
 * Буфер с данными соединения клиента.
 */
class Buffer {
  /**
   * Состояние.
   */
  private _state: State;

  /**
   * Установить состояние.
   * @param state Состояние.
   */
  setState(state: State) {
    this._state = state;
  }
}

export default Buffer;
