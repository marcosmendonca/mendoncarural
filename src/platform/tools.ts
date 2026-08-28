import type { PlatformTool } from './types';

/**
 * Registry used by the private platform shell.
 * Availability for a specific organization must still be checked server-side
 * against its entitlement before a protected tool is executed.
 */
export const platformTools: PlatformTool[] = [
  {
    key: 'compliance',
    name: 'Conformidade Socioambiental',
    description: 'Análises e monitoramento de conformidade socioambiental.',
    enabled: true,
  },
];

export function getPlatformTool(key: string): PlatformTool | undefined {
  return platformTools.find((tool) => tool.key === key);
}
