import { FETCH_PRODUCTS } from './types';
import service from '../../services';

export const fetchProducts = () => dispatch => {
  service.getExamList({}).then(res => {
    let products = res.data;
    return dispatch({
      type: FETCH_PRODUCTS,
      payload: products,
    });
  });
  // .catch(err => {
  //   console.log(err);
  //   throw new Error();
  // });
};
