import { client } from "@/sanity/lib/client";
import ResearchContent from "@/components/ResearchContent";

export const revalidate = 60;

export default async function ResearchPage() {
  const query = `*[_type == "facultyProfile"][0] { publications, conferences, workshopsOrganised }`;
  const data = await client.fetch(query);

  if (!data) return <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>;

  return <ResearchContent data={data} />;
}