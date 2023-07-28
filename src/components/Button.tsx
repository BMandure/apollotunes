function Button(props: { text: string; action: Function }) {
  return (
    <button
      onClick={() => props.action()}
      className="w-[150px] px-4 py-3 border-2 border-main rounded-3xl hover:bg-main"
    >
      {props.text}
    </button>
  );
}

export default Button;
