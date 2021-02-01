import { Catch, ArgumentsHost } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { EnlightenConstructor } from '../@types'
import { ViewCompilerService } from '../Services/ViewCompiler/view-compiler.service'

@Catch()
export class ExceptionFilter extends BaseExceptionFilter {
	private disableEnlighten: boolean
	private theme: string

	constructor(options: EnlightenConstructor = {
		disableEnlighten: false,
		theme: 'theme-light'
	}) {
		super()
		this.disableEnlighten = options.disableEnlighten
		this.theme = options.theme
	}

	catch(exception: any, host: ArgumentsHost) {
		if (host.getType() != 'http') {
			return;
		}
		const request = host.switchToHttp().getRequest()
		const response = host.switchToHttp().getResponse()

		if (this.disableEnlighten === true) {
			response.status(response.statusCode).json(exception.response)
			return
		}

		new ViewCompilerService(request, exception).getCompiledView(this.theme)
			.then(compiledView => {
				response.status(response.statusCode).send(compiledView)
			})
	}
}
