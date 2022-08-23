import { all, fork, put, takeLatest, call, throttle, delay} from 'redux-saga/effects';
const fetch =require('node-fetch');
import axios from 'axios'
import {gettempListAPI} from '../restAPI/temp/tempAPI';

import {

  TEMP_REQUEST,
  TEMP_SUCCESS,
  TEMP_FAILURE,

} from '../reducers/tempReducer';


function* tempList(action){
  try{

    const {result} =yield call(gettempListAPI,action.data);

    yield put({
      type:TEMP_SUCCESS,
      data:{dataArray : result}
    })


  }catch(e){
    console.error(e); 
    alert(e); 
    yield put({type:TEMP_FAILURE,error:e});
  }

}

function* watchTempList() {
  yield takeLatest(TEMP_REQUEST, tempList);
  //TEST_REQUEST 액션이 실행될 때까지 기다리겠다.
  //takeLatest 더블 클릭 시 서버에 2번요청 간다.
  //응답은 한번만 온다.
  //결국 db에 데이터가 2개 저장 될 수 있다. 
  //이걸 방지한게 throttle이라는 것이 있다. : 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는것

}


export default function* testSaga() {
    yield all([
                fork(watchTempList) 
              ]); 
}