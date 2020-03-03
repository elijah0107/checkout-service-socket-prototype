import {Socket} from "socket.io";
import {SERVER_SOCKET_DISCONNECT, SERVER_STATE_INIT_START} from "../components/clientEvents";
import initializationState from "./initializationState";
import disconnect from "./disconnect";
import Buffer from "../components/Buffer";

/**
 * Обработчик подключений по socket.
 * В нём мы навешиваем слушатели на передаваемые команды с клиента.
 * @param socket Сокет соединения.
 */
export const socketHandler = (socket: Socket) => {
  console.log('Подключение установлено');
  const buffer = new Buffer();
  console.log('Буфер соединения создан');
  socket.on(SERVER_STATE_INIT_START, (data: InitRequestInterface) => {initializationState(buffer, data)});
  socket.on(SERVER_SOCKET_DISCONNECT, () => {disconnect(buffer)});
  console.log('Слушатели добавлены');
};

module.exports = {socketHandler};
