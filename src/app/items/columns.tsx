"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Item = {
  id: string;
  label: string;
  prix_unitaire: number;
  quantite: number;
  isAvailable: boolean;
  description: string;
};

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "id",
    header: "_id",
  },
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "quantite",
    header: "Nb",
  },
  {
    accessorKey: "isAvailable",
    header: "Available",
  },
  {
    accessorKey: "prix_unitaire",
    header: () => <div className="text-right">Prix Unitaire</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("prix_unitaire"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
