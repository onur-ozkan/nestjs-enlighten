import { MachineStack } from '../../@types'

import * as os from 'os'

export class MachineResolverService {
	public getProperMachineStack(): MachineStack {
		const stack: MachineStack = {
			network: os.networkInterfaces(),
			cpu: {
				model: os.cpus()[0].model,
				architecture: os.arch(),
				thread: os.cpus().length
			},
			os: os.platform(),
			nodeEnvironment: process.release
		}
		stack.nodeEnvironment.version = process.version

		return stack
	}
}
