import {EventInterface} from "./interfaces"

/**
 * Отправить событие.
 * @param event Событие.
 */
export const send = (event: EventInterface) => {
  const {socket, name, queryModel} = event;
  socket.emit(name, queryModel);
};
