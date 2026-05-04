import { createSlice } from "@reduxjs/toolkit";

 
const initialState = {
    items:JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name:'collection',
    initialState,
    reducers:{
        addtoCollection:(state,action) =>{
            const alreadyExist = state.items.find(
                items => items.id === action.payload.id
            )

            if(!alreadyExist){
               state.items.push(action.payload);
               localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection:(state,action) => {
            state.items = state.items.filter(
                items => items.id !== action.payload
            )
            localStorage.setItem('collection',JSON.stringify(state.items))
        },
        clearCollection:(state) => {
            state.items = []
            localStorage.removeItem('collection')
        }
    }
})


export const {
    addtoCollection,
    removeCollection,
    clearCollection
} = collectionSlice.actions;


export default collectionSlice.reducer;