// "validOn" expects a boolean expression representing the validation of the input
// ex: <InvalidInputMessage validOn={name.length !== 0} message={"Name can't be empty"}/>

const InvalidInputMessage = ({
  validOn,
  message,
}: {
  validOn: boolean;
  message: string;
}) => {
  return (
    <p className={validOn ? "text-sm invisible" : "text-sm text-red-700 "}>
      {message}
    </p>
  );
};

export default InvalidInputMessage;
