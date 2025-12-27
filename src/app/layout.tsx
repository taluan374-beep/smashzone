import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SmashZone - Sân Chơi Pickleball Trong Nhà Đẳng Cấp",
  description: "Thỏa mãn đam mê bất kể nắng mưa. Sân chuẩn thi đấu, cộng đồng sôi động. Đặt sân Pickleball ngay hôm nay!",
  keywords: ["pickleball", "sân pickleball", "smashzone", "pickleball trong nhà", "đặt sân pickleball"],
  openGraph: {
    title: "SmashZone - Sân Chơi Pickleball Trong Nhà Đẳng Cấp",
    description: "Thỏa mãn đam mê bất kể nắng mưa. Sân chuẩn thi đấu, cộng đồng sôi động.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
