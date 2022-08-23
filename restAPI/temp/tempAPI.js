export const gettempListAPI = async (actionData) =>{
    try{
        const {hello,good} = actionData;
        console.log(hello,' : ',good);
        const goUrl="https://www.hubpass.co.kr/asp/standard/DealerMaterialInfo.jsp?dealerCode=1531&infoCode=1003&start=0&end=10&materialName=&dimension=";
        const response = await fetch(goUrl); 
        const data = await response.json(); 
        
        return {result:data};

    }catch(e){
        alert(e); 
    }

}