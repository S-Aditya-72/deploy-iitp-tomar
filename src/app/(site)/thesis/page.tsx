import { client } from "@/sanity/lib/client";
import ThesisContent from "@/components/ThesisContent";

export const revalidate = 60;

export default async function ThesisPage() {
  const query = `*[_type == "facultyProfile"][0] { phdStudents, mtechStudents, mscStudents }`;
  const data = await client.fetch(query);

  if (!data) return <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>;

  return <ThesisContent data={data} />;
}