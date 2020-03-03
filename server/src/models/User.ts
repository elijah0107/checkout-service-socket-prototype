/**
 * Интерфейс пользователя.
 */
export interface UserInterface {
  id: string
  name: string
}

/**
 * Пользователь.
 */
export class User implements UserInterface {
  id: string;
  name: string;
}
