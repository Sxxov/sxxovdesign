import strings from '../strings';

export class ClientError extends Error {
	constructor(message: string = strings.common.errors.NO_MESSAGE_PROVIDED) {
		super(message);
		this.name = this.constructor.name;
		Error.captureStackTrace?.(this, this.constructor);
	}
}
