import Image from "next/image";

export default function Images({ root, number, text }: {
  root: string;
  number: string;
  text: string
}) {
  return (
    <div className="relative grid grid-cols-[minmax(0,10rem)_minmax(0,10rem)] gap-4">
      <div className="space-y-4">
        <Image src={`/${root}-1.jpg`} alt="Chef" width={512} height={640} className="rounded-md" />
        <div className="bg-primary-dark p-4 rounded-md text-background-light flex flex-col text-left">
          <span className="font-display text-2xl font-bold">{number}</span>
          <span className="text-xs">{text}</span>
        </div>
      </div>
      <Image src={`/${root}-2.jpg`} alt="Tablet" width={512} height={896} className="rounded-md mt-8" />
    </div>
  );
}