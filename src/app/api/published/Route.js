import connectMongoDB from "@/libs/mongodb";
import PublishedBlog from "@/models/PublishedBlog";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, tag, tagImage, readtime, story } = await request.json();
//   await connectMongoDB();
  await PublishedBlog.create({ title, tag, tagImage, readtime, story });
  return NextResponse.json({ message: "Your work has been successfully Published" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const PublishedBlog = await PublishedBlog.find();
  return NextResponse.json({ PublishedBlog });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await PublishedBlog.findByIdAndDelete(id);
  return NextResponse.json({ message: "Your work has been successfully deleted" }, { status: 200 });
}

// {
//     "title":"first title",
//     "tag":"first tag",
//     "tagImage":"tagimage ",
//     "readtime":"time time",
//     "story":"story story",
// }