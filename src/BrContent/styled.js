import styled from 'styled-components/native';

export const Content = styled.View`

  
    ${props => props.vw && ({
      width: props.vw
    })};
    ${props => props.vh && ({
      height: props.vh
    })};

    ${props => props.statusBar && ({
      paddingTop: props.statusBar
    })};

    ${props => props.flex && ({
      flex: props.flex
    })};

    ${props => props.row && ({
      flexDirection: 'row'
    })};

    ${props => props.rowReverse && ({
      flexDirection: 'row-reverse'
    })};


    ${props => props.alignStart && ({
      alignItems:'flex-start',
    })};

    ${props => props.alignEnd && ({
      alignItems:'flex-end',
    })};

    ${props => props.alignCenter && ({
      alignItems:'center',
    })};

    ${props => props.alignStretch && ({
      alignItems:'stretch',
    })};

    ${props => props.justifyStart && ({
      justifyContent: 'flex-start',
    })};

    ${props => props.justifyEnd && ({
      justifyContent: 'flex-end',
    })};

    ${props => props.justifyBetween && ({
      justifyContent: 'space-between'
    })};

    ${props => props.justifyAround && ({
      justifyContent: 'space-around'
    })};
    
    ${props => props.middle && ({
      justifyContent: 'center',
      alignItems:     'center',
    })};

    
    background-color: ${props => props.bg ? props.bg : '#fff' }  ;  
    
     
`;