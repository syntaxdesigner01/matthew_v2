import { createSlice, } from "@reduxjs/toolkit";


const initialState = {
    projects: [],

}

const Appdb = createSlice({
    name: "app",
    initialState,
    reducers: {
        createProject: (state, action) => {
            const data = {
                projectName: action.payload.name,
                projectDescription: action.payload.description
            }

            // state.projects.push (data)
        }
    }
})


export default Appdb.reducer
