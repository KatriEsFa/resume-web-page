import { useEffect, useState } from "react";
import styled from "styled-components";
import { useModal } from "./modal.hook";
import { filter } from 'rxjs/operators';


const StyledModalWrapper = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
`;
interface Props {
  children: JSX.Element | JSX.Element[];
  modalId: string;
}

const NavModal = ({ children, modalId: id }: Props) => {
  const [modalId] = useState(id);
  const [open, setOpen] = useState(false);
  const { getAsObservable } = useModal('');

  useEffect(() => {
    const subscriber = getAsObservable()
      .pipe(filter(config => config.modalId === modalId))
      .subscribe(config => {
        setOpen(config.isOpen);
      });

    return () => {
      subscriber.unsubscribe();
    };
  }, []);

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <StyledModalWrapper isVisible={open} onClick={handleCloseModal}>
      {children}
    </StyledModalWrapper>
  );
};

export default NavModal;
