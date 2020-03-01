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
