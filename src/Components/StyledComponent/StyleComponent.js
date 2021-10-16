import styled from "styled-components";

const HeroDynamic = styled.header`
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${props => props.img}) center/cover no-repeat;
`;

export default HeroDynamic;