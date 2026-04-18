import { JsonLd } from "@/components/schema/json-ld";
import { breadcrumbsForPath } from "@/lib/schema";

export function PageBreadcrumbs({ path }: { path: string }) {
  return <JsonLd data={breadcrumbsForPath(path)} />;
}
