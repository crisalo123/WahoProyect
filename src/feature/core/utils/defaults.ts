import type { Option } from '../components/ui/Form'

interface CreateEmptyOptionOptions {
  as?: 'number' | 'string' | undefined
}
export const createEmptyOption = ({ as = 'number' }: CreateEmptyOptionOptions = {}): Option => ({
  label: '',
  value: as === 'number' ? -1 : ''
})

export const defaultNumberOption = createEmptyOption()
export const defaultStringOption = createEmptyOption({ as: 'string' })
