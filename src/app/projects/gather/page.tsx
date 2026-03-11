import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-bold">Gather</h1>
      <p className="text-lg font-semibold">
        Gather: A System To Aid Missing Persons Management
      </p>
      <Separator className="my-4" />
      <div>
        <iframe
          className="w-full h-[270px] md:h-[400px]"
          src="https://www.youtube.com/embed/k7fx3SFPhU4"
          title="Gather: A System to Aid Search for Missing Persons"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="py-4">This system</div>
      </div>
    </>
  );
}
