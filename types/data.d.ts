type data={
	id:number,
	projectName: string,
    projectDescription: string,
   
}

type mileStone=  {
		id:number,
		name: string,
		tasks: [
			{ name: string, isDone: boolean }
		] | null,
		guest: [] | null,
		startDate: string ,
		endDate: string | null
	}
