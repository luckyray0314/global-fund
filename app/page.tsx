import Image from "next/image";
import { Button, Input, Slider } from "@nextui-org/react";

interface Message {
  id: number;
  text: string;
  sender: string;
}

export default function Home() {
  // const Message = ({ message }: { message: Message }) => {
  const Message = ({ sender }: { sender: string }) => {
    return (
      <>
        {/* {message?.sender == "user" ? ( */}
        {sender == "user" ? (
          <div className="w-full flex gap-[10px] items-center mb-[20px]">
            <div className="bg-[#2E4DF9] w-[33px] h-[33px] text-[10px] rounded-full text-center text-white items-center flex justify-center">
              YOU
            </div>
            <div
              className="bg-[#2E4DF9] max-w-[75%] text-white p-[10px] rounded-[10px] text-[13px]"
              style={{ whiteSpace: "pre-line" }}
            >
              Lorem ipsum dolor sit amet consectetur. Volutpat quam pellentesque
              rhoncus dolor urna pretium. Euismod sed volutpat.
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-end gap-[10px] items-center  mb-[20px]">
            <Image src={"/copy.png"} width={17} height={17} alt="copy" />
            <div
              className="bg-white border-[#2E4DF9] border max-w-[75%] text-black p-[10px] rounded-[10px] text-[13px]"
              style={{ whiteSpace: "pre-line" }}
            >
              Lorem ipsum dolor sit amet consectetur. Risus orci in faucibus
              cursus elementum. Ornare et dui in ipsum mi enim amet.
              Pellentesque tempus morbi sit sit. Consectetur sit adipiscing
              pretium curabitur eu. Amet ornare pellentesque aliquet vitae
              posuere platea. Elit adipiscing sed eget diam id viverra. Risus
              convallis sapien fermentum.
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
          <div className="h-[437px] p-[20px]">
            <div className="w-full flex justify-end gap-[10px] items-center  mb-[20px]">
              <div className="bg-white border-[#2E4DF9] border w-[75%] text-black p-[10px] rounded-[10px] text-[13px] flex flex-col gap-[6px]">
                <p>
                  Here are some pro tips to maximize the effectiveness of using
                  an AI language model (LLM) chatbot for obtaining the best
                  answers:
                </p>
                <p>
                  <span className="text-[#2E4DF9] font-extrabold">
                    Provide Context
                  </span>
                  : Give background information that could influence the answer.
                </p>
                <p>
                  <span className="text-[#2E4DF9] font-extrabold">
                    Be Specific
                  </span>
                  : Clearly define your question or problem. Specific details
                  can help the AI provide more accurate and relevant responses.
                </p>
                <p>
                  <span className="text-[#2E4DF9] font-extrabold">
                    Break Down Complex Questions
                  </span>
                  : If you have a multi-part question, consider breaking it down
                  into simpler, more direct questions. Use follow-up questions
                  if the first response does not completely address your needs.
                </p>
              </div>
              <Image
                src={"/logo_icon.png"}
                width={33}
                height={36}
                alt="logo_icon"
              />
            </div>
            <Message sender="user" />
            <Message sender="bot" />
          </div>
          <Input
            placeholder="Type your question ..."
            classNames={{
              base: "w-full",
              inputWrapper:
                "h-[63px] bg-[#F7F7F7] border-t border-black rounded-none pl-[20px] pr-[10px]",
              input: "text-[14px] placeholder:text-[#A7A7A7]",
            }}
            endContent={
              <div className="flex gap-[10px]">
                <Image
                  src={"/upload.svg"}
                  width={40}
                  height={40}
                  alt="upload"
                />
                <Image src={"/send.svg"} width={40} height={40} alt="send" />
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
