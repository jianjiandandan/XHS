import {action, observable, computed, runInAction} from 'mobx'
class ConnectStore {
    @observable isConnected = true;
}

let connectStore = new ConnectStore();
export default  connectStore;