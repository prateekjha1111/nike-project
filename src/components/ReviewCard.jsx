export default function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-8 sm:py-10 lg:px-6 rounded-lg shadow-xl">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-8 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-12 lg:mr-0 xl:mr-8 xl:origin-center" />
      <div className="mx-auto max-w-sm lg:max-w-sm">
        <figure className="mt-6">
          <blockquote className="text-center text-base font-semibold text-gray-900 sm:text-lg">
            <p>{feedback}</p>
          </blockquote>
          <figcaption className="mt-6">
            <div className="flex justify-center">
              <img
                alt="Customer"
                src={imgURL}
                className="h-16 w-16 rounded-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="font-semibold text-gray-900 text-xl">
                {customerName}
              </div>
              <div className="text-gray-600 text-sm">
                Rating: {rating} <span className="text-coral-red">★</span>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
