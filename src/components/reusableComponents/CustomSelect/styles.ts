import styled from "styled-components";
import {theme} from "../../../styles/theme.ts";

export const SelectWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 30rem; 
    font-family: Arial, sans-serif;
`;

export const SelectHeader = styled.div`
    padding: 1rem; 
    border: 0.1rem solid ${theme.palette.grey}; 
    border-radius: 0.4rem; 
    background: ${theme.palette.white};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.palette.dark};
`;

export const Arrow = styled.span<{ isOpen: boolean }>`
    transition: transform 0.2s ease;
    transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    color: ${theme.palette.secondary};
`;

export const SelectDropdown = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: 0.1rem solid ${theme.palette.grey}; 
    border-radius: 0.4rem; 
    background: ${theme.palette.white};
    //box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1); 
    max-height: 20rem; 
    overflow-y: auto;
    z-index: 10;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.8rem; 
    border: none;
    border-bottom: 0.1rem solid ${theme.palette.greyBlue}; 
    outline: none;
    color: ${theme.palette.dark};
    &::placeholder {
        color: ${theme.palette.lightText};
    }
`;

export const OptionsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const OptionItem = styled.li`
    padding: 0.8rem 1.2rem; 
    cursor: pointer;
    display: flex;
    align-items: center;
    color: ${theme.palette.dark};

    &:hover {
        background: ${theme.palette.lightGrey};
    }

    input[type="checkbox"] {
        margin-right: 0.8rem; 
    }
`;

export const SelectAllLabel = styled.label`
    display: flex;
    align-items: center;
    padding: 0.8rem 1.2rem; 
    border-bottom: 0.1rem solid ${theme.palette.greyBlue}; 
    color: ${theme.palette.dark};

    input[type="checkbox"] {
        margin-right: 0.8rem; 
    }
`;

export const NoOptions = styled.li`
    padding: 0.8rem 1.2rem; 
    color: ${theme.palette.lightText};
`;