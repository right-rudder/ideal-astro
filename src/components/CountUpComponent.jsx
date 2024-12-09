import CountUp from "react-countup";

const CountUpComponent = ({ value }) => {
  return <CountUp end={value} enableScrollSpy scrollSpyOnce />;
};

export default CountUpComponent;
