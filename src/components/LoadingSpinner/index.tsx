import { MoonLoader } from "react-spinners";
import { LoadSpinnerContainer } from "./style";

export function LoadSpinner() {
    return (
        <LoadSpinnerContainer>
            <MoonLoader color="#F68A32" />
        </LoadSpinnerContainer>
    )
}