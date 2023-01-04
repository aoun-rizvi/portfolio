
export default function ContentWrapper({ children }) {
  return (
    <main className="flex flex-nowrap flex-col items-center px-0 py-0 w-full bg-black">
      {children}
    </main>
  )
}
