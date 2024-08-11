import { Input } from '@nextui-org/input';
import { SearchIcon } from 'lucide-react';
export const SearchBar = () => {
  return (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100 w-full',
        input: 'text-sm w-full',
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
      }
      type="search"
      variant="bordered"
    />
  );
};
