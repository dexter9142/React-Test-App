import List from "./List";
import styled from 'styled-components';

import {BrowserRouter, NavLink} from "react-router-dom";

export default function App() {

return (
    <BrowserRouter>
        <Wrapper>
        <Holder>
            <List />
        </Holder>
        </Wrapper>
    </BrowserRouter>

)
    }

const Wrapper = styled.section`
  padding: 4em;
  min-height: 100vh;
  background: lightblue;
`;

const Holder = styled.div`
  display: flex;
  justify-content: center;
margin: auto;
`;
