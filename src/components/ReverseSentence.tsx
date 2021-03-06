import { useState } from "react";
import { reverseSentence } from "@samarmohan/utils";
import { Button } from "./ui/Button";
import { Header } from "./ui/Header";
import { TextArea } from "./ui/TextArea";

export const ReverseSentence = () => {
  const [message, setMessage] = useState("");
  const [modifiedMessage, setModifiedMessage] = useState("");

  const handleChange = (event: any) => {
    event.persist();
    setMessage(event.target.value);
  };

  return (
    <>
      <Header
        title="Reverses the sentence"
        subtitle="both the words and letters flip"
      />
      <TextArea
        placeholder="text to reverse"
        value={message}
        onChange={handleChange}
      />
      <Button onClick={() => setModifiedMessage(reverseSentence(message))}>
        Reverse <i className="fad fa-history"></i>
      </Button>
      <Button
        secondary
        onClick={() => {
          setMessage(modifiedMessage);
          setModifiedMessage(message);
        }}
      >
        Switch <i className="fas fa-repeat-alt"></i>
      </Button>
      <TextArea value={modifiedMessage} />
    </>
  );
};
