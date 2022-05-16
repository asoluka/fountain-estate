import { Collapse } from "antd";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

export const Accordion = ({ data }) => (
  <Collapse defaultActiveKey={["1"]} onChange={callback}>
    {data.map((elem, idx) => {
      return (
        <Panel header={elem.question} key={idx}>
          <p>{elem.answer}</p>
        </Panel>
      );
    })}
  </Collapse>
);
