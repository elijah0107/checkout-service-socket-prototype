import {Socket} from "socket.io";

/**
 * Интерфейс события.
 */
export interface EventInterface {
  name: string,
  socket: Socket,
  queryModel?: object,
}

/**
 * Интерфейс ответа события инициализации.
 */
export interface InitEventResponseInterface {
  isInit: boolean;
}
