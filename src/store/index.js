import { createStore } from "vuex";
import state from "@/store/state";
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import actions from "@/store/actions";

const store = createStore({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
