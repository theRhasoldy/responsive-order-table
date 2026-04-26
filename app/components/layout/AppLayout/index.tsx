import type { ReactNode } from "react";
import ThemeModeSelect from "~/components/widgets/ThemeModeSelect";

type Props = {
  children: ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <>
      <header className="w-full flex justify-end p-4">
        <ThemeModeSelect />
      </header>
      <main className="p-4 min-h-screen-header">{children}</main>
    </>
  );
}

export default AppLayout;
