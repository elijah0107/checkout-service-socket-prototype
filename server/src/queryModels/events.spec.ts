import {createSocket} from "../components/testHelper";
import * as eventComponent from "./events";
import {EventInterface} from "./interfaces";

describe('Тестирование формирования событий модели запроса', () => {
  fit('Тестирование создания события', () => {
    const socket = createSocket();
    let event = eventComponent.create(socket, 'eventName');
    expect(event).toEqual({
      socket,
      name: 'eventName'
    } as EventInterface);
    event = eventComponent.create(socket, 'eventName', {param: 'test'});
    expect(event).toEqual({
      socket,
      name: 'eventName',
      queryModel: {param: 'test'}
    } as EventInterface);
  });
});
