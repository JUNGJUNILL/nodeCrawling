import { all, fork } from 'redux-saga/effects';
//import axios from 'axios';

import tempSaga from './tempSaga';
//import { backUrl } from '../config/config';
//axios.defaults.baseURL =backUrl
//axios.defaults.withCredentials = true;




export default function* rootSaga() {
    yield all([ 
                fork(tempSaga), 

    ]);
  }