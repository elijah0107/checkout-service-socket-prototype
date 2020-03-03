import * as socketIo from "socket.io";

/**
 * Создать Socket для тестирования.
 */
export function createSocket() {
  let eventList: string[] = [];
  let emitDataList: object[] = [];
  return {
    eventList,
    emitDataList,
    on: (message: string) => {
      eventList.push(message);
      return this;
    },
    emit: (event: string | symbol, ...args: any[]) => {
      emitDataList.push({ event, ...args });
      return this;
    }
  } as unknown as socketIo.Socket;
}
