import { styled } from "../../stitches.config";

export const StyledButton = styled('button', {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    height: '40px',

    variants: {
        style: {
            primary: {    
                background: 'Red',
            },
            secondary: {
                background: 'Blue',
            }
        }
    }
})