import { EnvironmentResolverService } from '../Services/Resolver'

const dummyObject = {
	dummyData1: 1,
	dummyData2: 'Example',
	dummyData3: 'Whoa!',
	dummyData4: 555
}

const inversedDummyObject = {
	dummyData4: 555,
	dummyData3: 'Whoa!',
	dummyData2: 'Example',
	dummyData1: 1
}

it('Checks if getEnvironmentList() returns inversed object of outgoing one', () => {
	expect(new EnvironmentResolverService().getEnvironmentList(dummyObject)).toEqual(inversedDummyObject)
})
