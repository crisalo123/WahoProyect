const baseInputClasses =
  'w-full px-10 py-2 text-gray-900 bg-white placeholder:text-transparent border border-gray-200 rounded-2xl outline-none focus:border-primary transition duration-200'
const disabledInputClasses = 'disabled:bg-gray-100 disabled:text-gray-400 '
const readOnlyInputClasses = 'read-only:text-gray-700'

export const inputClasses = `${baseInputClasses} ${disabledInputClasses} ${readOnlyInputClasses}`
