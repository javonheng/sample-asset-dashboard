import {
  EnvelopeOpenIcon,
  ArrowLeftOnRectangleIcon,
  FolderIcon,
  HomeIcon,
  CreditCardIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

export const navigation = [
  { name: 'Assets', href: '/assets', icon: HomeIcon, current: true },
  {
    name: 'Invitations',
    href: '/invitations',
    icon: EnvelopeOpenIcon,
    current: false,
  },
  {
    name: 'Asset Sources',
    href: '/assetSources',
    icon: FolderIcon,
    current: false,
  },
  { name: 'Profile', href: '/profile', icon: UserIcon, current: false },
  { name: 'Billing', href: '/billing', icon: CreditCardIcon, current: false },
  {
    name: 'Sign Out',
    href: '/login',
    icon: ArrowLeftOnRectangleIcon,
    current: false,
  },
]
