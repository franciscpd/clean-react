import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols'

export class EmailValidation implements FieldValidation {
  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor (readonly field) {}

  validate (value: string): Error {
    if (this.emailRegex.test(String(value).toLowerCase())) {
      return null
    }

    return new InvalidFieldError()
  }
}
