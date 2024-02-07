import styled from "styled-components";

interface Props {
    link: string;
    alt?: string;
    imgWidth?: string;
    imgHeight?: string;
}

export const LogoWraper = ({ link, alt, imgWidth, imgHeight }: Props ) => {

    const StyledImgTag = styled.img`
        max-width: 100%;
        max-height: 100%;
    `
    const StyledImgContainer = styled.div`
        display:block;
        width: ${ imgWidth ? imgWidth : `150px`};
        height: ${ imgHeight ? imgHeight : `100px`};
    `
    return (
        <StyledImgContainer>
            <StyledImgTag src={link} alt={alt || ''} />
        </StyledImgContainer>
    )
}