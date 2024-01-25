import toast from "react-hot-toast";


export const success =(message:string)=>{
toast.success(message,{
    position:"top-right",
    duration:4000
})
}