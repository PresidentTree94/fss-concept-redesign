export default function Accordian({ faq, isOpen, onToggle }: {
  faq: { question: string; answer: string; };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`bg-background-light border ${isOpen ? "border-primary-light" : "border-border"} rounded-lg`}>
      <button className="flex items-center justify-between gap-4 px-6 py-5 w-full cursor-pointer" onClick={onToggle}>
        <h3 className="md:text-lg flex-1 text-left text-foreground-dark">{faq.question}</h3>
        <div className={`w-9 h-9 rounded-full ${isOpen ? "bg-primary-dark" : "bg-[oklch(0.95_0.045_135)]"} flex justify-center items-center`}>
          <i className={`${isOpen ? "ri-subtract-line text-background-light" : "ri-add-line text-[oklch(0.5_0.14_135)]"}`}></i>
        </div>
      </button>
      <p className={`px-6 pb-5 text-foreground-light text-sm ${isOpen ? "block" : "hidden"}`}>{faq.answer}</p>
    </div>
  );
}