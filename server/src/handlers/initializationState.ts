import Buffer from "../components/Buffer";
import {State} from "../models/State";
import * as hash from "object-hash";
import {get} from "../components/StateStorage";

/**
 * Инициализация стейта.
 * @param buffer Буфер.
 * @param data Данные запроса.
 */
const initializationState = (buffer: Buffer, data: InitRequestInterface) => {
  const stateStorage = get();
  const userId = getUserId();
  const userHash = hash({userId: userId});
  const stateKey = getHashKey(data.params, userHash);
  let state = stateStorage.get(String(userId));
  if (undefined === state || !state.isValid(stateKey)) {
    state = new State();
    state.setValidKey(stateKey);
  }
  stateStorage.add(String(userId), state);
  buffer.setState(state);
  console.log(stateStorage, buffer, data);
};

/**
 * Получить ключ хэша.
 * @param queryParams Параметры запроса.
 * @param userHash Хэш ключа.
 */
const getHashKey = (queryParams: Object, userHash: string): string => {
  const params = {
    jp_order: 0,
    is_remote: 0,
    ...queryParams
  };
  return hash({
    jp_order: params.jp_order,
    is_remote: params.is_remote,
    userHash,
  });
};

/**
 * Идентификатор пользователя.
 */
const getUserId = () => {
  return 1;
};

export default initializationState;
