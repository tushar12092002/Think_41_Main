import React from "react";

const BackgroundColors = [
  "rgba(240,240,243,1)",
  "#f2f2f5",
  "rgb(222,223,225)",
  "#efefee",
];

const OurExpertiseBox = ({
  text,
  smalltext,
  subtext,
  icon,
  type,
  width,
  height,
  shadow,
}) => {
  return (
    <div
      style={{
        backgroundColor: BackgroundColors[type],
        width: width,
        height: height,
      }}
      className={`px-[12px] py-[10px] rounded-[10px] ${
        shadow &&
        "shadow-[-3px_-3px_9px_0px_#FFF,_5px_5px_9px_0px_rgba(174,174,192,0.4)]"
      } hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer`}
    >
      <div className="flex flex-col gap-[50px]">
        <div className="flex justify-between w-full">
          <p className="text-t-blue-1 font-montserrat text-[18px] not-italic font-bold leading-[18px] tracking-[0.18px] self-stretch">
            {text}
          </p>
          {smalltext && (
            <p className="text-t-blue-1 w-full font-montserrat text-[12px] not-italic font-bold leading-[12px] tracking-[0.18px] self-stretch ">
              {smalltext}
            </p>
          )}
          {icon ? (
            <p className="w-[50px] h-[48px] flex justify-center items-center flex-shrink-0 rounded-[11px] bg-[#EEEEEE] shadow-[inset_-3px_-3px_3px_rgba(255,_255,_255,_0.7),_inset_3px_3px_3px_rgba(174,_174,_192,_0.15),-3px_-3px_7px_0px_#FFF,_3px_3px_7px_0px_rgba(174,_174,_192,_0.4)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
              >
                <path
                  d="M10.0933 4.49078H6.77537C6.27252 4.49078 5.79028 4.69053 5.43471 5.04609C5.07915 5.40166 4.87939 5.8839 4.87939 6.38675V12.0747C4.87939 12.3236 4.92844 12.5702 5.02372 12.8002C5.119 13.0302 5.25865 13.2393 5.43471 13.4153C5.61077 13.5914 5.81978 13.731 6.04981 13.8263C6.27984 13.9216 6.52638 13.9706 6.77537 13.9706H10.0933C10.3423 13.9706 10.5888 13.9216 10.8189 13.8263C11.0489 13.731 11.2579 13.5914 11.434 13.4153C11.61 13.2393 11.7497 13.0302 11.845 12.8002C11.9402 12.5702 11.9893 12.3236 11.9893 12.0747V6.38675C11.9893 5.8839 11.7895 5.40166 11.434 5.04609C11.0784 4.69053 10.5962 4.49078 10.0933 4.49078ZM10.0933 18.7106H6.77537C6.27252 18.7106 5.79028 18.9103 5.43471 19.2659C5.07915 19.6214 4.87939 20.1037 4.87939 20.6065V23.9245C4.87939 24.4273 5.07915 24.9096 5.43471 25.2651C5.79028 25.6207 6.27252 25.8205 6.77537 25.8205H10.0933C10.5962 25.8205 11.0784 25.6207 11.434 25.2651C11.7895 24.9096 11.9893 24.4273 11.9893 23.9245V20.6065C11.9893 20.1037 11.7895 19.6214 11.434 19.2659C11.0784 18.9103 10.5962 18.7106 10.0933 18.7106ZM21.9431 4.49078H18.6252C18.1223 4.49078 17.6401 4.69053 17.2845 5.04609C16.929 5.40166 16.7292 5.8839 16.7292 6.38675V9.7047C16.7292 10.2075 16.929 10.6898 17.2845 11.0454C17.6401 11.4009 18.1223 11.6007 18.6252 11.6007H21.9431C22.446 11.6007 22.9282 11.4009 23.2838 11.0454C23.6394 10.6898 23.8391 10.2075 23.8391 9.7047V6.38675C23.8391 5.8839 23.6394 5.40166 23.2838 5.04609C22.9282 4.69053 22.446 4.49078 21.9431 4.49078ZM21.9431 16.3406H18.6252C18.1223 16.3406 17.6401 16.5404 17.2845 16.8959C16.929 17.2515 16.7292 17.7337 16.7292 18.2366V23.9245C16.7292 24.4273 16.929 24.9096 17.2845 25.2651C17.6401 25.6207 18.1223 25.8205 18.6252 25.8205H21.9431C22.446 25.8205 22.9282 25.6207 23.2838 25.2651C23.6394 24.9096 23.8391 24.4273 23.8391 23.9245V18.2366C23.8391 17.7337 23.6394 17.2515 23.2838 16.8959C22.9282 16.5404 22.446 16.3406 21.9431 16.3406Z"
                  stroke="#0060C7"
                  stroke-width="1.77747"
                  stroke-miterlimit="10"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          ) : null}
        </div>
        <p className="text-[#195B81] font-montserrat text-[12px] not-italic font-semibold leading-none opacity-40 w-[446px]">
          {subtext ? subtext : null}
        </p>
      </div>
    </div>
  );
};

