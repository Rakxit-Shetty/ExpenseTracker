import {configureStore, createSlice} from "@reduxjs/toolkit"

const initialState={value:{code:""}, isAuth:false}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{

        login: (state, action)=>{

            state.value=action.payload;
            state.isAuth=true;
        },
        logout: (state)=>{
            state.value=initialState.value;
            state.isAuth=false;
        }

    }
})

export const {login, logout}=userSlice.actions;

export const store= configureStore({
    reducer:{
        user:userSlice.reducer,
    }
})



