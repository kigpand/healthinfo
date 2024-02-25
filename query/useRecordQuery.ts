import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {addRecord, getRecord} from '../service/recordService';

export type RecordType = {
  title: string;
  category: string;
  date: string;
};

export function useRecordQuery() {
  const queryClient = useQueryClient();
  const {data: record, isLoading, isError} = useQuery<RecordType[]>({queryKey: ['record'], queryFn: getRecord});
  const {mutate: addRecordMutation} = useMutation({
    mutationFn: addRecord,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['record']});
    },
  });

  return {record, isLoading, isError, addRecordMutation};
}
