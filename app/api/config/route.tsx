import path from "path";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "database", "infor.json");
    const data = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(data);
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(error);
  }
}
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const userRequest = await req.json();
    const filePath = path.join(process.cwd(), "database", "infor.json");
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));
    users.push(userRequest);
    fs.writeFileSync(filePath, JSON.stringify(users), "utf8");
    return NextResponse.json("Ghi thành công");
  } catch (error) {
    return NextResponse.json("lỗi");
  }
}
