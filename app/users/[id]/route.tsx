import { NextResponse } from "next/server";
const listUser = [
  {
    id: 1,
    name: "Xuan nhat",
    age: 12,
  },
  {
    id: 2,
    name: "Xuan nhat 2",
    age: 19,
  },
];
export async function GET(req: any, res: any) {
  const find = listUser.find((user: any) => user.id === +res.params.id);
  return NextResponse.json({
    message: find ? find : "Không tìm thấy",
  });
}
export async function DELETE(req: any, res: any) {
  const find = listUser.find((user: any) => user.id === +res.params.id);
  return NextResponse.json({
    message: find ? "xóa thành công" : "Không tìm thấy",
  });
}
export async function PUT(req: any, res: any) {
  const find = listUser.find((user: any) => user.id === +res.params.id);
  return NextResponse.json({
    message: find ? "Cập nhật thành công" : "Không tìm thấy",
  });
}
