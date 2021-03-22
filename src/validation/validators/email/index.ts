import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols'

export class EmailValidation implements FieldValidation {
  constructor (readonly field) {}

  validate (value: string): Error {
    return new InvalidFieldError()
  }
}
