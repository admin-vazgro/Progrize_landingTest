"use client";

export default function FAQSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 px-6 gap-12">

        {/* LEFT SIDE */}
        <div className="pr-6">
          <p className="text-gray-400 uppercase tracking-widest text-xs mb-3"># FAQ</p>

          <h2 className="text-3xl md:text-5xl font-regular tracking-tight text-gray-900 leading-tight mb-6">
            Shoot us the questions
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-md font-light">
            See, We all are open to suggestions and open ears to hear what you guys are saying.
            Let us know your thoughts, concerns and whatever in your mind that will boost your career, 
            skills etc.
          </p>
        </div>

        {/* RIGHT SIDE – FAQ LIST */}
        <div className="border-l border-gray-200 pl-10">

          {faqItems.map((item, index) => (
            <div key={index}>
              <div className="py-10 pr-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {item.question}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {item.answer}
                </p>
              </div>

              {/* Divider except last */}
              {index !== faqItems.length - 1 && (
                <div className="w-full border-t border-gray-200" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* FAQ DATA */
const faqItems = [
  {
    question: "Who are we?",
    answer:
      "See, We all are open to suggestions and open ears to hear what you guys are saying. Let us know your thoughts.",
  },
  {
    question: "What is Progrize built for?",
    answer:
      "Progrize is designed to support your growth, connect you with mentors, and enhance your career-building journey.",
  },
  {
    question: "How can Progrize help me?",
    answer:
      "From personalised CV reviews to meaningful community discussions — Progrize helps shape your progress.",
  },
  {
    question: "Is Progrize free?",
    answer:
      "We aim to keep the core experience accessible. Premium add-ons will always be optional.",
  },
];
