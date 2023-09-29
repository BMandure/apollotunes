function Button(props: { text: string; onClickBeheavor: () => any }) {
  return (
    <button
      className="px-4 py-2 w-[200px] rounded-3xl border border-main hover:text-main hover:bg-zinc-950"
      onClick={() => props.onClickBeheavor()}
    >
      {props.text}
    </button>
  );
}

export default Button;
