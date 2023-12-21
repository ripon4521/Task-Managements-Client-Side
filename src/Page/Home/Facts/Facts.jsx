const Facts = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
        Join a global movement. Unleash your creativity.
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg items-center text-center text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16">
        Our vibrant community produces content, teaches courses, and leads events all over the world.
        </p>
        {/* Content */}
        <div className="mx-auto flex w-full max-w-4xl flex-col flex-wrap justify-between gap-5 px-16 py-8 sm:flex-row md:gap-6">
          <DataItem title="Blocks" value="200+" />
          <DataItem title="Templates" value="45" />
          <DataItem title="Customers" value="1500+" />
          <DataItem title="Support Tickets" value="890" />
        </div>
      </div>
    </section>
  );
};

const DataItem = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-sm">{title}</p>
      <h2 className="text-3xl font-bold md:text-6xl">{value}</h2>
    </div>
  );
};

export default Facts;
