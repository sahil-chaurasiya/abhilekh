export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-4 bg-clinic-navy-deep">
      <div className="relative h-14 w-14">
        <span className="absolute inset-0 animate-ping rounded-full border-2 border-clinic-emerald-light opacity-60" />
        <span className="absolute inset-2 rounded-full border-2 border-t-transparent border-clinic-emerald-light animate-spin" />
      </div>
      <p className="font-display text-sm tracking-[0.3em] uppercase text-white/60">
        Dr. Abhilekh
      </p>
    </div>
  );
}
