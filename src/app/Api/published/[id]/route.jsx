import connect from "@/Utils/mongodb";
// import PublishedBlog from "@/models/PublishedBlog";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newTag: tag, newtagimage: tagImage, readtime: ReadTime, story: Story} = await request.json();
  await connect();
  await Topic.findByIdAndUpdate(id, { title, tag, tagImage, ReadTime, Story });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connect();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}