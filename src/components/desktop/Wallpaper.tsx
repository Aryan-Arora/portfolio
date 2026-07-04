export function Wallpaper() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 30% 15%, #f7c59f 0%, #e08a6f 18%, #b15f7a 34%, #5b4272 52%, #2b2f5c 68%, #10142e 84%, #05060f 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(to top, #05060f 0%, rgba(5,6,15,0) 45%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{
          clipPath:
            "polygon(0% 100%, 0% 55%, 15% 42%, 30% 58%, 45% 38%, 60% 60%, 75% 40%, 88% 56%, 100% 45%, 100% 100%)",
          background: "linear-gradient(to bottom, #1b1d38, #05060a)",
        }}
      />
    </div>
  );
}
