import {addCategory, deleteCategory, getCategory} from '../service/categoryService';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export type CategoryQueryType = {
  category: string;
};

export function useCategoryQuery() {
  const queryClient = useQueryClient();
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {
    data: category,
    isLoading,
    isError,
  } = useQuery<CategoryQueryType[]>({queryKey: ['category'], queryFn: getCategory});
  const {mutate: addCategoryMutate} = useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['category']});
    },
    onError: () => {
      nav.navigate('Error');
    },
  });
  const {mutate: deleteCategoryMutate} = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      console.log('success');
      queryClient.invalidateQueries({queryKey: ['category']});
    },
  });

  return {category, isLoading, isError, addCategoryMutate, deleteCategoryMutate};
}
