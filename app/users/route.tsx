import { NextResponse } from "next/server";
const listUser = [
  {
    id: 1,
    name: "Xuan Nhat",
    age: 12,
  },
  {
    id: 2,
    name: "Xuan Nhat 2",
    age: 19,
  },
];

export async function GET(req: any) {
  console.log(req, "req");

  const { searchParams } = new URL(req.url);
  const nameUser = searchParams.get("name");
  if (nameUser) {
    const findUser = listUser.filter((user) =>
      user.name.toUpperCase().includes(nameUser.toUpperCase())
    );
    return NextResponse.json({
      message: findUser ? findUser : "Không tìm thấy",
    });
  } else {
    return NextResponse.json({ data: listUser });
  }
}
export async function POST(req: any) {
  const data = await req.json();
  return NextResponse.json({ mess: "Thêm user thành công", data: data });
}
