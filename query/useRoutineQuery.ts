import {useQuery} from 'react-query';
import {getRoutine} from '../service/routineService';

export function useRoutineQuery() {
  const {data: routine, isLoading, isError} = useQuery(['routine'], getRoutine);

  return {routine, isLoading, isError};
}
