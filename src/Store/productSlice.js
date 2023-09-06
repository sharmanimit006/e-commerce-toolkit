import {createSlice } from '@reduxjs/toolkit';

const initialState={
    data:[],
}
const productSlice= createSlice({
    name:'product',
    initialState,
    reducers:{
        fetchProducts(state,action){
            state.data = action.payload;

        }
       
    }
})
export const {fetchProducts}= productSlice.actions
export default productSlice.reducer;



export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      
      // Dispatch the action with the resolved data
      dispatch(fetchProducts(data));
    } catch (error) {
      // Handle any errors here, e.g., dispatch an error action
      console.error("Error fetching products:", error);
    }
  };
}



// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
//     const data = await fetch("https://fakestoreapi.com/products")
//        const result = data.json();
//        dispatch(fetchProducts(result));

//     }
// }
