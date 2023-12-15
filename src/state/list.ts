import { defineStore } from 'pinia';
import useHttpServer from './../composables/HttpService';
import { ListRequest, Result } from '../models/request';


interface IState {
  listData: ListRequest | null,
  detailData : Result | null,
}
const useListStore = defineStore({
  id: 'ListStore',
  state: (): IState => ({
    listData: null,
    detailData: null,
    }),
  actions: {
    async fetchList() {
      try {
        this.listData = await useHttpServer().get('/api/people', {}) as unknown as ListRequest;
      } catch (error) {
        this.listData = null;
      }
    },
    async fetchListbyId(id: string) {
        try {
          this.detailData = await useHttpServer().get('/api/people/'+id, {}) as unknown as Result;
        } catch (error) {
          this.listData = null;
        }
      },
    }
});

export default useListStore;
