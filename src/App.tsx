import { useMemo, useState } from "react";
import "@mantine/core/styles.css";
import { Button, MantineProvider, Select } from "@mantine/core";

const groupSelect: Record<string, { label: string; value: string }[]> = {
  a: [
    { label: "", value: "" },
    { label: "A1", value: "a1" },
    { label: "A2", value: "a2" },
  ],

  b: [
    { label: "", value: "" },
    { label: "B1", value: "b1" },
    { label: "B2", value: "b2" },
  ],
};
function App() {
  const [select1, setSelect1] = useState("a");
  const [select2, setSelect2] = useState("");
  const childrenData = useMemo(() => {
    return groupSelect[select1];
  }, [select1]);

  return (
    <MantineProvider>
      <form>
        <Select
          label="parent"
          value={select1}
          onChange={(e) => setSelect1(e || "")}
          data={[
            {
              label: "A",
              value: "a",
            },
            {
              label: "B",
              value: "b",
            },
          ]}
        ></Select>
        <Select
          label="children"
          value={select2}
          onChange={(e) => setSelect2(e || "")}
          data={childrenData}
        ></Select>
      </form>
    </MantineProvider>
  );
}

export default App;
