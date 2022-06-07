import streamy from '../apis/streamy';
import { CREATE_STREAM, SIGN_IN, SIGN_OUT } from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStreamy = formValue => async dispatch => {
  const response = await streamy.post('/streams', formValue);
  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
};
