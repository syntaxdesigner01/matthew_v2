import { createSlice, } from "@reduxjs/toolkit";

type project= Array<any>

const initialState  = {
    projects: [
        {projectName:'test',
        projectDescription:'this ia a test data'
    }
    ] as project ,

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

export const {createProject} = Appdb.actions
export default Appdb.reducer
