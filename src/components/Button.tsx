function Button(props: {
  text: string;
  action: Function;
  closeButton: boolean;
}) {
  return (
    <button
      onClick={() => props.action()}
      className={`w-[150px] px-4 py-3 border-2 ${
        props.closeButton ? "border-zinc-800" : "border-main"
      } rounded-3xl hover:bg-main`}
    >
      {props.text}
    </button>
  );
}

export default Button;
