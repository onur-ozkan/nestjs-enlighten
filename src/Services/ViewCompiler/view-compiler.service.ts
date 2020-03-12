import { ArgumentsHost } from '@nestjs/common'
import { DeterminedError, ErrorStack, RequestData, MachineStack, ViewProps } from '../../@types'
import { ErrorService } from '../Errors/error.service'
import { StackResolverService } from '../Resolver'
import { RequestResolverService } from '../Resolver'
import { EnvironmentResolverService } from '../Resolver'
import { MachineResolverService } from '../Resolver'

import * as fs from 'fs'
import * as ejs from 'ejs'

export class ViewCompilerService {
	private exception: any
	private request: any

	constructor(host: ArgumentsHost, exception: any) {
		this.exception = exception
		this.request = host.switchToHttp().getRequest()
	}

	public async getCompiledView(): Promise<ViewProps> {
		const errorObject: DeterminedError = new ErrorService(this.exception).errorDeterminator()
		const errorSolution: string = new ErrorService(this.exception).getSolution(errorObject)
		const errorStack: ErrorStack = await new StackResolverService(this.exception).getProperErrorStack()
		const requestStack: RequestData = new RequestResolverService(this.request).getRequestData()
		const environmentStack: object = new EnvironmentResolverService().getEnvironmentList(process.env)
		const machineStack: MachineStack = new MachineResolverService().getProperMachineStack()

		const cssRaw: string = fs.readFileSync(`${__dirname}/../../../assets/style/index.min.css`, 'utf8')
		const prismJsRaw: Buffer = fs.readFileSync(`${__dirname}/../../../assets/libs/prism-js/prism.min.js`)

		const compiledView: ViewProps = ejs.render(fs.readFileSync(`${__dirname}/../../views/index.ejs`, 'utf8'), {
			response: this.exception.response,
			baseUrl: `${this.request.protocol}://${this.request.headers.host}/`,
			projectPath: process.env.PWD,
			errorStack,
			requestStack,
			environmentStack,
			machineStack,
			cssRaw,
			prismJsRaw,
			errorObject,
			errorSolution,
		})

		return compiledView
	}
}
