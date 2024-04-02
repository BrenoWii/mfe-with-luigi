import { useState, useEffect, ReactElement, SetStateAction } from "react";
import {
  addInitListener,
  addContextUpdateListener,
  removeContextUpdateListener,
  removeInitListener,
} from "@luigi-project/client";
import "@luigi-project/container";

const Home = () => {
  const [message, setMessage] = useState("");
  const [initListener, setInitListener] = useState<number>();
  useEffect(() => {
    setInitListener(
      addInitListener((context) => {
        console.log("teste Luigi Client initialized.", context);
      })
    );
    return () => {
      if (initListener) {
        removeInitListener(initListener);
      }
    };
  }, []);

  return (
    <div style={{ borderColor: "blue", borderStyle: "dashed" }}>
      <h1>Remote Home http://localhost:3002/</h1>
      <div>{message}</div>
      <div
        style={{
          borderColor: "red",
          borderStyle: "dashed",
          marginTop: "16px",
        }}
      >
        luigi-container wc-example.js web component example
      </div>
      <div
        style={{
          borderColor: "green",
          borderStyle: "dashed",
          marginTop: "16px",
        }}
      >
        luigi-container microfrontend.html
      </div>
    </div>
  );
};

export default Home;
