import * as env from 'dotenv'

env.config()

export class EnvironmentResolverService {
	// Returns inversed object to show custom definitions at top of the object properties
	public getEnvironmentList(envList: object): object {
		const inversedObject = {}
		const keys = []

		for (const key in envList) {
			keys.push(key)
		}

		for (let i = keys.length - 1; i >= 0; i--) {
			const value = envList[keys[i]]
			inversedObject[keys[i]] = value
		}

		return inversedObject
	}
}
