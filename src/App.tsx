import "./App.css";
import Alert from "./component/Alert/Alert";
import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";
import {getCarDetails} from './component/cars/index'

function App() {
  console.log( getCarDetails('toyota', 'camry', 2020).then(cars => {
    cars.forEach(car => {
        console.log(car);
    });
}));
  
  return (
    <>
      <Alert type={"alert-default"} icon={<Bell />} title={"Upgrade your plan"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          odit ea repudiandae nobis optio vel tempore aliquid <a>veritatis!</a> Esse,
          ut.
        </p>
      </Alert>
      <Alert
        type={"alert-info"}
        icon={<Info size={20} />}
        title={"Note"}
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa a,
        nam repellendus recusandae est, error molestias officiis dolorem dolore
        voluptate temporibus cum passus."
      />

      <Alert
        type={"alert-success"}
        icon={<CheckCheck size={20}  />}
        title={"Your order has been processed"}
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa a,
      nam repellendus recusandae est, error molestias officiis dolorem dolore
      voluptate temporibus cum passus."
      />
      <Alert
        type={"alert-error"}
        icon={<Ban size={20} />}
        title={"Something went wrong"}
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa a,
      nam repellendus recusandae est, error molestias officiis dolorem dolore
      voluptate temporibus cum passus."
      />
      <Alert
        type={"alert-warning"}
        icon={<AlertTriangle size={20} />}
        title={"Tips & Tricks"}
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa a,
      nam repellendus recusandae est, error molestias officiis dolorem dolore
      voluptate temporibus cum passus."
      />
    </>
  );
}

export default App;
