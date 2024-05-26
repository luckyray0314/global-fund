"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Button, Input, Slider, Tooltip, Spinner } from "@nextui-org/react";
import { toast } from "react-hot-toast";

interface Message {
  id: number;
  text: string;
  sender: string;
}

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [memoryID, setMemoryID] = useState(
    Math.floor(new Date().getTime() / 1000)
  );

  const newTextRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  // const [currentHeight, setCurrentHeight] = useState(0);
  const currentHeight = useRef(100);

  function scrollDomToBottom(messageType: string) {
    const dom = newTextRef.current;
    if (dom) {
      // console.log("dom: ", dom.scrollHeight, currentHeight, messageType);
      requestAnimationFrame(() => {
        setAutoScroll(true);
        if (messageType == "user") {
          // setCurrentHeight(dom.scrollHeight);
          currentHeight.current = dom.scrollHeight;
          dom.scrollTo(0, dom.scrollHeight);
        } else {
          // console.log(currentHeight.current);
          if (currentHeight.current != 350)
            dom.scrollTo(0, currentHeight.current - 100);
        }
      });
    }
  }

  useEffect(() => {
    if (messages) {
      let len = messages?.length - 1;
      // console.log("sender------", messages[len].sender);
      if (autoScroll) {
        if (messages[len]?.sender == "user") scrollDomToBottom("user");
        else scrollDomToBottom("bot");
      }
    }
  }, [messages]);

  useEffect(() => {
    setMemoryID(Math.floor(new Date().getTime() / 1000));
  }, []);

  // console.log("memoryID---------", memoryID);

  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement> | undefined) => {
    if (e?.key !== "Enter") {
      return;
    }
    if (e.key === "Enter" && (e.ctrlKey || e.shiftKey)) {
      setPrompt(prompt + "\n");
      // return;
    } else if (e.key === "Enter") {
      e.preventDefault();
      let user_input = prompt;
      setPrompt("");
      if (!loading) sendPrompt(user_input);
    }
  };

  const sendUserInput = async () => {
    let user_input = prompt;
    setPrompt("");
    if (!loading) sendPrompt(user_input);
  };

  const sendPrompt = async (user_input: string) => {
    // setErrorMessage("");

    if (user_input.trim() == "") {
      // console.log("prompt is empty");
      // setErrorMessage("Prompt cannot be empty!");
      // setLoading(false);
      return;
    }
    setLoading(true);
    // console.log("-----prompt-------", prompt);
    let num = 0;
    if (messages != null) {
      num = messages?.length;
      setMessages([...messages, { id: num, text: user_input, sender: "user" }]);
    } else {
      num = 0;
      setMessages([{ id: 0, text: user_input, sender: "user" }]);
    }

    await fetch("https://starling-api.fly.dev/chat/gf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memory_id: memoryID,
        user_input: user_input,
      }),
    })
      .then((response) => {
        // console.log("response--------", response.json());
        return response.json();
      })
      .then((data) => {
        // console.log("Result", data);
        let links = data?.source_nodes;
        setResponse(
          data?.response + "\n\nReferences:\n\n" + links.join("\n\n")
        );
        // setOpen(true);
      })
      .catch(() => {
        // console.error(error);
        setErrorMessage("Network Error! Please try again.");
      });
    // scrollDomToBottom();
    setLoading(false);
  };

  function copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
        toast.success("Successfully copied!");
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
        toast.error("Error occured!");
      });
  }

  useEffect(() => {
    setPrompt("");
    if (messages != null && messages?.length > 0)
      setMessages([
        ...messages,
        { id: messages.length, text: response, sender: "bot" },
      ]);
  }, [response]);

  useEffect(() => {
    setPrompt("");
    if (messages != null && errorMessage != "") {
      setMessages([
        ...messages,
        { id: messages.length, text: errorMessage, sender: "bot" },
      ]);
      setErrorMessage("");
    }
  }, [errorMessage]);

  const Message = ({ message }: { message: Message }) => {
    return (
      <>
        {message?.sender == "user" ? (
          <div className="w-full flex gap-[10px] items-center mb-[20px]">
            <div className="bg-[#2E4DF9] w-[33px] h-[33px] text-[10px] rounded-full text-center text-white items-center flex justify-center">
              YOU
            </div>
            <div
              className="bg-[#2E4DF9] max-w-[75%] text-white p-[10px] rounded-[10px] text-[13px]"
              style={{ whiteSpace: "pre-line" }}
            >
              {message.text}
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-end gap-[10px] items-center  mb-[20px]">
            <Tooltip showArrow={true} content="Copy answer!">
              <Button
                isIconOnly
                className="w-[50px] h-[50px] bg-transparent rounded-[5px]"
                onClick={() => copyToClipboard(message.text)}
              >
                <Image src={"/copy.png"} width={17} height={17} alt="copy" />
              </Button>
            </Tooltip>
            <div
              className="bg-white border-[#2E4DF9] border max-w-[75%] text-black p-[10px] rounded-[10px] text-[13px]"
              style={{ whiteSpace: "pre-line" }}
            >
              {message.text}
            </div>
            <Image
              src={"/logo_icon.png"}
              width={33}
              height={36}
              alt="logo_icon"
            />
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <div className="relative w-full h-[360px] ">
        <Image
          className="-z-10"
          src={"/image 1.png"}
          fill
          sizes="100vw"
          alt="image1"
        />
        <div className="w-full h-[360px] top-0 bg-gradient-to-r from-[#000000e6] to-[#00000000] px-[130px] pt-[70px] pb-[50px] text-white">
          <h1 className="text-[28px]  font-extrabold">
            Welcome to the Implementers Hub
          </h1>
          <p className="w-[60%] min-w-[780px] mt-[15px] text-[16px]">
            Welcome to the Global Fund Implementers Hub, a dedicated online
            platform designed to support Principal Recipients and Sub Recipients
            in managing and implementing their grants effectively. This hub
            provides easy access to a wealth of resources, guidelines, and tools
            tailored to your needs.
          </p>
          <p className="w-[60%] min-w-[780px] mt-[44px] text-[16px]">
            Our AI chatbot is here to assist you by answering both common and
            specific questions related to grant management and implementation.
            Explore the platform to streamline your processes and enhance your
            project's success.
          </p>
        </div>
      </div>

      <div className="px-[130px] mt-[50px] flex gap-[50px]">
        <div className="w-[20%] min-w-[214px] flex flex-col gap-[20px]">
          <Button className="w-full h-[46px] bg-[#F7F7F7] rounded-[3px] text-black text-[14.5px]">
            Latest Updates
          </Button>
          <Button className="w-full h-[46px] bg-[#F7F7F7] rounded-[3px] text-black text-[14.5px]">
            Upcoming Events
          </Button>
          <Button className="w-full h-[46px] bg-[#F7F7F7] rounded-[3px] text-black text-[14.5px]">
            Featuring GF Implementers
          </Button>
          <Button className="w-full h-[46px] bg-[#F7F7F7] rounded-[3px] text-black text-[14.5px]">
            Templates & Tools
          </Button>
          <Button className="w-full h-[46px] bg-[#F7F7F7] rounded-[3px] text-black text-[14.5px]">
            LFA resources
          </Button>
          <Button className="w-full h-[46px] bg-[#F7F7F7] rounded-[3px] text-black text-[14.5px]">
            CCM Resources
          </Button>
        </div>
        <div className="w-[80%] h-[500px] bg-[#F7F7F7]">
          <div
            className="h-[437px] p-[20px] overflow-y-auto custom-scrollbar"
            ref={newTextRef}
          >
            {messages == null ? (
              <div className="w-full flex justify-end gap-[10px] items-center  mb-[20px] ">
                <div className="bg-white border-[#2E4DF9] border w-[75%] text-black p-[10px] rounded-[10px] text-[13px] flex flex-col gap-[6px]">
                  <p>
                    Here are some pro tips to maximize the effectiveness of
                    using an AI language model (LLM) chatbot for obtaining the
                    best answers:
                  </p>
                  <p>
                    <span className="text-[#2E4DF9] font-extrabold">
                      Provide Context
                    </span>
                    : Give background information that could influence the
                    answer.
                  </p>
                  <p>
                    <span className="text-[#2E4DF9] font-extrabold">
                      Be Specific
                    </span>
                    : Clearly define your question or problem. Specific details
                    can help the AI provide more accurate and relevant
                    responses.
                  </p>
                  <p>
                    <span className="text-[#2E4DF9] font-extrabold">
                      Break Down Complex Questions
                    </span>
                    : If you have a multi-part question, consider breaking it
                    down into simpler, more direct questions. Use follow-up
                    questions if the first response does not completely address
                    your needs.
                  </p>
                </div>
                <Image
                  src={"/logo_icon.png"}
                  width={33}
                  height={36}
                  alt="logo_icon"
                />
              </div>
            ) : (
              messages?.map((message) => (
                <Message key={message.id} message={message} />
              ))
            )}
          </div>
          <Input
            placeholder="Type your question ..."
            classNames={{
              base: "w-full",
              inputWrapper:
                "h-[63px] bg-[#F7F7F7] border-t border-black rounded-none pl-[20px] pr-[10px]",
              input: "text-[14px] placeholder:text-[#A7A7A7]",
            }}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleEnter}
            endContent={
              <div className="flex gap-[10px]">
                <Image
                  src={"/upload.svg"}
                  width={40}
                  height={40}
                  alt="upload"
                />
                <Button
                  isIconOnly
                  className="w-[50px] h-[50px] bg-transparent rounded-[5px]"
                  onClick={sendUserInput}
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner color="primary" size="sm" />
                  ) : (
                    <Image
                      src={"/send.svg"}
                      width={40}
                      height={40}
                      alt="send"
                    />
                  )}
                </Button>
              </div>
            }
          />
        </div>
      </div>

      <div className="px-[130px] mt-[60px] flex flex-col gap-[60px]">
        <div>
          <h2 className="text-[15px] font-extrabold">Essential Toolkits</h2>
          <div className="w-full flex gap-[20px] font-sans mt-[20px]">
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              PR onboarding toolkit
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              COE toolkit
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Applying for GF funding toolkit
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Grant-making toolkit
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Applying for GF funding toolkit
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Grant-making toolkit
            </Button>
          </div>
          <Slider
            aria-label="Player progress"
            color="foreground"
            hideThumb={true}
            defaultValue={20}
            classNames={{
              base: "w-full mt-[10px]",
              track: "h-[9px]",
              filler: "bg-[#2E4DF9] rounded-[9999px]",
            }}
          />
        </div>
        <div>
          <h2 className="text-[15px] font-extrabold">Technical Guidelines</h2>
          <div className="w-full flex gap-[20px] font-sans mt-[20px]">
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              HIV
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Tuberculosis
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Malaria
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              RSSH-PPR
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Malaria
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              RSSH-PPR
            </Button>
          </div>
          <Slider
            aria-label="Player progress"
            color="foreground"
            hideThumb={true}
            defaultValue={20}
            classNames={{
              base: "w-full mt-[10px]",
              track: "h-[9px]",
              filler: "bg-[#2E4DF9] rounded-[9999px]",
            }}
          />
        </div>
        <div>
          <h2 className="text-[15px] font-extrabold">Compilance corner</h2>
          <div className="w-full flex gap-[20px] font-sans mt-[20px]">
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Grant regulations
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Operational policy
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Sustainability, transition & co-financing
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Risk management
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Risk management
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Risk management
            </Button>
          </div>
          <Slider
            aria-label="Player progress"
            color="foreground"
            hideThumb={true}
            defaultValue={20}
            classNames={{
              base: "w-full mt-[10px]",
              track: "h-[9px]",
              filler: "bg-[#2E4DF9] rounded-[9999px]",
            }}
          />
        </div>
        <div>
          <h2 className="text-[15px] font-extrabold">
            Improving implementation excellence
          </h2>
          <div className="w-full flex gap-[20px] font-sans mt-[20px]">
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              E-learnings
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              PR working tools
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Technical Assistance
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Policies & requirements
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Policies & requirements
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Policies & requirements
            </Button>
          </div>
          <Slider
            aria-label="Player progress"
            color="foreground"
            hideThumb={true}
            defaultValue={20}
            classNames={{
              base: "w-full mt-[10px]",
              track: "h-[9px]",
              filler: "bg-[#2E4DF9] rounded-[9999px]",
            }}
          />
        </div>
        <div>
          <h2 className="text-[15px] font-extrabold">
            Additional funding opportunities
          </h2>
          <div className="w-full flex gap-[20px] font-sans mt-[20px]">
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Catalytic multicountry funds
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Catalytic Matching Funds
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Strategic Initiatives
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Innovative Financing
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Innovative Financing
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Innovative Financing
            </Button>
          </div>
          <Slider
            aria-label="Player progress"
            color="foreground"
            hideThumb={true}
            defaultValue={20}
            classNames={{
              base: "w-full mt-[10px]",
              track: "h-[9px]",
              filler: "bg-[#2E4DF9] rounded-[9999px]",
            }}
          />
        </div>
        <div>
          <h2 className="text-[15px] font-extrabold">Learn more about...</h2>
          <div className="w-full flex gap-[20px] font-sans mt-[20px]">
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              RBC toolkit
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              COE flexibilities
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Management TA CMLI
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Management TA CMLI
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Management TA CMLI
            </Button>
            <Button className="w-1/6 h-[71px] border border-black bg-white rounded-[3px] text-black text-[15px] p-[15px] text-wrap">
              Management TA CMLI
            </Button>
          </div>
          <Slider
            aria-label="Player progress"
            color="foreground"
            hideThumb={true}
            defaultValue={20}
            classNames={{
              base: "w-full mt-[10px]",
              track: "h-[9px]",
              filler: "bg-[#2E4DF9] rounded-[9999px]",
            }}
          />
        </div>
      </div>
    </>
  );
}
