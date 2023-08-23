// type="filled" title="cstomize It" handelClick={() => (state.intro = false)} customStyle="w-fit px-4 py-2.5 font-bold text-sm"
import { useSnapshot } from "valtio";
import state from "../store";

function CustomButton({ title, type, customStyle, handelClick }) {
  const snap = useSnapshot(state);
  const GenerateType = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#ffffff",
      };
    }
  };

  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`} style={GenerateType(type)} onClick={handelClick}>
      {title}
    </button>
  );
}

export default CustomButton;
