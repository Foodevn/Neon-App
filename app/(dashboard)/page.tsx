"use client";
import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_compoment/empty-org";
import { BoradList } from "./_compoment/board-list";
interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DashBqoardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();

  return (
    <div className="h-full w-full">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoradList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
};
export default DashBqoardPage;
