import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Note from '@/models/note';

// GET single note
export async function GET(request, { params }) {
  try {
    await dbConnect();
    const note = await Note.findById(params.id);
    if (!note) {
      return NextResponse.json({ success: false, error: 'Note not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: note });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// PUT update note
export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const body = await request.json();
    const note = await Note.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!note) {
      return NextResponse.json({ success: false, error: 'Note not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: note });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// DELETE note
export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const note = await Note.findByIdAndDelete(params.id);
    if (!note) {
      return NextResponse.json({ success: false, error: 'Note not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}