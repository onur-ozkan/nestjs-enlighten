import { Catch, ArgumentsHost } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { ViewCompilerService } from '../Services/ViewCompiler/view-compiler.service'

@Catch()
export class ExceptionFilter extends BaseExceptionFilter {
	catch(exception: any, host: ArgumentsHost) {
		const response = host.switchToHttp().getResponse()

		new ViewCompilerService(host, exception).getCompiledView()
			.then(compiledView => {
				response.status(response.statusCode).send(compiledView)
			})
	}
}
