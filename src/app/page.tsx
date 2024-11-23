import Accordion from "./components/Accordion";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-4xl font-bold">Piano Tuning Schedule</div>
      <div>
      <Card>
        <Accordion header="test" maxHeight={40}>
          Open
        </Accordion>
      </Card>
      </div>
    </div>
  );
}
