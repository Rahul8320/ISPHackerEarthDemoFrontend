import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { IspModel } from "@/Models/ispModel";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Dialog, DialogTrigger } from "./dialog";
import DetailsPage from "@/Pages/DetailsPage";

export const columns: ColumnDef<IspModel>[] = [
  {
    accessorKey: "logo",
    header: () => <div className="mx-12">Logo</div>,
    cell: ({ row }) => (
      <Avatar className="mx-10">
        <AvatarImage src={row.getValue("logo")} />
        <AvatarFallback>Logo</AvatarFallback>
      </Avatar>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="mx-7">{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(price);

      return <div className="mx-3 font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "rating",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Rating
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const rating = parseFloat(row.getValue("rating"));
      const formatted = rating.toFixed(2);

      return <div className="mx-3 font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const isp = row.original;

      return (
        <div className="text-right">
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() =>
                    window.open(isp.url, "_blank", "noopener,noreferrer")
                  }
                >
                  Open url
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DialogTrigger asChild>
                  <DropdownMenuItem>View details</DropdownMenuItem>
                </DialogTrigger>
                <DropdownMenuItem onClick={async () => await handleShare(isp)}>
                  Share
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DetailsPage id={isp.id} />
          </Dialog>
        </div>
      );
    },
  },
];

const handleShare = async (isp: IspModel) => {
  const shareData = {
    title: `Check out this ISP: ${isp.name}`,
    text: `ISP Name: ${isp.name}\nRating: ${isp.rating} Mbps\n`,
    url: window.location.href,
  };

  try {
    await navigator.share(shareData);
  } catch (err) {
    console.error("Error sharing:", err);
    alert("Web Share API is not supported in your browser.");
  }
};
