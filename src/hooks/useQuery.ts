import type { QueryKey } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useInvalidateQuery } from "./useInvalidateQuery";

type MutationContext<R> = {
  previous?: R;
};

export const useQuery = <T, P, R = T>({
  key,
  func,
  updater,
  doNotWaitForInvalidation,
  additionalInvalidationKeys = [],
  doNotInvalidate,
}: {
  key?: QueryKey;
  func: (params: P) => Promise<T>;
  updater?: (oldData: R, params: P) => R;
  doNotWaitForInvalidation?: boolean;
  additionalInvalidationKeys?: QueryKey[];
  doNotInvalidate?: boolean;
}) => {
  const queryClient = useQueryClient();
  const { invalidate } = useInvalidateQuery([
    key,
    ...additionalInvalidationKeys,
  ]);

  return useMutation<T, Error, P, MutationContext<R>>({
    mutationFn: func,

    async onMutate(params) {
      if (!key) return {};

      await queryClient.cancelQueries({ queryKey: key });

      const previous = queryClient.getQueryData<R>(key);

      if (updater && previous) {
        queryClient.setQueryData<R>(key, updater(previous, params));
      }

      return { previous };
    },

    onError(_err, _params, context) {
      if (!key || !context?.previous) return;
      queryClient.setQueryData(key, context.previous);
    },

    async onSuccess() {
      if (doNotInvalidate) return;

      if (doNotWaitForInvalidation) {
        invalidate();
      } else {
        await invalidate();
      }
    },
  });
};
