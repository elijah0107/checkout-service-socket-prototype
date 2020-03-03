import {InitEventResponseInterface} from "./interfaces";
import * as SocketApiModule from "./Api";

/**
 * Обработчик результата инициализации стейта.
 * @param response Ответ с результатом инициализации.
 */
export const initResult = (response: InitEventResponseInterface) => {
  const api = SocketApiModule.get();
  api.setIsInitialized(response.isInit);
  if (api.isInitialized()) {
    console.log('Приложение инициализировано');
  }
};
