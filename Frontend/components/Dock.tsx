'use client';

import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import { FolderIcon, HeartIcon, HomeIcon, KeySquare, PlusIcon, SettingsIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const DockBar = () => {
  const pathname = usePathname();
  const isAuthenticated = true;
  const isAdministator = true;

  const links = [
    { href: '/', icon: <HomeIcon className="text-2xl" />, tooltip: 'Home' },
    {
      href: '/collections',
      icon: <FolderIcon className="text-2xl" />,
      tooltip: 'My collections',
      show: isAuthenticated,
    },
    {
      href: '/add-new',
      icon: <PlusIcon className="text-2xl" />,
      tooltip: 'Add new',
      show: isAuthenticated,
    },
    {
      href: '/favorites',
      icon: <HeartIcon className="text-2xl" />,
      tooltip: 'Favorites',
      show: isAuthenticated,
    },
    {
      href: '/settings',
      icon: <SettingsIcon className="text-2xl" />,
      tooltip: 'Settings',
      show: isAuthenticated,
    },
    {
      href: '/admin-panel',
      icon: <KeySquare className="text-2xl" />,
      tooltip: 'Admin panel',
      show: isAdministator,
    },
  ];

  return (
    <Card className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 transform gap-4 rounded-xl border p-4 dark:border-[#717177] md:hidden">
      <div className="flex gap-4">
        {links
          .filter((link) => link.show !== false)
          .map((link, index) => (
            <Button
              key={index}
              className={`bg-transparent hover:bg-default ${
                pathname === link.href ? 'bg-orange-400 text-white hover:bg-orange-400' : ''
              }`}
              as={Link}
              href={link.href}
              isIconOnly
            >
              {link.icon}
            </Button>
          ))}
      </div>
    </Card>
  );
};
