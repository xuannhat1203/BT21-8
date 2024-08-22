import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filePath = path.join(process.cwd(), "database", "product.json");
    const products = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const findIndex = products.findIndex(
      (product: any) => product.id === +params.id
    );

    if (findIndex !== -1) {
      products.splice(findIndex, 1);
      fs.writeFileSync(filePath, JSON.stringify(products), "utf8");
      return NextResponse.json({ message: "Complete Delete" });
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filePath = path.join(process.cwd(), "database", "product.json");
    const products = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const userRequest = await req.json();
    const fileIndex = products.findIndex(
      (product: any) => product.id == +params.id
    );
    if (fileIndex !== -1) {
      products[fileIndex] = { ...products[fileIndex], ...userRequest };
      fs.writeFileSync(filePath, JSON.stringify(products), "utf8");
      return NextResponse.json("Complete Update");
    }
  } catch (err) {
    return NextResponse.json("Error");
  }
}
