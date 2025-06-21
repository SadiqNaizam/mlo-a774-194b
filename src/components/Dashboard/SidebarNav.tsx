import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  Receipt,
  ShoppingCart,
  Mail,
  Box,
  Calendar,
  HelpCircle,
  Settings
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
  isGroup?: boolean;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '#', isActive: true },
  { id: 'leads', label: 'Leads', icon: Users, href: '#' },
  { id: 'customers', label: 'Customers', icon: User, href: '#' },
  { id: 'proposals', label: 'Proposals', icon: FileText, href: '#', isGroup: true },
  { id: 'invoices', label: 'Invoices', icon: Receipt, href: '#' },
  { id: 'items', label: 'Items', icon: ShoppingCart, href: '#' },
  { id: 'mail', label: 'Mail', icon: Mail, href: '#', isGroup: true },
  { id: 'shoebox', label: 'Shoebox', icon: Box, href: '#' },
  { id: 'calendar', label: 'Calendar', icon: Calendar, href: '#' },
];

const helpAndSettingsItems: NavItem[] = [
  { id: 'help1', label: 'Help', icon: HelpCircle, href: '#' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '#' },
  { id: 'help2', label: 'Help', icon: HelpCircle, href: '#' },
];

const SidebarNav: React.FC = () => {
  return (
    <nav className="flex flex-col h-full text-sm font-medium text-gray-600">
      <div className="flex-grow">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id} className={cn(item.isGroup && 'pt-4')}>
              <a
                href={item.href}
                className={cn(
                  'flex items-center px-3 py-2 rounded-md',
                  item.isActive
                    ? 'bg-accent text-accent-foreground'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                )}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="space-y-1">
        {helpAndSettingsItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className='flex items-center px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700'
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SidebarNav;
