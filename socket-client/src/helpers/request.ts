/**
 * Параметры запроса.
 */
export const queryParams = () => {
  let params = window.location.search;
  params = params.substr(1);
  return params === "" ? {} : getObjectParams(params.split('&'));
};

/**
 * Куки из запроса.
 */
export const cookies = () => {
  return getObjectParams(document.cookie.split('; '));
};

/**
 * Получить объект параметров.
 * @param array Массив параметров строкой.
 */
const getObjectParams = (array: string[]) => {
  let result: Object = {};
  array.forEach((element: string) => {
    const [propertyName, value] = element.split('=');
    result = {
      ...result,
      [propertyName]: decodeURIComponent(value)
    };
  });

  return result;
};
