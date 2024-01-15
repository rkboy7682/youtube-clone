import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateRendomName, makeid } from "./utils/helper";

const LiveChat = () => {
  const [Livemessage, setLivemessage] = useState();
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // console.log("API POLLING");
      dispatch(
        addMessage({
          name: generateRendomName(),
          message: makeid(10),
        })
      );
    }, 3000);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className=" m-1 p-1">
        {chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <div>
        <form
          className="border-2 border-black-500 bg-blue-400"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("live", Livemessage);
            dispatch(
              addMessage({
                name: "Rahul yadav",
                message: Livemessage,
              })
            );
            setLivemessage(" ");
          }}
        >
          <input
            type="text"
            value={Livemessage}
            onChange={(e) => {
              setLivemessage(e.target.value);
            }}
          />
          <button>Send</button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
