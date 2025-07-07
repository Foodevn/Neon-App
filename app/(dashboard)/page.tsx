"use client";
import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_compoment/empty-org";
import { BoradList } from "./_compoment/board-list";
import { useEffect, useState } from "react";

interface DashboardPageProps {
  searchParams: Promise<{
    search?: string;
    favorites?: string;
  }>;
}

const DashBqoardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();
  const [resolvedSearchParams, setResolvedSearchParams] = useState<{
    search?: string;
    favorites?: string;
  }>({});

  useEffect(() => {
    const resolveParams = async () => {
      const params = await searchParams;
      setResolvedSearchParams(params);
    };
    
    resolveParams();
  }, [searchParams]);

  return (
      <div className="h-full w-full">
        {!organization ? (
            <EmptyOrg />
        ) : (
            <BoradList orgId={organization.id} query={resolvedSearchParams} />
        )}
      </div>
  );
};

export default DashBqoardPage;