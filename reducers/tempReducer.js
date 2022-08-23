import immerProduce from '../utils/produce';
export const  initialState = {

    //temp List
    tempList : [], 


};


//temp List
export const TEMP_REQUEST='TEMP_REQUEST';
export const TEMP_SUCCESS='TEMP_SUCCESS';
export const TEMP_FAILURE='TEMP_FAILURE';



const reducer = (state = initialState, action) => immerProduce(state, (draft) => {

    switch(action.type){

//temp List
//--------------------------------------------------------------------
        case TEMP_REQUEST : { 
            break;
        }
        case TEMP_SUCCESS : {
            draft.tempList.length=0;
            action.data.dataArray.forEach((v)=>{
                draft.tempList.push(v); 
            });
            
            break;

        }
        case TEMP_FAILURE: {
            draft.dealerInfoListError='서버에러 관리자에게 문의하세요'; 
            break; 
        }
//--------------------------------------------------------------------
        default : break; 
    
    }

}); 
export default reducer;