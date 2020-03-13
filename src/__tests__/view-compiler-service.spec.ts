import { NotFoundException } from '@nestjs/common'
import { ViewCompilerService } from '../Services/ViewCompiler'
import { MockedRequest } from '../__mocks__'

it('Checks if getProperMachineStack() returns proper object values', async () => {
	const compileRaw = await new ViewCompilerService(MockedRequest, new NotFoundException()).getCompiledView()
	const parseDoctypeDecleration = compileRaw.match(/<!DOCTYPE html>/)
	expect('<!DOCTYPE html>').toEqual(String(parseDoctypeDecleration))
})

