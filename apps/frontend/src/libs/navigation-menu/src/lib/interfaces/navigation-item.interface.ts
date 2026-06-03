export interface NavItem {
  label: string;
  route?: string;      // Optional because a parent item might just open a menu
  icon?: string;       // Optional Material icon name
  children?: NavItem[]; // Optional nested items for dropdowns
}