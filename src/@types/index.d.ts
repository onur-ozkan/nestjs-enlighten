export interface ExceptionResponse {
	error: string,
	message: string,
	statusCode: number
}

export interface ViewProps {
	response: ExceptionResponse,
	baseUrl: string,
	stylingRaw: string
}

export interface ErrorStack {
	fileName: string,
	lineNumber: number,
	functionName: string,
	typeName: string,
	methodName: string,
	columnNumber: number,
	native: boolean,
	codeRaw: string[]
}
