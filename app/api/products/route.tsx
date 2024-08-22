import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const userRequest = await req.json();
    const filePath = path.join(process.cwd(), "database", "product.json");
    const products = JSON.parse(fs.readFileSync(filePath, "utf8"));
    products.push(userRequest);
    fs.writeFileSync(filePath, JSON.stringify(products), "utf8");
    return NextResponse.json("Ghi thành công");
  } catch (error) {
    return NextResponse.json("lỗi");
  }
}
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "database", "infor.json");
    const data = fs.readFileSync(filePath, "utf8");
    const products = JSON.parse(data);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(error);
  }
}
