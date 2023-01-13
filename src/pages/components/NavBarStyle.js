import styled from "styled-components";

const BlogP = styled.p`
    color: ${props => props.color};
    font-size: ${props => props.size};
    display: inline;
`;

const FlagImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 30px;
`;

export {
    BlogP,
    FlagImg,
}