export interface FieldValidation {
  fieldName: string
  validate: (value) => Error
}