const OurExpertise = () => {
  return (
    <div className="h-full flex w-full items-center justify-center mb-[36px] bg-white">
      <div className="rounded-[43.213px] border-[4px] border-t-grey-4 bg-[rgba(255,_255,_255,_0.10)] home-expertise-element w-[1058.717px] h-[658.226px] flex flex-col items-center gap-[30px] flex-shrink-0 p-[31px]">
        <div className="flex w-[991.583px] justify-between items-start">
          <p className="text-t-blue-2 w-full text-center font-montserrat text-[37.04px] not-italic font-semibold leading-[57.561px] tracking-[-1.151px]">
            Our Expertise
          </p>
        </div>
        <div className="flex flex-col gap-[10px]">
          {/* Type 1 */}
          <div className="flex gap-[10px] ">
            <OurExpertiseBox
              text="Intelligent Interfaces"
              subtext="Simplify complex workflows, allowing users to leverage AI effortlessly"
              width="500px"
              height="136px"
              icon={true}
              shadow={true}
              type={0}
            />
            <OurExpertiseBox
              text="Agents & Copilots"
              subtext="Simplify complex workflows, allowing users to leverage AI effortlessly"
              width="500px"
              height="136px"
              icon={true}
              shadow={true}
              type={0}
            />
          </div>

          {/* Type 2 */}
          <div className="flex gap-[10px]">
            <OurExpertiseBox
              text="Code Generation"
              subtext="Prompts, API"
              width="246px"
              height="116px"
              type={1}
            />
            <OurExpertiseBox
              text="Multimodal Platform"
              subtext="Voice, Image, Voice, OCR, Telephony "
              width="246px"
              height="116px"
              type={1}
            />
            <OurExpertiseBox
              text="Knowledge base search"
              width="246px"
              height="116px"
              type={1}
            />
            <OurExpertiseBox
              text="Workflow Engine"
              subtext="DAGs, Agentic workflow system"
              width="246px"
              height="116px"
              type={1}
            />
          </div>

          {/* Type 3 */}
          <div className="flex gap-[10px]">
            <OurExpertiseBox
              text="MCP"
              width="160.7px"
              height="80px"
              type={2}
            />
            <OurExpertiseBox
              text="NL to SQL"
              width="160.7px"
              height="80px"
              type={2}
            />
            <OurExpertiseBox
              text="Fine tuned models"
              width="160.7px"
              height="80px"
              type={2}
            />
            <OurExpertiseBox
              text="RAG"
              width="160.7px"
              height="80px"
              type={2}
            />
            <OurExpertiseBox
              text="Evals"
              width="160.7px"
              height="80px"
              type={2}
            />
            <OurExpertiseBox
              text="Guardrails"
              width="160.7px"
              height="80px"
              type={2}
            />
          </div>

          {/* Type 4 */}
          <div className="flex gap-[10px]">
            <OurExpertiseBox
              smalltext="LLM"
              width="160.7px"
              height="112px"
              shadow={true}
              type={3}
            />
            <OurExpertiseBox
              smalltext="Image Generation Model"
              width="160.7px"
              height="112px"
              shadow={true}
              type={3}
            />
            <OurExpertiseBox
              smalltext="Embedding Models"
              width="160.7px"
              height="112px"
              shadow={true}
              type={3}
            />
            <div className="flex flex-col gap-[5px]">
              <OurExpertiseBox
                smalltext="V2V"
                width="160.7px"
                height="33px"
                shadow={true}
                type={3}
              />
              <OurExpertiseBox
                smalltext="STT"
                width="160.7px"
                height="33px"
                shadow={true}
                type={3}
              />
              <OurExpertiseBox
                smalltext="TTS"
                width="160.7px"
                height="33px"
                shadow={true}
                type={3}
              />
            </div>
            <OurExpertiseBox
              smalltext="Task Specific Models"
              width="160.7px"
              height="112px"
              shadow={true}
              type={3}
            />
            <OurExpertiseBox
              smalltext="Reasoning Models"
              width="160.7px"
              height="112px"
              shadow={true}
              type={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
