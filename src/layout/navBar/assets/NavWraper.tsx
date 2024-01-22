import styled from "styled-components";

export const NavWraper = styled.div`
    display: flex;
    flex-direction: column;
    


    @media (min-width: 610px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-direction: row;
        height: 40px;
        position: fixed;
        z-index: 1000;
        padding: 10px;
        background-color: rgba(0,0,0, 0.2);
        border-radius: 50px;
        margin-top: 3px;
    }
`

