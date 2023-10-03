import { toast } from "react-toastify";

import {
    Close,
    ModalActions,
    ModalButton,
    ModalContent,
    ModalDescription,
    ModalDivCenter,
    ModalIcon,
    ModalMessage,
    ModalOverlay,
    ModalTitle
} from "./style";

import { IPokemon } from "../../interfaces/IPokemon";

import deleteIcon from "../../assets/Icon-trash@2x.png";


interface IModalProps {
    handlerChangeModalState: (isOpen: boolean) => void,
    pokemonFind: IPokemon | null
}

export function Modal({
    handlerChangeModalState,
    pokemonFind
}: IModalProps) {

    function handleDeletePokemon() {
        console.log(`Pokémon deletado: ${pokemonFind?.name}`)

        toast.warn('Funcionalidade não implementada', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    return (
        <ModalOverlay>
            <ModalContent>
                <ModalDivCenter>
                    <ModalIcon>
                        <img src={deleteIcon} alt="" />
                    </ModalIcon>
                    <ModalMessage>
                        <ModalTitle>Excluir</ModalTitle>
                        <ModalDescription>CERTEZA QUE DESEJA EXCLUIR?</ModalDescription>
                    </ModalMessage>
                </ModalDivCenter>
                <ModalActions>
                    <ModalButton
                        $isFilled
                        onClick={handleDeletePokemon}
                    >Excluir</ModalButton>
                    <ModalButton
                        $isFilled={false}
                        onClick={() => handlerChangeModalState(false)}
                    >Cancelar</ModalButton>
                </ModalActions>
                <Close onClick={() => handlerChangeModalState(false)}>x</Close>
            </ModalContent>
        </ModalOverlay>
    )
}