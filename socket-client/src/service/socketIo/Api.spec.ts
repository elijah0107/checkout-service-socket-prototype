import * as SocketIOApi from "./Api";

describe('Тестирование Api SocketIO', () => {
  it('Тестирование создание и получение класса Api', () => {
    expect(SocketIOApi.get()).toBeUndefined();
    SocketIOApi.create('test');
    expect(SocketIOApi.get()).toBeInstanceOf(Object)
  });
  it('Тестирование установки признака завершения иницилазиции стейта', () => {
    SocketIOApi.create('');
    const api = SocketIOApi.get();
    expect(api).toHaveProperty('_isInitialized', false);
    expect(api.isInitialized()).toBe(false);
    api.setIsInitialized(true);
    expect(api).toHaveProperty('_isInitialized', true);
    expect(api.isInitialized()).toBe(true);
  });
  it('Тестирование установки параметров запроса', () => {
    SocketIOApi.create('');
    const api = SocketIOApi.get();
    expect(api).toHaveProperty('_queryParams', {});
    api.setQueryParams({data: 'test'});
    expect(api).toHaveProperty('_queryParams', {data: 'test'});
  });
  it('Тестирование добавления слушателей', () => {
    SocketIOApi.create('');
    const api = SocketIOApi.get();
    const socket = api.getSocket();
    const spy = jest.spyOn(socket, 'on');
    api.connectListeners();
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('Тестирование отправки команды инициализаци', () => {
    SocketIOApi.create('');
    const api = SocketIOApi.get();
    const socket = api.getSocket();
    const spy = jest.spyOn(socket, 'emit');
    api.commandInit();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
