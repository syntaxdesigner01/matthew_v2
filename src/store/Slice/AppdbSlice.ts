import { createSlice, } from "@reduxjs/toolkit";

type project= Array<any>

const initialState  = {
    projects: [
        {projectName:'test',
        projectDescription:'this ia a test data'
    }
    ] as project ,
    showProjectScreen: false,
    isAdmin:true
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
        },
        switchCreateProjectScreen:(state,action)=>{
            state.showProjectScreen = action.payload
        }
    }
})

export const {createProject,switchCreateProjectScreen} = Appdb.actions
export default Appdb.reducer
