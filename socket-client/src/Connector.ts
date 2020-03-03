import { connect } from 'react-redux';
import App from './components/App';
import {} from './selectors';
import {Dispatch} from 'redux'

/**
 * Подключение свойств Redux в свойства компонента.
 * @param {Object} state Состояние приложения из Redux-хранилища.
 * @return {Object} Свойства компонента.
 */
const mapStateToProps = (state = {}) => {
  return {
    assign: () => { return 123 }
  };
};

/**
 * Подключение событий к компоненту.
 * @param {Function} dispatch Метод для вызова действия.
 * @return {Object} Свойства компонента.
 */
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
