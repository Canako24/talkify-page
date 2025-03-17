
const testimonials = [
  {
    content: "Talkify has transformed how I write. As someone with dyslexia, typing has always been a struggle. Now I just speak and watch my thoughts appear on screen with perfect spelling.",
    author: "Alex Morgan",
    role: "Content Creator",
  },
  {
    content: "The accuracy is incredible. I use Talkify for meeting notes and it captures everything perfectly, even with multiple people speaking. It's like having a personal assistant.",
    author: "Sarah Chen",
    role: "Product Manager",
  },
  {
    content: "I switched from another speech-to-text solution and the difference is night and day. Talkify understands my accent and technical terminology without missing a beat.",
    author: "Dr. James Wilson",
    role: "Research Scientist",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-indigo-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by Users Everywhere
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't just take our word for it — hear what our users have to say.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-indigo-500 text-xl">★</span>
                    ))}
                  </div>
                  <blockquote className="flex-grow">
                    <p className="text-lg text-gray-700 italic">"{testimonial.content}"</p>
                  </blockquote>
                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
