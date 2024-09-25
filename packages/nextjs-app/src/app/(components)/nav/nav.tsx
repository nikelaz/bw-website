'use client';

import Container from '../container';
import Logo from '../logo';
import Link from 'next/link';
import styles from './nav.module.sass';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import HamburgerIcon from "@/app/(components)/icons/hamburger";

type NavLinkProps = Readonly<{
  children: React.ReactNode,
  href: string,
  close: Function
}>;

const NavLink = (props: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      onClick={() => props.close()}
      href={props.href}
      className={`${pathname === props.href ? styles.active : ''} py-0 lg:py-2 px-5 lg:px-0 lg:border-b-2 border-transparent transition-colors hover:border-ash600`}
    >
      {props.children}
    </Link>
  );
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef: React.MutableRefObject<HTMLElement | null> = useRef(null);
  const hamburgerBtnRef: React.MutableRefObject<HTMLButtonElement | null> = useRef(null);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    const documentClickHandler = (event: any) => {
      if (
        !event.target
        || !sidebarRef.current
        || !hamburgerBtnRef.current
        || event.target === hamburgerBtnRef.current
        || event.target === sidebarRef.current
        || sidebarRef.current.contains(event.target)
      ) {
        return;
      }

      closeSidebar();
    };

    const keydownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeSidebar();
      }
    }

    document.addEventListener('click', documentClickHandler);
    window.addEventListener('keydown', keydownHandler);

    return () => {
      document.removeEventListener('click', documentClickHandler);
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [setIsOpen]);

  return (
    <header>
      <Container>
        <div
          className="flex items-center justify-between gap-10 py-4 lg:py-7">
          <Logo/>
          <nav
            ref={sidebarRef}
            className={clsx(
              isOpen && styles.open,
              'transition-transform',
              'translate-x-full fixed right-0 top-0 w-40 h-screen py-6 bg-ash100 shadow-xl flex flex-col gap-5 font-medium text-20',
              'lg:relative lg:h-auto lg:w-auto lg:bg-transparent lg:shadow-none lg:gap-10 lg:flex-row lg:translate-x-0'
            )}
          >
            <NavLink close={closeSidebar} href="/">Home</NavLink>
            <NavLink close={closeSidebar} href="/blog">Blog</NavLink>
            <NavLink close={closeSidebar} href="#">Sign In</NavLink>
            <NavLink close={closeSidebar} href="#">Sign Up</NavLink>
          </nav>
          <button className="lg:hidden" ref={hamburgerBtnRef} onClick={openSidebar}>
            <HamburgerIcon className="pointer-events-none" width={40} height={40} />
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Nav;
