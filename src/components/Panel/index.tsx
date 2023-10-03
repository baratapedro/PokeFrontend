import { forwardRef, useState, FormEvent, useEffect, ChangeEvent } from 'react'

import { toast } from "react-toastify";

import {
    FileInputLabel,
    InputContainer,
    JustifyContentEndDiv,
    PanelContainer,
    PanelForm,
    PanelFormField,
    PanelTitle,
    TitleInput,
    PanelButton,
    PanelOverlay,
    ErrorMessage
} from "./style";

import createIcon from "../../assets/icone_criar.png"

import { IPokemon } from '../../interfaces/IPokemon';


interface IPanelProps {
    handlerChangePanelState: (isOpen: boolean, mode: string) => void,
    mode: string,
    pokemonFind: IPokemon | null
}

interface IErrorMessage {
    titleIsValid: boolean
    fileIsValid: boolean
}

export const Panel = forwardRef(({
    handlerChangePanelState,
    mode,
    pokemonFind
}: IPanelProps, ref: React.Ref<HTMLDivElement>) => {
    const [fileName, setFileName] = useState<string | undefined>('')
    const [cardTitle, setCardTitle] = useState<string>('')
    const [activeErrorMessage, setActiveErrorMessage] = useState<IErrorMessage>({ fileIsValid: true, titleIsValid: true })

    function handleSaveCardData(e: FormEvent) {

        e.preventDefault();

        if (fileName == '') {
            setActiveErrorMessage((prevErrorMessage) => ({
                ...prevErrorMessage, fileIsValid: false
            }));
        }

        if (cardTitle == '') {
            setActiveErrorMessage((prevErrorMessage) => ({
                ...prevErrorMessage, titleIsValid: false
            }));
        }

        if (cardTitle == '' || fileName == '') {
            return;
        }

        console.log(`Título do card: ${cardTitle}`)
        console.log(`Arquivo enviado: ${fileName}`)

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

    function changeCardTitle(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setCardTitle(value)

        if (value != "") {
            setActiveErrorMessage((prevErrorMessage) => ({
                ...prevErrorMessage, titleIsValid: true
            }));
        }
    }

    function changeCardFile(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.files?.[0]?.name;
        setFileName(value)

        if (value != "") {
            setActiveErrorMessage((prevErrorMessage) => ({
                ...prevErrorMessage, fileIsValid: true
            }));
        }
    }


    useEffect(() => {
        if (mode == 'create') {
            setCardTitle('')
        } else if (mode == 'edit' && pokemonFind) {
            setCardTitle(pokemonFind.name)
        }
    }, [])

    return (
        <PanelOverlay>
            <PanelContainer ref={ref}>
                <PanelTitle>
                    <img src={createIcon} alt="" />
                    {
                        mode == 'create' ? <div>Criar card</div> : <div>Editar card</div>
                    }
                </PanelTitle>
                <PanelForm onSubmit={handleSaveCardData}>
                    <PanelFormField>
                        <label htmlFor="">DIGITE UM NOME PARA O CARD</label>
                        <InputContainer>
                            <TitleInput
                                type="text"
                                placeholder="Digite o título"
                                defaultValue={pokemonFind && mode == "edit" ? pokemonFind.name : ""}
                                onChange={(e) => changeCardTitle(e)}
                            />
                        </InputContainer>
                        {
                            !activeErrorMessage.titleIsValid && <ErrorMessage>Campo título é obrigatório</ErrorMessage>
                        }
                    </PanelFormField>

                    <PanelFormField>
                        <label htmlFor="">INCLUA UMA IMAGEM PARA APARECER NO CARD</label>
                        <InputContainer>
                            {
                                fileName != '' ? <div>{fileName}</div> : <div>Nenhum arquivo selecionado</div>
                            }
                            <FileInputLabel htmlFor="file-input">Escolher arquivo</FileInputLabel>
                            <input
                                type="file"                          
                                id="file-input" name="file"
                                style={{ display: 'none' }}
                                onChange={(e) => changeCardFile(e)}
                            />
                        </InputContainer>
                        {
                            !activeErrorMessage.fileIsValid && <ErrorMessage>Campo de arquivo é obrigatório</ErrorMessage>
                        }
                    </PanelFormField>
                    <JustifyContentEndDiv>
                        <PanelButton
                            $isFilled={false}
                            onClick={() => handlerChangePanelState(false, '')}
                        >Cancelar</PanelButton>
                        <PanelButton $isFilled type='submit'>
                            {
                                mode == 'create' ? <span>Criar card</span> : <span>Editar card</span>
                            }
                        </PanelButton>
                    </JustifyContentEndDiv>
                </PanelForm>
            </PanelContainer>
        </PanelOverlay>
    )
})