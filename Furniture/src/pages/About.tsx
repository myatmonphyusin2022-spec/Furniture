function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl text-center">
        <p className="text-primary mb-4 text-sm font-semibold tracking-[0.4em] uppercase">
          Welcome to Furniture House
        </p>
        <h1 className="text-5xl leading-tight font-bold tracking-tight text-slate-600 md:text-7xl">
          Elevate Your Living Space
          <span className="mt-3 block text-slate-600">
            With Timeless Furniture
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
          Furniture designed to bring comfort ,elegance, and functionality into
          every corner of your home.
        </p>
      </section>

      {/* Feature Cards */}
      <section className="mx-auto mt-24 grid max-w-6xl gap-8 md:grid-cols-3">
        <div className="rounded-2xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <h3 className="mb-4 text-2xl font-bold">Premium Quality</h3>

          <p className="leading-7 text-slate-600">
            Crafted with durable materials and exceptional attention to detail
            for lasting beauty.
          </p>
        </div>

        <div className="rounded-2xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <h3 className="mb-4 text-2xl font-bold">Modern Design</h3>

          <p className="leading-7 text-slate-600">
            Elegant collections inspired by contemporary lifestyles and timeless
            interior trends.
          </p>
        </div>

        <div className="rounded-2xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <h3 className="mb-4 text-2xl font-bold">Customer First</h3>

          <p className="leading-7 text-slate-600">
            Dedicated support and a seamless shopping experience from order to
            delivery.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto mt-32 max-w-5xl text-center">
        <p className="text-primary mb-4 text-sm font-semibold tracking-[0.3em] uppercase">
          Our Journey
        </p>

        <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
          More Than Furniture,
          <span className="text-primary mt-2 block">
            We Create Living Experiences
          </span>
        </h2>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 font-light tracking-wide text-slate-500 md:text-2xl">
          Thoughtfully crafted furniture designed to bring comfort and
          sophistication into every home.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-muted mx-auto mt-28 max-w-4xl rounded-3xl p-10 text-center md:p-16">
        <h2 className="text-4xl font-bold">Our Mission</h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          To deliver exceptional furniture and inspire beautiful living spaces
          through quality, affordability, and innovative design.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
