import styled from 'styled-components'
export const TopMenuDiv = styled.div`
    background: linear-gradient(to top left, #282828 9%, #171717 100%);
    box-shadow: inset 0px 0px 20px 1px rgba(0, 0, 0, 0.75);
    text-decoration: none;
    list-style: none;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 3vmin;
    padding: 10px;
    position: relative;
    z-index: 3;
    a {
        padding: 15px;
        margin-left: 20px;
    }
    li {
        &:hover{
            i{
                color: white !important;
                transform: rotate(30deg);
            }
        }
    }
    i{
        transition: all 0.2s;
        color:var(--icon-color);
    }
`;
export const TopMenuSol = styled.div`
    flex:30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const TopMenuSag = styled.div`
    flex: 30%;
    display:flex;
    justify-content: flex-end;
    align-items: center;
`;
export const AnaksLogo = styled.div`
    display: flex;
    align-items: center;
`;