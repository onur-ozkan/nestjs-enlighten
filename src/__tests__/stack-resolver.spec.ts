import { StackResolverService } from '../Services/Resolver'
import { NotFoundException } from '@nestjs/common'

it('Checks if getProperErrorStack() returns ErrorStack correctly', async () => {
	const errorStack = await new StackResolverService(new NotFoundException()).getProperErrorStack()
	expect(errorStack).toEqual(
		expect.arrayContaining([
			expect.objectContaining({
				fileName: expect.any(String),
				lineNumber: expect.any(Number),
				functionName: expect.any(String),
				typeName: expect.any(String),
				methodName: expect.any(String),
				columnNumber: expect.any(Number),
				native: expect.any(Boolean),
				codeRaw: expect.any(Array)
			})
		])
	)
})

