import { MachineStack } from '../@types'

import * as os from 'os'

const MockedMachine: MachineStack = {
	network: os.networkInterfaces(),
	cpu: {
		model: os.cpus()[0].model,
		architecture: os.arch(),
		thread: os.cpus().length
	},
	os: os.platform(),
	nodeEnvironment: process.release
}

MockedMachine.nodeEnvironment.version = process.version

export { MockedMachine }
