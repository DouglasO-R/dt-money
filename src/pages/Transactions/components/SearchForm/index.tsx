import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SearchFormContainer } from "./styles";
import { useTransactions } from "../../../../hooks/useTransactions";

const searchFormSchema = zod.object({
    query: zod.string(),
})

type SearchFormInput = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
    const { fetchTransactions } = useTransactions();

    const { register, handleSubmit, formState: { isSubmitting }, watch } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema)
    });

    const handleSearchTransactions = async (data: SearchFormInput) => {
        await fetchTransactions(data.query)
    }
    console.log(watch("query"))

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transações"
                {...register("query")}
            />

            <button
                type="submit"
                disabled={isSubmitting}
            >
                <MagnifyingGlass size={20} />
                buscar
            </button>
        </SearchFormContainer>
    )
}