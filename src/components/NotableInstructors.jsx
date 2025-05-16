import InstructorCard from "./InstructorCard";

const instructors = [
  {
    image: "#",
    role: "Data Analyst",
    name: "Prof. W.J Khatam",
  },
  { image: "#", role: "UX Designer", name: "Prof. Kaif Kofi O" },
  {
    image: "#",
    role: "Software Dev.",
    name: "Prof. Maryam J",
  },
  {
    image: "#",
    role: "Psychologist",
    name: "Mr. Oluwole B.O",
  },
];

const NotableInstructors = () => (
  <section className="py-12 text-center">
    <h2 className="text-3xl font-bold mb-8">Notable Instructors</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
      {instructors.map((inst, i) => (
        <InstructorCard key={i} {...inst} />
      ))}
    </div>
  </section>
);
export default NotableInstructors;
