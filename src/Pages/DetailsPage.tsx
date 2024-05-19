import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@/Components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import { ISP } from "@/Models/isp";
import { Loading } from "@/Components/Custom/Loading";
import ispService from "@/Services/isp.service";
import { useToast } from "@/Components/ui/use-toast";
import { updateApiHits } from "@/store/ispSlice";
import { ToastAction } from "@/Components/ui/toast";

type detailsPageProps = {
  id: string;
};

const DetailsPage = ({ id }: detailsPageProps) => {
  const [ispDetails, setIspDetails] = useState<ISP | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { toast } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    ispService
      .getIspDetails(id)
      .then((data: ISP) => {
        setIspDetails(data);
        dispatch(updateApiHits());
        setLoading(false);
      })
      .catch((err: Error) => {
        dispatch(updateApiHits());
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: err.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (loading === false && ispDetails === null) {
    return (
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ISP Details</DialogTitle>
          <DialogDescription>We don't find any isp details.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    );
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>ISP Details</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <p>{id}</p>
        </div>
        <div className="grid grid-cols-4 items-center gap-4"></div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DetailsPage;
