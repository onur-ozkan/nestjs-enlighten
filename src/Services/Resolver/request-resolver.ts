import { RequestData } from '../../@types'

export class RequestResolverService {
	private request: RequestData

	constructor(req: RequestData) {
		this.request = req
	}

	public getRequestData(): RequestData {
		return {
			headers: this.request.headers,
			method: this.request.method,
			body: this.request.body,
			query: this.request.query,
		}
	}
}
