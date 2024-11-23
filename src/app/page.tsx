"use client";
import Accordion from "./components/Accordion";
import Card from "./components/Card";
import DateSection from "./components/DateSection";
import { useCallback, useState } from "react";
import { getDateOfTheWeek } from "./hooks/useDateSection";

export default function Home() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const onDateChange = useCallback((start: Date) => {
    setStartDate(start);
  }, []);
  const weekData = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-4xl font-bold">Piano Tuning Schedule</div>
      <DateSection start={startDate} onDateChange={onDateChange} />
      <div className="flex flex-col gap-2">
      {weekData.map((i: number) => (
        <div key={i}>
          <Card>
            <Accordion
              header={getDateOfTheWeek(startDate, i).toLocaleDateString()}
              maxHeight={40}
            >
              Open
            </Accordion>
          </Card>
        </div>
      ))}
      </div>
    </div>
  );
}
