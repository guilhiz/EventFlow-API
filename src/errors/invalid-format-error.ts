import { ApplicationError } from '@/protocols';

export function invalidFormatError(): ApplicationError {
  return {
    name: 'InvalidFormatError',
    message: 'The format is invalid.',
  };
}
