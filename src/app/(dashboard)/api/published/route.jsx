import connect from "@/Utils/mongodb";
import PublishedBlog from "@/models/PublishedBlog";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, tag, tagImage, readtime, story } = await request.json();
  await connect()
  // await PublishedBlog.create({ title, tag, tagImage, readtime, story });
  const newPublishedBlog = new PublishedBlog({
    title,
    tag,
    tagImage,
    readtime,
    story,
  });

  try {
    await newPublishedBlog.save();
    return new NextResponse({ message: "Your work has been successfully Published" }, { status: 201 });
  } catch (err) {
    return new NextResponse(err, { status: 500 });
  }
}

export async function GET() {
  await connect();
  const publishedBlog = await PublishedBlog.find();
  return NextResponse.json({ publishedBlog });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connect();
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