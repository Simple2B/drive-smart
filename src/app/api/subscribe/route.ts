import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export async function GET(req: Request) {
  const params = new URLSearchParams(req.url?.split("?")?.[1]);
  const email = params.get("email");

  if (!process.env.GOOGLE_PRIVATE_KEY) {
    throw new Error("Missing GOOGLE_PRIVATE_KEY");
  }
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL");
  }
  if (!process.env.GOOGLE_SHEET_ID) {
    throw new Error("Missing GOOGLE_SHEET_ID");
  }

  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.split(String.raw`\n`).join("\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(
    process.env.GOOGLE_SHEET_ID ?? "",
    serviceAccountAuth
  );

  try {
    if (!email) {
      throw new Error("Missing email");
    }

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({ Email: email });
    sheet.saveUpdatedCells();

    return NextResponse.json({ message: "A ok!" });
  } catch (error) {
    console.error("Google API error -", error);
    return NextResponse.json(error);
  }
}
