import { Link } from "@reach/router";
import styled from 'styled-components';

const CustomNavLink = styled(Link)`
    color: #000000;
    font-size: 1rem;
    margin-left: 15px;
    margin-top: 5px;
    &:hover,
    &:focus {
        color: #000000;
    }
    &:active {
        color: #000000;
    }
`;


const NavLink = props => (
    <CustomNavLink
        {...props}
        getProps={({isCurrent}) => {
            return {
                style: {
                    //color: isCurrent ? "red": "blue",
                    textDecoration: isCurrent ? "none" : "none",
                    //textDecoration: isCurrent ? "solid underline #DF0000 3px" : "none",
                    borderBottom: isCurrent ? "solod #DF0000 4px" : "none",
                    paddingBottom: "8px",
                    fontWeight: "bold"
                }
            };
        }}
        />
);

export default NavLink;