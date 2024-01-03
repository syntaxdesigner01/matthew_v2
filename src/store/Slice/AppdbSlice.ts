import { createSlice, } from "@reduxjs/toolkit";

type project= Array<any>

const initialState  = {
    projects: [] as project ,

}

const Appdb = createSlice({
    name: "app",
    initialState,
    reducers: {
        createProject: (state, action) => {
            const data:data = {
                projectName: action.payload.name,
                projectDescription: action.payload.description
            }
            state.projects.push (data)
        }
    }
})


export default Appdb.reducer
