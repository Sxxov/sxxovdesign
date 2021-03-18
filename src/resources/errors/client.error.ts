import strings from '../strings';

export class ClientError extends Error {
	constructor(message: string = strings.common.errors.NO_MESSAGE_PROVIDED) {
		super(message);
		this.name = this.constructor.name;
		(Error as any).captureStackTrace?.(this, this.constructor);
	}
}
