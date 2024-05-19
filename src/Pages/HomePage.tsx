import { useEffect, useState } from "react";
import { columns } from "@/Components/ui/columns";
import { DataTable } from "@/Components/ui/data-table";
import { IspModel } from "@/Models/ispModel";
import ispService from "@/Services/isp.service";
import { useToast } from "@/Components/ui/use-toast";

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isps, setIsps] = useState<IspModel[]>([]);

  const { toast } = useToast();

  useEffect(() => {
    ispService
      .getAllIsp()
      .then((data) => {
        setIsps(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        toast({
          title: "Failed",
          description: err.message,
        });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="max-w-7xl mx-auto"></div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <DataTable columns={columns} data={isps} />
    </div>
  );
};

export default HomePage;
