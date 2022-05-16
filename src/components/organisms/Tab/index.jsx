import { Tabs } from "antd";
const { TabPane } = Tabs;

export const Tab = ({ data, position }) => {
  // eslint-disable-next-line no-unused-vars
  return (
    <>
      <Tabs tabPosition={position} type="card">
        {data.map((elem, idx) => {
          return (
            <TabPane
              id={elem.link}
              key={idx + 1}
              tab={<a href={elem.link}>{elem.title}</a>}
            >
              {elem.content}
            </TabPane>
          );
        })}
      </Tabs>
    </>
  );
};
