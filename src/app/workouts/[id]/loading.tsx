export default function WorkoutDetailsLoading() {
  return (
    <main className="min-h-screen bg-[#090a0d] text-white">
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-4
          pb-20
          pt-[100px]
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            mb-6
            h-5
            w-32
            animate-pulse
            rounded
            bg-[#15171e]
          "
        />

        <section
          className="
            grid
            gap-8
            lg:grid-cols-[1fr_1fr]
          "
        >
          <div
            className="
              aspect-square
              animate-pulse
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-[#15171e]
            "
          />

          <div>
            {/* Title */}

            <div
              className="
                h-12
                w-4/5
                animate-pulse
                rounded
                bg-[#15171e]
              "
            />

            <div className="mt-5 space-y-2">
              <div className="h-3 w-full animate-pulse rounded bg-[#15171e]" />
              <div className="h-3 w-5/6 animate-pulse rounded bg-[#15171e]" />
            </div>

            <div className="mt-5 flex gap-2">
              <div className="h-6 w-16 animate-pulse rounded-full bg-[#15171e]" />
              <div className="h-6 w-16 animate-pulse rounded-full bg-[#15171e]" />
            </div>

            <div
              className="
                mt-6
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-[#15171e]
              "
            >
              {Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/5
                    px-4
                    py-4
                    last:border-b-0
                  "
                >
                  <div className="h-3 w-20 animate-pulse rounded bg-[#20232b]" />

                  <div className="h-3 w-24 animate-pulse rounded bg-[#20232b]" />
                </div>
              ))}
            </div>
            <div className="mt-8">
              <div className="h-6 w-32 animate-pulse rounded bg-[#15171e]" />

              <div className="mt-5 space-y-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="h-4 w-4 animate-pulse rounded bg-[#20232b]" />

                    <div className="h-4 flex-1 animate-pulse rounded bg-[#15171e]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}

            <div className="mt-7 flex gap-3">
              <div className="h-11 w-44 animate-pulse rounded-md bg-[#15171e]" />

              <div className="h-11 w-32 animate-pulse rounded-md bg-[#15171e]" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
