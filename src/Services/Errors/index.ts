import { Errors } from './State'
import { ErrorStack } from '../../@types'
import * as stackTrace from 'stack-trace'

export class ErrorService {
	private exception: any

	constructor(exception: any) {
		this.exception = exception
	}

	public errorDeterminator(): object {
		return Errors[this.exception.response.statusCode]
	}

	public getSolution(errorObject: any): string {
		const errorStack: ErrorStack[] = stackTrace.parse(this.exception)
		return (!errorStack[0].typeName || !errorStack[0].methodName) ? errorObject.solutionOptions.notIntentional : errorObject.solutionOptions.intentional
	}
}
