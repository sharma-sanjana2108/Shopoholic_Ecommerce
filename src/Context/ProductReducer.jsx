const ProductReducer = (state, action) => {
    switch (action.type) {

        case "GET_ITEMS":
            return {
                ...state,
                products: action.payload
            }

        case "ADD_TO_CART":
              
            const updatedIndex = state.cartItems.findIndex((currentItem) =>
                currentItem.id === action.payload.productItem.id
                
            )

            if(updatedIndex >= 0){
                return {
                    ...state,
                    cartItems: state.cartItems.map((item, index) => 
                    index === updatedIndex ? {...item, itemQuantity: item.itemQuantity + 1 } : item   
                    ),
                    total: state.total + 1,
                }
            }

            else{
                const addProduct = {...action.payload.productItem, itemQuantity : 1};
                return {
                    ...state,
                    cartItems: [...state.cartItems, addProduct],
                    total: state.total + 1
                }
            }

            case "REMOVE_CART" :
                return{
                    ...state, 
                    cartItems: state.cartItems.filter((item) => item.id !==action.payload)
                }
           
             case "INCREASE_PRODUCT":

             const checkIndex = state.cartItems.findIndex((currentItem) => {
               return currentItem.id === action.payload.id
             })

                return{
                    ...state,
                    cartItems: state.cartItems.map((currentItem, index) => 
                    index === checkIndex ? {...currentItem, itemQuantity: currentItem.itemQuantity + 1} : currentItem)
                   
                }

                case "DECREASE_PRODUCT": 

                const checkItemIndex = state.cartItems.findIndex((currentItem) => {
                   return currentItem.id === action.payload.id
                })

                return{
                    ...state,
                    cartItems: state.cartItems.map((currentItem, index) => 
                    index === checkItemIndex ? {...currentItem, itemQuantity: currentItem.itemQuantity > 1 ? 
                    currentItem.itemQuantity - 1 : 1 }  : currentItem
                     
                    )
                }
  
        default:
            return state
    }
}

export default ProductReducer;