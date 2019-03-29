import styled, {
	css
} from 'styled-components';

const Font = styled.h1 `
font-family: 'Nunito', sans-serif;
word-break: initial ;
hyphens: auto;


    ${props => {
        if (props.thin) return css`
            font-weight: ${props => props.theme.fontWeight.thin};
        `;

        if (props.bold) return css`
            font-weight: ${props => props.theme.fontWeight.bold};
        `;

        return css`
            font-weight: 400;
        `;
    }};

    ${props => props.underline
        ? css`
            text-decoration: ${props => props.theme.textDecoration.underline};
        ` : `
            text-decoration: ${props => props.theme.textDecoration.underline};
    `};

    ${props => props.small
        ? css`
        font-size: calc(${props => props.theme.fontSize.h6} - .5rem);
        ` : `
        ''`
};


    ${props => props.light
        ? css`
            color: ${props => props.theme.colors.white};
        ` : `
            color: ${props => props.theme.colors.black};
    `}
`;
export const P = styled.p `
    font-size: ${props => props.theme.fontSize.p};
    letter-spacing: 1px;
    font-family: 'Nunito', sans-serif;
    line-height: 18px;
    margin-bottom: ${props => props.theme.fontSize.p};
    font-weight: 200;
    ${props => props.small
        ? css`
            font-size: ${props => props.theme.fontSizeSmall.p};
        ` : `
            font-size: ${props => props.theme.fontSize.p};
    `}
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
      font-size: calc(${props => props.theme.fontSize.p} - .5rem);
      line-height: 1;
      letter-spacing: 2px;
    }
`;

export const H1 = styled(Font)
`
    font-size: ${props => props.theme.fontSize.h1};
    letter-spacing: 2px;
    line-height: ${props => props.theme.fontSize.h1};
    margin-top: ${props => props.theme.fontSize.h1};
    margin-bottom: ${props => props.theme.fontSize.h1};

    @media (max-width: ${props => props.theme.screenSize.tablet}) {
      font-size: calc(${props => props.theme.fontSize.h1} - .5rem);
      line-height: 1;
      letter-spacing: 2px;
    }
`;

export const H2 = styled(Font)
`
    font-size: ${props => props.theme.fontSize.h2};
    line-height: ${props => props.theme.fontSize.h2};
    margin-top: ${props => props.theme.fontSize.h2};
    margin-bottom: ${props => props.theme.fontSize.h2};
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
      font-size: calc(${props => props.theme.fontSize.h2} - .5rem);
      line-height: 1;
    }
`;

export const H3 = styled(Font)
`
    font-size: ${props => props.theme.fontSize.h3};
    margin-top: ${props => props.theme.fontSize.h3};
    margin-bottom: ${props => props.theme.fontSize.h3};
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
      font-size: calc(${props => props.theme.fontSize.h3} - .5rem);
      line-height: ${props => props.theme.fontSize.h3};
    }
`;

export const H4 = styled(Font)
`
    font-size: ${props => props.theme.fontSize.h4};
    margin-top: ${props => props.theme.fontSize.h4};
    margin-bottom: ${props => props.theme.fontSize.h4};
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
		font-size: calc(${props => props.theme.fontSize.h4} - .5rem);
		line-height: ${props => props.theme.fontSize.h4};
    }
`;

export const H5 = styled(Font)
`
    font-size: ${props => props.theme.fontSize.h5};
    margin-top: ${props => props.theme.fontSize.h5};
    margin-bottom: ${props => props.theme.fontSize.h5};
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
		font-size: calc(${props => props.theme.fontSize.h5} - .5rem);
		line-height: ${props => props.theme.fontSize.h5};
    }
`;

export const H6 = styled(Font)
`
    font-size: ${props => props.theme.fontSize.h6};
    margin-top: ${props => props.theme.fontSize.h6};
    margin-bottom: ${props => props.theme.fontSize.h6};
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
      	line-height: ${props => props.theme.fontSize.h6};
    }
`;
export const SMALL = styled(Font)
`
    font-size: ${props => props.theme.fontSizeSmall.h6};
    margin-top: ${props => props.theme.fontSizeSmall.h6};
    margin-bottom: ${props => props.theme.fontSizeSmall.h6};
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
      	line-height: ${props => props.theme.fontSizeSmall.h6};
    }
`;