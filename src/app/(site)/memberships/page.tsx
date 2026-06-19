import { client } from "@/sanity/lib/client";
import MembershipsContent from "@/components/MembershipsContent";

export const revalidate = 60;

export default async function MembershipsPage() {
  const query = `*[_type == "facultyProfile"][0] { memberships }`;
  const data = await client.fetch(query);

  if (!data) return <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>;

  return <MembershipsContent data={data} />;
}