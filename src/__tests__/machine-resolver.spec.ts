import { MachineResolverService } from '../Services/Resolver'
import { MockedMachine } from '../__mocks__'

it('Checks if getProperMachineStack() returns proper object values', () => {
	expect(new MachineResolverService().getProperMachineStack()).toEqual(MockedMachine)
})

