type data={
	id:string,
	projectName: string,
    projectDescription: string,
   
}

type mileStone=  {
		id:string,
		name: string,
		tasks: [
			{ name: string, isDone: boolean }
		] | null,
		guest: [] | null,
		startDate: string ,
		endDate: string | null
	}
