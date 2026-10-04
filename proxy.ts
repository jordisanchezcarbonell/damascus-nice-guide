import { NextResponse, type NextRequest } from "next/server";
import { hasLocale, matchLocale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (hasLocale(first)) return;

  const locale = matchLocale(request.headers.get("accept-language"));
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals and static files (anything with a dot, e.g. /img/x.jpg)
  matcher: ["/((?!_next|.*\\..*).*)"],
};
