interface WidgetCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconBg: string;
  textColor: string;
}

export default function WidgetCard({
  title,
  value,
  icon,
  iconBg,
  textColor,
}: WidgetCardProps) {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg border p-5 shadow-sm hover:shadow-md transition duration-200">
      <div>
        <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
        <p className={`mt-1 text-xl font-semibold ${textColor}`}>{value}</p>
      </div>
      <div
        className={`ml-4 p-3 rounded-full flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>
    </div>
  );
}
