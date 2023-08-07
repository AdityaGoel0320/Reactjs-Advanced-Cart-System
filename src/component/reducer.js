export const reducer = (state, action) => {

    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            items: state.items.filter((x) => {
                return x.id !== action.payload;
            })
        };
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            items: []
        };
    }


    if (action.type === "INCREMENT") {
        let updatedCart = state.items.map((x) => {

            if (x.id === action.payload) {
                return { ...x, quantity: x.quantity + 1 }
            }
            return x ; 
        })

        return {...state , items:updatedCart}

    }


    if (action.type === "DECREMENT") {
        let updatedCart = state.items.map((x) => {

            if (x.id === action.payload) {
                // let newQuantity =  x.quantity -1  ; 
                // if(newQuantity>0){
                    return { ...x, quantity: x.quantity-1 }

                // }
            }
            return x ; 
        }).filter((x)=>{
            return x.quantity!==0 ; 
        })

        return {...state , items:updatedCart}

    }




    return state
}