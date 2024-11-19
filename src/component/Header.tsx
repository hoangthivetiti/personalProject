type Props = {
  idClick: number;
  onItemClick: (id: number) => void;
};

const Array = [
  { id: 1, content: 'Home' },
  { id: 2, content: 'About Us' },
  { id: 3, content: 'Our Projects' },
  { id: 4, content: 'Member' },
  { id: 5, content: 'Contact Us' },
];

export default function Header({ idClick, onItemClick }: Props) {
  return (
    <div className="bg-[#384B38]">
      <div className="flex container mx-auto justify-between text-white h-24 items-center py-10 font-[Epilogue]">
        <p className="text-4xl font-semibold">HoangVe</p>
        <ul className="flex space-x-10 text-2xl ">
          {Array.map((item) => (
            <li
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={idClick === item.id ? 'text-yellow-600' : ''}
            >
              {item.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
