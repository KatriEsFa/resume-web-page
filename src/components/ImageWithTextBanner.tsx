import styled from 'styled-components';
import { LogoWraper } from './LogoWraper';

interface Props {
    imageURL: string;
    header: string;
    sub_header?: string;
    logoHeight?: string;

    //this could have another property that should decide the position for the image and the text 
}

const HeaderBanner = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImageWithTextBanner = ({imageURL, header, sub_header}: Props) => {
  return (
    <HeaderBanner>
        <LogoWraper link={imageURL} alt='Company Logo' imgWidth='100%' imgHeight='400px'/>
        <div>
            <h1>{header}</h1>
            {sub_header ? <h4>{sub_header}</h4> : null}
        </div>
    </HeaderBanner>
  )
}

export default ImageWithTextBanner
