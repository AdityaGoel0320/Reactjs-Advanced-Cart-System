export const reducer = (state , action)=>{

    if(action.type === "REMOVE_ITEM"){
        return {
            ...state , 
            items : state.items.filter((x)=>{
                return x.id !== action.payload  ; 
            })
        } ; 
    }
    return state 
}