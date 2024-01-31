import { Observable, Subject } from "rxjs";

type modalType = { modalId: string; isOpen: boolean};
const subjectModal$ = new Subject<modalType>();
interface ModalData {
    modalId: string;
    open: () => void;
    close: () => void;
    getAsObservable: () => Observable<modalType>;
}

export const useModal = (modalId: string): ModalData => {
    return{
        modalId,
        open: () => subjectModal$.next({modalId, isOpen: true}),
        close: () => subjectModal$.next({modalId, isOpen: false}),
        getAsObservable: () => subjectModal$.asObservable()
    }
}