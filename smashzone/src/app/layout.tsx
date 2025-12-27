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
  description: "SmashZone - Sân Pickleball trong nhà chuẩn thi đấu. Thỏa mãn đam mê bất kể nắng mưa. Đặt sân ngay!",
  keywords: ["pickleball", "sân pickleball", "pickleball trong nhà", "SmashZone", "thể thao"],
  authors: [{ name: "SmashZone" }],
  openGraph: {
    title: "SmashZone - Sân Chơi Pickleball Trong Nhà Đẳng Cấp",
    description: "Thỏa mãn đam mê bất kể nắng mưa. Sân chuẩn thi đấu, cộng đồng sôi động.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
