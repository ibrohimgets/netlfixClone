import { useState } from "react";
import "./faq.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
const faqData = [
  {
    id: 1,
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    id: 2,
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$6.99 to US$19.99 a month. No extra costs, no contracts.",
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    id: 4,
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    id: 5,
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    id: 6,
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space",
  },
];

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(setIsOpen);
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <div className={`display-area ${isOpen ? "open" : ""}`}>
        {faqData.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAnswer}>
        <h3>{faq.question}</h3>
        <i className={`fas fa-angle-down arrow ${isOpen ? "up" : ""}`} />
        <button className="faq-button" onClick={toggleAnswer}>
          {isOpen ? (
            <AiOutlineClose className="icon" />
          ) : (
            <AiOutlinePlus className="icon" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <span>{faq.answer}</span>
        </div>
      )}
    </div>
  );
}

export default FAQ;
