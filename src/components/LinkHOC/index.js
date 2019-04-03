import { Link } from "react-router-dom";
import styled from 'styled-components';

const LinkHOC = styled(Link)`
:hover {
    cursor: pointer
}
`;

export default LinkHOC