import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

type ContactMessage = {
    name: string;
    email: string;
    message: string;
};

export async function POST(request: Request) {
    try {
        const body: ContactMessage = await request.json();
        const { name, email, message } = body;

        await prisma.messages.create({
            data: {
                name,
                email,
                message
            }
        });

        return NextResponse.json(
            { message: 'success' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid JSON" },
            { status: 400 }
        );
    }
}