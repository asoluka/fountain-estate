import { Collapse } from "antd";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

export const Accordion = ({ data }) => (
  <Collapse defaultActiveKey={["1"]} onChange={callback}>
    {data.map((elem, idx) => {
      const { answer, question } = elem;
      return (
        <Panel header={question} key={idx}>
          {Array.isArray(answer) ? (
            <ul>
              {answer.map((item, key) => (
                <li key={key}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{elem.answer}</p>
          )}
        </Panel>
      );
    })}
  </Collapse>
);
