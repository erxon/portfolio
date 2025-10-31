export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-zinc-100 dark:bg-zinc-950 m-0">{children}</div>
    </>
  );
}
