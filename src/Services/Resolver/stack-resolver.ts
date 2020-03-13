import { ErrorStack } from '../../@types'

import * as stackTrace from 'stack-trace'
import * as fs from 'fs'

export class StackResolverService {
	private exception: any

	constructor(exception: any) {
		this.exception = exception
	}

	public async getProperErrorStack(): Promise<ErrorStack[]> {
		const errorStack = await stackTrace.parse(this.exception)

		await errorStack.map(async (_stack: any, index: string | number) => {
			// Resolve the exception line and add it to stack object as property.
			const data = fs.readFileSync(errorStack[index].fileName, 'utf-8')
			const lines = data.split(/\r?\n/);
			errorStack[index].codeRaw = lines.slice((errorStack[index].lineNumber - 16) >= 0 ? errorStack[index].lineNumber - 16 : 0, errorStack[index].lineNumber + 15)

			// Get 15 lines above and below of the error line
			errorStack[index].errorLines = []
			lines.map((_line, lineIndex) => {
				if (lineIndex <= (errorStack[index].lineNumber + 15) && lineIndex > (errorStack[index].lineNumber-16) ) errorStack[index].errorLines.push(lineIndex)
			})

			// Update absolute paths with relative ones.
			const relativeFileName = errorStack[index].getFileName().indexOf(process.cwd())
			if (relativeFileName > -1) {
				errorStack[index].fileName = errorStack[index].getFileName().replace(process.cwd(), '').replace(/\\|\//, '')
			} else {
				errorStack[index].fileName = errorStack[index].getFileName()
			}
		})

		return errorStack
	}
}
