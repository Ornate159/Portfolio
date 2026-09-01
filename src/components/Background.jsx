const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#07070a]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px] animate-drift-slow" />
      <div className="absolute top-1/3 -left-32 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/10 blur-[120px] animate-drift" />
      <div className="absolute bottom-0 -right-32 h-[30rem] w-[30rem] rounded-full bg-sky-600/10 blur-[120px] animate-drift-slow" />
    </div>
  );
};

export default Background;
