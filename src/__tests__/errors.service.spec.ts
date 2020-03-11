import { ErrorService } from '../Services/Errors'
import { Errors } from '../Services/Errors/State'

// Get random status code from Error State
const randomStatusCode: string = Object.keys(Errors)[Math.floor(Math.random()*Object.keys(Errors).length)]

const exception = {
	response: {
		statusCode: randomStatusCode
	}
}

const dummyErrorObject = new ErrorService(exception).errorDeterminator()

it('Checks if errorDeterminator() returns correct exception data', () => {
	expect(new ErrorService(exception).errorDeterminator()).toMatchObject({
		error: expect.any(String),
		info: expect.any(String),
		solutionOptions: {
			intentional: expect.any(String),
			notIntentional: expect.any(String)
		}
	})
})

it('Checks if getSolution() returns correct solution data', () => {
	expect(new ErrorService(exception).getSolution(dummyErrorObject)).toEqual(expect.any(String))
})
