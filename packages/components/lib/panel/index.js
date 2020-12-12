import React from "react";
import styled from "@emotion/styled";

const Panel = styled.div`
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  font-size: 1rem;
`;

const PanelTitle = styled.p`
  background-color: #3298dc;
  border-radius: 6px 6px 0 0;
  color: #fff;
  font-size: 1.25em;
  font-weight: 700;
  line-height: 1.25;
  margin: 0;
  padding: 0.75em 1em;
`;

const CheckList = styled.div`
  overflow: auto;
  max-height: 100px;
`;

const PanelBlock = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 0.5em 0.75em;
  background: ${(props) => (props.total ? "#3298dc" : "#fafafa")};
  color: ${(props) => (props.total ? "#fff" : "#363636")};
  border-radius: ${(props) => (props.total ? "0 0 6px 6px" : "0")};
`;

const Label = styled.div`
  display: inline-block;
  line-height: 1.25;
  position: relative;
`;

const Input = styled.input`
  cursor: pointer;
`;

const _Panel = ({ title, ListItem, onClick, totalCheck }) => {
  return (
    <Panel>
      <PanelTitle>{title}</PanelTitle>
      <CheckList>
        {ListItem.map((item, i) => (
          <PanelBlock key={i}>
            <Label>
              <Input id={`item-${i}`} type="checkbox" onClick={onClick} />
              {item}
            </Label>
          </PanelBlock>
        ))}
      </CheckList>
      {ListItem.length > 0 && (
        <PanelBlock total>
          <span>Completed:</span>
          <span id="total">{totalCheck}</span>
          <span>{`/${ListItem.length}`}</span>
        </PanelBlock>
      )}
    </Panel>
  );
};

export default _Panel;
