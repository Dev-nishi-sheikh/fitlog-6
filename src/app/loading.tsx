export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090a0d]">
      <div className="flex flex-col items-center justify-center">
        {/* Spinner */}
        <div
          className="
            h-12
            w-12
            animate-spin
            rounded-full
            border-4
            border-white/10
            border-t-[#baff00]
          "
        />

        {/* Text */}
        <p
          className="
            mt-5
            text-xs
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#8d97a8]
          "
        >
          Loading...
        </p>
      </div>
    </main>
  );
}
