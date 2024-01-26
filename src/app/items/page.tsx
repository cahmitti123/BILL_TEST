import { Item, columns } from "./columns";
import { DataTable } from "./data-table";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.BASE_URL || "http://localhost:5000/";

async function getData(): Promise<Item[]> {
  try {
    const response = await axios.get(BASE_URL + "item/");
    return response.data as Item[];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function TableSection() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
