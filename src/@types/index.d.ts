import * as os from 'os'

export interface NodeEnvironment {
	name: string,
	lts?: string,
	sourceUrl?: string,
	headersUrl?: string,
	version?: string
}

export interface RequestData {
	headers: {
		[index: string]: string
	},
	method: string,
	body: {
		[index: string]: string | number
	},
	query: {
		[index: string]: string
	},
}

export interface ErrorState {
	[key: string]: {
		error: string,
		info: string,
		solutionOptions: {
			intentional: string,
			notIntentional: string
		}
	}
}

export interface DeterminedError {
    error: string
    info: string
    solutionOptions: {
        intentional: string
        notIntentional: string
    }
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

export interface MachineStack {
	network: {
		[index: string]: os.NetworkInterfaceInfo[];
	},
	cpu: {
		model: string,
		architecture: string,
		thread: number
	},
	os: NodeJS.Platform,
	nodeEnvironment: NodeEnvironment
}

export interface ViewProps {
	response: any,
	baseUrl: string,
	projectPath: string,
	errorStack: ErrorStack[],
	requestStack: RequestData,
	environmentStack: object,
	machineStack: MachineStack,
	cssRaw: string,
	prismJsRaw: Buffer,
	errorObject: DeterminedError,
	errorSolution: string,
}
