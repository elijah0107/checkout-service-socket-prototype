import * as SocketIOApi from "./Api";
import {initResult} from "./handlers";
import {InitEventResponseInterface} from "./interfaces";

describe('Тестирование обработчиков соединения.', () => {
  it('Тестирование обработки результата иницилазиации', () => {
    SocketIOApi.create('');
    const spySetInit = jest.spyOn(SocketIOApi.get(), 'setIsInitialized');
    const spyGetInit = jest.spyOn(SocketIOApi.get(), 'isInitialized');
    initResult({isInit: true} as InitEventResponseInterface);
    expect(spySetInit).toHaveBeenCalled();
    expect(spyGetInit).toHaveBeenCalled();
  });
});
