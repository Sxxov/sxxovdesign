import strings from '../strings';

export class ErrorWrapper extends Error {
	constructor(error: Error) {
		const message = error.message || strings.common.errors.NO_MESSAGE_PROVIDED;

		super(message);
		this.name = error.name;
		(Error as any).captureStackTrace(this, this.constructor);
	}
}
