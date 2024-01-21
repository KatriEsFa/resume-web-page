import styled from "styled-components";

interface Props {
    link: string;
    alt?: string
}

export const LogoWraper = ({ link, alt }: Props ) => {

    const StyledImgTag = styled.img`
        max-width: 100%;
        margin-top: -10px;
    `
    const StyledImgContainer = styled.div`
        display:block;
        width: 150px;
    `
    return (
        <StyledImgContainer>
            <StyledImgTag src={link} alt={alt && alt} />
        </StyledImgContainer>
    )
}