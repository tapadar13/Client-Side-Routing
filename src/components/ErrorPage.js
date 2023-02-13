import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="error-message">
      <h1><i>Oops!</i></h1>
      <h1 className="error-text">{err.status}</h1>
      <h1><i>{err.statusText}</i></h1>
    </div>
  );
};

export default Error;
