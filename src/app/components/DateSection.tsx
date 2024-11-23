import { useEffect, useMemo, useState } from "react";
import { getStartOfWeek } from "../hooks/useDateSection";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  start?: Date;
  onDateChange: (start: Date, end: Date) => void;
}
export default function DateSection(props: Props) {
  const [start, setStart] = useState<Date>(getStartOfWeek(props.start ? props.start : new Date()));
  const end = useMemo(() => {
    const today = new Date(start);
    today.setDate(today.getDate() - today.getDay() + 6);
    return today;
  }, [start]);
  useEffect(() => {
    props.onDateChange(start, end);
  }, [start, end, props]);
  return (
    <div className="flex items-center gap-2 select-none">
      <FaChevronLeft
        className="cursor-pointer"
        onClick={() => {
          setStart((s: Date) => {
            const d = new Date(s);
            d.setDate(d.getDate() - 7);
            return d;
          });
        }}
      />
      <div className="w-60 text-center">
        {start.toLocaleDateString()} - {end.toLocaleDateString()}
      </div>
      <FaChevronRight
        className="cursor-pointer"
        onClick={() => {
          setStart((s: Date) => {
            const d = new Date(s);
            d.setDate(d.getDate() + 7);
            return d;
          });
        }}
      />
    </div>
  );
}
