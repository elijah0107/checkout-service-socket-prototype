import Buffer from "../components/Buffer";

/**
 * Обработчик отсоединения.
 * @param buffer Буфер
 */
const disconnect = (buffer: Buffer) => {
  console.log('user disconnected');
};

export default disconnect;
