// src/app/api/test/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';

export async function GET() {
    try {
        await connectToDatabase();
        return NextResponse.json({ status: 'success', message: 'MongoDB Connected 🎉' });
    } catch (error) {
        return NextResponse.json({ status: 'error', message: error.message });
    }
}
