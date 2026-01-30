import type { QueryKey } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export const useInvalidateQuery = (keys: Array<QueryKey | undefined>) => {
  const queryClient = useQueryClient();

  const invalidate = async () => {
    await Promise.all(
      keys
        .filter((k): k is QueryKey => Boolean(k))
        .map((queryKey) => queryClient.invalidateQueries({ queryKey }))
    );
  };

  return { invalidate };
};
