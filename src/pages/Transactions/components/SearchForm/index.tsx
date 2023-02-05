import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer } from './styles'
import { useTransactions } from '../../../../hooks/useTransactions'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInput = zod.infer<typeof searchFormSchema>

interface Props {
  handleFilter: (data: string) => void
}

export function SearchForm({ handleFilter }: Props) {
  const { fetchTransactions } = useTransactions()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = async (data: SearchFormInput) => {
    await fetchTransactions(data.query.charAt(0).toUpperCase())
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
        onChange={(e) => {
          handleFilter(e.target.value)
        }}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        buscar
      </button>
    </SearchFormContainer>
  )
}
