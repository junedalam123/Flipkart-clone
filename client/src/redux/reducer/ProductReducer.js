import * as actionType from "../constants/ProductsConstants"

 export const getProductsReducer = (state ={products:[]},action)=> {
    switch (action.type){
        case  actionType.GET_PRODUCT_SUCCESS:
           return {products: action.payload}
        case actionType.GET_PRODUCT_FAIL:
            return {error: action.payload}
       default:
             return state   
    }
};

export const getProductDeatailsReducer = (state ={product :{}},action)=>{
    switch(action.type){
        case  actionType.GET_PRODUCT_DETAIL_SUCCESS:
            return {product: action.payload}
         case actionType.GET_PRODUCT_DETAIL_FAIL:
             return {error: action.payload}
        default:
              return state    
    }
}
