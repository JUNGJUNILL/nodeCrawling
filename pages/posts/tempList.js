import Router ,{ useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {TEMP_REQUEST} from '../../reducers/tempReducer'; 

const list = () =>{

    const dispatch=useDispatch(); 
    const {tempList} =useSelector((state)=>state.tempReducer); 
    
    //첫 로딩 시
    useEffect(()=>{
    
        dispatch({
            type:TEMP_REQUEST,
            data:{hello:'world',
                  good :'morning'
                }
        });

    },[]); 

    return (
        <div>
            <table>
                <tr>
                    <td>번호</td>
                    <td>이름</td>
                    <td>나이</td>
                </tr>
                {tempList.map((v,i)=>(
                    <tr key={i}>
                        <td>{v.materialCode}</td>
                        <td>{v.materialName}</td>
                        <td>{v.restrictCount}</td>
                    </tr>
                ))}
         
            </table>
        </div>

    )
}

export default list; 