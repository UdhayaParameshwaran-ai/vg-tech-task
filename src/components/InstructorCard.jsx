const InstructorCard = ({ image, role, name }) => (
  <div className="text-center">
    <img src={image} alt={name} className="w-20 h-20 rounded-full mx-auto" />
    <p className="text-sm text-gray-500 mt-2 uppercase">{role}</p>
    <h3 className="font-semibold">{name}</h3>
  </div>
);

export default InstructorCard;
