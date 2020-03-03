import {socketHandler} from "./socket";
import {createSocket} from "../components/testHelper";

describe('Тестирование обработчиков соединения.', () => {
  it('Тестирование socketHandler', () => {
    const socket = createSocket();
    const spy = jest.spyOn(socket, 'on');
    socketHandler(socket);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(socket).toHaveProperty('eventList', ['server.state.init', 'disconnect'])
  });
});
