import connect from "@/Utils/mongodb";
import PublishedBlog from "@/models/PublishedBlog";
// import PublishedBlog from "@/models/PublishedBlog";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newTag: tag, newTagImage: tagImage, newReadtime: readtime, newStory: story } = await request.json();
  await connect();
  try {
    await PublishedBlog.findByIdAndUpdate(id, { title, tag, tagImage, readtime, story });
    return NextResponse.json({ message: "Published Blog updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Published Blog not updated" }, { status: 500 });

  }
}

export async function GET(request, { params }) {
  const { id } = params;
  await connect();
  const published = await PublishedBlog.findOne({ _id: id });
  return NextResponse.json({ published }, { status: 200 });
}

