import { useDispatch } from "react-redux";
import { createProject } from "../Slice/AppdbSlice";


export function addProject (actiondata:{}){
    const dispatch = useDispatch()
    dispatch(createProject(actiondata))
}