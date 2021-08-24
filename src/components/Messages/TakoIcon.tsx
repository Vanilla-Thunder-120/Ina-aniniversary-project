import React from "react";
import styled from "styled-components";

const TakoImg = styled.img`
    width: 80px;
    filter: drop-shadow(2px 2px 1px darkgray);
    opacity: 1;
    vertical-align: bottom;
`;



interface TakoIconProps {
    id: number
}

export const TakoIcon = ({ id }: TakoIconProps): JSX.Element => {

    return (
        
            <TakoImg
                alt={`tako-icon-${id}`}
                src={`${process.env.PUBLIC_URL}/icon/W${id}.png`}
            />
        
    )
};