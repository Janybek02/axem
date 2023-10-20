import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface state {
    id: number,
    name: string,
    job: string,
    weight: number,
    height: number,
    date: string,
    image: string
}
interface Main {
    main: state[],
    modal : boolean,
    mainIn: any
}
const initialState :Main = {
    main : [],
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
        }, 
        deletePerson: (state, action: PayloadAction<number>) => { 
            state.main = state.main.filter((items) => items.id !== action.payload)
    },
    changePerson: (state, action:PayloadAction<state> ) => {
        state.modal = true
        state.mainIn = state.mainIn = action.payload
    }, 
    closeModal:  (state, action:PayloadAction<state>) => {
        state.modal = false
        const newId = action.payload.id
        state.main = state.main.map((items) => items.id === newId ? action.payload: items)
    }
    }
}
)


export default mainSlice.reducer;
export const { addPerson, changePerson, closeModal, deletePerson} = mainSlice.actions;