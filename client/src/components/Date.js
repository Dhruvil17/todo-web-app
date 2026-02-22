import { getDate } from "../utils/constants";

const Date = () => {
    return (
        <div>
            <h2 className="my-[5%] text-lg font-semibold">{getDate()}</h2>
        </div>
    );
};

export default Date;
