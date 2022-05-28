import axios from './axios';

export default {
  getExamList(params) {
    return axios.get(`rule/overtime/types`, { params });
  },
};
