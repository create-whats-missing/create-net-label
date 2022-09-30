import { Nav } from './Nav'

export function Header() {
  return (
    <header className="pa_header fixed top-0 left-0 right-0 flex flex-row justify-between items-center w-full px-6 sm:px-12 backdrop-blur-[12px] z-50 ">
      <Nav />
    </header>
  )
}
