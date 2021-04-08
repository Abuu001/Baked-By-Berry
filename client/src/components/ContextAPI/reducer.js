export const initialState={
    basket : [],
    user : null
} 

//selector
export const getBasketTotal=(basket)=>{
    return  basket.reduce((amount,item)=>item.price + amount , 0); 
}

const reducer =(state= initialState,action)=>{
    switch(action.type){
        case 'ADD_TO_BASKET': 
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
        break;
       
        
        case 'REMOVE_FROM_BASKET' :
           
            const index = state.basket.findIndex(
                (basketItem)=>basketItem.id === action.id
            )

            let newBasket =[...state.basket];

            if(index >=0){
                newBasket.splice(index,1)
            }else{
                console.warn(`cant remove product (id : ${action.id})  as its not in the basket`)
            }
            return{
                ...state,
                basket : newBasket
            }
            break;

        case  'SET_USER':
            return{
                ...state,
                user : action.user
            }

        case 'EMPTY_BASKET':
            return{
                ...state,
                basket:[]
            }
       

       default:
           return state
    }
}
 
export default reducer;
