import requests from './httpServices';

const AttributeServices = {
  getAllAttributes: async () => {
    return requests.get('/attributes');
  },

  getShowingAttributes: async () => {
    return requests.get(`/attributes/show`);
  },

  addAttribute: async (body) => {
    return requests.post('/attributes/add', body);
  },

  addAllAttributes: async (body) => {
    return requests.post('/attributes/add/all', body);
  },

  getAttributeById: async (id) => {
    return requests.get(`/attributes/${id}`);
  },

  updateAttributes: async (id, body) => {
    return requests.put(`/attributes/${id}`, body);
  },

  updateStatus: async (id, body) => {
    return requests.put(`/attributes/status/${id}`, body);
  },

  deleteAttribute: async (id, body) => {
    return requests.delete(`/attributes/${id}`, body);
  },
};

export default AttributeServices;
