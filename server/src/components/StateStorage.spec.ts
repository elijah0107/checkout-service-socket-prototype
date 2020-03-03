import {StateStorage} from "./StateStorage";
import {State} from "../models/State";
import {UserInterface} from "../models/User";

describe('Тестирование хранилища стейта', () => {
  it('Тестирование добавления и получения стейта', () => {
    const socketStateStorage = new StateStorage();
    // В коллекции ничего нет.
    expect(socketStateStorage.get('1')).toBeUndefined();
    socketStateStorage.add('1', <State>{settlement:{}, user: <UserInterface>{name: 'test'}});
    const state = socketStateStorage.get('1');
    expect(state.user.name).toBe('test');
  });
});
