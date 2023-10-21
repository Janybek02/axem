import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface state  {
    id: number,
    name: string,
    job: string,
    weight: number,
    height: number,
    date: string,
    
        image?: string | any 
    
    
}
interface Main {
    main: state[],
    modal : boolean,
    mainIn: any
}

const local  =  JSON.parse(localStorage.getItem("items") as string) ?? [];
const initialState :Main = {
    main : local,
    modal : false,
    mainIn: {}
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers:{
        addPerson (state, action:PayloadAction <state>) {
            const id = action.payload.id + state.main.length 
            const newc = {...action.payload,  id}
            state.main.push(newc)
            localStorage.setItem("items", JSON.stringify(state.main))
        }, 
        deletePerson: (state, action: PayloadAction<number>) => { 
            const newState = state.main = state.main.filter((items) => items.id !== action.payload)
            localStorage.setItem("items", JSON.stringify(newState))
    },
    changePerson: (state, action:PayloadAction<state> ) => {
        state.modal = true
        state.mainIn = state.mainIn = action.payload
        
    }, 
    addModal:  (state, action:PayloadAction<state>) => {
        state.modal = false
        const newId = action.payload.id
        state.main = state.main.map((items) => items.id === newId ? action.payload: items)
        const newState = state.main
        localStorage.setItem("items", JSON.stringify(newState))
    },
    searchPeron: (state, action:PayloadAction<string>) => {
       console.log(action.payload)
       state.main = action.payload === "" ? state.main : state.main.filter(items => items.name === action.payload)
    }
    }
}
)


export default mainSlice.reducer;
export const { addPerson, changePerson, addModal, deletePerson, searchPeron} = mainSlice.actions;