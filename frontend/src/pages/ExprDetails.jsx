import Chatbot from "@/components/Chatbot";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const ExprDetails = () => {
  const { id } = useParams();
  const {
    data: expDetails,
    isLoading: expLoading,
    error: expErr,
  } = useQuery({
    queryKey: ["expId"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:8080/pmc/experiments/${id}`
      );
      return response.data;
    },
  });

  return (
    <div>
      <h1 className=" font-semibold text-center text-xl text-cyan-100">
        {expDetails?.title}
      </h1>
      <p className="text-xl font-semibold text-violet-300 mt-6">Abstract</p>
      <p className="leading-7 text-[17px]">{expDetails?.abstractText}</p>
      <h2 className="text-xl font-semibold text-violet-300 mt-6">Categories</h2>
      <p className="leading-7 text-[17px]">{expDetails?.category}</p>
      <h2 className="text-xl font-semibold text-violet-300 mt-6">Authors</h2>
      <p className="leading-7 text-[17px]">{expDetails?.authors}</p>
      <h2 className="text-xl font-semibold text-violet-300 mt-6">Keywords</h2>
      <p className="leading-7 text-[17px]">{expDetails?.keywords}</p>
      <Chatbot
        expDetails={expDetails}
        expLoading={expLoading}
        expErr={expErr}
      />
    </div>
  );
};

export default ExprDetails;
