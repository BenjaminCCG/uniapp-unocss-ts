export const amountValidator = (value: string) => {
  const reg = /^(?!.*\.+$)\d+(\.\d{0,2})?$/
  return reg.test(value)
}

export const validatorRules = (type: string) => {
  switch (type) {
    case 'phone':
      return /^1[34578]\d{9}$/
    default:
      return null
  }
}
