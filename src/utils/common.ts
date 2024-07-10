export const toLocalCurrent = (amount: number | string): string => {
  if (!amount) return '-'
  const formattedAmount = amount.toLocaleString('zh-CN', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  // return formattedAmount.substring(1)
  return formattedAmount
}

export const toastBack = (title = '保存成功') => {
  uni.showToast({
    title,
    icon: 'none',
    duration: 1500,
    complete: function () {
      setTimeout(() => {
        uni.navigateBack()
      }, 1500)
    },
  })
}
