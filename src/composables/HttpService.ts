import axios from 'axios';

const useHttpServer = () => {
  const axiosInstance = axios.create({
    baseURL: '/'
  });
  const get = async (url: any, params: any) => {
    let data = null;
    await axiosInstance.get(url, { params })
      .then((response:any) => {
        data = response.data;
      })
      .catch((error:any) => { throw new Error(error); });
    return data;
  };
  const post = (url: any, params: any, body: any) => axiosInstance.post(url, body, params);
  const put = (url: any, params: any, body: any) => axiosInstance.put(url, body, params);
  const patch = (url: any, params: any, body: any) => axiosInstance.patch(url, body, params);
  const deleteHttp = (url: any, params: any) => axiosInstance.delete(url, params);
  return {
    get, post, put, patch, deleteHttp,
  };
};

export default useHttpServer;
