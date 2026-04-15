import { useQuery } from "@tanstack/react-query"

import { getFavoritesService } from "@/shared/services/favorites-service"

export const useGetFavoritesQuery = () => {
  const query = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavoritesService,
    staleTime: 1000 * 60 * 5, // (5 minutes) Tempo de expiração do cache em milissegundos
  })

  return query
}
