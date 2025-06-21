import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="flex h-16 items-center justify-between border-b bg-background px-6">
      <h1 className="text-3xl font-bold text-foreground">{title}</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Create
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>New Lead</DropdownMenuItem>
          <DropdownMenuItem>New Customer</DropdownMenuItem>
          <DropdownMenuItem>New Proposal</DropdownMenuItem>
          <DropdownMenuItem>New Invoice</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header;
