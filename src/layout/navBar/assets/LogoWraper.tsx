import styled from "styled-components";

const StyledImgWraper = styled.div`
`

const StyledImgTag = styled.img`
    max-width: 100%;
    heigth: 100%;
    width: 100%;
`

interface Props {
    link: string;
    alt?: string
}

export const LogoWraper = ({ link, alt }: Props ) => {
    return (
        <StyledImgWraper>
            <StyledImgTag src={link} alt={alt && alt} />
        </StyledImgWraper>
    )
}