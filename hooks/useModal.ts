import {useCallback, useState} from 'react';

export default function useModal() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  return {openModal, handleOpenModal, handleCloseModal};
}
