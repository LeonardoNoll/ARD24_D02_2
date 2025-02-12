const InputConfirm = ({
  message,
  showOn,
}: {
  message: string;
  showOn: boolean;
}) => {
  {
    /* Exibe a mensagem apenas se showMessage for true */
  }
  return showOn ? <p className="text-emerald-700">{message}</p> : <></>;
};

export default InputConfirm;

