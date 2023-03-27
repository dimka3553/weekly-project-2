type LyListsLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LyListsLayoutProps) {
  return <main className="max-w-[1200px] mx-auto px-5">{children}</main>;
}
