type data={
	projectName: string,
    projectDescription: string,
   
}

type mileStone=  {
		name: string,
		tasks: [
			{ name: string, isDone: boolean }
		] | null,
		guest: [] | null,
		startDate: string ,
		endDate: string | null
	}
