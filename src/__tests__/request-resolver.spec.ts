import { RequestResolverService } from '../Services/Resolver'
import { MockedRequest } from '../__mocks__'

it('Checks if getRequestData() returns proper object values', () => {
	expect(new RequestResolverService(MockedRequest).getRequestData()).toEqual({
		headers: MockedRequest.headers,
		method: MockedRequest.method,
		body: MockedRequest.body,
		query: MockedRequest.query,
	})
})

