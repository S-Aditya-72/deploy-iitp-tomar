import { client } from "@/sanity/lib/client";
import HonoursContent from "@/components/HonoursContent";

export const revalidate = 60;

export default async function HonoursPage() {
  const query = `*[_type == "facultyProfile"][0] { honors }`;
  const data = await client.fetch(query);

  if (!data) return <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>;

  return <HonoursContent data={data} />;
}