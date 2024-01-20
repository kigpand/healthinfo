import {useMutation, useQuery, useQueryClient} from 'react-query';
import {addRoutine, deleteRoutine, deleteRoutineByCategory, getRoutine} from '../service/routineService';

export function useRoutineQuery() {
  const queryClient = useQueryClient();
  const {data: routine, isLoading, isError} = useQuery(['routine'], getRoutine);
  const {mutate: addRoutineMutate} = useMutation(addRoutine, {
    onSuccess: () => {
      queryClient.invalidateQueries(['routine']);
    },
  });
  const {mutate: deleteRoutineMutate} = useMutation(deleteRoutine, {
    onSuccess: () => {
      queryClient.invalidateQueries(['routine']);
    },
  });
  const {mutate: deleteRoutineByCategoryMutate} = useMutation(deleteRoutineByCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries(['routine']);
    },
  });

  return {routine, isLoading, isError, addRoutineMutate, deleteRoutineMutate, deleteRoutineByCategoryMutate};
}
