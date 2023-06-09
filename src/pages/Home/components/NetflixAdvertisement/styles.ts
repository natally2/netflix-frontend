import styled from 'styled-components';



export const AdvertisementContainer = styled.div`
  
`;
export const AdvertisementContent = styled.div`
    max-width: 66.66666666666666%;   
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    align-items: center;
    margin: 0 auto;
  
    section {
        flex-basis: 50%;

        p { 
            margin-top: 1.5rem;
            font-size: 1.5rem;
            font-weight: 400;
        }

        img {
            max-width: 100%;
            height: auto;
        }
    }

   
    @media (max-width: 1000px) {
        flex-wrap: wrap;
        max-width: calc(100% - 4rem);

        section {
            flex-basis: 100%;
            text-align: center;
        }

    }
`;

export const PageBreak = styled.div`
    background-color: ${props => props.theme['gray-600']};
    height: 0.5rem;
    margin: 3rem;
`;
