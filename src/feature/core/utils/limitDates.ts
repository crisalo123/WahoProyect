export function getMinDate(blockedUnits: number, unit: 'month' | 'year' = 'month'): string {
  const today = new Date()
  const minDate = new Date(today)

  if (unit === 'month') {
    minDate.setMonth(minDate.getMonth() - blockedUnits)
  } else if (unit === 'year') {
    minDate.setFullYear(minDate.getFullYear() - blockedUnits)
  }

  if (minDate.getDate() !== today.getDate()) {
    minDate.setDate(0)
  }

  const formattedMinDate = minDate.toISOString().split('T')[0]

  return formattedMinDate
}

export function getMaxDate(blockedUnits: number, unit: 'month' | 'year' = 'month'): string {
  const today = new Date()
  const maxDate = new Date(today)

  if (unit === 'month') {
    maxDate.setMonth(maxDate.getMonth() + blockedUnits)
  } else if (unit === 'year') {
    maxDate.setFullYear(maxDate.getFullYear() + blockedUnits)
  }

  if (maxDate.getDate() !== today.getDate()) {
    maxDate.setDate(0)
  }

  const formattedMaxDate = maxDate.toISOString().split('T')[0]
  return formattedMaxDate
}
