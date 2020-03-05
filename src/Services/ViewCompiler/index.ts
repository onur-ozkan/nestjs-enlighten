import { ArgumentsHost } from '@nestjs/common'
import { ErrorService } from '../Errors'
import { StackResolverService } from '../Resolver'

import * as fs from 'fs'
import * as ejs from 'ejs'

export class ViewCompilerService {
	private exception: any
	private request: any

	constructor(host: ArgumentsHost, exception: any) {
		this.exception = exception
		this.request = host.switchToHttp().getRequest<any>()
	}

	public async getCompiledView() {
		let errorObject = new ErrorService(this.exception).errorDeterminator()
		const errorSolution = new ErrorService(this.exception).getSolution(errorObject)
		const errorStack = await new StackResolverService(this.exception).getProperErrorStack()

		const stylingRaw = fs.readFileSync(`${__dirname}/../../../assets/style/index.css`, 'utf8')
		const compiledView = ejs.render(fs.readFileSync(`${__dirname}/../../views/index.ejs`, 'utf8'), {
			response: this.exception.response,
			baseUrl: `${this.request.protocol}://${this.request.headers.host}/`,
			projectPath: process.env.PWD,
			errorStack,
			stylingRaw,
			errorObject,
			errorSolution,
		})

		return compiledView
	}
}
