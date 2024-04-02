import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Props {
  color: "primary";
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

const RoundedBtn = ({ Icon, color }: Props) => {
  return (
    <div className="relative bg-[#2E3341] rounded-full cursor-pointer w-[42px] h-[42px] hover:bg-[#464d61] transition-all">
      <Icon className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " />
    </div>
  );
};

export default RoundedBtn;
