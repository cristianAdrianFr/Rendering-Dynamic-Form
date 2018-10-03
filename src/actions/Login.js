import {
  LOGIN
} from '../constants/actionType';

export function login (data) {
  return {
    type: LOGIN,
    data
  }
}