import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate (value: any): Error {
    if (value.trim().length >= this.minLength) {
      return null
    }

    return new InvalidFieldError()
  }
}
