import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {addRoutine, deleteRoutine, deleteRoutineByCategory, getRoutine} from '../service/routineService';

export function useRoutineQuery() {
  const queryClient = useQueryClient();
  const {data: routine, isLoading, isError} = useQuery({queryKey: ['routine'], queryFn: getRoutine});
  const {mutate: addRoutineMutate} = useMutation({
    mutationFn: addRoutine,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['routine']});
    },
  });
  const {mutate: deleteRoutineMutate} = useMutation({
    mutationFn: deleteRoutine,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['routine']});
    },
  });
  const {mutate: deleteRoutineByCategoryMutate} = useMutation({
    mutationFn: deleteRoutineByCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['routine']});
    },
  });

  return {routine, isLoading, isError, addRoutineMutate, deleteRoutineMutate, deleteRoutineByCategoryMutate};
}
