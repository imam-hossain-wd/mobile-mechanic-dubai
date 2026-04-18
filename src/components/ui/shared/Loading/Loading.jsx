import { HashLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="flex justify-center items-center -mt-28 h-screen"><HashLoader
            color="#007A55"
            size={50}
        /></div>
    )
}
