import { EnvironmentResolverService } from '../Services/Resolver'

it('Checks if getEnvironmentList() returns inversed object of outgoing one', () => {
	const firstValueOfEnvironment = Object.values(process.env)[0]

	const inversedEnvironment = new EnvironmentResolverService().getEnvironmentList(process.env)
	const lastItemOfInversedEnvironment = Object.values(inversedEnvironment)[Object.keys(inversedEnvironment).length - 1]

	expect(firstValueOfEnvironment).toEqual(lastItemOfInversedEnvironment)
})

