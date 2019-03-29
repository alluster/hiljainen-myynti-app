import styled, { css } from 'styled-components';

export const Button = styled.button`
    ${props => {
        if (props.small) return css`
            min-height: 30px;
            min-width: 150px;
            font-size 12px;
            padding: 0 18px;
            border-radius: 15px;
            line-height: 30px;


        `;

        if (props.large) return css`
            min-height: 60px;
            min-width: 250px;
            font-size: 20px;
            padding: 0 30px;
            border-radius:30px;
            line-height: 60px;


        `;

        return css`
            min-height: 50px;
            min-width: 250px;
            font-size: 16px;
            line-height: 50px;
            border-radius: 25px;
            

        `;
    }}

    ${props => {
        if (props.outline) return css`
            background-color: transparent;
            border: 4px solid ${props => props.theme.colors.black};
        `;

        if (props.primary) return css`
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.white};
            transition: all 0.5s;
            -webkit-transition: all 0.5s;
           -moz-transition: all 0.5s;
            :hover {
                background:rgba(188,65,65, 0.9);               
            }
            @media (max-width: ${props => props.theme.screenSize.tablet}) {
                :hover {
                    background: ${props => props.theme.colors.primary};               

                }
            }
              
        `;

        if (props.secondary) return css`
            background-color: ${props => props.theme.colors.darkPrimary};
            color: ${props => props.theme.colors.white};
        `;

        if (props.light) return css`
            background-color: ${props => props.theme.colors.white};
        `;

        if (props.dark) return css`
            background-color: ${props => props.theme.colors.black};
            color: ${props => props.theme.colors.white}`;

        return css`
            background-color: transparent;
            border: 4px solid ${props => props.theme.colors.black};
            color: black;
        `;
    }}

    ${props => {
        if (props.primary) return css`
            .a {
                color: ${props => props.theme.colors.white};
            }
        `;

        if (props.secondary) return css`
            color: ${props.theme.colors.white};
        `;

        if (props.light && !props.outline) return css`
            color: ${props.theme.colors.black};
        `;

        if (props.dark) return css`
            color: ${props.theme.colors.white};
        `;

        return css`
            color: ${props.theme.colors.white};
        `;
    }}

    ${props => {
        if (props.outline && props.primary) return css`
            color: ${props => props.theme.colors.primary};
            border: 4px solid ${props => props.theme.colors.primary};
        `;
    
        if (props.outline && props.secondary) return css`
            color: ${props => props.theme.colors.darkPrimary};
            border: 4px solid ${props => props.theme.colors.darkPrimary};
        `;

        if (props.outline && props.dark) return css`
            color: ${props => props.theme.colors.black};
            border: 4px solid ${props => props.theme.colors.black};
        `;

        if (props.outline && props.light) return css`
            a {
                color: ${props => props.theme.colors.white};
            }
            border: 4px solid ${props => props.theme.colors.white};
        `;

        return css`''`;
    }};

  
    line-height: 1.3;
    font-weight: 700;
    text-align: center;
    border: none;
    font-family: 'Nunito', sans-serif;
    text-transform: none;
    :hover{cursor:pointer};
`;
