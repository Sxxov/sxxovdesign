import mixmix from 'mixmix';
import strings from '../strings';
import { LogUtility } from '../utilities';

export interface ErrorWrapper extends Error, LogUtility {}

export class ErrorWrapper extends mixmix(Error, LogUtility) {
	constructor(error: Error) {
		const message = error.message || strings.common.errors.NO_MESSAGE_PROVIDED;

		super(message);
		this.name = error.name;
		Error.captureStackTrace(this, this.constructor);

		this.error(message);
	}
}
