import { X } from "lucide-react";
import "./index.scss";
import { ReactNode } from "react";
import { alertTypes } from "../../type";

interface IProps {
  type: alertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}
const Alert = ({ type, icon, title, description, children }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>
        <span>
          <X />
        </span>
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
