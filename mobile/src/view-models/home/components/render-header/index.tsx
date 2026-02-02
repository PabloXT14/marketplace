import { memo } from "react"

import { HomeHeader } from "../header"
import { SearchInput } from "../search-input"

type RenderHeaderProps = {
  searchText: string
  setSearchText: (value: string) => void
}

// Para não fechar o teclado ao digitar no input pois realiza uma busca ao digitar
export const RenderHeader = memo(
  ({ searchText, setSearchText }: RenderHeaderProps) => (
    <>
      <HomeHeader />
      <SearchInput onChangeText={setSearchText} value={searchText} />
    </>
  )
)
