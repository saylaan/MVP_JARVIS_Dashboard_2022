import { Api } from '../axios';

const post = (actions) => {
  return Api().post('group-actions', actions);
};

export default {
  post
};
