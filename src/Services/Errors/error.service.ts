import { Errors } from './State'
import { ErrorStack, DeterminedError } from '../../@types'

import * as stackTrace from 'stack-trace'

export class ErrorService {
	private exception: { response: { statusCode: string | number } }

	constructor(exception: { response: { statusCode: string | number } }) {
		this.exception = exception
	}

	public errorDeterminator(): DeterminedError {
		return Errors[this.exception.response.statusCode]
	}

	public getSolution(errorObject: DeterminedError): string {
		const errorStack: ErrorStack[] = stackTrace.parse(this.exception)
		return (errorStack[0] && (errorStack[0].typeName || errorStack[0].methodName)) ? errorObject.solutionOptions.intentional : errorObject.solutionOptions.notIntentional
	}
}
