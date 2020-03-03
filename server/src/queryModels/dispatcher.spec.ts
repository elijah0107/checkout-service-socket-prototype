import {createSocket} from "../components/testHelper";
import {EventInterface} from "./interfaces";
import * as dispatcher from "./dispatcher";

describe('Тестирование диспетчера событий', () => {
  it('Тестирование отправки события без данных.', () => {
    const socket = createSocket();
    const spy = jest.spyOn(socket, 'emit');
    let event = {
      socket,
      name: 'eventName',
    } as EventInterface;
    dispatcher.send(event);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(socket).toHaveProperty(
      'emitDataList',
      [
        {event: 'eventName', 0: undefined},
      ]
    )
  });
  it('Тестирование отправку события с данными.', () => {
    const socket = createSocket();
    const spy = jest.spyOn(socket, 'emit');
    let event = {
      socket,
      name: 'eventName2',
      queryModel: {data: 'test'},
    } as EventInterface;
    dispatcher.send(event);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(socket).toHaveProperty(
      'emitDataList',
      [
        {event: 'eventName2', 0: {data: 'test'}},
      ]
    )
  })
});
