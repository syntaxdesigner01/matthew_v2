

export default function CreateProject() {

    function saveData(formData: FormData) {

        console.log(formData.get('projectName'));
        console.log(formData.get('projectDescription'));

    }

    return (
        <form action={saveData}>
            <h1>Create New Project </h1>
            <div>
                <input type="text" name='projectName' placeholder='Project Name' className='border-2 w-full px-4 py-4 rounded-md' required />
            </div>
            <div>
                <textarea name="projectDescription" id="" placeholder='Description' cols={10} rows={10} className='border-2 w-full mt-4 rounded-md p-4' required />
            </div>

            <button type='submit' className='w-full text-primary bg-black py-2 rounded-md mt-10' >Create New Project</button>
        </form>

    )
}
