interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: [],
  tenantRoles: ['Payroll Administrator', 'Employee', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage sick leave records',
    'Manage user records',
    'Manage company records',
    'Manage employee records',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/1043578d-1566-4f20-aec7-7949fbcb4132',
};
