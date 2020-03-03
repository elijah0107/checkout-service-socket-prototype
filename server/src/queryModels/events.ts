/**
 * Триггеры событий для клиента.
 */

import {EventInterface, InitEventResponseInterface} from "./interfaces";
import {Socket} from "socket.io";

/**
 * Запуск рендера React App.
 */
export const CLIENT_RENDER_RUN = 'client.render.run';

/**
 * Инициализация стейта завершена.
 */
export const CLIENT_STATE_INIT_COMPLETE = 'server.state.init.result';

/**
 * Создать событие.
 * @param socket Сокет соединения.
 * @param name Название события.
 * @param queryModel Модель запроса.
 */
export const create = (socket: Socket, name: string, queryModel?: object): EventInterface => {
  let result = <EventInterface>{
    socket,
    name,
  };
  if (undefined !== queryModel || {} !== queryModel) {
    result.queryModel = queryModel;
  }

  return result;
};

/**
 * Инициализация завершена.
 * @param socket Сокет соединения.
 * @param isInit Инициализировано.
 */
export const initComplete = (socket: Socket, isInit: boolean): EventInterface => {
  return create(socket, CLIENT_STATE_INIT_COMPLETE, <InitEventResponseInterface>{isInit});
};

/**
 * Запустить рендер реакт-приложения на фронте.
 * @param socket Сокет соединения.
 */
export const reactRenderRun = (socket: Socket): EventInterface => {
  return create(socket, CLIENT_RENDER_RUN);
};
