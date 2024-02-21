import connect from "@/Utils/mongodb";
import DraftBlog from "@/models/DraftBlog";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, tag, tagImage, readtime, story } = await request.json();
  await connect()
  // await PublishedBlog.create({ title, tag, tagImage, readtime, story });
  const newDraftBlog = new DraftBlog({
    title,
    tag,
    tagImage,
    readtime,
    story,
  });

  try {
    await newDraftBlog.save();
    return new NextResponse({ message: "Your work has been successfully Published" }, { status: 201 });
  } catch (err) {
    return new NextResponse(err, { status: 500 });
  }
}

export async function GET() {
  await connect();
  const draftBlog = await DraftBlog.find();
  return NextResponse.json({ draftBlog });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connect();
  await DraftBlog.findByIdAndDelete(id);
  return NextResponse.json({ message: "Your work has been successfully deleted" }, { status: 200 });  
}
