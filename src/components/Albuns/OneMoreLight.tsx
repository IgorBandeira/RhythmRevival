export function OneMoreLight() {
  return (
    <a
      href=""
      className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
    >
      <img
        src="https://fsom.nl/wp-content/uploads/2017/05/linkin_park_one_more_light.jpg"
        className="w-full"
        width={120}
        height={120}
        alt="Capa Linkin Park"
      />
      <strong className="font-semibold">One More Light</strong>
      <span className="txt-xs text-zinc-400">Linkin Park</span>
    </a>
  );
}
